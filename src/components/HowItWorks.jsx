import { motion } from 'framer-motion';
import { text } from 'framer-motion/client';

const steps = [
    { icon: '📤', title: 'Upload License', text: 'Submit your Software license details' },
    { icon: '💰', title: 'Get Valuation' , text: 'Receive a fair-market value assessment'},
    { icon: '🏦', title: 'Get Paid' , text: 'Accept the offer and receive payment'},
];

export default function HowItWorks() {
    return (
        <section className="py-16 px-4 bg-amber-50">
            <h2 className="text-3xl text-center font-semibold mb-10">
                How It Works
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                {steps.map((step, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white p-6 rounded-xl shadow-lg text-center w-60"
                    >
                        <div className="text-5xl mb-6">{step.icon}</div>
                        <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                        <p className="text-gray-600 text-base leading-relaxed">{step.text}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
