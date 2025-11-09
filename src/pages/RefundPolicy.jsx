import React from "react";

const RefundPolicy = () => {
  return (
    <section className="min-h-screen text-base-content py-20 px-6 my-10">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="title mb-4">Refund Policy</h1>

        <p className="text-lg text-gray-600">
          At RentWheels, we aim to provide a seamless rental experience. This
          Refund Policy explains the conditions under which refunds may be
          provided.
        </p>

        <h2 className="text-2xl font-semibold text-primary mt-6">
          Cancellation
        </h2>
        <p className="text-gray-600">
          Customers can cancel a booking up to 24 hours before the scheduled
          pickup time to be eligible for a full refund. Cancellations made less
          than 24 hours before may incur a fee.
        </p>

        <h2 className="text-2xl font-semibold text-primary mt-6">Refunds</h2>
        <p className="text-gray-600">
          Refunds, if applicable, will be processed within 5-7 business days to
          the original payment method. We reserve the right to deduct any
          applicable service fees.
        </p>

        <h2 className="text-2xl font-semibold text-primary mt-6">
          Non-Refundable Situations
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Bookings cancelled after the rental period has started.</li>
          <li>Late cancellations violating our 24-hour policy.</li>
          <li>Damages or violations caused during the rental period.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-primary mt-6">Contact Us</h2>
        <p className="text-gray-600">
          For any refund requests or questions, please contact us at{" "}
          <a
            href="mailto:support@rentwheels.com"
            className="text-accent underline"
          >
            support@rentwheels.com
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default RefundPolicy;
