import React from 'react';
import ProjectCard from './components/ProjectCard';
import About from './components/About';
import { projects } from './data/projects';
import { Link } from 'react-scroll';
import './App.css'; // Your custom styles

function App() {
  return (
    <div className="App bg-gray-900 text-white min-h-screen">
      <Navbar />
      <Hero />

      {/* Projects Section */}
      <section id="projects" className="my-16 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">🚀 My Projects</h1>
        <div className="projects-container grid md:grid-cols-2 gap-8">
          {projects.map((proj, index) => (
            <ProjectCard key={index} {...proj} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="my-16 px-4">
        <About />
      </section>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gray-800 shadow-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-teal-400">Eman.dev</h1>
      {/* Navigation Links */}
      <ul className="flex space-x-8 text-sm text-white">
        <li>
        <a
          href="https://drive.google.com/file/d/1jfS3_YnlqVgKRymhBttgAapOoJaUHnKn/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          style={{marginRight:'40px'}}
          className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition"
        >
          Resume
        </a>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            style={{marginRight:'30px'}}
            className="cursor-pointer hover:text-teal-400 transition"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            style={{marginRight:'20px'}}
            className="cursor-pointer hover:text-teal-400 transition"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <section className="text-center mt-20 px-4">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
        Hey, I'm <span className="text-teal-400">Eman Rafique</span>
      </h2>
      <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
        Aspiring AI Engineer · React Native Dev · Python & Flask Enthusiast
      </p>
    </section>
  );
}

export default App;













// import React from 'react';
// import ProjectCard from './components/ProjectCard';
// import About from './components/About';
// import { projects } from './data/projects';
// import './App.css'; // Style your way 💅

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Hero />
      
//       {/* Projects Section */}
//       <section id="projects" className="my-16 px-4">
//         <h1 className="text-3xl font-bold text-center mb-8">🚀 My Projects</h1>
//         <div className="projects-container grid md:grid-cols-2 gap-8">
//           {projects.map((proj, index) => (
//             <ProjectCard key={index} {...proj} />
//           ))}
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="my-16 px-4">
//         <About />
//       </section>
//     </div>
//   );
// }

// function Navbar() {
//   return (
//     <nav className="flex items-center justify-between px-8 py-4 bg-gray-800 shadow-md sticky top-0 z-50">
//       <h1 className="text-2xl font-bold text-teal-400">Eman.dev</h1>
//       <ul className="flex space-x-20 text-sm text-white">
//         <li>
//           <a href="#about" className="hover:text-teal-400 transition" style={{ marginRight: '30px' }}>
//             About</a>
//         </li>
//         <li>
//           <a href="#projects" className="hover:text-teal-400 transition" style={{ marginRight: '20px' }}>Projects</a>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// function Hero() {
//   return (
//     <section className="text-center mt-20 px-4">
//       <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
//         Hey, I'm <span className="text-teal-400">Eman Rafique</span>
//       </h2>
//       <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
//         Aspiring AI Engineer · React Native Dev · Python & Flask Enthusiast
//       </p>
//       <div className="mt-8">
//         <a href="#projects" className="bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600 transition">
//           See My Work
//         </a>
//       </div>
//     </section>
//   );
// }

// export default App;