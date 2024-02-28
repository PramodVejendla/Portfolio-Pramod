import React from "react";
import { motion } from "framer-motion";

function Links() {
  const items = ["Homepage", "Resume", "Projects", "About", "Contact"];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {items.map((item) => (
        <a
          style={{ paddingLeft: 15, paddingRight: 15 }}
          href={`#${item}`}
          key={item}
        >
          {item}
        </a>
      ))}
    </motion.div>
  );
}

export default Links;
