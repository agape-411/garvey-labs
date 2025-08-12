// app/news/beyond-nimby/page.tsx
"use client";

import Link from "next/link";
import React from "react";
import { JSX } from "react/jsx-dev-runtime";

export default function BeyondNimbyPage(): JSX.Element {
  return (
    <div className="bg-[#f8fafc] text-[#2d3748] font-sans leading-[1.7] min-h-screen">
      <article className="max-w-[900px] mx-auto bg-white shadow-[0_4px_6px_rgba(0,0,0,0.07)] rounded-[12px] overflow-hidden mt-8 mb-12">
        {/* Header */}
        <header className="relative bg-gradient-to-br from-[#1a365d] to-[#2d3748] text-white pt-[3rem] pb-[2.5rem] px-[2.5rem] md:pt-[3rem] md:pb-[2.5rem] md:px-[2.5rem]">
          {/* Accent stripe */}
          <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#48bb78] via-[#38b2ac] to-[#4299e1]" />
          <h1 className="text-[1.75rem] md:text-[2.5rem] font-[700] leading-[1.2] mb-4">
            Beyond NIMBY: How Smart Communications Can Transform Renewable Energy Community Engagement
          </h1>

          <p className="text-[1rem] md:text-[1.25rem] text-[#cbd5e0] font-[400] mb-6">
            A strategic framework for developers navigating the new landscape of local opposition
          </p>

          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-[0.95rem] text-[#a0aec0]">
            <span className="flex items-center">By Terry Lee, Founder of Garvey Labs</span>
            <span className="flex items-center">January 2025</span>
            <span className="flex items-center">15 min read</span>
          </div>
        </header>

        {/* Summary */}
        <div className="bg-[#edf2f7] px-[2.5rem] py-[2rem] border-l-4 border-[#4299e1]">
          <p className="text-[1.05rem] md:text-[1.1rem] text-[#2d3748] font-[500]">
            <strong>
              Opposition to renewable energy projects has become as predictable as it is persistent—but it doesn't have to be inevitable.
            </strong>{" "}
            The renewable energy sector faces a paradox that threatens to derail the clean energy transition: while 90% of Americans support renewable energy in principle, local communities increasingly reject projects in their backyards. From wind farms in rural Iowa to solar installations in suburban New Jersey, developers encounter sophisticated opposition campaigns that can delay projects for years or kill them entirely.
          </p>
        </div>

        {/* Main content */}
        <div className="px-[2.5rem] py-[2.5rem] text-[1rem] md:text-[1.05rem] article-content">
          <p className="mb-6 text-[#4a5568]">
            This challenge comes at a critical moment when America's electricity demand is surging from multiple directions simultaneously. Extreme weather events are driving unprecedented peak demand as communities rely increasingly on air conditioning and heating. The rapid adoption of electric vehicles is fundamentally reshaping transportation infrastructure and energy consumption patterns. Perhaps most dramatically, the explosion in artificial intelligence applications—from data centers to cloud computing—is creating massive new electricity demands that will only intensify as AI becomes embedded in every sector of the economy.
          </p>

          <p className="mb-6 text-[#4a5568]">
            The traditional playbook of technical presentations and economic impact studies is failing. Communities don't reject renewable projects because they lack information—they reject them because they've been flooded with misinformation, feel excluded from decision-making, and distrust outside developers. Success in today's environment requires understanding the psychological, social, and information dynamics that actually drive community attitudes.
          </p>

          <h2 className="text-[1.375rem] md:text-[1.875rem] font-[700] text-[#1a365d] mt-10 mb-4 pb-1 border-b-2 border-[#e2e8f0]">
            The New Opposition Landscape
          </h2>

          <p className="mb-6 text-[#4a5568]">
            Today's renewable energy opposition operates differently than the simple NIMBY resistance of the past. Communities now face coordinated disinformation campaigns funded by fossil fuel interests, amplified through social media echo chambers, and weaponizing legitimate local concerns to serve broader political agendas.
          </p>

          <p className="mb-6 text-[#4a5568]">
            My research on fake news and democratic processes (Lee, T., "The global rise of 'fake news' and the threat to democratic elections in the USA," <em>Public Administration and Policy</em>, Vol. 22 No. 1, 2019, pp. 15-24) revealed how misinformation succeeds not by fooling passive audiences, but by exploiting existing beliefs and social divisions. The same dynamics play out in renewable energy debates. Opposition groups don't need to convince everyone that wind turbines cause cancer—they just need to create enough doubt and fear to mobilize a vocal minority while keeping supporters silent.
          </p>

          <p className="mb-6 text-[#4a5568]">
            The data is stark: since 2003, county-level wind ordinances have increased 16-fold, with average setback requirements growing by 304%. Solar projects face similar headwinds, with nearly 80 rural governments rejecting or restricting solar developments in 2022 alone. This isn't random local opposition—it's the result of systematic information warfare.
          </p>

          <p className="mb-6 text-[#4a5568]">
            The most effective opposition campaigns understand something that many developers don't: people make decisions based on identity and emotion, not spreadsheets and environmental impact assessments. They frame renewable energy as an attack on community character, property values, and local control—hitting psychological pressure points that technical arguments can't address.
          </p>

          <p className="mb-6 text-[#4a5568]">
            Meanwhile, the urgency for renewable deployment has never been greater. The U.S. Energy Information Administration projects that electricity demand will grow by 15-20% over the next decade, driven primarily by electrification of transportation, extreme weather adaptation, and the massive energy requirements of AI infrastructure. Data centers alone are expected to consume 8% of total U.S. electricity by 2030, up from 3% today. This surge in demand makes every delayed renewable project not just an environmental setback, but a potential contributor to grid instability and energy security risks.
          </p>

          <h2 className="text-[1.375rem] md:text-[1.875rem] font-[700] text-[#1a365d] mt-10 mb-4 pb-1 border-b-2 border-[#e2e8f0]">
            Why Traditional Approaches Fail
          </h2>

          <p className="mb-6 text-[#4a5568]">
            Most developers still rely on what I call the "deficit model" of community engagement—the assumption that opposition stems from lack of information. They organize town halls, distribute fact sheets, and present technical data, then wonder why communities remain unconvinced. When those efforts fail, they typically escalate to more intensive versions of the same flawed approach: door-to-door canvassing with technical talking points and creating supporter Facebook groups that mirror the echo chambers they're trying to combat.
          </p>

          <p className="mb-6 text-[#4a5568]">
            This approach fails because it fundamentally misunderstands how people process information about complex, controversial issues. Research in cognitive psychology shows that when people have strong prior beliefs or high emotional investment in an outcome, presenting contradictory facts often backfires—literally making them more convinced of their original position.
          </p>

          <p className="mb-6 text-[#4a5568]">
            Consider the typical developer presentation: detailed wind studies, economic impact projections, and environmental assessments. To a nervous homeowner worried about property values, this feels like being lectured by an outsider with financial interests in the outcome. The technical competence that impresses investors alienates communities.
          </p>

          <p className="mb-6 text-[#4a5568]">
            Door-to-door canvassing often compounds these problems. When project representatives show up at front doors armed with technical brochures and talking points, residents experience this as corporate intrusion rather than community engagement. The very act of being "sold to" in their homes triggers psychological resistance that makes persuasion less likely.
          </p>

          <p className="mb-6 text-[#4a5568]">
            Similarly, developer-created Facebook groups and pages often fail because they feel artificial to community members. When opposition groups have already established active social media presence with authentic local voices, corporate-managed supporter pages appear inauthentic by comparison. These platforms become echo chambers for people who already support projects rather than venues for genuinely engaging undecided residents.
          </p>

          <p className="mb-6 text-[#4a5568]">
            Moreover, traditional engagement happens too late in the process. By the time developers reach out to communities, opponents have often organized, established narrative frames, and mobilized social networks. Playing defense against entrenched opposition is far harder than building proactive community relationships.
          </p>

          <p className="mb-6 text-[#4a5568]">
            The most damaging assumption is that opposition is purely local and grassroots. In reality, many anti-renewable campaigns receive funding and coordination from national fossil fuel interests, professional opposition groups, and political organizations seeking to weaponize energy issues. Developers treating these campaigns as good-faith local concerns are bringing community engagement strategies to information warfare.
          </p>

          <h2 className="text-[1.375rem] md:text-[1.875rem] font-[700] text-[#1a365d] mt-10 mb-4 pb-1 border-b-2 border-[#e2e8f0]">
            The Diversity Advantage: Why Heterogeneous Communities Support Clean Energy
          </h2>

          <p className="mb-6 text-[#4a5568]">
            Paradoxically, some of the strongest renewable energy support comes from America's most diverse communities. This isn't coincidental—it reflects fundamental differences in how diverse communities process information, make decisions, and respond to change.
          </p>

          <p className="mb-6 text-[#4a5568]">
            Research consistently shows that diverse communities demonstrate greater openness to innovation and change, higher trust in scientific expertise, and stronger support for policies addressing collective challenges like climate change. Latino communities, for instance, show some of the highest levels of concern about climate change and support for renewable energy development, often viewing clean energy as essential for their children's future and economic opportunity.
          </p>

          <p className="mb-6 text-[#4a5568]">
            African American communities, particularly those with histories of environmental injustice from fossil fuel infrastructure, frequently embrace renewable energy as both environmental justice and economic empowerment. When solar installations create jobs for local residents and reduce energy burdens on low-income families, they represent concrete benefits rather than abstract environmental goals.
          </p>

          <p className="mb-6 text-[#4a5568]">
            Immigrant communities often bring perspectives from countries where renewable energy adoption is more advanced, making them natural allies for clean energy development. They may have firsthand experience with energy independence challenges and understand the strategic importance of domestic energy production.
          </p>

          <p className="mb-6 text-[#4a5568]">
            Younger, more educated populations in diverse suburban communities typically combine environmental consciousness with economic pragmatism, supporting renewable projects that align with their values while bringing tangible community benefits.
          </p>

          <p className="mb-6 text-[#4a5568]">
            These communities also tend to have more complex information ecosystems—multiple languages, diverse media sources, and various cultural frameworks for understanding environmental issues. While this complexity can seem challenging, it actually creates opportunities for more nuanced, culturally appropriate messaging that resonates more deeply than generic corporate communications
          </p>

          

          <h3 className="text-[1.125rem] md:text-[1.5rem] font-[600] text-[#2d3748] mt-8 mb-4">
            The Strategic Communications Framework
          </h3>

          <p className="mb-6 text-[#4a5568]">
            Effective renewable energy community engagement requires four integrated components: narrative strategy, messenger authenticity, relationship infrastructure, and information ecosystem management.
          </p>

          <h3 className="text-[1.125rem] md:text-[1.5rem] font-[600] text-[#2d3748] mt-6 mb-4">
            Narrative Strategy: Values Before Facts
          </h3>

          <p className="mb-6 text-[#4a5568]">
            Instead of leading with technical specifications, successful projects begin with shared values. Communities that embrace renewable projects don't do so because they understand grid interconnection—they do so because the projects align with their identity and aspirations.
          </p>

          <p className="mb-6 text-[#4a5568]">
            In rural Texas, wind projects succeed when framed around energy independence, agricultural diversification, and keeping young people in farming communities. In suburban California, solar developments gain support when positioned as climate leadership and economic innovation. In data center communities, renewable energy projects gain traction when positioned as ensuring reliable power for the digital economy that increasingly drives local prosperity.
          </p>

          <p className="mb-6 text-[#4a5568]">
            In diverse communities, successful narratives often center on equity and opportunity. Latino families supporting solar installations see them as reducing energy costs and creating pathways to skilled green jobs for their children. African American communities embrace wind projects that bring economic development while avoiding the environmental burdens of fossil fuel infrastructure.
          </p>

          <p className="mb-6 text-[#4a5568]">
            The surging electricity demands from AI, electric vehicles, and climate adaptation create new narrative opportunities across all communities. Communities can understand renewable energy as preparing for an electric future rather than imposing environmental ideology. When local residents see Tesla charging stations proliferating and experience rolling blackouts during heat waves, renewable energy becomes about practical resilience rather than abstract environmental goals.
          </p>

          <p className="mb-6 text-[#4a5568]">
            This requires deep ethnographic work to understand community values, not just demographic profiles. What do residents take pride in? What threatens their sense of identity? How do they talk about their community's future? Effective narratives connect renewable energy to these existing cultural frameworks rather than imposing outside environmental or economic logic.
          </p>



          <blockquote className="bg-[#f7fafc] border-l-4 border-[#48bb78] p-4 md:p-6 my-6 italic text-[1.05rem] md:text-[1.1rem] text-[#2d3748] rounded-tr-md rounded-br-md">
            "The key insight from successful campaigns: frame renewable energy as enhancing community identity rather than challenging it. When wind turbines become symbols of agricultural innovation and energy independence rather than industrial intrusion, opposition narratives lose their emotional power."
          </blockquote>

          <h3 className="text-[1.125rem] md:text-[1.5rem] font-[600] text-[#2d3748] mt-6 mb-4">
            Messenger Authenticity: Trust Before Truth
          </h3>

          <p className="mb-6 text-[#4a5568]">
            The most persuasive voice for renewable energy isn't the developer or environmental activist—it's the respected community member who genuinely supports the project. Farmers who host turbines, local business owners who benefit from construction activity, and teachers whose schools receive lease revenue carry credibility that no outside expert can match.
          </p>

          <p className="mb-6 text-[#4a5568]">
            In diverse communities, messenger authenticity takes on additional dimensions. Language matters—Spanish-speaking community members trust information from bilingual neighbors more than English-only corporate communications. Cultural competence matters—African American pastors discussing renewable energy from the pulpit carry more weight than white environmental activists at community meetings.
          </p>

          <p className="mb-6 text-[#4a5568]">
            Building these authentic messenger networks requires patience and genuine relationship-building. Developers must identify natural allies early, provide them with compelling talking points, and amplify their voices through multiple channels. This isn't astroturfing—it's empowering real community members to tell their own stories.
          </p>

          <p className="mb-6 text-[#4a5568]">
            The most effective messenger strategy I've observed involved a wind developer who identified a local farmer early in the process, supported him through lease negotiations, and then helped him become the public face of the project. When opponents organized town halls, this farmer's neighbors heard from someone they trusted rather than a corporate representative. His authentic advocacy—based on real experience and genuine community ties—neutralized opposition talking points about outside interference.
          </p>

          

          <h3 className="text-[1.125rem] md:text-[1.5rem] font-[600] text-[#2d3748] mt-6 mb-4">
            Relationship Infrastructure: Networks Before Projects
          </h3>

          <p className="mb-6 text-[#4a5568]">
            Successful renewable energy development requires building social infrastructure alongside physical infrastructure. This means creating ongoing relationships, communication channels, and community benefit structures that persist throughout the project lifecycle.
          </p>

          <p className="mb-6 text-[#4a5568]">
            Smart developers establish Community Advisory Boards with real decision-making power, not just consultative roles. They create regular communication rhythms—monthly newsletters, quarterly meetings, annual community events—that keep residents informed and engaged. They build economic partnerships that give communities genuine stake in project success.
          </p>

          <p className="mb-6 text-[#4a5568]">
            In diverse communities, relationship infrastructure must reflect community complexity. This might mean conducting meetings in multiple languages, partnering with ethnic community organizations, engaging faith leaders from various traditions, and ensuring decision-making bodies include representative demographics.
          </p>

          <p className="mb-6 text-[#4a5568]">
            This relationship infrastructure serves multiple purposes: early warning systems for emerging opposition, rapid response networks for combating misinformation, and ongoing social license maintenance as projects become operational. Communities that feel genuinely partnered with developers become advocates rather than adversaries.
          </p>

          <h3 className="text-[1.125rem] md:text-[1.5rem] font-[600] text-[#2d3748] mt-6 mb-4">
            Information Ecosystem Management: Proactive Not Reactive
          </h3>

          <p className="mb-6 text-[#4a5568]">
            In today's fragmented media environment, developers must actively manage information flows rather than hoping accurate information will naturally prevail. This means understanding how different community segments get information, monitoring social media conversations, and providing credible local sources with compelling content.
          </p>

          <p className="mb-6 text-[#4a5568]">
            The key insight from misinformation research: correction efforts that simply debunk false claims often fail because they repeat the misinformation while trying to refute it. More effective approaches provide alternative narratives and positive stories that crowd out negative messaging. Instead of arguing that wind turbines don't cause health problems, successful campaigns share stories of farmers whose families live healthily alongside turbines for years
          </p>

          <p className="mb-6 text-[#4a5568]">
            In diverse communities, positive storytelling can be particularly powerful. When Latino families share stories about reduced electricity bills from community solar programs, or when African American workers describe career advancement through renewable energy jobs, these narratives create emotional connections that technical arguments cannot achieve.
          </p>

          <h2 className="text-[1.375rem] md:text-[1.875rem] font-[700] text-[#1a365d] mt-10 mb-4 pb-1 border-b-2 border-[#e2e8f0]">
            Practical Implementation: The 90-Day Framework
          </h2>

          <p className="mb-6 text-[#4a5568]">
            Developers ready to implement strategic communications should follow a structured timeline that builds community relationships before introducing specific projects:
          </p>

          <h3 className="text-[1.125rem] md:text-[1.5rem] font-[600] text-[#2d3748] mt-6 mb-4">
            Days 1-30: Listening and Learning
          </h3>
          <p className="mb-6 text-[#4a5568]">
            Conduct ethnographic research to understand community values, concerns, and communication patterns. Identify potential allies, opinion leaders, and opposition sources. This isn't market research—it's cultural anthropology focused on understanding how communities make sense of change and development.
          </p>

          <h3 className="text-[1.125rem] md:text-[1.5rem] font-[600] text-[#2d3748] mt-6 mb-4">
            Days 31-60: Relationship Building
          </h3>
          <p className="mb-6 text-[#4a5568]">
            Begin authentic relationship building with identified community leaders. Provide value through information sharing, technical expertise, or community support unrelated to specific projects. The goal is becoming a trusted community resource before becoming a project developer.
          </p>

          <h3 className="text-[1.125rem] md:text-[1.5rem] font-[600] text-[#2d3748] mt-6 mb-4">
            Days 61-90: Narrative Development
          </h3>
          <p className="mb-6 text-[#4a5568]">
            Work with community allies to develop project narratives that align renewable energy with local values and aspirations. Test messaging through small group conversations. Prepare authentic messengers with compelling talking points.
          </p>

          <h2 className="text-[1.375rem] md:text-[1.875rem] font-[700] text-[#1a365d] mt-10 mb-4 pb-1 border-b-2 border-[#e2e8f0]">
            The Economic Imperative
          </h2>

          <p className="mb-6 text-[#4a5568]">
            Beyond moral arguments for better community engagement lies stark economic reality: project delays and opposition campaigns cost developers millions of dollars while threatening clean energy deployment timelines. The National Renewable Energy Laboratory analysis found that if all communities adopted the most restrictive wind ordinances, it would cut potential wind capacity by 87%—potentially derailing climate goals regardless of federal policy support.
          </p>

          <p className="mb-6 text-[#4a5568]">
            Strategic communications represents investment, not cost. The resources required for effective community engagement—ethnographic research, relationship building, ongoing communication—are minimal compared to costs of project delays, legal challenges, and reputation damage from botched community relations.
          </p>

          <h2 className="text-[1.375rem] md:text-[1.875rem] font-[700] text-[#1a365d] mt-10 mb-4 pb-1 border-b-2 border-[#e2e8f0]">
            The Path Forward
          </h2>

          <p className="mb-6 text-[#4a5568]">
            The renewable energy transition is too important to be derailed by preventable communication failures. Developers who continue relying on technical presentations and economic arguments will face increasingly sophisticated opposition in an information environment designed to amplify fear and division.
          </p>

          <p className="mb-6 text-[#4a5568]">
            The stakes have never been higher. America's electricity demand is surging from AI development, electric vehicle adoption, and climate adaptation needs. Every renewable energy project delayed or canceled makes the grid less reliable, communities less resilient, and the economy less competitive in the clean energy transition.
          </p>

          <p className="mb-6 text-[#4a5568]">
            Success requires embracing the complexity of community engagement: understanding that people make decisions based on identity and relationships, not just facts and incentives. It means investing in long-term relationship building rather than short-term project approval. It means empowering authentic community voices rather than relying on corporate messaging.
          </p>

          <blockquote className="bg-[#f7fafc] border-l-4 border-[#48bb78] p-4 md:p-6 my-6 italic text-[1.05rem] md:text-[1.1rem] text-[#2d3748] rounded-tr-md rounded-br-md">
            "The developers who master these dynamics won't just build more projects—they'll build the social foundation for America's clean energy future. In a polarized information environment, trust becomes the ultimate renewable resource."
          </blockquote>

          <p className="mb-6 text-[#4a5568]">
            The choice is clear: continue fighting yesterday's battles with yesterday's tools, or embrace the strategic communications approaches that actually change hearts and minds. The communities we serve—and the climate we're trying to protect—deserve nothing less.
          </p>

          <p className="mb-6 text-[#4a5568]">
            The renewable energy industry stands at an inflection point. Technical challenges are largely solved, costs continue declining, and policy support is growing. The remaining barrier is social: building community support for the massive infrastructure deployment required to meet climate goals while powering the AI revolution, transportation electrification, and climate adaptation needs. Strategic communications isn't a nice-to-have add-on—it's the critical path to deployment success.
          </p>

          <p className="mb-6 text-[#4a5568]">
            The future belongs to renewable energy developers who understand that building clean energy infrastructure requires building community relationships first. The science of strategic communications provides the roadmap—the question is whether the industry is ready to follow it before the lights go out.
          </p>
        </div>

        {/* Footer */}
        <footer className="bg-[#f8fafc] p-6 md:p-10 border-t border-[#e2e8f0]">
          <div className="author-bio bg-white p-4 md:p-6 rounded-md mb-6 border border-[#e2e8f0]">
            <p className="m-0 text-[#4a5568]">
              <strong>Terry Lee</strong> is the founder of Garvey Labs and author of peer-reviewed research on misinformation and democratic processes. His consulting practice helps renewable energy developers navigate complex community engagement challenges through evidence-based strategic communications.
            </p>
          </div>

          <div className="article-tags flex flex-wrap gap-3 mb-6">
            <span className="tag bg-[#edf2f7] text-[#4a5568] px-4 py-2 rounded-md text-sm font-medium border border-[#e2e8f0]">Renewable Energy</span>
            <span className="tag bg-[#edf2f7] text-[#4a5568] px-4 py-2 rounded-md text-sm font-medium border border-[#e2e8f0]">Community Engagement</span>
            <span className="tag bg-[#edf2f7] text-[#4a5568] px-4 py-2 rounded-md text-sm font-medium border border-[#e2e8f0]">Strategic Communications</span>
            <span className="tag bg-[#edf2f7] text-[#4a5568] px-4 py-2 rounded-md text-sm font-medium border border-[#e2e8f0]">NIMBY Opposition</span>
            <span className="tag bg-[#edf2f7] text-[#4a5568] px-4 py-2 rounded-md text-sm font-medium border border-[#e2e8f0]">Misinformation</span>
            <span className="tag bg-[#edf2f7] text-[#4a5568] px-4 py-2 rounded-md text-sm font-medium border border-[#e2e8f0]">Energy Infrastructure</span>
          </div>

          <div className="article-actions flex gap-4 mb-6 flex-wrap">
            <Link
              href="/renewable-energy"
              className="inline-block bg-gradient-to-br from-[#4299e1] to-[#3182ce] text-white px-7 py-3 rounded-md font-semibold text-[0.95rem] shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg"
            >
              Learn About Our Renewable Energy Services
            </Link>

            <Link
              href="/contact"
              className="inline-block bg-white text-[#4a5568] px-7 py-3 rounded-md font-semibold text-[0.95rem] border-2 border-[#e2e8f0] transition-transform transform hover:-translate-y-1 hover:border-[#4299e1] hover:text-[#3182ce]"
            >
              Discuss Your Project
            </Link>
          </div>

          <div className="share-buttons border-t border-[#e2e8f0] pt-4 md:pt-6">
            <h4 className="text-base font-semibold text-[#2d3748] mb-4">Share this article:</h4>
            <div>
              <a className="inline-block px-3 py-1.5 mr-3 mb-2 rounded-md text-sm font-medium bg-[#0077b5] text-white hover:bg-[#005885]" href="#" aria-label="Share on LinkedIn">LinkedIn</a>
              <a className="inline-block px-3 py-1.5 mr-3 mb-2 rounded-md text-sm font-medium bg-[#1da1f2] text-white hover:bg-[#0d8bd9]" href="#" aria-label="Share on Twitter">Twitter</a>
              <a className="inline-block px-3 py-1.5 mr-3 mb-2 rounded-md text-sm font-medium bg-[#4a5568] text-white hover:bg-[#2d3748]" href="#" aria-label="Share via Email">Email</a>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
}
