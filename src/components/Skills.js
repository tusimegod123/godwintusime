import React from "react";
import { motion } from "framer-motion";
import { ProgressBar } from "react-bootstrap";
import "../about.css";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

export default function Skills() {
  const now = 85;
  const js = 70;
  const react = 65;
  const git = 80;
  const mongo = 55;
  const node = 60;

  //  render(progressInstance);
  return (
    <motion.div
      animate={{ x: 5 }}
      transition={{ ease: "easeOut", duration: 3 }}
    >
      <div className="container" id="first-container-about">
        <div className="row">
          <motion.div className="col-md-6" id="teq-skills">
            <h3 id="skill1">Tech Skills</h3>
            <p>
              HTML & CSS <ProgressBar now={now} label={`${now}%`} />
            </p>

            <p>
              React Bootstrap, Bootstrap and Material ui{" "}
              <ProgressBar now={now} label={`${now}%`} />
            </p>
            <p>
              JavaScript
              <ProgressBar now={js} label={`${js}%`} />
            </p>
            <p>
              React Js
              <ProgressBar now={react} label={`${react}%`} />
            </p>
            <p>
              Node Js, Expresss js
              <ProgressBar now={node} label={`${node}%`} />
            </p>
            <p>
              Mongodb & Mysql database
              <ProgressBar now={mongo} label={`${mongo}%`} />
            </p>
            <p>
              Github
              <ProgressBar now={git} label={`${git}%`} />
            </p>
            <p>
              Visit my{" "}
              <a href="https://www.linkedin.com/in/tusime-godwin-91211a84/">
                linkedin profile
              </a>{" "}
              for more details
            </p>
          </motion.div>

          <motion.div className="col-md-6" id="skill1s">
            <h3 id="soft-skills">Soft Skills</h3>
            <p>Communication</p>
            <p>Critical Thinking</p>
            <p>Creativity</p>
            <p>
              Visit my{" "}
              <a href="https://www.linkedin.com/in/tusime-godwin-91211a84/">
                linkedin profile
              </a>{" "}
              for more details
            </p>
          </motion.div>
        </div>
      </div>
      <br></br>
      <br></br>
      {/* <div className="container">
        <motion.div className="row">
          <div className="col-md-12" id="next14">
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={transition}
              href="/about"
              id="next"
            >
              {"<"}
            </motion.a>{" "}
            &nbsp;
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={transition}
              href="/portfolio"
              id="next"
            >
              {">"}
            </motion.a>
          </div>
        </motion.div>
      </div> */}
    </motion.div>
  );
}
