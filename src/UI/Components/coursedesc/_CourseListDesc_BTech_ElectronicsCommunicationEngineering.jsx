import React from "react";
import Btech from "../../../assets/images/btech/b-5.png";
import line_h from "../../../assets/images/process/Line.png";
import Common from "../../../assets/images/btech/btechadmin.png";
import Rankings from "../../../assets/images/process/rankings.png";
import Content from "../../../assets/images/process/content.png";
import Structure from "../../../assets/images/process/structure.png";
import bCareer_Opportunities from "../../../assets/images/btech/ele.png";
import Searchform from "../../Pages/searchform";
import { Helmet } from "react-helmet";
import { Accordion } from "react-bootstrap";
export default function CourseListDesc() {
  return (
    <>
      <Helmet>
        <title>
          BTech Electronic and communication Engineering Distance Education
          Admission | Distane Pathshala
        </title>
        <meta
          name="description"
          content="Get all the details about B.Tech Electronic and communication enginering  distance education course including top ranked colleges, admission, subjects, fees, eligibility, duration"
        />
        <meta
          name="keywords"
          content="Electronics Communication Engineering Distance Education "
        />
      </Helmet>
      <Searchform />
      <div className="container mt-3 hrm">
        <div className="row">
          <div className="col-md-4 hrm-img">
            <img src={Btech} className="img-fluid" alt="Hrm page image" />
          </div>
          <div className="col-md-8 py-4 hrm-text">
            <h3>
              B. Tech for working professionals in
              <span> Electronics & Communication Engineering </span>
            </h3>

            <p>
              Electronics and Communication Engineering is a study of electronic
              devices and software devices. B. Tech in Electronics and
              Communication Engineering involves researching, developing and
              testing electronic equipment and designing the systems.
              Electronics and Communication Engineering is popular among the
              various engineering courses which give numerous opportunities in
              the field of electronics equipment, communication broadcasting and
              networking.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>
              Why study B. Tech for Working professionals in Electronics &
              communication?
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Electronics and communication engineering deals with one of the
              interesting subjects that combine the branches of electronics
              engineering and information technology & communication. This
              branch offers huge career opportunities for students who have
              passes the B. Tech degree in electronics and communication. This
              program deals with the combination of electronics engineering with
              information and communication technology. In this course, students
              will get an in-depth understanding of subjects related to
              electronics and communication every semester.
            </p>
          </div>

          <div className="section">
            <h3>Great starting pay</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              With the need for electrical equipment, there will be a need for
              competent electronics engineers. The students can get hired by the
              electronics industry for R & D roles and other sectors like
              defence, education, entertainment and a lot more. B. Tech for
              working professionals in Electronics and communication graduates
              hire MNCs like Samsung, Cognizant, top public, companies like BSNL
              etc.
            </p>
          </div>
          <div className="section">
            <h3>Versatility</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Once you have a degree in electronics then you can able to work in
              a diverse range of sectors. For instance, if you involve
              electronics in medicine, you can venture into the biomedical
              sector, and involve electronics with the computer.
            </p>
          </div>
          <div className="section">
            <h3>Admission Procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Electronics and Communication course is 3 years program for
              undergraduate students with all the basic to advance levels of
              knowledge.Lateral entry students can also pursue the program and
              working professionals can also pursue the program for appraisal
              and promotion in their resisting job.
            </p>
            <div className="row mt-4">
              <div className="col-md-4">
                <ul className="stlye-none text-center">
                  <li className="eligibility">Eligibility</li>
                  <li className="eligibility-nd">10+2 Pass Out</li>
                </ul>
              </div>

              <div className="col-md-4">
                <ul className="stlye-none text-center">
                  <li className="eligibility">Duration</li>
                  <li className="eligibility-nd">Min 3 – Max 6 years</li>
                </ul>
              </div>

              <div className="col-md-4">
                <ul className=" stlye-none text-center">
                  <li className="eligibility">Approvals</li>
                  <li className="eligibility-nd">UGC | DEB | NAAC</li>
                </ul>
              </div>
            </div>

            <section className="bg-white mt-5 pt-3">
              <div className="container text-center mt-3">
                <img src={Common} className="img-fluid" alt="Hrm page image" />
              </div>
            </section>
          </div>

          <div className="section">
            <h3>Course subjects</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              B. Tech in Electronics and communication engineering course
              consists of various subjects which enlightenyou with the knowledge
              of designing and software. This course helps you gain both
              theoretical knowledge and industry exposure. Here are some lists
              of topics during the course.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <ul className="p-0 mt-1">
                    <li>• Engineering Mathematics </li>
                    <li>• Engineering Chemistry</li>
                    <li>• Microcontrollers</li>
                    <li>• VLSI</li>
                    <li>• Antenna Theory</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="p-0 mt-1">
                    <li>• Engineering Physics</li>
                    <li>• Analog Electronic</li>
                    <li>• Digital electronics</li>
                    <li>• Wireless Communication</li>
                    <li>• ------</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <h3>How to choose the right university?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Once you decide to pursue an executive B. Tech in Electronics and
              communication engineering, it is essential to choose the right
              university. The following points are essential in selecting the
              right university.
            </p>

            <div className="row mt-4">
              <div className="col-md-4">
                <img
                  src={Rankings}
                  className="img-fluid"
                  alt="Hrm page image"
                />
              </div>
              <div className="col-md-4">
                <img src={Content} className="img-fluid" alt="Hrm page image" />
              </div>

              <div className="col-md-4">
                <img
                  src={Structure}
                  className="img-fluid"
                  alt="Hrm page image"
                />
              </div>
            </div>
          </div>
          <div className="section pt-4">
            <h3>Career opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              After completion of this course, there are hundreds of job
              prospects for the candidates. B. Tech in Electronics and
              communication engineering course opens up abundant job
              opportunities in the field. After completion of this course,
              students can apply in both government and private sectors. Here is
              a list of jobs that candidates with a B. Tech in Electronics and
              communication engineering can apply for.
            </p>
            <div className="container text-center mt-4">
              <img
                src={bCareer_Opportunities}
                className="img-fluid"
                alt="Hrm page image"
              />
            </div>
          </div>
          <div className="section">
            <h3>Summing it up</h3>
            <p>
              In this course, aspirants will gain in-depth knowledge of various
              skills. Before you choose any course, it is essential to choose
              the right universities based on your requirements. Only by
              choosing the right university, an individual can lead a successful
              career.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Electronics Engineering FAQ</h1>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>What is the minimum qualification to pursue B.Tech for Working Professionals in Electronics & Communication Engineering?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              One should do their Diploma in engineering or Polytechnic as their core subjects.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
              Is B.Tech for Working Professionals in Electronics & Communication Engineering AICTE approved?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Yes, B.Tech for Working Professionals in Electronics & Communication Engineering is AICTE approved.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>What do Electronic & Communication engineers do?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              They work on gadgets and circuits the flow of current and sound.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>What are some of the software use that Electronics and Communication engineers use?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              MATLAB, C++, JAVA, Fortran C
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
