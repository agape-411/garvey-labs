import Link from "next/link";

const contactEmail = "inquiry@garveylabs.com";

type MunicipalityProps = {
  name: string;
  status: string;
  description: string;
  statusDetail: string;
  frameworkFocus: string;
};

function Municipality({
  name,
  status,
  description,
  statusDetail,
  frameworkFocus,
}: MunicipalityProps) {
  return (
    <div className="mb-8 rounded-[4px] border-l-4 border-[#C8963E] bg-[#F5F0E8] p-8 transition-all duration-300 ease-in-out hover:translate-x-1 hover:shadow-[0_4px_12px_rgba(27,58,45,0.1)]">
      <h3 className="mb-3 text-2xl font-semibold leading-tight text-[#1B3A2D] md:text-3xl">
        {name}
      </h3>

      <span className="mb-4 inline-block rounded-[20px] bg-[#C8963E] px-[0.8rem] py-[0.3rem] text-[0.85rem] font-semibold text-white">
        {status}
      </span>

      <p className="mb-5 text-lg leading-relaxed text-[#666] md:text-xl">{description}</p>

      <div className="mt-6 border-t border-[#e0d5c7] pt-6 text-base md:text-lg">
        <div className="mb-3 flex gap-4 max-[768px]:flex-col max-[768px]:gap-[0.3rem]">
          <div className="min-w-[120px] font-semibold text-[#1B3A2D] max-[768px]:min-w-0">
            Status:
          </div>
          <div className="text-[#666]">{statusDetail}</div>
        </div>

        <div className="mb-3 flex gap-4 max-[768px]:flex-col max-[768px]:gap-[0.3rem]">
          <div className="min-w-[120px] font-semibold text-[#1B3A2D] max-[768px]:min-w-0">
            Framework Focus:
          </div>
          <div className="text-[#666]">{frameworkFocus}</div>
        </div>

        <div className="mb-3 flex gap-4 max-[768px]:flex-col max-[768px]:gap-[0.3rem]">
          <div className="min-w-[120px] font-semibold text-[#1B3A2D] max-[768px]:min-w-0">
            Contact:
          </div>

          <div>
            <a
              href={`mailto:${contactEmail}`}
              className="text-[#C8963E] no-underline"
            >
              {contactEmail}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const emergingMarkets = [
  "Petersburg, VA",
  "Danville, VA",
  "Gary, IN",
  "Chester, PA",
  "Camden, NJ",
  "East St. Louis, IL",
  "Emporia, VA",
];

export default function MunicipalitiesPage() {
  return (
    <main
      className="min-h-screen bg-white font-sans leading-[1.6] text-[#1a1a1a]"
      style={{
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
      }}
    >
      

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="bg-[linear-gradient(135deg,#1B3A2D_0%,#2a5544_100%)] px-8 py-16 text-center text-white">
        <div className="mx-auto max-w-[900px]">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Strategic Municipalities &amp; Engagements
          </h1>

          <p className="text-lg leading-relaxed opacity-95 md:text-xl">
            Garvey Labs partners with municipalities positioned at the
            intersection of strategic infrastructure opportunity and
            community-led economic growth. We bring the Grid-Positive
            Community Integration Framework to places ready to leverage their
            assets—transmission adjacency, skilled workforce, available
            land—and lead their own future.
          </p>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <div className="mx-auto max-w-[1000px] px-8 py-12">
        {/* =======================================================
            ACTIVE ENGAGEMENTS
        ======================================================= */}
        <section className="mb-16">
          <p className="mb-12 max-w-[800px] text-lg leading-relaxed text-[#666] md:text-xl">
            Garvey Labs works with communities that see infrastructure
            development as an opportunity for economic growth and community
            leadership—not extraction. Our partnerships are built on authentic
            community engagement, shared governance, and long-term shared
            prosperity.
          </p>

          <h2 className="mb-8 inline-block border-b-[3px] border-[#C8963E] pb-4 text-3xl font-semibold leading-tight text-[#1B3A2D] md:text-4xl">
            Active Engagements
          </h2>

          <Municipality
            name="Rocky Mount, NC"
            status="Active Public Engagement"
            description="Community-side strategic engagement supporting the development of hyperscale data center infrastructure in coordination with municipal leadership. Garvey Labs is leading public education, community coalition development (Communities United for Fair Development), and Framework implementation to ensure Grid-Positive standards in RFP and development agreement."
            statusDetail="Active public engagement"
            frameworkFocus="Grid-Positive Community Integration; municipal infrastructure operator model; community workforce investment"
          />
        </section>

        {/* =======================================================
            IN NEGOTIATION
        ======================================================= */}
        <section className="mb-16">
          <h2 className="mb-8 inline-block border-b-[3px] border-[#C8963E] pb-4 text-[2rem] font-normal text-[#1B3A2D] max-[768px]:text-[1.5rem]">
            In Negotiation
          </h2>

          <Municipality
            name="Minneapolis, MN"
            status="Strategic Development Discussions"
            description="Community-side strategic partnership exploring infrastructure-led economic opportunity. Garvey Labs is supporting municipal leadership and community stakeholders through strategic planning and engagement framework development."
            statusDetail="Strategic development discussions"
            frameworkFocus="Community engagement; strategic infrastructure partnership; Grid-Positive Framework alignment"
          />

          <Municipality
            name="Appomattox, VA"
            status="Pre-Engagement Planning"
            description="Community-side strategic partnership supporting municipal leadership and community stakeholders through engagement infrastructure and strategic planning development."
            statusDetail="Pre-engagement strategic planning"
            frameworkFocus="Community engagement; strategic planning; governance framework development"
          />

          <Municipality
            name="Joshua Falls, VA"
            status="Pre-Engagement Planning"
            description="Community-side strategic partnership supporting municipal leadership and community stakeholders through engagement infrastructure and strategic planning development."
            statusDetail="Pre-engagement strategic planning"
            frameworkFocus="Community engagement; strategic planning; governance framework development"
          />
        </section>

        {/* =======================================================
            EMERGING OPPORTUNITIES
        ======================================================= */}
        <section className="mb-16">
          <h2 className="mb-8 inline-block border-b-[3px] border-[#C8963E] pb-4 text-[2rem] font-normal text-[#1B3A2D] max-[768px]:text-[1.5rem]">
            Emerging Opportunities
          </h2>

          <div className="mb-8 rounded-[4px] bg-[#F5F0E8] p-8 text-lg leading-relaxed md:text-xl">
            <p>
              <strong>
                Communities strategically positioned for infrastructure-led
                economic growth. Transmission-adjacent locations with the
                assets, talent, and vision to lead their own economic future.
              </strong>
            </p>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
            {emergingMarkets.map((market) => (
              <div
                key={market}
                className="rounded-[4px] border border-[#e0d5c7] bg-white p-6 transition-all duration-300 hover:border-[#C8963E] hover:shadow-[0_4px_12px_rgba(200,150,62,0.1)]"
              >
                <h4 className="mb-3 text-xl font-semibold text-[#1B3A2D]">
                  {market}
                </h4>

                <p className="text-base leading-relaxed text-[#666] md:text-lg">
                  Strategic infrastructure partnership opportunity
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =======================================================
            THREE STRATEGIC ASSETS
        ======================================================= */}
        <section className="mb-16 rounded-[4px] bg-[linear-gradient(135deg,#F5F0E8_0%,#f0e8dc_100%)] px-8 py-12">
          <h3 className="mb-6 text-2xl font-semibold text-[#1B3A2D] md:text-3xl">
            The Three Strategic Assets
          </h3>

          <p className="mb-8 text-lg leading-relaxed text-[#666] md:text-xl">
            Every community we partner with brings three core strengths:
          </p>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8">
            <div className="rounded-[4px] bg-white p-6">
              <h4 className="mb-2 text-sm font-semibold uppercase tracking-[1px] text-[#C8963E]">
                Transmission Assets
              </h4>

              <p className="text-base leading-relaxed text-[#666] md:text-lg">
                Strategic proximity to existing high-voltage transmission
                infrastructure—a foundational asset that most communities
                don&apos;t have, positioning you at the center of energy
                infrastructure opportunity
              </p>
            </div>

            <div className="rounded-[4px] bg-white p-6">
              <h4 className="mb-2 text-sm font-semibold uppercase tracking-[1px] text-[#C8963E]">
                Economic Leverage
              </h4>

              <p className="text-base leading-relaxed text-[#666] md:text-lg">
                The ability to structure infrastructure partnerships that
                generate new revenue streams—municipal utility partnerships,
                land leasing, property tax growth, and PIAT—giving your
                community control over how this creates shared prosperity
              </p>
            </div>

            <div className="rounded-[4px] bg-white p-6">
              <h4 className="mb-2 text-sm font-semibold uppercase tracking-[1px] text-[#C8963E]">
                Community Leadership
              </h4>

              <p className="text-base leading-relaxed text-[#666] md:text-lg">
                Local stakeholders ready to lead their own economic future. When
                the engagement strategy is authentic and governance is real,
                community voice becomes the design requirement from day one
              </p>
            </div>
          </div>

          <p className="mt-8 text-lg leading-relaxed text-[#666] md:text-xl">
            <strong>
              Garvey Labs brings the Grid-Positive Community Integration
              Framework to amplify these assets — ensuring your community
              controls its own economic narrative and benefits from
              infrastructure development in ways that matter for decades to
              come.
            </strong>
          </p>
        </section>

        {/* =======================================================
            CTA
        ======================================================= */}
        <section className="mb-12 rounded-[4px] bg-[#1B3A2D] px-8 py-12 text-center text-white">
          <h2 className="mb-4 inline-block border-b-[3px] border-[#C8963E] pb-4 text-3xl font-semibold text-white md:text-4xl">
            Lead Your Economic Future
          </h2>

          <p className="mb-8 text-lg leading-relaxed opacity-95 md:text-xl">
            If your community has the assets and the vision to lead
            infrastructure-driven economic growth on your own terms
          </p>

          <a
            href="/contact"
            className="inline-block rounded-[4px] border-2 border-[#C8963E] bg-[#C8963E] px-8 py-4 text-base font-semibold text-[#1B3A2D] no-underline transition-all duration-300 hover:bg-transparent hover:text-[#C8963E]"
          >
            Let&apos;s Talk
          </a>
        </section>
      </div>

      
    </main>
  );
}