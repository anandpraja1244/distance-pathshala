import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Mr_management from "../../../assets/images/MBA/Marketing_hr.png";
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
          Distance learning Masters Programs in Applied Finance 2022
        </title>
        <meta
          name="description"
          content="Distance MSC Applied Finance course at Distance Pathshala is offered with numerous advantages and facilities to the students online."
        />
        <meta name="keywords" content="Applied Finance Distance Education" />
      </Helmet>
      {/* <h1>buisness management</h1>
      <h1>market and hr not</h1> */}

      <Searchform />
      <img src={Mr_management} alt="hr Management" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>Why should you choose MBA in Marketing and HR Management? </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Students should apply to this program if they want a flexible schedule, affordable standards, and worldwide networking. It&#39;s a
degree-granting course with a wide range of alternatives. With the aid of the course&#39;s simple study plan and pre-recorded
online courses, you may study at your own pace. Successful schools may employ their graduates for positions at several
well-known.
            </p>
          </div>

          <div className="section">
            <h3>Examine Profession Opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Candidates can learn about a variety of fascinating subjects connected to managerial accounting, financial reporting, and
financial engineering in this course. The purpose of this course is to help you develop the necessary skill set. Jobs like a
brand manager, channel head, and human resource manager opportunities By utilizing the knowledge you receive from this
degree, you could be able to increase your wage. After graduation, candidates will be able to find employment. The student
will be able to earn the perfect experience with fantastic benefits after having completed the program.
            </p>
          </div>

          <div className="section">
            <h3>Be Your Own Boss</h3>
            <p>
              When you choose MBA in Business Management, you will not only have
              fantastic career opportunities. You will also have the core
              element to start your own business and all the requirements of a
              business idea to get you started. Having a business management
              degree will put you on the path to being your boss. If you aspire
              to be a businessman, you can use this degree.
            </p>
          </div>

          <div className="section">
            {/* <h3>Admission to the MBA in Marketing and HR Management Program includes the following
steps:</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
           <p>Step 1: To discover more about the program and how to apply, visit the universitys official website.</p>
       <p>Step 2: After registering, complete the application form with your details.</p>
       <p>Step 3: Step 3 of the application process requires you to upload your documents.</p>
       <p>Step 4: Step 4 is to mail your application and registration fee.</p>
       <p>Step 5: After that, pay the academic fee using the method recommended by the website. Step 6: Applicants will get an email with a confirmation message and their registration number.</p> */}
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
                Here is a common procedure to take admission in the distance <br></br> Marketing and HR Management
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

          
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>Computer Applications for Business</li>
                    <li>Financial Reporting, Statements, and Analysis</li>
                    <li>Business Communication</li>
                    <li>Business Statistics and Analytics for Decision Making</li>
                    <li>Legal and Business Environment</li>
                    <li>Organization Design</li>
                    <li>Marketing Management</li>
                    <li>Managerial Economics</li>
                    <li>......</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Corporate Social Responsibility and

Sustainability </li>
                    <li>Marketing of Banking and Financial Services</li>
                    <li>Indian Financial System and Financial

Markets</li>
                    <li>Organization Study</li>
                    <li>Marketing Research</li>
                    <li>Corporate Finance</li>
                    <li>Indian Economy and Policy</li>
                    <li>Human Resources Management</li>
                    <li>Talent Acquisition</li>
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
                    <li>Marketing Analytics</li>
                    <li>Project Management</li>
                    <li>Sales Management</li>
                    <li>Operations Management</li>
                    <li>Management Skills for Effectiveness</li>
                    <li>Digital and Social Media Marketing</li>
                    <li>Performance Management System</li>
                    <li>Human Relation Skills</li>
                    <li>Employee Reward Management</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>Strategic Human Resource Management</li>
                    <li>Global Marketing</li>
                    <li> Distribution Management</li>
                    <li>SIP and Research</li>
                    <li>Corporate Strategy</li>
                    <li>International Human Resource Management</li>
                    <li>Entrepreneurship</li>
                    <li>Indian Ethos and Business Ethics</li>
                    <li>......</li>
                  
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
            You need to pick the right college if you want to pursue an MBA. When choosing the ideal institution, bear the following
factors in mind.
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
            Students who complete this online MBA program in marketing and human resource management are qualified to apply for
positions as human resource managers, technical recruiters, employee relations managers, executive recruiters, brand
managers, channel heads, media planners, and HR generalists.
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
            Several colleges offer this field. Candidates for this distance learning and online MBA in Marketing and HR Management
program are recommended to have a career objective in Marketing and HR.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Marketing and HR Management</h1>
          <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>Is the Online/distance MBA in Marketing  HR Management course valid?</h5>
            </Accordion.Header>
            <Accordion.Body>
        <p>The University Grants Commission has accepted the degree, hence it is legitimate (UGC).</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>Where can I apply after an online/distance MBA in Marketing & HRM?</h5>
            </Accordion.Header>
            <Accordion.Body>
            <p>After earning your degree, you can apply with ease to jobs in the banking and financial industries.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              What is the eligibility of an online/distance MBA in Marketing & HRM?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
           <p>To be qualified for the course, candidates must hold a diploma from an accredited university with a minimum
percentage.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
              What is the average salary earned by an HR Manager?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
           <p>Financial analysts often make between Rs. 5LPA and Rs. 8LPA per hour.</p>
            </Accordion.Body>
          </Accordion.Item>
  
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>
              What are the Fees for MBA course Marketing and HRM?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
           <p>The cost of an online or distance-learning MBA in marketing or human resources is typically between Rs. 50000 and Rs.
100000.</p>
            </Accordion.Body>
          </Accordion.Item>
  
        </Accordion>
      </div>
    </>
  );
}
