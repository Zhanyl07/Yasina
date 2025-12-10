import React from "react";
import { motion } from "framer-motion";
import "./BlogCom.scss";

function BlogCom() {
  return (
    <motion.div
      className="about-me"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
    >
      <h1 className="about-me-title">About Me</h1>
      <p className="about-me-text">
        I’m a Front-end Developer with a solid foundation built through six months of intensive learning.
        My previous experience as a project manager helped me understand how products are developed,
        how teams collaborate, and how to approach tasks with clarity and responsibility.
        <br /><br />
        I focus on creating clean, responsive, and user-friendly interfaces using modern tools such as
        HTML, CSS, JavaScript, React, Tailwind, SCSS, and TypeScript. I enjoy writing organized code,
        solving problems, and continuously improving my skills to contribute to real projects and grow
        as a developer.
      </p>
    </motion.div>
  );
}

export default BlogCom;