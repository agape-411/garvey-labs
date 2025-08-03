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
      className={`text-4xl md:text-5xl font-bold text-center mb-16 transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
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
    image: "/images/S6.jpg",
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
    color: "bg-gradient-primary",
  },
  {
    title: "Crisis & Reputation Management",
    desc: [
      "Crisis communication planning and protocols",
      "Rapid response team coordination",
      "Stakeholder management strategies",
      "Post-crisis relationship rebuilding",
    ],
    color: "bg-gradient-accent",
  },
  {
    title: "Coalition & Movement Communications",
    desc: [
      "Coalition messaging and coordination",
      "Cross-sector partnership communications",
      "Grassroots mobilization strategies",
      "Digital advocacy and online organizing",
    ],
    color: "bg-gradient-primary",
  },
];

const focusAreas = [
  {
    title: "Economic Justice",
    desc: "Communications for organizations working on income inequality, worker rights, and economic opportunity.",
    image:
      "/images/S5.png",
    badge: "Justice",
  },
  {
    title: "Racial Equity",
    desc: "Strategic messaging for civil rights organizations and racial justice advocacy groups.",
    image:
      "/images/S6.jpg",
    badge: "Equity",
  },
  {
    title: "Voting Rights",
    desc: "Protecting and expanding democratic participation through strategic communications.",
    image:
      "/images/S5.png",
    badge: "Democracy",
  },
  {
    title: "Democracy Reform",
    desc: "Supporting organizations working on election security, campaign finance, and democratic institutions.",
    image:
      "/images/S6.jpg",
    badge: "Reform",
  },
];

const SocialImpactPage = () => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-neutral-950">
        <img
          src="/images/S5.png"
          alt="Social Impact Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <FadeInOnScroll>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground">
              Strategic Communications for
              <span className="block bg-gradient-accent bg-clip-text text-primary-foreground">
                Social Impact
              </span>
            </h1>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p className="text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
              Amplifying voices for social justice, equity, and democratic reform through powerful storytelling and strategic engagement
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Badge variant="secondary" className="text-lg py-2 px-4">
                Social Justice
              </Badge>
              <Badge variant="secondary" className="text-lg py-2 px-4">
                Democracy
              </Badge>
              <Badge variant="secondary" className="text-lg py-2 px-4">
                Equity
              </Badge>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-secondary/20 to-accent/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeader>Our Social Impact Approach</SectionHeader>
          <div className="grid md:grid-cols-3 gap-8">
            {approach.map((item, i) => (
              <FadeInOnScroll key={i}>
                <Card className="h-full hover:shadow-strong transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-primary">{item.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

    {/* Services Section */}
<section className="py-20 px-6 bg-gray-100">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12">Our Social Impact Services</h2>

    <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gray-700 rounded-xl overflow-hidden">
      {services.map((item, i) => (
        <div key={i} className="p-8">
          <h3 className="text-2xl font-bold mb-4 text-primary">{item.title}</h3>
          <ul className="space-y-3 pl-4 ">
            {item.desc.map((point, j) => (
              <li key={j} className="text-lg text-gray-600 list-disc">
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</section>






      {/* Focus Areas Section */}
      <section className="py-20 px-6 bg-gradient-to-bl from-accent/10 to-secondary/20">
        <div className="max-w-7xl mx-auto">
          <SectionHeader>Focus Areas</SectionHeader>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {focusAreas.map((item, i) => (
              <FadeInOnScroll key={i}>
                <Card className="h-full overflow-hidden hover:shadow-medium transition-all duration-300 border border-border/50">
                  <div className="relative h-[240px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <Badge variant="secondary" className="bg-card/90 text-foreground shadow-sm">
                        {item.badge}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600text-lg leading-relaxed">
                      {item.desc}
                    </p>
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
