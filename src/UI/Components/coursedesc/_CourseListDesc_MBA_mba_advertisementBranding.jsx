import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Mr_management from "../../../assets/images/MBA/datananaly.png";
import line_h from "../../../assets/images/process/Line.png";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/MBA/Datascience/M1.svg";
import StepB from "../../../assets/images/msc/stepA.png";
import StepA from "../../../assets/images/msc/stepB.png";
import course from "../../../assets/images/MBA/Datascience/M4.svg";
import choose from "../../../assets/images/MBA/choose.svg";
import Common from "../../../assets/images/MBA/Datascience/M2.svg";
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


      {/* <h1>data science and analytic</h1> */}


      
      <Searchform />
      <img src={Mr_management} alt="hr Management" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>
              Why should you choose MBA in Data science & analytics management?
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              There are many benefits in pursuing MBA in Data science and
              analytics managements programs. Every program in this discipline
              is designed by considering the current industry. If you prefer to
              pursue this course, ensure to earn from a reputable and globally
              recognized university.
            </p>
          </div>

          <div className="section">
            <h3>High Demand </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              One of the major reasons why most people prefer data science and
              analytics management is it is high demand. This course is able to
              command higher salaries and enjoy their pick of the available
              jobs. Prospective job seekers have many opportunities in this
              field. It is one of the fast growing jobs on many platforms.
            </p>
          </div>

          <div className="section">
            <h3>Analytics is Everywhere </h3>
            <p>
              With the boom in big data, there are all sort of new opportunities
              cropping up for talented employees. By pursuing this course, there
              is a good career opportunity for the aspirants.
            </p>
          </div>

          <div className="section">
            <h3>Admission Procedure Of Online/Distance</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Aspirants who are interested in and capable of working with a
              sense of technological can prefer to pursue this course. People
              who are looking to work and study at the same time will get
              benefited from this course.
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
              MBA in Data science and analytics consists of four semesters. To
              complete your education, you can choose to attend an online
              school. Every subject is designed to meet the industry standard.
              Here is a list of subjects included in Data science and analytics
              management.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>Principles of Economics & Markets</li>
                    <li> Managerial Effectiveness & Ethics</li>
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
                    <li>Python for Data Science </li>
                    <li>Statistics for Decision Making</li>
                    <li>Data Wrangling and Exploratory Data Analysis</li>
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
                    <li>Data Visualisation</li>
                    <li>Business Analytics </li>
                    <li>Data Analytics using Excel</li>
                    <li>Elective</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>SQL for Data Science</li>
                    <li>Predictive Analytics using Machine Learning</li>
                    <li>AI for Business</li>
                    <li> Web & Social Media Analytics</li>
                    <li>Elective</li>
                    <li>Project</li>

                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <h3>Other Online/distance MBA course specializations fdsfs </h3>
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
            Once you decide to pursue MBA in healthcare management, it is
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
              MBA in Financial market management helps students get managerial
              positions in the fiancé sector. When you pursue this course, you
              are limited to banks since you will get an edge over others in
              getting reputed jobs in financial markets. Here are some career
              opportunities that you can refer to after completing this course.
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
              The aspirants can even get the high package as the minimum salary
              in this field. Before choosing the course, you have to choose the
              right university to step up in your career. Based on your
              convenience, you can choose the mode of learning.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Data Science And Analytics Management FAQ</h1>
          <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>Is an MBA in Data Science and Analytics worth it?</h5>
            </Accordion.Header>
            <Accordion.Body>
         <p>Yes, an MBA in Data Science and Analytics is a very good course for students with an interest in financial and investment analysis skills.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>How many years will it take to complete the online and Distance MBA in Data Science and Analytics?</h5>
            </Accordion.Header>
            <Accordion.Body>
 <p>It takes a minimum of two years to complete the course with four semesters.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              Is an Entrance Exam in Distance and Online MBA in Data Science and Analytics required?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
        <p>Yes, Online and distance MBA also need an entrance test for the admission process.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
              Can I upload assignments and projects online?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Yes, definitely. You can upload projects and assignments online using a web portal.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>
              What are the eligibility requirements for an MBA in Data Science and Analytics?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The candidates must have a bachelor's degree with a minimum percentile from a recognised university.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5" className="mt-2">
            <Accordion.Header>
              <h5>Is an MBA in Data Science and Analytics provided through online learning?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Yes, the course is very much available in the online program.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
