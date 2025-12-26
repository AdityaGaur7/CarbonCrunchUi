import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe, Layers } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <Shield size={32} className="text-purple-500" />,
            title: "Secure Wallet",
            description: "Your assets are protected with industry-leading security and non-custodial wallet integration."
        },
        {
            icon: <Zap size={32} className="text-blue-500" />,
            title: "Fast Transactions",
            description: "Experience lightning-fast minting and trading with optimized smart contracts."
        },
        {
            icon: <Globe size={32} className="text-green-500" />,
            title: "Global Marketplace",
            description: "Connect with creators and collectors from over 190 countries around the world."
        },
        {
            icon: <Layers size={32} className="text-pink-500" />,
            title: "Multi-Chain Support",
            description: "Trade NFTs across Ethereum, Solana, and Polygon networks seamlessly."
        }
    ];

    return (
        <div className="pt-24 min-h-screen container mx-auto px-4 max-w-screen-xl">
            <div className="text-center mb-16">
                <h1 className="text-5xl font-bold mb-6">Platform Features</h1>
                <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                    Discover the powerful tools and features that make NFTime the best place to trade NFTs.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
                {features.map((feature, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <div className="bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                            {feature.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                        <p className="text-gray-500 leading-relaxed">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Features;
