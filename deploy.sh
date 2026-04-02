#!/bin/bash

# Portfolio GitHub Pages - Setup Script
# Ce script configure et déploie votre portfolio sur GitHub Pages

echo "🚀 Configuration du Portfolio GitHub Pages"
echo "=========================================="
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git n'est pas installé. Installez Git d'abord."
    exit 1
fi

# Variables
BRANCH=$(git rev-parse --abbrev-ref HEAD)
REPO_NAME=$(git rev-parse --short HEAD)

echo "✅ Dépôt Git détecté"
echo "📍 Branche actuelle: $BRANCH"
echo ""

# Step 1: Configuration GitHub Pages
echo "📋 Configuration GitHub Pages"
echo "Assurez-vous que dans Settings > Pages:"
echo "  - Source: main branch / docs folder"
echo "  - Visibility: Public (pour accès public)"
echo ""

# Step 2: Test local
echo "🧪 Test local du site..."
if command -v python3 &> /dev/null; then
    echo "Démarrage serveur sur http://localhost:8000/docs/"
    echo "Appuyez sur Ctrl+C pour arrêter"
    cd docs
    python3 -m http.server 8000
    cd ..
fi

# Step 3: Push to GitHub
echo ""
echo "📤 Prêt à envoyer sur GitHub?"
read -p "Taper 'oui' pour continuer: " confirm

if [ "$confirm" = "oui" ]; then
    echo "Ajout des fichiers..."
    git add .
    echo "Commit..."
    git commit -m "feat: add portfolio website on GitHub Pages (docs/)"
    echo "Push..."
    git push origin main
    echo ""
    echo "✅ Portfolio envoyé!"
    echo "🌐 Accessible sur: https://rachadelbaraka.github.io/Portfolio-Rachad"
    echo ""
    echo "💡 Tips:"
    echo "  - La publication prend 1-2 minutes"
    echo "  - Vérifier Settings > Pages pour statut"
    echo "  - URL peut être customisée avec domaine personnel"
else
    echo "❌ Annulé"
fi
