import {
  AcademicCapIcon,
  CheckCircleIcon,
  HandRaisedIcon,
  RocketLaunchIcon,
  SparklesIcon,
  SunIcon,
  UserGroupIcon,
} from '@heroicons/react/20/solid'

import { Container } from '@/components/Container'
import React from 'react'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]
const stats = [
  { label: 'ForensicGlobal was founded', value: '2009' },
  { label: 'Years of experience', value: '10+' },
  { label: 'Satisfied customers', value: '100+' },
  { label: 'Certifications', value: '3+' },
]
const values = [
  {
    name: 'Experienced Professionals:',
    description:
      'Our team consists of highly skilled and knowledgeable professionals with years of experience in the accounting, bookkeeping, and tax industry.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Personalized Service:',
    description:
      'We take the time to understand your specific needs and tailor our services to align with your goals and objectives.',
    icon: HandRaisedIcon,
  },
  {
    name: 'Proactive Guidance:',
    description:
      'We stay abreast of the latest industry trends and regulatory changes to provide proactive guidance and strategic insights that help you stay ahead of the curve.',
    icon: UserGroupIcon,
  },
  {
    name: 'Commitment to Excellence:',
    description:
      'We are committed to delivering excellence in everything we do, from the accuracy of our work to the responsiveness of our service.',
    icon: AcademicCapIcon,
  },
]
const team = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    location: 'Toronto, Canada',
  },
  // More people...
]
const benefits = [
  'Competitive salaries',
  'Flexible work hours',
  '30 days of paid vacation',
  'Annual team retreats',
  'Benefits for you and your family',
  'A great work environment',
]

export default function page() {
  return (
    <main className="relative isolate bg-gray-900 pb-52">
      {/* Background */}
      <div
        className="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#2351cc] to-[#4f46e5] opacity-25"
          style={{
            clipPath:
              'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
          }}
        />
      </div>

      {/* Header section */}
      <div className="px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-4xl pt-24 text-center sm:pt-40">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            About Us
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Founded in 2009 by Francis Okedeji, ForensicGlobal, a Montreal-based
            Canadian Controlled Private Corporation is a leading provider of
            comprehensive Accounting, Bookkeeping and Tax services tailored to
            meet the unique needs of businesses and individuals. With a
            commitment to accuracy, integrity, and personalized attention, we
            strive to empower our clients to achieve their financial goals
            efficiently and effectively. A Chartered Accountant and MBA graduate
            in Accounting and Finance. Francis has over 10 years of experience
            in providing individuals, Students and small businesses with
            personalized accounting and tax services of the highest quality.
            Francis also furthered his education by acquiring double
            qualifications in Cybersecurity and Computerised Financial
            Management both at MCGILL University and Vanier College
            respectively. These further qualifications and experience have
            enhanced his expertise in managing the full accounting cycle,
            reconciliation, ensuring accuracy, and streamlining financial
            operations.
          </p>
        </div>
      </div>

      {/* Content section */}
      <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="my-10 text-center text-4xl font-medium tracking-tight text-white">
            Our Services:
          </h2>
          <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 lg:max-w-none lg:grid-cols-2">
            <div>
              <p>
                <strong>Tax Services:</strong> Navigating the complexities of
                tax regulations can be daunting. Our dedicated tax professionals
                provide expert guidance and support to help minimize your tax
                liabilities while maximizing your savings. From tax planning and
                preparation to Canada Revenue Agency(CRA) and Revenue Quebec
                representation and tax resolution, we are your trusted partner
                in all tax matters.
              </p>

              <p className="mt-8">
                <strong>Bookkeeping Services:</strong> Simplify your financial
                management processes with our comprehensive bookkeeping
                services. From transaction recording and bank reconciliations to
                accounts payable and receivable management, we handle all
                aspects of bookkeeping so you can focus on running your
                business.
              </p>
            </div>
            <div>
              <p>
                <strong>Accounting Services:</strong> Our team of experienced
                professionals offers a full range of accounting services,
                including financial statement preparation, general ledger
                maintenance, budgeting, and cash flow management. We ensure that
                your financial records are accurate, up-to-date, and compliant
                with regulatory requirements.
              </p>
              <p className="mt-8">
                <strong>Our Approach:</strong> At ForensicGlobal, we believe in
                building long-lasting relationships based on trust,
                transparency, and exceptional service. Our approach is rooted in
                understanding your unique financial needs and delivering
                customized solutions that drive results. Whether you&apos;re a
                small business owner, a startup entrepreneur, or an individual
                seeking expert financial guidance, we are here to support you
                every step of the way through our virtual assistance initiative.
              </p>
            </div>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
            {stats.map((stat, statIdx) => (
              <div
                key={statIdx}
                className="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6"
              >
                <dt className="text-base leading-7 text-gray-300">
                  {stat.label}
                </dt>
                <dd className="text-3xl font-semibold tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Image section */}
      <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
        <img
          src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2894&q=80"
          alt=""
          className="aspect-[9/4] w-full object-cover xl:rounded-3xl"
        />
      </div>

      {/* Values section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Why Choose Us?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            At ForensicGlobal, we are committed to delivering exceptional
            service and value to our clients. Our core values guide everything
            we do, from the way we interact with our clients to the quality of
            our work. Here&apos;s what sets us apart:
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
          {values.map((value) => (
            <div key={value.name} className="relative pl-9">
              <dt className="inline font-semibold text-white">
                <value.icon
                  className="absolute left-1 top-1 h-5 w-5 text-indigo-500"
                  aria-hidden="true"
                />
                {value.name}
              </dt>{' '}
              <dd className="inline">{value.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </main>
  )
}
