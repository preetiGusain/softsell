import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-900 px-6">
            <motion.div
                className="text-center max-w-3xl"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-900 dark:text-white leading-tight">
                    Sell Your Software Licenses with Ease
                </h1>
                <p className="mt-6 text-lg md:text-xl text-neutral-600 dark:text-neutral-300">
                    Maximize your software investment by turning unused licenses into instant cash. Simple process, secure transactions, and fast payouts.
                </p>
                <div className="mt-8 flex justify-center">
                    <button className="px-8 py-4 text-lg font-semibold bg-amber-500 hover:bg-amber-600 text-black border-2 border-black dark:border-white rounded-xl transition-colors duration-300">
                        Sell My Licenses
                    </button>
                </div>
            </motion.div>
        </section>
    );
}