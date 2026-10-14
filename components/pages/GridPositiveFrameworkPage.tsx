import Link from 'next/link'

export default function GridPositiveFrameworkPage() {
  return (
    <main
      className='bg-white text-[#1B3A5C]'
      style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
    >
      {/* ================= HERO ================= */}
      <section className='relative w-full overflow-hidden bg-[#0f2438] text-white'>
        <div className="absolute inset-0 bg-[url('/images/GP1.png')] bg-cover bg-center opacity-30" />

        <div className='relative mx-auto w-full max-w-[1040px] px-6 py-14 sm:py-16 md:py-20 lg:py-24'>
          <h1 className='m-0 max-w-[760px] text-[33px] font-semibold leading-[1.15] sm:text-[36px] md:text-[40px] lg:text-[46px]'>
            The Grid-Positive Community Integration Framework
          </h1>

          <p className='mt-4 max-w-[760px] text-[20px] leading-[1.5] font-normal text-gray-200 sm:text-[22px] md:text-[23px]'>
            A proprietary methodology for helping communities capture the data
            center economy as lasting community wealth — before developers
            define the terms.
          </p>

          <p className='mt-5 max-w-[760px] text-[19px] leading-[1.6] text-gray-300'>
            Developed by Garvey Labs and applied across history overlooked
            markets and communities in the South and Northeast, the
            Grid-Positive Community Integration Framework is the only
            pre-negotiation leverage methodology designed specifically for
            communities competing for participation in the data center economy.
            It is organized around five non-negotiable standards that together
            define a community wealth architecture.
          </p>
        </div>
      </section>

      {/* ================= FIVE STANDARDS ================= */}
      <section className='w-full py-14 sm:py-16 md:py-20 lg:py-14'>
        <div className='mx-auto w-full max-w-[1040px] px-6'>
          <h2 className='m-0 mb-4 max-w-[760px] text-[25px] font-semibold leading-[1.2] sm:text-[28px] md:text-[31px] lg:text-[33px]'>
            Five Non-Negotiable Standards
          </h2>
          <h2 className='m-0 mb-4 max-w-[760px] text-[20px] font-normal leading-[1.2] sm:text-[24px] md:text-[27px] lg:text-[28px]'>
            A Community Wealth Architecture for the Data Center Economy
          </h2>

          <p className='mb-6 max-w-[760px] text-[19px] leading-[1.6] text-gray-700'>
            No engagement is complete without all five. A community that
            captures infrastructure benefits but lacks environmental
            accountability cannot verify those benefits over a 20-year facility
            life. A community with workforce commitments but no cost
            accountability has traded jobs for ratepayer burdens. A community
            with both but no governance standard has no enforcement body.
          </p>

          {/* Standards */}
          <div className='mt-7 space-y-5'>
            {/* STANDARD 1 */}
            <FrameworkStandard
              label='The Floor'
              name='Developer Cost Accountability Standard'
              body='Every public cost a project creates, including grid upgrades, water and wastewater infrastructure, road damage, and public safety load, is contractually assigned to the developer. PIAT (Payment in Addition to Taxes) is the default structure: full assessed property taxes plus a negotiated community benefit payment. Costs are reconciled annually against actual cost-of-service data and are never socialized through ratepayer increases or municipal general funds. Garvey Labs delivers a formal cost-burden analysis in every engagement, giving clients the leverage to hold the standard.Garvey Labs delivers a formal cost-burden analysis in every engagement, giving clients the leverage to hold the standard.'
            />

            {/* STANDARD 2 */}
            <FrameworkStandard
              label='The Infrastracture Ceiling'
              name='Grid-Positive Community Integration Standard'
              body='Data centers invest in substations, battery storage, standby generation, and grid redundancy as operational necessities — not community gifts. The Grid-Positive Community Integration Standard structures those investments as community assets: interconnected to the public grid, governed by a community advisory board, and extended to residents through a Community Virtual Power Plant program.'
            />

            {/* STANDARD 3 */}
            <FrameworkStandard
              label='The Human Capital Ceiling'
              name='Community Workforce Investment Standard'
              body='Data center development should create pathways into career-grade, transferable employment — not temporary construction jobs. This standard requires local hire commitments, developer-funded pre-apprenticeship programs run by IBEW JATC affiliates, and apprenticeship completion support through the full 4 to 5 year union program, ensuring residents gain meaningful career opportunities.'
            />

            {/* STANDARD 4 */}
            <FrameworkStandard
              label='The Environmental Floor'
              name='Environmental Accountability Standard'
              body={`Environmental limits are monitored, not assumed. Non-potable water is the default for cooling, with municipal reclaimed water prioritized where infrastructure exists, and the host wastewater authority confirms discharge volumes and treatment capacity in writing. Developers publish annual Carbon Usage Effectiveness and Water Usage Effectiveness data, disclose PFAS, certify e-waste disposal, and provide groundwater monitoring.

              Operational noise is capped at 55 dB(A) by day and 45 dB(A) at night, with limits on low-frequency sound. A pre-development residential valuation baseline and cultural resource survey are required, plus a health impact assessment in environmental justice corridors.`}
            />

            {/* STANDARD 5 */}
            <FrameworkStandard
              label='The Community Standard'
              name='Community and Civic Engagement Standard'
              body={`A Community Advisory Board is the enforcement body for all five standards. It is constituted before the development agreement is signed, with at least 60% of seats held by community institutions and no developer representation. At most one economic development organization seat is allowed, non-voting where that organization has a financial interest.

              The framework also requires a public data dashboard, a plain-language annual report to every household within one mile, and a grievance process with non-retaliation protection. A developer that conditions RFP participation on a community-side NDA is treated as a non-responsive bidder.`}
            />
          </div>
          
          {/* ================= BEHIND-THE-METER STANDARD ================= */}
            <article
              id="behind-the-meter"
              aria-labelledby="behind-the-meter-title"
              className="border border-[#d9dde1] bg-gray-50 p-5 sm:p-6"
            >
              <p className="m-0 mb-2 font-sans text-[13px] font-semibold uppercase leading-[1.5] tracking-[0.12em] text-[#0D6E6E]">
                Behind-the-Meter Standard
                <span className="ml-2 inline-block border border-[#d9dde1] bg-white px-2 py-1 text-[10px] tracking-[0.06em] text-gray-600">
                  New in v2.16
                </span>
              </p>

              <h3
                id="behind-the-meter-title"
                className="m-0 mb-3 text-[21px] font-semibold leading-[1.3] text-[#1B3A5C] sm:text-[21px]"
              >
                When the Data Center Brings Its Own Power Plant
              </h3>

              <p className="m-0 mb-5 max-w-[760px] whitespace-pre-line text-[17px] leading-[1.6] text-[#1B3A5C]">
                When the grid can't deliver power on the developer's timeline, more developers are building their own.
                That turns a data center application into a power plant application. The Behind-the-Meter Standard
                sets the terms for on-site generation (turbines, engines, storage, or renewables) and applies across
                all five standards.
              </p>

              <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
                <div className="border border-[#d9dde1] border-t-[3px] border-t-[#0D6E6E] bg-white p-4 sm:p-5">
                  <h4 className="m-0 mb-2 text-[17px] font-semibold leading-[1.4] text-[#1B3A5C]">
                    Transparency
                  </h4>
                  <p className="m-0 text-[16px] leading-[1.6] text-[#1B3A5C]">
                    The community sees what the plant burns, emits, and plans, on a public schedule.
                  </p>
                </div>

                <div className="border border-[#d9dde1] border-t-[3px] border-t-[#0D6E6E] bg-white p-4 sm:p-5">
                  <h4 className="m-0 mb-2 text-[17px] font-semibold leading-[1.4] text-[#1B3A5C]">
                    Best Practice
                  </h4>
                  <p className="m-0 text-[16px] leading-[1.6] text-[#1B3A5C]">
                    Permitted before it runs, built to the strongest proven controls, and adopting cleaner power the
                    moment an independent test shows it competes on cost.
                  </p>
                </div>

                <div className="border border-[#d9dde1] border-t-[3px] border-t-[#0D6E6E] bg-white p-4 sm:p-5">
                  <h4 className="m-0 mb-2 text-[17px] font-semibold leading-[1.4] text-[#1B3A5C]">
                    Accountability
                  </h4>
                  <p className="m-0 text-[16px] leading-[1.6] text-[#1B3A5C]">
                    Commitments carry a defined consequence and bind any future owner or operator.
                  </p>
                </div>
              </div>

              <p className="m-0 mt-5 border-t border-[#d9dde1] pt-4 text-[17px] font-semibold leading-[1.6] text-[#1B3A5C]">
                The model: built ready, phased in on a public test, backed by a known cost.
              </p>

              <p className="m-0 mt-3 font-sans text-[16px] leading-[1.6] text-gray-600">
                Full Behind-the-Meter provisions are part of the Grid-Positive methodology and are applied in each
                community engagement.
              </p>
            </article>

          <p
            className='mt-6 text-[14px] leading-[1.5] text-gray-500'
            style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
          >
            Framework version: Executive Framework v2.16b, May 2026. Companion
            to Methodology v2.16a.
          </p>
        </div>
      </section>

      {/* ================= WHY IT EXISTS ================= */}
      <section className='w-full py-14 sm:py-16 md:py-20 lg:py-14'>
        <div className='mx-auto w-full max-w-[1040px] px-6'>
          <div className='max-w-[760px]'>
            <h2 className='m-0 mb-5 text-[24px] font-semibold leading-[1.2] sm:text-[27px] md:text-[30px] lg:text-[32px]'>
              Designed for the Communities That Need It Most
            </h2>

            <p className='m-0 text-[19px] leading-[1.6] text-gray-700'>
              The Grid-Positive Community Integration Framework was developed
              specifically for historically overlooked markets and communities
              under 150,000 residents in the South and Northeast — the
              communities that have been most overlooked by the first decade of
              data center development, and the communities that have the most to
              gain from the next chapter. These communities have transmission
              infrastructure, available industrial land, and fiscal motivation.
              What they have lacked is a framework for converting developer
              interest into community wealth. That is what this methodology
              provides.
            </p>
          </div>

          {/* IMAGE */}
          <div className='mt-10 flex w-full justify-center sm:mt-12 md:mt-14'>
            <img
              src='/images/IM.png'
              alt='Five standards of the Grid-Positive Community Integration Framework: Developer Cost Accountability, Grid-Positive Community Integration, Community Workforce Investment, Environmental Accountability, and Community and Civic Engagement, enforced by the Community Advisory Board.'
              className='block h-auto w-full max-w-[1040px] rounded-lg object-contain'
            />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className='w-full bg-gray-50 py-14 sm:py-16 md:py-20 lg:py-14'>
        <div className='mx-auto w-full max-w-[1040px] px-6 text-center'>
          <h2 className='m-0 mb-4 text-[24px] font-semibold leading-[1.2] sm:text-[27px] md:text-[30px] lg:text-[32px]'>
            Apply the Framework to Your Community
          </h2>

          <p className='mx-auto mb-7 max-w-[760px] text-[19px] leading-[1.6] text-gray-700'>
            The Grid-Positive Community Intelligence Brief is the entry point —
            a 7-business-day proprietary intelligence product that applies the
            framework to your specific jurisdiction and shows exactly where your
            community stands, what the opportunity looks like, and what the next
            step requires. All Garvey Labs analysis is built on rigorous
            analytical backing — verifiable data, unbiased conclusions, and
            documented sources. Every quantified finding cites a citable source.
            Conclusions reflect what the data supports, not what any party wants
            to hear. This standard applies regardless of who commissioned the
            work or who funded it.
          </p>

          <div
            className='flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center'
            style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
          >
            <Link
              href='/connect'
              className='inline-block border border-[#1B3A5C] bg-[#1B3A5C] px-5 py-3 text-[16px] text-white transition hover:bg-[#16324d] sm:px-6'
            >
              Contact Us to Discuss →
            </Link>

            <Link
              href='/strategic-advisory'
              className='inline-block border border-[#1B3A5C] px-5 py-3 text-[16px] text-[#1B3A5C] transition hover:bg-[#1B3A5C] hover:text-white sm:px-6'
            >
              Learn About Our Services →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

/* ================= STANDARD COMPONENT ================= */

function FrameworkStandard({
  label,
  name,
  body,
}: {
  label: string
  name: string
  body: string
}) {
  return (
    <article className='border border-[#d9dde1] bg-white p-5 sm:p-6'>
      <p
        className='m-0 mb-1 text-[15px] font-semibold leading-[1.4] tracking-normal text-gray-600 sm:text-[16px]'
        style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
      >
        {label}
      </p>

      <h3 className='m-0 mb-3 text-[21px] font-semibold leading-[1.3] sm:text-[21px]'>
        {name}
      </h3>

      <p className='m-0 whitespace-pre-line text-[17px] leading-[1.6] text-[#1B3A5C]'>
        {body}
      </p>
    </article>
  )
}
