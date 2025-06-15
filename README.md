# Mealr Website

A modern, static, SEO-friendly landing page for Mealr built with React (Vite) and Node.js + Express.

## Features

- 🎨 Modern, Tinder-inspired design
- 📱 Fully responsive layout
- ⚡ Fast performance with Vite
- 🔍 SEO optimized
- 🎭 Smooth animations with Framer Motion
- 🎯 Clean, semantic HTML structure

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/mealr-website.git
cd mealr-website
```

2. Install dependencies:
```bash
npm run install:all
```

3. Start the development server:
```bash
npm run dev
```

The website will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:3000

## Available Scripts

- `npm run dev` - Start both frontend and backend in development mode
- `npm run build` - Build the frontend for production
- `npm run start` - Start the production server
- `npm run install:all` - Install dependencies for all packages

## Project Structure

```
mealr-website/
├── client/                 # React frontend
│   ├── public/            # Static assets
│   └── src/               # Source files
│       ├── components/    # React components
│       └── ...
├── server/                # Express backend
│   └── server.js         # Server entry point
└── package.json          # Root package.json
```

## Deployment

The website can be deployed to any static hosting service (Vercel, Netlify, etc.) or a VPS.

1. Build the frontend:
```bash
npm run build
```

2. The production-ready files will be in the `client/dist` directory.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License. 