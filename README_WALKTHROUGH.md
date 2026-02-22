# Anggana Portfolio Website

This is a static portfolio website built with React (Vite) for Anggana Project.

## Tech Stack
- React
- Vite
- React Router DOM
- Framer Motion
- Lucide React (Icons)
- Vanilla CSS (with CSS Variables for theming)

## Design
- **Theme**: Navy and White (Clean Design)
- **Responsive**: Fully responsive with mobile menu and grid layouts.

## Project Structure
- `src/components`: Reusable components like Navbar, Footer, Layout.
- `src/pages`: Page components (Home, About, Portfolio).
- `src/index.css`: Global styles and design tokens.

## How to Run
1. Install dependencies (if not already):
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

## Customization
- **Colors**: Edit `src/index.css` variables (`--color-navy`, etc.).
- **Content**: Edit `src/pages/Home.jsx` or `src/pages/About.jsx`.
- **Portfolio Items**: Currently using mock data in `src/pages/Portfolio.jsx`. Replace with real data.
