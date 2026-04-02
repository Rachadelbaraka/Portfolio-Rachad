# 📚 Ressources & Guides BTS SIO

> Documentation, ressources officiales et guides pratiques pour le BTS SIO  
> Rachad Hammani | 2026

---

## 🎯 Ressources Officielles BTS SIO

### Textes de Référence

| Document | Lien | Description |
|----------|------|-------------|
| **Référentiel de Compétences** | eduscol.education.fr | Définition officielle des 3 blocs |
| **Guide d'Évaluation E4/E5** | academie.gouv.fr | Critères du jury |
| **Textbook BTS SIO** | educmat | Manuel de référence |
| **Decrets & BO** | education.gouv.fr | Textes légaux |

### Organismes Ressource

- 🏛️ **Ministère Éducation** : eduscol.education.fr
- 🎓 **Académie Rhône-Alpes** : ac-lyon.fr (si appliccaire)
- 📖 **Éduscol Technologie** : Documentation techniques
- 💼 **France Compétences** : Frameworks compétences

---

## 💻 Technologies BTS SIO SLAM

### Stack Recommandé pour le Portfolio

**Frontend :**
```
React        — UI framework moderne et industrie
Next.js      — Framework full-stack (optionnel layer)
Tailwind CSS — Styling efficace et responsive
Axios        — HTTP client élégant
```

**Backend :**
```
Node.js      — Runtime JavaScript côté serveur
Express      — Micro-framework web léger
PostgreSQL   — BDD relationnelle professionnelle
Sequelize    — ORM pour Node.js
```

**DevTools & Qualité :**
```
Git          — Version control obligatoire
GitHub       — Collaboration & hosting
Docker       — Conteneurisation (bonus)
Jest         — Framework de tests
ESLint       — Code linting & quality
```

### Alternatives Acceptées

Pour des thèmes différents ou préférences :

| Catégorie | Option 1 | Option 2 | Option 3 |
|-----------|----------|----------|----------|
| **Backend** | Node.js + Express | Python + Django | PHP + Laravel |
| **Frontend** | React | Vue.js | Angular |
| **Database** | PostgreSQL | MySQL | MongoDB |
| **ORM** | Sequelize | Prisma | TypeORM |

> ⚠️ **Important :** Justifier vos choix technologiques dans le README projet !

---

## 📖 Guides Pratiques

### 1️⃣ Concevoir une Architecture

**Étapes clés :**
1. **Analyser les besoins** → User stories
2. **Dessiner l'architecture** → Diagrammes UML/C4
3. **Modéliser les données** → ER diagram normalisé
4. **Prototyper** → Mockups interface
5. **Documenter** → README architecture

**Outils à utiliser :**
- Draw.io / Miro — Diagrammes
- Figma — Wireframes & design
- Lucidchart — Schemas ER
- Git — Versionning

### 2️⃣ Écrire du Code de Qualité

**Principes Clean Code :**
```
- Noms explicites (variables, fonctions)
- Fonctions petites et spécialisées
- DRY (Don't Repeat Yourself)
- SOLID principles
- Comments pour la logique complexe
```

**Format code BTS :**
```javascript
// Fonction bien documentée
/**
 * Crée un nouveau produit en base de données
 * @param {Object} productData - Données du produit
 * @returns {Promise<Product>} Le produit créé
 * @throws {Error} Si SKU déjà existant
 */
async function createProduct(productData) {
  // Validation
  if (!productData.sku) {
    throw new Error('SKU obligatoire');
  }
  
  // Logique métier
  const exists = await Product.findOne({ 
    where: { sku: productData.sku } 
  });
  
  if (exists) {
    throw new Error('Ce SKU existe déjà');
  }
  
  // Create & return
  return await Product.create(productData);
}
```

### 3️⃣ Tester son Application

**Stratégie de tests :**
```
Unit Tests (70%)       : Services, utils, helpers
Integration Tests (20%): API endpoints, DB
E2E Tests (10%)        : Workflows utilisateur

Objectif de couverture : 70%+ minimum
```

**Exemple test Jest :**
```javascript
describe('ProductService', () => {
  it('devrait créer un produit valide', async () => {
    const data = { name: 'Laptop', sku: 'LAP-001' };
    const product = await ProductService.create(data);
    
    expect(product.name).toBe('Laptop');
    expect(product.id).toBeDefined();
  });
  
  it('devrait rejeter SKU doublonné', async () => {
    await ProductService.create({ sku: 'DUPE' });
    
    await expect(
      ProductService.create({ sku: 'DUPE' })
    ).rejects.toThrow('SKU déjà existant');
  });
});
```

### 4️⃣ Sécuriser une Application

**OWASP Top 10 Résumé :**

1. SQL Injection → Utiliser ORM ou requêtes paramétrées
2. XSS → React échappe automatiquement, DOMPurify si HTML
3. CSRF → Tokens CSRF générés & validés
4. Weak Auth → JWT + bcrypt pour mots de passe
5. Sensitive Data → Chiffrement, HTTPS, .env
6. XXE → Pas d'XML parsing non maîtrisé
7. Broken Access → RBAC (Admin, Manager, User)
8. SSRF → Valider URLs, whitelist domaines
9. Outdated Deps → npm audit régulier
10. Logs Insuffisants → Winston, Morgan structurés

**Checklist sécurité :**
- [ ] Authentification implémentée
- [ ] Autorisation par rôles
- [ ] Mots de passe hachés (bcrypt)
- [ ] HTTPS en production
- [ ] CORS configuré
- [ ] Input validation partout
- [ ] Secrets dans .env
- [ ] Dépendances à jour (npm audit)
- [ ] Logs de sécurité
- [ ] RGPD respecté

### 5️⃣ Documenter son Code

**Niveaux de documentation :**

```
Niveau 1 : Commentaires in-code  (// explique pourquoi)
Niveau 2 : JSDoc sur fonctions   (/** @param */)
Niveau 3 : README du projet       (Vue d'ensemble)
Niveau 4 : Wiki / Architecture    (Designs decisions)
Niveau 5 : API docs (Swagger)     (Endpoint details)
```

**What to document :**
- Architecture générale
- Choix technologiques (et pourquoi)
- Setup & installation
- BDD schéma
- API endpoints
- Procédures de déploiement

---

## 🔗 Ressources d'Apprentissage

### Gratuite

- **MDN Web Docs** : https://developer.mozilla.org (JavaScript, HTML, CSS)
- **Node.js Docs** : https://nodejs.org/docs (Officiel)
- **React Docs** : https://react.dev (Officiel)
- **SQL Tutorial** : https://www.w3schools.com/sql
- **Git Basics** : https://git-scm.com/doc
- **Code Academy** : Courses interactifs
- **FreeCodeCamp** : YouTube courses
- **Dev.to** : Articles techniques gratuites
- **OWASP Top 10** : Sécurité

### Certifiée (Payante)

- **Udemy** : Complets & abordables (15-100€)
- **Coursera** : Universités prestigieuses
- **LinkedIn Learning** : Professionnel
- **Pluralsight** : Techno spécialisées

### Cours Recommandés

| Cours | Plateforme | Coût | Durée | Priorité |
|-------|-----------|------|-------|----------|
| Complete Node.js | Udemy | 15€ | 40h | ⭐⭐⭐ |
| React Complete | Udemy | 15€ | 40h | ⭐⭐⭐ |
| PostgreSQL | Coursera | 50€ | 20h | ⭐⭐ |
| OWASP Security | edX | Gratuit | 10h | ⭐⭐⭐ |
| Full-Stack | Multiple | 100-300€ | 200h | ⭐⭐ |

---

## 📚 Lectures Recommandées

### Tech Blogs

- **CSS-Tricks** : Frontend best practices
- **JavaScript Weekly** : News JS hebdo
- **Node.js Blog** : Mises à jour runtime
- **Dev.to** : Communauté diverse
- **Reflex.dev** : Tech digest français

### Livres Incontournables

- 📖 **Clean Code** — Robert C. Martin
- 📖 **The Pragmatic Programmer** — Hunt & Thomas
- 📖 **Design Patterns** — Gang of Four (avancé)
- 📖 **OWASP Testing Guide** — Sécurité
- 📖 **Eloquent JavaScript** — Language JS (gratuit en ligne)

---

## 🛠️ Outils Essentiels BTS

### Locaux (Installation)

| Outil | Utilité | Installation |
|-------|---------|--------------|
| **Node.js** | Runtime JS | nodejs.org |
| **PostgreSQL** | Serveur BDD | postgresql.org |
| **Git** | Versioning | git-scm.com |
| **VS Code** | IDE | code.visualstudio.com |
| **Docker** | Conteneurs | docker.com |

### En ligne (Gratuit/SaaS)

| Service | Utilité | Lien |
|---------|---------|------|
| **GitHub** | Repos & collaboration | github.com |
| **GitHub Pages** | Hosting portfolio | pages.github.com |
| **Vercel** | Deploy frontend | vercel.com |
| **Railway** | Deploy backend full-stack | railway.app |
| **Render** | Backend hosting | render.com |

---

## 🚀 Déploiement & Production

### Option 1 : Hosting Budget (< 50€/mois)

```
Frontend  : GitHub Pages (gratuit)
Backend   : Railway (12€/mois) ou Render (7€/mois)
Database  : PostgreSQL inclus
Domain    : Namecheap (8€/an)
```

### Option 2 : Professionnel (100-300€/mois)

```
Frontend  : Vercel (50€/mois)
Backend   : AWS EC2 (50€/mois)
Database  : AWS RDS (100€/mois)
Domain    : Route53 (0.50€/mois)
```

### Checklist Avant Production

- [ ] Variables d'env configurées (.env)
- [ ] HTTPS activé (SSL/TLS)
- [ ] Connexion BDD sécurisée
- [ ] Logs actifs (monitoring)
- [ ] Backup automatisé
- [ ] Tests passent 100%
- [ ] Dépendances à jour
- [ ] Code review fait
- [ ] Documentation à jour

---

## 📝 Templates Utiles

### Template Projet README

→ Voir `/projets/_TEMPLATE_README.md`

### Template Commit Git

```
feat(scope): description courte (< 50 chars)

Description détaillée si nécessaire, expliquant le "pourquoi"

Fixes #123
```

### Template Issue GitHub

```markdown
## Description
Brève description du problème

## Étapes pour reproduire
1. ...
2. ...

## Comportement attendu
Ce qui devrait se passer

## Captures d'écran
[Joindre les captures]

## Environnement
- OS: 
- Browser:
- Node version:
```

---

## 🎯 Checklist Portfolio Complet

**Avant de soumettre votre portfolio :**

- [ ] README principal accrocheur & complet
- [ ] 3+ projets documentés (via _TEMPLATE_README.md)
- [ ] Compétences des 3 blocs clarifiées
- [ ] Tableau de synthèse CCF E4/E5 complet
- [ ] Attestation de stage jointe
- [ ] Git commits nombreux & sémantiques
- [ ] Blog/articles techniques (2+)
- [ ] Veille technologique documentée
- [ ] Sécurité & tests présents
- [ ] Code visible, lisible, commenté
- [ ] Pas de secrets/credentials exposés
- [ ] Design responsive & professionnel
- [ ] Contact & réseaux sociaux intégrés
- [ ] License mentionnée (MIT)

---

## 🔍 Conseils de Jury

**Ce que le jury recherche :**

✅ **Technique :**
- Code propre et organisé
- Architecture pensée
- Tests & documentation
- Choix technologiques justifiés

✅ **Compétences BTS :**
- 3 blocs clairement identifiés
- Preuves concrètes pour chaque
- Preuves exploratoires détaillées

✅ **Professionnalisme :**
- Portfolio bien présenté
- Communication claire
- Passion pour le craft

✅ **Sécurité & Responsabilité :**
- Conscience RGPD
- Bonnes pratiques appliquées
- E-réputation positive

---

## 💡 Derniers Conseils

**Mindset à Adopter :**

1. **Montrez votre progression :** Du petit script au MVP complet
2. **Justifiez vos choix :** "Pourquoi React ?" → Répondre !
3. **Démontrez la maîtrise :** Pouvez-vous modifier votre code ?
4. **Documentez généreusement** : README bien écrit vaut mille commits
5. **Soyez honnête :** "Je ne sais pas" > babbla vide
6. **Restez humble :** C'est OK de ne pas tout savoir
7. **Montrez l'entusiasme** : La passion transpire !

---

## 🎓 À Retenir

> **Le portfolio n'est pas une vitrine de perfection.**  
> **C'est la preuve de votre **capacité à apprendre, concevoir, développer et communiquer**.**

---

**Dernière révision :** Avril 2026  
**Prochaine mise à jour :** Juin 2026 (Post-exams)

*Bonne chance pour votre BTS SIO ! L'excellence est un parcours, pas une destination.* 🚀
