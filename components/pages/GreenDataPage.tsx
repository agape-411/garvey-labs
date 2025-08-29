'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  FiAward,
  FiFeather,
  FiGlobe,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from 'react-icons/fi'

import heroImage from '@/public/images/D1.jpg'
import sustainabilityImage from '@/public/images/D2.jpg'
import energyGridImage from '@/public/images/D3.jpg'
import communityImage from '@/public/images/D4.jpg'

const approach = [
  {
    icon: FiFeather,
    title: 'Sustainability Storytelling',
    description:
      'Community education and messaging that highlights genuine environmental benefits and renewable energy integration.',
  },
  {
    icon: FiZap,
    title: 'Green Energy Partnerships',
    description:
      'Facilitating connections between data centers and local renewable energy projects for authentic sustainability outcomes.',
  },
  {
    icon: FiUsers,
    title: 'Community Benefit Programs',
    description:
      'Developing programs tied to environmental outcomes that create lasting positive impact in local communities.',
  },
]

const marketPoints = [
  {
    icon: FiTrendingUp,
    title: 'Massive Market Growth',
    description:
      'The green data center market is experiencing explosive growth from $17B to $93B by 2032, driven by:',
    points: [
      'Corporate ESG commitments and sustainability requirements',
      'Regulatory pressure for environmental compliance',
      'Community demand for genuinely sustainable digital infrastructure',
      'Premium market positioning for green technology leaders',
    ],
    image: sustainabilityImage,
  },
  {
    icon: FiAward,
    title: 'Unique Competitive Advantage',
    description: 'Our cross-practice expertise provides unmatched credibility:',
    points: [
      'Renewable energy knowledge validates sustainability claims',
      'Progressive network includes environmental groups requiring engagement',
      "Crisis communications handles 'greenwashing' concerns",
      'Civic engagement focuses on authentic environmental benefits',
    ],
    image: energyGridImage,
  },
  {
    icon: FiGlobe,
    title: 'The Future is Green Digital Infrastructure',
    description:
      'We position data centers as enablers of sustainable technology:',
    points: [
      'Smart grid optimization and renewable energy management',
      'AI acceleration of climate solutions and energy efficiency',
      'Community-owned renewable energy powering local data centers',
      'Economic development through sustainable technology partnerships',
    ],
    image: communityImage,
  },
]

const clients = [
  {
    title: 'Big Tech with Sustainability Commitments',
    description:
      'Microsoft (carbon negative by 2030), Google (24/7 renewable energy by 2030), Meta (net zero by 2030), Amazon (net zero by 2040)',
  },
  {
    title: 'Green Data Center Developers',
    description:
      'Digital Realty (carbon neutral by 2030), Equinix (100% renewable energy by 2030), Switch (100% renewable energy powered)',
  },
  {
    title: 'Emerging Green Infrastructure',
    description:
      'Next-generation data center developers prioritizing community integration and environmental leadership',
  },
]

const services = [
  {
    title: 'Carbon Offset Communications',
    description:
      'Strategic messaging around renewable energy procurement and carbon neutrality commitments',
  },
  {
    title: 'Environmental Partnership Development',
    description:
      'Building coalitions with environmental groups and renewable energy advocates',
  },
  {
    title: 'Greenwashing Prevention',
    description:
      'Crisis communications and reputation management for authentic sustainability positioning',
  },
  {
    title: 'Community Economic Development',
    description:
      'Programs connecting data center development with local renewable energy job creation',
  },
]

export default function GreenDataPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.fade-section').forEach((el) => {
      el.classList.add(
        'opacity-0',
        'translate-y-10',
        'transition-all',
        'duration-700'
      )
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className='min-h-screen bg-white text-[#2D3748] leading-relaxed'>
      {/* Hero */}
      <section className='relative h-[70vh] flex items-center justify-center overflow-hidden bg-black'>
        <div
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{ backgroundImage: `url(${heroImage.src})` }}
        />
        <div className='absolute inset-0 bg-black/60' />
        <div className='relative z-10 text-center px-4 sm:px-6 max-w-3xl text-white'>
          <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold mb-6'>
            Green Data Centers & Sustainable Digital Infrastructure
          </h1>
          <p className='text-lg sm:text-lg md:text-xl mb-6'>
            The only consultancy bridging renewable energy expertise with data
            center civic engagement
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className='py-16 sm:py-24 px-4 sm:px-6 md:px-20 bg-green-100 fade-section'>
        <div className='text-center mb-12 sm:mb-16'>
          <h2 className='text-2xl sm:text-lg md:text-4xl font-bold text-green-700 mb-4'>
            Sustainable Digital Infrastructure Civic Engagement
          </h2>
          <p className='text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-gray-700'>
            We help green data centers achieve community acceptance through
            authentic sustainability commitments.
          </p>
        </div>
        <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-3'>
          {approach.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className='rounded-xl border border-green-100 bg-white shadow-lg p-6 text-center'
              >
                <Icon className='w-10 h-10 text-green-700 mb-4 mx-auto' />
                <h3 className='text-lg sm:text-xl font-semibold mb-2'>
                  {item.title}
                </h3>
                <p className='text-lg sm:text-lg text-gray-600'>
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Market Leadership */}
      <section className='py-16 sm:py-24 px-4 sm:px-6 md:px-20 fade-section'>
        <div className='text-center mb-12 sm:mb-16'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-green-700'>
            Market Leadership in Growing Sector
          </h2>
        </div>
        <div className='space-y-16'>
          {marketPoints.map((point, index) => {
            const Icon = point.icon
            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row ${
                  index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                } items-center gap-8`}
              >
                <div className='md:w-1/2'>
                  <Image
                    src={point.image}
                    alt={point.title}
                    width={500}
                    height={400}
                    className='rounded-xl'
                    placeholder='blur'
                  />
                </div>
                <div className='md:w-1/2 text-center md:text-left'>
                  <Icon className='w-10 h-10 mb-4 text-green-700 mx-auto md:mx-0' />
                  <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-2'>
                    {point.title}
                  </h3>
                  <p className='mb-4 text-lg sm:text-lg md:text-lg text-gray-700 font-medium'>
                    {point.description}
                  </p>
                  <ul className='list-disc list-inside text-lg sm:text-md text-gray-800 space-y-1'>
                    {point.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Clients */}
      <section className='py-16 sm:py-24 px-4 sm:px-6 md:px-20 bg-green-100 fade-section'>
        <div className='text-center mb-12 sm:mb-16'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-green-800'>
            Target Client Profile
          </h2>
        </div>
        <div className='grid md:grid-cols-3 gap-8'>
          {clients.map((client, index) => (
            <div
              key={index}
              className='bg-white rounded-xl p-6 border border-green-200 shadow-md text-center'
            >
              <h3 className='text-lg sm:text-xl font-semibold mb-2 text-green-700'>
                {client.title}
              </h3>
              <p className='text-lg sm:text-[18px] text-gray-700'>
                {client.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className='py-16 sm:py-24 px-4 sm:px-6 md:px-20 bg-white fade-section'>
        <div className='text-center mb-12 sm:mb-16'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-green-700'>
            Specialized Services
          </h2>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {services.map((service, index) => (
            <div
              key={index}
              className='bg-green-50 border border-green-100 rounded-xl shadow p-6 text-center'
            >
              <h3 className='text-lg sm:text-xl font-semibold mb-2 text-green-800'>
                {service.title}
              </h3>
              <p className='text-lg sm:text-lg text-gray-700'>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className='py-16 sm:py-24 px-4 sm:px-6 md:px-20 text-center bg-green-700 text-white fade-section'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4'>
          Ready to Transform Your Green Data Strategy?
        </h2>
        <p className='text-lg sm:text-[16px] md:text-xl mb-6'>
          Let’s collaborate to create credible, impactful sustainability
          narratives.
        </p>
        <Link
          href='/contact'
          className='bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-green-100 transition'
        >
          Contact Us
        </Link>
      </section>
    </div>
  )
}
