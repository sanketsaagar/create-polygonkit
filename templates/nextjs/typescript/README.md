# PolygonKit Next.js App

This project was created with [create-polygon-kit](https://github.com/sanketsaagar/create-polygon-kit).

## Getting Started

### 1. Set up your Reown Project ID

This app uses Reown (formerly WalletConnect) for wallet connections. You'll need a free project ID:

1. Go to [cloud.reown.com](https://cloud.reown.com) and create a free account
2. Create a new project
3. Copy your Project ID
4. Create a `.env.local` file in the root directory:

```bash
cp .env.local.example .env.local
```

5. Add your project ID to `.env.local`:

```bash
NEXT_PUBLIC_REOWN_PROJECT_ID=your_project_id_here
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about PolygonKit and Next.js, check out the following resources:

- [PolygonKit Documentation](https://docs.polygonkit.com) - learn about PolygonKit features and API
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [GitHub Repository](https://github.com/sanketsaagar/polygonKit) - source code and issues

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Built With

- [Next.js](https://nextjs.org/) - The React Framework for the Web
- [React](https://react.dev/) - The library for web and native user interfaces
- [PolygonKit](https://docs.polygonkit.com) - React components for Polygon apps
- [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework
