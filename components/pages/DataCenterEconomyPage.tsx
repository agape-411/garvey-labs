"use client";

import Link from "next/link";

/* ================= PAGE ================= */
export default function DataCenterEconomyPage() {
  return (
    <main className="bg-white text-[#1B3A5C] font-inter">

      {/* ================= HERO ================= */}
      <section className="relative w-full bg-[#0f2438] text-white">
        <div className="absolute inset-0 opacity-30 bg-[url('/images/DC1.png')] bg-cover bg-center" />
        <div className="relative max-w-7xl mx-auto px-6 py-32">
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight max-w-3xl">
            Advisory Services for the Data Center Economy
          </h1>
          <p className="mt-6 text-lg md:text-xl font-light text-gray-200 max-w-2xl">
            Helping communities capture value from data center investment before developers define the terms.
          </p>
        </div>
      </section>

      {/* ================= MARKET CONTEXT ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16">
        
        {/* LEFT TEXT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-8">
            A Market in Transition
          </h2>

          <p className="text-base md:text-lg leading-relaxed mb-6">
            Data center developers spent a decade building in white suburban communities — Northern Virginia, suburban Atlanta, suburban Phoenix. Those communities are now producing organized opposition, litigation, and moratorium legislation at the local, state, and federal level. The traditional siting model is under structural strain.
          </p>

          <p className="text-base md:text-lg leading-relaxed mb-6">
            At the same time, a different class of communities has remained structurally under-targeted: majority-Black communities with industrial land, transmission adjacency, fiscal motivation, and economic development institutions capable of supporting serious agreements. These communities have been overlooked not because they lack the prerequisites — but because they have lacked the framework.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            The next three years are the most important siting years of the data center economy. Garvey Labs helps communities use that window to negotiate maximum community benefit before potential political or regulatory shifts.
          </p>
        </div>

        {/* RIGHT STATS */}
        <div className="grid grid-cols-2 gap-6">
          {[
            { value: "20+", label: "projects canceled or delayed due to opposition in 2025" },
            { value: "11+", label: "states with active moratorium or restriction legislation" },
            { value: "$4M+", label: "per home offered in Ashburn, VA (March 2026)" },
            { value: "$250M–$900M+", label: "advantage of a prepared community vs. suburban markets" },
          ].map((stat, i) => (
            <div key={i} className="border-l-4 border-[#B8860B] pl-4">
              <p className="text-3xl md:text-4xl font-semibold text-[#0D6E6E]">
                {stat.value}
              </p>
              <p className="text-xs md:text-sm mt-2 text-gray-600 leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= HOW WE HELP ================= */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          
          <p className="text-xs tracking-[0.12em] text-[#0D6E6E] mb-4">
            HOW WE HELP
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold mb-16 max-w-3xl">
            Advisory at Every Stage of the Community-Developer Relationship
          </h2>

          <div className="space-y-14">

            <Capability
              headline="Pre-Negotiation Strategy and Positioning"
              body="Before a developer makes contact, Garvey Labs helps communities build the framework — infrastructure readiness analysis, cost-burden quantification, grid-positive opportunity mapping, competitive market positioning, and negotiation-readiness posture."
            />

            <Capability
              headline="The Grid-Positive Community Integration Framework"
              body="Garvey Labs' proprietary methodology for capturing infrastructure investment as community wealth. Organized around developer cost accountability, grid-positive infrastructure integration, and community workforce investment."
            />

            <Capability
              headline="Developer Identification and Engagement"
              body="Garvey Labs identifies developers active in the client's region, develops a targeted outreach strategy, and manages the relationship — always representing the community side only."
            />

            <Capability
              headline="Negotiation Support and Community Benefit Agreement Structuring"
              body="Garvey Labs provides negotiation support, grid-positive CBA term sheets, and enforceable workforce and ratepayer protection provisions."
            />

          </div>

          {/* Analytical backing */}
          <div className="mt-20 max-w-4xl border-t pt-10">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              All Garvey Labs analysis is built on rigorous analytical backing: verifiable data, unbiased conclusions, and documented, citable sources. This is the standard that makes Garvey Labs work credible in developer negotiations, public hearings, and stakeholder environments.
            </p>

            <Link
              href="/strategic-advisory"
              className="inline-block mt-6 text-[#0D6E6E] font-medium hover:underline"
            >
              See Full Service Details →
            </Link>
          </div>
        </div>
      </section>

      

      {/* ================= RELATED SERVICES ================= */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-semibold mb-16">
            Related Services
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <ServiceCard
              image="/images/DC1.png"
              category="FRAMEWORK"
              title="Grid-Positive Community Integration Framework"
              description="A structured methodology for converting infrastructure investment into durable community wealth."
              link="/grid-positive-framework"
            />

            <ServiceCard
              image="/images/DC1.png"
              category="INTELLIGENCE"
              title="Community Intelligence Brief"
              description="Jurisdiction-specific intelligence covering fiscal baseline and negotiation readiness."
              link="/community-intelligence-brief"
            />

            <ServiceCard
              image="/images/DC1.png"
              category="ADVISORY"
              title="Strategic Advisory Services"
              description="Full-spectrum advisory across stakeholder engagement and negotiation."
              link="/strategic-advisory"
            />

          </div>

          <div className="mt-20">
            <Link
              href="/connect"
              className="inline-block bg-[#1B3A5C] text-white px-8 py-4 text-lg hover:bg-[#16324d] transition"
            >
              Contact a Garvey Labs advisor →
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

/* ================= COMPONENTS ================= */

function Capability({ headline, body }: { headline: string; body: string }) {
  return (
    <div className="max-w-4xl">
      <h3 className="text-xl md:text-2xl font-semibold mb-4">{headline}</h3>
      <p className="text-base md:text-lg text-gray-700 leading-relaxed">{body}</p>
    </div>
  );
}

function ServiceCard({
  image,
  category,
  title,
  description,
  link,
}: {
  image: string;
  category: string;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <Link href={link} className="group block">
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="bg-white p-6 border border-gray-200">
        <p className="text-xs tracking-[0.12em] text-[#0D6E6E] mb-2">
          {category}
        </p>

        <h3 className="text-xl md:text-2xl font-semibold mb-3 leading-snug">
          {title}
        </h3>

        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          {description}
        </p>

        <span className="inline-block mt-4 text-[#0D6E6E] font-medium">
          Learn More →
        </span>
      </div>
    </Link>
  );
}