import { useState } from 'react';

export default function ContactForm() {
    const [form, setForm] = useState({ name: '', email: '', company: '', license: '', message: '' });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    return (
        <section className="py-20 px-6 max-w-xl mx-auto bg-white dark:bg-neutral-900">
            <h2 className="text-3xl font-semibold text-center mb-8 text-neutral-900 dark:text-neutral-100">Contact Us</h2>
            <form className="space-y-5">
                <input
                    className="w-full p-3 border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 rounded text-neutral-900 dark:text-neutral-100 placeholder-gray-500 dark:placeholder-neutral-400"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    required
                />
                <input
                    className="w-full p-3 border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 rounded text-neutral-900 dark:text-neutral-100 placeholder-gray-500 dark:placeholder-neutral-400"
                    name="email"
                    placeholder="Email"
                    type="email"
                    onChange={handleChange}
                    required
                />
                <input
                    className="w-full p-3 border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 rounded text-neutral-900 dark:text-neutral-100 placeholder-gray-500 dark:placeholder-neutral-400"
                    name="company"
                    placeholder="Company"
                    onChange={handleChange}
                    required
                />
                <select
                    className="w-full p-3 border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 rounded text-neutral-900 dark:text-neutral-100"
                    name="license"
                    onChange={handleChange}
                    required
                >
                    <option value="" disabled>
                        Select License Type
                    </option>
                    <option>Antivirus</option>
                    <option>Office Suite</option>
                    <option>Developer Tool</option>
                </select>
                <textarea
                    className="w-full p-3 border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 rounded text-neutral-900 dark:text-neutral-100 placeholder-gray-500 dark:placeholder-neutral-400"
                    name="message"
                    placeholder="Message"
                    rows={4}
                    onChange={handleChange}
                    required
                />
                <div className="pt-2">
                    <button
                        className="w-full px-6 py-3 bg-black dark:bg-neutral-700 hover:bg-gray-800 dark:hover:bg-neutral-600 text-white font-semibold rounded-xl"
                        type="submit"
                    >
                        Send
                    </button>
                </div>
            </form>
        </section>
    );
}
