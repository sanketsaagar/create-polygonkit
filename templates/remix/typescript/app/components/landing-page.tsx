  
  Wallet,
  ConnectWallet,
  WalletDropdown,
  Identity,
  Avatar,
  Name,
  TokenBalance,
  TokenIcon,
  TransactionButton,
  Swap,
  usePolygonKit,
} from '@sanketsaagar/polygon-kit';
import { useState } from 'react';
import { parseEther } from 'viem';

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      <div className="container mx-auto px-4 py-16">
        <nav className="flex justify-between items-center mb-20">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg" />
            <span className="text-2xl font-bold text-white">PolygonKit</span>
          </div>
          <ConnectWallet />
        </nav>

        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            Build Amazing Web3 Apps
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              On Polygon
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            The fastest way to create decentralized applications with React components,
            TypeScript utilities, and Web3 primitives.
          </p>
          <div className="flex gap-4 justify-center">
            <ConnectWallet />
            <a
              href="https://polygonlabs.mintlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-200"
            >
              View Docs
            </a>
          </div>
        </div>

        {/* Network Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {[
            { name: 'Polygon PoS', color: 'from-purple-500 to-purple-600' },
            { name: 'Polygon zkEVM', color: 'from-blue-500 to-blue-600' },
            { name: 'Amoy Testnet', color: 'from-pink-500 to-pink-600' },
          ].map((network) => (
            <div
              key={network.name}
              className={`px-6 py-3 bg-gradient-to-r ${network.color} rounded-full text-white font-semibold shadow-lg`}
            >
              {network.name}
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: '⚡',
              title: 'Lightning Fast',
              description: 'Build and deploy in minutes with pre-built components and hooks',
            },
            {
              icon: '🔒',
              title: 'Secure by Default',
              description: 'Battle-tested wallet connections and transaction handling',
            },
            {
              icon: '🎨',
              title: 'Beautiful UI',
              description: 'Modern, responsive components that work out of the box',
            },
            {
              icon: '🔗',
              title: 'Multi-Chain',
              description: 'Support for Polygon PoS, zkEVM, and more chains',
            },
            {
              icon: '📱',
              title: 'Mobile Ready',
              description: 'Responsive design that works on all devices',
            },
            {
              icon: '🛠️',
              title: 'Developer First',
              description: 'TypeScript support, great DX, and detailed documentation',
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { label: 'Components', value: '20+' },
            { label: 'Networks', value: '3' },
            { label: 'Developers', value: '1000+' },
            { label: 'Open Source', value: '100%' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>
            Built with ❤️ for the Polygon community •{' '}
            <a
              href="https://github.com/sanketsaagar/polygonKit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300"
            >
              View on GitHub
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

function Dashboard() {
  const { address, isConnected, chainId } = usePolygonKit();
  const [activeTab, setActiveTab] = useState<'overview' | 'components' | 'transactions' | 'swap'>('overview');
  const [txHash, setTxHash] = useState<string>('');

  const getNetworkName = (chainId?: number) => {
    switch (chainId) {
      case 137:
        return 'Polygon PoS';
      case 1101:
        return 'Polygon zkEVM';
      case 80002:
        return 'Amoy Testnet';
      default:
        return 'Unknown Network';
    }
  };

  if (!isConnected || !address) {
    return <LandingPage />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-indigo-900/20">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg" />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">PolygonKit Showcase</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">{getNetworkName(chainId)}</p>
              </div>
            </div>
            <Wallet>
              <WalletDropdown />
            </Wallet>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-1 rounded-lg w-fit">
          {[
            { id: 'overview', label: 'Overview', icon: '📊' },
            { id: 'components', label: 'Components', icon: '🧩' },
            { id: 'transactions', label: 'Transactions', icon: '💸' },
            { id: 'swap', label: 'Swap', icon: '🔄' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-6 py-2 rounded-md font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Wallet Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-gradient-to-br from-purple-500 to-pink-500 p-8 rounded-2xl text-white shadow-xl">
                <h2 className="text-lg font-semibold mb-4 opacity-90">Your Wallet</h2>
                <Identity
                  address={address}
                  showAvatar
                  showAddress
                  showBalance
                />
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-sm opacity-75 mb-3">Native Balance</p>
                  <TokenBalance address={address} className="text-2xl font-bold" />
                </div>
              </div>

              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-4">Network Status</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300">Status</span>
                    <span className="flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      Connected
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300">Chain ID</span>
                    <span className="font-mono font-semibold text-gray-900 dark:text-white">{chainId || 'N/A'}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300">Network</span>
                    <span className="text-gray-900 dark:text-white font-semibold">{getNetworkName(chainId)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '💸', title: 'Send Tokens', desc: 'Transfer assets', tab: 'transactions' },
                { icon: '🔄', title: 'Swap', desc: 'Exchange tokens', tab: 'swap' },
                { icon: '🧩', title: 'Components', desc: 'Explore all features', tab: 'components' },
                { icon: '📖', title: 'Documentation', desc: 'Learn more', link: 'https://polygonlabs.mintlify.app' },
              ].map((action) => (
                <button
                  key={action.title}
                  onClick={() => action.tab ? setActiveTab(action.tab as typeof activeTab) : window.open(action.link, '_blank')}
                  className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl border border-gray-200 dark:border-gray-700 hover:scale-105 transition-all duration-200 text-left group shadow-lg hover:shadow-xl"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{action.icon}</div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">{action.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{action.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Components Showcase Tab */}
        {activeTab === 'components' && (
          <div className="space-y-6">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Identity Components</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                  <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Full Identity</h3>
                  <Identity address={address} showAvatar showAddress showBalance />
                </div>
                <div className="p-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                  <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Avatar Only</h3>
                  <div className="flex items-center gap-4">
                    <Avatar address={address} size={48} />
                    <Avatar address={address} size={64} />
                    <Avatar address={address} size={80} />
                  </div>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                  <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Name/Address</h3>
                  <Name address={address} />
                </div>
              </div>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Token Components</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                  <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Token Balance</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <span className="text-gray-600 dark:text-gray-400">Native (POL)</span>
                      <TokenBalance address={address} />
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                  <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Token Icons</h3>
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <TokenIcon symbol="POL" size={32} />
                      <p className="text-xs mt-1 text-gray-600 dark:text-gray-400">POL</p>
                    </div>
                    <div className="text-center">
                      <TokenIcon symbol="ETH" size={32} />
                      <p className="text-xs mt-1 text-gray-600 dark:text-gray-400">ETH</p>
                    </div>
                    <div className="text-center">
                      <TokenIcon symbol="USDC" size={32} />
                      <p className="text-xs mt-1 text-gray-600 dark:text-gray-400">USDC</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Transactions Tab */}
        {activeTab === 'transactions' && (
          <div className="space-y-6">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Transaction</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Send 0.001 POL to a recipient address. Replace the address below with your test address.
              </p>
              <TransactionButton
                text="Send 0.001 POL"
                calls={[
                  {
                    to: address, // Sending to self for demo
                    value: parseEther('0.001'),
                  },
                ]}
                onSuccess={(hash) => {
                  console.log('Transaction successful:', hash);
                  setTxHash(hash);
                }}
                onError={(error) => {
                  console.error('Transaction failed:', error);
                  alert('Transaction failed: ' + error.message);
                }}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
              />

              {txHash && (
                <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <p className="font-semibold text-green-900 dark:text-green-100 mb-2">Transaction Sent!</p>
                  <p className="text-sm text-green-700 dark:text-green-300 break-all">
                    Hash: {txHash}
                  </p>
                </div>
              )}
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {[
                  { type: 'Received', amount: '100 POL', time: '2 mins ago' },
                  { type: 'Sent', amount: '50 POL', time: '1 hour ago' },
                  { type: 'Swapped', amount: '25 POL → 40 USDC', time: '3 hours ago' },
                ].map((tx, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        tx.type === 'Received' ? 'bg-green-100 dark:bg-green-900/30' :
                        tx.type === 'Sent' ? 'bg-red-100 dark:bg-red-900/30' :
                        'bg-blue-100 dark:bg-blue-900/30'
                      }`}>
                        {tx.type === 'Received' ? '↓' : tx.type === 'Sent' ? '↑' : '↔'}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">{tx.type}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{tx.amount}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600 dark:text-gray-400">{tx.time}</p>
                      <span className="text-xs text-green-600 dark:text-green-400">✓ Confirmed</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Swap Tab */}
        {activeTab === 'swap' && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Token Swap</h2>
              <Swap
                onSuccess={(hash) => {
                  console.log('Swap successful:', hash);
                  alert('Swap successful! Hash: ' + hash);
                }}
                onError={(error) => {
                  console.error('Swap failed:', error);
                  alert('Swap failed: ' + error.message);
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function AppContent() {
  const { isConnected } = usePolygonKit();
