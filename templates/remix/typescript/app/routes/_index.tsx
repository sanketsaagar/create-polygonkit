import type { MetaFunction } from '@remix-run/node';
import { ClientOnly } from '~/components/client-only';
import { Dashboard } from '~/components/dashboard';
import { LandingPage } from '~/components/landing-page';
import { usePolygonKit } from '@sanketsaagar/polygon-kit';

export const meta: MetaFunction = () => {
  return [
    { title: 'My Polygon App' },
    { name: 'description', content: 'Built with PolygonKit' },
  ];
};

function HomeContent() {
  const { isConnected } = usePolygonKit();
  return isConnected ? <Dashboard /> : <LandingPage />;
}

export default function Index() {
  return (
    <ClientOnly>
      {() => <HomeContent />}
    </ClientOnly>
  );
}
