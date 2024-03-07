import "./links.scss";
import { motion } from "framer-motion";

function Links() {
  const items = ["Homepage", "About", "Skills", "Projects", "Contacts"];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="links"
    >
      {items.map((item) => (
        <a className="item" href={`#${item}`} key={item}>
          {item}
        </a>
      ))}
    </motion.div>
  );
}

export default Links;
