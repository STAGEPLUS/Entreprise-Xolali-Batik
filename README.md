# 🧶 Documentation - Xolali's Batik

Bienvenue dans la documentation technique et d'utilisation du site **Xolali's Batik**. Ce site est une vitrine premium pour la fabrication de pagnes batik et un centre de formation à Lomé, Togo.

## 🚀 Structure du Site

Le site est composé de plusieurs pages stratégiques :
- **Accueil (`index.html`)** : Présentation globale, slider dynamique et points forts.
- **À Propos (`about.html`)** : Histoire de l'entreprise et valeurs culturelles.
- **Produits (`products.html`)** : Catalogue interactif avec filtres et boutons de commande directe.
- **Formations (`formations.html`)** : Détail des modules d'apprentissage (Initiation, Pro, etc.).
- **Galerie (`gallery.html`)** : Immersion visuelle dans l'atelier.
- **Contact (`contact.html`)** : Formulaire et coordonnées de l'atelier.
- **Inscription (`inscription.html`)** : Fiche dédiée à la pré-inscription aux formations.

---

## 🛠️ Fonctionnalités Clés

### 1. Commande Directe WhatsApp 🛒
Sur la page **Produits**, chaque article possède un bouton **"Commander"**. 
*   **Fonctionnement** : Il ouvre automatiquement WhatsApp sur le numéro configuré (`+228 90 66 06 70`) avec un message pré-rempli identifiant l'article souhaité par le client.

### 2. Assistant Virtuel (Chatbot) 🤖
Une icône robot est présente en bas à droite de chaque page.
*   **Utilisation** : Il aide les visiteurs à naviguer, trouver l'atelier ou s'inscrire rapidement via un système de choix interactifs.

### 3. Formulaires de Contact & Inscription 📩
Les formulaires sont reliés à **Formspree** pour une gestion sans serveur.
*   **Contact** : Reçoit les demandes générales (`https://formspree.io/f/mlgblqrg`).
*   **Inscription** : Reçoit les dossiers de formation (`https://formspree.io/f/mykwprzz`).
*   **Succès** : Une page `success.html` confirme l'envoi à l'utilisateur.

---

## 🎨 Design & Culture (Thème "Batik Pro")

Le design utilise une palette de couleurs inspirée de l'artisanat :
- **Indigo Royal** (`#2E0249`) : Symbole de l'héritage.
- **Terracotta** (`#C05621`) : Chaleur de la terre et de la cire.
- **Gold** (`#D97706`) : Raffinement et prestige.
- **Crème** (`#FFF7ED`) : Fond apaisant rappelant le tissu naturel.

---

## 📝 Guide de Mise à Jour

### Changer un prix ou un produit
1. Ouvrez `products.html`.
2. Recherchez le bloc `<div class="product-card">`.
3. Modifiez le texte dans `<p class="product-price">`.
4. **Important** : Mettez aussi à jour le lien WhatsApp dans le bouton `<a>` pour que le message de commande reflète le bon produit.

### Changer les photos
1. Placez vos nouvelles images dans le dossier `assets/image/`.
2. Dans le code HTML (ex: `index.html`), remplacez l'attribut `src="assets/image/ancienne-photo.jpg"` par `src="assets/image/nouvelle-photo.jpg"`.

### Modifier l'adresse ou le téléphone
- **Adresse** : Présente dans `contact.html` et dans la fonction `initChatWidget` de `assets/js/main.js`.
- **Téléphone** : Présent dans le footer de toutes les pages, la page contact, et les liens WhatsApp (`wa.me/228...`).

---

## 🌐 Déploiement

Le site est statique (HTML/CSS/JS) et optimisé pour **Netlify** ou **Vercel**.
1. Glissez-déposez le dossier racine sur le tableau de bord de votre hébergeur.
2. Le fichier `netlify.toml` est déjà configuré pour assurer les bonnes redirections.

---
*Développé avec passion pour Xolali's Batik.*
