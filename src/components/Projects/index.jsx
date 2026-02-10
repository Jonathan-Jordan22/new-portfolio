import { useState, useEffect } from "react";
import "./style.css";
import BackgroundLines from "../BackgroundLines";
import WorkCard from "../WorkCard";
import ScrambleText from "../ScrambleText";
import ParaWriting from "../ParaWriting";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import work1 from "../../assets/Images/work1.png";
import work2 from "../../assets/Images/work2.png";
import work3 from "../../assets/Images/work3.png";

export default function Projects() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleComplete = () => {
    setHasAnimated(true);
  };

  useEffect(() => {
    // Start animation when the component is in view
    if (inView && !hasAnimated) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const works = [
    {
      client: "RelocateReady",
      year: "2026",
      img: work1,
      title: "Turning Relocation Decisions into Data-Driven Rankings",
      detail:
      "Developed RelocateReady, a multi-user full-stack web application that helps users identify and rank global relocation destinations based on personalized preferences. Built a FastAPI backend with RESTful endpoints, relational data models, and weighted scoring algorithms, and a responsive Next.js frontend with Tailwind CSS. Implemented user authentication flows, saved-location tracking, and real-time ranking updates. Deployed the platform using Railway (backend) and Vercel (frontend), enabling production-ready scalability."
    },
    {
      client: "Skinstric Internship",
      year: "2025",
      img: work2,
      title: "Building Interactive A.I. Skin Analysis Platform",
      detail:
        'Developed "Skinstric," a responsive React web app for A.I. skin analysis. Engineered an immersive UI with features like live camera capture (getUserMedia), file uploads, and interactive data visualizations. Focused on smooth animations, state management, and seamless API integration with Axios.',
    },
    {
      client: "Ultraverse Internship",
      year: "2025",
      img: work3,
      title: "Next generation NFT Marketplace.",
      detail:
        "A modern NFT marketplace frontend built with React, featuring dynamic routing, API integration, responsive design, animated UI elements, and custom skeleton loaders. Users can browse, explore, and view detailed NFT collections and profiles in a seamless, engaging multi-page application experience.",
    },
  ];

  const opacityVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section ref={ref} className="projects" id="projects">
      <BackgroundLines />
      <div className="background--glow"></div>

      <div className="projects--grid">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={opacityVariant}
          transition={{ duration: 1, delay: 0.5 }}
          className="projects--grid--title"
        >
          <h3 className="theme--text">
            <ScrambleText shuffle delay={0.5}>
              03
            </ScrambleText>{" "}
            <span className="hash">{"//"}</span>{" "}
            <ScrambleText shuffle delay={0.5}>
              Expertise
            </ScrambleText>
          </h3>
        </motion.div>

        <div className="projects--grid--content">
          <div className="projects--grid--content--heading">
            <h2>
              <ParaWriting stagger={0.08} text={"My "} sec={"Works"} />
            </h2>
          </div>
          <div className="projects--grid--content--works">
            {works.map((item, index) => {
              return (
                <WorkCard
                  item={item}
                  key={index}
                  // delay={0.1 * index + 1}
                  // controls={controls}
                />
              );
            })}
          </div>
        </div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={opacityVariant}
          transition={{ duration: 1, delay: 1 }}
          onAnimationComplete={() => handleComplete()}
          className="projects--grid--detail"
        >
          <p className="theme--detail theme--detail--adaptive">
            <ScrambleText delay={1}>
              Discover a curated portfolio of projects where each line of code
              tells a story of problem-solving, creativity, and technical
              finesse.
            </ScrambleText>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
