import Link from "next/link";
import Image from "next/image";

export default function FourMillionArticle() {
  return (
    <main className="bg-white text-[#1B3A5C] font-inter">

      {/* ===== HERO / HEADER ===== */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-sm tracking-widest text-[#0D6E6E] mb-4">
          COMMUNITY WEALTH BUILDING
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
          The $4 Million Per Home Question: What the Ashburn Buyout Tells Us About Where Data Centers Are Going
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-8">
          When developers pay top dollar for land, communities should ask: who else is getting paid?
        </p>

        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
          <span>GARVEY LABS LLC</span>
          <span>•</span>
          <span>GRID-POSITIVE INTELLIGENCE</span>
        </div>
      </section>

      {/* ===== FEATURE IMAGE ===== */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
          <Image
            src="/images/T1.png"
            alt="Ashburn Data Center Development"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* ===== ARTICLE BODY ===== */}
      <section className="max-w-3xl mx-auto px-6 pb-20 space-y-8">

        <p className="text-lg md:text-xl leading-relaxed text-gray-800">
          Homeowners in Ashburn’s Regency neighborhood are reportedly being offered around 
          <strong> $4.4 million per acre</strong> — a total purchase price approaching 
          <strong> $576 million</strong> — to sell their 130-acre community to data center developers.
        </p>

        <p className="text-lg md:text-xl leading-relaxed text-gray-800">
          The Regency HOA has apparently organized itself well: it set up a dedicated LLC affiliate 
          to handle negotiations and plans to take the project through the entitlement process 
          before any sale closes.
        </p>

        <p className="text-lg md:text-xl leading-relaxed text-gray-800">
          Good for them. Seriously. That is exactly the kind of organized, collective negotiating posture 
          that produces real outcomes. The Regency homeowners knew what they had, they organized before 
          the developers arrived, and they are negotiating from a position of knowledge rather than 
          scrambling after the fact.
        </p>

        {/* ===== SECTION BREAK ===== */}
        <h2 className="text-2xl md:text-3xl font-semibold mt-12">
          The Real Question
        </h2>

        <p className="text-lg md:text-xl leading-relaxed text-gray-800">
          Now ask a harder question: what does $4.4 million per acre look like in historically overlooked markets?
        </p>

        <p className="text-lg md:text-xl leading-relaxed text-gray-800">
          Communities with industrial land, transmission adjacency, and a county fiscal office that has been told 
          for years there’s nothing to attract don’t get the same offer.
        </p>

        <p className="text-lg md:text-xl leading-relaxed text-gray-800">
          They rarely get any offer at all. They get a zoning hearing, a ribbon-cutting, and a press release 
          about jobs that mostly don’t materialize.
        </p>

        <p className="text-lg md:text-xl leading-relaxed text-gray-800">
          The land value doesn’t flow to residents — it flows to the developer who bought the parcel 
          at farmland prices six months before the announcement.
        </p>

        {/* ===== SECTION ===== */}
        <h2 className="text-2xl md:text-3xl font-semibold mt-12">
          The Grid-Positive Insight
        </h2>

        <p className="text-lg md:text-xl leading-relaxed text-gray-800">
          This is the core of the Grid-Positive framework. It’s not about blocking development. 
          It’s about ensuring that communities — all communities — understand what they actually 
          have before anyone shows up with a term sheet.
        </p>

        <p className="text-lg md:text-xl leading-relaxed text-gray-800">
          Loudoun County alone is home to more than 200 data centers, with over 100 more in the 
          development pipeline. That pipeline is moving right now into secondary and tertiary markets — 
          into the I-85 and I-95 corridors, into historically overlooked communities that have the 
          transmission infrastructure developers need but have never had the organizational capacity 
          the Regency HOA clearly built.
        </p>

        {/* ===== SECTION ===== */}
        <h2 className="text-2xl md:text-3xl font-semibold mt-12">
          What This Means
        </h2>

        <p className="text-lg md:text-xl leading-relaxed text-gray-800">
          The Ashburn story is instructive precisely because it shows what organized communities can extract. 
          It is not a ceiling. It is a proof of concept.
        </p>

        <p className="text-lg md:text-xl leading-relaxed text-gray-800">
          A community that knows its grid interconnection value, its fiscal leverage, and its legal options 
          before a developer walks in the door is a community that negotiates.
        </p>

        <p className="text-lg md:text-xl leading-relaxed text-gray-800">
          One that doesn’t — gets negotiated.
        </p>

        <p className="text-lg md:text-xl leading-relaxed font-medium text-[#0D6E6E]">
          That’s the work.
        </p>

        {/* ===== SOURCE LINK ===== */}
        <div className="mt-10">
          <a
            href="https://www.nbcwashington.com/news/local/northern-virginia/were-ashburn-neighbors-offered-4m-each-to-sell-for-data-center-development/4080800/"
            target="_blank"
            className="text-[#0D6E6E] font-medium hover:underline"
          >
            View original coverage →
          </a>
        </div>

        {/* ===== AUTHOR ===== */}
        <div className="border-t pt-10 mt-16">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            <strong>Terry Lee</strong> is the founder of Garvey Labs LLC, a Washington, DC-based advisory firm that works exclusively on the community and public side of data center and energy infrastructure negotiations.
          </p>
        </div>

        {/* ===== BACK BUTTON ===== */}
        <div className="mt-12">
          <Link
            href="/insights"
            className="text-[#0D6E6E] font-medium hover:underline"
          >
            ← Back to Insights
          </Link>
        </div>
      </section>
    </main>
  );
}