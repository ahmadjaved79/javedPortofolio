import React, { useState, useRef, useEffect } from 'react';

import { motion } from 'framer-motion';

const Certificates = () => {
  const [selectedCategory, setSelectedCategory] = useState('course');
  const [paused, setPaused] = useState(false);
  const [enlargedCert, setEnlargedCert] = useState(null);
  const carouselRef = useRef(null);

  const categories = [
    { key: 'course', label: '📜 Mastery Badges' },
    { key: 'podcast', label: '🎙️ Podcast Achievements' },
    { key: 'workshop', label: '🛠️ Workshop Completions' },
    { key: 'other', label: '🏆 Other Recognitions' }
  ];

  const certificates = {
    course: [
      { title: 'Build Your own static website', authority: 'NXTWAVE ACADEMY', date: 'JAN 2023', image: 'https://res.cloudinary.com/dcmt06mac/image/upload/v1742218935/nxtwave%20certificates/Build%20Your%20static%20website%20Completion%20certifiacte.jpg' },
      { title: 'Build your own dynamic website', authority: 'NXTWAVE ACADEMY', date: 'OCT 2023', image: 'https://res.cloudinary.com/dcmt06mac/image/upload/v1742219532/nxtwave%20certificates/dynamicDevelopment_a5fpel.jpg' },
      { title: 'Responsive Web Designing using flexbox', authority: 'NXTWAVE ACADEMY', date: 'DEC 2023', image: 'https://res.cloudinary.com/dcmt06mac/image/upload/v1742219547/nxtwave%20certificates/css_using_flexbox_ulzkcf.jpg' },
      { title: 'Introduction to database', authority: 'NXTWAVE ACADEMY', date: 'OCT 2024', image: 'https://res.cloudinary.com/dcmt06mac/image/upload/v1742046284/nxtwave%20certificates/databaseCourseCompletion_sfhdme.jpg' },
      { title: 'JavaScript Essentials', authority: 'NXTWAVE ACADEMY', date: 'DEC 2023', image: 'https://res.cloudinary.com/dcmt06mac/image/upload/v1742046284/nxtwave%20certificates/javascriptEssentialsCourseCompletion_h6d1co.jpg' },
      { title: 'Responsive Website', authority: 'NXTWAVE ACADEMY', date: 'JUNE 2023', image: 'https://res.cloudinary.com/dcmt06mac/image/upload/v1742046334/nxtwave%20certificates/ResponsiveWebsiteCourseCompletion_txuifl.jpg' },
      { title: 'Developer Foundation', authority: 'NXTWAVE ACADEMY', date: 'FEB 2024', image: 'https://res.cloudinary.com/dcmt06mac/image/upload/v1742146659/nxtwave%20certificates/DeveloperFoundations_hxbeyt.png' },

    ],
    podcast: [
      { title: 'Podcast1', authority: 'NXTWAVE ACADEMY', date: 'JAN 2024', image: 'https://res.cloudinary.com/dcmt06mac/image/upload/v1742046285/nxtwave%20certificates/podcast1_kzfw2m.jpg' }
    ],
    workshop: [
      { title: 'Generative Ai2.0 participation', authority: 'NXTWAVE ACADEMY', date: 'SEP 2024', image: 'https://res.cloudinary.com/dcmt06mac/image/upload/v1742046156/nxtwave%20certificates/attendmegaworkshop_jruh84.png' },
      { title: 'Generative Ai2.0 Completion', authority: 'NXTWAVE ACADEMY', date: 'SEP 2024', image: 'https://res.cloudinary.com/dcmt06mac/image/upload/v1742046247/nxtwave%20certificates/completionmegaworkshop_qeal21.png' },
      { title: 'Generative Ai participation', authority: 'NXTWAVE ACADEMY', date: 'AUG 2023', image: 'https://res.cloudinary.com/dcmt06mac/image/upload/v1742046357/nxtwave%20certificates/aiworkshop1_pe8pmp.jpg' },
      { title: 'Generative Ai completion', authority: 'NXTWAVE ACADEMY', date: 'AUG 2023', image: 'https://res.cloudinary.com/dcmt06mac/image/upload/v1742046278/nxtwave%20certificates/AiWorkshopCompletion_oqd0yb.jpg' },
      { title: 'Data Analyst Completion', authority: 'NXTWAVE ACADEMY', date: 'JAN 2024', image: 'https://res.cloudinary.com/dcmt06mac/image/upload/v1742046332/nxtwave%20certificates/dataAnalystWorkshopCompletion_t5pb01.jpg' },
      { title: 'Data Analyst Participation', authority: 'NXTWAVE ACADEMY', date: 'JAN 2024', image: 'https://res.cloudinary.com/dcmt06mac/image/upload/v1742046282/nxtwave%20certificates/dataAnalystWorkshop_hqntav.jpg' },
      { title: 'Ethical Hacking Participation', authority: 'NXTWAVE ACADEMY', date: 'OCT 2023', image: 'https://res.cloudinary.com/dcmt06mac/image/upload/v1742046282/nxtwave%20certificates/cybersecurityWorkshopParticipation_gx1tvz.jpg' },
      { title: 'Ethical Hacking Completion', authority: 'NXTWAVE ACADEMY', date: 'OCT 2023', image: 'https://res.cloudinary.com/dcmt06mac/image/upload/v1742046281/nxtwave%20certificates/cybersecurityWorkshopCompletion_b4mltq.jpg' },
      { title: 'AWS Cloud Computing', authority: 'ALIET', date: 'SEP 2024', image: 'https://res.cloudinary.com/dcmt06mac/image/upload/v1742054075/IMG_20250315_211520_oq8yrr.jpg' },
    ],
    other: [
      { title: 'CodeStar Badge', authority: 'NXTWAVE ACADEMY', date: 'Mar 2024', image: 'https://res.cloudinary.com/dcmt06mac/image/upload/v1742046331/nxtwave%20certificates/codeStartBadge_si8i5r.jpg' },
      { title: 'RCB Appreciations', authority: 'NXTWAVE ACADEMY', date: 'Mar 2024', image: 'https://res.cloudinary.com/dcmt06mac/image/upload/v1742046287/nxtwave%20certificates/RcbAppreciations_al29sd.jpg' },
      { title: 'Consistency Badge', authority: 'NXTWAVE ACADEMY', date: 'Mar 2024', image: 'https://res.cloudinary.com/dcmt06mac/image/upload/v1742046280/nxtwave%20certificates/consistencyBadge_hhwbcx.jpg' },
      { title: 'NXTCode Challenge21', authority: 'NXTWAVE ACADEMY', date: 'Mar 2024', image: 'https://res.cloudinary.com/dcmt06mac/image/upload/v1742046279/nxtwave%20certificates/codeChallengeParticipation_wadzvz.jpg' },
      { title: 'NXTCode 7 Under 7 Completion', authority: 'NXTWAVE ACADEMY', date: 'Mar 2024', image: 'https://res.cloudinary.com/dcmt06mac/image/upload/v1742046244/nxtwave%20certificates/nxtcode7under7completion_an2ap6.png' },
      { title: 'NXTCode 7 Under 7 participation', authority: 'NXTWAVE ACADEMY', date: 'Mar 2024', image: 'https://res.cloudinary.com/dcmt06mac/image/upload/v1742046244/nxtwave%20certificates/nxtcode7under7participate_drqmxh.png' },
      { title: 'Paper Presentation', authority: 'ALIET', date: 'SEP 2024', image: 'https://res.cloudinary.com/dcmt06mac/image/upload/v1742054087/IMG_20250315_211952_o1mhss.jpg' },
      { title: 'Hunt the Bug', authority: 'SRKIT', date: 'FEB 2025', image: 'https://res.cloudinary.com/dcmt06mac/image/upload/v1742054083/IMG_20250315_210707_z4qzoj.jpg' },
      { title: 'Code Clash', authority: 'SRKIT', date: 'FEB 2025', image: 'https://res.cloudinary.com/dcmt06mac/image/upload/v1742054081/IMG_20250315_210920_imogeo.jpg' },
      { title: 'Brain Blitz', authority: 'SRKIT', date: 'FEB 2025', image: 'https://res.cloudinary.com/dcmt06mac/image/upload/v1742054082/IMG_20250315_210840_jqelr9.jpg' },
      { title: 'Web Verse', authority: 'SRKIT', date: 'FEB 2025', image: 'https://res.cloudinary.com/dcmt06mac/image/upload/v1742054078/IMG_20250315_210943_tu1mny.jpg' },
      { title: 'Digital Dreamscape', authority: 'DIET', date: 'MAR 2025', image: 'https://res.cloudinary.com/dcmt06mac/image/upload/v1742054077/IMG_20250315_211251_hbnz0v.jpg' },
      { title: 'Finger Fly', authority: 'DIET', date: 'MAR 2025', image: 'https://res.cloudinary.com/dcmt06mac/image/upload/v1742054077/IMG_20250315_211404_blxn5a.jpg' },
      { title: 'Bug Free Buttle', authority: 'SRKIT', date: 'MAR 2025', image: 'https://res.cloudinary.com/dcmt06mac/image/upload/v1742054077/IMG_20250315_211008_swwavb.jpg' },

    ]
  };

  useEffect(() => {
    if (!paused) {
      const interval = setInterval(() => {
        if (carouselRef.current) {
          carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [paused]);

  const handleClick = (cert) => {
    setPaused(true);
    setEnlargedCert(cert);
  };

  const handleClose = () => {
    setEnlargedCert(null);
    setPaused(false);
  };

  return (
    <div className="flex flex-col items-center p-4 bg-black text-white min-h-screen relative w-full">
      <h2 className="text-2xl font-bold mb-4 text-center md:text-4xl">Verified Expertise: My Achievements in Tech</h2>
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {categories.map((category) => (
          <button
            key={category.key}
            className={`px-3 py-2 border rounded text-sm md:text-base ${selectedCategory === category.key ? 'bg-blue-500 text-white' : 'bg-gray-700 text-white'}`}
            onClick={() => setSelectedCategory(category.key)}
          >
            {category.label}
          </button>
        ))}
      </div>
      <div className="relative w-full max-w-4xl overflow-hidden">
        <motion.div ref={carouselRef} className="flex space-x-4 overflow-x-auto scrollbar-hide p-2">
          {certificates[selectedCategory].map((cert, index) => (
            <motion.div 
              key={index} 
              className="min-w-[300px] bg-gray-800 shadow-lg rounded-lg p-4 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleClick(cert)}
            >
              <img src={cert.image} alt={cert.title} className="w-full h-40 object-cover rounded-md" />
              <p className="text-center mt-2 font-semibold text-white">{cert.title}</p>
              <p className="text-center text-gray-400">{cert.authority}</p>
              <p className="text-center text-gray-500">{cert.date}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {enlargedCert && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center p-4" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }} 
          onClick={handleClose}
        >
          <motion.div 
            className="bg-gray-900 p-4 rounded-lg shadow-lg max-w-3xl w-full" 
            initial={{ scale: 0.5 }} 
            animate={{ scale: 1 }} 
            exit={{ scale: 0.5 }}
          >
            <img src={enlargedCert.image} alt={enlargedCert.title} className="w-full h-auto rounded-md" />
            <p className="text-center mt-2 text-white text-xl font-bold">{enlargedCert.title}</p>
            <p className="text-center text-gray-400">{enlargedCert.authority}</p>
            <p className="text-center text-gray-500">{enlargedCert.date}</p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Certificates;
