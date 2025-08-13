"use client";

import { useState } from "react";
import Image from "next/image";

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { key: "all", label: "All Posts" },
    { key: "press-release", label: "Press Releases" },
    { key: "news-coverage", label: "News Coverage" },
    { key: "thought-leadership", label: "Thought Leadership" },
    { key: "case-studies", label: "Case Studies" },
    { key: "industry-insights", label: "Industry Insights" },
  ];

  const articles = [
    {
      id: 1,
      category: "press-release",
      categoryLabel: "Press Release",
      categoryClass: "bg-red-600",
      imageSrc: "/images/press.png",
      imageAlt: "Press Release Image",
      title: "BIG NEWS COMING SOON",
      excerpt:
        "Coming soon..",
      meta: [
        { label: "January 10, 2025" },
        { label: "3 min read" },
      ],
      linkLabel: "Read More",
      linkHref: "#",
    },
    {
      id: 2,
      category: "news-coverage",
      categoryLabel: "News Coverage",
      categoryClass: "bg-green-600",
      imageSrc: "/images/news.jpg",
      imageAlt: "News Coverage Image",
      title:
        '"The Future of Labor Communications" - Terry Lee Featured in Union Today Magazine',
      excerpt:
        "SEIU Deputy National Director Terry Lee discusses how strategic communications drives successful organizing campaigns in the modern era...",
      meta: [
        { label: "January 8, 2025" },
        { label: "Union Today Magazine" },
      ],
      linkLabel: "View Coverage",
      linkHref: "/news/labor-article",
    },
    {
      id: 3,
      category: "thought-leadership",
      categoryLabel: "Thought Leadership",
      categoryClass: "bg-blue-700",
      imageSrc: "/images/leadership.jpg",
      imageAlt: "Thought Leadership Image",
      title:
        "Beyond NIMBY: How Smart Communications Can Transform Renewable Energy Community Engagement",
      excerpt:
        "Early community engagement prevents costly delays and builds lasting support for clean energy development. Here's our proven framework...",
      meta: [
        { label: "By Terry Lee" },
        { label: "January 5, 2025" },
        { label: "7 min read" },
      ],
      linkLabel: "Read Article",
      linkHref: "/news/beyond-nimby",
    },
    {
      id: 4,
      category: "case-studies",
      categoryLabel: "Case Study",
      categoryClass: "bg-orange-600",
      imageSrc: "/images/case.jpg",
      imageAlt: "Case Study Image",
      title: "From No to Yes: Texas City BESS Success",
      excerpt:
        "Strategic Community Engagement Transforms Opposition into Unanimous Approval...",
      meta: [
        { label: "December 28, 2024" },
        { label: "6 min read" },
      ],
      linkLabel: "View Case Study",
      linkHref: "/news/case-study",
    },
    {
      id: 5,
      category: "industry-insights",
      categoryLabel: "Industry Insights",
      categoryClass: "bg-purple-700",
      imageSrc: "/images/industry.jpg",
      imageAlt: "Industry Insights Image",
      title:
        "The Future of Union Communication: Insights from the National Labor Management Conference",
      excerpt:
        "How the pandemic reshaped worker organizing and what communications strategies are driving successful campaigns today...",
      meta: [
        { label: "By Terry Lee" },
        { label: "December 20, 2024" },
        { label: "8 min read" },
      ],
      linkLabel: "Read Insights",
      linkHref:
        "https://ulanetwork.com/blog/the-future-of-union-communication-insights-from-the-national-labor-management-conference",
    },
    {
      id: 6,
      category: "news-coverage",
      categoryLabel: "Conferences and Summits",
      categoryClass: "bg-green-600",
      imageSrc: "/images/summits.jpg",
      imageAlt: "Conference Summit Image",
      title:
        "Renewable Energy Communications Expert Speaks at Clean Power Summit",
      excerpt:
        "Terry Lee will be speaker on Community Engagement for Grid Modernization at the industry's premier conference",
      meta: [
        { label: "September 3, 2025" },
        { label: "Clean Energy Wire" },
      ],
      linkLabel: "View Coverage",
      linkHref: "https://web.cvent.com/event/6fd702f8-102e-46df-9d36-2780c2dea959/websitePage:d23ca711-ecda-48ba-af95-8e40e3c3f9d4",
    },
  ];

  const filteredArticles =
    activeCategory === "all"
      ? articles
      : articles.filter((article) => article.category === activeCategory);

  return (
    <div className="max-w-[1200px] mx-auto px-8 py-8 text-gray-800">
      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-[#2C5282] leading-tight">
          Garvey Labs News
        </h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto text-[#4A5568]">
          Latest insights, press coverage, and thought leadership in strategic
          communications and community engagement
        </p>
      </header>

      {/* Featured Post Section */}
      <section className="bg-gradient-to-br from-[#E0F2F1] to-[#E6FFFA] rounded-xl p-6 sm:p-8 md:p-12 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          <div className="md:col-span-2">
            <span className="inline-block bg-[#319795] text-white px-3 py-1 rounded-full uppercase text-xs font-semibold tracking-wide">
              Featured
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2C5282] mt-6 leading-snug">
              Building Community Support for Green Data Centers: A Strategic Framework
            </h2>
            <p className="mt-6 text-base sm:text-lg text-[#4A5568] leading-relaxed max-w-prose">
              As the green data center market grows from $17B to $93B by 2032, community engagement becomes critical for project success. Here's how sustainable digital infrastructure can achieve authentic community acceptance...
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-[#718096] mt-8 mb-12">
              <span>By Terry Lee</span>
              <span>January 15, 2025</span>
              <span>5 min read</span>
            </div>
            <a
              href="/news/green-datacenters-article"
              className="inline-block bg-[#319795] hover:bg-[#2C7A7B] text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              Read Full Article
            </a>
          </div>
          <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden">
            <Image
              src="/images/leadership.jpg"
              alt="Featured Article Image"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Filter/Category Navigation */}
      <section className="mb-12 text-center">
        <h3 className="text-2xl font-semibold text-[#2C5282] mb-6">
          Browse by Category:
        </h3>
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
              data-category={key}
              type="button"
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* News Grid Section */}
      <section className="news-grid-section">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map(
            ({
              id,
              category,
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
                data-category={category}
              >
                <div className="relative h-48 bg-[#EDF2F7] overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                  />
                  <span
                    className={`post-category absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide text-white ${categoryClass}`}
                  >
                    {categoryLabel}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-[#2C5282] text-xl font-semibold mb-3 leading-snug">
                    {title}
                  </h3>
                  <p className="text-[#2D3748] mb-4 leading-relaxed">{excerpt}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-[#718096] mb-4">
                    {meta.map(({ label }, i) => (
                      <span key={i}>{label}</span>
                    ))}
                  </div>
                  <a
                    href={linkHref}
                    className="text-[#319795] font-semibold hover:underline"
                  >
                    {linkLabel}
                  </a>
                </div>
              </article>
            )
          )}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button
            type="button"
            className="bg-[#319795] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2C7A7B] transition"
            onClick={() =>
              alert("Load more functionality would be implemented here")
            }
          >
            Load More Articles
          </button>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-[#2C5282] text-white p-12 rounded-xl text-center mt-16">
        <h2 className="text-3xl font-extrabold mb-4">Stay Informed</h2>
        <p className="max-w-xl mx-auto mb-8 text-lg leading-relaxed">
          Subscribe to receive our latest insights on strategic communications,
          community engagement, and industry trends.
        </p>
        <form
          action="mailto:news@garveylabs.com"
          method="post"
          encType="text/plain"
          className="max-w-lg mx-auto"
        >
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <input
              type="email"
              placeholder="Enter your email address"
              required
              className="flex-1 px-6 py-3 rounded-lg border-none text-gray-800 text-lg"
            />
            <button
              type="submit"
              className="bg-[#319795] hover:bg-[#2C7A7B] text-white font-semibold rounded-lg px-8 py-3 whitespace-nowrap transition"
            >
              Subscribe
            </button>
          </div>
          <p className="text-sm opacity-80">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      </section>
    </div>
  );
}
