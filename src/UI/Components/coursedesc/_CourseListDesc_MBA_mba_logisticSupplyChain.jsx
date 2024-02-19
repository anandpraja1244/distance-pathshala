import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Mr_management from "../../../assets/images/MBA/Supply_chain.png";
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
          Distance learning Masters Programs in Applied Finance 2022
        </title>
        <meta
          name="description"
          content="Distance MSC Applied Finance course at Distance Pathshala is offered with numerous advantages and facilities to the students online."
        />
        <meta name="keywords" content="Applied Finance Distance Education" />
      </Helmet>

      {/* <h1>LOgistic not</h1> */}

      <Searchform />
      <img src={Mr_management} alt="hr Management" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>Why should you choose Online and Distance MBA in logistics and supply chain management?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Online and Distance MBA opens up a world of opportunities for the students. The course will teach the students the
fundamentals of logistics and supply chain management. The course will enable students to secure top positions in
companies. Online and Distance MBA teaches students the principles and techniques of how logistics and supply chain
management works.
            </p>
          </div>

          <div className="section">
            <h3>Explore Advanced Career Opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            The opportunities are endless. The course prepares the students for managing top activities and functionalities of the
business. Production, manufacturing, and e-commerce that require the movement of products, raw materials require
graduates from Supply Chain Management.
            </p>
          </div>

          <div className="section">
            <h3>Earn a High Salary</h3>
            <p>
            Logistics and Supply chain management is one of the most important factors in the business and students after graduation
can easily bag a job with a high salary package. After finishing the degree, the students are prepared to provide various
professional logistics planning and managing demand and supply which can boost the career of the graduates. Students can
have salary packages as high as 8LPA to 12 LPA.
            </p>
          </div>

          <div className="section">
            <h3>Admission Procedure Of Online/Distance</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Online MBA in logistics and supply chain management requires students to complete three years of 6-month semesters
through an online/distance
 program. Please review the details to know before enrolling.
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
                Here is a common procedure to take admission in the distance  logistics and <br></br>supply chain management 
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
            The Online and Distance MBA in Logistics and Supply chain management prepares students for careers in business related
 The course also develops 
    their analytical skills. The MBA online course is a 2-year, 6-semester undergraduate program. The online MBA in Logistics and supply chain syllabus 
    covers the curriculum&#39;s subjects and topics.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>Principles of Economics  Markets</li>
                    <li>Managerial Effectiveness Ethics</li>
                    <li>Accounting Finance</li>
                    <li>
                    Organizational Behaviour Human Resource
                    </li>
                    <li>Quantitative Techniques Analytics</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Entrepreneurship</li>
                    <li>Marketing Management Research</li>
                    <li>Supply Chain Management</li>
                    <li>Logistics Management</li>
                    <li>Warehouse Management</li>
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
                    <li>Information System for Logistics Management</li>
                    <li>Materials Management</li>
                    <li>Distribution Management</li>
                    <li>Elective</li>
               
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>
                    Macroeconomics
                    </li>
                    <li> Financial Markets & Instruments</li>
                    <li> Digital Transformation</li>
                    <li>Competitive Strategy</li>
                    <li>Cross-functional Elective</li>
                    <li>Project</li>
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
            The most important part is choosing the most suitable and appropriate university to continue pursuing the MBA in Logistics
and Supply chain 
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
            Online and Distance MBA in logistics and supply chain management will provide students with a variety of career options.
Students who complete this course are eligible to apply as Supply Chain Manager,Procurement Manager,Purchasing
Manager,Procurement Officer,Logistics Manager,Marketing Executive,ERP Consultant,Demand Planner,Supply Chain
Analyst,Supply Chain Consultant and Supply Chain Coordinator.
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
            You have numerous options to choose from the universities that offer this course. If you wish to receive quality education
and polish your skills and
 develop yourself in becoming a future legal officer then you should pursue this online and distance
MBA programme.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">logistics and supply chain management FAQ</h1>
          <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>Is online/distance MBA in Supply Chain Management through distance education valid?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              It is a valid course and is approved by the UGC-DEB and AIU.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5> What is the scope after pursuing MBA with Supply Chain Management?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The MBA in Supply Chain Management plays a vital role in every sector of Industry. Various designations like Supply Chain
Manager- Procurement Manager , Procurement Manager , Procurement Officer , Logistics Manager , Marketing Executive , ERP Consultant , Demand Planner , Supply Chain Analyst , Supply Chain Consultant , Supply Chain Coordinator 
              </p>
            </Accordion.Body>
          </Accordion.Item>
        
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              What is the course structure for an online/distance MBA in Supply Chain Management?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The whole syllabus is divided into 4 semesters over 2 years. But it is a distance/online degree. You have a time of 5 years to
complete the degree.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          {/* <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
              What are some top distance/online MBA colleges in India?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Some of the top distance/online MBA colleges in India are:- ● NMIMS ● University of Petroleum and Energy Studies
(UPES) ● Jain Online University ● Chandigarh Distance University ● Symbiosis Center For Distance Learning ●
Chandigarh Online University ● Hindustan Institute of Technology &amp; Science ● D.Y. Patil Vidyapeeth
              </p>
            </Accordion.Body>
          </Accordion.Item> */}
         
        </Accordion>
      </div>
    </>
  );
}
