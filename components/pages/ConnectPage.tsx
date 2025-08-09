"use client";

import React from "react";

export default function ConnectPage() {
  const fields = [
    { id: "name", label: "Name *", type: "text", required: true },
    { id: "email", label: "Email *", type: "email", required: true },
    { id: "phone", label: "Phone", type: "tel" },
    {
      id: "collaboration-type",
      label: "Connection Interest",
      type: "select",
      options: [
        "Select connection type",
        "Freelance Project Work",
        "Independent Consulting",
        "Internship/Learning Opportunity",
        "Strategic Partnership",
        "Other",
      ],
    },
    {
      id: "expertise",
      label: "Areas of Expertise",
      type: "select",
      options: [
        "Select primary expertise",
        "Strategic Communications",
        "Community Engagement",
        "Renewable Energy",
        "Green Data Centers",
        "Labor Relations",
        "Social Impact/Justice",
        "Crisis Communications",
        "Other",
      ],
    },
    {
      id: "experience",
      label: "Experience Level",
      type: "select",
      options: [
        "Select experience level",
        "Entry Level (0-2 years)",
        "Mid-Level (3-7 years)",
        "Senior Level (8+ years)",
        "Executive/Leadership Level",
      ],
    },
    {
      id: "availability",
      label: "Availability",
      type: "select",
      options: [
        "Select availability",
        "Available Immediately",
        "Available in 2-4 weeks",
        "Available in 1-3 months",
        "Ongoing/Project Basis",
      ],
    },
  ];

  return (
    <div className="bg-white text-[#2D3748] leading-relaxed">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-[#2C5282] to-[#1A365D] text-white py-16 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Connect With Us</h1>
        <p className="text-[#E6FFFA] text-lg max-w-2xl mx-auto">
          Join our network of strategic communications and community engagement professionals
        </p>
      </header>

      {/* Intro */}
      <section className="max-w-5xl mx-auto px-6 py-12 border-b border-[#E2E8F0] bg-white">
        <h2 className="text-4xl font-semibold text-[#2C5282] mb-4">Building a Network of Excellence</h2>
        <p>
          Garvey Labs works with talented freelancers, independent consultants, and emerging
          professionals who share our commitment to creating positive change. We're always
          interested in connecting with skilled practitioners who can contribute to our clients'
          success across renewable energy, green data centers, labor organizing, and social impact
          work.
        </p>
      </section>

      {/* Ways to Connect */}
      <section className="max-w-5xl mx-auto px-6 py-12 border-b border-[#E2E8F0] bg-white">
        <h2 className="text-4xl font-semibold text-[#2C5282] mb-8">Ways to Connect</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Project-Based Partnerships",
              desc: "Work with us on specific client engagements, bringing your specialized skills to support strategic communications and community engagement initiatives.",
            },
            {
              title: "Subject Matter Expertise",
              desc: "Share your deep knowledge in areas like renewable energy, digital infrastructure, labor relations, or social justice advocacy to enhance our client solutions.",
            },
            {
              title: "Capacity Support",
              desc: "Join our extended team during busy periods or large-scale projects requiring additional strategic communications and engagement expertise.",
            },
            {
              title: "Learning & Development",
              desc: "Gain hands-on experience in strategic communications and community engagement while contributing to meaningful projects creating positive change.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-md p-6 rounded-lg hover:border-[#4299E1] border transition-all duration-200 hover:-translate-y-1"
            >
              <h3 className="text-2xl font-semibold text-[#2C5282] mb-3">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ideal Collaborators */}
      <section className="max-w-5xl mx-auto px-6 py-12 border-b border-[#E2E8F0] bg-[#EDF2F7]">
        <h2 className="text-4xl font-semibold text-[#2C5282] mb-8">Who We're Looking For</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Strategic Communications Professionals",
              list: [
                "Message development and narrative building expertise",
                "Media relations and crisis communications experience",
                "Content creation and storytelling skills",
                "Digital communications and social media strategy",
              ],
            },
            {
              title: "Community Engagement Specialists",
              list: [
                "Public involvement and stakeholder engagement experience",
                "Facilitation and workshop design skills",
                "Community organizing and grassroots mobilization",
                "Cultural competency and equity-focused approaches",
              ],
            },
            {
              title: "Sector Specialists",
              list: [
                "Renewable energy and clean technology background",
                "Data center and digital infrastructure knowledge",
                "Labor organizing and union communications experience",
                "Social justice and advocacy campaign expertise",
              ],
            },
            {
              title: "Emerging Professionals",
              list: [
                "Recent graduates in communications, public policy, or related fields",
                "Passion for social impact and sustainable development",
                "Strong research and analytical skills",
                "Eagerness to learn and contribute to meaningful work",
              ],
            },
          ].map((group, i) => (
            <div key={i} className="border-l-4 border-[#2C5282] pl-4">
              <h3 className="text-2xl font-semibold text-[#2D3748] mb-3">{group.title}</h3>
              <ul className="list-disc list-inside space-y-2">
                {group.list.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* How We Work Together */}
      <section className="max-w-5xl mx-auto px-6 py-12 border-b border-[#E2E8F0] bg-white">
        <h2 className="text-4xl font-semibold text-[#2C5282] mb-8">How We Work Together</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Project-Specific Engagement",
              desc: "Most collaborations are tied to specific client projects, with clear scopes, timelines, and deliverables tailored to your expertise and availability.",
            },
            {
              title: "Flexible Arrangements",
              desc: "We offer various collaboration structures - from short-term project support to ongoing consulting relationships based on mutual needs and interests.",
            },
            {
              title: "Professional Development",
              desc: "Collaborators gain exposure to diverse clients and challenging projects while building expertise in strategic communications and community engagement.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-md p-6 rounded-lg hover:border-[#4299E1] border transition-all duration-200 hover:-translate-y-1"
            >
              <h3 className="text-2xl font-semibold text-[#2C5282] mb-3">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Collaboration Values */}
      <section className="max-w-5xl mx-auto px-6 py-12 border-b border-[#E2E8F0] bg-[#EDF2F7]">
        <h2 className="text-4xl font-semibold text-[#2C5282] mb-8">Our Collaboration Values</h2>
        {[
          {
            title: "Mutual Respect & Professional Growth",
            desc: "We believe in creating opportunities for learning and development while delivering exceptional client service. Collaborators are valued partners, not just additional capacity.",
          },
          {
            title: "Commitment to Impact",
            desc: "All our work - whether with renewable energy developers, labor unions, or social justice organizations - is driven by a commitment to creating positive change in communities.",
          },
          {
            title: "Excellence & Innovation",
            desc: "We seek collaborators who share our commitment to high-quality work and innovative approaches to communications and engagement challenges.",
          },
        ].map((item, i) => (
          <div key={i} className="border-l-4 border-[#2C5282] pl-4 mb-6">
            <h3 className="text-2xl font-semibold text-[#2D3748] mb-2">{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Form */}
      <section className="max-w-5xl mx-auto px-6 py-12 bg-white">
        <h2 className="text-4xl font-semibold text-[#2C5282] mb-4">Start the Conversation</h2>
        <p className="mb-6">
          Interested in exploring collaboration opportunities? We'd love to learn about your
          background, expertise, and interests. Please share information about your experience and
          how you might contribute to our work creating positive change.
        </p>

        <form
          action="mailto:connect@garveylabs.com"
          method="post"
          encType="text/plain"
          className="space-y-4"
        >
          {fields.map((field, i) => (
            <div key={i}>
              <label htmlFor={field.id} className="block font-medium mb-1">
                {field.label}
              </label>
              {field.type === "select" && field.options ? (
                <select
                  id={field.id}
                  name={field.id}
                  defaultValue=""
                  className="w-full border border-[#E2E8F0] rounded-lg p-3 focus:outline-none focus:border-[#4299E1]"
                >
                  {field.options.map((opt, idx) => (
                    <option
                      key={idx}
                      value={idx === 0 ? "" : opt.toLowerCase().replace(/\s+/g, "-")}
                      disabled={idx === 0}
                      hidden={idx === 0}
                    >
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  required={field.required || false}
                  className="w-full border border-[#E2E8F0] rounded-lg p-3 focus:outline-none focus:border-[#4299E1]"
                />
              )}
            </div>
          ))}

          <div>
            <label htmlFor="message" className="block font-medium mb-1">
              Tell Us About Yourself *
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Please share your background, relevant experience, specific skills, and how you'd like to connect with Garvey Labs. Feel free to mention any relevant projects, clients, or achievements."
              required
              className="w-full border border-[#E2E8F0] rounded-lg p-3 h-32 focus:outline-none focus:border-[#4299E1]"
            ></textarea>
          </div>

          <div>
            <label htmlFor="portfolio" className="block font-medium mb-1">
              Portfolio/Website
            </label>
            <input
              type="url"
              id="portfolio"
              name="portfolio"
              placeholder="Link to your portfolio, website, or LinkedIn profile"
              className="w-full border border-[#E2E8F0] rounded-lg p-3 focus:outline-none focus:border-[#4299E1]"
            />
          </div>

          <button
            type="submit"
            className="bg-[#4299E1] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#2C5282] transition"
          >
            Submit Connection Inquiry
          </button>
        </form>

        <div className="mt-6 text-sm text-[#718096]">
          <p>
            <strong>Direct Email:</strong> connect@garveylabs.com
          </p>
          <p>
            <strong>Response Time:</strong> We review all connection inquiries and respond within 5
            business days.
          </p>
        </div>
      </section>
    </div>
  );
}
