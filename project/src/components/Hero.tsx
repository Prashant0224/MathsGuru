import React from 'react';
import { PlayCircle, Calendar } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTestimonials = () => {
    const element = document.getElementById('testimonials');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Empowering Students in{" "}
              <span className="text-blue-600">Mathematics</span>,{" "}
              <span className="text-green-600">Science</span> &{" "}
              <span className="text-purple-600">Programming</span>
            </h1>

            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              I am <strong>Prashant Litoriya</strong>, a B.Tech graduate with
              over 5 years of teaching experience. I specialize in Mathematics
              and Science for school students and also mentor in programming and
              advanced technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToContact}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                <Calendar className="inline h-5 w-5 mr-2" />
                Book a Free Demo Class
              </button>

              <button
                onClick={scrollToTestimonials}
                className="bg-white hover:bg-gray-50 text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg border border-gray-200"
              >
                <PlayCircle className="inline h-5 w-5 mr-2" />
                Watch Demo Video
              </button>
            </div>
          </div>

          {/* Right Content - Professional Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop"
                alt="Prashant Litoriya - Professional Tutor"
                className="w-80 h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;