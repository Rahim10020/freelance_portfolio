# Portfolio Rahim ALI

Portfolio personnel inspiré du design de Brittany Chiang, construit avec Next.js 15 et Tailwind CSS 4.

## 🚀 Installation

### 1. Créer la structure des dossiers

```bash
# Créer les dossiers nécessaires
mkdir -p src/lib
mkdir -p src/components/ui
mkdir -p src/components/sections
```

### 2. Copier les fichiers

Copiez chaque fichier que j'ai généré dans son emplacement correspondant :

#### Fichiers de configuration (déjà existants - à remplacer)
- `src/app/page.tsx` ✅
- `src/app/layout.tsx` ✅
- `src/app/globals.css` ✅

#### Nouveaux fichiers à créer

**Dans `src/lib/` :**
- `types.ts`
- `data.ts`

**Dans `src/components/ui/` :**
- `Navigation.tsx`
- `SocialLinks.tsx`
- `SectionTitle.tsx`
- `ExperienceCard.tsx`
- `ProjectCard.tsx`
- `ServiceCard.tsx`
- `MouseEffect.tsx`

**Dans `src/components/sections/` :**
- `Hero.tsx`
- `About.tsx`
- `Services.tsx`
- `Experience.tsx`
- `Projects.tsx`
- `Skills.tsx`
- `Footer.tsx`

### 3. Lancer le projet

```bash
# Installer les dépendances (si ce n'est pas déjà fait)
npm install

# Lancer en mode développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📝 Personnalisation

### Modifier vos données personnelles

Toutes vos données sont centralisées dans **`src/lib/data.ts`**. Modifiez ce fichier pour :

- ✏️ Mettre à jour votre email
- ✏️ Modifier les expériences professionnelles (remplacer les données aléatoires)
- ✏️ Mettre à jour vos projets (remplacer les données aléatoires)
- ✏️ Ajouter ou retirer des services
- ✏️ Modifier vos compétences

### Structure des données

```typescript
// Exemple pour une expérience
{
  id: '1',
  period: '2023 — PRESENT',
  title: 'Votre Poste',
  company: 'Votre Entreprise',
  description: 'Description de votre rôle...',
  technologies: ['Tech1', 'Tech2'],
  link: 'https://exemple.com' // Optionnel
}
```

## 🎨 Fonctionnalités

- ✅ Design fidèle au site de Brittany Chiang
- ✅ Navigation latérale fixe avec scroll spy
- ✅ Effet de souris animé
- ✅ Sections : About, Services, Experience, Projects, Skills
- ✅ Cartes interactives avec effets de survol
- ✅ Liens sociaux (GitHub, LinkedIn)
- ✅ Responsive design
- ✅ Animations subtiles
- ✅ Architecture propre et modulaire
- ✅ TypeScript pour la sécurité des types

## 📱 Sections

1. **Hero** - Nom, titre et navigation
2. **About** - Présentation personnelle
3. **Services** - Vos services offerts
4. **Experience** - Expériences professionnelles
5. **Projects** - Portfolio de projets
6. **Skills** - Compétences techniques

## 🛠️ Technologies utilisées

- Next.js 15.5.5
- React 19.1.0
- TypeScript 5
- Tailwind CSS 4
- Geist Font

## 📦 Structure du projet

```
freelance_portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Skills.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/
│   │       ├── Navigation.tsx
│   │       ├── SocialLinks.tsx
│   │       ├── SectionTitle.tsx
│   │       ├── ExperienceCard.tsx
│   │       ├── ProjectCard.tsx
│   │       ├── ServiceCard.tsx
│   │       └── MouseEffect.tsx
│   └── lib/
│       ├── types.ts
│       └── data.ts
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 🎯 Prochaines étapes

1. Remplacez les données aléatoires dans `src/lib/data.ts`
2. Ajoutez votre vrai email
3. Ajoutez des images pour vos projets (optionnel)
4. Testez sur mobile et desktop
5. Déployez sur Vercel

## 🚀 Déploiement

```bash
# Build pour la production
npm run build

# Tester le build
npm start
```

Pour déployer sur Vercel : [vercel.com](https://vercel.com)

---

**Créé par Rahim ALI** | Inspiré par [Brittany Chiang](https://brittanychiang.com/)