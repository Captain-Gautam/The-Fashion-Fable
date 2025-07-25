import { Phone, Clock, MapPin, Instagram } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: "+91-9714785080",
      action: "tel:+919714785080"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: "Monday to Saturday, 10:00 AM - 7:00 PM",
      action: null
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      details: "Hamiparavas, Old-Main Bazar, Bhachau, Kutch, Gujarat",
      action: null
    }
  ];

  return (
    <div className="py-12">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ready to start your fashion journey? Let's discuss your project and bring your style vision to life.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif text-gray-900 mb-4">
              Contact Information
            </h2>
            <p className="text-xl text-gray-600">
              Designer: Minaxiben Prajapati
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center w-72"
              >
                <div className="text-primary-600 flex justify-center mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {info.title}
                </h3>
                {info.action ? (
                  <a
                    href={info.action}
                    target={info.action.startsWith('http') ? '_blank' : undefined}
                    rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-gray-600 hover:text-primary-600 transition-colors duration-200 text-sm leading-relaxed"
                  >
                    {info.details}
                  </a>
                ) : (
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {info.details}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-md text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Follow My Work</h3>
            https://www.youtube.com/@thefashionfable12     <p className="text-gray-600 mb-6">
              Stay updated with my latest designs and fashion tips on social media.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://instagram.com/fashionbyfable12"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center"
              >
                <Instagram className="h-5 w-5 mr-2" />
                @fashionbyfable12
              </a>
              <a
                href="https://www.youtube.com/@thefashionfable12"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center"
              >
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.117C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.391.569A2.994 2.994 0 0 0 .502 6.186C0 8.36 0 12 0 12s0 3.64.502 5.814a2.994 2.994 0 0 0 2.107 2.117C4.772 20.5 12 20.5 12 20.5s7.228 0 9.391-.569a2.994 2.994 0 0 0 2.107-2.117C24 15.64 24 12 24 12s0-3.64-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                YouTube
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long does it take to complete a custom design?",
                answer: "Typically, custom designs take 1-2 weeks depending on the complexity and current workload. Rush orders can be accommodated with advance notice."
              },
              {
                question: "Do you provide fabric or should I bring my own?",
                answer: "Both options are available. I can source high-quality fabrics based on your design requirements, or you can bring your own preferred materials."
              },
              {
                question: "What is included in the fashion design courses?",
                answer: "Our courses include hands-on training in cutting, stitching, measurement techniques, pattern making, and design principles. All course materials and tools guidance are provided."
              },
              {
                question: "Can you alter existing garments?",
                answer: "Yes, I provide alteration services for existing garments to ensure perfect fit and style updates."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
