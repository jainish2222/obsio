import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Refund = () => {
  return (
    <div className="min-h-screen w-full bg-[#020617] relative text-white px-4 md:px-10 py-22 font-jura">
      {/* Dark Radial Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle 500px at 50% 200px, #3e3e3e, transparent)`,
        }}
      />
      <div className="min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-14">
          <h1 className="text-3xl font-bold mb-3">Refund Policy</h1>
          <p className="opacity-70 mb-6">Last updated: June 2025</p>

          <p className="mb-6 opacity-90">
            Obsio Solutions (“Obsio”, “we”, “our”, or “us”) is committed to
            delivering high-quality digital services to our clients. This Refund
            Policy describes the terms and conditions under which refunds may be
            issued for services purchased through our official platforms.
          </p>

          {/* SECTION TEMPLATE */}
          <Section
            number="1"
            title="General Refund Policy"
            content={
              <>
                <p className="mb-4 opacity-90">
                  We do not offer refunds once services have been delivered.
                  This applies to:
                </p>
                <ul className="list-disc list-inside space-y-1 opacity-80">
                  <li>Web development and design</li>
                  <li>Mobile application development</li>
                  <li>Software and IT project development</li>
                  <li>Consulting or advisory services</li>
                  <li>Maintenance and technical support</li>
                  <li>Any other digital/technology-based services</li>
                </ul>
              </>
            }
          />

          <Section
            number="2"
            title="Refund for Terminated Projects"
            content={
              <>
                <p className="mb-4 opacity-90">
                  Refunds may be considered only if a project is terminated
                  before development work has started.
                </p>
                <ul className="list-disc list-inside space-y-1 opacity-80">
                  <li>
                    A written termination request must be submitted before work
                    begins.
                  </li>
                  <li>No prototypes, designs, or deliverables were shared.</li>
                  <li>Client has not breached the contract.</li>
                  <li>Administrative charges may apply.</li>
                </ul>
              </>
            }
          />

          <Section
            number="3"
            title="What Constitutes “Work Started”"
            content={
              <ul className="list-disc list-inside space-y-1 opacity-80">
                <li>Requirement gathering/documentation</li>
                <li>Project planning/roadmap creation</li>
                <li>UI/UX design, wireframes, or prototypes</li>
                <li>Any type of coding or development</li>
                <li>Team allocation</li>
                <li>Creation of any deliverable</li>
              </ul>
            }
          />

          <Section
            number="4"
            title="Refund Process"
            content={
              <ul className="list-disc list-inside space-y-1 opacity-80">
                <li>
                  Email: <strong>business@obsio.tech</strong>
                </li>
                <li>Provide project details & termination reason</li>
                <li>Response within 5–7 business days</li>
                <li>If approved, refund takes 10–15 business days</li>
                <li>Refunds are processed to original payment method only</li>
              </ul>
            }
          />

          <Section
            number="5"
            title="Partial Deliveries"
            content={
              <p className="opacity-90">
                If any portion of the work has been delivered, no refund will be
                issued. The client must pay for the work completed up to the
                termination date.
              </p>
            }
          />

          <Section
            number="6"
            title="Disputes & Resolution"
            content={
              <p className="opacity-90">
                Any refund-related dispute will be handled through direct
                communication between the client and Obsio Solutions. We
                encourage open and transparent discussions to resolve issues
                quickly.
              </p>
            }
          />

          <Section
            number="7"
            title="Changes to This Policy"
            content={
              <p className="opacity-90">
                We may update this Refund Policy as required. Continued use of
                our services after an update indicates acceptance of the revised
                terms.
              </p>
            }
          />

          {/* CONTACT SECTION */}
          <h2 className="text-2xl font-semibold mt-12 mb-3">8. Contact Us</h2>

          <div className="space-y-3 text-gray-300">
            <p className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-orange-400" />
              310-311, Raj Imperia, Vraj Chowk, Sarthana Jakat Naka, Surat,
              Gujarat 395013
            </p>

            <p className="flex items-center gap-3">
              <FaEnvelope className="text-blue-400" />
              business@obsio.tech
            </p>

            <p className="flex items-center gap-3">
              <FaEnvelope className="text-blue-400" />
              hr@obsio.tech
            </p>

            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-400" />
              +91 87992 10169
            </p>
          </div>

          <p className="mt-6 opacity-70">
            By using our website, you confirm that you have read and agree to
            this Refund Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section = ({ number, title, content }) => (
  <section className="mt-10">
    <h2 className="text-xl font-semibold mb-2">
      {number}. {title}
    </h2>
    <div>{content}</div>
  </section>
);

export default Refund;
