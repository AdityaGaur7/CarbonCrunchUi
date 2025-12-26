import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const BitcoinArt = () => {
    return (
        <section className="py-20 px-4">
            <div className="container mx-auto max-w-screen-xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="rounded-[40px] overflow-hidden shadow-2xl"
                    >
                        <img src="../src/assets/img2.png" alt="Bitcoin Art" className="w-full h-auto object-cover" />
                    </motion.div>

                    {/* Right Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <h2 className="text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                            Bitcoin <br />
                            Art Work
                        </h2>
                        <p className="text-purple-400 font-medium mb-12">Created by Jonathan Borba</p>

                        <div className="flex gap-16 mb-12">
                            <div className="border-l-2 border-white/20 pl-6">
                                <p className="text-gray-400 text-sm mb-1">Current Bid</p>
                                <h3 className="text-4xl font-bold text-white">1.09 ETH</h3>
                                <p className="text-gray-500 text-sm mt-1">$1,835</p>
                            </div>
                            <div className="border-l-2 border-white/20 pl-6">
                                <p className="text-gray-400 text-sm mb-1">Auction Ends In</p>
                                <div className="flex gap-4">
                                    <div>
                                        <span className="text-3xl font-bold text-white">18</span>
                                        <p className="text-xs text-gray-500">Hours</p>
                                    </div>
                                    <div>
                                        <span className="text-3xl font-bold text-white">57</span>
                                        <p className="text-xs text-gray-500">Minutes</p>
                                    </div>
                                    <div>
                                        <span className="text-3xl font-bold text-white">14</span>
                                        <p className="text-xs text-gray-500">Seconds</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className="bg-white text-black font-bold py-4 px-10 rounded-lg flex items-center gap-2 hover:bg-gray-200 transition-colors">
                            View Art Work <ArrowUpRight size={20} />
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BitcoinArt;
