# Derek Armstrong - Portfolio Website (2026)

This is a static portfolio website built with React, Vite, and TypeScript, featuring a Cyberpunk/Sci-Fi "Video Game UI" aesthetic.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1.  Open this folder in your terminal.
2.  Install dependencies:
    ```bash
    npm install
    ```

### Running Locally

To start the development server:
```bash
npm run dev
```
Then open `http://localhost:5173` in your browser.

### Building for Production

To create a production build (static files):
```bash
npm run build
```
The files will be generated in the `dist` folder. You can preview the build locally with:
```bash
npm run preview
```

## 📂 Project Structure

-   `src/components`: Reusable UI components (HoloPanel, CyberButton, etc.)
-   `src/pages`: Main route components (Home, Experience, Skills, Projects)
-   `src/data`: Resume data and content
-   `src/styles`: Global styles and theme definitions
-   `public`: Static assets

## 🎨 Customization

-   **Content**: Edit `src/data/resume.ts` to update your profile, experience, and projects.
-   **Theme**: Edit `src/index.css` to change changing CSS variables (colors, fonts).

## 🛠 Tech Stack

-   **Core**: React, TypeScript, Vite
-   **Styling**: Vanilla CSS (Variables), Tailwind CSS (configured)
-   **Animation**: Framer Motion
-   **Icons**: Lucide React
