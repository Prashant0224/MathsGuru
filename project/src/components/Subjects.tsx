import React from 'react';
import { Calculator, Atom, Code, Brain } from 'lucide-react';

const Subjects = () => {
  const subjects = [
    {
      icon: <Calculator className="h-12 w-12 text-blue-600" />,
      title: "Mathematics",
      subtitle: "Classes 7th to 12th",
      description: "Comprehensive coverage of all mathematical concepts with special focus on board exam preparation for classes 9th, 10th, 11th, and 12th.",
      topics: ["Algebra", "Geometry", "Trigonometry", "Calculus", "Statistics", "Probability"],
      color: "blue"
    },
    {
      icon: <Atom className="h-12 w-12 text-green-600" />,
      title: "Science",
      subtitle: "Classes 9th & 10th",
      description: "In-depth understanding of Physics, Chemistry, and Biology with practical examples and board exam strategies.",
      topics: ["Physics", "Chemistry", "Biology", "Lab Experiments", "NCERT Solutions", "Board Prep"],
      color: "green"
    },
    {
      icon: <Code className="h-12 w-12 text-purple-600" />,
      title: "Programming Languages",
      subtitle: "Foundation to Advanced",
      description: "Learn programming from scratch with hands-on projects and real-world applications.",
      topics: ["C Programming", "C++", "Core Java", "Python", "Data Structures", "Algorithms"],
      color: "purple"
    },
    {
      icon: <Brain className="h-12 w-12 text-orange-600" />,
      title: "Advanced Topics",
      subtitle: "Cutting-edge Technologies",
      description: "Dive into the future of technology with machine learning and deep learning concepts.",
      topics: ["Machine Learning", "Deep Learning", "AI Concepts", "Python Libraries", "Data Analysis", "Projects"],
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "border-blue-200 hover:border-blue-400 bg-blue-50",
      green: "border-green-200 hover:border-green-400 bg-green-50",
      purple: "border-purple-200 hover:border-purple-400 bg-purple-50",
      orange: "border-orange-200 hover:border-orange-400 bg-orange-50"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="subjects" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Subjects I Teach
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tutoring across multiple disciplines with personalized attention and proven results
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {subjects.map((subject, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${getColorClasses(subject.color)}`}
            >
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  {subject.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{subject.title}</h3>
                  <p className="text-gray-600 font-medium">{subject.subtitle}</p>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {subject.description}
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Key Topics:</h4>
                <div className="flex flex-wrap gap-2">
                  {subject.topics.map((topic, topicIndex) => (
                    <span 
                      key={topicIndex}
                      className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-gray-200"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose My Teaching?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Success Rate in Board Exams</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">1:1</div>
                <div className="text-gray-600">Personalized Attention</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-600">Doubt Resolution Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subjects;