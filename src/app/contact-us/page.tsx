import Link from 'next/link'

import { Button } from '@/components/Button'
import { SelectField, TextArea, TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact us',
}

export default function Register() {
  return (
    <SlimLayout>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <h2 className="mt-8 text-lg font-semibold text-gray-900">
        Have a question? We’re here to help.
      </h2>
      <p className="mt-2 text-sm text-gray-700">
        Send us an email and we’ll get back to you as soon as possible.
      </p>
      <form
        action="#"
        className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
      >
        <TextField
          label="First name"
          name="first_name"
          type="text"
          autoComplete="given-name"
          required
        />
        <TextField
          label="Last name"
          name="last_name"
          type="text"
          autoComplete="family-name"
          required
        />
        <TextField
          className="col-span-full"
          label="Email address"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        <TextField
          className="col-span-full"
          label="Phone number"
          name="phone number"
          type="tel"
          autoComplete="tel"
          required
        />
        <SelectField
          className="col-span-full"
          label="How can we help you?"
          name="message_type"
        >
          <option>Taxes: Personal and Corporate (Canada)</option>
          <option>Accounting: Preparation of Compilation Reports</option>
          <option>Managment of your daily transactions</option>
          <option>Accounting Virtual Assistance</option>
          <option>Accounting System Set-up</option>
          <option>Tax planning, Consulting and Compliance</option>
          <option>GST/QST: File remittances online</option>
          <option>Payroll: Pay your employees and DAS</option>
        </SelectField>
        <TextArea
          className="col-span-full"
          label="Message"
          name="message"
          type="text"
          required
        />
        <div className="col-span-full">
          <Button type="submit" variant="solid" color="blue" className="w-full">
            <span>
              Let&apos;s talk <span aria-hidden="true">&rarr;</span>
            </span>
          </Button>
        </div>
      </form>
    </SlimLayout>
  )
}
