import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/Image.jpg'; // ✅ Ensure it's the correct path

function About() {
  return (
    <motion.section
      id="about"
      className="py-20 px-6 bg-transparent text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src={profileImage}
            alt="Eman Rafique"
            className="rounded-full border-4 border-pink-400 shadow-2xl object-cover"
            style={{
              width: '180px',
              height: '180px',
              objectFit: 'cover',
              objectPosition: 'top center',
            }}
          />
        </div>

        {/* About Text */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-pink-300 mb-6 drop-shadow-lg">
            About Me
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-white/90">
            <span className="text-yellow-300 font-semibold">Eman Rafique</span>, a <strong>BSCS (AI)</strong> grad passionate about building smart, impactful tech solutions.
            I specialize in <span className="text-teal-300 font-semibold">Machine Learning</span>, <span className="text-indigo-300 font-semibold">Python</span>, and full-stack development with <span className="text-green-300 font-semibold">React Native</span> & <span className="text-purple-300 font-semibold">Flask</span>.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-white/90">
            💡 I love solving real-world problems using AI — from smart trash systems to QR-based tracking tools, I’ve worked on projects that aim to make life smarter and greener.
          </p>
          <p className="text-lg leading-relaxed text-white/90">
            🚀 I'm now open to exciting <span className="text-pink-400 font-semibold">internship or job opportunities</span> where I can continue growing and contribute to innovative projects.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
