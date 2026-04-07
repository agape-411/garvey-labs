"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "../../ui/card";
import { Badge } from "../../ui/badge";
import SEO from "@/components/SEO";

const AboutPage = () => {
  return (
    <>
      <SEO
        title="About Us | Garvey Labs"
        description="Discover Garvey Labs' mission to create impact-driven innovations in technology, renewable energy, and society."
        url="https://www.garveylabs.com/about"
      />

      <div className="bg-background text-gray-800 leading-relaxed">

        {/* HERO SECTION */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <Image
            fill
            src="/images/A5.png"
            alt="About Hero"
            className="absolute inset-0 w-full h-full object-cover z-0"
            priority
          />
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="relative z-20 text-center px-4 sm:px-6 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Built at the Intersection of Infrastructure, Labor, and Community Power
            </h1>
            <p className="text-xl md:text-lg sm:text-lg text-white mb-8">
              Garvey Labs was founded on a specific observation: the communities most overlooked by the data center economy are the communities best positioned to benefit from it — if they have the right framework.
            </p>
          </div>
        </section>

        {/* THE FIRM */}
        <section className="py-20 px-6 bg-gray-100">
          <div className="max-w-7xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">About Garvey Labs</h2>
            <p className="text-md sm:text-lg md:text-lg font-medium">
              Garvey Labs is a Washington, DC-based strategic infrastructure stakeholder and civic engagement advisory firm. We work at the intersection of data center and renewable energy development, community economic strategy, and infrastructure civic engagement — helping communities compete for and shape participation in these economies on terms that build long-term local value.
            </p>
            <p className="text-md sm:text-lg md:text-lg font-medium">
              The firm works exclusively on the community side. We never represent developer interests, accept developer compensation, or negotiate terms that have not been authorized by our client communities. Our advisory role is to help economic development organizations, CDCs, chambers, and civic leaders enter high-stakes infrastructure negotiations prepared — with proprietary market intelligence, a documented benefit framework, and a clear strategic posture — rather than reactive.
            </p>
            <p className="text-md sm:text-lg md:text-lg font-medium">
              The firm's core intellectual asset is the <strong>Grid-Positive Community Integration Framework</strong> — a proprietary pre-negotiation leverage methodology developed for majority-Black communities competing for participation in the data center economy. It is the only methodology of its kind.
            </p>
            <p className="text-md sm:text-lg md:text-lg font-medium">
              All Garvey Labs work is built on rigorous analytical backing: verifiable data, unbiased conclusions, and documented sources. Every quantified claim cites a documented, citable source. Findings reflect what the data supports — not what any party, including the client, wants to hear. Where data is directional rather than definitive, that limitation is stated explicitly.
            </p>
            <p className="text-md sm:text-lg md:text-lg font-medium">
              Garvey Labs operates as a productized advisory firm — a specific and distinct model from traditional bespoke consulting. Every engagement has a defined scope, a transparent price determined by a population-based formula, and a documented delivery timeline. The <strong>Grid-Positive Community Intelligence Brief</strong> is a product: fixed scope, fixed price, delivered in 7 business days. The service ladder is a defined journey with conversion mechanics built into every tier. The Community Wealth Playbook is a standalone product — the codified methodology sold independently of consulting time.
            </p>
          </div>
        </section>

        {/* FOUNDER BIO */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* Terry Lee Image */}
            <div className="relative w-full h-100 sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/images/Ab3.jpg"
                alt="Terry Lee"
                fill
                className="object-fit"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Terry Lee Bio */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-primary">Terry Lee</h2>
              <p className="text-md sm:text-lg md:text-lg font-medium">
                Terry Lee has spent 25 years working where infrastructure meets community — in government, organized labor, corporate advisory, and infrastructure development. The core skill these environments share is one that most advisory firms cannot credibly claim: knowing how to structure the entry of powerful private capital into communities that have historically had reason to be skeptical of it, and doing so in a way that creates durable benefit rather than extraction.
              </p>
              <p className="text-md sm:text-lg md:text-lg font-medium">
                Terry served as Associate Director for Communications and Press Secretary in the DC Mayor's Office, navigating major infrastructure and development decisions for a majority-Black city. He served as Deputy National Director for Communications at SEIU — the nation's largest union with 2 million members — leading communications across three election cycles and voting rights campaigns in eight swing states. His senior role at SEIU established the peer relationships inside the AFL-CIO building trades ecosystem that make the Community Workforce Investment Standard more than a contractual aspiration.
              </p>
              <p className="text-md sm:text-lg md:text-lg font-medium">
                In the infrastructure sector, Terry's most significant credential is the Red Egret BESS project — a 300-megawatt battery energy storage facility in Texas City that moved from unanimous community opposition to unanimous 6-0 regulatory approval. The stakeholder methodology developed on that project became the foundation of the Garvey Labs framework.
              </p>
              <p className="text-md sm:text-lg md:text-lg font-medium">
                Terry holds a B.A. from Vassar College in Political Science and Economics, a Harvard Business School Online certificate in Organizational Leadership, and has a peer-reviewed publication on democratic elections in Public Administration and Policy: An Asia-Pacific Journal (2019). He is the author of <em>PR To The People!</em> and publishes the Substack 'Garvey Labs | Power&Democracy.'
              </p>
            </div>
          </div>
        </section>

        {/* CREDENTIALS SUMMARY */}
        <section className="py-20 px-6 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Credentials & Expertise</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { category: "GOVERNMENT", name: "DC Mayor's Office", body: "Associate Director for Communications and Press Secretary. Infrastructure and development communication for a majority-Black city of 700,000." },
                { category: "ORGANIZED LABOR", name: "SEIU — Deputy National Director for Communications", body: "2 million members. Three election cycles. Eight swing states. Peer relationships inside the AFL-CIO building trades ecosystem." },
                { category: "INFRASTRUCTURE", name: "Red Egret BESS — Texas City", body: "300MW battery energy storage. Unanimous opposition to unanimous 6-0 approval. Proof of concept for Garvey Labs framework." },
                { category: "CORPORATE ADVISORY", name: "Walker Marchant Group, Five Corners Strategies, GMMB", body: "Strategic communications across infrastructure, technology, litigation, and civic sectors." },
                { category: "ACADEMIC", name: "Vassar College B.A. | Harvard Business School Online", body: "Peer-reviewed publication in Public Administration and Policy: An Asia-Pacific Journal (2019). Author of PR To The People!" },
                { category: "GARVEY LABS", name: "Founded 2023 | Washington, DC", body: "Strategic infrastructure stakeholder and civic engagement advisory. Community-side only. Grid-Positive Community Integration Framework." },
              ].map((item, idx) => (
                <Card key={idx} className="h-full border-0 shadow-md bg-white">
                  <div className="h-2 bg-primary" />
                  <CardContent className="p-6 md:p-8">
                    <Badge variant="secondary" className="mb-2">{item.category}</Badge>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{item.name}</h3>
                    <p className="text-md sm:text-lg md:text-lg text-gray-700 font-medium">{item.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">Let's Discuss Your Community's Opportunity</h2>
            <p className="text-md sm:text-lg md:text-lg font-medium">
              The <strong>Grid-Positive Community Intelligence Brief</strong> is the starting point — a jurisdiction-specific intelligence product delivered in 7 business days. Contact us to discuss what it would show for your community.
            </p>
            <Link
              href="/connect"
              className="inline-block px-8 py-4 bg-primary text-white text-lg font-semibold rounded-lg shadow-md hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>

      </div>
    </>
  );
};

export default AboutPage;