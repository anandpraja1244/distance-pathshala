import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Tourism from "../../../assets/images/MBA/Tourism.png";
import line_h from "../../../assets/images/process/Line.png";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/MBA/Datascience/M1.svg";
import StepB from "../../../assets/images/msc/stepA.png";
import StepA from "../../../assets/images/msc/stepB.png";
import course from "../../../assets/images/MBA/Power/course.svg";
import choose from "../../../assets/images/MBA/choose.svg";
import Common from "../../../assets/images/MBA/Power/Career.svg";
import Accordion from "react-bootstrap/Accordion";

import Content from "../../../assets/images/process/content.png";
import Rankings from "../../../assets/images/process/rankings.png";
import Structure from "../../../assets/images/process/structure.png";
export default function CourseListDesc() {
  return (
    <>
      <Helmet>
        <title>
        MBA in tourism Management Distance Education in India | Distance Pathshala
        </title>
        <meta
          name="description"
          content="Find here Best Online and Distance MBA in tourism Management courses and colleges/ Universities in India with Distance Pathshala."
        />
        <meta name="keywords" content="Online MBA tourism Management Distance Learning" />
      </Helmet>
      {/* <h1>power managemnet</h1>
      <h1>multimedia not</h1> */}

      <Searchform />
      <img src={Tourism} alt="Online BBA tourism Management Distance Learning" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>Why should you choose Online and Distance MBA in Tourism Management</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Online and Distance MBA opens up a world of opportunities for the students. The course will teach the students core
tourism and hospitality management. The course will enable students to secure top positions in companies and tourism
firms.
            </p>
            {/* <ul>
              <li>
                Online and distance MBA in power management develops and grows
                the aspirant's inner skills and abilities.
              </li>
              <li>
                The course will lead to a rewarding career across power,
                automobiles, manufacturing organization, and related industries
                or firms.
              </li>
              <li>
                The course will lead you to the exceptional career route of
                opportunities as power management professionals.
              </li>
              <li>
                The course also advances your ability to manage people,
                products, processes, content, goods, and services.
              </li>
            </ul> */}
          </div>
          <div className="section">
            <h3>Explore Advanced Career Opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            The opportunities are endless.The course prepares the students for managing top activities and functionalities of the
business. One can become a travel Consultant,Visitor Information Manager,Event Manager,Ground Attendant,Cruise
Manager,Tour Guide,Sales or Marketing Consultant/Manager,Operations Manager.
            </p>

          
          </div>
          <div className="section">
            <h3>Earn a High Salary</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Tourism is one of the most important factors and business across India, students after graduation can easily bag a job with a
high salary package. After finishing the degree, the students are prepared to provide various assistance and management in
Tourism. Students can have salary packages as high as 5LPA to 10 LPA.
            </p>

          
          </div>
          <div className="section">
            <h3>Admission Procedure Of Online/Distance</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Online MBA in Tourism requires students to complete two years of 6-month semesters through an online/distance program.
Please review the details to know before enrolling.
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
                Here is a common procedure to take admission in the Online Distance MBA in <br></br>Tourism Management.
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
            The Online and Distance MBA in Tourism management prepares students for careers in business related . The course also
develops their analytical skills. The MBA online course is a 2-year, 6-semester postgraduate program. The online MBA in
Tourism Management syllabus covers the curriculum&#39;s subjects and topics.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>Organizational Behaviour</li>
                    <li> Managerial (Micro) Economics</li>
                    <li> Legal  Business Environment</li>
                    <li>Corporate Governance  Business Ethics.</li>
                    <li>Financial Reporting Statements and Analysis</li>
                
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Analytics Foundations for business</li>
                    <li>Operations Management</li>
                    <li>Marketing Management </li>
                    <li>Human Resources Management</li>
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
                    <li>Rooms Division Management</li>
                    <li>Travel Agency Tour Operations Management</li>
                    <li>Hospitality Law</li>
                    <li>Compensation and Benefits Management</li>
                    <li>Facility Management</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>International Tourism Management</li>
                    <li>Event Management</li>
                    <li>Safety  Security Management</li>
                    <li>Practical – Final Project</li>

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
            The most important part is choosing the most suitable and appropriate university to continue pursuing the MBA in Tourism
management. Consider the following key considerations when selecting the right university.
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
            Online and Distance MBA in Tourism management will provide students with a variety of career options. Students who
complete this course are eligible to apply as
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
              The course completely trains the aspirants to meet the industry
              requirements. If you prefer to choose this course, ensure to
              choose the right and reputed university to attain the full
              benefits of choosing this course.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi"> Tourism Management FAQ</h1>
          <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
              What is online MBA Tourism Management?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Online MBA in Tourism Management is a postgraduate program that covers the topics of tourism marketing, tourism policy,
and event management. This program aids in getting wider knowledge of the tourism industry in the online mode as your
classes, assignments and other evaluation processes will be completely online.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>What are the subjects in online MBA Tourism Management?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The subjects of online MBA Tourism Management include International Tourism Management,Hospitality Law,Event
Management Safety  Security Management, etc.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              What is the salary after an online MBA in Tourism Management?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Some of the top distance/online MBA colleges in India are:- <li> NMIMS </li>
             <li> University of Petroleum and Energy Studies (UPES)</li>
 <li>Jain Online University</li> 
<li>  Chandigarh Distance University</li>  
<li>Symbiosis Center For Distance Learning</li> 

<li>Chandigarh Online University</li> 
<li> Hindustan Institute of Technology &amp; Science</li>
<li>
 D.Y. Patil Vidyapeeth
</li>
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
