'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import AccountDropdown from '@/Components/AccountDropdown'
import MarketCard from '@/Components/MarketCard'
import TradeForm from '@/Components/TradeForm'
import CreateMarketForm from '@/Components/CreateMarketForm'

export default function HomePage() {
  // ✨ Opinion / sentiment-based markets instead of hard facts
  const initialMarkets = [
    {
      id: 0,
      address: 'market_0',
      question: 'Will AI be viewed as a net positive for society by 2030?',
      resolveTs: Math.floor(Date.now() / 1000) + 86400 * 365 * 2, // 2 years
    },
    {
      id: 1,
      address: 'market_1',
      question: 'Will remote work become the preferred lifestyle for most developers?',
      resolveTs: Math.floor(Date.now() / 1000) + 86400 * 365,
    },
    {
      id: 2,
      address: 'market_2',
      question: 'Will social media platforms regain user trust by 2027?',
      resolveTs: Math.floor(Date.now() / 1000) + 86400 * 730,
    },
    {
      id: 3,
      address: 'market_3',
      question: 'Will crypto be widely accepted for everyday payments by 2028?',
      resolveTs: Math.floor(Date.now() / 1000) + 86400 * 365 * 3,
    },
    {
      id: 4,
      address: 'market_4',
      question: 'Will electric vehicles become a symbol of status more than sustainability?',
      resolveTs: Math.floor(Date.now() / 1000) + 86400 * 365 * 2,
    },
    {
      id: 5,
      address: 'market_5',
      question: 'Will people trust decentralized governance more than traditional governments?',
      resolveTs: Math.floor(Date.now() / 1000) + 86400 * 365 * 4,
    },
    {
      id: 6,
      address: 'market_6',
      question: 'Will artists widely adopt AI-generated tools as part of their workflow?',
      resolveTs: Math.floor(Date.now() / 1000) + 86400 * 365,
    },
    {
      id: 7,
      address: 'market_7',
      question: 'Will environmental consciousness become the top buying factor by 2026?',
      resolveTs: Math.floor(Date.now() / 1000) + 86400 * 365 * 2,
    },
    {
      id: 8,
      address: 'market_8',
      question: 'Will privacy become more valuable than convenience to internet users?',
      resolveTs: Math.floor(Date.now() / 1000) + 86400 * 365,
    },
    {
      id: 9,
      address: 'market_9',
      question: 'Will metaverse communities replace traditional social media by 2030?',
      resolveTs: Math.floor(Date.now() / 1000) + 86400 * 365 * 5,
    },
  ]

  const [markets, setMarkets] = useState(initialMarkets)
  const [selectedMarket, setSelectedMarket] = useState<{ id: number, isYes: boolean, agreementPercentage: number } | null>(null)
  const [showCreateMarket, setShowCreateMarket] = useState(false)

  const handleTradeComplete = () => {
    alert('Trade complete!')
    setSelectedMarket(null)
  }

  const handleMarketCreated = (newMarketAddress: string) => {
    alert(`✅ Market created at: ${newMarketAddress}`)
    setShowCreateMarket(false)
    setMarkets(prev => [
      ...prev,
      {
        id: prev.length,
        address: newMarketAddress,
        question: 'New community market',
        resolveTs: Math.floor(Date.now() / 1000) + 86400 * 365,
      },
    ])
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="border-b border-gray-800 bg-black/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="text-center">
              <h1 className="text-2xl font-bold text-amber-400">SenzTrade</h1>
              <p className="text-xs text-gray-400 italic">A PERCEPTION Market</p>
            </div>

            {/* Nav Buttons */}
            <div className="flex gap-3">
              <button className="bg-amber-600 hover:bg-amber-700 text-black px-6 py-2.5 rounded-lg font-semibold transition-all flex items-center gap-2">
                📊 Markets
              </button>

              <button
                onClick={() => setShowCreateMarket(true)}
                className="bg-neutral-800 hover:bg-neutral-700 text-amber-400 px-6 py-2.5 rounded-lg font-semibold transition-all flex items-center gap-2"
              >
                ➕ Create Market
              </button>

              <button className="bg-neutral-800 hover:bg-neutral-700 text-amber-400 px-6 py-2.5 rounded-lg font-semibold transition-all flex items-center gap-2">
                💼 Trade
              </button>

              <Link
                href="/portfolio"
                className="bg-neutral-800 hover:bg-neutral-700 text-amber-400 px-6 py-2.5 rounded-lg font-semibold transition-all flex items-center gap-2"
              >
                👤 Portfolio
              </Link>
            </div>

            {/* Account / Live indicator */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-300">Live Markets</span>
              </div>
              <AccountDropdown />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-3">Community Sentiment Markets</h2>
          <p className="text-gray-400">
            Vote with your perception — not just on facts, but on how people feel about the world.
            <span className="text-amber-400 font-semibold"> Share your belief and see collective opinion evolve.</span>
          </p>
        </div>

        {/* Market Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {markets.map((m) => (
            <MarketCard
              key={m.id}
              question={m.question}
              resolveTs={m.resolveTs}
              marketAddress={m.address}
              marketId={m.id}
              onTrade={(marketId, isYes, agreementPercentage) =>
                setSelectedMarket({ id: marketId, isYes, agreementPercentage })
              }
            />
          ))}
        </div>
      </div>

      {/* Create Market Modal */}
      {showCreateMarket && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border-2 border-amber-600/30 rounded-2xl p-8 max-w-lg w-full shadow-2xl">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">Create a Market</h2>
            <CreateMarketForm onMarketCreated={handleMarketCreated} />
            <button
              className="mt-6 w-full bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-xl transition-all font-bold"
              onClick={() => setShowCreateMarket(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Trade Modal */}
      {selectedMarket && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border-2 border-amber-600/30 rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <h2 className="text-2xl font-bold text-amber-400 mb-6">Confirm Trade</h2>
            <TradeForm
              marketAddress={markets[selectedMarket.id]?.address || ''}
              marketId={selectedMarket.id}
              isYes={selectedMarket.isYes}
              agreementPercentage={selectedMarket.agreementPercentage}
              onTradeComplete={handleTradeComplete}
            />
            <button
              className="mt-6 w-full bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-xl transition-all font-bold"
              onClick={() => setSelectedMarket(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
