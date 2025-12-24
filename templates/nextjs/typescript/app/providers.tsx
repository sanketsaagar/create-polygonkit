'use client';

import { PolygonKitProvider } from '@sanketsaagar/polygon-kit';

export function Providers({ children }: { children: React.ReactNode }) {
  const projectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID;

  return (
    <PolygonKitProvider
      config={{
        projectId,
      }}
    >
      {children}
    </PolygonKitProvider>
  );
}
