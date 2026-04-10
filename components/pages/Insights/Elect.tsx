import Link from "next/link";

export default function ArticlePage() {
  return (
    <main className="bg-white text-[#1B3A5C] font-inter">

      {/* ================= HERO ================= */}
      <section className="bg-[#0f2438] text-white py-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm tracking-widest uppercase text-gray-300 mb-4">
            Data Center Economy
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            How I Would Elect a Data Center in 2026: A Community Readiness Framework
          </h1>

          <div className="mt-6 text-lg text-gray-300">
            Terry Lee · January 17, 2026
          </div>
        </div>
      </section>

      {/* ================= BODY ================= */}
      <section className="max-w-3xl mx-auto px-6 py-20">

        <p className="text-xl text-gray-700 mb-8">
          A 12-step campaign playbook for winning approvals when communities are hostile.
        </p>

        <p className="text-lg mb-6">
          In the past 18 months, I've watched billion-dollar data center projects collapse—not because of engineering failures, but because developers treated civic engagement as an afterthought to site selection.
        </p>

        <p className="text-lg mb-6">
          They're learning the hard way: in 2026, data center development is no longer just infrastructure. It's electoral politics.
        </p>

        <p className="text-lg mb-10">
          Data centers trigger voter-level emotions: cost of living, water scarcity, local control, and distrust of distant power. They activate organized opposition. They force elected officials to weigh economic development against reelection risk.
        </p>

        <p className="text-lg mb-12">
          I've spent 25 years running political campaigns, securing approvals for renewable energy infrastructure in hostile territory, and building coalitions that turn "not in my backyard" into "yes, on these terms." What follows is the playbook hyperscale operators need right now—whether they know it or not.
        </p>

        {/* ================= REALITY ================= */}
        <h2 className="text-3xl font-semibold mb-6">
          The 2026 Reality: Data Centers Are Cost-of-Living Politics
        </h2>

        <p className="text-lg mb-4">
          Two structural shifts have changed the approval landscape:
        </p>

        <p className="text-lg mb-4">
          First, energy affordability has become the front-door issue. Power bills are now a kitchen-table concern, and data centers are increasingly framed as competitors with residents for electricity and grid capacity.
        </p>

        <p className="text-lg mb-6">
          Second, local governments are deliberately slowing projects down. Moratoriums, zoning rewrites, and heightened scrutiny aren't technical delays; they're political pressure valves for elected officials facing angry constituents.
        </p>

        <p className="text-lg mb-12">
          If you can't clearly answer two questions—<strong>Who pays?</strong> and <strong>Who benefits locally?</strong>—you are volunteering to become a campaign issue.
        </p>

        {/* ================= CORE INSIGHT ================= */}
        <h2 className="text-3xl font-semibold mb-6">
          The Core Insight: You Are Not Selling a Project. You Are Asking for Consent.
        </h2>

        <p className="text-lg mb-4">
          Most developers still approach approvals as a transaction: permits in exchange for jobs, taxes, and mitigation.
        </p>

        <p className="text-lg mb-4">
          That model is breaking down.
        </p>

        <p className="text-lg mb-10">
          In 2026, approvals hinge on governance: who has control, how commitments are enforced, and whether the community believes it retains agency after approval.
        </p>
        <p className="text-lg mb-10">
          That requires running a campaign.
        </p>

        {/* ================= STEPS ================= */}
        <h2 className="text-3xl font-semibold mb-10">
          The 12-Step Approval Framework
        </h2>

        <div className="space-y-12">

          {/* STEP 1 */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Step 1: Start With the Power Map, Not the Site Plan
            </h3>
            <p className="text-lg mb-4">
              Every successful campaign begins by understanding who decides—and who influences the deciders.
            </p>

            <ul className="list-disc pl-6 text-lg space-y-2">
              <li>Elected officials and appointed board members</li>
              <li>Planning and zoning staff</li>
              <li>Civic association leaders and informal community brokers</li>
              <li>School, workforce, labor, and public safety leadership</li>
              <li>Utilities and water authorities</li>
              <li>Organized opposition nodes (Facebook groups, repeat speakers, litigation-prone actors)</li>
            </ul>



            <p className="text-lg mt-4">
              <p className="text-lg mt-4">
              Score each as Support / Lean / Undecided / Oppose and document what they truly care about—not what they say publicly.
            </p>
            </p>
            <p className="text-lg mt-4">
              Deliverable: a one-page power map identifying persuasion vs containment.
            </p>
          </div>

          {/* STEP 2 */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Step 2: Identify the Loss Conditions
            </h3>

            <p className="text-lg mb-4">
              I've watched projects with better tax packages lose to projects with better narratives. Benefits don't matter if the story is already hostile.
            </p>
            <p className="text-lg mb-4">
              Residential power bill increases
            </p>


            <ul className="list-disc pl-6 text-lg space-y-2">
              <li></li>
              <li>Water scarcity and drought optics</li>
              <li>Backroom or "by-right" approval narratives</li>
              <li>Cumulative impact fatigue ("another one?")</li>
              <li>Cultural mismatch ("this isn't who we are")</li>
            </ul>

            <p className="text-lg mb-4">
              Your campaign strategy should be built around preventing loss, not maximizing upside.
            </p>
          </div>

          {/* STEP 3 FULL */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Step 3: Revert the Narrative Before You Try to Win the Vote
            </h3>

            <p className="text-lg mb-6">
              Before you negotiate benefits, you must reset the story.
By the time most data center projects go public, the dominant narrative is already hostile:
"This is something being done to us, for someone else's benefit, at our expense."

            </p>
            <p className="text-lg mb-6">
              Once that story hardens, no amount of job numbers or mitigation slides will save you. The project is no longer being evaluated as infrastructure—it's being judged as a failure of local control.
The first real task of a successful 2026 approval campaign is narrative reversion: returning the conversation from abstraction and grievance back to local agency, governance, and choice.


            </p>

            <h4 className="text-xl font-semibold mb-4">
              The Three Narrative States
            </h4>

            <p className="text-lg mt-4 text-gray-700 mb-4">
             1. The Extractive Narrative (You're Losing)

           </p>

            <ul className="list-disc pl-6 text-lg space-y-2 mb-5">
              <li>	"Big Tech is coming.</li>
              <li>	"They'll drain our power and water."</li>
              <li>	"Decisions are already made."</li>
            </ul>

            <p className="text-lg mt-4 text-gray-700 mb-4">
             2. The Transactional Narrative (Still not enough)
            </p>
           <ul className="list-disc pl-6 text-lg space-y-2 mb-5">
              <li>	"Here are the jobs."</li>
              <li>	"Here's the tax base."</li>
              <li>	"Here's the mitigation plan."</li>
            </ul>

            <p className="text-lg mt-4 text-gray-700 mb-4">
             3. The Governance Narrative (Where you win)
            </p>
            <ul className="list-disc pl-6 text-lg space-y-2 mb-5">
              <li>	"This community sets the terms."</li>
              <li>	"Here's what we required."</li>
              <li>	"Here's how it will be enforced."</li>
              <li>	"Here's how residents stay informed after approval."</li>
            </ul>
            <p className="text-lg mt-4 text-gray-700 mb-4">
            Winning campaigns don't deny fear. They replay the story
            </p>





            <h4 className="text-xl font-semibold mb-4">
              Narrative Reversion Checklist
            </h4>

            <p className="text-lg mt-4 text-gray-700">
             Use This Before Any Public Meeting
If you can't check most of these boxes, you're not ready to go public.

           </p>

            <ul className="list-disc pl-6 text-lg space-y-2">
              <li>Have we publicly named the core fears (power, water, control) without minimizing them?</li>
              <li>Can we point to at least three project changes made because the community asked?</li>
              <li>Are we describing commitments as community requirements—not developer generosity?</li>
              <li>Is there a clear enforcement mechanism, not just a promise?</li>
              <li>Are trusted local validators—not the developer—carrying the message?</li>
              <li>Do residents know who they can call after approval?</li>
              <li>Have elected officials been given language to defend a yes vote?</li>
            </ul>

            <p className="text-lg mt-4 text-gray-700">
    If the answer is no, stop selling and start governing.
  </p>
          </div>

         {/* STEP 4 */}
<div>
  <h3 className="text-2xl font-semibold mb-4">
    Step 4: Put the Community Deal on Paper Early
  </h3>

  <p className="text-lg mb-4 text-gray-700">
    In 2026, trust requires specificity. Winning projects publish a clear Community Deal early in the process covering.
  </p>

  <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
    <li>Power and grid cost responsibility</li>
    <li>Water sourcing, efficiency, and replenishment</li>
    <li>Local jobs and workforce pipelines</li>
    <li>Tax impacts—realistic and transparent</li>
    <li>Neighbor protections (noise, light, traffic, construction)</li>
    <li>Ongoing community oversight and reporting</li>
  </ul>

  <p className="text-lg mt-4 text-gray-700">
    This document becomes the backbone of the governance narrative.
  </p>
</div>

{/* STEP 5 */}
<div>
  <h3 className="text-2xl font-semibold mb-4">
    Step 5: Build the Trusted Messenger Bench
  </h3>

  <p className="text-lg mb-4 text-gray-700">
    The most persuasive voice is never the developer. Identify and brief credible local validators across:
  </p>

  <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
    <li>Workforce and education</li>
    <li>Small business and economic development</li>
    <li>Labor and skilled trades</li>
    <li>Environmental credibility</li>
    <li>Public safety and emergency response</li>
  </ul>

  <p className="text-lg mt-4 text-gray-700">
    If they can't honestly say the project improved because of community input, you're not done.
  </p>
</div>

{/* STEP 6 */}
<div>
  <h3 className="text-2xl font-semibold mb-4">
    Step 6: Run Early Persuasion, Not Late Defense
  </h3>

  <p className="text-lg text-gray-700">
    Aesthetics, water systems, construction logistics, and buffering are votes.
Design choices should answer this question: What will make it easier for an elected official to say yes publicly?

  </p>
</div>

{/* STEP 7 */}
<div>
  <h3 className="text-2xl font-semibold mb-4">
    Step 7: Design With Political Constraints in Mind
  </h3>

  <p className="text-lg text-gray-700">
   Aesthetics, water systems, construction logistics, and buffering are votes.
Design choices should answer this question: What will make it easier for an elected official to say yes publicly?

  </p>
</div>

{/* STEP 8 */}
<div>
  <h3 className="text-2xl font-semibold mb-4">
    Step 8: Win the Public Safety and Infrastructure Lane
  </h3>

  <p className="text-lg text-gray-700">
    Coordinate visibly with fire, EMS, utilities, and transportation agencies. Then let them explain the safeguards. Silence creates fear; visible preparation builds confidence.
  </p>
</div>

{/* STEP 9 */}
<div>
  <h3 className="text-2xl font-semibold mb-4">
    Step 9: Treat the Utility Conversation as a Parallel Campaign
  </h3>

  <p className="text-lg mb-4 text-gray-700">
    In 2026, utilities are political actors. You must be ready with simple, defensible answers:
  </p>
  <p className="text-lg mb-4 text-gray-700">
    Be ready with simple answers:
  </p>

  <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
    <li>Will residential bills go up?</li>
    <li>Who pays for upgrades?</li>
    <li>What happens during peak demand?</li>
  </ul>

  <p className="text-lg mt-4 text-gray-700">
    If you cannot answer these in one sentence, the opposition will answer them for you.
  </p>
</div>

{/* STEP 10 */}
<div>
  <h3 className="text-2xl font-semibold mb-4">
    Step 10: Pre-Wire the Vote
  </h3>

  <p className="text-lg text-gray-700">
    Before the hearing is posted, you should know your vote count. Provide elected officials with a clear decision memo outlining what was heard, what changed, what is enforceable, and how the community stays involved.
  </p>
</div>

{/* STEP 11 */}
<div>
  <h3 className="text-2xl font-semibold mb-4">
    Step 11: Run the Hearing Like a Campaign Event
  </h3>

  <p className="text-lg mb-4 text-gray-700">
    Sequence speakers intentionally:
  </p>

  <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
    <li>Local validators</li>
    <li>Neighbor protections</li>
    <li>Power and water commitments</li>
    <li>Developer confirmation</li>
  </ul>

  <p className="text-lg mt-4 text-gray-700">
    Make the coalition visible. 
  </p>
</div>

{/* STEP 12 */}
<div>
  <h3 className="text-2xl font-semibold mb-4">
    Step 12: Govern Like You Promised
  </h3>

  <p className="text-lg mb-4 text-gray-700">
    Approval is not the finish line. Stand up the advisory council. Publish reports. Answer the phone. Keep receipts.
  </p>

  <p className="text-lg text-gray-700">
    Projects fail future phases not because they broke the law—but because they broke trust.
  </p>
</div>

        </div>

        {/* ================= CASE RESULT ================= */}
        <div className="mt-16 border-t pt-10">
          <p className="text-lg mb-6">
            I recently worked with a battery storage developer in Texas facing unanimous opposition. By implementing this governance framework—authentic community input, visible design changes, enforceable commitments—we converted 100% opposition into unanimous approval for a $200M project.
          </p>

          <p className="text-lg">
            The difference wasn’t better technology. It was better politics.
          </p>
        </div>

        {/* ================= HYPERSCALE ================= */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">
            The Hyperscale Implication
          </h2>

          <p className="text-lg mb-6">
            Microsoft, Google, Amazon, Meta, CoreWeave, and others are competing for gigawatts of new capacity in communities that increasingly see data centers as cost-of-living threats, not economic opportunities.
          </p>

          <p className="text-lg mb-6">
            The winning operators won't be the ones with the most capital or the fastest construction timelines. They'll be the ones who understand that every data center approval in 2026 is a local election—and who staff accordingly.
          </p>

          <p className="text-lg">
            If your civic engagement strategy still looks like traditional site selection support, you're already behind.
          </p>
        </div>

        {/* ================= AUTHOR ================= */}
        <div className="mt-16 border-t pt-10">
          <p className="text-sm text-gray-600">
            Terry Lee is the founder of Garvey Labs, a strategic communications consultancy specializing in infrastructure approvals and civic engagement. He previously served as Deputy National Director for Communications at SEIU and has secured approvals for renewable energy and industrial-scale infrastructure projects across multiple states.
          </p>
        </div>

        {/* ================= BACK ================= */}
        <div className="mt-12">
          <Link href="/insights" className="text-[#0D6E6E] hover:underline">
            ← Back to Insights
          </Link>
        </div>

      </section>
    </main>
  );
}