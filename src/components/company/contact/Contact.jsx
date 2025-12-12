import React, { memo } from "react";
import ContactPage from "../../services/ContactPage";

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      {/* Contact Form Section */}
      <ContactPage />

      {/* MAP Section */}
      <div className="max-w-6xl mx-auto mt-16 rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(99,102,241,0.3)]">
        <iframe
          className="w-full h-72 md:h-96"
          src="https://www.google.com/maps/d/embed?mid=1I-fI-HCfkvYCAMI2PgcBeX2XJmOJWQs&ehbc=2E312F"
          title="Our Location"
          loading="lazy"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default memo(Contact);
