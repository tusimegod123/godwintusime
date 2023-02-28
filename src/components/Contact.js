import React from "react";
import * as emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { Form, Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "../about.css";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

export default function Contact() {
  //   const [state, setState] = useState("");
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
    <div id="contact-me">
    <motion.div
      animate={{ x: 5 }}
      transition={{ ease: "easeOut", duration: 3 }}
    >
      <div className="container" id="lets-talkk">
        <div className="row">
          <motion.div className="col-md-12">
            <h3>Let's Talk</h3>
            <p className="paragraph">
              I am interested in new opportunities – incredibly ambitious or
              large projects. However, if you have other requests or questions,
              don’t hesitate to contact me using the below form either.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <motion.div className="col-md-6" id="contact">
            <h3 id="skill1">Contact info:</h3>
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
            id="contact"
          >
            <h3 id="skill1">Direct Message:</h3>
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
      <div className="container">
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
      </div>
    </motion.div>
    </div>
  );
}
