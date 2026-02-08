# Yarrow Portfolio - Wedding Photography & Cinematography

A modern, elegant portfolio website built with React, TypeScript, and Vite for wedding photographers and cinematographers.

## 📋 Client Data Requirements

Before launching this website with your own content, please review these comprehensive guides:

### 📚 Documentation Library

1. **[WEBSITE_STRUCTURE_OVERVIEW.md](./WEBSITE_STRUCTURE_OVERVIEW.md)** - **START HERE!** Visual map of the entire website and data requirements
2. **[CLIENT_DATA_SUMMARY.md](./CLIENT_DATA_SUMMARY.md)** - Quick reference summary with priorities and checklists  
3. **[CLIENT_DATA_REQUIREMENTS.md](./CLIENT_DATA_REQUIREMENTS.md)** - Complete detailed guide of all requirements
4. **[IMAGE_CHECKLIST.md](./IMAGE_CHECKLIST.md)** - Detailed breakdown of all 142-218 images with specifications
5. **[DATA_COLLECTION_FORM.md](./DATA_COLLECTION_FORM.md)** - Fillable form to organize all your content

### 📊 Quick Summary
You'll need:
- **142-218 high-quality images** (hero images, wedding photos, team photos, backgrounds)
- **~4,200-8,650 words** of text content (about, FAQs, testimonials, descriptions)
- **12 wedding galleries** (8-15 images each with full stories)
- **4 testimonials** from happy clients
- **15 FAQ Q&A pairs** covering booking, experience, deliverables, and pricing
- **Complete contact information** (email, phone, social media)
- **Team information** (4 members with photos and roles)
- And much more!

### 🚀 Getting Started
1. Read the **WEBSITE_STRUCTURE_OVERVIEW.md** first to understand the big picture
2. Use **CLIENT_DATA_SUMMARY.md** for quick reference and priorities
3. Fill out **DATA_COLLECTION_FORM.md** as you gather content
4. Reference **IMAGE_CHECKLIST.md** for image specifications
5. Consult **CLIENT_DATA_REQUIREMENTS.md** for detailed explanations

### ⏱️ Timeline
- **Phase 1** (1-2 weeks): Critical info for launch
- **Phase 2** (1-2 weeks): Core content 
- **Phase 3** (1-2 weeks): Extended content
- **Phase 4** (2-4 weeks): Complete galleries

**Total: 6-8 weeks for complete portfolio**

---

## 🚀 Technical Information

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
