# create-polygon-kit

CLI tool to quickly scaffold PolygonKit projects with your choice of framework.

## Usage

Create a new PolygonKit project interactively:

```bash
npx create-polygon-kit my-app
```

Or specify the project name when prompted:

```bash
npx create-polygon-kit
```

## Features

- **Interactive CLI** - Guided setup with prompts for framework and options
- **Multiple Frameworks** - Choose between Next.js and Vite
- **TypeScript Support** - Option for TypeScript or JavaScript
- **Pre-configured** - PolygonKit, Wagmi, Viem, and TailwindCSS already set up
- **Automatic Installation** - Optional automatic dependency installation

## Frameworks Supported

- **Next.js** - React framework with App Router and SSR
- **Vite** - Fast build tool with Hot Module Replacement

## What's Included

Each generated project includes:

- ✅ PolygonKit components and hooks
- ✅ Wallet connection with WalletConnect
- ✅ Pre-built dashboard with Identity component
- ✅ TailwindCSS v4 for styling
- ✅ TypeScript configuration
- ✅ ESLint and development tools

## Example

```bash
# Create a new project
npx create-polygon-kit my-polygon-app

# Answer the prompts:
# ? Which framework would you like to use? › Next.js
# ? Would you like to use TypeScript? › Yes
# ? Install dependencies now? › Yes

# Start developing
cd my-polygon-app
npm run dev
```

## Requirements

- Node.js 18.0.0 or higher
- npm, yarn, or pnpm

## Documentation

- [PolygonKit Documentation](https://docs.polygonkit.com) - Complete guides and API reference
- [GitHub Repository](https://github.com/sanketsaagar/polygonKit) - PolygonKit source code

## License

MIT

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

---

Built with ❤️ for the Polygon ecosystem
