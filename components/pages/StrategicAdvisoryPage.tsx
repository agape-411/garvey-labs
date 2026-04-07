import Link from "next/link";

export default function StrategicAdvisoryPage() {
  return (
    <main className="font-inter text-[#1B3A5C] bg-white">

      {/* ================= HERO ================= */}
      <section className="relative w-full bg-[#0f2438] text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/advisory-hero.jpg')] bg-cover bg-center" />
        <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight max-w-3xl mx-auto">
            Strategic Advisory Services
          </h1>
          <p className="mt-6 text-xl md:text-2xl font-light text-gray-200 max-w-2xl mx-auto">
            From first intelligence to enforceable agreement — a defined six-tier service ladder, community-side only.
          </p>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            No pricing on this page. Each tier ends with a CTA to Contact Us. Pricing is discussed in the initial conversation.
          </p>
        </div>
      </section>

      {/* ================= PRODUCTIZED MODEL ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
          Defined Products. Transparent Pricing. Delivered on Schedule.
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl">
          Garvey Labs is a productized advisory firm built on rigorous analytical backing. Every service tier has a defined scope, a population-based price, and a documented delivery timeline — before you sign. The service ladder is sequential: each tier creates pull toward the next through fee credits, conversion mechanics, and deliberately structured deliverables that name the scope of the following engagement.
        </p>
      </section>

      {/* ================= SERVICE LADDER ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl md:text-5xl font-semibold mb-16">
          The Service Ladder
        </h2>

        <div className="grid gap-12">
          {/* TIER 0 */}
          <ServiceTier
            label="ENTRY PRODUCT"
            name="Grid-Positive Community Intelligence Brief"
            delivery="7 business days"
            body="A proprietary 12–15 page intelligence product specific to your jurisdiction. Nine components: Grid-Positive Opportunity Score Card, Developer Activity Intelligence Snapshot with Peer Community Alert, Ratepayer Risk Exposure Estimate, Federal Incentive Stack Summary, Grid-Positive Opportunity Estimate, Workforce Development Gap Assessment, 90-Day Competitive Positioning Roadmap, Three Critical Questions, and a 60-minute virtual debrief included at no charge. The Tier 0 fee is credited in full toward Tier I."
            ctaText="Request a Brief for your community →"
            ctaLink="/connect"
          />

          {/* TIER I */}
          <ServiceTier
            label="CORE SERVICE"
            name="Community Positioning and Negotiation Readiness Audit"
            delivery="30–60 days depending on package"
            body="The pre-negotiation leverage product. Eight specific deliverables: infrastructure readiness assessment, formal cost-burden analysis, grid-positive opportunity analysis, competitive market positioning, workforce pathway assessment, negotiation-readiness posture, Developer Value Brief, and leadership briefing. Monthly payment option available: 25% deposit plus two equal installments across the engagement period."
            ctaText="Discuss a Tier I engagement →"
            ctaLink="/connect"
          />

          {/* TIER II */}
          <ServiceTier
            label="STRATEGY"
            name="Community Wealth Strategy"
            delivery="Starts after Tier I confirms community viability"
            body="Full community wealth architecture: benefit structure tied to the three standards, community narrative, institutional alignment plan across EDC/IDA/CDC/local government, and implementation roadmap. Monthly payment option available."
            ctaText="Contact Us to Discuss →"
            ctaLink="/connect"
          />

          {/* TIER III-A */}
          <ServiceTier
            label="NEGOTIATION"
            name="Developer Engagement and Grid-Positive CBA"
            delivery="Variable"
            body="When a developer is active or imminent. Negotiation support, grid-positive CBA term sheet, ratepayer protection clauses, workforce investment provisions in enforceable language, and utility-regulatory specialist support. Converts the framework into an enforceable deal architecture. Monthly payment option available."
            ctaText="Contact Us →"
            ctaLink="/connect"
          />

          {/* TIER III-B */}
          <ServiceTier
            label="PROACTIVE OUTREACH"
            name="Developer Identification and Outreach"
            delivery="Variable"
            body="For communities that want to proactively attract data center investment. Garvey Labs identifies developers active in your region, develops a targeted outreach strategy, delivers a jurisdiction-specific Developer Value Brief to named site selectors, and manages the developer relationship on your behalf. Monthly retainer plus a success fee at signed term sheet. Community-side only."
            ctaText="Contact Us →"
            ctaLink="/connect"
          />

          {/* TIER IV */}
          <ServiceTier
            label="ONGOING COUNSEL"
            name="Fractional Strategic Counsel"
            delivery="Ongoing"
            body="Ongoing executive advice, message refinement, stakeholder navigation, and response to emerging developer or utility dynamics over the life of the opportunity. Monthly retainer. No minimum term."
            ctaText="Contact Us →"
            ctaLink="/connect"
          />

          {/* TIER V */}
          <ServiceTier
            label="METHODOLOGY PRODUCT"
            name="Community Wealth Playbook"
            delivery="Standalone"
            body="The codified Grid-Positive Community Integration Framework methodology — available as a standalone document for associations, academic partners, and community leaders who want the framework independent of a full consulting engagement."
            ctaText="Contact Us →"
            ctaLink="/connect"
          />
        </div>
      </section>

    </main>
  );
}

/* ================= COMPONENT ================= */
function ServiceTier({
  label,
  name,
  delivery,
  body,
  ctaText,
  ctaLink,
}: {
  label: string;
  name: string;
  delivery: string;
  body: string;
  ctaText: string;
  ctaLink: string;
}) {
  return (
    <div className="border-l-4 border-[#B8860B] pl-6">
      <p className="text-xs md:text-sm text-[#0D6E6E] font-semibold tracking-widest mb-2">{label}</p>
      <h3 className="text-2xl md:text-3xl font-semibold mb-2">{name}</h3>
      <p className="text-sm md:text-base text-gray-500 mb-2">{delivery}</p>
      <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">{body}</p>
      <Link
        href={ctaLink}
        className="text-[#1B3A5C] font-semibold hover:underline"
      >
        {ctaText}
      </Link>
    </div>
  );
}