'use client'

import Link from 'next/link'

const servicesList = [
  {
    title: 'Civic Engagement',
    description:
      'Innovative public involvement strategies for renewable energy and infrastructure projects.',
    href: '/renewable-energy',
  },
  {
    title: 'Sustainable Digital Infrastructure',
    description:
      'Civic engagement and sustainability positioning for green data centers and digital infrastructure.',
    href: '/green-data',
  },
  {
    title: 'Strategic Communications',
    description:
      'Narrative building, storytelling, and message development for progressive organizations and labor unions.',
    href: '/labor-unions',
  },
  {
    title: 'Crisis Communications',
    description:
      'Rapid response strategies and reputation management during challenging moments.',
    href: '/social-impact',
  },
]

const Services = () => {
  return (
    <section className='bg-white py-20 px-6 border-t border-gray-200'>
      <div className='max-w-5xl mx-auto'>
        {/* Section Heading */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-[#1A365D]'>
            Our Services Overview
          </h2>
          <p className='text-[#2A4365] text-lg md:text-xl mt-4'>
            Communication strategies that drive change and build trust
          </p>
        </div>

        {/* 2-column layout */}
        <div className='flex flex-col md:flex-row md:space-x-12'>
          {[servicesList.slice(0, 2), servicesList.slice(2)].map(
            (group, groupIdx) => (
              <div
                key={groupIdx}
                className='flex-1 space-y-8 md:border-t border-gray-300 pt-8'
              >
                {group.map((service, idx) => (
                  <div key={idx} className='border-b border-gray-300 pb-8'>
                    <h3 className='text-xl md:text-2xl font-semibold text-[#1A365D]'>
                      {service.title}
                    </h3>
                    <p className='text-[#2A4365] text-lg md:text-lg sm:text-lg mt-2 leading-relaxed'>
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      className='text-sm md:text-base font-medium text-[#3182CE] hover:underline underline-offset-4 inline-block mt-3'
                    >
                      Learn More &rarr;
                    </Link>
                  </div>
                ))}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}

export default Services
