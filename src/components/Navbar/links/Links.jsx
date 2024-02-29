import React from "react";
import { motion } from "framer-motion";

function Links() {
  const items = ["Homepage", "About", "Skills", "Projects", "Contact"];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundColor: "rgba(64, 64, 64, 0.5)",
        borderRadius: "50px",
        padding: "16px 24px",
      }}
    >
      {items.map((item) => (
        <a
          style={{
            padding: "0px 24px",
            fontSize: "18px",
          }}
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
