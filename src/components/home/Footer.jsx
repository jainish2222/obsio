import React from 'react'
import logo from '../../assets/obsio_white_t.png'
const Footer = () => {
  return (
    <div>
      <section className="relative z-30 p-4 sm:p-6 border-t-2 px-12 mx-auto">
        <div className="mx-auto w-full pt-18">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="#" className="flex items-center">
              {/* <img
                 src={logo}
                 alt="Company Logo"
                 width={500}
                 height={500}
                 className="mr-3 h-8 w-auto"
              /> */}
                <span className="self-center text-2xl uppercase font-bold whitespace-nowrap dark:text-white">
                  Obsio Solutions
                </span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Company
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">About Us</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">Careers</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Support
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="/e1/privacy-policy" className="hover:underline">Privacy Policy</a>
                  </li>
                  <li className="mb-4">
                    <a href="/e1/refund-policy" className="hover:underline">Refund Policy</a>
                  </li>
                  <li className="mb-4">
                    <a href="/e1/terms-and-conditions" className="hover:underline">Terms and Conditions</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Services
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Web Development</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">App Development</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Shopify Store Development</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">UI/UX Design</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">SEO Optimization</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">AI Agents & Automation</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2025 <a href="#" className="hover:underline">Companion™</a>. All rights reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="..." /></svg>
              </a>
              {/* Add more icons here if needed */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer;