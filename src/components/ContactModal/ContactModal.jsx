import React, { useState } from "react";

const ContactModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        licenseType: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    const licenseOptions = ["Standard", "Professional", "Enterprise"];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Name is required.";
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = "Valid email is required.";
        if (!formData.licenseType) newErrors.licenseType = "Select a license type.";
        if (!formData.message) newErrors.message = "Message cannot be empty.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert("Form submitted successfully!");
            onClose(); // Close the modal
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full relative">
                <button
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                    onClick={onClose}
                >
                    ✖
                </button>
                <h2 className="text-2xl font-bold mb-6 text-purple-600">Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`mt-1 p-3 w-full border rounded-lg bg-gray-50 focus:ring-purple-600 focus:border-purple-600 ${errors.name && "border-red-500"}`}
                        />
                        {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            className={`mt-1 p-3 w-full border rounded-lg bg-gray-50 focus:ring-purple-600 focus:border-purple-600 ${errors.email && "border-red-500"}`}
                        />
                        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Company</label>
                        <input
                            type="text"
                            name="company"
                            placeholder="Your Company Name"
                            value={formData.company}
                            onChange={handleChange}
                            className="mt-1 p-3 w-full border rounded-lg bg-gray-50 focus:ring-purple-600 focus:border-purple-600"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">License Type</label>
                        <select
                            name="licenseType"
                            value={formData.licenseType}
                            onChange={handleChange}
                            className={`mt-1 p-3 w-full border rounded-lg bg-gray-50 focus:ring-purple-600 focus:border-purple-600 ${errors.licenseType && "border-red-500"}`}
                        >
                            <option value="">Select a License Type</option>
                            {licenseOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                        {errors.licenseType && <p className="text-sm text-red-500">{errors.licenseType}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="5"
                            className={`mt-1 p-3 w-full border rounded-lg bg-gray-50 focus:ring-purple-600 focus:border-purple-600 ${errors.message && "border-red-500"}`}
                        ></textarea>
                        {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
                    </div>

                    <button
                        type="submit"
                        className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm hover:bg-purple-700 w-full"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactModal;
