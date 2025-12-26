import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const collections = [
    {
        id: 1,
        title: "Sebastian",
        subtitle: "Golden Flower",
        price: "2.3 ETH",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
        colSpan: "col-span-12 md:col-span-6 lg:col-span-5",
        height: "h-96"
    },
    {
        id: 2,
        title: "Ferhat Deniz",
        subtitle: "Golden Flower",
        price: "2.3 ETH",
        image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop",
        colSpan: "col-span-12 md:col-span-6 lg:col-span-7",
        height: "h-96"
    },
    {
        id: 3,
        title: "Javier Miranda",
        subtitle: "Golden Flower",
        price: "2.3 ETH",
        image: "https://images.unsplash.com/photo-1633511090164-b43840ea1607?q=80&w=2574&auto=format&fit=crop",
        colSpan: "col-span-12 md:col-span-6 lg:col-span-5",
        height: "h-96"
    },
    {
        id: 4,
        title: "Polina Kondrashova",
        subtitle: "Golden Flower",
        price: "2.3 ETH",
        image: "https://images.unsplash.com/photo-1618588507085-c79565432917?q=80&w=2543&auto=format&fit=crop",
        colSpan: "col-span-12 md:col-span-6 lg:col-span-7",
        height: "h-96"
    },
    {
        id: 5,
        title: "Milad Fakurian",
        subtitle: "Golden Flower",
        price: "2.3 ETH",
        image: "https://images.unsplash.com/photo-1614730341194-75c60740a023?q=80&w=2487&auto=format&fit=crop",
        colSpan: "col-span-12 md:col-span-6 lg:col-span-5",
        height: "h-96"
    },
    {
        id: 6,
        title: "Erick Butler",
        subtitle: "Golden Flower",
        price: "2.3 ETH",
        image: "https://images.unsplash.com/photo-1622547748225-3fc4abd2d00b?q=80&w=2532&auto=format&fit=crop",
        colSpan: "col-span-12 md:col-span-6 lg:col-span-7",
        height: "h-96"
    }
];

const Collections = () => {
    return (
        <section className="py-20 relative px-4">
            <div className="container mx-auto max-w-screen-xl">
                <div className="mb-12">
                    <h2 className="text-4xl font-bold text-white mb-2">Trending This Week</h2>
                    <p className="text-gray-400 max-w-md">Lorem ipsum dolor sit amet, consectetur dolore adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>

                <div className="grid grid-cols-12 gap-6">
                    {collections.map((item) => (
                        <motion.div
                            key={item.id}
                            whileHover={{ y: -5 }}
                            className={`relative rounded-2xl overflow-hidden group ${item.colSpan} ${item.height}`}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay Content */}
                            <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                    <p className="text-sm text-gray-300">{item.subtitle}</p>
                                </div>
                                <span className="text-purple-400 font-medium">{item.price}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-end mt-12">
                    <button className="bg-white text-black font-bold py-3 px-6 rounded-lg flex items-center gap-2 hover:bg-gray-200 transition-colors">
                        Explore More <ArrowUpRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Collections;
