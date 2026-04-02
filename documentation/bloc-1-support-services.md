# 🔧 BLOC 1 — Support et Mise à Disposition de Services Informatiques

> Compétences en support utilisateur, gestion d'infrastructure et présence en ligne  
> BTS SIO | Rachad Hammani

---

## 🎯 Présentation du Bloc 1

Le **Bloc 1** regroupe l'ensemble des compétences liées à la **mise à disposition et au support** informatique. C'est le "service client" côté IT.

**Compétences couvertes :**
1. Gérer le patrimoine informatique
2. Répondre aux incidents et demandes d'assistance
3. Développer la présence en ligne
4. Assurer la continuité de service
5. Organiser son développement professionnel

---

## 1️⃣ Gérer le Patrimoine Informatique

### 📋 Définition

**Patrimoine informatique** = Tous les équipements, logiciels, données et services IT d'une organisation.

### 🏗️ Composantes Gérées

**Matériel :**
- Serveurs (hardware spécifications)
- Postes de travail (desktops, laptops)
- Réseau (switches, routeurs, câbles)
- Stockage (disques, NAS, baies)

**Logiciel :**
- Système d'exploitation
- Licences (commercial, open-source)
- Dépendances (npm packages, libraries)
- Configurations & paramètres

**Données :**
- Documents, archives
- BDD et sauvegardes
- Configurations applicatives
- Métadonnées d'utilisation

**Services :**
- Serveurs web/API
- VPN, accès distants
- Email & communication
- Cloud services (SaaS)

### 📝 Mise en Pratique : Inventaire Technique

**Document à créer :** `/docs/INVENTAIRE_PATRIMOINE.md`

```markdown
# Inventaire Patrimoine Informatique

## Serveurs

| Serveur | OS | CPU | RAM | Rôle |
|---------|----|----|-----|------|
| srv-web-01 | Ubuntu 20.04 | 2x Intel Xeon | 16 GB | Frontend hosting |
| srv-api-01 | Ubuntu 20.04 | 2x Intel Xeon | 32 GB | Backend API |
| srv-db-01 | Ubuntu 20.04 | 4x Intel Xeon | 64 GB | PostgreSQL (Primary) |
| srv-db-02 | Ubuntu 20.04 | 4x Intel Xeon | 64 GB | PostgreSQL (Replica) |

## Logiciels Critiques

| Appli | Version | Licence | Support | EOS |
|-------|---------|---------|---------|-----|
| PostgreSQL | 14.2 | Open Source | Ubuntu LTS | 2026-11 |
| Node.js | 18.14 LTS | MIT | nodejs.org | 2025-04 |
| React | 18.x | MIT | Facebook | Active |
| nginx | 1.20 | BSD-2 | nginx.org | Active |

## Dépendances Applicatives

### Backend (Node.js)
- express@4.18.x - Framework web
- sequelize@6.x - ORM PostgreSQL
- bcrypt@5.x - Hachage mots de passe
- jsonwebtoken@9.x - Authentification
- dotenv@16.x - Configuration env
- winston@3.x - Logging
- [... 20+ autres packages]

### Frontend (React)
- react@18.x - UI Framework
- react-dom@18.x - DOM rendering
- axios@1.x - HTTP client
- tailwindcss@3.x - Styling
- react-router-dom@6.x - Routing
- [... 15+ autres packages]

## Sauvegardes & Archivage

| Donnée | Mécanique | Fréquence | Rétention | Localisation |
|-------|-----------|-----------|-----------|--------------|
| BDD Prod | pg_dump + gzip | Quotidienne (2h) | 30 jours | /backups/db/ |
| Code Source | Git push | Continu | Infini | GitHub |
| Logs App | Rotation max 5 GB | Continu | 90 jours | /var/log/app/ |
| Configs | Git (privé) | À chaque change | Infini | GitHub Private |
```

### ✅ Documentation Patrimoine

**À inclure dans votre portfolio :**
- 📊 Inventaire matériel & logiciel
- 📦 Dépendances listées (avec versions)
- 💾 Stratégie backup & archivage
- 🔐 Secureity patches schedule
- 📈 Capacité & scalabilité plan

---

## 2️⃣ Répondre aux Incidents et Demandes d'Assistance

### 🚨 Cycle de Support

**Processus ITIL Simplifié :**

```
1. SIGNALER
   └─ Utilisateur crée ticket via portail

2. RECEVOIR
   └─ Équipe support reçoit & triage

3. ANALYSER
   └─ Diagnostic du problème ("5 pourquoi")

4. RÉSOUDRE
   └─ Appliquer correction / workaround

5. VALIDER
   └─ Utilisateur valide la résolution

6. DOCUMENTER
   └─ Ajouter à la KB, clôturer ticket

7. PRÉVENIR
   └─ Améliorer process pour éviter récurrence
```

### 💬 Exemple Réel : Ticket de Support

**Ticket #1047 — Page Produits Lente**

```
SIGNALEMENT
├─ Date : 2026-03-15 09:30
├─ Utilisateur : Marie (responsable web)
├─ Sévérité : Haute (impact clients)
└─ Description : "Page produits met 5s à charger, clients perdus"

DIAGNOSTIC
├─ Analyse logs : Performance dégradée depuis 10h
├─ Vérification DB : Query mal optimisée (N+1 queries)
├─ État serveur : CPU 85%, mémoire 90% utilisée
└─ Root cause : Requête SQL sans pagination, 50K produits chargés

RÉSOLUTION
├─ Rapide (30 min) : Pagination implémentée en frontend
├─ Complète (2h) : Requête DB optimisée + index créé
│   └─ Commit : "perf(queries): eager load + add index"
└─ Résultat : Temps de charge 5s → 200ms ✅

DOCUMENTATION
├─ Ticket clôturé
├─ Article KB créée : "N+1 Query Problem"
├─ Alerte de monitoring ajoutée
└─ Code review faite pour prévention

PRÉVENTION
└─ Checklist performance ajoutée avant déploiement
```

### 📞 Outils de Support Typiques

| Catégorie | Exemple | Utilité | Intégration |
|-----------|---------|---------|-------------|
| **Ticketing** | Jira, Trello, GitHub Issues | Tracker problèmes | ✅ Intégrable |
| **Monitoring** | Datadog, NewRelic, Sentry | Alertes proactives | ✅ Intégrable |
| **Escalade** | Email, Slack, Teams | Notifier l'équipe | ✅ Intégrable |
| **Documentation** | Confluence, Wiki, MD files | Base de connaissance | ✅ Git-friendly |
| **Communication** | Slack, Discord, Email | Collaboration | ✅ Possible |

### ✅ Preuves pour le Jury

- 📋 **Processus documenté** → `/docs/support-process.md`
- 🎫 **Exemples tickets** → `/docs/ticket-examples.md`
- 📊 **Statistiques support** → `X tickets traités par mois`
- 📈 **Temps moyen résolution** → Métrique MTTR
- 🧠 **Knowledge Base** → `/docs/kb/` avec solutions

---

## 3️⃣ Développer la Présence en Ligne

### 🌐 Champs d'Action

**Application Web Accessible :**
```
1. Design Responsif
   └─ Fonctionne desktop, tablette, mobile

2. Performance
   └─ Temps de chargement <3s (Lighthouse 75+)

3. Accessibilité
   └─ WCAG AA, alt-text, clavier navigable

4. SEO
   └─ Meta tags, structure H1-H6, URLs claires

5. Sécurité
   └─ HTTPS, CORS, CSRF protection

6. Disponibilité
   └─ Uptime 99%+ avec monitoring
```

### 🚀 Déploiement & Mise en Ligne

**Checklist déploiement :**
```
✅ Code testé (100% critical paths)
✅ Secrets (.env) configurés & sécurisés
✅ BDD migrated & validée
✅ Certificats SSL valides
✅ Redirects 301 en place (old URLs)
✅ CDN configuré (images, CSS, JS)
✅ Error tracking (Sentry) en place
✅ Monitoring actif (Datadog)
✅ Backups vérifiées de dernière backup
✅ Rollback plan documenté
```

### 📊 Optimisation Web

**Votre portfolio en ligne :**
- 🟢 **Deploy** : GitHub Pages, Vercel, Railway
- ⚡ **Speed** : Lighthouse Score 80+ minimum
- 🔒 **Security** : HTTPS, security headers
- 📱 **Responsive** : Mobile-first design
- ♿ **Accessibility** : WCAG AA compliance

**Exemple Lighthouse Report :**
```
Performance:    92/100  ✅
Accessibility:  88/100  🟡
Best Practices: 95/100  ✅
SEO:            98/100  ✅
PWA:            86/100  🟡
```

### ✅ Preuves pour le Jury

- 🌍 **App en ligne** : `https://votre-domaine.com` accessible
- 📊 **Rapport Lighthouse** : > 75 score sur chaque catégorie
- 📈 **Monitoring** : Uptime > 99%, alertes actives
- 🔄 **Mises à jour** : Déploiements réguliers visibles
- 📱 **Responsive** : Testé sur mobile/tablette/desktop

---

## 4️⃣ Assurer la Continuité de Service

### 🛡️ Éléments Clés

**RTO & RPO :**
```
RTO (Recovery Time Objective)
└─ Temps maximum acceptable pour restauration
   └─ Exemple : "Restaurer en 1 heure"

RPO (Recovery Point Objective)
└─ Données maximum acceptables à perdre
   └─ Exemple : "Perte max 24h de données"
```

**Plan de Récupération :**
```
1. DÉTECTION DÉFAILLANCE
   ├─ Monitoring détecte anomalie
   ├─ Alerte envoyée (email, SMS, téléphone)
   └─ Équipe mobilisée

2. DIAGNOSTIC
   ├─ Cause identifiée (hardware, logiciel, réseau)
   ├─ Escalade si nécessaire
   └─ Plan d'action défini

3. CORRECTION
   ├─ Service restauré / redémarré
   ├─ Validations check faites
   └─ Monitoring confirmé OK

4. POST-MORTEM
   ├─ Analyse root cause
   ├─ Mesures préventives identifiées
   └─ Documentation mise à jour
```

### 💾 Stratégie Backup

**3-2-1 Backup Rule :**
```
3 copies des données
└─ Production + 2 backups

2 types de médias
└─ Disque local + Cloud distant

1 backup off-site
└─ Géographiquement isolé
```

**Implémentation :**
```bash
# Backup local quotidien (cron job)
0 2 * * * pg_dump stock_db > /backups/local/dump-$(date +%Y%m%d).sql

# Compression & archivage
0 3 * * 0 tar -czf /backups/archive/week-$(date +%Y-W%V).tar.gz /backups/local/

# Upload cloud (AWS S3, Backblaze, etc.)
0 4 * * * aws s3 sync /backups/archive/ s3://my-backup-bucket/

# Cleanup local (garder 30 jours)
30 5 * * * find /backups/local/ -mtime +30 -delete
```

### 🧪 Test de Récupération

**Procédure de test monthly :**
```
1. Sélectionner sauvegarde aléatoire
2. Restaurer sur serveur test
3. Valider intégrité des données
4. Tester accès applicatif
5. Documenter le résultat
6. Alerter équipe si problème
```

### ✅ Preuves pour le Jury

- 📋 **RTO/RPO documenté** : Voir `/docs/disaster-recovery-plan.md`
- 💾 **Backups en place** : Scripts cron, archivage, off-site
- ✔️ **Tests réguliers** : "Dernière restauration vérifiée : [date]"
- 📊 **Monitoring actif** : Dashboard visible, alertes en place
- 📈 **Uptime > 99%** : Prouvé par monitoring historique

---

## 5️⃣ Organiser Son Développement Professionnel

### 🎓 Veille Technologique

**Canaux de veille :**

```
📰 Blogs & Newsletters (Hebdo)
├─ JavaScript Weekly
├─ React Newsletter
├─ Dev.to Best Articles
└─ Node.js Blog

🔐 Sécurité (Hebdo)
├─ OWASP Email
├─ npm Security Advisories
├─ GitHub Security Alerts
└─ CVE Databases

💼 Communautés (Mensuel)
├─ Meetup Tech (local)
├─ Conférences en ligne
├─ Stack Overflow Tags
└─ GitHub Trending

📚 Cours & Certifications (Trimestriel)
├─ Udemy: Node.js Avancé
├─ Coursera: Sécurité Web
└─ Pluralsight: DevOps
```

**Preuve de veille :**
→ [Voir documentation complète](./veille-technologique.md)

### 💬 E-Réputation & Networking

**Présence profesionnelle :**

| Canal | Objectif | Fréquence | Preuve |
|-------|----------|-----------|--------|
| **LinkedIn** | Profil complet à jour | Mensuel | Profil public |
| **GitHub** | Contributions publiques | Hebdo/continu | Repo public + commits |
| **Blog/Dev.to** | Partager connaissances | Mensuel | Articles publiés |
| **Stack Overflow** | Répondre & aider | Hebdo | Réputation & badges |
| **Conférences** | Apprendre & networking | Trimestriel | Photos/certificats |

### 🛠️ Formation Continue

**Objectifs annuels :**
- ✅ 2+ certifications complétées
- ✅ 10+ articles techniques lus/écrits
- ✅ 100+ heures d'apprentissage
- ✅ 1+ langages/frameworks nouveaux explorés

**Preuve :**
```markdown
## 2025-2026 Apprentissage

### Certifications Complétées
- ✅ Complete Node.js Course (Udemy)
- ✅ PostgreSQL Advanced (Coursera)

### Articles Écrits
- 📝 React Hooks Deep Dive
- 📝 PostgreSQL Performance Tuning
- 📝 Docker Best Practices

### Heures Apprentissage
- 60h Cours en ligne
- 40h Reading (blogs, docs officiel)
- 30h Exercices/projets personnels
```

### ✅ Preuves pour le Jury

- 📚 **Veille documentée** : [`./documentation/veille-technologique.md`](./documentation/veille-technologique.md)
- 💼 **E-réputation** : LinkedIn, GitHub, articles visibles
- 🎓 **Formations** : Certificats, cours complétés
- 📝 **apprentissages partagem** : Articles techniques publiées
- 🤝 **Community involvement** : Stack Overflow, meetups, contributions

---

## 📊 Synthèse Bloc 1

### Compétences & Preuves

| Compétence | Niveau | Preuve Portfolio |
|-----------|--------|------------------|
| Gérer patrimoine | ⭐⭐⭐ | `/docs/INVENTAIRE_PATRIMOINE.md` |
| Support incidents | ⭐⭐⭐ | `/docs/ticket-examples.md` |
| Présence en ligne | ⭐⭐⭐ | Portfolio live + Lighthouse 80+ |
| Continuité service | ⭐⭐ | `/docs/disaster-recovery-plan.md` |
| Développement pro | ⭐⭐⭐ | `/documentation/veille-technologique.md` |

### Indicateurs de Maîtrise

✅ **Patrimoine bien documenté**
- Inventaire complet
- Licences listées
- Dépendances versionnées

✅ **Support structuré**
- Processus clair
- Tickets tracés (GitHub Issues)
- KnowledgeBase maintenude

✅ **Présence en ligne pro**
- Site/app en production
- Performance optimisée
- Accessible & sécurisé

✅ **Récupération documentée**
- Backups automatisés
- Tests réguliers
- Plan accessible

✅ **Apprentissage actif**
- Veille régulière prouvée
- Articles/communications
- Réseau professionnel

---

## 🎓 Conclusion

Le **BLOC 1** démontre votre capacité à :
- ✅ **Supporter** les utilisateurs professionnellement
- ✅ **Gérer** l'infrastructure informatique
- ✅ **Assurer** la disponibilité des services
- ✅ **Développer** vos compétences en continu
- ✅ **Communiquer** techniquement

**Ces compétences sont essentielles pour le support, le DevOps, et tout rôle client-facing en IT.**

---

*Dernière mise à jour : Avril 2026*
