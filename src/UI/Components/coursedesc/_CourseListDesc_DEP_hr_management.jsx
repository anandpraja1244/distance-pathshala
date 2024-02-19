import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import hr_Manage from "../../../assets/images/MBA/hr_Manage.png";
import line_h from "../../../assets/images/process/Line.png";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/MBA/Datascience/M1.svg";
import StepB from "../../../assets/images/msc/stepA.png";
import StepA from "../../../assets/images/msc/stepB.png";
import course from "../../../assets/images/MBA/HR/course.svg";
import choose from "../../../assets/images/MBA/choose.svg";
import Common from "../../../assets/images/MBA/HR/Career.svg";
import Accordion from "react-bootstrap/Accordion";
export default function CourseListDesc() {
  return (
    <>
      <Helmet>
        <title>
          Online & Distance MBA In HR Management colleges in India | Distance
          Pathshala
        </title>
        <meta
          name="description"
          content="Get the Best Online and Distance MBA in HR Management distance learning colleges/University in India. Distance Pathshala is Best option to advance your career."
        />
        <meta name="keywords" content="MBA In HR Management  colleges" />
      </Helmet>

      {/* <h1>Stragic HR</h1> */}

      <Searchform />
      <img src={hr_Manage} alt="hr Management" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>
              Why Should You Choose Online and Distance Diploma in HR Management
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Whether it is to gain new skills or hone existing skills, an
              online and distance Diploma in HR Management is definitely an
              ideal choice. A diploma in HR Management is a short-term course
              that is totally job-oriented and lets you enter the corporate
              world faster. HR Management is a lucrative career field as you get
              great salary packages. This diploma in online and distance mode is
              an even better and in fact a wiser option as you have the
              flexibility to pursue an internship or a job at the same time. So,
              here you are getting both your diploma and work experience at the
              same time. And, when you talk about the corporate world, you know
              how much work experience matters!
            </p>
          </div>

          <div className="section">
            <h3>Explore Advanced Career Opportunities </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              With the degree, online and distance in MBA in HR Management you
              will be there to the firm to right and productive workforce which
              can help it to grow in the competitive world. You can apply for
              the post of HR manager, talent acquisition manager, etc
            </p>
          </div>

          <div className="section">
            <h3>Earn a High Salary </h3>
            <p>
              Online and Distance MBA in HR Management can help you to earn an
              average package of 6lacs to 15 lacs per year
            </p>
          </div>

          <div className="section">
            <h3>Admission Procedure Of Online/Distance</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The admission procedure for the online and distance Diploma in HR
              Management is completely online. Following are the steps that you
              need to follow to get admission to the diploma in HR Management
              course.
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
                <br></br>HR Management
              </p>
              <img src={StepA} alt="admin" className="mw-100 mt-5" />
              <img src={StepB} alt="admin" className=" w-100 mt-5" />
            </div>
          </div>

          <div className="section">
            <h3>Course Outline</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            {/* <p>
              MBA in strategic human resource management course deals with the
              concepts related to human resource departments. This course
              imparts the knowledge of concepts like people management, team
              building, organizational leadership and a lot more. The duration
              of this course is two years, and the curriculum is divided into
              four different semesters.
            </p> */}
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li> Principles and Practice of Management </li>
                    <li> Management Economics</li>
                    <li> Organizational Behaviour</li>
                    <li>Business Law</li>
                    <li> Management Accounting </li>
                    <li> ----</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li> Production/Operation Management </li>
                    <li> Financial Management</li>
                    <li> Human Resource Management</li>
                    <li> Marketing Management</li>
                    <li> Marketing Management</li>

                    <li> Management Information system</li>
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
                    <li>Performance Management System</li>
                    <li>Industrial Relations and Labour Laws</li>
                    <li>Organizational Theory Structure and Design</li>
                    <li>Manpower Planning, Recruitment, and Selection</li>
                    <li>Organization Culture </li>
                    <li>Compensation & Benefits </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li> Employee Development & Talent Management</li>
                    <li> International HR Practices</li>
                    <li> Strategic HRM </li>
                    <li> Business Ethics, Governance & Risk </li>
                    <li> Research Methodology </li>
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
                <span className="m-0 p-0">
                  <img
                    src={course}
                    className="img-fluid"
                    alt="Hrm page image"
                  />
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
              Doing MBA from a renowned university is impactful from a career
              perspective. Before you go for admission in online and distance
              you must be aware of the right place to apply. Consider these
              points while looking for a college or university
            </p>

            <div className="row mt-4">
              <span className="m-0 p-0">
                <img src={choose} className="img-fluid" alt="Hrm page image" />
              </span>
            </div>
          </div>
          <div className="section pt-4">
            <h3>Career Opportunities </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Online and Distance MBA in HR Management course open doors for
              many job profiles like HR Manager, Recruiter. Corporate trainers,
              and leadership and performance manager
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
              The online and distance diploma in HR Management is one of the
              finest diploma courses in terms of career advancements. The online
              and distance mode gives you immense flexibility to help you grow
              better in your career. The fee for the course is quite less in
              comparison to the salary packages you receive after this course.
              This makes it one of the best diploma courses in terms of the ROI
              as well. In all, if you wish to excel in the field of HR
              Management, then you can definitely go for an online and distance
              diploma in HR Management.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">
            Online and Distance Diploma in HR Management FAQ
          </h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>Is online diploma in HR Management government approved? </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Yes, the online and distance diploma in HR Management is
                absolutely valid and approved by the government body UGC-DEB.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5> What is the fee for online diploma in HR Management?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The average fee for the online and distance diploma in HR
                Management is in the range of INR 60,000 to 1,50,000/- for the
                entire course.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
                What is the duration of the online diploma in HR Management?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The ideal duration of an online and distance diploma in HR
                Management is 1 year. However, it totally depends upon the
                university if they wish to extend this duration. Usually, online
                universities allow students to complete their diplomas in 2
                years' time.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
                What is the role of an online/distance MBA in Information
                technology?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The role of an online/distance MBA in information technology is
                that it has to integrate computer applications and work with
                business organizations and other IT firms.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>
                What is the syllabus for the online diploma in HR Management?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Some of the major topics included in the syllabus for the online
                and distance diploma in HR Management are:
              </p>
              <li> Organizational Behavior</li>
              <li>Essentials of HRM</li>
              <li>Management Theory and Practice</li>
              <li>Business Law</li>
              <li>Organization Culture</li>
              <li>Performance Management System</li>
              <li>Manpower Planning, Recruitment & Selection</li>
              <li>International Relations & Labor Laws</li>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5" className="mt-2">
            <Accordion.Header>
              <h5>
                Which is the best college for an online and distance diploma in
                HR Management?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Some of the major topics included in the syllabus for the online
                and distance diploma in HR Management are:
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
