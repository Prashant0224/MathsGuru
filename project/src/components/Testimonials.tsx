import React from 'react';
import { Star, PlayCircle, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ankit Sharma",
      grade: "Class 12th Student",
      rating: 5,
      text: "Prashant sir's teaching method is exceptional. I improved from 60% to 95% in Mathematics. His concept clarity and exam strategies are outstanding!",
      image:
        "https://st5.depositphotos.com/9609578/66912/i/450/depositphotos_669126480-stock-photo-portrait-smiling-hispanic-boy-looking.jpg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop", // Young Indian male student
    },
    {
      name: "Sanya Mehta",
      grade: "Class 10th Student",
      rating: 5,
      text: "Science used to be so difficult, but now I understand everything clearly. Thank you Prashant sir!",
      image:
        "https://img.etimg.com/thumb/width-420,height-315,imgsize-66334,resizemode-75,rect-446_2_1155_866,msid-118385052/jobs/exams-results/cbse-to-allow-students-to-take-class-10-board-exam-twice-a-year-from-next-year-and-introduce-global-curriculum/cbse-board-exam.jpg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop", // Young Indian female student
    },
    {
      name: "Rahul Patel",
      grade: "Programming Student",
      rating: 5,
      text: "Learning Python and Machine Learning with Prashant sir was amazing. His practical approach and real-world examples made complex topics easy to understand.",
      image:
        "https://media.istockphoto.com/id/1338912354/photo/young-student.jpg?s=612x612&w=0&k=20&c=fYkHDXLgYo8TJSI0CAixYAO8hiGJIY3Pd4P3VcWaJj0=", // Indian male teenager
    },
  ];


  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Demo Video Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Watch My Teaching Demo
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              See how I break down complex mathematical concepts into simple,
              understandable steps. This demo showcases my teaching methodology
              and interaction style.
            </p>

            <div className="relative max-w-2xl mx-auto">
              <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                <video controls className="w-full h-full">
                  <source src="/demovideo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="absolute -bottom-3 -right-3 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Free Demo Available!
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Student Success Stories
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-8"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.grade}</p>
                </div>
              </div>

              <div className="flex mb-4">{renderStars(testimonial.rating)}</div>

              <div className="relative">
                <Quote className="absolute -top-1 -left-1 h-6 w-6 text-blue-200" />
                <p className="text-gray-700 italic pl-6">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Results Summary */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-8">Proven Results</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">200+</div>
              <div className="text-blue-100">Students Taught</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Pass Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4.9/5</div>
              <div className="text-blue-100">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
