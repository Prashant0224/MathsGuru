import React from "react";
import { Phone, Mail, MapPin, MessageCircle, Calendar } from "lucide-react";

const Contact = () => {
  const whatsappMessage = encodeURIComponent(
    "Hi Prashant sir"
  );

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your learning journey? Contact me for a free demo
            class and see the difference!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Let's Connect
            </h3>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-700">+91 7879864169</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-700">litoriyaprashant4@email.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-700">
                    Ambedkar Nagar Near LIG, Indore
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="space-y-4">
              <a
                href={`https://wa.me/917879864169?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg transition-colors w-full"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="font-semibold">Chat on WhatsApp</span>
              </a>

              <a
                href={`https://wa.me/917879864169?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg transition-colors w-full"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="font-semibold">Book Free Demo Class</span>
              </a>

              <a
                href="tel:+917879864169"
                className="flex items-center justify-center space-x-3 bg-gray-800 hover:bg-gray-900 text-white px-6 py-4 rounded-lg transition-colors w-full"
              >
                <Phone className="h-5 w-5" />
                <span className="font-semibold">Call Now</span>
              </a>
            </div>

            {/* Available Hours */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h4 className="font-semibold text-gray-900 mb-4">
                Available Hours
              </h4>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday - Sunday:</span>
                  <span>9:00 AM - 8:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map Embed instead of Form */}
          <div className="bg-white p-2 rounded-2xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3679.854172382595!2d75.8825241753052!3d22.733660979377355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDQ0JzAxLjIiTiA3NcKwNTMnMDYuNCJF!5e0!3m2!1sen!2sin!4v1757827977097!5m2!1sen!2sin"
              width="600"
              height="650"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
