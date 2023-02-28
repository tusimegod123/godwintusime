import React from "react";
// import { Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "../about.css";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

export default function Portfolio() {
  return (
    <motion.div>
      <div className="container-fluid" id="first-container-about">
        <div className="row justify-content-center">
          <motion.div
            animate={{ x: 10 }}
            transition={{ duration: 2 }}
            className="col-md-10"
          >
            <p className="contact">I am still updating this portfolio page kidly check it later</p>
          </motion.div>

          <motion.div className="col-md-2"></motion.div>
        </div>
      </div>
      <div className="container">
        <motion.div className="row">
          <div className="col-md-12" id="next12">
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={transition}
              href="/skills"
              id="next"
            >
              {"<"}
            </motion.a>{" "}
            &nbsp;
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={transition}
              href="/contactme"
              id="next"
            >
              {">"}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
