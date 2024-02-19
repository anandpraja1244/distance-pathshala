import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import it_management from "../../../assets/images/MBA/it_management.png";
import line_h from "../../../assets/images/process/Line.png";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/msc/10th.svg";
import StepB from "../../../assets/images/msc/stepA.png";
import StepA from "../../../assets/images/msc/stepB.png";
import Common from "../../../assets/images/msc/CareerOppor.svg";
import Rankings from "../../../assets/images/process/rankings.png";
import Content from "../../../assets/images/process/content.png";
import Structure from "../../../assets/images/process/structure.png";
import Accordion from "react-bootstrap/Accordion";
export default function CourseListDesc() {
  return (
    <>
      <Helmet>
      <title>
        Online & Distance MBA In Logistics And Supply Chain Management colleges in India | Distance Pathshala
        </title>
        <meta
          name="description"
          content="Get the Best Online and Distance MBA in Logistics And Supply Chain Management distance learning colleges/University in India. Distance Pathshala is Best option to advance your career."
        />
        <meta name="keywords" content="MBA InLogistics And Supply Chain Management colleges" />
      </Helmet>

      {/* <h1>it not</h1> */}

      <Searchform />
      <img src={it_management} alt="hr Management" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>Why should you choose Online and Distance MBA in IT Management?  </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            The opportunities are numerous. The course prepares the students for managing top statistical activities and analytics of the business. Students can apply for numerous jobs, given below as table
            </p>
          </div>

          <div className="section">
            <h3>Explore Advanced Career Opportunities </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Some degrees will let you go for only a few set careers, but with
              MBA in Financial markets management, you have many career options.
              Customers can opt for a career that most suits their abilities
              based on specialization. Aspirants can work in the industry based
              on their choice, from analysts to bankers. Individuals can also
              switch industries as the basics of finance and accounting.
            </p>
          </div>

          <div className="section">
            <h3>Earn a High Salary </h3>
            <p>
            MBA in IT Management is one of the most important factors in the business and students after graduation can easily bag a job with a high salary package. Now That the students are prepared to prepare for the real industry, a Master Business related degree can boost the career of the graduates. Students can bag salary packages as high as 4 to 6 Lakhs per annum.
            </p>
          </div>

          <div className="section">
            <h3>Admission Procedure Of Online/Distance</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            MBA in IT Management requires students to complete 2 years of 6-month semesters through an online/distance program. Please review the details to know before enrolling.
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
          <br></br>IT Management
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
            The Online and Distance MBA in IT Management prepares students for careers in marketing, retail management, and sales management. The course also develops their analytical skills. The online course is a 2-year, 4-semester postgraduate program. The online and distance MBA syllabus covers the curriculum's subjects and topics.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>Principles of Economics & Markets</li>
                    <li>Managerial Effectiveness & Ethics</li>
                    <li>Accounting & Finance</li>
                    <li>Business Law </li>
                    <li>Organizational Behaviour & Human Resources Management</li>
                    <li>Quantitative Techniques & Analytics</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li> Entrepreneurship</li>
                    <li> Marketing Management & Research</li>
                    <li> Database Management Systems </li>
                    <li> Information System Management</li>
                    <li> Enterprise Resource Planning</li>
                    <li>----</li>
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
                    <li> Business Environment & Strategy</li>
                    <li>Operations Management</li>
                    <li> Technology Management</li>
                    <li> Software Engineering </li>
                    {/* <li>Fundamental Analysis & Portfolio Management</li>
                    <li>Commodities & Currency Derivatives</li>
                    <li>Elective</li> */}
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>
                     Business Intelligence Technologies
                    </li>
                    <li>Digital Transformation</li>
                    <li>E-Business Technologies</li>
                    <li>IT Privacy & Security</li>
                    {/* <li>Cross-functional Elective</li>
                    <li>Project</li>
                    <li>-----</li> */}
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
            The most important part is choosing the most suitable and appropriate university to continue pursuing the Online MBA in IT. Consider the following key considerations when selecting the right university.
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
            MBA in IT Management will provide students with a variety of career options. Students who complete this dual specialization are eligible to apply to various companies and private organizations. With digital marketing businesses being a boom in today’s era, students have endless options waiting for them.This course offers enormous career opportunities
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
            You have numerous options to choose from the universities that offer this course. If you wish to receive quality education and polish your skills and develop yourself in becoming a future business analyst then you should pursue this online and distance MBA programme.
            </p>
          </div>
          <div className="container ">
        <div className="text-center">
          <h1 className="Accordi">IT Management FAQ</h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>What are the subjects in online/distance MBA Information Technology?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>The subjects in MBA Information Technology are as follows, Computer Application - Database Management System - System Analysis and Design - Software Engineering - Security and Control Information System - System Analysis and Design-Web & Multimedia designing.
</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>Which online/distance MBA course is best for IT professionals?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>The best course of online/distance MBA for IT professionals are International Management,Strategy,Consulting, Finance Leadership,Entrepreneurship,Marketing
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              What can I do with an online/distance MBA in IT Management?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>You can work as a network administrator, software project manager, help desk manager, program manager, product manager, etc.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
              What is the role of an online/distance MBA in Information technology?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The role of an online/distance MBA in information technology is that it has to integrate computer applications and work with business organizations and other IT firms.
              </p>
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
      </div>
        </div>
      </div>
    </>
  );
}
