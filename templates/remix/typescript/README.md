# PolygonKit Remix App

This project was created with [create-polygon-kit](https://github.com/sanketsaagar/create-polygon-kit).

## Getting Started

### 1. Set up your Reown Project ID

This app uses Reown (formerly WalletConnect) for wallet connections. You'll need a free project ID:

1. Go to [cloud.reown.com](https://cloud.reown.com) and create a free account
2. Create a new project
3. Copy your Project ID
4. Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

5. Add your project ID to `.env`:

```bash
VITE_REOWN_PROJECT_ID=your_project_id_here
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

## Learn More

To learn more about PolygonKit and Remix, check out the following resources:

- [PolygonKit Documentation](https://docs.polygonkit.com) - learn about PolygonKit features and API
- [Remix Documentation](https://remix.run/docs) - learn about Remix features and API
- [GitHub Repository](https://github.com/sanketsaagar/polygonKit) - source code and issues

## Built With

- [Remix](https://remix.run/) - Full stack web framework
- [React](https://react.dev/) - The library for web and native user interfaces
- [PolygonKit](https://docs.polygonkit.com) - React components for Polygon apps
- [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework
