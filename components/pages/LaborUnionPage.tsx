"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

import heroImage from "@/public/images/L1.jpg";
import empowermentImage from "@/public/images/L1.jpg";
import mediaImage from "@/public/images/L3.png";
import meetingImage from "@/public/images/L4.png";
import {
  FiUserCheck,
  FiUsers,
} from "react-icons/fi";
import { BsFillBuildingFill,  } from "react-icons/bs";
import { useEffect } from "react";

export default function LaborUnionPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("opacity-100", "translate-y-0");
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
      image: empowermentImage,
    },
    {
      title: "Media Relations",
      description:
        "Surgical media outreach and relationship building to secure coverage that advances worker-centric narratives and union priorities.",
      image: mediaImage,
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
    },
    {
      
      title: "Surgical Media Relations",
      description:
        "Strategic media outreach and real-time coordination to advance union narratives and secure impactful coverage with key audiences.",
    },
    {
      
      title: "Organizing & Mobilization Support",
      description:
        "Communications that activate members and build coalitions: organizing campaigns, grassroots messaging, and engagement strategies.",
    },
    {
      
      title: "Executive Communications & Thought Leadership",
      description:
        "Thought leadership, op-eds, and speechwriting for union leaders to clarify vision, inspire trust, and amplify progressive values.",
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
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage.src})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 opacity-90 pt-[-9]"  />
        <div className="relative z-10 text-center px-6 max-w-5xl text-white h-[80vh] flex flex-col justify-center items-center fade-in">
          <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-6">
            Strategic Communications for{" "}
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Labor Unions
            </span>
          </h1>
          <p className="text-2xl leading-relaxed">
            Centering worker-centric agendas through strategic storytelling and surgical media relations.
          </p>
         
        </div>
      </section>

      {/* Approach */}
      <section className="pt-10 pb-20 px-6 bg-[#FDF9F3]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 fade-in">
            Our Labor Communications Approach
          </h2>
          <div className="space-y-16">
            {approach.map((item, i) => (
              <div
                key={i}
                className={`flex flex-col ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-10 fade-in`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                  </div>
                  <p className="text-xl text-gray-700 font-medium">{item.description}</p>
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

      {/* Services */}
      <section className="pb-24 pt-10 bg-[#e0e0bc] px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 fade-in">
            Our Labor Communications Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className="fade-in">
                <Card className="h-full bg-white border border-gray-200 hover:shadow-lg transition">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      
                      <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-xl text-gray-700 font-medium">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 pt-10 px-6 bg-[#F2F2EC]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 fade-in">Who We Serve</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {audience.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 p-6 rounded-lg text-center hover:shadow-lg transition transform hover:scale-105 fade-in"
              >
                <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-xl text-gray-600 font-medium">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

   </div>)}