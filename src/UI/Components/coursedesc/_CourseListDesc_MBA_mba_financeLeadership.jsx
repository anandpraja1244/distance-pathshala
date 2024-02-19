import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Mr_management from "../../../assets/images/MBA/finanleader.png";
import line_h from "../../../assets/images/process/Line.png";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/MBA/Datascience/M1.svg";
import StepB from "../../../assets/images/msc/stepA.png";
import StepA from "../../../assets/images/msc/stepB.png";
import course from "../../../assets/images/MBA/FinanceL/course.svg";
import choose from "../../../assets/images/MBA/choose.svg";
import Common from "../../../assets/images/MBA/FinanceL/Career.svg";
import Accordion from "react-bootstrap/Accordion";

import Content from "../../../assets/images/process/content.png";
import Rankings from "../../../assets/images/process/rankings.png";
import Structure from "../../../assets/images/process/structure.png";
export default function CourseListDesc() {
  return (
    <>
      <Helmet>
      <title>
               Best Distance MBA Finance and Leadership Management education courses online in India
        </title>
        <meta
          name="description"
          content="Update your skills and credentials from the best Online and Distance MBA Finance and Leadership Management colleges/ Universities in India at Distance Pathshala."
        />
        <meta name="keywords" content="Distance MBA Finance and Leadership Management Education online" />
      </Helmet>

      {/* <h1>finance n leadershiop</h1> */}

      <Searchform />
      <img src={Mr_management} alt="hr Management" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>
              Why you should choose MBA in Finance & Leadership Management? 
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Distance MBA Finance and Leadership Management Education online" />
            </span>
            <p>
              This course is the perfect option for those who prefer to become
              financial and leadership experts. With the course, aspirants can
              flourish in their life via highly-paid jobs in the financial
              institutions. In this online program the learning journey is
              broken up into learning modules.
            </p>
          </div>

          <div className="section">
            <h3>Enhance Your Skills </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Do you prefer to enhance your ability to negotiate, communicate or
              collaborate with your team? This course will strengthen your
              skills as a leader and decision-maker within your company. In
              every industry, leadership and management skills are very
              important qualities.
            </p>
          </div>

          <div className="section">
            <h3>Earn More </h3>
            <p>
              You can increase your earning potential with this leadership and
              management course. With this qualification, you may be qualified
              for a raise or more senior position. The course will help you to
              improve your earning potential.
            </p>
          </div>
          <div className="section">
            <h3>Boost your Competitive Edge</h3>
            <p>
              Completion of this course demonstrates your business expertise.
              The course will build your resume and can make you more qualified
              for senior positions especially compare to other individual. You
              can make qualified for senior position than the individual who
              haven’t invested in their professional development. The course
              will show drive and passion for improvement.
            </p>
          </div>

          <div className="section">
            <h3>Admission Procedure Of Online/Distance</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Aspirants should be graduated at least in the relevant stream from
              a recognized university to be eligible for the course. To pursue
              this course, students should graduated from an authorized and
              recognized university.
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
                Here is a common procedure to take admission in the distance MBA <br></br>Finance & Leadership Management
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
              In this course, students get to learn more in-depth knowledge
              about the core and basic principles of operation management, data
              maintenance and a lot more. The professional degree imparts
              knowledge on management and financial control and money resources.
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
                    <li> Financial Reporting</li>
                    <li> Management Accounting </li>
                    <li>Managing Finance in a Digital World</li>
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
                    <li> Advanced Financial Reporting</li>
                    <li>Advanced Management Accounting</li>
                    <li>Managing Performance</li>
                    <li>Fundamental Analysis & Portfolio Management</li>
                    <li>Elective</li>
                    <li>----</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>Analytics For Finance</li>
                    <li>Financial Markets</li>
                    <li>Strategic Managemen</li>
                    <li>Risk Management </li>
                    <li>Financial Strategy</li>
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
              Once you decide to pursue MBA in Finance management and leadership
              management, it is essential to choose the right university. The
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
              The professional degree imparts knowledge on management and
              financial control and review of the collection. After completing
              the course, aspirants will be offered by different big firms and
              government departments at the following positions
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
              Online and distance MBA in Finance and leadership management
              course is the most popular course most people prefer. After
              completion of this course, aspirants will have great career
              opportunities to move forward in their careers.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Finance & Leadership Management FAQ</h1>
          <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
                What is the duration of the MBA in Finance and Leadership
                Management course?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The duration of the course is of 2 years which is decided into
                four semesters, after that it includes a summer/winter
                internship and the placement at the end of the fourth semester.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
                A science graduate, can pursue an MBA degree course in finance
                and leadership management?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Yes, a science graduate or can say any other stream holder can
                pursue this online degree. More importantly, the key factor is
                that you are highly interested in knowing and learning the
                skills of accounting and economics.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
                What is the average CTC offered to MBA in finance and leadership
                management in India?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The top firms, organizations, or MNCs offered an average of RS
                10-15 lakh per annum CTC. overall the starting average salary of
                this programme is over 6.50 lakh per annum according to the
                skills and knowledge you have.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
                Online and distance MBA in marketing and MBA in finance and
                leadership management, which specialization has more high scope?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Both online marketing and finance and leadership management
                courses are very popular and have a lot of scope, as both are
                the two different pillars of business organization of a
                corporate world. The candidate must choose either of the two
                specializations which is based on their skills, interests,s and
                future goals.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
