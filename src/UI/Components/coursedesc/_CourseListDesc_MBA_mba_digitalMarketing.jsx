import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Mr_management from "../../../assets/images/MBA/digital.png";
import line_h from "../../../assets/images/process/Line.png";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/MBA/Datascience/M1.svg";
import StepB from "../../../assets/images/msc/stepA.png";
import StepA from "../../../assets/images/msc/stepB.png";
import course from "../../../assets/images/MBA/Digital/course.svg";
import choose from "../../../assets/images/MBA/choose.svg";
import Common from "../../../assets/images/MBA/Digital/Career.svg";
import Accordion from "react-bootstrap/Accordion";

import Content from "../../../assets/images/process/content.png";
import Rankings from "../../../assets/images/process/rankings.png";
import Structure from "../../../assets/images/process/structure.png";
export default function CourseListDesc() {
  return (
    <>
      <Helmet>
        <title>
          Distance learning Masters Programs in Applied Finance 2022
        </title>
        <meta
          name="description"
          content="Distance MSC Applied Finance course at Distance Pathshala is offered with numerous advantages and facilities to the students online."
        />
        <meta name="keywords" content="Applied Finance Distance Education" />
      </Helmet>

      {/* <h1>digital market</h1> */}

      <Searchform />
      <img src={Mr_management} alt="hr Management" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>Why should you choose MBA in Marketing? </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              MBA in marketing is not a degree program but is a professional
              certificate course. MBA in marketing course will help the working
              professionals in learning new skills and to do better in their
              career. This course helps the candidates for job positions like
              content marketing manager, digital marketing strategist and a lot
              more.
            </p>
          </div>

          <div className="section">
            <h3>Huge Variety of Career Opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              MBA in marketing course gives you a huge scope and a multitude of
              job options right in front of you. There are over 75,000 jobs
              listed on the very famous job portals for digital marketers. This
              field is in high demand since candidates are paying high even in
              the starting. This field has a lot of opportunities not only in
              terms of jobs but also one can earn more as a freelancer.
            </p>
          </div>

          <div className="section">
            <h3>Digital Marketing is Evolving</h3>
            <p>
              It is one of the fields where something new is to learn and
              follow. Candidates who prefer this course will find it more
              interesting. This course will give you the freedom to be more
              creative in terms of creating a marketing plan.
            </p>
          </div>

          <div className="section">
            <h3>Admission Procedure Of Online/Distance</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              This executive MBA in digital marketing is 15 months course that
              includes 5 different terms. This digital marketing course includes
              subjects related to digital marketing, email marketing, social
              media marketing and so forth. In this course, candidates will get
              in-depth knowledge of management and marketing in these 5 terms.
              Here is a list of syllabuses of the courses that candidates will
              learn.
            </p>
            <div className="text-center">
              <h3>ADMISSION PROCEDURE </h3>
              <span className="m-0 p-0">
                <img src={line_h} className="img-fluid" alt="Hrm page image" />
              </span>
            </div>
            <img src={AdmissionProcedure} alt="admin" className="w-100 mt-5" />
            <img src={elegibilty} alt="admin" className="w-100 mt-5" />
            <div className="container py-3 text-center">
              <p>
                Here is a common procedure to take admission in the distance M.
                Sc in Artificial <br></br>Intelligence and Machine Learning.
              </p>
              <img src={StepA} alt="admin" className="mw-100 mt-5" />
              <img src={StepB} alt="admin" className=" w-100 mt-5" />
            </div>
          </div>

          <div className="section">
            <h3>Course subjects</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              This executive MBA in digital marketing is 15 months course that
              includes 5 different terms. This digital marketing course includes
              subjects related to digital marketing, email marketing, social
              media marketing and so forth. In this course, candidates will get
              in-depth knowledge of management and marketing in these 5 terms.
              Here is a list of syllabuses of the courses that candidates will
              learn.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li> Financial Accounting: Information For Decisions</li>
                    <li>Managerial Economics</li>
                    <li> Marketing Managemen</li>
                    <li>Information Systems for Managers</li>
                    <li>Organizational Behaviour </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Business Statistics for Decision Makers </li>
                    <li>Operations Management</li>
                    <li> Strategic Management</li>
                    <li> Business Communication</li>
                    <li>Corporate Finance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left sam-back">Semester 3</p>
                  <ul className="p-0 mt-1">
                    <li>Business Communication</li>
                    <li>
                      Search Engine Optimization & Search Engine Marketing
                    </li>
                    <li>Integrated Marketing Communications</li>
                    <li>Social Media & Content Marketing</li>
                    <li> Mobile & Email Marketing</li>
                    <li>Marketing in a digital world</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>Capstone Project</li>
                    <li>Marketing, web, & Social Media Analytics (Elective)</li>
                    <li>Fraud & Risk Analytics(Elective)</li>
                    <li>Supply Chain & Logistics Analytics (Elective)</li>
                    <li>Cross-functional Elective</li>
                    <li>HR Analytics (Elective)</li>
                    <li>-----</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <h3>Other Online/distance MBA course specializations </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
          </div>
          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-4">
                  <ul className="p-0 mt-1 text-center">
                    <li className="px-5">MBA in Marketing and HR management</li>
                    <li className="px-5">
                      MBA in Marketing and Finance management
                    </li>
                    <li className="px-5">MBA in System and operations</li>
                    <li className="px-5">
                      MBA in Banking and finance management
                    </li>
                    <li className="px-5">MBA in International Marketing</li>
                    <li className="px-5">
                      MBA in Investment Banking Equity research
                    </li>
                    <li className="px-5">MBA in Supply chain Management</li>
                    <li className="px-5">
                      MBA Data Science and Analytics Management
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul className="p-0 mt-1 text-center">
                    <li className="px-5">
                      MBA in Strategic finance Management
                    </li>
                    <li className="px-5">MBA in HR Management</li>
                    <li className="px-5">MBA in Oil and gas Management</li>
                    <li className="px-5">MBA in General Management</li>
                    <li className="px-5">MBA in Finance Management</li>
                    <li className="px-5">
                      MBA in International finance management
                    </li>
                    <li className="px-5">MBA in Marketing management</li>
                    <li className="px-5">
                      MBA in Finance and Leadership Management
                    </li>
                    <li>.....</li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul className="p-0 mt-1 text-center">
                    <li className="px-5">
                      MBA in Finance and Leadership Management
                    </li>
                    <li className="px-5">MBA in Power Management</li>
                    <li className="px-5">MBA in Aviation Management</li>
                    <li className="px-5">MBA in digital Marketing Ecommerce</li>
                    <li className="px-5">MBA in Fintech Management</li>
                    <li className="px-5">MBA in Finance and HR Management</li>
                    <li className="px-5">
                      MBA in Business Intelligence and analytics{" "}
                    </li>
                    <li className="px-5">MBA in IT Management</li>
                    <li>----</li>
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
              Once you decide to pursue an executive MBA in digital marketing it
              is essential to choose the right university. The following points
              are essential in selecting the right university.
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
              After completing the course aspirants have plenty of job
              opportunities. With this degree, candidates can apply for
              managerial level positions in the marketing sector. Here is a list
              of jobs that candidates from executive MBA in marketing can apply
              for.
            </p>

            <div className="container text-center mt-4">
              <img src={Common} className="img-fluid" alt="Hrm page image" />
            </div>
          </div>
          <div className="section">
            <h3>Summing it up</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              In this course, aspirants will gain in-depth knowledge in
              marketing and related stuff. Candidates can find this digital
              course in many universities but not everyone is in an online
              format. So, before you choose any course, it is essential to
              choose the right universities based on your requirements. Only by
              choosing the right university, an individual can lead a successful
              career.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Digital Marketing FAQ</h1>
          <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>How is this online and distance-degree programme degree helpful in today’s world?</h5>
            </Accordion.Header>
            <Accordion.Body>
       <p>This online and distance MBA in Digital Marketing degree is highly beneficial. If you’re a keen learner and want to be skilled to know digital marketing by its core then you should pursue this course to build your career in the digital world.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>How to apply for this course/ programme?</h5>
            </Accordion.Header>
            <Accordion.Body>
            <p>You can easily apply for this online and distance MBA in Digital Marketing programme. Just go through all courses and select as per your interest and skill.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              Fees structure of this online course?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
           <p>The fees structure of this online and distance MBA in Digital Marketing varies on the universities from private to government.</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
