import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="pt-24 min-h-screen container mx-auto px-4 max-w-screen-xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-5xl font-bold mb-6">About NFTime</h1>
                <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                    We are the world's leading NFT marketplace, dedicated to empowering artists and connecting collectors with unique digital assets.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold">Our Mission</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Founded in 2023, NFTime aims to revolutionize the art world by leveraging blockchain technology. We believe in a future where digital ownership is transparent, secure, and accessible to everyone. Our platform supports creators by providing them with the tools they need to mint, sell, and manage their work.
                    </p>
                    <div className="grid grid-cols-2 gap-6 pt-4">
                        <div>
                            <h3 className="text-4xl font-bold text-purple-600">1M+</h3>
                            <p className="text-gray-500">NFTs Created</p>
                        </div>
                        <div>
                            <h3 className="text-4xl font-bold text-purple-600">$500M</h3>
                            <p className="text-gray-500">Trading Volume</p>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-blue-200 rounded-2xl blur-3xl opacity-30"></div>
                    <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop"
                        alt="Team meeting"
                        className="rounded-2xl shadow-xl relative z-10 w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
