import React from "react";
import Btech from "../../../assets/images/btech/b-2.png";
import line_h from "../../../assets/images/process/Line.png";
import Common from "../../../assets/images/btech/btechadmin.png";
import Rankings from "../../../assets/images/process/rankings.png";
import Content from "../../../assets/images/process/content.png";
import Structure from "../../../assets/images/process/structure.png";
import bCareer_Opportunities from "../../../assets/images/btech/computer.png";
import Searchform from "../../Pages/searchform";

import { Helmet } from "react-helmet";
import { Accordion } from "react-bootstrap";
export default function CourseListDesc() {
  return (
    <>
      <Helmet>
        <title>
          computer science engineering distance education in India | Distane
          Pathsala
        </title>
        <meta
          name="description"
          content="Be the first to apply for computer science engineering distance education at Distance Pathsala to get an attractive career opportunity."
        />
        <meta
          name="keywords"
          content="computer science engineering distance education"
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
              <span> Computer science </span>
            </h3>

            <p>
              Computer science is one of the most preferred specialized courses
              in engineering. Aspirants who want to pursue the course of B. tech
              to work professionally in computer science and also to gain
              experience in the field at the same time, then this course is one
              of the best options. This degree opens a huge number of career
              opportunities for aspirants in the future. Due to the high demand
              and most chosen courses, the merit list is quite higher than other
              courses.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>
              Why study B. Tech for working professionals in computer science?
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              This course is the study of computers related to database,
              software, designing, cloud computing, operating, algorithm,
              networking, and a lot more. B. Tech for working professionals in
              computer science is one of the best courses for working
              professionals who want to enhance the path of their career. After
              completion of the course, you can find various job options in many
              fields. This course not only focuses on how computer systems
              themselves work but also how they integrate into the larger
              picture. B. Tech for working professionals in computer science is
              an extremely popular course among students. As there is a huge
              rise in the use and importance of computers and related
              applications, it is safe to say that seeking a career in this
              field is profitable.
            </p>
          </div>
          <div className="section">
            <h3>Admission Procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The duration of this course is three years with basic to advanced
              levels of education. To take admission in this course student
              should meet the institution’s requirements.
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
              B. Tech in computer science course consists of various subjects
              which enlighten you with the knowledge of designing and software.
              This course helps you gain both theoretical knowledge and industry
              exposure. Here are some lists of topics during the course.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <ul className="p-0 mt-1">
                    <li>• Thermodynamics</li>
                    <li> • Fluid Mechanics</li>
                    <li>• Mechanics</li>
                    <li>• Strength of Material </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="p-0 mt-1">
                    <li>• Manufacturing Technology</li>
                    <li>• Machine Drawing</li>
                    <li>• Engineering Drawing</li>
                    <li>• Automobile Engineering</li>
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
              Once you decide to pursue an executive B. Tech in computer
              science, it is essential to choose the right university. The
              following points are essential in selecting the right university.
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
              prospects for the candidates. B. Tech in computer science course
              opens up abundant job opportunities in the field. After completion
              of this course, students can apply in both the government and
              private sectors. Here is a list of jobs that candidates with a B.
              Tech in computer science can apply for.
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
          <h1 className="Accordi">Computer Science FAQ</h1>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>In B.Tech for Working Professionals in Computer Science Engineering AICTE approved?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
			  Yes, B.Tech for Working Professionals in Computer science engineering is AICTE approved.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>What is the qualification to pursue Computer Science engineering?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
			  One should do their Diploma in engineering or Polytechnic or B.Sc Math as their core subjects.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
			  What do Computer engineers do?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>Computer engineers work on computer programming, software, and design.</p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>What are some of the software that Computer engineers use?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>MATLAB, CATIA, BRICS CAD, ZW3D, SOLID EDGE, PTC Creo.</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
