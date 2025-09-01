import { HelpCircle, Users, Calendar } from "lucide-react";

export default function HelpPage() {
     const faqs = [
    {
      question: "How do I become a member of NSA?",
      answer: "Fill out the membership form on our Members page. Membership is open to all Weber State University students."
    },
    {
      question: "What are the membership fees?",
      answer: "Annual membership fee is $20 for students. This helps cover event costs and organizational expenses."
    },
    {
      question: "When are meetings held?",
      answer: "We meet every second Friday of the month at 6:00 PM in the Student Union Building."
    },
    {
      question: "Can international students join?",
      answer: "Yes! NSA welcomes all students regardless of nationality who are interested in Nepalese culture."
    },
    {
      question: "How can I stay updated on events?",
      answer: "Follow our social media accounts and check this website regularly for event announcements."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Help & Support</h1>
          <p className="text-xl">Find answers to common questions and get support</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="text-purple-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-purple-600">Email Support</h3>
            <p className="text-gray-600">nsa@weber.edu</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-purple-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-purple-600">Office Hours</h3>
            <p className="text-gray-600">Mon-Fri: 2:00 PM - 5:00 PM</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="text-purple-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-purple-600">Emergency Contact</h3>
            <p className="text-gray-600">(801) 555-0123</p>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-purple-600 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-purple-600 mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-purple-600 mb-6 text-center">Contact Us</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Name</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600" />
            </div>
            
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600" />
            </div>
            
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Subject</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600" />
            </div>
            
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea rows="5" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"></textarea>
            </div>
            
            <button type="submit" className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
