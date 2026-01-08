# 🦅 Prake - E-commerce Platform

A modern, high-performance e-commerce web application built with **React**, **TypeScript**, and **Vite**. The project focuses on providing a premium user experience with smooth animations, responsive design, and intuitive navigation.

## ✨ Features

- **Smooth Experience**:
  - 🚂 **Lenis Scroll**: Butter-smooth scrolling experience across the entire site.
  - 🎬 **GSAP Animations**: engaging micro-interactions and entrance animations.
  - 🔄 **Custom Preloader**: Stylish loading screen with logo animation.

- **Shop Functionality**:
  - 🛍️ **Product Catalog**: Browsable list of products with details.
  - 🛒 **Shopping Cart**: Fully functional cart with state management.
  - 📱 **Responsive Design**: Optimized for mobile, tablet, and desktop.
  - 🔍 **Catalog Sidebar**: Easy access to product categories.

- **UI/UX**:
  - 💅 **Modern Aesthetics**: Clean design with focus on typography and spacing.
  - 🌙 **Interactive Elements**: Hover effects, transitions, and "Scroll to Top" functionality.

## 🛠️ Technology Stack

- **Core**: [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Styling**: Vanilla CSS, Lucide React (Icons)
- **Animations**: [GSAP](https://gsap.com/), [Lenis](https://lenis.studio/)
- **Carousel**: [Swiper](https://swiperjs.com/)

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/your-username/prake.git
    cd prake
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  Open your browser at `http://localhost:5173`

## 📁 Project Structure

The project follows a feature-oriented architecture (inspired by FSD):

```
src/
├── app/          # App-wide providers, routing, and entry point
├── pages/        # Page components (Home, Cart, Product, etc.)
├── widgets/      # Complex UI blocks (Header, Footer, CatalogSidebar)
├── features/     # Specific functionalities
├── entities/     # Business entities
├── shared/       # Reusable UI components, assets, and utilities
└── main.tsx      # Entry file
```

## 📜 Scripts

- `npm run dev`: Start dev server with HMR.
- `npm run build`: Type-check and build for production.
- `npm run lint`: Run ESLint.
- `npm run preview`: Preview the production build locally.

---

Developed with ❤️ for the **Prake** project.
