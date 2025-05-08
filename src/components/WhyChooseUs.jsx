import { CheckCircleIcon } from '@heroicons/react/24/solid';

const features = [
  { title: 'Secure Transactions', text: 'All transactions are encrypted and protected for your peace of mind.' },
  { title: 'Fast Payouts', text: 'Receive your payment promptly once your license is verified.' },
  { title: 'Licensed Valuation Experts', text: 'Your license is assessed by certified professionals.' },
  { title: 'Transparent Pricing', text: 'No hidden fees—just clear, honest offers.' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center mb-12">Why Choose Us</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start bg-white p-6 rounded-xl shadow-sm space-x-4">
            <CheckCircleIcon className="h-8 w-8 text-emerald-500 mt-1 flex-shrink-0" />
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
