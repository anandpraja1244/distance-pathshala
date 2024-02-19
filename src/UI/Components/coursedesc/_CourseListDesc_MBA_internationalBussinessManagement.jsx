import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import int_Business from "../../../assets/images/MBA/int_Business.png";
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
           Best Online & Distance MBA In International Business Management colleges in
          India | Distance Pathshala
        </title>
        <meta
          name="description"
          content="Find here Best Online and Distance MBA inInternational Business
          Management courses and colleges/ Universities in India with Distance Pathshala."
        />
        <meta
          name="keywords"
          content="MBA in International Business
          Management Distance University"
        />
      </Helmet>

      {/* <h1>Finance Management MARKET not</h1> */}

      <Searchform />
      <img src={int_Business} alt="hr Management" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>
              Why should you choose a Distance MBA In International Business
              Management?
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              A distance MBA in the International Business Management program is
              an advanced professional degree. In this area of specialization,
              management classes will primarily focus on business and the
              effective tactic of International business marketing for promoting
              and boosting sales. The integrated marketing strategy, supplier
              manager, investment banking manager, etc., are all covered in this
              program.
            </p>
          </div>

          <div className="section">
            <h3>Explore Advanced Career Opportunities </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              After completing their degree program, interested candidates can
              look for employment opportunities in the public and private
              sectors. Graduates of this program can pursue a wide range of
              careers, including export coordination, account management, brand
              management, and more.
            </p>
          </div>

          <div className="section">
            <h3>Earn a High Salary </h3>
            <p>
              A candidate will eventually be qualified to work in the
              International Business sector. Once the course is completed,
              students can obtain amazing and mesmerizing benefits, including
              high-level employment.
            </p>
          </div>
          {/* <div className="section">
            <h3>Eligibility Criteria </h3>
           <li>Bachelor’s degree from a recognized university with 50% or more.</li>
<li>	Few colleges may ask for work experience of 1-2 years.</li>
	<li>There is no entrance exam needed for most of the universities providing MBA in Oil and Gas Management course.</li>

          </div> */}

          <div className="section">
            <h3>Admission Procedure Of Online/Distance</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Students are pursuing a Distance MBA In International Business
              Management and will complete the program in two years via an
              online/distance program. Please read the important information
              before applying for enrollment.
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
                Here is a common procedure to take admission in the Distance MBA
                in
                <br></br>International Business Management
              </p>
              <img src={StepA} alt="admin" className="mw-100 mt-5" />
              <img src={StepB} alt="admin" className=" w-100 mt-5" />
            </div>
          </div>

          <div className="section">
            <h3>Course Subjects</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              There are 4 semesters in Online and Distance MBA In International
              Business Management. The duration of an Online and Distance MBA In
              International Business Management is 2-4 years candidates can
              check the syllabus given below in table:
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li> Economics & Management Decisions </li>
                    <li> Financial Management</li>
                    <li> Marketing Management </li>
                    <li>
                      {" "}
                      Quantitative Techniques for management applications{" "}
                    </li>
                    <li> Operations & Material Management </li>
                    {/* <li> Organizational behaviour</li>
                    <li>Strategy management </li> */}
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li> Human Resource Management </li>
                    <li> Customer Relationship Management </li>
                    <li> Project Management & Contract Administration </li>
                    <li> Data Analytics </li>
                    <li> Research Methodology </li>
                    {/* <li> Ethics and risk assessments of trade</li>
                    <li> Project management</li> */}
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
                    <li>International Business</li>
                    <li>Foreign Exchange Management and Trade Finance </li>

                    <li>International Marketing Management </li>
                    <li>Foreign Trade Policy, Procedure, and Documentation </li>
                    {/* <li>Commodities & Currency Derivatives</li>
                    <li>Elective</li> */}
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>International Business Law</li>
                    <li>International Finance Management </li>
                    <li>Mergers & Acquisition & Corporate Restructuring </li>
                    <li>Dissertations </li>
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
              Remember these points as you select the best university for your
              career. Many universities provide online and distance MBA in
              International Business Management programs, so make an informed
              decision.
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
              One of the most popular courses today is international business
              management. After completing this course, you will have many
              exciting career opportunities. Jobs such as manager of suppliers,
              manager of investment banking, and many more.
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
              One of the most popular courses today is international business
              management. After completing this course, you will have many
              exciting career opportunities. Jobs such as manager of suppliers,
              manager of investment banking, and many more.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">International Business Management FAQ</h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>Which is preferable, a distance MBA or an online MBA?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The University Grants Commission has approved that both courses
                have equal value, making them both equal in the eyes of the law
                as online and distance learning (UGC).
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>Do employers recognize a distance MBA?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Yes, degrees earned through distance learning are recognized for
                employment in positions with both state and federal governments.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>Is an entrance exam required for a distance MBA?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                In India, most private MBA colleges and privately deemed
                universities offer direct distance MBA admission without an
                entrance exam.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>What are the requirements for a distance MBA?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Graduate Degree in Any Stream: IGNOU/NMIMS and other Distance
                Learning MBA Universities and Institutes require a minimum GPA
                of 50%.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>Is work experience required for the IGNOU MBA?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                No, work experience is not a requirement for admission to the
                MBA programmes at IGNOU, but it is for the MBF programme.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
