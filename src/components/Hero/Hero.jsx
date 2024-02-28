import { motion } from "framer-motion";
import "./hero.scss";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
  slidingText: {
    x: -1500,
    opacity: 1,
    transition: {
      duration: 20,
      repeat: Infinity,
    },
  },
};

function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>PRAMOD VEJENDLA</motion.h2>
          <motion.h1 variants={textVariants}>
            M E R N Stack Web Developer
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>Latest Work</motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="./scroll.png"
            alt="scroll"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingtextContainer"
        variants={textVariants}
        initial="initial"
        animate="slidingText"
      >
        React.js Node.js Next.js MongoDB
      </motion.div>
      <div className="imageContainer">
        <img src="./hero.png" alt="hero" />
      </div>
    </div>
  );
}

export default Hero;
