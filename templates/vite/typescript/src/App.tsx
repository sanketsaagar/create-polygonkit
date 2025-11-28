import {
  PolygonKitProvider,
  Wallet,
  ConnectWallet,
  WalletDropdown,
  Identity,
  usePolygonKit,
} from '@sanketsaagar/polygon-kit';
import './App.css';

function Dashboard() {
  const { address, isConnected } = usePolygonKit();

  if (!isConnected) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            Welcome to PolygonKit
          </h1>
          <ConnectWallet />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            My Polygon App
          </h1>
          <Wallet>
            <WalletDropdown />
          </Wallet>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Your Profile
            </h2>
            <Identity
              address={address!}
              showAvatar
              showAddress
              showBalance
            />
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Quick Actions
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Add your custom components here!
            </p>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
          <p>
            Built with{' '}
            <a
              href="https://docs.polygonkit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 dark:text-purple-400 hover:underline"
            >
              PolygonKit
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <PolygonKitProvider>
      <Dashboard />
    </PolygonKitProvider>
  );
}

export default App;
