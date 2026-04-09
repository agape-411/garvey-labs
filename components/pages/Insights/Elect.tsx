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
          I've spent 25 years running political campaigns, securing approvals for infrastructure in hostile environments, and building coalitions that turn opposition into approval. What follows is the playbook hyperscale operators need right now.
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
          Second, local governments are deliberately slowing projects down. Moratoriums, zoning rewrites, and heightened scrutiny aren't technical delays—they're political pressure valves.
        </p>

        <p className="text-lg mb-12">
          If you can't clearly answer two questions—<strong>Who pays?</strong> and <strong>Who benefits locally?</strong>—you are volunteering to become a campaign issue.
        </p>

        {/* ================= CORE INSIGHT ================= */}
        <h2 className="text-3xl font-semibold mb-6">
          The Core Insight: You Are Not Selling a Project. You Are Asking for Consent.
        </h2>

        <p className="text-lg mb-4">
          Most developers still approach approvals as a transaction.
        </p>

        <p className="text-lg mb-4">
          That model is breaking down.
        </p>

        <p className="text-lg mb-10">
          In 2026, approvals hinge on governance: who has control, how commitments are enforced, and whether the community believes it retains agency after approval.
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
              <li>Elected officials and board members</li>
              <li>Planning and zoning staff</li>
              <li>Civic leaders and community brokers</li>
              <li>Workforce, labor, and public safety leadership</li>
              <li>Utilities and water authorities</li>
              <li>Organized opposition nodes</li>
            </ul>

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
              Benefits don’t matter if the narrative is already hostile.
            </p>

            <ul className="list-disc pl-6 text-lg space-y-2">
              <li>Residential power bill increases</li>
              <li>Water scarcity concerns</li>
              <li>Backroom approval narratives</li>
              <li>Cumulative impact fatigue</li>
              <li>Cultural mismatch</li>
            </ul>
          </div>

          {/* STEP 3 FULL */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Step 3: Revert the Narrative Before You Try to Win the Vote
            </h3>

            <p className="text-lg mb-6">
              Before benefits matter, you must reset the story.
            </p>

            <h4 className="text-xl font-semibold mb-4">
              The Three Narrative States
            </h4>

            <ul className="space-y-3 text-lg mb-8">
              <li><strong>Extractive:</strong> “Big Tech is coming.”</li>
              <li><strong>Transactional:</strong> “Here are the benefits.”</li>
              <li><strong>Governance:</strong> “This community set the terms.”</li>
            </ul>

            <h4 className="text-xl font-semibold mb-4">
              Narrative Reversion Checklist
            </h4>

            <ul className="list-disc pl-6 text-lg space-y-2">
              <li>Have fears been publicly acknowledged?</li>
              <li>Were changes made due to community input?</li>
              <li>Are commitments enforceable?</li>
              <li>Are trusted voices leading messaging?</li>
              <li>Do residents know post-approval contacts?</li>
            </ul>
          </div>

          {/* STEPS 4–12 */}
          {[
            "Step 4: Put the Community Deal on Paper Early",
            "Step 5: Build the Trusted Messenger Bench",
            "Step 6: Run Early Persuasion, Not Late Defense",
            "Step 7: Design With Political Constraints in Mind",
            "Step 8: Win the Public Safety and Infrastructure Lane",
            "Step 9: Treat the Utility Conversation as a Parallel Campaign",
            "Step 10: Pre-Wire the Vote",
            "Step 11: Run the Hearing Like a Campaign Event",
            "Step 12: Govern Like You Promised",
          ].map((step, i) => (
            <div key={i}>
              <h3 className="text-2xl font-semibold mb-3">{step}</h3>
              <p className="text-lg text-gray-700">
                Execution at this stage determines approval success or failure.
              </p>
            </div>
          ))}

        </div>

        {/* ================= CASE RESULT ================= */}
        <div className="mt-16 border-t pt-10">
          <p className="text-lg mb-6">
            I recently worked with a battery storage developer in Texas facing unanimous opposition. By implementing this governance framework, we converted 100% opposition into unanimous approval for a $200M project.
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
            Microsoft, Google, Amazon, Meta, and others are competing for capacity in communities that increasingly see data centers as cost-of-living threats.
          </p>

          <p className="text-lg mb-6">
            The winners won’t be those with the most capital—they’ll be those who understand every approval is a local election.
          </p>

          <p className="text-lg">
            If your strategy still looks like traditional site selection support, you’re already behind.
          </p>
        </div>

        {/* ================= AUTHOR ================= */}
        <div className="mt-16 border-t pt-10">
          <p className="text-sm text-gray-600">
            Terry Lee is the founder of Garvey Labs, a strategic communications consultancy specializing in infrastructure approvals and civic engagement.
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