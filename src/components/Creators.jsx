import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const creators = [
    { name: "Ferhat Deniz", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2576&auto=format&fit=crop" },
    { name: "Sebastian", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop" },
    { name: "Javier Miranda", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574&auto=format&fit=crop" },
    { name: "Erick Butler", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=2574&auto=format&fit=crop" },
];

const Creators = () => {
    return (
        <section className="py-20 relative overflow-hidden px-4">
            <div className="container mx-auto max-w-screen-xl">
                <div className="flex justify-between items-center mb-16">
                    <h2 className="text-4xl font-bold text-white">Popular Artists</h2>
                    <button className="bg-white text-black text-sm font-bold py-3 px-6 rounded-lg flex items-center gap-2 hover:bg-gray-200 transition-colors">
                        View all Artists <ArrowUpRight size={16} />
                    </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {creators.map((creator, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-6 border-4 border-transparent hover:border-purple-500 transition-colors duration-300">
                                <img src={creator.img} alt={creator.name} className="w-full h-full object-cover" />
                            </div>
                            <h3 className="font-medium text-xl text-white text-center">{creator.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Creators;
