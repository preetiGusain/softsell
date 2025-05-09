import React, { useState } from "react";

export default function ChatModal() {
    const [isOpen, setIsOpen] = useState(false);

    const questions = [
        "I'd like to speak with Sales.",
        "I want to know more about PayPro Global.",
        "I'm a PayPro Global partner & I need help.",
        "I have a question about a charge.",
    ];

    return (
        <>
            {/* Chat Icon */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-4 right-4 bg-purple-600 text-white p-4 rounded-full shadow-lg focus:outline-none hover:bg-purple-700"
            >
                💬
            </button>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-center z-50">
                    <div className="bg-white w-96 p-8 rounded-xl shadow-lg relative">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >
                            ✖
                        </button>
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="bg-purple-600 text-white p-2 rounded-full">
                                <span>🤖</span>
                            </div>
                            <h4 className="text-lg font-bold text-gray-900">PayPro Global Assistant</h4>
                        </div>
                        <p className="text-gray-700 mb-4">Hi there! Welcome to PayPro Global. How can I help you today?</p>
                        <ul className="space-y-2">
                            {questions.map((q, index) => (
                                <li
                                    key={index}
                                    className="text-sm bg-gray-100 p-2 rounded-lg cursor-pointer hover:bg-purple-100"
                                >
                                    {q}
                                </li>
                            ))}
                        </ul>
                        <input
                            type="text"
                            placeholder="Choose an option"
                            className="mt-4 w-full border rounded-lg px-3 py-2 text-sm focus:ring-purple-500 focus:border-purple-500"
                        />
                    </div>
                </div>
            )}
        </>
    );
}
