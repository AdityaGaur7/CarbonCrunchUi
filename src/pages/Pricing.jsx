import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
    return (
        <div className="pt-24 min-h-screen container mx-auto px-4 max-w-screen-xl">
            <div className="text-center mb-16">
                <h1 className="text-5xl font-bold mb-6">Pricing Plans</h1>
                <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                    Choose a plan that suits your needs. Transparent fees, no hidden costs.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
                {/* Starter */}
                <div className="p-8 rounded-3xl bg-white border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-500 mb-2">Starter</h3>
                    <div className="text-4xl font-bold mb-6">2.5% <span className="text-lg text-gray-400 font-normal">/ txn</span></div>
                    <p className="text-gray-500 mb-8">Perfect for new artists and collectors getting started.</p>
                    <button className="w-full py-3 rounded-xl border-2 border-purple-600 text-purple-600 font-bold hover:bg-purple-50 transition-colors">Current Plan</button>
                    <ul className="mt-8 space-y-4">
                        <li className="flex gap-3 text-gray-600"><Check size={20} className="text-green-500" /> Standard Minting</li>
                        <li className="flex gap-3 text-gray-600"><Check size={20} className="text-green-500" /> Basic Analytics</li>
                        <li className="flex gap-3 text-gray-600"><Check size={20} className="text-green-500" /> Email Support</li>
                    </ul>
                </div>

                {/* Pro */}
                <motion.div
                    whileHover={{ y: -10 }}
                    className="p-8 rounded-3xl bg-dark text-white shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 bg-gradient-to-bl from-purple-500 to-pink-500 text-white text-xs font-bold px-4 py-1 rounded-bl-xl">POPULAR</div>
                    <h3 className="text-xl font-bold text-gray-300 mb-2">Pro Creator</h3>
                    <div className="text-4xl font-bold mb-6">1.5% <span className="text-lg text-gray-400 font-normal">/ txn</span></div>
                    <p className="text-gray-400 mb-8">For serious creators who want lower fees and more tools.</p>
                    <button className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold hover:shadow-lg transition-shadow">Upgrade Now</button>
                    <ul className="mt-8 space-y-4">
                        <li className="flex gap-3 text-gray-300"><Check size={20} className="text-green-400" /> Priority Minting</li>
                        <li className="flex gap-3 text-gray-300"><Check size={20} className="text-green-400" /> Advanced Analytics</li>
                        <li className="flex gap-3 text-gray-300"><Check size={20} className="text-green-400" /> 24/7 Priority Support</li>
                        <li className="flex gap-3 text-gray-300"><Check size={20} className="text-green-400" /> Verified Badge</li>
                    </ul>
                </motion.div>

                {/* Enterprise */}
                <div className="p-8 rounded-3xl bg-white border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-500 mb-2">Enterprise</h3>
                    <div className="text-4xl font-bold mb-6">Custom</div>
                    <p className="text-gray-500 mb-8">For large scale galleries and institutional traders.</p>
                    <button className="w-full py-3 rounded-xl border-2 border-gray-200 text-dark font-bold hover:bg-gray-50 transition-colors">Contact Sales</button>
                    <ul className="mt-8 space-y-4">
                        <li className="flex gap-3 text-gray-600"><Check size={20} className="text-green-500" /> Zero Transaction Fees</li>
                        <li className="flex gap-3 text-gray-600"><Check size={20} className="text-green-500" /> White-label Solution</li>
                        <li className="flex gap-3 text-gray-600"><Check size={20} className="text-green-500" /> Dedicated Account Manager</li>
                        <li className="flex gap-3 text-gray-600"><Check size={20} className="text-green-500" /> API Access</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
