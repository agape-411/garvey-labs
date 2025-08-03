"use client";

import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

const AboutPage = () => {
  return (
    <div className="bg-background text-gray-800">
      {/* Header */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/90"></div>
        <Image
          fill
          src="/images/A5.png"
          alt="About Hero"
          className="absolute inset-0 w-full object-cover opacity-100 bg-black/50"
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            About <span className="bg-gradient-accent bg-clip-text text-white">Garvey Labs</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Leading strategic communications and community engagement for positive change.
          </p>
        </div>
      </section>

      {/* About Terry Section */}
      <section className="py-20 px-6 bg-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text */}
            <div>
              <h2 className="text-4xl font-bold mb-8 text-primary">About Terry Lee</h2>
              <div className="space-y-6 text-lg leading-relaxed font-medium">
                <p>
                  With over 25 years of experience spanning strategic communications and community engagement, Terry leads Garvey Labs with expertise across four critical areas: building community support for sustainable renewable energy projects, positioning green data centers and sustainable digital infrastructure, amplifying labor union voices, and advancing social impact organizations.
                </p>
                <p>
                  Terry's renewable energy community engagement focuses on sustainable development, helping organizations navigate complex stakeholder relationships and build lasting community partnerships. His expertise in green data centers bridges the gap between digital infrastructure needs and environmental responsibility, creating authentic sustainability narratives. His labor communications work centers worker-centric agendas through strategic storytelling and surgical media relations. His social impact expertise includes narrative building and crisis management for social justice advocates and voting rights groups.
                </p>
                <p>
                 This comprehensive expertise enables Garvey Labs to serve diverse clients—from renewable energy developers to big tech companies with sustainability commitments to national labor unions—with specialized knowledge tailored to each sector's distinct challenges and opportunities.
                </p>
              </div>
            </div>

            {/* Main Image */}
            <div className="relative w-full rounded-2xl overflow-hidden h-full">
              <Image
                src="/images/Ab3.jpg"
                alt="Terry Lee"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Additional Images Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-4">
            {[
              { src: "/images/Ab1.jpg", label: "Strategy", title: "Strategic Planning" },
              { src: "/images/Ab2.jpg", label: "Engagement", title: "Community Building" },
              { src: "/images/Ab3.jpg", label: "Communication", title: "Strategic Messaging" },
            ].map((item, idx) => (
              <div key={idx} className="relative h-[300px] rounded-xl shadow-md overflow-hidden group">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <div>
                    <Badge variant="secondary" className="mb-1">
                      {item.label}
                    </Badge>
                    <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="pb-20 pt-10 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Strategic Thinking",
                desc: "We approach every project with strategic analysis, understanding the broader context and long-term goals.",
              },
              {
                title: "Authentic Engagement",
                desc: "Our communications and engagement strategies prioritize authenticity and genuine connection with communities.",
              },
              {
                title: "Measurable Impact",
                desc: "We focus on delivering concrete results that advance our clients' missions and create lasting change.",
              },
            ].map((item, index) => (
              <Card key={index} className="h-full border-0 shadow-sm bg-white">
                <div className="h-2 bg-primary" />
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-lg text-gray-700 font-medium">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    
      {/* Why Choose Garvey Labs */}
<section className="py-20 px-6 bg-white">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
      Why Choose Garvey Labs
    </h2>
    <div className="grid md:grid-cols-2 gap-10">
      {[
        {
          title: "Deep Sector Expertise",
          content:
            "Unlike generalist firms, we bring specialized knowledge in labor organizing, social justice advocacy, and renewable energy development. This sector-specific expertise allows us to understand the unique challenges and opportunities in each field.",
        },
        {
          title: "Proven Track Record",
          content:
            "Our work has helped organizations navigate complex challenges, build stronger communities, and achieve their goals. We bring 25+ years of experience in high-stakes communications and engagement.",
        },
        {
          title: "Innovative Methodologies",
          content:
            "We combine time-tested approaches with cutting-edge tools and techniques, ensuring our clients have access to the most effective strategies for their unique situations.",
        },
        {
          title: "Community-Centered Focus",
          content:
            "Our communications and engagement strategies are grounded in authentic connection with stakeholders, communities, and workers alike—ensuring mutual trust and long-term partnership.",
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className={`py-6 px-4 ${
            idx < 2 ? "border-t border-b border-gray-800" : "border-b border-gray-800"
          }`}
        >
          <h3 className="text-xl font-bold mb-4 text-primary">{item.title}</h3>
          <p className="text-lg leading-relaxed text-gray-700 font-medium">{item.content}</p>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
};

export default AboutPage;
