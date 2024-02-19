import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import mba_analaytics  from "../../../assets/images/MBA/mba_analaytics .png";
import line_h from "../../../assets/images/process/Line.png";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/MBA/Datascience/M1.svg";
import StepB from "../../../assets/images/msc/stepA.png";
import StepA from "../../../assets/images/msc/stepB.png";
import course from "../../../assets/images/MBA/Business/course.svg";
import choose from "../../../assets/images/MBA/choose.svg";
import Common from "../../../assets/images/MBA/Business/Career.svg";
import Accordion from "react-bootstrap/Accordion";
import Content from "../../../assets/images/process/content.png";
import Rankings from "../../../assets/images/process/rankings.png";
import Structure from "../../../assets/images/process/structure.png";
export default function CourseListDesc() {
  return (
    <>
      <Helmet>
      <title>
        Online & Distance MBA In Business Analytics colleges in India | Distance Pathshala
        </title>
        <meta
          name="description"
          content="Get the Best Online and Distance MBA in Business Analytics distance learning colleges/University in India. Distance Pathshala is Best option to advance your career."
        />
        <meta name="keywords" content="MBA In Business Analytics colleges" />
      </Helmet>
      {/* <h1>buisness management</h1>
      <h1>market and hr not</h1> */}

      <Searchform />
      <img src={mba_analaytics } alt="hr Management" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>Why should you choose MBA in Business Analytics?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Students who desire flexible schedules, inexpensive standards, and global networking should enroll in this program. It's a course that offers a legitimate degree and many options. You may study at your speed with the help of the course's straightforward study plan and pre-recorded online classes. Successful program graduates could obtain jobs at many renowned corporations.
            </p>
          </div>

          <div className="section">
            <h3>Examine Profession Opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Candidates may learn about a range of attractive industry sectors in this course. This course's goal is to assist you in acquiring the required skill set. Programming, consumer analysis, statistical analysis, and analysis management are all career options.
            </p>
          </div>

          <div className="section">
            <h3>Earn a High Salary </h3>
            <p>
            You might raise your salary with the information you gain from this degree. In the end, individuals will be qualified to work as market analysts, marketing managers, management consultants, business or analytics specialists, or predictive modelers. After finishing the program, the student would be able to obtain the greatest job with excellent perks.
            </p>
          </div>

          <div className="section">
            <h3>Admission Procedure Of Online/Distance</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Candidates must successfully finish a two-year distance learning program with semesters lasting up to four months to be considered for the MBA in Business Analytics. Before you may register for enrollment, you must meet several requirements.
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

               <br></br>Business Analytics
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
            Students get a solid understanding of artificial intelligence, statistical predictive modeling, decision analysis, marketing, and other topics through the MBA in Business Analytics curriculum offered through online and distant learning. The two years and four semesters of an undergraduate MBA degree.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>	 Economics & Management Decisions</li>
                    <li>Financial Management</li>
                    <li>  Financial Management</li>
                    <li> Operations & Material Management </li>
                    <li>Quantitative Techniques for Management Applications</li>
                    {/* <li>Information Systems for Managers</li> */}
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Human resource management</li>
                    <li>Customer Relationship Management </li>
                    <li>Strategic Management of Technology & Innovation </li>
                    <li>Project Management & Contract Administration </li>
                    <li> Research Methodology </li>
                    {/* <li>Decision Science</li> */}
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
                    <li> Business Analytics</li>
                    <li>Data Mining  </li>
                    <li>Data Management  </li>
                    <li>Data Environment </li>
                    <li>Business Intelligence</li>
                    {/* <li>International Business</li> */}
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>Data Visualization </li>
                    <li>Dissertations</li>
                    <li>Big Data Analytics</li>
                    <li>Programming for Analytics</li>
                    <li>Social & Web Analytics</li>
                    <li>Predictive Modelling</li>
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
            If you want to pursue an MBA degree, you must select the appropriate college. General. Consider the following aspects while selecting the best college.
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
            Students who complete this MBA in Business Analytics degree via distance learning successfully are eligible to apply for jobs as Management consultants, senior data scientists, marketing managers, predictive modelers, and big data analysts. This online degree equips you with problem-solving and analytical expertise. 
            </p>

            <div className="container text-center mt-4">
              <img src={Common} className="img-fluid" alt="Hrm page image" />
            </div>
          </div>
          <div className="section">
            <h3>Summing up</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Students who complete this MBA in Business Analytics degree via distance learning successfully are eligible to apply for jobs as Management consultants, senior data scientists, marketing managers, predictive modelers, and big data analysts. This online degree equips you with problem-solving and analytical expertise. 
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Business Analytics FAQ</h1>
          <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>What is the duration of this online and distance MBA in Business Analytics?</h5>
            </Accordion.Header>
            <Accordion.Body>
        <p>The distance learning and online MBA in Business Analytics program lasts two years and is divided into four equal semesters. It provides the learner with the fundamental business techniques needed to operate analytically.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>What is the salary an online and distance MBA in business analytics person gets?</h5>
            </Accordion.Header>
            <Accordion.Body>
            <p>A fresher who has finished an online or distance learning degree program is eligible for a beginning salary of INR 5–6 lakhs per year, and this amount increases with the level of the job held in the corporate sector.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              Can you apply for an online and distance program without an entrance exam?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
           <p>The majority of distance learning and online colleges simply have a minimum percentage requirement for admission. Depending on your abilities, interests, and the program you completed for graduation, you can enroll or register yourself in the course of your choosing for admittance.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
              What are some top distance MBA colleges in India?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
           <p>Chandigarh University, IGNOU, NMIMS, Jaipur National University, Amity University, and Chandigarh University are some of the best remote learning MBA institutes in India.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>
              How many years are provided to complete the Online & Distance MBA in Business Analytics?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
           <p>How many years are provided to complete the Online & Distance MBA in Business Analytics?</p>
            </Accordion.Body>
          </Accordion.Item>
  
        </Accordion>
      </div>
    </>
  );
}
