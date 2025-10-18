# 🚀 Portfolio - Rahim ALI

Portfolio personnel moderne et interactif construit avec Next.js 15, React 19, TypeScript et Tailwind CSS.

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15.5.5-black)
![React](https://img.shields.io/badge/React-19.1.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-4.x-38bdf8)

## ✨ Fonctionnalités

- 🌓 **Dark/Light Mode** - Système de thème complet avec persistance
- 🌍 **i18n** - Support multilingue (Anglais/Français)
- 🖱️ **Mouse Effect** - Effet de gradient interactif qui suit le curseur
- 📱 **Responsive Design** - Optimisé pour tous les appareils
- ⚡ **Performance** - Optimisé avec Next.js App Router et React Server Components
- ♿ **Accessible** - Conforme aux standards WCAG
- 🎨 **Design Moderne** - Inspiré par Brittany Chiang

## 🛠️ Technologies

- **Framework** : Next.js 15.5.5 (App Router)
- **UI Library** : React 19.1.0
- **Language** : TypeScript 5.x
- **Styling** : Tailwind CSS 4.x
- **Fonts** : Inter (Google Fonts)
- **Icons** : SVG personnalisés
- **Deployment** : Vercel / Netlify

## 📦 Installation

### Prérequis
- Node.js >= 18.x
- npm ou yarn

### Commandes

```bash
# Cloner le repository
git clone https://github.com/votre-username/portfolio.git
cd portfolio

# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build pour la production
npm run build

# Lancer en production
npm start

# Linter
npm run lint
```

## 📁 Structure du Projet

```
src/
├── app/
│   ├── globals.css           # Styles globaux avec thèmes
│   ├── layout.tsx            # Layout racine avec providers
│   ├── page.tsx              # Page d'accueil
│   └── projects/
│       └── page.tsx          # Archive des projets
│
├── components/
│   ├── ui/
│   │   ├── ArchiveLink.tsx       # Lien vers archives
│   │   ├── ControlsPanel.tsx     # Panneau de contrôle (theme/lang)
│   │   ├── ExperienceCard.tsx    # Carte d'expérience
│   │   ├── MouseEffect.tsx       # Effet de souris
│   │   ├── Navigation.tsx        # Navigation sticky
│   │   ├── ProjectCard.tsx       # Carte de projet
│   │   ├── SectionTitle.tsx      # Titre de section
│   │   ├── ServiceCard.tsx       # Carte de service
│   │   └── SocialLinks.tsx       # Liens sociaux
│   │
│   └── sections/
│       ├── About.tsx             # Section À propos
│       ├── Contact.tsx           # Section Contact
│       ├── Experience.tsx        # Section Expérience
│       ├── Footer.tsx            # Pied de page
│       ├── Hero.tsx              # Section Hero
│       ├── Projects.tsx          # Section Projets
│       ├── Services.tsx          # Section Services
│       └── Skills.tsx            # Section Compétences
│
├── contexts/
│   ├── LanguageContext.tsx   # Context pour i18n
│   └── ThemeContext.tsx      # Context pour theme
│
├── translations/
│   ├── en.ts                 # Traductions anglaises
│   └── fr.ts                 # Traductions françaises
│
└── lib/
    ├── data.ts               # Données statiques
    └── types.ts              # Types TypeScript
```

## 🎨 Personnalisation

### Modifier les Données

Édite `src/lib/data.ts` :

```typescript
export const personalInfo = {
  name: 'Ton Nom',
  title: 'Ton Titre',
  bio: 'Ta bio...',
  email: 'ton@email.com',
};

export const experiences = [
  // Tes expériences...
];

export const projects = [
  // Tes projets...
];
```

### Changer les Couleurs

Édite `src/app/globals.css` :

```css
/* Dark Mode */
.dark {
  --background: #0f172a;
  --text-accent: #5eead4;
}

/* Light Mode */
.light {
  --background: #faf8f5;
  --text-accent: #0d9488;
}
```

### Ajouter une Langue

1. Créer `src/translations/es.ts`
2. Mettre à jour `src/contexts/LanguageContext.tsx`
3. Ajouter le bouton dans `src/components/ui/ControlsPanel.tsx`

## 🌐 i18n (Internationalisation)

Le système i18n utilise React Context pour gérer les traductions.

### Utilisation dans un Composant

```typescript
'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function MonComposant() {
  const { t, language, setLanguage } = useLanguage();

  return (
    <div>
      <h1>{t.hero.title}</h1>
      <button onClick={() => setLanguage('fr')}>FR</button>
    </div>
  );
}
```

### Langues Disponibles
- 🇬🇧 Anglais (par défaut)
- 🇫🇷 Français

## 🎨 Système de Thème

Le système de thème utilise React Context et CSS variables.

### Utilisation dans un Composant

```typescript
'use client';

import { useTheme } from '@/contexts/ThemeContext';

export default function MonComposant() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
}
```

### Thèmes Disponibles
- 🌙 Dark Mode (slate + teal)
- ☀️ Light Mode (crème + teal foncé)

## 🖱️ Mouse Effect

Effet de gradient qui suit le curseur, optimisé avec `requestAnimationFrame`.

### Fonctionnement
1. Le `MouseEffect` component track la position de la souris
2. Il met à jour les CSS variables `--mouse-x` et `--mouse-y`
3. Le gradient dans `layout.tsx` utilise ces variables

## 📱 Responsive Design

Le portfolio est entièrement responsive :

- **Mobile** : < 768px - Layout vertical
- **Tablet** : 768px - 1024px - Layout adaptatif
- **Desktop** : > 1024px - Layout sticky avec navigation

## ⚡ Performance

- ✅ Next.js App Router pour le routing optimisé
- ✅ React Server Components par défaut
- ✅ Code splitting automatique
- ✅ Lazy loading des images
- ✅ CSS optimisé avec Tailwind
- ✅ requestAnimationFrame pour les animations

## 🚀 Déploiement

### Vercel (Recommandé)

```bash
# Installation de Vercel CLI
npm i -g vercel

# Déploiement
vercel --prod
```

### Netlify

```bash
# Installation de Netlify CLI
npm i -g netlify-cli

# Déploiement
netlify deploy --prod
```

### Variables d'Environnement

Aucune variable d'environnement requise pour le moment.

## 📊 Scripts Disponibles

```bash
npm run dev      # Lancer en mode développement
npm run build    # Build pour la production
npm start        # Lancer en production
npm run lint     # Linter le code
```

## 🐛 Résolution des Problèmes

### Le thème ne persiste pas
- Vérifier que localStorage est accessible
- Vider le cache du navigateur

### Les traductions ne s'affichent pas
- Vérifier que les fichiers de traduction sont dans `src/translations/`
- Vérifier que `'use client'` est présent en haut du composant

### L'effet de souris ne fonctionne pas après le scroll
- Vérifier que le MouseEffect est bien dans le layout
- Vérifier les CSS variables dans les DevTools

## 📄 Licence

Ce projet est sous licence MIT. Tu es libre de l'utiliser pour ton portfolio personnel.

## 🙏 Crédits

- **Design Inspiration** : [Brittany Chiang](https://brittanychiang.com/)
- **Framework** : [Next.js](https://nextjs.org/)
- **Styling** : [Tailwind CSS](https://tailwindcss.com/)

## 📞 Contact

- **Email** : rahim100codeur@gmail.com
- **LinkedIn** : [Rahim ALI](http://www.linkedin.com/in/rahim-ali-a6003226b)
- **GitHub** : [Rahim10020](https://github.com/Rahim10020)

---

Fait avec ❤️ par Rahim ALI