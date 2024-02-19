import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import projectmanage from "../../../assets/images/MBA/projectmanage.png";
import line_h from "../../../assets/images/process/Line.png";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/MBA/Datascience/M1.svg";
import StepB from "../../../assets/images/msc/stepA.png";
import StepA from "../../../assets/images/msc/stepB.png";
import course from "../../../assets/images/MBA/Datascience/M4.svg";
import choose from "../../../assets/images/MBA/choose.svg";
import Common from "../../../assets/images/MBA/FinancialMarkets/Career.svg";
import Accordion from "react-bootstrap/Accordion";
import Content from "../../../assets/images/process/content.png";
import Rankings from "../../../assets/images/process/rankings.png";
import Structure from "../../../assets/images/process/structure.png";

export default function CourseListDesc() {
  return (
    <>
      <Helmet>
      <title>
        Online & Distance MBA In Project Management colleges in India | Distance Pathshala
        </title>
        <meta
          name="description"
          content="Get the Best Online and Distance MBA in Project Management distance learning colleges/University in India. Distance Pathshala is Best option to advance your career."
        />
        <meta name="keywords" content="MBA In Project Management  colleges" />
      </Helmet>

      {/* <h1>international finance not</h1> */}

      <Searchform />
      <img src={projectmanage} alt="MBA in Project Management Distance University" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>Why should you choose MBA in Project Management?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            If you are already working in the business world and love to handle different projects and you want to be more efficient and enhance your skills in project management then an online and distance MBA in project management is the best to enrich yourself with the right skills and accelerate your career. This course will give you highlights of project planning, cost management, risk and performance evaluation, and many other aspects of the project.
            </p>
          </div>

          <div className="section">
            <h3>Explore Career Opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Project management is an integral part of any company administration, with this course you will get the opportunity to handle national and international project and lead it as a project manager as this course give strategic knowledge covering all important corners and essentials of Project Management. 
            </p>
          </div>

          <div className="section">
            <h3>Earn a High Salary </h3>
            <p>
            Online and distance MBA in project management gives you a strong foundation to stand out from the crowd. You can earn competitive salaries by grasping the different roles of project management. 
            </p>
          </div>

          <div className="section">
            <h3>Admission Procedure Of Online/Distance</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            It is 2 years postgraduate degree can be done by anyone who completed an undergraduate degree from any recognized college or university. Getting admission is a smooth process just you need to choose a college. Individuals with 55% aggregate marks in bachelor's can apply for it. 
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
              Here is a common procedure to take admission in the Distance MBA in

             <br></br>Project Management 
              </p>
              <img src={StepA} alt="admin" className="mw-100 mt-5" />
              <img src={StepB} alt="admin" className=" w-100 mt-5" />
            </div>
          </div>

          <div className="section">
            <h3>Course Structure </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
            As this course intends to provide complete knowledge of project management from start to end.  Such as project outlines, planning, cost, resources, execution, and result evaluation, all covered in this course 
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>Principles of Economics and Markets</li>
                    <li>Managerial Effectiveness and Ethics</li>
                    <li>Accounting & Finance</li>
                    <li>
                      Organizational Behaviour & Human Resources Management
                    </li>
                    <li> Quantitative Techniques & Analytics</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Entrepreneurship</li>
                    <li>Marketing Management & Research</li>
                    <li>Introduction to Sub-Systems of Project Management </li>
                    <li>Project Selection and Portfolio Management</li>
                    <li>Market and Technical Analysis</li>
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
                    <li>Business Environment & Strategy</li>
                    <li>Operations Management</li>
                    <li>Project Time and Cost Management</li>
                    <li>Lean and Six Sigma </li>
                    <li>Project Finance and Investment Criteria</li>
                    <li>Open Elective Course</li>
                    {/* <li>Elective</li> */}
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>
                    •	 Strategic Sourcing and Inventory Management
                    </li>
                    <li>•	 Project Monitoring and Information Systems</li>
                    <li>•	 Project Risk Management</li>
                    <li>•	 Project Team Building, Evaluation, and Control</li>
                    <li>•	 Cross-Functional Elective Course</li>
                    <li>•	 Master Thesis / Project </li>
                    {/* <li>-----</li> */}
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
            Doing MBA from a renowned university is impactful from a career perspective. Before you go for admission in online and distance you must be aware of the right place to apply. Consider these points while looking for a college or university
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
            With the certified post-graduate degree of MBA in project management, you can be hired by top companies as part of their projects, You are expected to make the project grow and deliver value to the market and increase their brand value.  You can be hired for a number of job profiles like project managers, product managers, brand managers, etc. 
            </p>

            <div className="container text-center mt-4">
              <img src={Common} className="img-fluid" alt="Hrm page image" />
            </div>
          </div>
          <div className="section">
            <h3>Summing  up</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Choosing an online and distance MBA in Project Management is a great move if you want to make your mark in this dynamic business world. This will take hardly a few hours of the week and without going to college you can do a degree with flexibility. The study materials will be given with recorded lectures.

            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Project Management FAQ</h1>
          <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>Can any science graduate pursue an Online and Distance MBA in Project Management?</h5>
            </Accordion.Header>
            <Accordion.Body>
        <p>Yes, graduates with the stream will be eligible for an Online and Distance MBA in Project Management even non-commerce students also.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>Is the CAT score important for taking admission in Online and Distance MBA in Project Management?</h5>
            </Accordion.Header>
            <Accordion.Body>
 <p>May or may not as it totally varies from college to college as per their policy but you can read out the course prospectus from their official website.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              What is the average fee for an Online and Distance MBA in Project Management?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
        <p>The average fee for an online and Distance MBA in project Management can lie between 3 lacs to 10 lacs</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
              Is pursuing an Online and Distance MBA in Project Management worthy for the future
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Yes, it is a good decision for those who intend to make a great career in management and the business world and want to explore a number of projects.
              </p>
            </Accordion.Body>
          </Accordion.Item>
   
        </Accordion>
      </div>
    </>
  );
}
