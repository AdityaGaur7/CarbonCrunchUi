import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-24 min-h-screen container mx-auto px-4 max-w-screen-xl">
            <div className="text-center mb-16">
                <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
                <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                    Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
                {/* Contact Info */}
                <div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
                        <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-purple-100 p-3 rounded-lg text-purple-600">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Email Us</h4>
                                    <p className="text-gray-500">support@nftime.com</p>
                                    <p className="text-gray-500">partners@nftime.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Call Us</h4>
                                    <p className="text-gray-500">+1 (555) 123-4567</p>
                                    <p className="text-gray-500">Mon - Fri, 9am - 6pm EST</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-pink-100 p-3 rounded-lg text-pink-600">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Visit Us</h4>
                                    <p className="text-gray-500">123 Crypto Blvd, Suite 100</p>
                                    <p className="text-gray-500">New York, NY 10001</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" placeholder="John" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" placeholder="Doe" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                            <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" placeholder="john@example.com" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                            <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" placeholder="How can we help you?"></textarea>
                        </div>

                        <button type="button" className="w-full bg-purple-600 text-white font-bold py-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
