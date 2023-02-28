import React from "react";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "../about.css";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

export default function About() {
  return (
    <motion.div >
      <div className="container-fluid" id="first-container-about">
        <div className="row justify-content-center">
          <motion.div className="col-md-4">
            {/* <h3 initial={{ opacity: 100 }}>About me</h3> */}
            <br></br><br></br> <br></br><br></br>
            <p className="paragraph">
              I  am a passionate{" "}
              <a href="https://en.wikipedia.org/wiki/Web_developer">
                'Web Developer'
              </a>{" "}
              with a strong determination to learn, work, deliver and discover more about tech
              trends around the world.
            </p>
            <p className="paragraph">
            I hold a Bachelors degree in Business Administration and a second one in Information and Technology.
            </p>
            <p className="paragraph">
              Well-organized person, problem solver, & currently a{" "}
              <a href="https://frontendmasters.com/books/front-end-handbook/2018/what-is-a-FD.html">
                'Front end web Developer'{" "}
              </a>{" "}
              at <a href="https://www.refactory.ug/">Refactory Uganda</a> for
              the past one year.
            </p>
            <p className="paragraph">
              Beside work, I enjoy having fun, watching soccer & movies, associating with
              friends, After all "Life is short".
            </p>
            <p id="button-contact">
              <Button variant="primary" href="/contactme">
                Contact me
              </Button>
            </p>
          </motion.div>
        </div>
      </div>
      <br></br><br></br>
      {/* <div className="container">
        <motion.div className="row">
          <div className="col-md-12" id="next1">
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={transition}
              href="/"
              id="next"
            >
              {"<"}
            </motion.a>{" "}
            &nbsp;
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={transition}
              href="/skills"
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
