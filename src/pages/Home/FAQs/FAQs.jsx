import faqIllustration from "../../../assets/faq-icon.png"; // replace with your actual image path

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
    <div className="lg:space-y-8 space-y-6">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
          Frequently Asked Questions
        </h2>
        <p className="text-black mt-2 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          Answers to common questions about our services
        </p>
      </div>

      {/* Illustration */}
      <div className="flex items-center justify-center flex-col lg:flex-row gap-6">
        <img
          src={faqIllustration}
          alt="FAQ Illustration"
          className="w-2/5"
        />
        {/* FAQ Accordion */}
        <div className="mx-auto space-y-4 w-full lg:w-3/5">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
              open={index === 0} // first FAQ open by default
            >
              <summary className="font-semibold text-black p-6 cursor-pointer text-lg md:text-xl">
                {faq.question}
              </summary>
              <div className="p-6 pt-0 text-black text-base md:text-lg leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
