import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
const Privacy = () => {
  return (
    <div className="min-h-screen w-full bg-[#020617] relative text-white px-4 md:px-10 py-22">
      {/* Dark Radial Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle 500px at 50% 200px, #3e3e3e, transparent)`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto py-14 font-jura">

        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-sm mb-6 opacity-80">Last updated: 7 May 2025</p>

        <p className="leading-7 opacity-90">
          Obsio Solutions (“Obsio,” “we,” “our,” or “us”) respects your privacy
          and is committed to protecting the personal data you share with us
          when you visit our website or interact with our services. This Privacy
          Policy explains what information we collect, why we collect it, how we
          use it, and the choices you have.
        </p>

        {/* 1. Scope */}
        <h2 className="text-2xl font-semibold mt-10 mb-2">1. Scope</h2>
        <p>This Policy applies to information collected through:</p>
        <ul className="list-disc ml-6 mt-2 opacity-90">
          <li>Your browsing or use of our website (desktop or mobile).</li>
          <li>Contact forms, inquiry forms, newsletters, or direct submissions.</li>
          <li>Cookies, analytics tools, and advertising pixels.</li>
          <li>Any interaction where this Privacy Policy is linked or referenced.</li>
        </ul>

        {/* 2. What We Collect */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">2. What We Collect</h2>

        <div className="overflow-x-auto">
          <table className="w-full border mt-3 text-sm border-gray-700">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="border p-2 border-gray-700">Category</th>
                <th className="border p-2 border-gray-700">Examples</th>
                <th className="border p-2 border-gray-700">Purpose / Legal Basis*</th>
              </tr>
            </thead>
            <tbody className="text-white">
              <tr>
                <td className="border p-2 border-gray-700">Contact Information</td>
                <td className="border p-2 border-gray-700">
                  Name, email, phone, company, message.
                </td>
                <td className="border p-2 border-gray-700">
                  Respond to inquiries, provide materials, legitimate interest /
                  contract.
                </td>
              </tr>
              <tr>
                <td className="border p-2 border-gray-700">Location Permission</td>
                <td className="border p-2 border-gray-700">
                  Browser-based geolocation (approximate).
                </td>
                <td className="border p-2 border-gray-700">
                  Personalize on-site content, improve localization (consent).
                </td>
              </tr>
              <tr>
                <td className="border p-2 border-gray-700">Device & Usage Data</td>
                <td className="border p-2 border-gray-700">
                  IP, browser type, pages viewed, timestamps.
                </td>
                <td className="border p-2 border-gray-700">
                  Performance, analytics, security (legitimate interest).
                </td>
              </tr>
              <tr>
                <td className="border p-2 border-gray-700">Cookies & IDs</td>
                <td className="border p-2 border-gray-700">
                  Google Analytics, Meta Pixel, LinkedIn Tag.
                </td>
                <td className="border p-2 border-gray-700">
                  Marketing measurement, conversion tracking (consent/legitimate
                  interest).
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm mt-2 opacity-70">
          *Where GDPR applies, lawful bases are shown. For Indian visitors, data
          is processed under legitimate interests and your voluntary consent.
        </p>

        {/* 3. How We Use */}
        <h2 className="text-2xl font-semibold mt-10 mb-2">
          3. How We Use Your Information
        </h2>
        <ul className="list-disc ml-6 opacity-90">
          <li>Provide and improve the website experience.</li>
          <li>Respond to inquiries and requests.</li>
          <li>Analytics to understand site behavior.</li>
          <li>Advertising and attribution using Google, Meta, and LinkedIn.</li>
          <li>Prevent fraud, ensure security, meet legal requirements.</li>
        </ul>
        <p className="mt-2 opacity-80">We do not sell or rent your personal data.</p>

        {/* 4. Sharing */}
        <h2 className="text-2xl font-semibold mt-10 mb-2">
          4. Sharing & Disclosure
        </h2>
        <p>Your information may be shared with:</p>
        <ul className="list-disc ml-6 opacity-90">
          <li>Google LLC – Analytics and Ads attribution.</li>
          <li>Meta Platforms – Pixel events for ad measurement.</li>
          <li>LinkedIn Corporation – B2B insight and reporting.</li>
          <li>Hosting, CRM, email, and security service providers.</li>
          <li>Legal authorities when required.</li>
        </ul>

        {/* 5. Cookies */}
        <h2 className="text-2xl font-semibold mt-10 mb-2">
          5. Cookies & Similar Technologies
        </h2>
        <p className="opacity-90">
          When you first visit, our cookie banner allows you to accept, reject,
          or customize non-essential cookies. You may also clear cookies through
          your browser settings.
        </p>

        {/* 6. Retention */}
        <h2 className="text-2xl font-semibold mt-10 mb-2">
          6. Data Retention
        </h2>
        <ul className="list-disc ml-6 opacity-90">
          <li>Contact submissions – up to 3 years.</li>
          <li>Analytics data – 26 months.</li>
          <li>Advertising identifiers – 180 days.</li>
          <li>Security logs – up to 12 months.</li>
        </ul>

        {/* 7. Rights */}
        <h2 className="text-2xl font-semibold mt-10 mb-2">7. Your Rights</h2>
        <p>You may have rights to:</p>
        <ul className="list-disc ml-6 opacity-90">
          <li>Access your data</li>
          <li>Correct inaccuracies</li>
          <li>Request deletion</li>
          <li>Restrict or object to processing</li>
          <li>Data portability</li>
          <li>Withdraw consent</li>
        </ul>

        <p className="mt-2">
          To make a request, email:{" "}
          <a
            href="mailto:privacy@obsiosolutions.com"
            className="text-blue-400 underline"
          >
            privacy@obsiosolutions.com
          </a>
        </p>

        {/* 8. Transfers */}
        <h2 className="text-2xl font-semibold mt-10 mb-2">
          8. International Transfers
        </h2>
        <p className="opacity-90">
          We operate from Surat, Gujarat, India, and may process data in India,
          the USA, EU, or other regions using legal safeguards where required.
        </p>

        {/* 9. Security */}
        <h2 className="text-2xl font-semibold mt-10 mb-2">9. Security</h2>
        <p className="opacity-90">
          We use HTTPS, encryption in transit, firewalls, and access controls.
          No system is completely secure.
        </p>

        {/* 10. Children */}
        <h2 className="text-2xl font-semibold mt-10 mb-2">
          10. Children's Privacy
        </h2>
        <p className="opacity-90">
          Our website is not for children under 16. We do not knowingly collect
          their data.
        </p>

        {/* 11. Links */}
        <h2 className="text-2xl font-semibold mt-10 mb-2">
          11. Third-Party Links
        </h2>
        <p className="opacity-90">
          External websites may have different privacy practices; review their
          policies before use.
        </p>

        {/* 12. Changes */}
        <h2 className="text-2xl font-semibold mt-10 mb-2">
          12. Changes to This Policy
        </h2>
        <p className="opacity-90">
          Updates will be posted here with a new “Last updated” date. Continued
          use means acceptance.
        </p>

        {/* 13. Contact */}
        <h2 className="text-2xl font-semibold mt-10 mb-2">13. Contact Us</h2>
          <p className="flex items-start gap-2">
        <FaMapMarkerAlt className="mt-1 text-orange-400" />
        310-311, Raj Imperia, Vraj Chowk, Sarthana Jakat Naka, Surat, Gujarat 395013
      </p>

      {/* Business Email */}
      <p className="flex items-center gap-2">
        <FaEnvelope className="text-blue-400" />
        business@obsio.tech
      </p>

      {/* HR Email */}
      <p className="flex items-center gap-2">
        <FaEnvelope className="text-blue-400" />
        hr@obsio.tech
      </p>

      {/* Phone */}
      <p className="flex items-center gap-2">
        <FaPhoneAlt className="text-green-400" />
        +91 87992 10169
      </p>

        <p className="mt-6 opacity-75">
          By using our website, you acknowledge that you have read and understood
          this Privacy Policy and agree to its terms.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
