# 🔐 BLOC 3 — Cybersécurité & Protection des Données

> Compétences en sécurité informatique, RGPD et protection des données  
> BTS SIO | Rachad Hammani

---

## 🎯 Présentation du Bloc 3

Le **Bloc 3** regroupe les compétences essentielles en **cybersécurité** et **protection des données personnelles**. À l'ère des cyberattaques et du RGPD, ces compétences sont critiques pour tout développeur responsable.

**Compétences couvertes :**
1. Protéger les données personnelles (RGPD)
2. Sécuriser les équipements et les accès
3. Garantir l'intégrité et la disponibilité des données
4. Assurer la sécurité du développement applicatif

---

## 1️⃣ Protéger les Données Personnelles (RGPD)

### 📋 Principes RGPD

**Les 6 piliers du RGPD :**

| Principe | Description | Application Projet |
|----------|-------------|------------------|
| **Licéité** | Traiter les données de manière légale et transparente | Termes d'usage, consentement explicite |
| **Finalité** | Utiliser les données pour une raison claire | Collecte minimale, pas de réutilisation |
| **Minimisation** | Ne collecter que ce qui est nécessaire | Formules d'inscription épurées |
| **Exactitude** | Maintenir des données à jour et correctes | Validation, audits réguliers |
| **Conservation limitée** | Supprimer après la période d'utilité | Archivage, droit à l'oubli |
| **Intégrité & confidentialité** | Sécuriser les données | Chiffrement, accès restreint |

### 🔏 Implémentation Pratique

**Politique de Confidentialité :**
```markdown
# Politique de Confidentialité

## Données Collectées
- Nom, email (nécessaire pour création compte)
- Mot de passe (hachifié avec bcrypt)
- Logs d'accès (pour audit)

## Durée de Conservation
- Compte utilisateur : Jusqu'à suppression
- Logs d'accès : 90 jours
- Logs de paiement : 7 ans (légal)

## Droits de l'Utilisateur
- Droit d'accès : Export JSON
- Droit à l'oubli : Suppression définitive
- Droit de rectification : Modifier profil
- Droit de portabilité : Export données
```

### 🛡️ Chiffrement & Hachage

**Mots de passe — Utiliser bcrypt :**
```javascript
const bcrypt = require('bcrypt');

// Lors de l'inscription
const hashedPassword = await bcrypt.hash(plainPassword, 10); // 10 = rounds
await User.create({
  email,
  password: hashedPassword // Jamais le mot de passe en clair!
});

// Lors du login - vérification
const isValid = await bcrypt.compare(plainPassword, hashedPassword);
if (!isValid) throw new Error('Mot de passe incorrect');
```

**Données sensibles — Chiffrement AES :**
```javascript
const crypto = require('crypto');

// Chiffrer des données sensibles
function encryptSensitiveData(plaintext, encryptionKey) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-cbc', encryptionKey, iv);
  let encrypted = cipher.update(plaintext, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return iv.toString('hex') + ':' + encrypted;
}

// Déchiffrer
function decryptSensitiveData(encryptedData, encryptionKey) {
  const parts = encryptedData.split(':');
  const iv = Buffer.from(parts[0], 'hex');
  const encrypted = parts[1];
  const decipher = crypto.createDecipheriv('aes-256-cbc', encryptionKey, iv);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}
```

### 📤 Implémentation Droits RGPD

**Endpoint : Exporter ses données (Droit de portabilité)**
```javascript
app.get('/api/account/export', authenticate, async (req, res) => {
  const user = req.user;
  
  // Récupérer toutes les données de l'utilisateur
  const userData = {
    profile: {
      id: user.id,
      email: user.email,
      created_at: user.created_at,
      role: user.role
    },
    products_created: await Product.findAll({ where: { created_by: user.id } }),
    movements: await Movement.findAll({ where: { user_id: user.id } }),
    login_history: await LoginLog.findAll({ where: { user_id: user.id } })
  };
  
  // Générer JSON
  const json = JSON.stringify(userData, null, 2);
  
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Content-Disposition', 'attachment; filename="data-export.json"');
  res.send(json);
});
```

**Endpoint : Droit à l'oubli (Suppression complète)**
```javascript
app.delete('/api/account/delete', authenticate, requirePassword, async (req, res) => {
  const user = req.user;
  const transaction = await sequelize.transaction();
  
  try {
    // Supprimer toutes les données
    await User.destroy({ where: { id: user.id }, transaction });
    await Product.destroy({ where: { created_by: user.id }, transaction });
    
    // Anonymiser les logs (garder la trace sans identifier)
    await Movement.update(
      { user_id: null, reason: 'Anonymisé' },
      { where: { user_id: user.id }, transaction }
    );
    
    await LoginLog.destroy({ where: { user_id: user.id }, transaction });
    
    await transaction.commit();
    
    res.json({ message: 'Compte supprimé définitivement' });
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
});
```

### ✅ Preuves pour le jury

- 📄 Politique de confidentialité : `/docs/politique-confidentialite.md`
- 💾 Implémentation RGPD : `/src/routes/gdpr.js`
- 🧪 Tests des endpoints RGPD : `/__tests__/gdpr.test.js`

---

## 2️⃣ Sécuriser les Équipements et les Accès

### 🔑 Authentification & Autorisation

**Stratégie d'authentification : JWT + Refresh Token**

```javascript
// src/middleware/auth.js
const jwt = require('jsonwebtoken');

// Créer tokens
function generateTokens(user) {
  const accessToken = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }  // Court terme
  );
  
  const refreshToken = jwt.sign(
    { id: user.id },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: '7d' }  // Long terme
  );
  
  return { accessToken, refreshToken };
}

// Middleware de vérification
function authenticate(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) return res.status(401).json({ error: 'Token manquant' });
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token invalide ou expiré' });
  }
}

// Endpoint refresh token
app.post('/api/auth/refresh', (req, res) => {
  const { refreshToken } = req.body;
  
  try {
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    const newAccessToken = jwt.sign(
      { id: decoded.id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    res.json({ accessToken: newAccessToken });
  } catch (error) {
    res.status(401).json({ error: 'Refresh token invalide' });
  }
});
```

### 👥 Contrôle d'Accès Basé sur les Rôles (RBAC)

```javascript
// src/middleware/roles.js
function authorize(allowedRoles) {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Accès refusé' });
    }
    next();
  };
}

// Utilisation dans les routes
app.delete('/api/users/:id',
  authenticate,
  authorize(['Admin']),  // Seuls les admins peuvent supprimer
  userController.delete
);

app.post('/api/products',
  authenticate,
  authorize(['Admin', 'Manager']),  // Admin et Manager peuvent créer
  productController.create
);
```

**Modèle de permissions :**
```
Admin
├─ Gérer tous les utilisateurs
├─ Créer/modifier/supprimer produits
└─ Voir tous les mouvements

Manager
├─ Créer/modifier produits
├─ Voir mouvements de son équipe
└─ Générer rapports

User
├─ Voir produits
├─ Créer mouvements
└─ Voir ses propres logs
```

### 🔐 Variables d'Environnement Sécurisées

**✅ Bonne pratique :**
```bash
# .env (JAMAIS committer)
JWT_SECRET=xxx_vraiment_très_secret_xxx
DB_PASSWORD=my_secure_password_123
STRIPE_KEY=sk_live_xxxxxx

# .env.example (COMMITTER ce modèle)
JWT_SECRET=your_secret_here
DB_PASSWORD=your_db_password
STRIPE_KEY=your_stripe_key
```

**Intégration & charger :**
```javascript
require('dotenv').config(); // Charger .env au démarrage

const jwtSecret = process.env.JWT_SECRET;
if (!jwtSecret) throw new Error('JWT_SECRET manquant!');
```

### 🚪 Logout Sécurisé

```javascript
app.post('/api/auth/logout', authenticate, (req, res) => {
  // Option 1 : Token à partir de liste noire (blacklist)
  // tokenBlacklist.add(req.token);
  
  // Option 2 : Client supprime le token côté frontend
  
  res.json({ message: 'Logout réussi' });
});

// Frontend
async function logout() {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  window.location.href = '/login';
}
```

### ✅ Preuves pour le jury

- 📝 Implémentation auth : `/src/middleware/auth.js`
- 🔑 RBAC : `/src/middleware/roles.js`
- 🧪 Tests authentification : `/__tests__/auth.test.js`

---

## 3️⃣ Garantir l'Intégrité & la Disponibilité

### 💾 Stratégie de Backup

**Politique de sauvegarde :**

```bash
#!/bin/bash
# backup.sh - Sauvegarde quotidienne

BACKUP_DIR="/backups/db"
DB_NAME="stock_app"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

# Créer dump
pg_dump -U postgres $DB_NAME > $BACKUP_DIR/dump_$TIMESTAMP.sql

# Compresser
gzip $BACKUP_DIR/dump_$TIMESTAMP.sql

# Nettoyer (garder 30 derniers jours)
find $BACKUP_DIR -mtime +30 -delete

echo "Backup complété : dump_$TIMESTAMP.sql.gz"
```

**Cron job :**
```
# Backup à 2h du matin tous les jours
0 2 * * * /path/to/backup.sh

# Backup complet le dimanche
0 3 * * 0 /path/to/full-backup.sh
```

### ✔️ Vérification d'Intégrité

```sql
-- Vérifier la cohérence de la BDD
SELECT COUNT(*) AS products_count FROM products;
SELECT COUNT(*) AS movements_count FROM movements;

-- Vérifier les contraintes
SELECT constraint_name, table_name FROM information_schema.table_constraints;

-- Chercher les orphelins (mouvements sans produit)
SELECT m.* FROM movements m
LEFT JOIN products p ON m.product_id = p.id
WHERE p.id IS NULL;
```

### 📊 Monitoring & Alertes

**Monitoring avec Prometheus + Grafana :**
```javascript
// src/metrics.js
const prometheus = require('prom-client');

// Métriques custom
const httpRequestDuration = new prometheus.Histogram({
  name: 'http_request_duration_ms',
  help: 'Duration of HTTP requests in ms',
  labelNames: ['method', 'route', 'status_code']
});

const dbQueryDuration = new prometheus.Histogram({
  name: 'db_query_duration_ms',
  help: 'Duration of DB queries'
});

// Tracker les requêtes
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    httpRequestDuration
      .labels(req.method, req.route.path, res.statusCode)
      .observe(duration);
  });
  next();
});

// Exporter métriques
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', prometheus.register.contentType);
  res.end(await prometheus.register.metrics());
});
```

### 🚨 Plan de Récupération (RTO/RPO)

```markdown
# Disaster Recovery Plan

## RTO (Recovery Time Objective) : 1 heure
Objectif : Restaurer le service dans l'heure après une défaillance

1. Détecter la défaillance (monitoring alertes)
2. Arrêter le service actuel
3. Restaurer la dernière sauvegarde
4. Vérifier l'intégrité
5. Redémarrer le service
6. Valider la fonctionnalité

## RPO (Recovery Point Objective) : 24 heures
Maximum de données acceptables à perdre = 1 jour

- Backup = tous les jours à 2h du matin
- Transactions = loggées et rejouables

## Procédure de Restauration

```bash
# 1. Arrêter l'app
systemctl stop app-stock

# 2. Restaurer la sauvegarde
psql -U postgres stock_app < /backups/db/dump_20260401.sql.gz

# 3. Vérifier
psql -U postgres -d stock_app -c "SELECT COUNT(*) FROM products;"

# 4. Redémarrer
systemctl start app-stock

# 5. Tests
npm run test:smoke  # Tests critiques
```
```

### ✅ Preuves pour le jury

- 💾 Script de backup : `/scripts/backup.sh`
- 📋 DR Plan : `/docs/disaster-recovery.md`
- 📊 Monitoring config : `/docker/prometheus.yml`

---

## 4️⃣ Sécurité du Développement Applicatif

### 🛡️ Prévention des Attaques Courantes

#### SQL Injection

**❌ Mauvaise pratique :**
```javascript
// Vulnérable!
const query = `SELECT * FROM users WHERE email = '${req.body.email}'`;
db.query(query);
```

**✅ Bonne pratique :**
```javascript
// Sécurisé - ORM paramétrise
const user = await User.findOne({
  where: { email: req.body.email }
});

// Ou requêtes paramétrées
const query = 'SELECT * FROM users WHERE email = $1';
db.query(query, [req.body.email]);
```

#### XSS (Cross-Site Scripting)

**❌ Vulnérable :**
```jsx
// Risque XSS - injection JS
function DisplayComment({ text }) {
  return <div dangerouslySetInnerHTML={{ __html: text }} />;
}
```

**✅ Sécurisé :**
```jsx
// React échappe automatiquement les données
function DisplayComment({ text }) {
  return <div>{text}</div>; // Texte brut seulement
}

// Pour du HTML contrôlé, utiliser DOMPurify
function DisplayHTML({ html }) {
  const clean = DOMPurify.sanitize(html);
  return <div dangerouslySetInnerHTML={{ __html: clean }} />;
}
```

#### CSRF (Cross-Site Request Forgery)

**✅ Protection CSRF :**
```javascript
const csrf = require('csrf');
const csrfProtection = csrf({ cookie: false });

// Route GET - générer token
app.get('/form', csrfProtection, (req, res) => {
  res.send(`
    <form method="POST" action="/submit">
      <input type="hidden" name="_csrf" value="${req.csrfToken()}">
      <input type="email" name="email" required>
      <button type="submit">Envoyer</button>
    </form>
  `);
});

// Route POST - vérifier token
app.post('/submit', csrfProtection, (req, res) => {
  // Token vérifié automatiquement
  res.json({ success: true });
});
```

### 🔐 En-têtes de Sécurité HTTP

**Configuration avec Helmet.js :**
```javascript
const helmet = require('helmet');

app.use(helmet());

// CSP (Content Security Policy)
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "https://cdn.jsdelivr.net"],
    styleSrc: ["'self'", "'unsafe-inline'", "https://cdn.jsdelivr.net"],
    imgSrc: ["'self'", "data:", "https:"],
    fontSrc: ["'self'", "data:", "https://fonts.googleapis.com"]
  }
}));

// Autres headers de sécurité
app.use(helmet.referrerPolicy({ policy: 'strict-origin-when-cross-origin' }));
app.use(helmet.hsts({ maxAge: 31536000, includeSubDomains: true }));
```

### ✅ Scan des Vulnérabilités

**Dépendances saines :**
```bash
# Scanner les dépendances pour CVE
npm audit

# Fixer automatiquement les vulnérabilités
npm audit fix

# Vérification stricte en CI/CD
npm audit --audit-level=moderate
```

**SAST (Static Application Security Testing) :**
```bash
# Scan du code avec SonarQube
npm install -D sonarqube-scanner
npm run sonar

# Ou avec npm-check-updates
npm outdated  # Lister les dépendances obsolètes
```

### 🧪 Tests de Sécurité

```javascript
// __tests__/security.test.js
describe('Sécurité Applicative', () => {
  it('devrait refuser SQL injection', async () => {
    const res = await request(app)
      .get('/api/users')
      .query({ search: "' OR '1'='1" });
    
    expect(res.status).not.toBe(500);
    expect(res.body.error).not.toContain('SQL');
  });
  
  it('devrait avoir les headers de sécurité', async () => {
    const res = await request(app).get('/');
    
    expect(res.headers['x-frame-options']).toBeDefined();
    expect(res.headers['x-content-type-options']).toBe('nosniff');
    expect(res.headers['strict-transport-security']).toBeDefined();
  });
  
  it('devrait enforcer CORS correctement', async () => {
    const res = await request(app)
      .get('/')
      .set('Origin', 'https://attacker.com');
    
    expect(res.headers['access-control-allow-origin']).not.toBe('https://attacker.com');
  });
});
```

### ✅ Preuves pour le jury

- 🛡️ Configuration Helmet : `/src/security/helmet-config.js`
- 🧪 Tests sécurité : `/__tests__/security.test.js`
- 📋 Rapport audit npm : `/docs/security-audit.md`

---

## 📚 Checklist Sécurité

- [ ] Mots de passe hachés (bcrypt)
- [ ] Authentification JWT avec expiration
- [ ] RBAC (Rôles) implémenté
- [ ] HTTPS forcé en production
- [ ] CORS configuré restrictivement
- [ ] Variables d'env jamais en clair
- [ ] Parameterized queries (pas de SQL injection)
- [ ] Input validation & sanitization
- [ ] En-têtes de sécurité (Helmet)
- [ ] CSRF tokens
- [ ] Rate limiting
- [ ] Logs de sécurité
- [ ] Backups réguliers testé
- [ ] Dépendances à jour (npm audit)
- [ ] Code review avant déploiement

---

## 📞 Ressources Sécurité

- [OWASP Top 10 2021](https://owasp.org/Top10/)
- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)
- [RGPD Official](https://gdpr-info.eu/)
- [Helmet.js Documentation](https://helmetjs.github.io/)
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)

---

## 🎓 Conclusion

Le **BLOC 3** démontre la conscience que :
- ✅ **La sécurité c'est l'affaire de tous** (devs, admins, utilisateurs)
- ✅ **Les données personnelles méritent du respect** (RGPD)
- ✅ **La prévention est meilleur que la guérison** (par design)
- ✅ **La sécurité n'arrive jamais trop tard** (early & often)

**L'ensemble des compétences du Bloc 3 est intégré et opérationnel.**

---

*Last update: April 2026 | Security is not a feature, it's a culture*
