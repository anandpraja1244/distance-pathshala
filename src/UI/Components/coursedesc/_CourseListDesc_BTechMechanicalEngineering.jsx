import React from "react";
import Btech from "../../../assets/images/btech/b-1.png";
import line_h from "../../../assets/images/process/Line.png";
import Common from "../../../assets/images/btech/btechadmin.png";
import Rankings from "../../../assets/images/process/rankings.png";
import Content from "../../../assets/images/process/content.png";
import Structure from "../../../assets/images/process/structure.png";
import bCareer_Opportunities from "../../../assets/images/btech/bCareer_Opportunities.png";
import Searchform from "../../Pages/searchform";

import { Helmet } from "react-helmet";
import { Accordion } from "react-bootstrap";
export default function CourseListDesc() {
  return (
    <>
      <Helmet>
        <title>
          Best Online & Distance B.Com in Hindi Course University in india |
          Distane Pathshala
        </title>
        <meta
          name="description"
          content="Get your Btech in mechanical engineering correspondence course certification in your own space now. Visits distance Pathshala and apply today!."
        />
        <meta
          name="keywords"
          content="b tech in mechanical engineering correspondence course"
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
              B. Tech for working professionals in{" "}
              <span> Mechanical Engineering </span>
            </h3>

            <p>
              Specialization in Mechanical Engineering is an evergreen branch as
              Mechanical Engineers are the builders of these worlds. Aspirants
              who want to become ideal mechanical engineers in the future need
              to grow their skills by getting a degree and also working in the
              field side-by-side. B. Tech in Mechanical Engineering is one of
              the interesting subjects that deal with the study of mechanism and
              also the concept, study and testing of machinery. Mechanical
              Engineers are required in many industries like power plants,
              railway factories, automobile industries and a lot more.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>
              Why study B. Tech for Working professionals in mechanical
              engineering?
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              B. Tech in mechanical engineering from distance learning is the
              best option as it helps them to get both degrees and time to gain
              experience in the field. If you are interested in the area of
              mechanical production, then all you need to do is apply for the
              distance B. Tech in Mechanical Engineering.
            </p>
          </div>
          <div className="section">
            <h3>Candidates will be exposed to global opportunities </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              There is a need for mechanical engineers in almost every country
              worldwide. The main reason for the need is that engineering
              projects can be located all over the world. This requires you to
              meet customers and conduct investigative fieldwork as part of your
              responsibilities.
            </p>
          </div>
          <div className="section">
            <h3>Wide range of career choices </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The life of mechanical and automobile engineers is filled with new
              challenges every day. The motive and work of the engineer are to
              find a new solution to the problems. The course helps the
              aspirants to learn new skills and execute them whenever required.
              Candidates who are likely to get challenged regularly naturally
              get excited about mechanical engineering.
            </p>
          </div>
          <div className="section">
            <h3>Admission Procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              It is one of the interesting subjects that deal with the study of
              mechanism and also the concepts, study and testing of machinery.
              Aspirants should meet some requirements to pursue this course.
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
              B. Tech in mechanical engineering course consists of various
              subjects who enlighten you with the knowledge of designing and
              software. This course helps you gain both theoretical knowledge
              and industry exposure. Here are some lists of topics during the
              course.
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
              Once you decide to pursue an executive B. Tech in mechanical
              engineering, it is essential to choose the right university. The
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
              prospects for the candidates. B. Tech in mechanical engineering
              course opens up abundant job opportunities in the field. After
              completion of this course, students can apply in both the
              government and private sectors. Here is a list of jobs that
              candidates with a B. Tech in mechanical engineering can apply for.
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
          <h1 className="Accordi">Mechanical Engineering FAQ</h1>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>What are some software that Mechanical Engineers use?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Some designing software that Mechanical Engineers use are: UG NX CAD, AutoCAD, SolidWorks, CATIA, ProE/ Creo.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>What do Mechanical Engineers do?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              A Mechanical Engineer is responsible for designing, Manufacturing, and Maintenance of every machine possible.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>What is the qualification to pursue Mechanical Engineering?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              One has to be Diploma Holder in Mechanical Engineering.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>Is B.Tech in Mechanical Engineering AICTE approved?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Yes, B.Tech in Mechanical Engineering AICTE approved.
              </p>
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
      </div>
    </>
  );
}
