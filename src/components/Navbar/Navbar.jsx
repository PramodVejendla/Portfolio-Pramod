import React from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import Links from "./links/Links";
// import Sidebar from "../SIdebar/Sidebar";

function Navbar() {
  return (
    <div className="navbar">
      {/* <Sidebar /> */}
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          WELCOME
        </motion.span>
        <Links />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="social"
        >
          <a href="#">
            <img src="./facebook.png" alt="facebook" />
          </a>
          <a href="#">
            <img src="./instagram.png" alt="instagram" />
          </a>
          <a href="#">
            {" "}
            <img src="./youtube.png" alt="youtube" />
          </a>
          <a href="#">
            {" "}
            <img src="./dribbble.png" alt="dribbble" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Navbar;
