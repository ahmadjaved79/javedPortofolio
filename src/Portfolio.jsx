import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "react-modal";

const projects = [
  {
    title: "EQuizecet",
    description:" This project is designed to help students prepare for the ECET exam with quizzes focused on MPC (Mathematics, Physics, Chemistry) subjects. The quizzes are categorized by difficulty levels, including easy, medium, and hard, allowing students to practice according to their knowledge level.",
    img: "https://res.cloudinary.com/dcmt06mac/image/upload/v1742146680/nxtwave%20certificates/equiz_frnxl6.png",
    github_Frontend: "https://github.com/ahmadjaved79/EQuiz/tree/main/final",
    github : "",
    live_link : "https://equiz-ecet-git-main-shaikahmadjaveds-projects.vercel.app/",  
  },
  {
    title: "Student Dashboard",
    description: "",
    img: "https://media-hosting.imagekit.io//e7528612113f4325/Screenshot%202025-02-10%20155811.png?Expires=1833791377&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=JA1VDY5PS7buhOAbQmZfpiBS4vveYgNqNZcxM6sX001xatrrsDhnvbR6fKpdBwW8wKBChuVij20Lr0pOfxS1lKiU-QM44aCttPY~FhIP4ND53J0LIYqjG5QnIVATQMTeqlzAMIh2C9uz08L-DIwNXbDsj7ZtRgbszj00Pa95~rY4TViRYN6xvQ08PqIZghitIuywRGChkFqf96ePbrPonJ3wuvO9QPNsCriqIA90D3ytDzu3MxhFwOP3dExXDYEImV9iMUYsjbPsU2WLGR2SvWN8ZQrcZbKo1JHsvO0gBjY01QdhT0H7auVbOglhLFwpc1aimht9vUUxe9Dkcf3E~w__",
    github_Frontend: "https://github.com/ahmadjaved79/studentDashboardAdminPanel",
    github_Backend : "https://github.com/ahmadjaved79/studentDashboard",
    live_link : "https://studentresults-adminpanel.netlify.app/",
  },


  {
    title: "Protein Food",
    description: "",
    img: "https://media-hosting.imagekit.io//bb8ab077521d4076/Screenshot%202025-02-10%20161314.png?Expires=1833792225&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=1IkMmTbrQVuJ-BWgS88bSLxMUO49Jy7OVlIS1FsuVpnQaBWqVpqQ8U03o-Ig-vzqSM6rjieyjTjbW8H1v-1qVpOgVQA4SHrsGsDtydh1ADLqfem6xC81tk56Mpsw-4HVvXByaT3ehuRwZlVDM7qsWcw0cgOtTEMi5mGfzTa~nRNuM~UmKaL6UVxeGSGEYIoKu7JSL5Y9v39c5Yq57wmJbe4kQV1jgkfh7dyKFDggP8x4r2AQpGhTCTZPMlhKNItCtpx8h5lJCukGGjQP7JoDkiF0Y75f8PtRIlDzmSLK~cZJj32daR-V8rexsETRz46RqRImTbaNTa4dpdqmqUz3qw__",
    github: "",
    github_Frontend: "https://github.com/mahendra2821/proteinpro",
    live_link : "https://calm-salamander-111c46.netlify.app/",
  },


  {
    title: "Nostra clothing ",
    description: "",
    img: "https://media-hosting.imagekit.io//8f5ee27dc4d748ff/Screenshot%202025-02-10%20162500.png?Expires=1833792943&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=rcWgKonNdKtTtmwB3eGMEwQmc1LjUoZUIlcooesCtO0PFtn-emVbnoPfRw5OfgUqaobJ9luFOsdFcMmdL1rYuW~tl9rlN2ehvmf37FLsi9vKjgPvtpI2kYvgnpBb5OEG0ejpNXuQIQnJPXIL0iuIyBvcr1y0P9z4YwCkvmQWCcgtL5yq~jKS4WiDZCfnzvJ2T8wyNBR1ToalKeUubWd4esR8MiOgSQ4IZ6fyBQR5a6yCX16116zlVAoIAG9iqYemeerK2fT95VCMV2mGK6gkqwvr-MUK~5qRtdf--vIcQghpxjpeqVYG-flsUunxR8L0r8ZDT~azymNbnTpXFVJ7AQ__",
    github: "",
    github_Frontend: "https://github.com/mahendra2821/demo",
    live_link : "https://dulcet-semifreddo-1a4ddf.netlify.app/",
  },
  {
    title: "Hospital Management",
    description: "",
    img: "https://media-hosting.imagekit.io//1751bf7ff4824938/Screenshot%202025-02-10%20215602.png?Expires=1833812853&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=0qOVyAtHWrNyK3galo7qXEqVc7R2gQMs7cX3reWvxXhfNJ~V2efCIWyhy-I44KK7Uva4eW3wqgM6cN6vWoCPIp4YkG741zbKNKKcUPUHLkZDlrEGdbkdev4p56pckz7w8i-vYuYvJOyFBvvzIRAlXBkcpd6gbiZo89AhjCV6nlxdn9O4eRHOk8OQ-Ilh~K6nyUIBoL6eqAk6jCjpmyRfLi1SA4jU0W8yxozB~AnCv830CPuqARJf10HgoGDDO5PvUoLymNVFpQ~K7DIQCMR6RcMmhL4HkcAKbODOA-9iai7PWwoFH8Z~vnZ9TdqJMGoby1vy~qauJsCHsKhlHkqNGw__",
    github: "",
    github_Frontend: "https://github.com/mahendra2821/Gydocare_01",
    live_link : "https://dainty-syrniki-aed4af.netlify.app/",  },
];

Modal.setAppElement("#root");

const Portfolio = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (

 
    <section id="projects" className="py-16 bg-black">
      <h2 className="text-4xl font-bold text-center text-white mb-8">
          Projects
        </h2>
      <div className="container mx-auto relative flex flex-col items-center">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-2 bg-blue-500 h-full"></div>

        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`relative flex items-center w-full max-w-4xl my-12 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800 shadow-lg rounded-lg p-6 w-80 cursor-pointer"
              onClick={() => openModal(project)}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-xl font-bold text-white mt-4">{project.title}</h3>
              <p className="text-gray-300 text-sm">{project.description}</p>
              <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg">
                View Project
              </button>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80"
      >
        {selectedProject && (
          <div className="bg-gray-900 p-6 rounded-lg text-center max-w-lg">
            <h2 className="text-2xl font-bold text-white mb-4">{selectedProject.title}</h2>
            <img
              src={selectedProject.img}
              alt={selectedProject.title}
              className="w-full h-60 object-cover rounded-md mb-4"
            />
            <p className="text-gray-300 mb-4">{selectedProject.description}</p>
            <a
              href={selectedProject.github_Frontend}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 bg-blue-600 text-white rounded-lg mb-4"
            >
              View on GitHub FrontEnd 
            </a>
            <a
              href={selectedProject.github_Backend}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 bg-blue-600 text-white rounded-lg mb-4"
            >
              View on GitHub Backend 
            </a>
            <a
              href={selectedProject.live_link}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 bg-green-600 text-white rounded-lg mb-4"
            >
              View on Live
            </a>
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-red-500 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Portfolio;


