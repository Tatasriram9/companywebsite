import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import TeechStyle from "../assets/css/OurTech.module.css";
import Java from "../assets/images/java.jpg";
import Python from "../assets/images/Python.jpg";
import Testing from "../assets/images/Testing.jpg";
import Marketing from "../assets/images/Marketing.jpg";
import Business from "../assets/images/Business.jpg";
import Frontend from "../assets/images/Frontend.jpg";
import UI from "../assets/images/UI.jpg";
import Devops from "../assets/images/Devops.jpg";
import { BsArrowUpRightCircle } from "react-icons/bs";
const OurTechonoliges = () => {
  return (
    <div className={TeechStyle.teachMain}>
      <Container>
        <h1 className="text-center mt-5">Our Technologies</h1>
        <Row>
          <Col>
            <div class={TeechStyle.techcontainer}>
              <div class={TeechStyle.techfront}>
                <img
                  src={UI}
                  alt="UI/UX Image "
                  className="img-fluid  "
                  style={{
                    zIndex: "-1",
                    position: "absolute",
                    left: "0px",
                    borderRadius: "10px",
                  }}
                />
                <h5 className={TeechStyle.tittleTech}>
                  UI/UX{" "}
                  <BsArrowUpRightCircle className="ms-5 fs-1 ps-2 text-primary" />
                </h5>
              </div>
              <div class={TeechStyle.techback}>
                <h3 className="mt-2 fs-5 text-decoration-underline">UI/UX</h3>
                <p className="mt-3">
                  Designs user-friendly interfaces for websites and apps,
                  conducts user research, and creates wireframes to enhance user
                  satisfaction and engagement.
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div class={TeechStyle.techcontainer}>
              <div class={TeechStyle.techfront}>
                <img
                  src={Frontend}
                  alt="UI/UX Image "
                  className="img-fluid"
                  style={{
                    zIndex: "-1",
                    position: "absolute",
                    left: "0px",
                    borderRadius: "10px",
                  }}
                />
                <h5 className={TeechStyle.tittleTech}>
                  Frontend{" "}
                  <BsArrowUpRightCircle className="ms-5 fs-1 ps-2 text-primary" />
                </h5>
              </div>
              <div class={TeechStyle.techback}>
                <h3 className="mt-2 fs-5 text-decoration-underline">
                  Frontend
                </h3>
                <p className="mt-3">
                  Creates responsive, interactive web interfaces using HTML,
                  CSS, and JavaScript, ensuring seamless user experiences and
                  aligning with business objectives.
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div class={TeechStyle.techcontainer}>
              <div class={TeechStyle.techfront}>
                <img
                  src={Java}
                  alt="UI/UX Image "
                  className="img-fluid"
                  style={{
                    zIndex: "-1",
                    position: "absolute",
                    left: "0px",
                    borderRadius: "10px",
                  }}
                />
                <h5 className={TeechStyle.tittleTech}>
                  Java
                  <BsArrowUpRightCircle className="ms-5 fs-1 ps-2 text-primary" />
                </h5>
              </div>
              <div class={TeechStyle.techback}>
                <h3 className="mt-2 fs-5 text-decoration-underline">Java</h3>
                <p className="mt-3">
                  Builds scalable, efficient Java applications, collaborating
                  with teams to deliver reliable, high-performing solutions
                  using frameworks like Spring and Hibernate.
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div class={TeechStyle.techcontainer}>
              <div class={TeechStyle.techfront}>
                <img
                  src={Python}
                  alt="UI/UX Image "
                  className="img-fluid"
                  style={{
                    zIndex: "-1",
                    position: "absolute",
                    left: "0px",
                    borderRadius: "10px",
                  }}
                />
                <h5 className={TeechStyle.tittleTech}>
                  Python{" "}
                  <BsArrowUpRightCircle className="ms-5 fs-1 ps-2 text-primary" />
                </h5>
              </div>
              <div class={TeechStyle.techback}>
                <h3 className="mt-2 fs-5 text-decoration-underline">Python</h3>
                <p className="mt-3">
                  Develops diverse applications across web, data analysis,
                  machine learning, and automation using Python’s rich ecosystem
                  of libraries. Delivering high-performing solutions using
                  frameworks like Django and Flask.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div class={TeechStyle.techcontainer}>
              <div class={TeechStyle.techfront}>
                <img
                  src={Testing}
                  alt="Software Testing "
                  className="img-fluid"
                  style={{
                    zIndex: "-1",
                    position: "absolute",
                    left: "0px",
                    borderRadius: "10px",
                  }}
                />
                <h5 className={TeechStyle.tittleTech}>
                  Software Testing{" "}
                  <BsArrowUpRightCircle className=" fs-1 ps-1 text-primary" />
                </h5>
              </div>
              <div class={TeechStyle.techback}>
                <h3 className="mt-2 fs-5 text-decoration-underline">
                  Software Testing
                </h3>
                <p className="mt-3">
                  Ensures the quality of Software applications through test
                  plans, bug identification, and performance checks using manual
                  and automated testing.
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div class={TeechStyle.techcontainer}>
              <div class={TeechStyle.techfront}>
                <img
                  src={Devops}
                  alt="UI/UX Image "
                  className="img-fluid"
                  style={{
                    zIndex: "-1",
                    position: "absolute",
                    left: "0px",
                    borderRadius: "10px",
                  }}
                />
                <h5 className={TeechStyle.tittleTech}>
                  DevOps{" "}
                  <BsArrowUpRightCircle className="ms-5 fs-1 ps-2 text-primary" />
                </h5>
              </div>
              <div class={TeechStyle.techback}>
                <h3 className="mt-2 fs-5 text-decoration-underline">DevOps</h3>
                <p className="mt-3">
                  Bridges development and operations, implementing CI/CD,
                  automating workflows, and optimizing infrastructure to ensure
                  reliable software delivery.
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div class={TeechStyle.techcontainer}>
              <div class={TeechStyle.techfront}>
                <img
                  src={Business}
                  alt="UI/UX Image "
                  className="img-fluid"
                  style={{
                    zIndex: "-1",
                    position: "absolute",
                    left: "0px",
                    borderRadius: "10px",
                  }}
                />
                <h5 className={TeechStyle.tittleTech}>
                  Business Analyst{" "}
                  <BsArrowUpRightCircle className=" fs-1 ps-2 text-primary" />
                </h5>
              </div>
              <div class={TeechStyle.techback}>
                <h3 className="mt-2 fs-5 text-decoration-underline">
                  Business Analyst
                </h3>
                <p className="mt-3">
                  Acts as a liaison between stakeholders and technical teams,
                  analysing processes and providing insights to improve
                  efficiency and align solutions with goals.
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div class={TeechStyle.techcontainer}>
              <div class={TeechStyle.techfront}>
                <img
                  src={Marketing}
                  alt="UI/UX Image "
                  className="img-fluid"
                  style={{
                    zIndex: "-1",
                    position: "absolute",
                    left: "0px",
                    borderRadius: "10px",
                  }}
                />
                <h5 className={TeechStyle.tittleTech}>
                  Marketing{" "}
                  <BsArrowUpRightCircle className="ms-5 fs-1 ps-2 text-primary" />
                </h5>
              </div>
              <div class={TeechStyle.techback}>
                <h3 className="mt-2 fs-5 text-decoration-underline">
                  Marketing
                </h3>
                <p className="mt-3">
                  Executes strategies to promote brand identity, generate leads,
                  and drive engagement through market research, content
                  creation, and campaign management.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurTechonoliges;
