"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter categories
  const categories = [
    { key: "all", label: "All" },
    { key: "data-center", label: "Data Center Economy" },
    { key: "renewable-energy", label: "Renewable Energy" },
    { key: "community-wealth", label: "Community Wealth" },
    { key: "policy", label: "Policy and Regulation" },
  ];

  // Placeholder articles with images from old page
  const articles = [
    {
      id: 1,
      category: "data-center",
      categoryLabel: "Coming Soon",
      categoryClass: "bg-gray-400",
      imageSrc: "/images/leadership.jpg",
      imageAlt: "Placeholder Image 1",
      title: "How I Would Elect a Data Center in 2026",
      excerpt: "Coming Q2 2026",
      meta: [],
      linkLabel: "Coming Soon",
      linkHref: "#",
    },
    {
      id: 2,
      category: "renewable-energy",
      categoryLabel: "Coming Soon",
      categoryClass: "bg-gray-400",
      imageSrc: "/images/summits.jpg",
      imageAlt: "Placeholder Image 2",
      title: "The $4 Million Per Home Question",
      excerpt: "Coming Q2 2026",
      meta: [],
      linkLabel: "Coming Soon",
      linkHref: "#",
    },
    {
      id: 3,
      category: "community-wealth",
      categoryLabel: "Coming Soon",
      categoryClass: "bg-gray-400",
      imageSrc: "/images/case.jpg",
      imageAlt: "Placeholder Image 3",
      title: "From Opposition to 6-0: Red Egret Case Study",
      excerpt: "Coming Q2 2026",
      meta: [],
      linkLabel: "Coming Soon",
      linkHref: "#",
    },
  ];

  const filteredArticles =
    activeCategory === "all"
      ? articles
      : articles.filter((article) => article.category === activeCategory);

  // Substack placeholder URL
  const substackURL = "#";

  return (
    <div className="max-w-[1200px] mx-auto px-8 py-8 text-gray-800">
      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#2C5282] leading-tight">
          Insights
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-[#4A5568]">
          Perspectives on the data center and renewable energy economies from Garvey Labs.
        </p>
      </header>

      {/* Filter Categories */}
      <section className="mb-12 text-center">
        <div className="flex flex-wrap justify-center gap-4 overflow-x-auto px-2">
          {categories.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`border-2 rounded-full px-6 py-2 font-semibold uppercase text-sm transition whitespace-nowrap ${
                activeCategory === key
                  ? "bg-[#319795] border-[#319795] text-white"
                  : "border-[#319795] text-[#319795] hover:bg-[#319795] hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredArticles.map(
          ({
            id,
            categoryLabel,
            categoryClass,
            imageSrc,
            imageAlt,
            title,
            excerpt,
            meta,
            linkLabel,
            linkHref,
          }) => (
            <article
              key={id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
                <span
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide text-white ${categoryClass}`}
                >
                  {categoryLabel}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-[#2C5282] text-xl font-semibold mb-3 leading-snug">
                  {title}
                </h3>
                <p className="text-[#2D3748] mb-4 leading-relaxed text-base">{excerpt}</p>
                {meta.length > 0 && (
                  <div className="flex flex-wrap gap-4 text-sm text-[#718096] mb-4">
                    {meta.map(({ label }, i) => (
                      <span key={i}>{label}</span>
                    ))}
                  </div>
                )}
                <Link
                  href={linkHref}
                  className={`text-[#319795] font-semibold hover:underline ${
                    linkHref === "#" ? "cursor-not-allowed opacity-60" : ""
                  }`}
                >
                  {linkLabel}
                </Link>
              </div>
            </article>
          )
        )}
      </section>

      {/* Substack Section */}
      <section className="text-center mt-16">
        <p className="text-lg md:text-xl mb-4">
          Subscribe to "Garvey Labs | Power&Democracy" on Substack for updates.
        </p>
        <Link
          href={substackURL}
          target="_blank"
          className="inline-block mt-4 px-6 py-3 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition-colors"
        >
          Visit Substack →
        </Link>
      </section>
    </div>
  );
}