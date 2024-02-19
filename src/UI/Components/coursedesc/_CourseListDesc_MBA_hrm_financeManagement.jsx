import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Mr_management from "../../../assets/images/MBA/hrm.png";
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
      <Helmet>  Healthcare Management
      <title>
        Online & Distance MBA In  HRM and Finance  Management colleges in India | Distance Pathshala
        </title>
        <meta
          name="description"
          content="Get the Best Online and Distance MBA in  HRM and Finance  Management distance learning colleges/University in India. Distance Pathshala is Best option to advance your career."
        />
        <meta name="keywords" content="MBA In  HRM and Finance  Management colleges" />
      </Helmet>

      {/* <h1>international finance not</h1> */}

      <Searchform />
      <img src={Mr_management} alt="hr Management" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>Why you should choose MBA in HRM and finance management? </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            The course is designed in such a way that students will get to know the In and Out and
receive in-depth knowledge. Aspirants will also get to the concepts of the finance,
management and human resource corporate world. Every year many students take admission
in this MBA course offered by top universities and institution.
Collaborating with various people
More employees are supposed to be able to function in any environment in this completely
globally connected world. To work in this environment, an aspirant requires language skills
and adaptability. Employee should be able to collaborative in multicultural environments.
Improve your digital skills
The course will allows you to explore the latest platforms used for communications and
sharing files. You might already be familiar with the common online tools that make your
work easier. Aspirants will have the greatest opportunities to enhance your digital skills.
            </p>
          </div>

         

          <div className="section">
            <h3>Earn High Salary</h3>
            <p>
            An HR Manager is among one of the highest earning jobs that an individual can get after doing an
MBA in HR via Distance learning. The average salary for a HR Manager in India is 6.6lakhs per
annum.
            </p>
          </div>
          <div className="section">
            <h3>Here is a common procedure to take admission in distance MBA in HRM and Finance
management:</h3>
            <li> Initially, you have to visit the particular university official website to which you will
take admission.</li>
<li>Fill out the application form with the required details and register yourself.</li>
<li>Upload the required documents in the form and apply. Any registration fee ensures to
pay via the mode of payment mentioned on the website.</li>
<li> Once you are done with your registration, you will receive the confirmation mail along with the enrolment number.</li>
          </div>

          <div className="section">
            <h3>Admission Procedure Of Online/Distance</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Distance HRM and finance Management is a two-year professional degree course. The
students should prepare a student for future development. The course will bring out the
leadership qualities of finance and management. The syllabus encourages the aspirants to
understand the concepts of financial and accounting set of skills.
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
                Here is a common procedure to take admission in the distance MBA in  <br></br>HRM and finance management.
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
            It is a two-year professional degree course divided into four different semesters. After
completing this course study, aspirants will get placed in different big firms via the placement
drive.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>Principles of Economics & Markets</li>
                    <li> Accounting & Finance</li>
                    <li>Managerial Effectiveness & Ethics</li>
                    <li>
                    Quantitative Techniques & Analytics
                    </li>
                    <li> Organizational Behavior & Human
Resources Management</li>
                   
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Entrepreneurship</li>
                    <li>Marketing Management & Research</li>
                    <li>Banking & Financial Services </li>
                    <li>Talent Acquisition & Management</li>
                    <li>Investment Analysis and Portfolio Management</li>
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
                    <li>Direct Tax</li>
                    <li>Operations Management</li>
                    <li>Employee Reward Management </li>
                    <li>Performance Management System</li>
                    <li>Open Elective</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>
                    Strategic Human Resource Management
                    </li>
                    <li> Mutual funds and portfolio construction</li>
                    <li>Organization Development & Change

Management</li>
                    <li>Wealth Management &amp; Behavioral Finance</li>
                    <li>Cross-functional Elective</li>
                    <li>Master Thesis / Project</li>
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
            Once you decide to pursue MBA in Finance management, it is essential to choose the right
university. The following points are essential in selecting the right university.
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
          <div className="section">
            <h3>Career Opportunities  </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            After your Distance MBA in HRM, you can choose to work in Finance Management, Marketing, Human
Resource Management, Accounting, Insurance, Risk Management, etc.
            </p>
          </div>
          <div className="section">
            <h3>Summing it up</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Distance MBA in HRM and Finance management is the most popular course most people
prefer. After the completion of this course, aspirants will have great career opportunities.
Ensure to choose the right universities to move forward in your career.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">HRM and Finance management FAQ</h1>
          <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>Is it worth doing Online MBA in HRM?</h5>
            </Accordion.Header>
            <Accordion.Body>
        <p>Definitely! If you are thinking of pursuing MBA in Human Resource Management for your career via
distance learning, your decision is absolutely right. There are a lot of advantages to earning an MBA
in Human Resources (HR). Moreover, it is also approved by UGC-DEB.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>Is MBA in HRM difficult?</h5>
            </Accordion.Header>
            <Accordion.Body>
 <p>MBA in Human Resource Management is easier as compared to some other MBA Specializations. If
you have an interest in Finance, you will find no difficulty doing this course at all. According to recent
surveys and reports, MBA in HRM gives you the opportunity to opt HR which is among the top
happiest jobs after your Distance MBA Degree.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              Can I get HR Job with Distance MBA?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
        <p>Yes, you get many job opportunities such as Assistant HR Manager, HR Manager, Training and
Development Officer after doing an MBA in HR Management online.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
              Is Online MBA in Human Resource Management and Finance in demand?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              MBA in HR is one of the most in-demand Specializations of Distance MBA. The future of a candidate
after an Online MBA in Human Resource Management is bright as the demand for an HR is growing
day by day. It has a solid scope as all companies require HR for proper functioning of their firm.
              </p>
            </Accordion.Body>
          </Accordion.Item>
   
        </Accordion>
      </div>
    </>
  );
}
