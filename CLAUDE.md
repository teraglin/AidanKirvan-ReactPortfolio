# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a personal portfolio website built with React 17 and styled-components. The site showcases software development projects and tabletop game designs. It uses Create React App with CRACO for custom configuration.

## Build Commands

Development:
```bash
yarn start
```
Opens the development server at http://localhost:3000

Build for production:
```bash
yarn build
```

Run tests:
```bash
yarn test
```

## Architecture

### Routing
The app uses React Router v6 (`react-router-dom`) with a simple route structure defined in `src/App.js`:
- `/` - Main portfolio page
- `/tabletop` - Tabletop game designs showcase
- `/*` - 404 catch-all

### Page Structure
- **Pages** (`src/pages/`): Top-level route components that compose modules
  - `MainPage.js` - Combines Nav, Hero, About, Projects, and Contact modules
  - `TabletopPage.js` - Dedicated page for tabletop game designs

- **Modules** (`src/modules/`): Self-contained page sections (Nav, Hero, About, Projects, Contact, etc.)

- **Components** (`src/components/`): Reusable UI components (ProjectsCard, PageLink, ContactLink)

### Data Management
Static data is centralized in `src/data/`:
- `projects.js` - Portfolio project listings with show/hide flags
- `tabletopGames.js` - Tabletop game information with status tracking
- `tech-icons.js` - Technology icon mappings

### Styling
- Uses `styled-components` (v6 RC) for component styling
- Global styles in `src/styles/`:
  - `colourScheme.js` - Centralized color constants
  - `animations.js` - Reusable animation definitions
  - `App.css` and `index.css` - Global CSS

### External Assets
Images are hosted on Cloudinary and Steam CDN rather than stored locally. Project and game data reference these external URLs.

## Important Notes

- The site is optimized for specific viewport sizes and includes a `LandscapeWarning` component for unsupported orientations
- Uses CRACO (Create React App Configuration Override) though the config file (`craco.config.js`) is currently empty
- Responsive breakpoints: 780px (tablet), 1440px (desktop)
- Maximum content width: 1440px
