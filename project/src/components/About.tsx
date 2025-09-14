import React from 'react';
import { Award, Target, Users, TrendingUp } from 'lucide-react';
import teacherImg from "../assets/teacher.jpg";


const About = () => {
  const achievements = [
    {
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      title: "100/100 in Mathematics",
      description: "Scored perfect marks in both 10th and 12th Board Examinations"
    },
    {
      icon: <Target className="h-8 w-8 text-blue-500" />,
      title: "B.Tech Graduate",
      description: "Strong technical background with engineering degree"
    },
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      title: "5+ Years Teaching",
      description: "Extensive experience in online and offline tutoring"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-purple-500" />,
      title: "Advanced Technologies",
      description: "Expert in programming, ML, and modern tech stack"
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left - Photo and Stats */}
          <div className=" text-center lg:text-left">
            <img
              src={teacherImg}
              alt="Teaching session"
              className="h-cover rounded-2xl shadow-lg"
            />

            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg text-center hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-center mb-2">
                    {achievement.icon}
                  </div>
                  <div className="text-sm font-semibold text-gray-800">
                    {achievement.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-10 mt-4">
              My Teaching Philosophy
            </h3>

            <div className="space-y-10">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-2xl mb-2">
                    Building Strong Concepts
                  </h4>
                  <p className="text-gray-700">
                    I focus on creating a solid foundation by explaining
                    concepts clearly and ensuring students understand the 'why'
                    behind every problem.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-2 h-2 bg-green-600 rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-2xl mb-2">
                    Exam Preparation Excellence
                  </h4>
                  <p className="text-gray-700">
                    With my perfect score experience in board exams, I guide
                    students through strategic preparation and effective
                    problem-solving techniques.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-2 h-2 bg-purple-600 rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-2xl mb-2">
                    Confidence Building
                  </h4>
                  <p className="text-gray-700">
                    I believe in nurturing confidence through personalized
                    attention, regular practice, and celebrating every small
                    achievement.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-2 h-2 bg-yellow-600 rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-2xl mb-2">
                    Modern Teaching Methods
                  </h4>
                  <p className="text-gray-700">
                    I integrate technology and innovative teaching methods to
                    make learning engaging, interactive, and effective for
                    today's students.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;