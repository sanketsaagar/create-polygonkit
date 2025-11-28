'use client';

import { PolygonKitProvider } from '@sanketsaagar/polygon-kit';

export function Providers({ children }: { children: React.ReactNode }) {
  return <PolygonKitProvider>{children}</PolygonKitProvider>;
}
