import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Banking_insurance from "../../../assets/images/MBA/Banking_insurance.png";
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
          Online & Distance MBA In Banking and Insurance Management colleges in
          India | Distance Pathshala
        </title>
        <meta
          name="description"
          content="Get the Best Online and Distance MBA in Banking and Insurance  Management distance learning colleges/University in India. Distance Pathshala is Best option to advance your career."
        />
        <meta
          name="keywords"
          content="MBA In Banking and Insurance  Management colleges"
        />
      </Helmet>

      {/* <h1>banking finnance not</h1> */}

      <Searchform />
      <img
        src={Banking_insurance}
        alt="MBA in Banking and Insurance  Management Distance University"
        className="w-100"
      />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>Why should you choose MBA in Banking and Insurance?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Students who want to enhance their careers, lack academic
              experience, network internationally, develop their managerial
              abilities, and have flexible schedules should participate in this
              program. Its a course with a lot of alternatives and a real
              degree. With the aid of the course&#39;s simple study plan and
              pre-recorded online sessions, you may study at your own pace.
              Successful program graduates might get employment at several
              prestigious companies.
            </p>
          </div>

          <div className="section">
            <h3>Examine Profession Opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              This program is for students who wish to further their
              professions, lack degree experience, have flexible schedules, and
              lack managerial skills. It&#39;s a program that offers a lot of
              options and a legitimate degree. You may study at your speed with
              the help of the course&#39;s straightforward study plan and
              pre-recorded online lessons. Graduates of a successful curriculum
              may get employment at several famous businesses.
            </p>
          </div>

          <div className="section">
            <h3>Earn a High Salary</h3>
            <p>
              You might raise your salary by using the information you gain from
              this degree. Individuals will eventually be qualified to hold the
              positions of Associate in Investment Banking and Equity Manager.
              After finishing the program, the student would be able to obtain
              the greatest job with excellent incentives.
            </p>
          </div>

          <div className="section">
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
                Here is a common procedure to take admission in the MBA in
                <br></br> Banking and Insurance .
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
              The MBA in Banking and Insurance program, which is offered online
              and through distance learning, focuses on the overall development
              of the students to prepare them for demanding management
              responsibilities in the banking and insurance sector. The two
              years and four semesters make up the undergraduate MBA program.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>Computer Applications for Business</li>
                    <li>Business Communication</li>
                    <li>Marketing Management</li>
                    <li>Organization Design</li>
                    <li> Legal and Business Environment</li>
                    <li>
                      Business Statistics and Analytics for Decision Making
                    </li>
                    <li>Managerial Economics</li>
                    <li>Organizational Behavior</li>
                    <li>Financial Reporting, Statements, and Analysis</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Indian Financial System and Financial Markets</li>
                    <li>Marketing Research</li>
                    <li>Indian Economy and Policy</li>
                    <li>Principles and Practices of Banking</li>
                    <li>Advanced Financial Reporting</li>
                    <li>Investment Analysis and Portfolio Management</li>
                    <li>Human Resources Management</li>
                    <li>Corporate Finance</li>
                    <li>Corporate Social Responsibility and Sustainability</li>
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
                    <li>Operations Management</li>
                    <li>International Finance</li>
                    <li>Project Management</li>
                    <li>Audit and Assurance </li>
                    <li>Derivatives</li>
                    <li>
                      Project Appraisal &amp; FinanceManagement Skills for
                      Effectiveness
                    </li>
                    <li>Wealth Management</li>
                    <li>Insurance</li>
                    <li>Quantitative Techniques</li>
                    <li>Retail Banking</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>Indian Ethos and Business Ethics</li>
                    <li>Corporate Strategy</li>
                    <li>Credit and Risk Management</li>
                    <li>Corporate Banking</li>
                    <li>Investment Banking</li>
                    <li>Financial Modeling and Analytics </li>
                    <li>SIP and Research</li>
                    <li>Entrepreneurship</li>
                    <li>Financial Strategy</li>
                    <li>........</li>
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
              If you want to pursue an MBA, you must pick the correct college.
              General. Keep the following things in mind when selecting the best
              institution.
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
              The roles of Credit Analyst, Investment Banking Associate, Equity
              Manager, Investment Banking Analyst, Insurance Investigator,
              Insurance Claims Adjustor and Business Consultant are all open to
              successful distance learners who acquire an MBA in Banking and
              Insurance. Through this online degree program, you develop
              analytical and problem-solving abilities.
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
              This subject is taught in several universities. If a candidate
              plans to participate in an online or distance learning MBA program
              in banking and insurance, it is advised that they have a career
              goal in public and private insurance, financial companies, or
              banks.
            </p>
          </div>
          <div className="text-center">
            <h1 className="Accordi">Banking and Insurance FAQ</h1>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <Accordion defaultActiveKey="0" className="mt-3">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h5>
                    What is the eligibility requirement for an online/distance
                    MBA in Banking and Insurance?
                  </h5>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    A bachelor&#39;s degree in any field from a recognized
                    college with a minimum of 50% marks is the minimum
                    requirement for an online/distance MBA in Banking and
                    Insurance.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="mt-2">
                <Accordion.Header>
                  <h5>
                    What is the fee for the online MBA in Banking and Insurance?
                  </h5>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Different universities may charge different amounts for the
                    online MBA in Banking and Insurance. However, the typical
                    charge is about INR 1.5 lac.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className="mt-2">
                <Accordion.Header>
                  <h5>
                    Is the duration for an online MBA in Banking and Insurance
                    course the same as the offline course?
                  </h5>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Yes, the online MBA in Banking and Insurance program lasts
                    for the same two years as the traditional degree.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className="mt-2">
                <Accordion.Header>
                  <h5>
                    Yes, the online MBA in Banking and Insurance program lasts
                    for the same two years as the traditional degree.
                  </h5>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    You will be qualified for occupations such as investment
                    banking analyst, credit analyst, insurance investigator,
                    equity manager, business consultant, and similar ones after
                    completing the online/distance MBA in Banking and Insurance
                    program.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4" className="mt-2">
                <Accordion.Header>
                  <h5>
                    What is the career scope of an MBA in Banking and Insurance?
                  </h5>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    The employment you obtain after earning your online or
                    distance MBA in Banking and Insurance is well-known,
                    lucrative, and secure. Consequently, a profession in this
                    subject has a broad and promising future.
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
