import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Star, Leaf, Filter } from 'lucide-react';

const Products = [
    { id: 1, name: "Bamboo Toothbrush Set", price: "$12.00", rating: 4.8, image: "https://img.freepik.com/premium-photo/natural-eco-friendly-bamboo-toothbrush-with-tree-leaves-plastic-toothbrush-gray-surface_926199-1432752.jpg?ga=GA1.1.588263625.1759817255&semt=ais_wordcount_boost&w=740&q=80", impact: "Zero Plastic" },
    { id: 2, name: "Reusable Silicone Bags", price: "$24.50", rating: 4.9, image: "https://img.freepik.com/premium-photo/hand-holding-yellow-mesh-bag-with-daisies_1030899-14180.jpg?ga=GA1.1.588263625.1759817255&semt=ais_wordcount_boost&w=740&q=80", impact: "Save 500+ Baggies" },
    { id: 3, name: "Organic Cotton Tote", price: "$18.00", rating: 4.7, image: "https://images.unsplash.com/photo-1597484662317-c9253e609cfa?q=80&w=2696&auto=format&fit=crop", impact: "Fair Trade" },
    { id: 4, name: "Solar Power Bank", price: "$45.00", rating: 4.6, image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=2671&auto=format&fit=crop", impact: "Clean Energy" },
    { id: 5, name: "Glass Water Bottle", price: "$22.00", rating: 4.9, image: "https://images.unsplash.com/photo-1602143407151-11115cdbf6e0?q=80&w=2574&auto=format&fit=crop", impact: "Plastic Free" },
    { id: 6, name: "Recycled Paper Notebook", price: "$8.50", rating: 4.5, image: "https://images.unsplash.com/photo-1531346878377-a513bc951a46?q=80&w=2670&auto=format&fit=crop", impact: "100% Recycled" },
];

const ProductCard = ({ product, index }) => (
    <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -5 }}
        className="bg-white rounded-3xl p-4 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] group cursor-pointer"
    >
        <div className="relative h-48 rounded-2xl overflow-hidden mb-4 bg-slate-100">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-[10px] font-bold text-[#1B4332] flex items-center gap-1">
                <Leaf size={10} /> {product.impact}
            </div>
            <button className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1B4332] shadow-lg translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                <ShoppingBag size={18} />
            </button>
        </div>

        <h3 className="font-bold text-[#2C3E50] mb-1">{product.name}</h3>
        <div className="flex justify-between items-center">
            <span className="text-lg font-black text-[#1B4332]">{product.price}</span>
            <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
                <Star size={12} fill="currentColor" /> {product.rating}
            </div>
        </div>
    </motion.div>
);

const Market = () => {
    return (
        <div className="pb-20 md:pb-0">
            <header className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
                <div>
                    <h2 className="text-3xl font-serif font-bold text-[#1B4332] mb-2">Green Market</h2>
                    <p className="text-slate-500">Curated sustainable goods for your daily life.</p>
                </div>

                <div className="flex gap-3">
                    <button className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 font-medium hover:bg-slate-50 transition-colors flex items-center gap-2">
                        <Filter size={18} /> Filters
                    </button>
                    <button className="px-6 py-2 rounded-xl bg-[#1B4332] text-white font-bold shadow-lg hover:shadow-xl hover:bg-[#2D6A4F] transition-all">
                        My Cart (2)
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Products.map((p, i) => (
                    <ProductCard key={p.id} product={p} index={i} />
                ))}
            </div>

            <div className="mt-12 bg-[#F0F2F5] rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-4xl shadow-lg border-4 border-[#FDFBF7]">
                    🌱
                </div>
                <div className="flex-1">
                    <h3 className="font-bold text-xl text-[#2C3E50] mb-2">Sell your sustainable products</h3>
                    <p className="text-slate-500">Join our community of makers and reach eco-conscious customers worldwide.</p>
                </div>
                <button className="px-8 py-3 bg-white text-[#1B4332] font-bold rounded-xl shadow-md border border-slate-100 hover:bg-[#E8F5E9] transition-colors">
                    Become a Seller
                </button>
            </div>
        </div>
    );
};

export default Market;
