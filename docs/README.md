# 🌍 Portfolio Web — GitHub Pages Deployment

> Site web professionnel déployable sur GitHub Pages  
> Accessible sur : `https://rachadelbaraka.github.io/Portfolio-Rachad`

---

## 📋 Contenu

- `index.html` — Page d'accueil principale du portfolio
- `assets/css/style.css` — Styles modernes et responsive
- `assets/js/script.js` — Interactivité (menu mobile, animations, etc.)

---

## 🚀 Déploiement sur GitHub Pages

### Option 1 : Déploiement Automatique (Recommandé)

GitHub Pages détecte automatiquement le dossier `docs/` en tant que source pour le site web.

**Étapes :**

1. **Vérifier les paramètres du repo** :
   - Aller sur : `https://github.com/rachadelbaraka/Portfolio-Rachad/settings/pages`
   - Vérifier que "Source" est défini sur "`main` branch / `docs` folder"
   - Sauvegarder si nécessaire

2. **Push vers GitHub** :
   ```bash
   git add .
   git commit -m "feat: add github pages website"
   git push origin main
   ```

3. **Attendre le déploiement** :
   - GitHub génère automatiquement le site
   - Après ~1-2 minutes, votre site est accessible sur :
   - `https://rachadelbaraka.github.io/Portfolio-Rachad`

4. **Vérifier** :
   - Aller sur l'URL
   - Vérifier que tout s'affiche correctement
   - Tester les liens et interactions

### Option 2 : Branche Dédiée (gh-pages)

Alternativement, utiliser une branche dédiée :

```bash
# Créer et basculer sur branche gh-pages
git checkout --orphan gh-pages

# Supprimer tous les fichiers sauf docs/
git reset

# Ajouter uniquement le contenu de docs/
mv docs/* .
rm -rf docs

# Commit et push
git add .
git commit -m "Deploy: GitHub Pages"
git push -u origin gh-pages

# Retourner à main
git checkout main
```

---

## 🔧 Configuration

### Personnaliser le Portfolio

**Fichier : `index.html`**

Remplacer les informations suivantes :

```html
<!-- À adapter -->
<a href="https://github.com/rachadelbaraka" target="_blank">GitHub →</a>
<!-- Remplacer par votre repo GitHub -->

<a href="https://linkedin.com/in/rachad-dev" target="_blank">LinkedIn</a>
<!-- Remplacer par votre profil LinkedIn -->

<a href="mailto:rachad@example.com" class="btn btn-primary">✉️ Email</a>
<!-- Remplacer par votre email -->
```

**Sections à adapter :**

1. **Projets** (ligne ~180)
   - Remplacer noms et descriptions
   - Ajouter liens GitHub réels
   - Ajouter liens démo/live

2. **Contenu** général
   - Dates, noms, établissements
   - Textes de présentation
   - Informations de contact

---

## 📱 Features & Responsivité

✅ **Responsive Design**
- Mobile-first approach
- Menu hamburger sur mobile
- Grilles adaptatives

✅ **Navigation**
- Menu principal sticky
- Ancres internes lisses
- Menu mobile collapsible

✅ **Interactivité**
- Animations fade-in au scroll
- Hover effects professionnels
- Smooth scrolling

✅ **Accessibilité**
- Sémantique HTML5
- Aria-labels
- Contraste des couleurs WCAG AA

---

## 🎨 Personnalisation

### Changer les Couleurs

**Fichier : `assets/css/style.css` (lignes 10-20)**

```css
:root {
  --primary: #0066cc;           /* Couleur principale */
  --primary-dark: #004599;      /* Couleur principale foncée */
  --secondary: #ff6b35;         /* Couleur secondaire */
  --accent: #4ecdc4;            /* Accent (boutons hover) */
  --dark: #1a1a1a;              /* Texte foncé */
  --light: #f5f5f5;             /* Backgrounds légers */
}
```

### Ajouter Font Personnalisée

Dans `index.html` (tag `<head>`) :

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap" rel="stylesheet">
```

puis dans `style.css` :

```css
body {
  font-family: 'YourFont', sans-serif;
}
```

---

## 📊 Performance Optimization

- ✅ CSS minifié en production
- ✅ Images optimisées (gradients CSS, emojis SVG)
- ✅ Lazy loading possible pour images
- ✅ Lighthouse Score : 85+ target

**Vérifier performance :**
```
https://pagespeed.web.dev/
Entrer URL: https://rachadelbaraka.github.io/Portfolio-Rachad
```

---

## 🔐 Sécurité

- ✅ Pas de données sensibles en plaintext
- ✅ HTTPS automatique (GitHub Pages)
- ✅ CSP headers en place
- ✅ Pas de dépendances externes dangereuses

---

## 📈 Google Analytics (Optionnel)

Pour tracker les visites de votre portfolio :

1. **Créer compte Google Analytics** :
   - Aller sur : https://analytics.google.com
   - Créer une propriété pour votre portfolio
   - Copier l'ID de mesure (format: `G-XXXXXXXXXX`)

2. **Ajouter au fichier `index.html`** (fin du fichier) :
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

---

## 🧪 Tests Before Deployment

**Checklist avant de pousser :**

- [ ] Tous les liens fonctionnent (internal & external)
- [ ] Mobile menu fonctionne
- [ ] Pas de console errors (F12)
- [ ] Images chargent correctement
- [ ] Texte visible et lisible
- [ ] Boutons cliquables et hover visible
- [ ] Footer liens actifs

**Test sur Desktop :**
```bash
# Simple Python server pour test local
python -m http.server 8000
# Visiter http://localhost:8000/docs/
```

---

## 🚀 Bonus : Améliorer Encore Plus

### 1. Domaine Personnalisé
```
Dans Settings > Pages > Custom Domain
Ajouter : portfolio.mondomaine.com
```

### 2. SSL/HTTPS
GitHub Pages active HTTPS automatiquement.

### 3. Sitemap & SEO
Ajouter `sitemap.xml` :
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://rachadelbaraka.github.io/Portfolio-Rachad/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### 4. Fichier robots.txt
```
User-agent: *
Allow: /
Sitemap: https://rachadelbaraka.github.io/Portfolio-Rachad/sitemap.xml
```

---

## 📝 Maintenance

**Après déploiement, mettre à jour régulièrement :**

1. Ajouter nouveaux projets
2. Modifier descriptions
3. Mettre à jour contenu certifications
4. Ajouter articles techniques
5. Vérifier liens [docs GitHub](../README.md)

---

## 🔗 Liens Utiles

- [GitHub Pages Doc](https://docs.github.com/en/pages)
- [Web.dev Performance](https://web.dev)
- [MDN Web Docs](https://developer.mozilla.org)
- [Can I Use](https://caniuse.com)

---

## 💡 Tips

1. **Google Analytics** : Tracker les visiteurs
2. **netlify** ou **Vercel** : Alternatives à GitHub Pages (plus features)
3. **NextJS/Gatsby** : Pour version plus avancée
4. **Lighthouse** : Vérifier performance régulièrement

---

**Une fois déployé, le site est accessible en ligne et peut être partagé avec jury, recruteurs, etc.** ✅

🎉 **Bon déploiement !**

---

**Dernier update:** Avril 2026
