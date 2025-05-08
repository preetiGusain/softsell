import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';

const reviews = [
    { name: 'Alice Johnson', role: 'IT Manager', company: 'TechCorp' },
    { name: 'Raj Singh', role: 'Procurement Head', company: 'Innova Inc.' },
    { name: 'Maria Gomez', role: 'Operations Lead', company: 'SoftNova' }
];

export default function Testimonials() {
    return (
        <section className="py-16 px-4 bg-amber-50">
            <h2 className="text-3xl text-center font-semibold mb-12">Customer Testimonials</h2>
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
                {reviews.map((r, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl w-80 shadow-md flex flex-col">
                        <ChatBubbleLeftRightIcon className="h-6 w-6 text-amber-500 mb-4" />
                        <p className="text-gray-700 italic mb-6">"Smooth and reliable platform! Highly recommend."</p>
                        <div className="mt-auto">
                            <p className="font-bold text-gray-900">{r.name}</p>
                            <p className="text-sm text-gray-600">{r.role} at {r.company}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}