'use client'

import { useWallet } from '@aptos-labs/wallet-adapter-react'
import { useEffect, useState } from 'react'

export default function Portfolio() {
  const { account, connected } = useWallet()
  const [userMarkets, setUserMarkets] = useState<any[]>([])
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (connected && account) {
      setUserMarkets([
        { question: 'Will Bitcoin reach $150k by 2025?', outcome: 'YES', profit: '+40 uUSD' },
        { question: 'Will AI replace 30% of coding jobs by 2030?', outcome: 'NO', profit: '+25 uUSD' },
        { question: 'Will SpaceX land humans on Mars by 2030?', outcome: 'YES', profit: '-10 uUSD' },
      ])
    } else {
      setUserMarkets([])
    }
  }, [connected, account])

  const formatAddress = (addr?: any) =>
    typeof addr === 'string'
      ? `${addr.slice(0, 6)}...${addr.slice(-4)}`
      : addr?.toString
      ? `${addr.toString().slice(0, 6)}...${addr.toString().slice(-4)}`
      : ''

  const handleCopy = () => {
    if (account?.address) {
      navigator.clipboard.writeText(account.address.toString())
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    }
  }

  return (
    <main className="min-h-screen bg-black text-white px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-amber-400 mb-2">Your Portfolio</h1>
        <p className="text-gray-400 text-sm">
          Track your prediction market positions and Aptos wallet performance.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-neutral-900 border border-gray-800 rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl font-semibold text-white mb-4">Wallet Details</h2>

          {!connected || !account ? (
            <p className="text-gray-400">
              Connect your Aptos wallet to view your portfolio details.
            </p>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <p className="text-gray-300">
                  <span className="font-semibold text-amber-400">Connected Address:</span>{' '}
                  {formatAddress(account.address)}
                </p>
                <button
                  onClick={handleCopy}
                  className="text-xs bg-gray-800 hover:bg-gray-700 px-2 py-1 rounded-lg text-amber-400 transition-all"
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <p className="text-gray-400 text-sm">
                Network: <span className="text-amber-400">Aptos Testnet</span>
              </p>
            </div>
          )}
        </div>

        {connected && (
          <>
            <div className="bg-neutral-900 border border-gray-800 rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-semibold text-white mb-4">Portfolio Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-black/30 border border-gray-800 rounded-xl p-4 text-center">
                  <p className="text-sm text-gray-400">Total Markets Participated</p>
                  <p className="text-3xl font-bold text-amber-400 mt-2">12</p>
                </div>
                <div className="bg-black/30 border border-gray-800 rounded-xl p-4 text-center">
                  <p className="text-sm text-gray-400">Winning Predictions</p>
                  <p className="text-3xl font-bold text-green-400 mt-2">8</p>
                </div>
                <div className="bg-black/30 border border-gray-800 rounded-xl p-4 text-center">
                  <p className="text-sm text-gray-400">Total Earnings</p>
                  <p className="text-3xl font-bold text-amber-400 mt-2">340 uUSD</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 border border-gray-800 rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-semibold text-white mb-4">Recent Predictions</h2>
              {userMarkets.length === 0 ? (
                <p className="text-gray-400">No trades found.</p>
              ) : (
                <div className="space-y-4">
                  {userMarkets.map((trade, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center bg-black/30 border border-gray-800 rounded-xl p-4 hover:border-amber-500/40 transition-all"
                    >
                      <div>
                        <p className="font-medium text-white">{trade.question}</p>
                        <p className="text-sm text-gray-400">
                          Your Prediction:{' '}
                          <span className="text-amber-400 font-semibold">{trade.outcome}</span>
                        </p>
                      </div>
                      <p
                        className={`font-semibold ${
                          trade.profit.startsWith('+') ? 'text-green-400' : 'text-red-400'
                        }`}
                      >
                        {trade.profit}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </main>
  )
}
