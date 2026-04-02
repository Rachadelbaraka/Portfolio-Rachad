# 🚀 Guide de Démarrage — Portfolio BTS SIO

> Comment naviguer et utiliser ce portfolio pour le jury, les recruteurs ou votre propre apprentissage

---

## 👋 Bienvenue !

Vous consultez le **portfolio technique professionnel** de Rachad Hammani, étudiant en **BTS SIO SLAM** (Session 2026).

Ce guide vous explique :
1. Comment **naviguer** dans le portfolio
2. **Où trouver** les informations selon votre profil
3. Comment ce portfolio **valide les compétences BTS**

---

## 👥 Je Suis...

### 🎓 **Un Membre du Jury (BTS E4/E5)**

**Votre chemin :**

1. **D'abord** : Lire ce guide (🟢 Vous êtes ici)
2. **Puis** : Consulter [Tableau de Synthèse CCF](./certifications/tableau-synthese-ccf-e4-e5.md)
3. **Ensuite** : Explorez les 3 blocs de compétences :
   - [BLOC 1 — Support & Services](./documentation/bloc-1-support-services.md)
   - [BLOC 2 — Conception & Développement](./documentation/bloc-2-slam-conception.md)
   - [BLOC 3 — Cybersécurité](./documentation/bloc-3-cybersecurite.md)
4. **Vérifiez** : Un ou plusieurs projets dans [`/projets/`](./projets/)
5. **Validez** : Attestation de stage dans [`/certifications/`](./certifications/)

**Temps estimé :** 30 minutes

**Questions clés évaluation :**
- "Où sont les preuves du BLOC 1 ?" → [Tableau synthèse](./certifications/tableau-synthese-ccf-e4-e5.md)
- "Comment justifier le code ?" → [Projets README](./projets/_TEMPLATE_README.md)
- "Compétence sécurité ?" → [BLOC 3](./documentation/bloc-3-cybersecurite.md)
- "Qu'est ce que Git ?" → [Section Git (BLOC 2)](./documentation/bloc-2-slam-conception.md#6️⃣-maîtriser-git--la-gestion-de-versions)

---

### 💼 **Un Recruteur / Responsable d'Admission**

**Votre chemin :**

1. **D'abord** : [README principal](./README.md) — Vue d'ensemble (2 min)
2. **Puis** : Section "Projets Phares" du README (3 min)
3. **Ensuite** : Choisir 1-2 projets d'intérêt (10-15 min)
4. **Bonus** : Veille technologique ([`./documentation/veille-technologique.md`](./documentation/veille-technologique.md))

**Temps estimé :** 20 minutes

**À retenir :**
- ✅ **Compétences :** Full-Stack (Frontend + Backend + BDD)
- ✅ **Langages :** JavaScript, PHP, Python, SQL
- ✅ **Matérialité :** 15+ projets réalisés, 500+ commits
- ✅ **Responsabilité :** Sécurité, RGPD conscient, code quality

---

### 📚 **Un Étudiant / Autre Personne Intéressée**

**Votre chemin :**

1. **Curiosité technique :** Explorez les projets [`/projets/`](./projets/)
2. **Apprendre :** Articles techniques [`/apprentissage/blog/`](./apprentissage/blog/)
3. **Ressources :** [Guide ressources BTS](./apprentissage/ressources-bts.md)
4. **Codes :** Inspectez le code source (GitHub repo lié)

**Temps estimé :** Open-ended (apprendre à votre rythme)

---

## 🗂️ Structure du Portfolio

```
Portfolio-Rachad/
│
├── 📄 README.md                          ← COMMENCER ICI
│   └── Page d'accueil principale
│
├── 📋 cv/                                ← Votre CV
│   └── CV_Rachad.md, CV.pdf
│
├── 🚀 projets/                           ← Vos réalisations
│   ├── 01-app-gestion-stock/             (Projet 1 : PHP/MySQL)
│   │   └── README.md                     ← Détails complets
│   ├── 02-api-nodejs-rest/               (Projet 2 : Node.js/PostgreSQL)
│   │   └── README.md
│   ├── 03-site-ecommerce-php/            (Projet 3 : PHP/Laravel)
│   │   └── README.md
│   └── _TEMPLATE_README.md               ← Modèle pour tous vos projets
│
├── 📚 documentation/                     ← Doc des 3 blocs BTS
│   ├── bloc-1-support-services.md
│   ├── bloc-2-slam-conception.md
│   ├── bloc-3-cybersecurite.md
│   └── veille-technologique.md
│
├── 📄 certifications/                    ← Preuves officielles
│   ├── tableau-synthese-ccf-e4-e5.md    ← CRUCIAL pour jury
│   ├── attestation-stage-guide.md
│   └── [attestation-stage-2025.pdf]     ← À stocker ici
│
├── 🎓 apprentissage/                     ← Veille & apprentissage
│   ├── ressources-bts.md                ← Guides pratiques
│   ├── outils-et-pratiques.md
│   └── blog/                            ← Vos articles
│       ├── article-1.md
│       └── article-2.md
│
├── 🎨 assets/                            ← Ressources visuelles
│   ├── badges/
│   ├── schemas/
│   └── images/
│
└── .gitignore                            ← Fichiers à ignorer Git
```

---

## 🎯 Navigation Par Profil

### 🎓 Jury BTS E4/E5

**Objectif :** Valider les 3 blocs de compétences

| Profil | Fichier Clé | Durée |
|--------|-------------|-------|
| **Bloc 1** | [`bloc-1-support-services.md`](./documentation/bloc-1-support-services.md) | 10 min |
| **Bloc 2** | [`bloc-2-slam-conception.md`](./documentation/bloc-2-slam-conception.md) + [Projets](./projets/) | 20 min |
| **Bloc 3** | [`bloc-3-cybersecurite.md`](./documentation/bloc-3-cybersecurite.md) | 10 min |
| **Synthèse** | [`tableau-synthese-ccf-e4-e5.md`](./certifications/tableau-synthese-ccf-e4-e5.md) | 5 min |
| **Preuves** | [Attestation stage](./certifications/attestation-stage-guide.md) | 5 min |

**Total :** ~50 min en profondeur

---

### 💼 Recruteur / Responsable Admission (Licence 3, Bachelor, Ingénieur)

**Objectif :** Évaluer le niveau technique et la maturité professionnelle

| Aspect | Fichier | Note |
|--------|---------|------|
| **Vue d'ensemble** | [README](./README.md) principal | Lire en entier |
| **Projets phares** | [README](./README.md) section "Projets" | 2-3 projets max |
| **Code source** | [GitHub repo](https://github.com/rachad-dev) | Inspectez 1-2 projets |
| **Compétences** | [README](./README.md) section tech skills | Vérifier langues |
| **Sérieux** | [Veille tech](./documentation/veille-technologique.md) | Passion démos |

**Total :** ~30 min sufficient

---

### 📚 Étudiant souhaitant Apprendre

**Objectif :** Découvrir des patterns, architectures, best practices

| Sujet | Fichier | À Ne Pas Manquer |
|-------|---------|------------------|
| **Architecture Logicielle** | [BLOC 2](./documentation/bloc-2-slam-conception.md#2️⃣-concevoir-la-solution-applicative) | Pattern MVC, Design Patterns |
| **Sécurité Web** | [BLOC 3](./documentation/bloc-3-cybersecurite.md) | OWASP, JWT, RGPD implémentation |
| **Git Workflow** | [BLOC 2.6](./documentation/bloc-2-slam-conception.md#6️⃣-maîtriser-git--la-gestion-de-versions) | Git Flow, conventional commits |
| **Tests & Qualité** | [BLOC 2.4](./documentation/bloc-2-slam-conception.md#4️⃣-assurer-la-qualité-et-la-maintenance) | Jest, couverture tests |
| **Articles Tech** | [`/apprentissage/blog/`](./apprentissage/blog/) | Lectures progressives |

**Conseil :** Commencez par 1 sujet, explorez en profondeur

---

## 🔍 Comment Trouver Rapidement

### "Comment il ont implémenté l'auth ?"
→ [Fichier `/documentation/bloc-3-cybersecurite.md`](./documentation/bloc-3-cybersecurite.md#2️⃣-sécuriser-les-équipements-et-les-accès) **Section 2.2**

### "Quel est le modèle de données BDD ?"
→ [Fichier `/documentation/bloc-2-slam-conception.md`](./documentation/bloc-2-slam-conception.md#🗄️-modèle-de-données-er) **Schéma ER**

### "Où sont les tests ?"
→ Chaque projet a un dossier pytest ou jest (cf. `_TEMPLATE_README.md`)

### "Comment ils gèrent les secrets (.env) ?"
→ [BLOC 3](./documentation/bloc-3-cybersecurite.md#🔐-variables-denvironnement-sécurisées)

### "Quel est son niveau Git ?"
→ [BLOC 2.6 Git](./documentation/bloc-2-slam-conception.md#6️⃣-maîtriser-git--la-gestion-de-versions) + Vérifier GitHub repo

### "Comment il justifie ses choix techos ?"
→ Chaque projet README explique pourquoi (Express vs Fastify, PostgreSQL vs NoSQL, etc.)

---

## 📖 Lecture Recommandée

### Pour les Pressés ⏱️ (15 min)

1. [README principal](./README.md) — Vue générale
2. [Tableau synthèse](./certifications/tableau-synthese-ccf-e4-e5.md) — Compétences clés
3. 1 projet README — Code example

### Pour les Curieux 🔍 (1 heure)

1. [README principal](./README.md)
2. [BLOC 1](./documentation/bloc-1-support-services.md)
3. [BLOC 2](./documentation/bloc-2-slam-conception.md)
4. [BLOC 3](./documentation/bloc-3-cybersecurite.md)
5. 1-2 projets en détail

### Pour les Approndis 📚 (2-3 heures)

Parcourir tout le portfolio :
- Tous les fichiers `/documentation/`
- Tous les projets `/projets/`
- Articles `/apprentissage/blog/`
- Veille technologique

---

## ✅ Checklist Avant Présentation (Jury)

**Pour bien présenter votre portfolio au jury :**

- [ ] Vous avez lu le [tableau de synthèse](./certifications/tableau-synthese-ccf-e4-e5.md)
- [ ] Vous maîtrisez les 3 blocs (doc + tableau)
- [ ] Vous avez 2-3 projets présentables & documentés
- [ ] Vous pouvez exp pointer votre code (pas juste lire)
- [ ] Vous avez l'attestation de stage à disposition
- [ ] Vous connaissez vos choix techniques (et pourquoi)
- [ ] Git historique explorable (commits clairs)
- [ ] Screenshot / démo de vos projets ready
- [ ] Vous êtes prêt à répondre aux questions de sécurité
- [ ] Portfolio GitHub en ligne et à jour

---

## 🎁 Bonus Tips

**Pour vraiment épater le jury :**

1. ✨ **Ajoutez des vidéos démo** des projets
2. 🎨 **Design professionnel** du README (bien formaté, logos, badges)
3. 📊 **Diagrammes visuels** pour l'architecture
4. 🧪 **Coverage tests élevée** (80%+)
5. 🐙 **GitHub commits réguliers** (pas juste avant l'exam)
6. 📝 **Articles techniques** montrant la réflexion
7. 🌐 **Portfolio en ligne** (live sur vercel, railway, etc.)
8. 🔐 **Sécurité intégrée** (HTTPS, auth, RGPD)
9. 🤝 **Collaboration visible** (PR reviews, issues)
10. 📚 **Documentation impeccable** (pas de fautes, claire)

---

## 📞 Questions Fréquentes

### "Où voir le code ?"
→ Lien GitHub : `github.com/rachad-dev/` (à remplacer par votre compte)

### "Peut-on télécharger ce portfolio ?"
→ Oui : `git clone https://github.com/rachad-dev/Portfolio-Rachad`

### "Comment contribuer / donner du feedback ?"
→ Ouvrir une issue GitHub ou envoyer un email

### "Peut-on utiliser ce template pour mon porfolio ?"
→ Le template est MIT licensed — oui, allez-y !

### "Combien de projets ils faut ?"
→ Minimum 3 bien-documentés, idéal 5-10 pour un bon portfolio

---

## 📫 Contactez-Moi

**Vous avez des questions ?**

- 📧 Email : [rachad@example.com](mailto:rachad@example.com)
- 💼 LinkedIn : [linkedin.com/in/rachad-dev](https://linkedin.com/in/rachad-dev)
- 🐙 GitHub : [@rachad-dev](https://github.com/rachad-dev)
- 🌐 Portfolio : Vous y êtes ! 🎉

---

## 🎓 Bonne Visite !

Merci de visiter mon portfolio. J'espère qu'il vous sera utile pour :

- ✅ Évaluer mes compétences BTS
- ✅ Envisager mon admission en études supérieures
- ✅ Apprendre des patterns et bonnes pratiques
- ✅ Inspirer votre propre portfolio

**Le développement est une passion. J'espère que cela se ressent !** 🚀

---

**Dernière mise à jour :** Avril 2026  
**Version :** 1.0 Stable

*Prêt à explorer ? Commencez par le [README principal](./README.md) 👆*
