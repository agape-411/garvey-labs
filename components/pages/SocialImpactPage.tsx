"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

const useInView = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
};

const FadeInOnScroll = ({ children }: { children: React.ReactNode }) => {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  );
};

const SectionHeader = ({ children }: { children: React.ReactNode }) => {
  const { ref, inView } = useInView();
  return (
    <h2
      ref={ref}
      className={`text-3xl md:text-5xl font-bold text-center mb-16 transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } text-red-700`}
    >
      {children}
    </h2>
  );
};

const approach = [
  {
    title: "Social Justice & Equity",
    desc: "Narrative building and crisis communications for organizations advancing economic justice, racial equity, and systemic social change.",
    image: "/images/S5.png",
  },
  {
    title: "Voting Rights & Democracy",
    desc: "Message development and mobilization strategies for voting rights advocates and democracy reform organizations.",
    image: "/images/SI7.png",
  },
  {
    title: "Movement Building",
    desc: "Strategic communications that build coalitions, mobilize supporters, and drive collective action for social change.",
    image: "/images/R10.png",
  },
];

const services = [
  {
    title: "Narrative Building & Social Change Storytelling",
    desc: [
      "Social justice message framework development",
      "Community story collection and amplification",
      "Intersectional storytelling approaches",
      "Campaign messaging for policy change",
    ],
    image: "/images/Si1.png",
  },
  {
    title: "Crisis & Reputation Management",
    desc: [
      "Crisis communication planning and protocols",
      "Rapid response team coordination",
      "Stakeholder management strategies",
      "Post-crisis relationship rebuilding",
    ],
    image: "/images/SI9.png",
  },
  {
    title: "Coalition & Movement Communications",
    desc: [
      "Coalition messaging and coordination",
      "Cross-sector partnership communications",
      "Grassroots mobilization strategies",
      "Digital advocacy and online organizing",
    ],
    image: "/images/SI8.png",
  },
];

const focusAreas = [
  {
    title: "Economic Justice",
    desc: "Communications for organizations working on income inequality, worker rights, and economic opportunity.",
    image: "/images/S5.png",
    badge: "Justice",
  },
  {
    title: "Racial Equity",
    desc: "Strategic messaging for civil rights organizations and racial justice advocacy groups.",
    image: "/images/SI2.png",
    badge: "Equity",
  },
  {
    title: "Voting Rights",
    desc: "Protecting and expanding democratic participation through strategic communications.",
    image: "/images/SI3.png",
    badge: "Democracy",
  },
  {
    title: "Democracy Reform",
    desc: "Supporting organizations working on election security, campaign finance, and democratic institutions.",
    image: "/images/SI5.png",
    badge: "Reform",
  },
];

const SocialImpactPage = () => {
  return (
    <div className="bg-white text-red-900">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-black/50">
        <img
          src="/images/SI5.png"
          alt="Social Impact Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <FadeInOnScroll>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Strategic Communications for
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-700">
                Social Impact
              </span>
            </h1>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
              Amplifying voices for social justice, equity, and democratic reform through powerful storytelling and strategic engagement.
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Badge className="bg-red-100 text-red-800 text-lg py-2 px-4">Social Justice</Badge>
              <Badge className="bg-red-100 text-red-800 text-lg py-2 px-4">Democracy</Badge>
              <Badge className="bg-red-100 text-red-800 text-lg py-2 px-4">Equity</Badge>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 px-6 bg-red-300">
        <div className="max-w-7xl mx-auto">
          <SectionHeader>Our Social Impact Approach</SectionHeader>
          <div className="grid md:grid-cols-3 gap-8">
            {approach.map((item, i) => (
              <FadeInOnScroll key={i}>
                <Card className="h-full border-0 shadow-md hover:shadow-xl transition duration-300 bg-white">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-red-700">{item.title}</h3>
                    <p className="text-gray-700 text-base leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader>Our Social Impact Services</SectionHeader>
          <div className="grid md:grid-cols-3 gap-10">
            {services.map((item, i) => (
              <FadeInOnScroll key={i}>
                <Card className="h-full border-0 shadow-md hover:shadow-xl transition duration-300">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-red-700 mb-4">{item.title}</h3>
                    <ul className="space-y-2 pl-4 list-disc text-base text-gray-700">
                      {item.desc.map((point, j) => (
                        <li key={j}>{point}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="py-20 px-6 bg-red-300">
        <div className="max-w-7xl mx-auto">
          <SectionHeader>Focus Areas</SectionHeader>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {focusAreas.map((item, i) => (
              <FadeInOnScroll key={i}>
                <Card className="h-full overflow-hidden border shadow-sm hover:shadow-md transition duration-300">
                  <div className="relative h-[240px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-white/90 text-red-800 shadow-md">{item.badge}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-700 text-base leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialImpactPage;
