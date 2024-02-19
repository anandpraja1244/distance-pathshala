import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Digital_ent from "../../../assets/images/MBA/Digital_ent.png";
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
          Online & Distance MBA In HR Digital Entrepreneurship in India | Distance
          Pathshala
        </title>
        <meta
          name="description"
          content="Get the Best Online and Distance MBA in HR Analytics distance learning colleges/University in India. Distance Pathshala is Best option to advance your career."
        />
        <meta name="keywords" content="MBA In  HR Digital Entrepreneurship" />
      </Helmet>

      {/* <h1>digital market</h1> */}

      <Searchform />
      <img src={Digital_ent} alt="MBA In  HR Digital Entrepreneurship" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>Why should you choose an online and distance MBA in Digital Entrepreneurship?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            This course offers a broad view of business and its determinants in the online world and equips with idea that
how to work on the digital business model and how it differs from a traditional one. Its flexible study routine,
and recorded classes. A webinar with experts at such an accessible price is enough to choose this course.
            </p>
          </div>

          <div className="section">
            <h3>Explore advanced career opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            In rapidly growing technological innovation, graduates with MBA in Digital Entrepreneurship are in high
demand. Tremendous opportunities are there for young graduates as business enterprises are looking for
candidates with innovative and technical knowledge who are aware of the skills needed to accelerate the
business on digital media.
            </p>
          </div>

          <div className="section">
            <h3>Earn a high salary</h3>
            <p>
            You can work as a digital business administrator or digital marketer. Today digital marketing and social media
management are high in demand. This course will give you great exposure to a digital model of business.
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
                Here is a common procedure to take admission in the distance MBA in  <br></br>Digital Entrepreneurship.
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
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>Managerial Economics</li>
                    <li>Statistics for Management</li>
                    <li> Professional communication</li>
                    <li>Accounting for Managers</li>
                    <li>Marketing Management </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Legal Aspects of Business </li>
                    <li>Business Research Methods</li>
                    <li>Financial Management</li>
                    <li>Human Resource Management</li>
                    <li>Conflict Resolution and Management</li>
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
                    <li>strategic Human Management Or Project</li>
                    <li>
                    Professional Ethics
                    </li>
                    <li>.......</li>
             
                   
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>Major Project</li>
                    <li>Management in Action - Social Economic and Ethical Issues</li>
                    <li>Digital Marketing</li>
                  
                 
                
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
            Going for an MBA from a renowned university is impactful from a career perspective. Before you go for
admission online and distance you must be aware of the right place to apply. Consider these points while
looking for a college or university
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
            Many businesses are started online and flourish with growth. This course Online and Distance MBA in Digital
Entrepreneurship give you all the required skills to stand out from the crowd. You will be taught about
managing businesses on online platforms like lead generation, financial support, workforce, and aspects of
marketing. This makes you eligible for several job profiles and helps to earn an average salary of 7 lacs to 13
lacs
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
            If you want to go ahead and have a decent job with high financial aid then make sure you are walking with the
trends and upskill yourself in such a way that you can be useful assets for the business industry.
Online and Distance MBA in Digital Entrepreneurship is a great road to go with career intention as from now
onwards gradually technology inference is increasing in the business world. Make sure you are willing to lead
the world.
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
        {/* <Accordion defaultActiveKey="0" className="mt-3">
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
        </Accordion> */}
      </div>
    </>
  );
}
