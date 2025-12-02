import React from "react";

const faqs = [
  {
    question: "How do I create an account?",
    answer:
      'Click the "Sign Up" button in the top right corner and follow the registration process.',
  },
  {
    question: "I forgot my password. What should I do?",
    answer:
      'Click on "Forgot Password" on the login page and follow the instructions sent to your email.',
  },
  {
    question: "How do I update my profile information?",
    answer:
      'Go to "My Account" settings and select "Edit Profile" to make changes.',
  },
  {
    question: "How long does delivery take?",
    answer:
      "Our standard delivery takes 24–72 hours depending on the destination within Bangladesh. You can track your parcel in real-time.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Yes! Every order comes with a unique tracking ID. Use it on our website or app to see real-time updates of your delivery.",
  },
  {
    question: "Are my parcels safe?",
    answer:
      "Absolutely. We ensure secure handling of all packages, from pickup to delivery, and offer insurance options for valuable items.",
  },
];

const FAQs = () => {
  return (
    <div>
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#03373D]">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 mt-2 text-base md:text-lg">
          Answers to common questions about our services
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="collapse bg-white border border-gray-300 rounded-xl"
            open={index === 0} // first FAQ open by default
          >
            <summary className="collapse-title font-semibold text-[#03373D] p-6 cursor-pointer">
              {faq.question}
            </summary>
            <div className="collapse-content text-gray-600 p-6 text-sm md:text-base">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
