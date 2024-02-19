import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Mr_management from "../../../assets/images/MBA/biandana.png";
import line_h from "../../../assets/images/process/Line.png";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/MBA/Datascience/M1.svg";
import StepB from "../../../assets/images/msc/stepA.png";
import StepA from "../../../assets/images/msc/stepB.png";
import course from "../../../assets/images/MBA/BI/course.svg";
import choose from "../../../assets/images/MBA/choose.svg";
import Common from "../../../assets/images/MBA/BI/Career.svg";
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
     

     {/* <h1> buisnesss analytics</h1> */}


      <Searchform />
      <img src={Mr_management} alt="hr Management" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>Why you should choose MBA in Business Intelligence & Analytics</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              MBA in financial markets management program prepares the students
              key positions in finance like banks, research and analysis. The
              course is advantageous for students who wish to combine work and
              higher education in several ways. The program enables the students
              to be more flexible.
            </p>
          </div>



          <div className="section">
            <h3>Admission Procedure Of Online/Distance</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The course enables more flexibility for the students. To apply for
              this career, students must hold a bachelor's degree or equivalent
              in any relevant subjects. Candidates at any age are welcome to
              take part in the course.
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
              The program offers a semester-based online and distance MBA in
              Financial Markets with four 6-month semesters. Many universities
              that offer online and distance MBA in Financial markets are
              accredited and approved by the NAAC and the UGC.
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
                    <li>Financial Markets & Research </li>
                    <li>Secondary Market Operations</li>
                    <li>Equity derivatives</li>
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
                    <li>Technical Analysis</li>
                    <li>Materials Management </li>
                    <li>Fundamental Analysis & Portfolio Management</li>
                    <li>Commodities & Currency Derivatives</li>
                    <li>Elective</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>
                      Algo Trading & blockchain technology for stock markets
                    </li>
                    <li>Mutual funds and portfolio construction</li>
                    <li>Financial planning, insurance & wealth management</li>
                    <li>Marketing and Management of Financial Services</li>
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
              <span className="m-0 p-0">
              <img src={course} className="img-fluid" alt="Hrm page image" />
            </span>
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
            <span className="m-0 p-0">
              <img src={choose} className="img-fluid" alt="Hrm page image" />
            </span>
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
          <h1 className="Accordi">Business Intelligence And Analytics FAQ</h1>
          <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>What is the duration of an online and distance MBA in Business Intelligence and Analytics?</h5>
            </Accordion.Header>
            <Accordion.Body>
          <p>The duration of an online and distance MBA in Business Intelligence and Analytics is 2 years and is divided into 4 equal semesters.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>Do I need the experience to pursue an online & distance MBA in Business Intelligence and Analytics?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Candidates do not need any work experience but they must have a bachelor’s degree from a recognized university with a minimum of 50% marks for admission.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              What jobs can I get after the completion of an online MBA in Business Intelligence and Analytics?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              A student will get jobs like a management consultant, supply chain analyst, operations analyst, etc
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
              Do online and distance MBA courses provide online lectures?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Yes, you will get online lectures for your online and distance MBA programs.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
