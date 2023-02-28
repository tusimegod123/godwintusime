import React from "react";
import { motion } from "framer-motion";
import Typical from "react-typical";
import { ProgressBar } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import * as emailjs from "emailjs-com";
import ScrollToTop from "react-scroll-to-top";
import "../home.css";
import Skills from "./Skills";
import * as mdb from "mdb-ui-kit"; // lib

// import { Link } from "react-router-dom";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

export default function Home() {
  const now = 85;
  const js = 70;
  const react = 65;
  const git = 80;
  const mongo = 55;
  const node = 60;

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_7pgatdz",
        "template_xg55b8e",
        event.target,
        "user_uzd88AsOBp8NFOwHdJAjA"
      )
      .then((window.location = "/sucess"))
      .catch();
  };
  return (
    <>
      <ScrollToTop smooth color="#1bd1b9" id="top" />
      <motion.div className="container" id="first-container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="hhhhhhhhhhhh">Hello,I am Godwin Tusime!</h3>
            <p className="ppppppppp">
              I{" "}
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                  "am a Backend Developer 👌!",
                  1000,
                  "am a Front End developer 👌!",
                  1000,
                  "build Enterprise Applications 👌!",
                  1000,
                ]}
              />
            </p>
            <div id="favorite-qoute" className=" d-none d-lg-block d-lg-none">
              <h4 className="favoriteqoute">Favorite Qoute:</h4>
              <br />
              <h4 className="hhhhhhhhhh">"Whatever you are, be a good one"</h4>
            </div>
          </div>
          {/* <div className="col-md-12 " className="d-none d-sm-block" id="next">
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={transition}
              href="/about"
              id="next"
            >
              {">"}
            </motion.a>
          </div> */}
        </div>
      </motion.div>

      {/* About me starts here */}
      <div
        className=" d-block d-sm-none"
        uk-scrollspy="cls: uk-animation-slide-left; repeat: true"
        id="about-me"
      >
        <motion.div className="animated bounce infinite">
          <div className="container-fluid" id="first-container-abou">
            <div className="row ">
              <motion.div className="col-md-10">
                <h3 initial={{ opacity: 100 }} id="about">
                  About me
                </h3>
                <p id="paragraph">
                  I am a passionate{" "}
                  <a href="https://en.wikipedia.org/wiki/Web_developer">
                    'Web Developer'
                  </a>{" "}
                  with a strong determination to learn, work, deliver and
                  discover more about tech trends around the world.
                </p>
                <p id="paragraph">
                  I hold a Bachelors degree in Business Administration and a
                  second one in Information and Technology.
                </p>
                <p id="paragraph">
                  Well-organized person, problem solver, & currently a{" "}
                  <a href="https://frontendmasters.com/books/front-end-handbook/2018/what-is-a-FD.html">
                    'Front end web Developer'{" "}
                  </a>{" "}
                  at <a href="https://www.refactory.ug/">Refactory Uganda</a>{" "}
                  for the past one year.
                </p>
                <p id="paragraph">
                  Beside work, I enjoy having fun, watching soccer & movies,
                  associating with friends, After all "Life is short".
                </p>
                <p id="button-contact">
                  <Button variant="primary" href="/contactme">
                    Contact me
                  </Button>
                </p>
              </motion.div>
            </div>
          </div>
          <br></br>
          <br></br>
        </motion.div>
      </div>

      {/* My Skills */}
      <div
        className=" d-block d-sm-none"
        uk-scrollspy="cls: uk-animation-slide-right; repeat: true"
      >
        <motion.div
          // animate={{ x: 5 }}
          // transition={{ ease: "easeOut", duration: 3 }}
          id="skills"
        >
          <div className="container" id="exprience-container">
            <div className="row">
              <motion.div className="col-md-6" id="">
                <h3 id="exprience">Exprience:</h3>
                <h3 id="tech-skills">Tech Skills</h3>
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
                <h3 id="skill1">Soft Skills</h3>
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
        </motion.div>
      </div>

      {/* Contact me */}
      <div
        className=" d-block d-sm-none"
        uk-scrollspy="cls: uk-animation-slide-left; repeat: true"
        id="lets-talk"
      >
        <motion.div
        // animate={{ x: 5 }}
        // transition={{ ease: "easeOut", duration: 3 }}
        >
          <div className="container">
            <div className="row">
              <motion.div className="col-md-12">
                <h3 id="let">Let's Talk</h3>
                <p id="paragraph">
                  I am interested in new opportunities – incredibly ambitious or
                  large projects. However, if you have other requests or
                  questions, don’t hesitate to contact me using the below form
                  either.
                </p>
              </motion.div>
            </div>
          </div>

          <div className="container" id="contact-info">
            <div className="row">
              <motion.div className="col-md-6" id="contact">
                <h3 id="contact" style={{ textAlign: "left" }}>
                  Contact info:
                </h3>
                <span>
                  <p>
                    Telephone:{" "}
                    <a href="tel:+256701398916" id="phone-link">
                      {" "}
                      +2567013938916
                    </a>
                  </p>
                </span>
                <p>
                  Email:{""}
                  &nbsp; &nbsp;
                  <a href="mailto: tusimegodwinmarch2013@gmail.com">
                    {" "}
                    Click here to send an email
                  </a>
                </p>

                <p>Address:</p>
                <p>Kampala, Uganda</p>
              </motion.div>

              <motion.div
                // animate={{ x: 10 }}
                transition={{ ease: "easeOut", duration: 20 }}
                className="col-md-6"
                id="contact-messege"
              >
                <h3 id="direct-message">Direct Message:</h3>
                <Form onSubmit={handleSubmit} className="contact-form">
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label id="form-label">Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        required={true}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label id="form-label">Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Your email"
                        name="email"
                        required={true}
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Group controlId="formGridAddress1">
                    <Form.Label id="form-label">Subject</Form.Label>
                    <Form.Control
                      placeholder="Subject"
                      name="subject"
                      required={true}
                    />
                  </Form.Group>

                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label id="form-label">Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="message"
                      required={true}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </motion.div>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          {/* <div className="container">
            <motion.div className="row">
              <div className="col-md-12" id="next11">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  transition={transition}
                  href="/portfolio"
                  id="next"
                >
                  {"<"}
                </motion.a>{" "}
              </div>
            </motion.div>
          </div> */}
        </motion.div>
      </div>
    </>
  );
}
