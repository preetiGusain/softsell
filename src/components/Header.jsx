import React, { useState } from "react";
import logo from "../assets/logo.png";
import ThemeToggle from "./ThemeToggle";

const dropdowns = {
    Solutions: {
        description:
            "Dedicated infrastructure to power your B2B SaaS, software, subscription, startup, enterprise, and more.",
        sections: {
            "BY USE CASE": ["B2C SaaS", "B2B SaaS", "B2G SaaS", "Software", "Video Games", "AI Tools"],
            "BY BUSINESS MODEL": ["Subscription", "One-time", "Freemium", "Tiered", "Hybrid", "Usage-based"],
            "BY BUSINESS TYPE": ["Startup", "SMBs", "Enterprise"],
        },
    },
    Products: {
        description: "Explore our full suite of tools tailored for software selling, license management, billing, and more.",
        sections: {
            "KEY FEATURES": ["Licensing", "Subscription Management", "Tax Automation", "Analytics", "Checkout Customization"],
        },
    },
    Resources: {
        description: "From insights on global sales tax regulations to SaaS guides, blogs, and curated answers.",
        sections: {
            CATEGORIES: ["Answers", "How-To", "Blog", "SaaS Sales Tax", "Calculators", "Testimonials"],
        },
    },
    Pricing: {
        description: "One fair price, all features included. Everything you need to grow.",
        sections: {
            INCLUDING: ["Global Payments", "Billing", "Fraud Protection", "SaaS Analytics", "Checkout", "Sales & Marketing"],
        },
    },
};

const Header = ({ onContactClick }) => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    return (
        <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
                {/* Logo and Title */}
                <div className="flex items-center space-x-3">
                    <img src={logo} alt="SoftSell Logo" className="h-10 w-auto" />
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">SoftSell</span>
                </div>

                {/* Navigation */}
                <nav
                    className="hidden md:flex space-x-6 text-sm font-medium text-gray-700 dark:text-gray-300"
                    onMouseLeave={() => setActiveDropdown(null)}
                >
                    {Object.keys(dropdowns).map((key) => (
                        <div
                            key={key}
                            className="relative"
                            onMouseEnter={() => setActiveDropdown(key)}
                        >
                            <span
                                className={`cursor-pointer hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-150 ${
                                    activeDropdown === key ? "text-purple-600 dark:text-purple-400 font-semibold" : ""
                                }`}
                            >
                                {key}
                            </span>

                            {activeDropdown === key && (
                                <div
                                    className="absolute top-full mt-4 bg-white dark:bg-gray-800 shadow-xl rounded-lg py-6 z-40 transition-all duration-300 ease-out"
                                    style={{
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                        width: "60vw",
                                    }}
                                    onMouseEnter={() => setActiveDropdown(key)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <div className="max-w-screen-2xl mx-auto px-12 flex text-left">
                                        <div className="w-2/5 pr-8 border-r border-gray-200 dark:border-gray-700">
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                                {key}
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-snug">
                                                {dropdowns[key].description}
                                            </p>
                                        </div>

                                        {/* Sections */}
                                        <div className="w-3/5 pl-8 flex flex-row gap-x-12">
                                            {Object.entries(dropdowns[key].sections).map(([title, items]) => (
                                                <div key={title}>
                                                    <p className="font-semibold text-gray-900 dark:text-white text-sm mb-2">
                                                        {title}
                                                    </p>
                                                    <ul className="space-y-1">
                                                        {items.map((item) => (
                                                            <li
                                                                key={item}
                                                                className="text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 cursor-pointer"
                                                            >
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    {/* Contact Us */}
                    <div>
                        <span
                            className="cursor-pointer hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-150"
                            onClick={onContactClick}
                        >
                            Contact Us
                        </span>
                    </div>
                </nav>

                {/* Right Buttons */}
                <div className="flex items-center space-x-4">
                    <ThemeToggle />
                    <button className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
                        Log In
                    </button>
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm hover:bg-purple-700">
                        Sign Up
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
