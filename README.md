# HAL - AI Dashboard

A modern AI dashboard with a chat interface featuring a side navigation panel and interactive chat window.

## Features

- Modern, sleek UI with gradient accents
- Real-time chat interface
- Side navigation with chat history
- Responsive design
- Built with React and Vite for fast performance

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
hal/
├── public/
│   └── logo.svg          # Application logo
├── src/
│   ├── components/
│   │   ├── SideNav.jsx   # Side navigation component
│   │   ├── SideNav.css
│   │   ├── ChatWindow.jsx # Chat interface component
│   │   └── ChatWindow.css
│   ├── App.jsx           # Main application component
│   ├── App.css
│   └── main.jsx          # Application entry point
├── index.html
├── package.json
└── vite.config.js
```

## Technologies

- React 18
- Vite
- CSS3 with modern gradients and animations