import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <section className="min-h-screen mt-10 text-base-content py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="title mb-4">Privacy Policy</h1>

        <p className="text-lg text-gray-600">
          At RentWheels, your privacy is our priority. This Privacy Policy
          outlines how we collect, use, and protect your personal information.
        </p>

        <h2 className="text-2xl font-semibold text-primary mt-6">
          Information We Collect
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Personal details like name, email, and contact information.</li>
          <li>Payment information for processing rentals.</li>
          <li>Usage data for improving our website and services.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-primary mt-6">
          How We Use Your Information
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>To provide and manage your car rental bookings.</li>
          <li>To improve user experience and website functionality.</li>
          <li>To communicate important updates or promotional offers.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-primary mt-6">
          Data Protection
        </h2>
        <p className="text-gray-600">
          We implement appropriate security measures to protect your data. Your
          information will not be sold or shared with third parties without your
          consent, except as required by law.
        </p>

        <h2 className="text-2xl font-semibold text-primary mt-6">
          Your Rights
        </h2>
        <p className="text-gray-600">
          You have the right to access, update, or request deletion of your
          personal information. Contact us anytime at{" "}
          <a
            href="mailto:support@rentwheels.com"
            className="text-accent underline"
          >
            support@rentwheels.com
          </a>
          .
        </p>

        <p className="text-gray-600 mt-6">
          By using our services, you agree to the terms of this Privacy Policy.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
