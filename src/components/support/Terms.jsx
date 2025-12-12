import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaGlobe } from "react-icons/fa";

const Terms = () => {
  return (
        <div className="min-h-screen w-full bg-[#020617] relative text-white px-4 md:px-10 py-22 font-jura">
      {/* Dark Radial Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle 500px at 50% 200px, #3e3e3e, transparent)`,
        }}
      />
    <div className="max-w-4xl mx-auto px-6 py-12 text-white">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      <p className="opacity-80 mb-6">Last updated: December 2024</p>

      <p className="mb-6">
        Welcome to Obsio Solutions ("Obsio", "we", "our", or "us"). These Terms and 
        Conditions ("Terms") govern your use of our website and the services we provide. 
        By accessing or using our services, you agree to be bound by these Terms.
      </p>

      {/* 1 */}
      <h2 className="text-xl font-semibold mt-10 mb-2">1. Acceptance of Terms</h2>
      <p className="mb-6">
        By accessing our website or engaging our services, you acknowledge that you 
        have read, understood, and agree to be bound by these Terms and Conditions. 
        If you do not agree, please discontinue using our services.
      </p>

      {/* 2 */}
      <h2 className="text-xl font-semibold mt-10 mb-2">2. Services</h2>
      <p className="mb-4">Obsio Solutions provides a wide range of technology services including:</p>
      <ul className="list-disc list-inside space-y-1 opacity-90">
        <li>Web development and design</li>
        <li>Mobile application development (iOS & Android)</li>
        <li>Custom software development</li>
        <li>AI automation & system integration</li>
        <li>Remote team support and staff augmentation</li>
        <li>MVP development & rapid prototyping</li>
        <li>Technical consulting and advisory</li>
        <li>Ongoing website maintenance & support</li>
      </ul>

      {/* 3 */}
      <h2 className="text-xl font-semibold mt-10 mb-2">3. Client Responsibilities</h2>
      <p className="mb-4">Clients engaging our services agree to:</p>
      <ul className="list-disc list-inside space-y-1 opacity-90">
        <li>Provide accurate and timely project information</li>
        <li>Respond to requests for approvals and clarifications promptly</li>
        <li>Complete payments as per agreed schedules</li>
        <li>Provide necessary access to accounts and systems</li>
        <li>Respect confidentiality and intellectual property rights</li>
        <li>Use our services for lawful purposes only</li>
      </ul>

      {/* 4 */}
      <h2 className="text-xl font-semibold mt-10 mb-2">4. Payment Terms</h2>

      <h3 className="text-lg font-medium mt-4 mb-2">4.1 Payment Schedule</h3>
      <p className="mb-4">
        Payment terms are defined in the project agreement. Typically:
      </p>
      <ul className="list-disc list-inside space-y-1 opacity-90">
        <li>Advance payment at project start</li>
        <li>Milestone-based payments during execution</li>
        <li>Final payment upon project delivery</li>
      </ul>

      <h3 className="text-lg font-medium mt-4 mb-2">4.2 Late Payments</h3>
      <p className="mb-4">
        Late payments may delay deliverables or suspend services. A late fee may 
        apply to overdue invoices.
      </p>

      <h3 className="text-lg font-medium mt-4 mb-2">4.3 Currency and Taxes</h3>
      <p className="mb-6">
        Payments are typically in INR or USD unless specified. Clients are 
        responsible for any applicable taxes or fees.
      </p>

      {/* 5 */}
      <h2 className="text-xl font-semibold mt-10 mb-2">5. Intellectual Property</h2>

      <h3 className="text-lg font-medium mt-4 mb-2">5.1 Client Ownership</h3>
      <p className="mb-4">
        Upon full payment, the client receives ownership of project-specific 
        deliverables, excluding external or proprietary components.
      </p>

      <h3 className="text-lg font-medium mt-4 mb-2">5.2 Third-Party Components</h3>
      <p className="mb-4">
        Some projects may include third-party tools or libraries governed by 
        their respective licenses. Clients must comply with those terms.
      </p>

      <h3 className="text-lg font-medium mt-4 mb-2">5.3 Proprietary Assets</h3>
      <p className="mb-6">
        Obsio retains ownership of proprietary systems, methodologies, tools, 
        and internal processes used during service delivery.
      </p>

      {/* 6 */}
      <h2 className="text-xl font-semibold mt-10 mb-2">6. Confidentiality</h2>
      <p className="mb-6">
        Both parties agree to maintain confidentiality regarding sensitive, 
        proprietary, or non-public information shared during the project.
      </p>

      {/* 7 */}
      <h2 className="text-xl font-semibold mt-10 mb-2">7. Project Timeline and Delivery</h2>
      <p className="mb-4">
        Timelines are estimates and may change due to:
      </p>
      <ul className="list-disc list-inside space-y-1 opacity-90 mb-6">
        <li>Changes in project scope</li>
        <li>Delays in client feedback</li>
        <li>Technical complexities</li>
        <li>Third-party dependencies</li>
        <li>Force majeure events</li>
      </ul>

      {/* 8 */}
      <h2 className="text-xl font-semibold mt-10 mb-2">8. Limitation of Liability</h2>
      <p className="mb-6">
        Obsio Solutions shall not be liable for indirect, incidental, or 
        consequential damages. Liability is limited to the amount paid for the 
        specific service.
      </p>

      {/* 9 */}
      <h2 className="text-xl font-semibold mt-10 mb-2">9. Warranty and Support</h2>

      <h3 className="text-lg font-medium mt-4 mb-2">9.1 Warranty Period</h3>
      <p className="mb-4">
        We offer a 30-day warranty period for fixes directly related to our work.
      </p>

      <h3 className="text-lg font-medium mt-4 mb-2">9.2 Exclusions</h3>
      <ul className="list-disc list-inside space-y-1 opacity-90 mb-6">
        <li>Third-party service failures</li>
        <li>Client-side modifications</li>
        <li>Platform changes or external updates</li>
        <li>Hosting or infrastructure issues</li>
      </ul>

      {/* 10 */}
      <h2 className="text-xl font-semibold mt-10 mb-2">10. Termination</h2>
      <p className="mb-6">
        Either party may terminate the agreement with written notice. Completed work 
        must be paid for, and only paid deliverables will be handed over.
      </p>

      {/* 11 */}
      <h2 className="text-xl font-semibold mt-10 mb-2">11. Force Majeure</h2>
      <p className="mb-6">
        Neither party is liable for delays or failures caused by events outside 
        reasonable control, including natural disasters, war, or internet outages.
      </p>

      {/* 12 */}
      <h2 className="text-xl font-semibold mt-10 mb-2">12. Governing Law</h2>
      <p className="mb-6">
        These Terms are governed by the laws of India. Any disputes will be handled 
        through arbitration or in Gujarat courts.
      </p>

      {/* 13 */}
      <h2 className="text-xl font-semibold mt-10 mb-2">13. Changes to Terms</h2>
      <p className="mb-6">
        We may update these Terms at any time. Continued use of our services means 
        you accept the updated Terms.
      </p>

      {/* 14 Contact */}
      <h2 className="text-2xl font-semibold mt-10 mb-2">14. Contact Information</h2>

      <div className="space-y-3">
        <p className="flex items-start gap-2">
          <FaMapMarkerAlt className="mt-1 text-orange-400" />
          310-311, Raj Imperia, Vraj Chowk, Sarthana Jakat Naka, Surat, Gujarat 395013
        </p>

        <p className="flex items-center gap-2">
          <FaEnvelope className="text-blue-400" />
          business@obsio.tech
        </p>

        <p className="flex items-center gap-2">
          <FaEnvelope className="text-blue-400" />
          hr@obsio.tech
        </p>

        <p className="flex items-center gap-2">
          <FaPhoneAlt className="text-green-400" />
          +91 87992 10169
        </p>

        <p className="flex items-center gap-2">
          <FaGlobe className="text-purple-400" />
          www.obsio.tech
        </p>
      </div>

      <p className="mt-6 opacity-75">
        By using our website, you acknowledge that you have read and understood these 
        Terms and Conditions and agree to be bound by them.
      </p>
    </div>
    </div>
  
  );
};

export default Terms;
