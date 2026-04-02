# 🌐 GUIDE DÉPLOIEMENT — Portfolio sur GitHub Pages

> Mettre votre portfolio en ligne en 5 minutes !

---

## ✅ Checklist Pré-Déploiement

Avant de mettre en ligne, vérifiez :

- [ ] Fichier `docs/index.html` existe et est à jour
- [ ] Fichiers CSS et JS présents dans `docs/assets/`
- [ ] Tous les noms/emails/liens personnalisés
- [ ] Liens vers projets GitHub adaptés
- [ ] Logo/favicon personnalisé (optionnel)
- [ ] Pas d'erreurs dans la console (F12)
- [ ] Site responsive (testé sur mobile)
- [ ] Liens externes ouvrent correctes

---

## 🚀 DÉPLOIEMENT EN 3 ÉTAPES

### **ÉTAPE 1 : Configuration GitHub Pages**

1. **Aller sur le repo GitHub** :
   ```
   https://github.com/rachadelbaraka/Portfolio-Rachad
   ```

2. **Settings** (menu supérieur droit) → **Pages**

3. **Vérifier/Configurer** :
   - **Source** : `Deploy from a branch`
   - **Branch** : `main` / folder `/docs`
   - Cliquer **Save**

4. **Attendre** 1-2 minutes pour que GitHub génère le site

---

### **ÉTAPE 2 : Vérifier le Déploiement**

Après 1-2 minutes, accédez à :

```
https://rachadelbaraka.github.io/Portfolio-Rachad
```

✅ Site doit être accessible et fonctionnel

---

### **ÉTAPE 3 : Partager !**

Une fois en ligne, partagez l'URL :

- 🎓 **Jury BTS** : Lien portfolio web
- 💼 **Recruteurs** : Lien GitHub Pages
- 📱 **Réseaux sociaux** : Ajouter dans LinkedIn, Twitter
- 📧 **Email** : Inclure dans signature

---

## 💻 Guide Complet de Mise à Jour

### Si vous voulez tester localement d'abord :

```bash
# 1. Naviguer dans le dossier
cd docs/

# 2. Démarrer serveur Python
python3 -m http.server 8000

# 3. Ouvrir navigateur
open http://localhost:8000
# ou http://127.0.0.1:8000

# 4. Arrêter avec Ctrl+C
```

### Pour envoyer les changements vers GitHub :

```bash
# 1. Vérifier les changements
git status

# 2. Ajouter fichiers modifiés
git add docs/

# 3. Créer commit
git commit -m "update: portfolio website [description changement]"

# 4. Envoyer vers GitHub
git push origin main

# 5. Attendre 1-2 minutes
# 6. Rafraîchir le site : F5
```

---

## 🎨 Personnaliser le Site

### Changer la Couleur Principale

**Fichier** : `docs/assets/css/style.css` (ligne 10)

```css
--primary: #0066cc;  /* Remplacer par votre couleur */
```

Couleurs suggerées :
- Bleu tech : `#0066cc`
- Orange énergétique : `#ff6b35`
- Vert moderne : `#00b894`
- Violet créatif : `#6c5ce7`

### Modifi er les Textes

**Fichier** : `docs/index.html`

Chercher et remplacer :
- Mon nom → Votre nom
- Mon email → Votre email
- Mes projets → Vos projets

### Ajouter Image ou Logo

1. Ajouter fichier image dans `docs/assets/`
2. Référencer dans `index.html` :
   ```html
   <img src="assets/mon-image.png" alt="Description">
   ```

---

## 🔗 Lier le Site Web à votre Repository

Dans le **README.md** principal (racine) :

```markdown
## 🌐 Portfolio Web

Le portfolio est accessible en ligne sur :

🔗 **[Portfolio Web Version](https://rachadelbaraka.github.io/Portfolio-Rachad)**

Version complète avec documentation :[Portfolio GitHub](./README.md)
```

---

## 📱 Vérifier la Qualité

### Performance - Lighthouse Score

1. Aller sur : https://pagespeed.web.dev/
2. Entrer votre URL : `https://rachadelbaraka.github.io/Portfolio-Rachad`
3. Lancer rapport
4. Objectif : **75+ pour chaque catégorie**

```
✅ Performance: 80+
✅ Accessibility: 75+
✅ Best Practices: 80+
✅ SEO: 85+
```

### Mobile-Friendly Test

1. Outils Google : https://search.google.com/test/mobile-friendly
2. Entrer URL portfolio
3. Doit être "Mobile-Friendly"

### W3C Validation

1. https://validator.w3.org/
2. Entrer URL
3. Zéro erreur, quelques warnings OK

---

## 🆘 Dépannage

### **Le site n'apparaît pas après 5 min ?**

1. Vérifier Settings > Pages > Source (doit être `main / docs`)
2. Vérifier fichier `index.html` existe dans `docs/`
3. Vérifier `.gitignore` n'exclut pas `docs/`
4. Attendre quelques minutes supplémentaires

**Solution :**
```bash
# Force rebuild
git add .
git commit --allow-empty -m "rebuild: force pages update"
git push origin main
```

### **CSS/JS ne chargent pas ?**

Vérifier les chemins dans `index.html` :
```html
<!-- ❌ Mauvais -->
<link rel="stylesheet" href="style.css">

<!-- ✅ Correct -->
<link rel="stylesheet" href="assets/css/style.css">
```

### **Images cassées ?**

1. Vérifier fichiers existent dans `docs/assets/`
2. Vérifier chemins dans HTML
3. Utiliser HTTPS (pas HTTP)

---

## 🎁 Extras

### Domaine Personnalisé (Plus Pro)

Si vous avez un domaine personnel :

1. Acheter domaine (Namecheap, GoDaddy, etc.)
2. Dans repo Settings > Pages > Custom Domain
3. Ajouter votre domaine
4. Suivre instructions DNS

### Email Bio Portfolio

Exemple à incorporer dans email ou LinkedIn :

```
📬 Portfolio: https://rachadelbaraka.github.io/Portfolio-Rachad
💼 GitHub: https://github.com/rachadelbaraka
📋 BTS Tableau: [lien tableau synthèse]
```

### Badge dans README

```markdown
[![Portfolio](https://img.shields.io/badge/Portfolio-Online-brightgreen?style=flat-square)](https://rachadelbaraka.github.io/Portfolio-Rachad)
```

---

## 📊 Monitoring & Analytics

### Google Analytics (Optionnel)

Savoir qui visite votre portfolio :

1. https://analytics.google.com → Créer compte
2. Copier ID de mesure (`G-XXXXXXXXXX`)
3. Ajouter code au bas de `index.html` (voir doc GitHub Pages)
4. Consulter insights après quelques visites

---

## 📝 Après Déploiement

**À faire régulièrement :**

1. ✅ Vérifier liens actifs
2. ✅ Mettre à jour projets
3. ✅ Vérifier perf (Lighthouse)
4. ✅ Tester sur mobile
5. ✅ Partager nouveaux articles

---

## ✨ Résumé

| Étape | Temps | Étape |
|-------|-------|-------|
| 1. Configurations GitHub Pages | 2 min | Settings > Pages |
| 2. Pousser code vers GitHub | 2 min | `git push` |
| 3. Attendre build | 2 min | GitHub processing |
| 4. Vérifier site en ligne | 1 min | Rafraîchir page |
| **TOTAL** | **~7 min** | **Site Live!** |

---

## 🎉 Félicitations !

Votre portfolio est maintenant **en ligne** et accessible au monde entier !

```
🌐 https://rachadelbaraka.github.io/Portfolio-Rachad
```

Partagez-le avec :
- ✅ Jury BTS
- ✅ Recruteurs études sup
- ✅ Amis & famille
- ✅ Réseaux sociaux

---

**Questions ?** Consulter:
- [Documentation GitHub Pages](https://docs.github.com/en/pages)
- [Fichier README.md](/docs/README.md) (guide technique)
- Ou demander assistance

---

*Dernière mise à jour : Avril 2026*

**Bon déploiement ! 🚀**
