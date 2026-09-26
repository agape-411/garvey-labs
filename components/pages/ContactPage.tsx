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
    website: "", // honeypot
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name || !form.email || !form.message) {
      return "Please fill all required fields.";
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      return "Enter a valid email address.";
    }

    if (form.message.length < 10) {
      return "Message must be at least 10 characters.";
    }

    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const error = validate();
    if (error) {
      alert(error);
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm({
          name: "",
          organization: "",
          email: "",
          phone: "",
          service: "",
          message: "",
          website: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4">
      
      {/* ================= HEADER ================= */}
      <header className="text-center pb-6 pt-12">
        <h1 className="text-4xl md:text-5xl font-bold">
          Contact Garvey Labs
        </h1>
        <p className="mt-4 text-lg max-w-xl mx-auto">
          Ready to amplify your voice and build stronger communities?
        </p>
      </header>

      {/* ================= FORM ================= */}
      <section className="max-w-3xl mx-auto py-10">
        <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
        <p className="mb-8 text-lg">
          Whether you're developing a strategic communications campaign,
          engaging communities, or navigating a complex challenge —
          we’re here to help.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Honeypot (spam protection) */}
          <input
            type="text"
            name="website"
            value={form.website}
            onChange={handleChange}
            className="hidden"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="name"
              type="text"
              required
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 border rounded bg-amber-50 dark:bg-gray-800 text-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
            <input
              name="organization"
              type="text"
              placeholder="Organization"
              value={form.organization}
              onChange={handleChange}
              className="w-full p-3 border rounded bg-amber-50 dark:bg-gray-800 text-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border rounded bg-amber-50 dark:bg-gray-800 text-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded bg-amber-50 dark:bg-gray-800 text-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          <div className="relative">
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full p-3 pr-10 border rounded bg-amber-50 dark:bg-gray-800 text-lg appearance-none focus:ring-2 focus:ring-green-500 outline-none"
            >
              <option value="">Select a service area</option>
              <option value="renewable-energy">Renewable Energy Civic Engagement</option>
              <option value="green-data-centers">Green Data Centers & Digital</option>
              <option value="labor">Labor Union Communications</option>
              <option value="social-impact">Social Impact Organizations</option>
              <option value="crisis">Crisis Communications</option>
              <option value="other">Other</option>
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
              ▼
            </span>
          </div>

          <textarea
            name="message"
            required
            placeholder="Tell us about your project..."
            rows={6}
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 border rounded bg-amber-50 dark:bg-gray-800 text-lg focus:ring-2 focus:ring-green-500 outline-none"
          />

          {/* Status Messages */}
          {status === "success" && (
            <p className="text-green-600 font-medium">
              ✅ Message sent successfully.
            </p>
          )}

          {status === "error" && (
            <p className="text-red-600 font-medium">
              ❌ Something went wrong. Try again.
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-black text-white rounded text-lg hover:bg-gray-800 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>

      {/* ================= CONTACT INFO ================= */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Connect With Us
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto px-4">
          
          <div className="bg-white dark:bg-gray-900 border p-6 rounded text-center hover:bg-green-500 transition">
            <h3 className="text-lg font-medium">Email</h3>
            <p className="mt-2 text-lg">contact@garveylabs.com</p>
          </div>

          <div className="bg-white dark:bg-gray-900 border p-6 rounded text-center hover:bg-green-500 transition">
            <h3 className="text-lg font-medium">Phone</h3>
            <p className="mt-2 text-lg">(240) 630-4372</p>
          </div>

          <div className="bg-white dark:bg-gray-900 border p-6 rounded text-center hover:bg-green-500 transition">
            <h3 className="text-lg font-medium">Location</h3>
            <p className="mt-2 text-lg">
              14 Ridge Square NW, 3rd Floor, Washington, DC
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactPage;