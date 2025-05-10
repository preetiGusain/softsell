import { ArrowRightIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    title: 'See how Softsell helped DevSync scale globally.',
    quote:
      '“With Softsell, I can focus on building products while knowing our sales operations are automated and reliable.”',
    name: 'Aarti Mehta',
    role: 'DevSync Co-Founder',
  },
  {
    title: 'Here’s how CodeTrack grew using Softsell’s resale model.',
    quote:
      '“We evolved from a small team to an international player thanks to Softsell’s automation and ease of use.”',
    name: 'Karan Verma',
    role: 'CodeTrack CTO',
  },
  {
    title: 'Why DataNova chose Softsell to expand internationally.',
    quote:
      '“Softsell gave us access to new markets without the overhead—perfect for SaaS startups like ours.”',
    name: 'Riya Sen',
    role: 'DataNova CEO',
  },
];

export default function OurJourney() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-purple-50 text-center">
      <h2 className="text-4xl font-bold text-purple-900 mb-12">
        Join hundreds of forward-thinking SaaS companies<br />
        who trust Softsell to <span className="text-purple-700">power their growth journey.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-6 text-left shadow-md hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">{item.title}</h3>
            <p className="text-gray-700 mb-4 italic">“{item.quote}”</p>
            <p className="font-semibold text-gray-900">{item.name},</p>
            <p className="text-sm text-gray-500 mb-4">{item.role}</p>
            <a href="#" className="text-purple-700 font-medium inline-flex items-center hover:underline">
              Watch video <ArrowRightIcon className="w-4 h-4 ml-1" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
