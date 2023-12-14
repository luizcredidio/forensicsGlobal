import { Container } from '@/components/Container'
import Image from 'next/image'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Can Forensic Global take care of VAT and GST/QST filings?',
      answer:
        'Yes, our expert team can handle all your VAT and GST/QST filing requirements, ensuring timely and accurate submissions.',
    },
    {
      question: 'Do you offer different payment methods for your services?',
      answer:
        'Definitely! We understand the importance of convenience in financial matters, so we accept various payment methods, including purchase orders.',
    },
    {
      question: 'How can I start a career with Forensic Global?',
      answer:
        "We're always on the lookout for passionate individuals to join our team. Please visit our careers page or send us your resume directly if you're interested in working with us.",
    },
  ],
  [
    {
      question:
        'What type of assistance can Forensic Global provide for bookkeeping?',
      answer:
        'From managing daily transactions to offering virtual accounting assistance and setting up accounting systems, we do it all. We also provide tax planning, consulting, and compliance services.',
    },
    {
      question: 'Does Forensic Global assist with payroll processing?',
      answer:
        'Absolutely, our comprehensive payroll services ensure that your employees and associated statutory requirements like DAS are managed effectively.',
    },
    {
      question:
        'In case of a tax inquiry, how does Forensic Global support its clients?',
      answer:
        'Should you face any tax-related inquiries or audits, our team of experts will stand with you providing the necessary documentation and guidance throughout the process.',
    },
  ],
  [
    {
      question:
        'How does Forensic Global help with personal and corporate taxes?',
      answer:
        'Our experienced accountants can help you navigate the complexities of both personal and corporate taxes, offering advice and strategies to minimize liabilities and ensure compliance.',
    },
    {
      question: 'What happens if I lose my password to your client portal?',
      answer:
        'No worries! Just reach out to our support team, and we’ll assist you with a secure process to reset your password and regain access to your account.',
    },
    {
      question:
        'How can I ensure my financial reporting is accurate and reliable?',
      answer:
        'Our team uses state-of-the-art software combined with expert oversight to generate precise and comprehensive reports. You can count on our reports to reflect the true financial state of your business.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and we will get back to you as soon as possible.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
