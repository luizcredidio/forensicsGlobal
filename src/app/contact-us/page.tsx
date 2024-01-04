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
        Contact us and we’ll get back to you as soon as possible.
      </p>
      <div className="bg-white py-24 sm:py-32">
        <div className="max-w-7xl">
          <div className=" max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="rounded-2xl bg-gray-50 p-10">
              <h3 className="text-xl font-semibold leading-7 text-gray-900">
                Contact Information
              </h3>
              <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                <div>
                  <dt className="sr-only">Email</dt>
                  <dd>
                    <a
                      className="text-base font-semibold text-indigo-600"
                      href="mailto:francisdeleoke@gmail.com"
                    >
                      francisdeleoke@gmail.com
                    </a>
                  </dd>
                </div>
                <div className="mt-1">
                  <dt className="sr-only">Phone number</dt>
                  <dd>
                    <a className="text-base" href="tel:+15149267822">
                      +1 (514) 926-7822
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </SlimLayout>
  )
}
