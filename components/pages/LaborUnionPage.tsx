"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import heroImage from "@/public/images/L1.jpg";
import empowermentImage from "@/public/images/L2.png";
import mediaImage from "@/public/images/L3.png";
import meetingImage from "@/public/images/LB2.jpg";
import LB3 from "@/public/images/LB3.jpg";
import LB7 from "@/public/images/LB7.png";
import LB5 from "@/public/images/LB5.jpg";
import LB9 from "@/public/images/LB9.png";
import { FiUserCheck, FiUsers } from "react-icons/fi";
import { BsFillBuildingFill } from "react-icons/bs";
import { useEffect } from "react";
import { Button } from "../ui/button";

export default function LaborUnionPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in").forEach((el) => {
      el.classList.add("opacity-0", "translate-y-10", "transition-all", "duration-700");
      observer.observe(el);
    });
  }, []);

  const approach = [
    {
      title: "Member Story Amplification",
      description:
        "Strategic storytelling that puts worker experiences and voices at the center of labor communications and organizing campaigns.",
      image: mediaImage,
    },
    {
      title: "Media Relations",
      description:
        "Surgical media outreach and relationship building to secure coverage that advances worker-centric narratives and union priorities.",
      image: empowermentImage,
    },
    {
      title: "Crisis Communications",
      description:
        "Rapid response strategies to protect union reputation and maintain member trust during challenging periods.",
      image: meetingImage,
    },
  ];

  const services = [
    {
      title: "Narrative Building & Worker Storytelling",
      description:
        "We craft compelling narratives that center worker experiences: member story collection and amplification, message framework development, and campaign storytelling that drives action.",
      image: LB5,
    },
    {
      title: "Surgical Media Relations",
      description:
        "Strategic media outreach and real-time coordination to advance union narratives and secure impactful coverage with key audiences.",
      image: LB7,
    },
    {
      title: "Organizing & Mobilization Support",
      description:
        "Communications that activate members and build coalitions: organizing campaigns, grassroots messaging, and engagement strategies.",
      image: LB3,
    },
    {
      title: "Executive Communications & Thought Leadership",
      description:
        "Thought leadership, op-eds, and speechwriting for union leaders to clarify vision, inspire trust, and amplify progressive values.",
      image: LB9,
    },
  ];

  const audience = [
    {
      icon: BsFillBuildingFill,
      title: "National Labor Unions",
      description:
        "Strategic communications for large-scale union campaigns and national initiatives.",
    },
    {
      icon: FiUsers,
      title: "Local Union Chapters",
      description:
        "Specialized support for national labor unions’ local organizing efforts.",
    },
    {
      icon: FiUserCheck,
      title: "Union Leadership",
      description:
        "Executive communications and thought leadership positioning for union leaders.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage.src})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30" />
        <div className="relative z-10 text-center px-6 max-w-5xl text-white fade-in">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6">
            Strategic Communications for{" "}
            <span className="block text-yellow-600 bg-clip-text">
              Labor Unions
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-white">
            Centering worker-centric agendas through strategic storytelling and surgical media relations.
          </p>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 px-6 bg-orange-400 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 fade-in text-white">
            Our Labor Communications Approach
          </h2>
          <div className="space-y-20">
            {approach.map((item, i) => (
              <div
                key={i}
                className={`flex flex-col ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-10 fade-in`}
              >
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-lg sm:text-xl font-medium">{item.description}</p>
                </div>
                <div className="flex-1 transform transition-transform duration-300 hover:scale-105">
                  <img
                    src={item.image.src}
                    alt={item.title}
                    className="rounded-xl w-full h-80 object-cover shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-orange-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 fade-in text-orange-600">
            Our Labor Communications Services
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className="fade-in">
                <Card className="h-full bg-white border border-gray-200 hover:shadow-xl transition">
                  <img src={service.image.src} alt={service.title} className="w-full h-70 object-cover rounded-t-lg" />
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl font-bold">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-md sm:text-lg text-gray-700 font-medium">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience Section */}
      <section className="py-20 px-6 bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 fade-in text-orange-600">
            Who We Serve
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {audience.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 p-6 rounded-lg text-center hover:shadow-xl transition transform hover:scale-105 fade-in"
              >
                <div className="w-16 h-16 mx-auto bg-orange-500 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-lg sm:text-lg text-gray-600 font-medium">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
