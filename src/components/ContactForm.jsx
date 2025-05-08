import { useState } from 'react';

export default function ContactForm() {
    const [form, setForm] = useState({ name: '', email: '', company: '', license: '', message: '' });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    return (
        <section className="py-20 px-6 max-w-xl mx-auto bg-white">
            <h2 className="text-3xl font-semibold text-center mb-8">Contact Us</h2>
            <form className="space-y-5">
                <input className="w-full p-3 border border-gray-300 rounded" name="name" placeholder="Name" onChange={handleChange} required />
                <input className="w-full p-3 border border-gray-300 rounded" name="email" placeholder="Email" type="email" onChange={handleChange} required />
                <input className="w-full p-3 border border-gray-300 rounded" name="company" placeholder="Company" onChange={handleChange} required />
                <select className="w-full p-3 border border-gray-300 rounded" name="license" onChange={handleChange} required>
                    <option value="">Select License Type</option>
                    <option>Antivirus</option>
                    <option>Office Suite</option>
                    <option>Developer Tool</option>
                </select>
                <textarea className="w-full p-3 border border-gray-300 rounded" name="message" placeholder="Message" rows={4} onChange={handleChange} required />
                <div className="pt-2">
                    <button className="w-full px-6 py-3 bg-black hover:bg-gray-800 text-white font-semibold rounded-xl"
                        type="submit">
                        Send
                    </button>
                </div>
            </form>
        </section>
    );
}
