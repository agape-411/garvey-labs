"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { key: "all", label: "All" },
    { key: "data-center", label: "Data Center Economy" },
    { key: "renewable-energy", label: "Renewable Energy" },
    { key: "community-wealth", label: "Community Wealth" },
    { key: "policy", label: "Policy and Regulation" },
  ];

  const articles = [
    // ✅ DATA CENTER (FULL ARTICLE)
    {
      id: 1,
      category: "data-center",
      categoryLabel: "Data Center Economy",
      categoryClass: "bg-[#0D6E6E]",
      imageSrc: "/images/T2.png",
      title: "How I Would Elect a Data Center in 2026: A Community Readiness Framework",
      excerpt:
        "A 12-step campaign playbook for winning approvals when communities are hostile. In 2026, data center development is no longer just infrastructure — it's electoral politics.",
      meta: [
        { label: "Terry Lee" },
        { label: "January 17, 2026" },
      ],
      linkLabel: "Read Article →",
      linkHref: "/insights/elect", // create page later
    },

    // ✅ COMMUNITY WEALTH
    {
      id: 2,
      category: "community-wealth",
      categoryLabel: "Community Wealth",
      categoryClass: "bg-[#B8860B]",
      imageSrc: "/images/T1.png",
      title: "The $4 Million Per Home Question",
      excerpt:
        "What the Ashburn buyout reveals about negotiation power, land value, and why organized communities extract more from data center development.",
      meta: [
        { label: "Garvey Labs LLC" },
        { label: "Grid-Positive Intelligence" },
      ],
      linkLabel: "Read Article →",
      linkHref: "/insights/case", // create later
    },

    // ✅ RENEWABLE (COMING SOON)
    {
      id: 3,
      category: "renewable-energy",
      categoryLabel: "Renewable Energy",
      categoryClass: "bg-gray-400",
      imageSrc: "/images/case.jpg",
      title: "How Smart Communications Can Transform Renewable Energy Community Engagement",
      
      meta: [],
      linkLabel: "Read Article →",
      linkHref: "/insights/renewable-article",
    },
  ];

  const filteredArticles =
    activeCategory === "all"
      ? articles
      : articles.filter((article) => article.category === activeCategory);

  return (
    <main className="bg-white text-[#1B3A5C]">

      {/* ================= HEADER ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
          Insights
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
          Perspectives on the data center and renewable energy economies from Garvey Labs.
        </p>
      </section>

      {/* ================= FILTER BAR ================= */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 text-sm md:text-base font-medium border transition ${
                activeCategory === key
                  ? "bg-[#1B3A5C] text-white border-[#1B3A5C]"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* ================= GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="group border hover:shadow-md transition"
            >
              {/* IMAGE */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={article.imageSrc}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
                <span
                  className={`absolute top-4 left-4 px-3 py-1 text-xs font-semibold uppercase text-white ${article.categoryClass}`}
                >
                  {article.categoryLabel}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-2xl md:text-3xl font-semibold leading-snug mb-3">
                  {article.title}
                </h3>

                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                  {article.excerpt}
                </p>

                {article.meta.length > 0 && (
                  <div className="text-sm text-gray-500 mb-4 space-x-3">
                    {article.meta.map((item, i) => (
                      <span key={i}>{item.label}</span>
                    ))}
                  </div>
                )}

                {article.linkHref ? (
                  <Link
                    href={article.linkHref}
                    className="text-[#0D6E6E] font-medium hover:underline"
                  >
                    {article.linkLabel}
                  </Link>
                ) : (
                  <span className="text-gray-400 font-medium">
                    {article.linkLabel}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SUBSTACK ================= */}
      <section className="text-center pb-24">
        <p className="text-xl md:text-2xl mb-6">
          Subscribe to "Garvey Labs | Power&Democracy" on Substack for updates.
        </p>

        <a
          href="https://substack.com"
          target="_blank"
          className="inline-block px-8 py-4 bg-[#1B3A5C] text-white text-lg hover:bg-[#16324d] transition"
        >
          Visit Substack →
        </a>
      </section>
    </main>
  );
}