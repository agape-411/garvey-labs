"use client";

import { useState } from "react";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! (Replace with backend or email integration)");
    setForm({
      name: "",
      organization: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4">
      {/* Header */}
      <header className="text-center pb-5 pt-10">
        <h1 className="text-4xl font-bold">Contact Garvey Labs</h1>
        <p className="mt-4 text-lg max-w-xl mx-auto">
          Ready to amplify your voice and build stronger communities?
        </p>
      </header>

      {/* Contact Form */}
      <section className="max-w-3xl mx-auto py-10">
        <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
        <p className="mb-8 text-lg">
          Whether you're looking to develop a strategic communications campaign, engage communities
          around a renewable energy project, or navigate a challenging situation, we're here to help.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="name"
              type="text"
              required
              placeholder="Name *"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 border rounded bg-amber-50 dark:bg-gray-800 text-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            <input
              name="organization"
              type="text"
              placeholder="Organization"
              value={form.organization}
              onChange={handleChange}
              className="w-full p-3 border rounded bg-amber-50 dark:bg-gray-800 text-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="email"
              type="email"
              required
              placeholder="Email *"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border rounded bg-amber-50 dark:bg-gray-800 text-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded bg-amber-50 dark:bg-gray-800 text-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          <div className="relative">
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full p-3 pr-10 border rounded bg-amber-50 dark:bg-gray-800 text-lg appearance-none focus:ring-2 focus:ring-green-500 focus:outline-none"
            >
              <option value="">Select a service area</option>
              <option value="renewable-energy">Renewable Energy Civic Engagement</option>
              <option value="green-data-centers">Green Data Centers & Digital</option>
              <option value="labor">Labor Union Communications</option>
              <option value="social-impact">Social Impact Organizations</option>
              <option value="crisis">Crisis Communications</option>
              <option value="other">Other</option>
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
              ▼
            </span>
          </div>

          <textarea
            name="message"
            required
            placeholder="Tell us about your project, goals, and how we can help..."
            rows={6}
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 border rounded bg-amber-50 dark:bg-gray-800 text-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
          />

          <button
            type="submit"
            className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 text-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-2xl font-semibold text-center mb-10">Connect With Us</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto px-4">
          <div className="bg-white dark:bg-gray-900 border p-6 rounded text-center hover:bg-green-500">
            <h3 className="text-lg font-medium">Email</h3>
            <p className="mt-2 text-lg">contacts@garveylabs.com</p>
          </div>

          <div className="bg-white dark:bg-gray-900 border p-6 rounded text-center hover:bg-green-500">
            <h3 className="text-lg font-medium">Phone</h3>
            <p className="mt-2 text-lg">(555) 123-4567</p>
          </div>

          <div className="bg-white dark:bg-gray-900 border p-6 rounded text-center hover:bg-green-500">
            <h3 className="text-lg font-medium">Location</h3>
            <p className="mt-2 text-lg">14 Ridge Square NW, 3rd Floor, Washington, DC 20016</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
