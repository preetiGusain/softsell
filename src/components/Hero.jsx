import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="py-20 px-6 text-center">
            <motion.div
                className="text-center max-w-3xl mx-auto"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Sell Your Software Licenses with Ease
                </h1>
                <p className="text-lg md:text-xl mb-8">
                    Maximize your software investment by turning unused licenses into instant cash. Simple process, secure transactions, and fast payouts.
                </p>
                <button className="px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-xl">
                    Sell My Licenses
                </button>
            </motion.div>
        </section>
    );
}
