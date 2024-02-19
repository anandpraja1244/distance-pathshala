import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Sports from "../../../assets/images/MBA/Sports.png";
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
        Online & Distance MBA In Sports  Management colleges in India | Distance Pathshala


        </title>
        <meta
          name="description"
          content="Get the Best Online and Distance MBA in Sports  Management distance learning colleges/University in India. Distance Pathshala is Best option to advance your career."
        />
        <meta name="keywords" 
        content="MBA In Sports  Management  colleges" />
      </Helmet>

      {/* <h1>international finance not</h1> */}

      <Searchform />
      <img src={Sports} alt="MBA In Sports  Management  colleges" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>Why should you choose a Distance MBA in Sports Management? </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            A distance learning MBA in Sports Management is a high-level professional degree. Operations research, sports law,
risk management, sports medicine, and nutrition, among other topics, are taught in online MBA programs in sports
management. Student job opportunities include those as sports event managers, player managers, franchise owners,
sports consultants, etc.
            </p>
          </div>

          <div className="section">
            <h3>Multiple Career Choices </h3>
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
            <h3>Explore Advanced Career Opportunities</h3>
            <p>
            Interested candidates can look for employment opportunities after finishing their degree program. Graduates of this
program can work as sports consultants, managers, and administrators, among many other occupations.
            </p>
          </div>
          <div className="section">
            <h3>Earn a High Salary</h3>
            <p>
            A candidate will be qualified to work in the sports management industry. Students can get amazing and interesting
benefits after finishing the course, including high-level employment.
            </p>
          </div>

          <div className="section">
            <h3>Admission Procedure Of Online/Distance</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Learners are pursuing a Stance MBA In Sports Management and will complete the program in two years via an
online/Stance program. Please read the necessary details before applying for registration.
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
                Here is a common procedure to take admission in the distance MBA in  <br></br>Sports Management.
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
            There are 4 semesters in Online and Stance MBA in Sports Management. The duration of an Online and Stance MBA
in Sports Management is 2-4 years students can review the syllabus given below in the table:
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>Marketing Management</li>
                    <li>Business Statistics</li>
                    <li>Principles of Management</li>
                    <li>
                    Organizational Behaviour
                    </li>
                    <li>Financial Accounting</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Entrepreneurship Management</li>
                    <li>Marketing Strategy  Applications</li>
                    <li>Human Resource Management </li>
                    <li>Cost  Management Accounting</li>
                    <li>Financial Management</li>
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
                    <li>Sports Organization And Administration</li>
                    <li>Sports Facilities Planning And Management</li>
                    <li>Ethics In Sports</li>
                    <li>Sports Media, Communications Event
Management </li>
                    <li>Contemporary Issues In Sports</li>
                   
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>
                    Coaching Mentoring
                    </li>
                    <li>Sports Physiology Kinesiology</li>
                    <li>Sports Betting Corruption</li>
                    <li>Sports Psychology Sociology</li>
                    <li>Sports Medicine Nutrition</li>
                 
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
            Remember this information as you select the most suitable university for your career. Many universities provide
online and Stance MBA in Sports Management programs, so make an informed decision.
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
            After completing an MBA in Sports Management, you will have many exciting career opportunities. Jobs such as
Sports Consultant, Manager, Administrators and many more.
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
            Many universities are offering this course. Online and Stance MBA in Sports Management are ideal for those who
wish to pursue careers in the Sports Management world.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Sports Management FAQ</h1>
          <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>What are the career opportunities for an online MBA in Sports Management?</h5>
            </Accordion.Header>
            <Accordion.Body>
        <p>Students with an online MBA in Sports Management can easily pursue jobs such as sports consultant, project manager, and
so on.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>What are the basic requirements for an online MBA in Sports Management?</h5>
            </Accordion.Header>
            <Accordion.Body>
 <p>The applicants must have received a degree from an accredited university with a minimum GPA of 50%.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              What is the average salary for an MBA in sports management?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
        <p>However, you can anticipate a starting salary of between 2.5 and 3 lakh rupees annually.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
              Which is better: distance learning or online learning?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              As online and distance learning has been recognized by the University Grants Commission as having equal value, both
courses are equivalent in the eyes of the law (UGC).
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
              Is sport management a viable career path?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Multiple career paths will be made available by degrees in sports management. You must choose whether you want to work
more on the business side or be a manager, coach, fitness professional, etc. who works directly with the players and the team.
              </p>
            </Accordion.Body>
          </Accordion.Item>
   
        </Accordion>
      </div>
    </>
  );
}
