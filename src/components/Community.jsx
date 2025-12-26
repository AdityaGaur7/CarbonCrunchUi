import React from 'react';
import { motion } from 'framer-motion';

const Community = () => {
    return (
        <section className="py-20 px-4">
            <div className="container mx-auto max-w-screen-xl grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Image */}
                <div className="rounded-[40px] overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=2835&auto=format&fit=crop" alt="Blue Waves" className="w-full h-full object-cover" />
                </div>

                {/* Right Content */}
                <div>
                    <h2 className="text-5xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                        Join The Community <br />
                        And Get The Best NFT <br />
                        Collection
                    </h2>
                    <button className="bg-gradient-to-r from-[#B936F5] to-[#5C24FF] text-white font-bold py-4 px-8 rounded-lg uppercase tracking-wide">
                        Join Community
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Community;
