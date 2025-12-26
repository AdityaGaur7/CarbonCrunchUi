import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden px-4">
            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-600/20 rounded-full blur-[120px]"></div>
                <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-purple-800/20 rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto max-w-screen-xl">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                    {/* Text Content */}
                    <div className="lg:w-1/2 z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] text-white mb-6">
                                Discover Rare <br />
                                Collections Of <br />
                                Art & NFT's
                            </h1>
                            <p className="text-lg text-gray-400 mb-10 max-w-md">
                                Create, Explore, & Collect Digital Art NFTs
                            </p>

                            <div className="flex flex-wrap gap-4 mb-16">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-gradient-to-r from-[#B936F5] to-[#5C24FF] text-white font-bold rounded-lg text-sm px-10 py-4 uppercase tracking-wide hover:shadow-[0_0_20px_rgba(185,54,245,0.5)] transition-shadow"
                                >
                                    Explore
                                </motion.button>
                            </div>

                            <div className="flex gap-16">
                                <div>
                                    <h3 className="text-3xl font-bold text-white">32k+</h3>
                                    <p className="text-gray-400 text-sm mt-1">Artwork</p>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-white">20k+</h3>
                                    <p className="text-gray-400 text-sm mt-1">Auctions</p>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-white">10k+</h3>
                                    <p className="text-gray-400 text-sm mt-1">Artists</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Hero Images / Visuals - Matching the specific overlapping card style */}
                    <div className="lg:w-1/2 relative flex justify-end">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative w-[500px] h-[600px]"
                        >
                            {/* Back Card */}

                            <img src="../src/assets/img1.png" className="w-full h-full object-cover" alt="NFT Back" />





                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
