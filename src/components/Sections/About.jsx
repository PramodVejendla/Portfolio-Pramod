import { useRef } from "react";
import "./about.scss";
import { motion, useScroll, useTransform } from "framer-motion";

function About() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

  return (
    <div className="about" ref={ref}>
      <motion.div
        className="textContainer"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 style={{ y: y }}>About Me</motion.h1>
        <motion.p style={{ y: y }}>
          An enthusiastic and dedicated Bachelor of Computer science graduate
          with strong communication, problem-solving, and critical thinking
          abilities. <br />
          I'm an experienced professional with eight years of enriched
          experience as a Senior Consultant and Associate Software Engineer.{" "}
          <br /> I want to broaden my learning, knowledge, and skills by earning
          a Masters degree from a reputable university and working in a
          reputable position in a leading organization, contributing to the
          organization's overall success.
        </motion.p>
      </motion.div>

      <div className="stars"></div>
    </div>
  );
}

export default About;
