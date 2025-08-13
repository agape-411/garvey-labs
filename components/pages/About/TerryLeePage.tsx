"use client";

import React from "react";

export default function TerryLeePage() {
  // Custom colors
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

  const systemFontStack =
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif';

  return (
    <div style={{ fontFamily: systemFontStack, color: colors.textGray }}>
      {/* FULL-WIDTH HERO (no mx-auto on header/video) */}
      <header
        className="relative w-full overflow-hidden text-white"
        style={{ minHeight: "60vh" }}
      >
        {/* Background Video (fills header) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/aboutgarvey-video.mp4" type="video/mp4" />
          {/* fallback */}
        </video>

        {/* Gradient overlay for readability */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, ${colors.primaryBlue}cc, ${colors.accentNavy}cc)`,
          }}
        />

        {/* Inner centered content (this can keep mx-auto) */}
        <div className="relative px-6 py-16 sm:px-10 sm:py-24">
          <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 leading-tight">
           Terry Lee
          </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
              Founder & Principal, Garvey Labs
            </p>
            <p
              className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
              style={{ color: "#E6FFFA" }}
            >
            25+ Years Leading Strategic Communications for Labor, Social Impact,
            and Corporate Clients
            </p>
          </div>
        </div>

      </header>

      {/* PAGE CONTENT */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* OVERVIEW */}
        <section className="mb-14">
          <h2
            className="text-2xl md:text-4xl font-semibold mb-6"
            style={{ color: colors.primaryBlue }}
          >
            Cross-Sector Expertise That Drives Results
          </h2>
          <p className="mb-4 text-base sm:text-lg leading-relaxed max-w-4xl">
            Terry Lee brings a rare combination of labor organizing leadership,
            Fortune 500 corporate communications experience, and federal
            government relations background to Garvey Labs. His career
            trajectory—from the Office of the Vice President to Deputy National
            Director for Communications at SEIU—provides unparalleled insight
            into the intersection of strategic communications, public policy,
            and community engagement.
          </p>
          <p className="text-base sm:text-lg leading-relaxed max-w-4xl">
            This diverse background enables Terry to understand and navigate
            multiple stakeholder perspectives simultaneously, creating
            communications strategies that build bridges between seemingly
            opposing interests and drive measurable results for clients across
            renewable energy, digital infrastructure, labor organizing, and
            social justice sectors.
          </p>
        </section>

        {/* CURRENT LEADERSHIP */}
        <section className="mb-14">
          <h2
            className="text-2xl md:text-4xl font-semibold mb-6"
            style={{ color: colors.primaryBlue }}
          >
            Current Leadership Role
          </h2>

          <div>
            <h3
              className="text-xl md:text-2xl font-semibold mb-3"
              style={{ color: colors.textGray }}
            >
              Leadership Roles (2020-2025)
            </h3>
            <p className="mb-6 text-base sm:text-lg leading-relaxed max-w-4xl">
              Terry Lee served in dual leadership capacities that uniquely positioned him at the intersection of labor
              advocacy and renewable energy development. As Deputy National Director for Communications at America's fastest-growing union,
              he oversaw brand development, public policy messaging, and strategic communications across earned media, paid media, digital platforms, 
              and public forums for 2 million members nationwide. Simultaneously, his role as Strategic Advisor for Public Affairs and Community Engagement
              for a large-scale renewable energy development provided critical insight into the community engagement challenges facing the deployment of clean energy.
              This dual expertise enabled Terry to bridge the traditionally complex relationship between labor interests and renewable energy projects, creating communications
              strategies that advanced both worker priorities and climate goals while building authentic community support for sustainable infrastructure development.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4
                  className="text-lg md:text-xl font-medium mb-3"
                  style={{ color: colors.secondaryBlue }}
                >
                  Strategic Oversight Areas:
                </h4>
                <ul
                  className="list-disc list-inside space-y-3 text-sm sm:text-base"
                  style={{ color: colors.textGray }}
                >
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
                <h4
                  className="text-lg md:text-xl font-medium mb-3"
                  style={{ color: colors.secondaryBlue }}
                >
                  Specialized Communications:
                </h4>
                <ul
                  className="list-disc list-inside space-y-3 text-sm sm:text-base"
                  style={{ color: colors.textGray }}
                >
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
          <h2
            className="text-2xl md:text-4xl font-semibold mb-6"
            style={{ color: colors.primaryBlue }}
          >
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
                <h3
                  className="text-lg md:text-2xl font-semibold mb-3"
                  style={{ color: colors.primaryBlue }}
                >
                  {title}
                </h3>
                <p className="text-sm sm:text-base" style={{ color: colors.textGray }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CAREER TRAJECTORY + CAREER OVERVIEW CARDS */}
        <section className="mb-14">
          <h2
            className="text-2xl md:text-4xl font-semibold mb-6"
            style={{ color: colors.primaryBlue }}
          >
            Career Highlights
          </h2>

          {/* Career Overview — gradient background card */}
          <div className="relative bg-gradient-to-br from-[#667eea] to-[#764ba2] p-8 sm:p-10 rounded-3xl flex justify-center mb-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 text-center max-w-xl w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                Career Overview
              </h3>
              <p className="text-sm sm:text-base text-gray-500 mb-6">
                Strategic Communications &amp; Public Policy Leadership
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Card 1 */}
                <div className="bg-gradient-to-br from-[#4facfe] to-[#00f2fe] rounded-xl p-4 sm:p-6 text-white shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/40">
                  <p className="text-2xl sm:text-3xl font-bold mb-1">25+</p>
                  <p className="text-xs sm:text-sm">Years Experience</p>
                </div>

                {/* Card 2 */}
                <div className="bg-gradient-to-br from-[#ff758c] to-[#ff7eb3] rounded-xl p-4 sm:p-6 text-white shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-400/40">
                  <p className="text-2xl sm:text-3xl font-bold mb-1">8</p>
                  <p className="text-xs sm:text-sm">Leadership Positions</p>
                </div>

                {/* Card 3 */}
                <div className="bg-gradient-to-br from-[#f7971e] to-[#ffd200] rounded-xl p-4 sm:p-6 text-white shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/40">
                  <p className="text-2xl sm:text-3xl font-bold mb-1">3</p>
                  <p className="text-xs sm:text-sm">Industry Sectors</p>
                </div>

                {/* Card 4 */}
                <div className="bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb] rounded-xl p-4 sm:p-6 text-white shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/40">
                  <p className="text-2xl sm:text-3xl font-bold mb-1">2M+</p>
                  <p className="text-xs sm:text-sm">Union Members Served</p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative pl-6 sm:pl-8 border-l-2" style={{ borderColor: colors.primaryBlue }}>
            {[
              {
                year: "2020-2025",
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
                title: "Director, Equals Three Communications",
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
                title: "Government Communications Director, Executive Office of The Mayor, District of Columbia",
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
                title: "Communications Specialist, Office of the Vice President of the United States",
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
                <div className="font-bold min-w-[120px] mr-6 mb-2 md:mb-0 text-sm sm:text-base" style={{ color: colors.primaryBlue }}>
                  {year}
                </div>
                <div className="max-w-3xl">
                  <h3 className="text-lg md:text-2xl font-semibold mb-2" style={{ color: colors.textGray }}>
                    {title}
                  </h3>
                  {details.map(({ label, text, color }, i) => (
                    <p key={i} className="mb-1 text-sm sm:text-base" style={{ color: color ?? colors.textGray }}>
                      <strong>{label}</strong> {text}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* THE GARVEY LABS ADVANTAGE */}
        <section className="mb-14">
          <h2 className="text-2xl md:text-4xl font-semibold mb-6" style={{ color: colors.primaryBlue }}>
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
                  className={`border border-gray-300 rounded-lg p-6 ${isLast ? "md:col-span-2 flex flex-col items-center text-center" : ""}`}
                >
                  <h3 className="text-xl md:text-2xl font-semibold mb-2" style={{ color: colors.primaryBlue }}>
                    {title}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed" style={{ color: colors.textGray }}>
                    {desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="mb-14">
          <h2 className="text-2xl md:text-4xl font-semibold mb-6" style={{ color: colors.primaryBlue }}>
            Communication Philosophy
          </h2>

          <div className="p-6 mb-8 rounded" style={{ backgroundColor: colors.lightBg, borderLeft: `4px solid ${colors.primaryBlue}` }}>
            <blockquote className="italic text-sm sm:text-base leading-relaxed m-0" style={{ color: colors.accentNavy }}>
              "After 25+ years in strategic communications, I've learned that successful projects aren't just about perfect messaging—they're about building authentic relationships between organizations and the communities they serve. Whether it's a renewable energy development, a labor organizing campaign, or a social justice initiative, lasting success comes from understanding all stakeholders and creating communications that build bridges, not walls."
            </blockquote>
            <cite className="block font-bold text-right mt-4" style={{ color: colors.textGray }}>
              — Terry Lee, Founder, Garvey Labs
            </cite>
          </div>

          <div>
            <h3 className="text-lg md:text-2xl font-semibold mb-4" style={{ color: colors.primaryBlue }}>
              Core Principles
            </h3>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base" style={{ color: colors.textGray }}>
              <li><strong>Authenticity Over Spin:</strong> Genuine engagement builds trust; manipulation destroys it</li>
              <li><strong>Stakeholder Inclusion:</strong> Better outcomes emerge when all voices are heard and valued</li>
              <li><strong>Proactive Engagement:</strong> Early, transparent communication prevents conflicts and delays</li>
              <li><strong>Community-Centered Approach:</strong> Projects succeed when communities see genuine benefits</li>
              <li><strong>Results-Driven Strategy:</strong> Communications must drive real-world outcomes, not just coverage</li>
            </ul>
          </div>
        </section>

        {/* WHY NOW */}
        <section className="mb-14">
          <h2 className="text-2xl md:text-4xl font-semibold mb-6" style={{ color: colors.primaryBlue }}>
            Why Garvey Labs, Why Now
          </h2>
          <p className="mb-4 text-sm sm:text-base leading-relaxed" style={{ color: colors.textGray }}>
            Terry founded Garvey Labs to apply his diverse experience to the organizations and challenges that matter most in our current moment: accelerating renewable energy development, building sustainable digital infrastructure, strengthening worker power, and advancing social justice.
          </p>
          <p className="mb-6 text-sm sm:text-base leading-relaxed italic" style={{ color: colors.textGray }}>
            "We're at a critical inflection point where the success of these vital initiatives depends on sophisticated communications and genuine community engagement. Generic consultancies don't understand the nuanced stakeholder dynamics involved in these sectors. Garvey Labs brings the specific expertise, authentic relationships, and proven methodologies needed to navigate these challenges successfully."
          </p>

          <div>
            <h3 className="text-lg md:text-2xl font-semibold mb-4" style={{ color: colors.primaryBlue }}>
              Today's Focus Areas
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm sm:text-base">
              {[
                ["Renewable Energy", "Accelerating clean energy deployment through effective community engagement"],
                ["Green Data Centers", "Positioning sustainable digital infrastructure for community acceptance"],
                ["Labor Organizing", "Centering worker voices in an era of renewed union strength"],
                ["Social Impact", "Advancing justice and equity through strategic communications"],
              ].map(([title, desc]) => (
                <div key={title}>
                  <h4 className="text-base md:text-xl font-medium mb-1" style={{ color: colors.secondaryBlue }}>{title}</h4>
                  <p style={{ color: colors.textGray }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WORK WITH TERRY */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-4xl font-semibold mb-6" style={{ color: colors.primaryBlue }}>
            Ready to Get Started?
          </h2>
          <p className="mb-6 text-sm sm:text-base leading-relaxed" style={{ color: colors.textGray }}>
            Whether you're developing renewable energy projects, building worker power, advancing social justice, or positioning sustainable digital infrastructure, Terry brings the cross-sector experience and proven expertise to help you achieve your goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-md shadow-md p-6 text-center">
              <h3 className="text-lg md:text-2xl font-semibold mb-3" style={{ color: colors.primaryBlue }}>
                Discuss Your Project
              </h3>
              <p className="mb-4 text-md sm:text-md" style={{ color: colors.textGray }}>
                Schedule a consultation to explore how Garvey Labs can support your strategic communications and community engagement needs.
              </p>
              <a href="/contact" className="inline-block bg-[#4299E1] hover:bg-[#2C5282] text-white font-semibold py-2 px-6 rounded transition">
                Get in Touch
              </a>
            </div>

            <div className="bg-white rounded-md shadow-md p-6 text-center">
              <h3 className="text-lg md:text-2xl font-semibold mb-3" style={{ color: colors.primaryBlue }}>
                Join Our Network
              </h3>
              <p className="mb-4 text-md sm:text-md" style={{ color: colors.textGray }}>
                Connect with other professionals working on meaningful projects that create positive change.
              </p>
              <a href="/connect" className="inline-block border-2 border-[#4299E1] hover:bg-[#4299E1] hover:text-white text-[#4299E1] font-semibold py-2 px-6 rounded transition">
                Connect With Us
              </a>
            </div>
          </div>
        </section>

        {/* BACK NAV */}
        <section className="border-t border-gray-300 pt-8 mt-12">
          <a href="/about" className="text-[#4299E1] hover:text-[#2C5282] font-medium">
            &larr; Back to About Garvey Labs
          </a>
        </section>
      </main>
    </div>
  );
}
