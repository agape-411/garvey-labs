import Link from 'next/link'

export default function GridPositiveFrameworkPage() {
  return (
    <main className='font-inter text-[#1B3A5C] bg-white'>
      {/* ================= HERO ================= */}
      <section className='relative w-full bg-[#0f2438] text-white'>
        <div className="absolute inset-0 opacity-30 bg-[url('/images/GP1.png')] bg-cover bg-center" />
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-32'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-3xl'>
            The Grid-Positive Community Integration Framework
          </h1>
          <p className='mt-4 md:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-200 max-w-2xl'>
            A proprietary methodology for helping communities capture the data
            center economy as lasting community wealth — before developers
            define the terms.
          </p>
          <p className='mt-4 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl leading-relaxed'>
            Developed by Garvey Labs and applied across majority-Black
            communities in the South and Northeast, the Grid-Positive Community
            Integration Framework is the only pre-negotiation leverage
            methodology designed specifically for communities competing for
            participation in the data center economy. It is organized around
            three non-negotiable standards that together define a community
            wealth architecture.
          </p>
        </div>
      </section>

      {/* ================= THREE STANDARDS ================= */}
      <section className='max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24'>
        <p className='text-xs sm:text-sm tracking-widest text-[#0D6E6E] mb-4'>
          THREE NON-NEGOTIABLE STANDARDS
        </p>
        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 md:mb-16 max-w-3xl'>
          A Community Wealth Architecture for the Data Center Economy
        </h2>

        <div className='grid gap-8 md:grid-cols-3 md:gap-12'>
          {/* STANDARD 1 */}
          <FrameworkStandard
            label='THE FLOOR'
            name='Developer Cost Accountability Standard'
            body='Communities should not absorb hidden or indirect costs created by private development — through utility rate increases, infrastructure cost socialization, road remediation, water system strain, or any other form of cost transfer. Garvey Labs delivers a formal cost-burden analysis in every engagement, giving clients the leverage to hold the standard.'
          />

          {/* STANDARD 2 */}
          <FrameworkStandard
            label='THE INFRASTRUCTURE CEILING'
            name='Grid-Positive Community Integration Standard'
            body='Data centers invest in substations, battery storage, standby generation, and grid redundancy as operational necessities — not community gifts. The Grid-Positive Community Integration Standard structures those investments as community assets: interconnected to the public grid, governed by a community advisory board, and extended to residents through a Community Virtual Power Plant program.'
          />

          {/* STANDARD 3 */}
          <FrameworkStandard
            label='THE HUMAN CAPITAL CEILING'
            name='Community Workforce Investment Standard'
            body='Data center development should create pathways into career-grade, transferable employment — not temporary construction jobs. This standard requires local hire commitments, developer-funded pre-apprenticeship programs run by IBEW JATC affiliates, and apprenticeship completion support through the full 4–5 year union program, ensuring residents gain meaningful career opportunities.'
          />
        </div>
      </section>

        {/* ================= WHY IT EXISTS ================= */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
  
  {/* TEXT BLOCK (always on top) */}
  <div className="max-w-4xl mb-12 lg:mb-16">
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 md:mb-8">
      Designed for the Communities That Need It Most
    </h2>

    <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
      The Grid-Positive Community Integration Framework was developed
      specifically for majority-Black communities under 150,000 residents in
      the South and Northeast — the communities that have been most
      overlooked by the first decade of data center development, and the
      communities that have the most to gain from the next chapter. These
      communities have transmission infrastructure, available industrial
      land, and fiscal motivation. What they have lacked is a framework for
      converting developer interest into community wealth. That is what this
      methodology provides.
    </p>
  </div>

  {/* IMAGE ROW */}
  <div className="grid lg:grid-cols-2">
    
    {/* LEFT SPACER (empty on desktop) */}
    <div className="hidden lg:block" />

    {/* RIGHT IMAGE */}
    <div className="flex justify-start lg:justify-end">
      <img
        src="/images/IM.png"
        alt="Grid-Positive Community Integration Framework"
        className="w-full max-w-md lg:max-w-lg rounded-lg"
      />
    </div>
    
  </div>

</section>

      {/* ================= CTA ================= */}
      <section className='bg-gray-50 py-16 md:py-24'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 text-center'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6'>
            Apply the Framework to Your Community
          </h2>
          <p className='text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8 md:mb-10'>
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

          <div className='flex flex-col gap-4 sm:gap-6 md:flex-row md:justify-center'>
            <Link
              href='/connect'
              className='inline-block bg-[#1B3A5C] text-white px-6 sm:px-8 py-3 sm:py-4 text-base md:text-lg lg:text-xl hover:bg-[#16324d] transition'
            >
              Contact Us to Discuss →
            </Link>
            <Link
              href='/strategic-advisory'
              className='inline-block border border-[#1B3A5C] text-[#1B3A5C] px-6 sm:px-8 py-3 sm:py-4 text-base md:text-lg lg:text-xl hover:bg-[#1B3A5C] hover:text-white transition'
            >
              Learn About Our Services →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

/* ================= COMPONENT ================= */
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
    <div className='border-l-4 border-[#B8860B] pl-6'>
      <p className='text-xs md:text-sm text-[#0D6E6E] font-semibold tracking-widest mb-2'>
        {label}
      </p>
      <h3 className='text-2xl md:text-3xl font-semibold mb-4'>{name}</h3>
      <p className='text-lg md:text-xl text-gray-700 leading-relaxed'>{body}</p>
    </div>
  )
}
