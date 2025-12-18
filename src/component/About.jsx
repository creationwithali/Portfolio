import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="text-white py-16 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Side - Image */}
        <div className="flex justify-center md:w-1/2">
          <img
            src="/code.jpg"
            alt="Web Developer at work"
            className="w-64 h-64 md:w-96 md:h-96 rounded-2xl shadow-lg object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-500"
          />
        </div>

        {/* Right Side - Text */}
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h2 className="text-4xl font-bold text-[#38BDF8]">About Me</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            Hi, I'm <span className="font-semibold text-white">Ali Moavia</span>, a passionate
            <span className="text-[#38BDF8] font-medium"> Web & App Developer</span> focused on
            building modern, responsive, and high-performance web and mobile applications.
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            I work with both frontend and backend technologies — including
            <span className="text-[#34D399] font-medium">
              {' '}React.js, Next.js, React Native, Python, Django, Node.js, Express.js, Tailwind CSS, and MongoDB
            </span>.
            I also build mobile apps using <span className="text-[#61DAFB] font-medium">React Native & Expo</span> for Android & iOS.
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            My goal is to deliver fast, secure, and scalable web & mobile solutions that help
            businesses grow and succeed online.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
