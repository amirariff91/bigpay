'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import ProposalForm from './ProposalForm';
import FlowVisualization from './FlowVisualization';

interface GrowthHack {
  title: string;
  hack: string;
  execution: string;
  whyItWorks: string;
  flow: {
    title: string;
    description: string;
    icon: string;
  }[];
}

const growthHacks: GrowthHack[] = [
  {
    title: "Hijack Facebook Buy & Sell / Local Groups",
    hack: "Integrate a simple way for BigPay users to make payments inside or adjacent to FB Marketplace and group interactions (e.g. \"Mudah.my Alternative\").",
    execution: "Build a \"Pay with BigPay\" generator that creates a branded image or QR code that sellers can paste in their listings or WhatsApp group chats.",
    whyItWorks: "Taps into highly active Facebook groups, where thousands of transactions happen informally.",
    flow: [
      {
        title: "Create Payment Generator",
        description: "Develop a tool that generates branded QR codes and payment links for sellers",
        icon: "🔧"
      },
      {
        title: "Marketplace Integration",
        description: "Integrate with Facebook Marketplace API to enable seamless payments",
        icon: "🔄"
      },
      {
        title: "Seller Onboarding",
        description: "Create a simple onboarding process for sellers to start accepting BigPay payments",
        icon: "👥"
      },
      {
        title: "Transaction Monitoring",
        description: "Track and analyze transaction volumes to optimize the strategy",
        icon: "📊"
      }
    ]
  },
  {
    title: "Auto-claim Touch 'n Go Reloads from Giveaways",
    hack: "Offer automatic \"BigPay Reload Bonuses\" via links shared by influencers or in community groups (Reddit, Telegram, Discord).",
    execution: "Use deep links that auto-trigger wallet reloads or cashback when users sign up and top-up.",
    whyItWorks: "Incentivizes people to try BigPay without changing their current habits — like claiming reloads or vouchers.",
    flow: [
      {
        title: "Deep Link Setup",
        description: "Create deep linking infrastructure for automatic wallet reloads",
        icon: "🔗"
      },
      {
        title: "Influencer Partnerships",
        description: "Partner with key influencers to promote the reload bonuses",
        icon: "🤝"
      },
      {
        title: "Community Integration",
        description: "Integrate with popular community platforms (Reddit, Telegram, Discord)",
        icon: "🌐"
      },
      {
        title: "Performance Tracking",
        description: "Monitor conversion rates and user retention",
        icon: "📈"
      }
    ]
  },
  {
    title: "Scrape & Match Lazada/Shopee Buyers",
    hack: "Create a Chrome extension for sellers on Lazada/Shopee that automates customer refunds or cashback via BigPay instead of bank transfers.",
    execution: "Build a value-added tool like order trackers, and insert BigPay incentives as default refund options.",
    whyItWorks: "Sneaks BigPay into the backend of massive platforms without needing official integrations.",
    flow: [
      {
        title: "Extension Development",
        description: "Develop Chrome extension with order tracking capabilities",
        icon: "🔧"
      },
      {
        title: "Seller Tools",
        description: "Create dashboard for sellers to manage refunds and cashbacks",
        icon: "📊"
      },
      {
        title: "Integration Testing",
        description: "Test integration with Lazada and Shopee platforms",
        icon: "🧪"
      },
      {
        title: "Seller Onboarding",
        description: "Launch seller acquisition campaign",
        icon: "🚀"
      }
    ]
  },
  {
    title: "Tap into \"Remittance\" Communities",
    hack: "Go to Filipino, Bangladeshi, Indonesian Facebook groups (e.g. OFW groups), and offer zero-fee transfers if both sender & receiver use BigPay.",
    execution: "Provide an easy \"send & share\" invite link that pre-fills recipient details.",
    whyItWorks: "It piggybacks on trust-based communities with high transaction volumes.",
    flow: [
      {
        title: "Community Mapping",
        description: "Identify key remittance communities and groups",
        icon: "🗺️"
      },
      {
        title: "Zero-Fee Campaign",
        description: "Design and launch zero-fee transfer promotion",
        icon: "🎯"
      },
      {
        title: "Invite System",
        description: "Develop and test the invite link system",
        icon: "🔗"
      },
      {
        title: "Community Engagement",
        description: "Engage with community leaders and members",
        icon: "🤝"
      }
    ]
  },
  {
    title: "Leverage \"Pay to Join\" Telegram Groups",
    hack: "Collaborate with admins of premium Telegram groups (e.g. Forex, Stock Tips, NFT Alpha) to accept payments via BigPay instead of manual bank transfers.",
    execution: "Provide admins with branded QR code payment pages or referral links to track.",
    whyItWorks: "Injects BigPay into viral, often-underground ecosystems where trust is crucial.",
    flow: [
      {
        title: "Group Identification",
        description: "Identify high-value premium Telegram groups",
        icon: "🔍"
      },
      {
        title: "Admin Outreach",
        description: "Contact group admins with partnership proposal",
        icon: "📨"
      },
      {
        title: "Payment Integration",
        description: "Set up BigPay payment system for group access",
        icon: "💳"
      },
      {
        title: "Performance Monitoring",
        description: "Track conversion rates and revenue",
        icon: "📊"
      }
    ]
  },
  {
    title: "Instant Cashback for Bill Scanning",
    hack: "Build a tool that allows users to scan any utility bill (e.g. TNB, SYABAS, Maxis) and shows \"How much cashback you could've earned with BigPay.\"",
    execution: "Use OCR to pull the bill amount, then offer RMX cashback when they pay it through BigPay.",
    whyItWorks: "Hooks people emotionally by showing what they missed out on.",
    flow: [
      {
        title: "OCR Development",
        description: "Develop bill scanning and OCR technology",
        icon: "📸"
      },
      {
        title: "Cashback Calculator",
        description: "Create algorithm to calculate potential savings",
        icon: "🧮"
      },
      {
        title: "User Interface",
        description: "Design intuitive bill scanning interface",
        icon: "🎨"
      },
      {
        title: "Marketing Campaign",
        description: "Launch campaign to promote bill scanning feature",
        icon: "📢"
      }
    ]
  },
  {
    title: "Automated Salary Split with Cashback",
    hack: "Offer a \"Smart Salary Split\" feature — user connects their Maybank/CIMB salary account, and BigPay auto-pulls RM300 monthly into their wallet with rewards.",
    execution: "Use account linking + recurring prompts in-app.",
    whyItWorks: "Quietly builds long-term retention through embedded automation.",
    flow: [
      {
        title: "Bank Integration",
        description: "Integrate with Maybank and CIMB APIs",
        icon: "🏦"
      },
      {
        title: "Automation Setup",
        description: "Develop automated salary splitting system",
        icon: "⚙️"
      },
      {
        title: "Reward System",
        description: "Design and implement cashback rewards",
        icon: "🎁"
      },
      {
        title: "User Onboarding",
        description: "Create seamless account linking process",
        icon: "🚀"
      }
    ]
  }
];

export default function GrowthHacks() {
  const [selectedHack, setSelectedHack] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [submittedProposals, setSubmittedProposals] = useState<any[]>([]);

  const handleProposalSubmit = (proposal: any) => {
    setSubmittedProposals([...submittedProposals, proposal]);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-5xl mx-auto p-6">
        <div className="flex flex-col items-center mb-12">
          <div className="relative w-48 h-16 mb-6">
            <Image
              src="/logo_bigpay.avif"
              alt="BigPay Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Growth Hack Proposals
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mb-8">
            Innovative strategies to accelerate BigPay's growth and market presence
          </p>
          
          {/* Profitability Context */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 w-full max-w-3xl mb-8">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">BigPay's Growth Strategy</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-2">User Acquisition</h4>
                <p className="text-gray-700">Target: 2x user growth through viral marketing and community engagement</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-2">Transaction Volume</h4>
                <p className="text-gray-700">Goal: 3x increase in monthly transaction volume</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-2">Revenue Growth</h4>
                <p className="text-gray-700">Objective: 4x revenue through new revenue streams</p>
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-md hover:shadow-lg mb-8"
          >
            {showForm ? 'Hide Proposal Form' : 'Submit New Proposal'}
          </button>
        </div>

        {showForm && (
          <div className="mb-12">
            <ProposalForm onSubmit={handleProposalSubmit} />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {growthHacks.map((hack, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-2xl transition-all duration-300 border border-gray-100"
              onClick={() => setSelectedHack(selectedHack === index ? null : index)}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-bold">{index + 1}</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">{hack.title}</h3>
                  <div className="space-y-3">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-gray-700">
                        <span className="font-medium text-blue-700">The Hack:</span> {hack.hack}
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-gray-700">
                        <span className="font-medium text-blue-700">Execution:</span> {hack.execution}
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-gray-700">
                        <span className="font-medium text-blue-700">Why it works:</span> {hack.whyItWorks}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedHack !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedHack(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-xl p-8 max-w-3xl w-full shadow-2xl max-h-[90vh] overflow-y-auto"
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-xl">{selectedHack + 1}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-800">{growthHacks[selectedHack].title}</h3>
                </div>
                <div className="space-y-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2 text-blue-700">The Hack</h4>
                    <p className="text-gray-700">{growthHacks[selectedHack].hack}</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2 text-blue-700">Execution</h4>
                    <p className="text-gray-700">{growthHacks[selectedHack].execution}</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2 text-blue-700">Why it works</h4>
                    <p className="text-gray-700">{growthHacks[selectedHack].whyItWorks}</p>
                  </div>
                  <FlowVisualization
                    steps={growthHacks[selectedHack].flow}
                    title={growthHacks[selectedHack].title}
                  />
                </div>
                <div className="flex justify-end mt-8">
                  <button
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-md hover:shadow-lg"
                    onClick={() => setSelectedHack(null)}
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
} 