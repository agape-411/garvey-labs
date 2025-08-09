export default function TerryLeePage() {
  // Custom colors as inline style variables
  const colors = {
    primaryBlue: "#2C5282",
    secondaryBlue: "#4299E1",
    accentNavy: "#1A365D",
    lightBg: "#EDF2F7",
    successGreen: "#38A169",
    warningOrange: "#DD6B20",
    textGray: "#2D3748",
    lightGray: "#718096",
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10" style={{ color: colors.textGray }}>

      {/* HEADER */}
      <header
        className="rounded-md p-8 py-16 mb-12 text-white"
        style={{
          background: `linear-gradient(to bottom, ${colors.primaryBlue}, ${colors.accentNavy})`,
          color: "#fff",
        }}
      >
        <h1 className="text-5xl font-extrabold mb-2" >
          Terry Lee
        </h1>
        <p className="text-xl font-semibold mb-1">Founder & Principal, Garvey Labs</p>
        <p className="text-lg" style={{ color: "#E6FFFA", maxWidth: "48rem" }}>
          25+ Years Leading Strategic Communications for Labor, Social Impact, and Corporate Clients
        </p>
      </header>

      {/* OVERVIEW */}
      <section className="mb-14">
        <h2 className="text-4xl font-semibold mb-6" style={{ color: colors.primaryBlue }}>
          Cross-Sector Expertise That Drives Results
        </h2>
        <p className="mb-4 text-base leading-relaxed max-w-4xl">
          Terry Lee brings a rare combination of labor organizing leadership, Fortune 500 corporate communications experience, and federal government relations background to Garvey Labs. His career trajectory—from the Office of the Vice President to Deputy National Director for Communications at SEIU—provides unparalleled insight into the intersection of strategic communications, public policy, and community engagement.
        </p>
        <p className="text-base leading-relaxed max-w-4xl">
          This diverse background enables Terry to understand and navigate multiple stakeholder perspectives simultaneously, creating communications strategies that build bridges between seemingly opposing interests and drive measurable results for clients across renewable energy, digital infrastructure, labor organizing, and social justice sectors.
        </p>
      </section>

      {/* CURRENT LEADERSHIP */}
      <section className="mb-14">
        <h2 className="text-4xl font-semibold mb-6" style={{ color: colors.primaryBlue }}>
          Current Leadership Role
        </h2>

        <div>
          <h3 className="text-2xl font-semibold mb-3" style={{ color: colors.textGray }}>
            Deputy National Director for Communications, SEIU (2020-Present)
          </h3>
          <p className="mb-6 text-base leading-relaxed max-w-4xl">
            As deputy to the National Communications Director for America's fastest-growing union, Terry oversees brand development, public policy messaging, and strategic communications implementation across earned media, paid media, digital platforms, and public forums for 2 million members nationwide.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-medium mb-3" style={{ color: colors.secondaryBlue }}>
                Strategic Oversight Areas:
              </h4>
              <ul className="list-disc list-inside space-y-3" style={{ color: colors.textGray }}>
                <li>
                  <strong>Executive Communications</strong>
                  <br />
                  Message development for union leadership
                </li>
                <li>
                  <strong>Public Policy Communications</strong>
                  <br />
                  Legislative advocacy and policy campaigns
                </li>
                <li>
                  <strong>National Media Relations</strong>
                  <br />
                  Securing coverage advancing worker priorities
                </li>
                <li>
                  <strong>Social Justice Communications</strong>
                  <br />
                  Intersectional messaging on equity and justice
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-medium mb-3" style={{ color: colors.secondaryBlue }}>
                Specialized Communications:
              </h4>
              <ul className="list-disc list-inside space-y-3" style={{ color: colors.textGray }}>
                <li>
                  <strong>Environmental Communications</strong>
                  <br />
                  Green jobs and climate justice advocacy
                </li>
                <li>
                  <strong>Immigration Communications</strong>
                  <br />
                  Supporting immigrant worker rights
                </li>
                <li>
                  <strong>Capital Stewardship Communications</strong>
                  <br />
                  Responsible investment messaging
                </li>
                <li>
                  <strong>Crisis Communications</strong>
                  <br />
                  Rapid response and reputation management
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* KEY DIFFERENTIATORS */}
      <section className="mb-14">
        <h2 className="text-4xl font-semibold mb-6" style={{ color: colors.primaryBlue }}>
          What Sets Terry Apart
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            [
              "Labor Authority",
              "Senior leadership role at SEIU provides authentic credibility in labor communications, worker organizing, and union-management relations that generic consultants lack.",
            ],
            [
              "Corporate Credibility",
              "Proven track record providing strategic counsel to Fortune 500 clients including Microsoft, AT&T, Toyota, Eli Lilly, and Novartis during high-stakes situations.",
            ],
            [
              "Government Experience",
              "Federal and local government communications experience, including the Office of the Vice President and DC Government leadership roles.",
            ],
            [
              "Regulatory Expertise",
              "Successfully managed complex regulatory and legislative campaigns across multiple industries during periods of rapid change and stakeholder conflict.",
            ],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="bg-white rounded-md shadow-md p-6 border border-transparent hover:border-[#4299E1] transition-colors"
            >
              <h3 className="text-2xl font-semibold mb-3" style={{ color: colors.primaryBlue }}>
                {title}
              </h3>
              <p style={{ color: colors.textGray }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CAREER TRAJECTORY */}
      <section className="mb-14">
        <h2 className="text-4xl font-semibold mb-6" style={{ color: colors.primaryBlue }}>
          Career Highlights
        </h2>
        <div className="relative pl-8 border-l-2" style={{ borderColor: colors.primaryBlue }}>
          {[
            {
              year: "2020-Present",
              title: "Deputy National Director for Communications, SEIU",
              details: [
                {
                  label: "Impact:",
                  text: "Leads strategic communications for 2 million member union during historic organizing wins and legislative victories.",
                  color: colors.successGreen,
                },
                {
                  label: "Scope:",
                  text: "National brand development, policy messaging, executive communications, and crisis management.",
                },
              ],
            },
            {
              year: "2016-2020",
              title: "Senior Director, Five Corners Strategies",
              details: [
                {
                  label: "Achievement:",
                  text: "Directed national, state, and local regulatory campaigns for cannabis industry clients during explosive growth period.",
                },
                {
                  label: "Value:",
                  text: "Proved ability to navigate emerging industries, complex regulations, and diverse stakeholder coalitions.",
                },
              ],
            },
            {
              year: "2008-2013",
              title: "Vice President, Walker Marchant Group",
              details: [
                {
                  label: "Clients:",
                  text: "Eli Lilly, Novartis, Toyota Motors, Tyco International, Walgreens, Private Equity Council",
                },
                {
                  label: "Expertise:",
                  text: "Public policy communications, crisis management, and strategic counsel during challenging periods.",
                },
              ],
            },
            {
              year: "2005-2008",
              title: "Management Supervisor, Equals Three Communications",
              details: [
                {
                  label: "Innovation:",
                  text: "Pioneered social media marketing and multicultural communications for Microsoft, AT&T, Cisco, and Coors.",
                },
                {
                  label: "Leadership:",
                  text: "Directed multicultural marketing practice during early adoption of digital strategies.",
                },
              ],
            },
            {
              year: "2000-2005",
              title: "Agency Director, DC Government",
              details: [
                {
                  label: "Scope:",
                  text: "Led communications for Deputy Mayor and nine agencies serving children, youth, families, and elders.",
                },
                {
                  label: "Major Project:",
                  text: "Directed citywide community engagement and public support campaign for the Washington Nationals Baseball Stadium development, securing DC City Council and Zoning Commission approvals in 2005.",
                },
                {
                  label: "Experience:",
                  text: "Large-scale infrastructure project approvals, government stakeholder management, community relations, public sector communications, and municipal policy advocacy.",
                },
              ],
            },
            {
              year: "1999-2000",
              title: "Communications Specialist, Office of the Vice President",
              details: [
                {
                  label: "Historic Role:",
                  text: "Developed community-based digital marketing programs in twelve empowerment zone cities.",
                },
                {
                  label: "Innovation:",
                  text: "Pioneered digital equity communications for Clinton Administration's Internet Access initiatives.",
                },
              ],
            },
            {
              year: "1996-2000",
              title: "Senior Associate/Director, GMMB",
              details: [
                {
                  label: "Foundation:",
                  text: "Directed corporate partnership and social marketing practices.",
                },
                {
                  label: "Impact:",
                  text: "Built expertise in purpose-driven communications and corporate social responsibility.",
                },
              ],
            },
          ].map(({ year, title, details }) => (
            <div key={year} className="flex flex-col md:flex-row mb-8 relative">
             

              <div className="font-bold min-w-[120px] mr-8 mb-2 md:mb-0" style={{ color: colors.primaryBlue }}>
                {year}
              </div>
              <div className="max-w-3xl">
                <h3 className="text-2xl font-semibold mb-2" style={{ color: colors.textGray }}>
                  {title}
                </h3>
                {details.map(({ label, text, color }, i) => (
                  <p key={i} className="mb-1" style={{ color: color ?? colors.textGray }}>
                    <strong>{label}</strong> {text}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UNIQUE VALUE */}
    <section className="mb-14 max-w-5xl space-y-10">
  <h2 className="text-4xl font-semibold mb-6" style={{ color: colors.primaryBlue }}>
    The Garvey Labs Advantage
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    {[  
      [
        "Stakeholder Navigation Expertise",
        "Terry's unique career path—from corporate boardrooms to union halls to government offices—enables him to understand and bridge diverse stakeholder perspectives that would challenge other consultants. This cross-sector experience is essential for complex projects involving multiple constituencies.",
      ],
      [
        "Crisis Prevention & Management",
        "Extensive experience managing high-stakes communications for Fortune 500 companies, labor disputes, and regulatory challenges. Terry's approach focuses on proactive communications that prevent crises while maintaining readiness for rapid response when needed.",
      ],
      [
        "Policy Communications That Drive Outcomes",
        "Deep expertise in translating complex policy issues into compelling public communications. From cannabis regulation to labor rights to digital equity, Terry has successfully influenced policy outcomes through strategic messaging and stakeholder engagement.",
      ],
      [
        "Innovation in Community Engagement",
        "Early pioneer in social media marketing, multicultural communications, and digital equity initiatives. Brings innovative approaches to traditional community engagement challenges, particularly in renewable energy and infrastructure development.",
      ],
      [
        "Authentic Relationship Building",
        "From empowerment zone communities to C-suites to union organizing committees, Terry builds genuine relationships that enable effective communications and sustainable outcomes. This authenticity is crucial for long-term project success.",
      ],
    ].map(([title, desc], idx, arr) => {
      const isLast = idx === arr.length - 1;
      return (
        <div
          key={title}
          className={`
            border border-gray-300 rounded-lg p-6
            ${isLast ? "md:col-span-2 flex flex-col items-center text-center" : ""}
          `}
        >
          <h3
            className="text-2xl font-semibold mb-2"
            style={{ color: colors.primaryBlue }}
          >
            {title}
          </h3>
          <p style={{ color: colors.textGray }} className="text-base leading-relaxed">
            {desc}
          </p>
        </div>
      );
    })}
  </div>
</section>



      {/* PHILOSOPHY */}
      <section className="mb-17 max-w-4xl">
        <h2 className="text-4xl font-semibold mb-6" style={{ color: colors.primaryBlue }}>
          Communication Philosophy
        </h2>

        <div
          className="p-8 mb-8 rounded"
          style={{
            backgroundColor: colors.lightBg,
            borderLeft: `4px solid ${colors.primaryBlue}`,
          }}
        >
          <blockquote
            className="italic text-lg leading-relaxed m-0"
            style={{ color: colors.accentNavy }}
          >
            "After 25+ years in strategic communications, I've learned that successful projects aren't just about perfect messaging—they're about building authentic relationships between organizations and the communities they serve. Whether it's a renewable energy development, a labor organizing campaign, or a social justice initiative, lasting success comes from understanding all stakeholders and creating communications that build bridges, not walls."
          </blockquote>
          <cite className="block font-bold text-right mt-4" style={{ color: colors.textGray }}>
            — Terry Lee, Founder, Garvey Labs
          </cite>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4" style={{ color: colors.primaryBlue }}>
            Core Principles
          </h3>
          <ul className="list-disc list-inside space-y-2" style={{ color: colors.textGray }}>
            <li>
              <strong>Authenticity Over Spin:</strong> Genuine engagement builds trust; manipulation destroys it
            </li>
            <li>
              <strong>Stakeholder Inclusion:</strong> Better outcomes emerge when all voices are heard and valued
            </li>
            <li>
              <strong>Proactive Engagement:</strong> Early, transparent communication prevents conflicts and delays
            </li>
            <li>
              <strong>Community-Centered Approach:</strong> Projects succeed when communities see genuine benefits
            </li>
            <li>
              <strong>Results-Driven Strategy:</strong> Communications must drive real-world outcomes, not just coverage
            </li>
          </ul>
        </div>
      </section>

      {/* WHY NOW */}
      <section className="mb-14 max-w-4xl">
        <h2 className="text-4xl font-semibold mb-6" style={{ color: colors.primaryBlue }}>
          Why Garvey Labs, Why Now
        </h2>
        <p className="mb-4 text-base leading-relaxed" style={{ color: colors.textGray }}>
          Terry founded Garvey Labs to apply his diverse experience to the organizations and challenges that matter most in our current moment: accelerating renewable energy development, building sustainable digital infrastructure, strengthening worker power, and advancing social justice.
        </p>
        <p
          className="mb-6 text-base leading-relaxed italic"
          style={{ color: colors.textGray }}
        >
          "We're at a critical inflection point where the success of these vital initiatives depends on sophisticated communications and genuine community engagement. Generic consultancies don't understand the nuanced stakeholder dynamics involved in these sectors. Garvey Labs brings the specific expertise, authentic relationships, and proven methodologies needed to navigate these challenges successfully."
        </p>

        <div>
          <h3 className="text-2xl font-semibold mb-4" style={{ color: colors.primaryBlue }}>
            Today's Focus Areas
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              ["Renewable Energy", "Accelerating clean energy deployment through effective community engagement"],
              ["Green Data Centers", "Positioning sustainable digital infrastructure for community acceptance"],
              ["Labor Organizing", "Centering worker voices in an era of renewed union strength"],
              ["Social Impact", "Advancing justice and equity through strategic communications"],
            ].map(([title, desc]) => (
              <div key={title}>
                <h4 className="text-xl font-medium mb-1" style={{ color: colors.secondaryBlue }}>
                  {title}
                </h4>
                <p style={{ color: colors.textGray }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK WITH TERRY */}
      <section className="mb-20 max-w-4xl">
        <h2 className="text-4xl font-semibold mb-6" style={{ color: colors.primaryBlue }}>
          Ready to Get Started?
        </h2>
        <p className="mb-6 text-base leading-relaxed" style={{ color: colors.textGray }}>
          Whether you're developing renewable energy projects, building worker power, advancing social justice, or positioning sustainable digital infrastructure, Terry brings the cross-sector experience and proven expertise to help you achieve your goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-md shadow-md p-6 text-center">
            <h3 className="text-2xl font-semibold mb-3" style={{ color: colors.primaryBlue }}>
              Discuss Your Project
            </h3>
            <p className="mb-4" style={{ color: colors.textGray }}>
              Schedule a consultation to explore how Garvey Labs can support your strategic communications and community engagement needs.
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition"
            >
              Get in Touch
            </a>
          </div>

          <div className="bg-white rounded-md shadow-md p-6 text-center">
            <h3 className="text-2xl font-semibold mb-3" style={{ color: colors.primaryBlue }}>
              Join Our Network
            </h3>
            <p className="mb-4" style={{ color: colors.textGray }}>
              Connect with other professionals working on meaningful projects that create positive change.
            </p>
            <a
              href="/connect"
              className="inline-block border-2 border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 font-semibold py-2 px-6 rounded transition"
            >
              Connect With Us
            </a>
          </div>
        </div>
      </section>

      {/* BACK NAVIGATION */}
      <section className="border-t border-gray-300 pt-8 mt-12 max-w-4xl">
        <a href="/about" className="text-blue-500 hover:text-blue-700 font-medium no-underline">
          &larr; Back to About Garvey Labs
        </a>
      </section>
    </div>
  );
}
