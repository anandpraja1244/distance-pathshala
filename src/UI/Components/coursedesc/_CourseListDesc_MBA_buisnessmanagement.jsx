import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Mr_management from "../../../assets/images/MBA/buismanag.png";
import line_h from "../../../assets/images/process/Line.png";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/MBA/Datascience/M1.svg";
import StepB from "../../../assets/images/msc/stepA.png";
import StepA from "../../../assets/images/msc/stepB.png";
import course from "../../../assets/images/MBA/Business/course.svg";
import choose from "../../../assets/images/MBA/choose.svg";
import Common from "../../../assets/images/MBA/Business/Career.svg";
import Accordion from "react-bootstrap/Accordion";

import Content from "../../../assets/images/process/content.png";
import Rankings from "../../../assets/images/process/rankings.png";
import Structure from "../../../assets/images/process/structure.png";
export default function CourseListDesc() {
  return (
    <>
      <Helmet>
        <title>
             Best  MBA in Business Management/Corresponding Education University in India  | Distance Pathshala
        </title>
        <meta
          name="description"
          content="Advance your career by applying for BBA Human Resource Management Distance Education at Distance Pathshala now"
        />
        <meta name="keywords" 
        content="Applied Finance Distance Education" />
      </Helmet>
      {/* <h1>buisness management</h1>
      <h1>market and hr not</h1> */}

      <Searchform />
      <img src={Mr_management} alt="hr Management" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>Why should you choose MBA in Business Management?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The courses completely focus on organizing, planning, and
              analyzing business activities. MBA in business management also
              teaches you how to manage and run a business efficiently.
              Aspirants also learn what makes an organization successful in a
              saturated global business environment.
            </p>
          </div>

          <div className="section">
            <h3>Employability</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Almost many business management graduates are presented with a
              variety of job opportunities. Aspirants who choose MBA in Business
              management will have highly desirable transferable skills. You can
              even choose a specialist area of business that interests you, like
              entrepreneurship or human resource management. With this degree,
              you will be able to shape the direction of your career.
            </p>
          </div>

          <div className="section">
            <h3>Be Your Own Boss</h3>
            <p>
              When you choose MBA in Business Management, you will not only have
              fantastic career opportunities. You will also have the core
              element to start your own business and all the requirements of a
              business idea to get you started. Having a business management
              degree will put you on the path to being your boss. If you aspire
              to be a businessman, you can use this degree.
            </p>
          </div>

          <div className="section">
            <h3>Admission Procedure Of Online/Distance</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Students must have passed BBA or any equivalent examination from a
              UGC approved by the university to get admission in this course.
              Also, the bachelor degree of the candidate should be of three
              years of duration. There is no age bar to get admission in
              business management.
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
                Here is a common procedure to take admission in the distance 
                MBA <br></br>business management
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
              Online MBA in business management is the two years master degree
              program offered by many universities. The minimum duration of an
              MBA in Business Management course is two years. In distance
              education, you will have the upper time limit to complete the
              course in 4 years.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>Management Theory & Practice</li>
                    <li>Organizational Behaviour</li>
                    <li> Marketing Management</li>
                    <li>Business Economics</li>
                    <li>Financial Accounting & Analysis</li>
                    <li>Information Systems for Managers</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Business Communication</li>
                    <li>Essentials of HRM</li>
                    <li>Business Law</li>
                    <li>Strategic Management</li>
                    <li> Operations Management</li>
                    <li>Decision Science</li>
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
                    <li> Organizational Theory Structure & Design</li>
                    <li>Cost and Management Accounting</li>
                    <li>Consumer Behaviour</li>
                    <li>Project Management </li>
                    <li>Digital Marketing</li>
                    <li>International Business</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>Corporate Finance</li>
                    <li>Sales Management</li>
                    <li> Entrepreneurship and Venture Capital Management</li>
                    <li> Business: Ethics, Governance & Risk</li>
                    <li>Research Methodology</li>
                    <li>Project</li>
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
              Once you decide to pursue MBA in Business Management, it is
              essential to choose the right university. The following points are
              essential in selecting the right university.
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
              Distance MBA in Business management course completely focuses on
              international business and market prospects. The course will train
              students for future goals in the corporate world. After completing
              the course, students will get various career opportunities in
              different fields.
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
              Before finalizing the university, you can also compare the
              university with another university to the best one. Based on your
              requirements you can choose the course and university that best
              suits your interest.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Business Management FAQ</h1>
          <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>How to take admission to Online and Distance MBA in Business Management?</h5>
            </Accordion.Header>
            <Accordion.Body>
        <p>Students have to get online using the official website of the university and fill application form there. In case you are facing any difficulty, call our career experts.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>How to Pay an Examination Fee?</h5>
            </Accordion.Header>
            <Accordion.Body>
            <p>You can pay your fee online by choosing your preferred mode of fee payment.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              What is the Basic Eligibility for this Course?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
           <p>The basic eligibility for this program is a bachelor degree with at least 55% marks from a valid and UGC-affiliated institution.</p>
            </Accordion.Body>
          </Accordion.Item>
  
        </Accordion>
      </div>
    </>
  );
}
