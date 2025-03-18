# example-react-app - React App with Best Practices

A modern React application built with TypeScript and Vite, following best practices for static checking and testing.

## Features

- **React 19** with TypeScript
- **Vite** for fast development and optimized builds
- **Static Checking**
  - ESLint for code linting
  - StyleLint for CSS linting
  - TypeScript for static type checking
- **Testing**
  - Jest + React Testing Library for unit tests
  - Code coverage reporting

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm (v9+)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd example-react-app

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

### Building for Production

```bash
# Create a production build
npm run build

# Preview the production build
npm run preview
```

## Static Checking

```bash
# Run all static checks (ESLint, StyleLint, TypeScript)
npm run static-check

# Run individual checks
npm run lint         # ESLint
npm run lint:styles  # StyleLint
npm run type-check   # TypeScript
```

## Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

## Project Structure

```
example-react-app/
├── public/             # Static assets
├── src/                # Source code
│   ├── __mocks__/      # Test mocks
│   ├── __tests__/      # Test files
│   ├── assets/         # Assets (images, fonts, etc.)
│   ├── components/     # React components
│   ├── App.tsx         # Main App component
│   └── main.tsx        # Entry point
├── .gitignore
├── eslint.config.js    # ESLint configuration
├── jest.config.js      # Jest configuration
├── package.json
├── stylelint.config.js # StyleLint configuration
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## License

MIT
