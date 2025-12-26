import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative pt-10 pb-10 overflow-hidden">
            {/* Background Gradient Bottom Right */}
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-gradient-to-t from-purple-600/30 to-transparent rounded-full blur-[100px] pointer-events-none translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-4 max-w-screen-xl relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center pb-12 border-b border-white/10">
                    {/* Logo */}
                    <div className="mb-8 md:mb-0">
                        <h2 className="text-3xl font-bold text-white">NFTme</h2>
                    </div>

                    {/* Links */}
                    <div className="flex gap-12 text-sm font-medium text-gray-300">
                        <a href="#" className="hover:text-white transition-colors">Explore</a>
                        <a href="#" className="hover:text-white transition-colors">Marketplace</a>
                        <a href="#" className="hover:text-white transition-colors">Artists</a>
                        <a href="#" className="hover:text-white transition-colors">Contact</a>
                    </div>

                    {/* Socials */}
                    <div className="flex gap-4 mt-8 md:mt-0">
                        <a href="#" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200">
                            <Twitter size={20} />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-xs text-gray-400">
                    <div className="flex gap-4 mb-4 md:mb-0">
                        <a href="#">Privacy policy</a>
                        <span>|</span>
                        <a href="#">Terms of service</a>
                    </div>
                    <p>Copyright @ Kartik Bansal 2022. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
