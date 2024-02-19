import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Strategic from "../../../assets/images/MBA/Strategic.png";
import line_h from "../../../assets/images/process/Line.png";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/MBA/Datascience/M1.svg";
import StepB from "../../../assets/images/msc/stepA.png";
import StepA from "../../../assets/images/msc/stepB.png";
import course from "../../../assets/images/MBA/Marketing/course.svg";
import choose from "../../../assets/images/MBA/choose.svg";
import Common from "../../../assets/images/MBA/Marketing/Career.svg";
import Accordion from "react-bootstrap/Accordion";
export default function CourseListDesc() {
  return (
    <>
      <Helmet>
        <title>
        Distance/Correspondence Strategic Marketing Course in India  | Distance Pathshala
        </title>
        <meta
          name="description"
          content="Advance your career by applying for Online MBA in Strategic Marketing Distance Education in India at Distance Pathshala now!"
        />
        <meta name="keywords" content="Best Distance learning in Strategic Marketing" />
      </Helmet>

      {/* <h1>MARKETMANAGE</h1> */}

      <Searchform />
      <img src={Strategic} alt="Best Distance learning in Strategic Marketing" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>Why should you choose MBA in Strategic Marketing?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Participation in this program is recommended for students who desire to further their professions, lack academic experience,
network abroad, develop their managerial skills, and have flexible schedules. It&#39;s a program that offers a lot of options and a
legitimate degree. You may study at your speed with the help of the course&#39;s straightforward study plan and pre-recorded
online lessons. Graduates of a successful curriculum may get employment at several famous businesses.
            </p>
          </div>

          <div className="section">
            <h3>Examine Profession Opportunities </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            This program is for students who wish to further their professions, lack degree experience, have flexible schedules, and lack
managerial skills. Its a program that offers a lot of options and a legitimate degree. You may study at your speed with the
help of the courses straightforward study plan and pre-recorded online lessons. Graduates of a successful curriculum may
get employment at many famous businesses.
            </p>
          </div>

          <div className="section">
            <h3>Earn a High Salary</h3>
            <p>
            By utilizing the knowledge you gain from this degree, you might be able to increase your salary. One day, people will be
qualified to work as brand managers, risk managers, sales managers, or digital marketing managers. The student will be
able to land the best job with fantastic benefits after completing the program
            </p>
          </div>

          <div className="section">
            <h3>Admission Procedure Of Online/Distance</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The minimum duration of EMBA in marketing course is 15 months and
              divided into 5 terms. Candidates with a bachelor’s degree and at
              least two years of work experience can apply for this programme.
              There is no age limit for applying for this course.
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
                Here is a common procedure to take admission in the distance MBA in  <br></br>Strategic Marketing.
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
            The MBA in Strategic Marketing program focuses on the total development of the students to prepare them for challenging
managerial responsibilities in the Strategic Marketing industry. It is available online and through distance learning. The
undergraduate MBA programs two years and four semesters. The two years and four semesters make up the
undergraduate MBA program. The first two semesters cover the fundamental subjects, while the latter two are electives that
the students can select from.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>Managerial Economics</li>
                    <li>Statistics for Management</li>
                    <li>Accounting for Managers</li>
                    <li>Applications of Disruptive
Technologies in Business</li>
                    <li>Managerial Economics</li>
                    <li>Marketing Management</li>
                    <li>Specialization Elective Courses</li>
                    <li>Open Elective Courses</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Business Research Methods</li>
                    <li>Legal Aspects of Business</li>
                    <li>Consumer Behaviour</li>
                    <li>Operations Management</li>
                    <li>Foreign Business Language</li>
                    <li>Open Elective Courses</li>
                    <li>Specialization Elective Courses</li>
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
                    <li>Summer Internship</li>
                    <li>Strategic Management</li>
                    <li>Entrepreneurship Development and Venture
Creation – A Global Perspective</li>
                    <li>Professional Ethics and Social Responsibility
for Sustainability</li>
                    <li>Outdoor Activity-Based Courses</li>
                    <li>Specialization Elective Courses</li>
                    {/* <li>Sales Management</li>
                    <li> Strategic Brand Management</li> */}
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>Specialization Elective Courses</li>
                    <li>Dissertation</li>
                    <li>Management in Action - Social Economic
and Ethical Issues</li>
                    <li>Trends, Management &amp; Environment of
Commercial Research</li>
                    <li>Open Elective Courses</li>
                    <li>Foreign Business Language</li>
                   
                 
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
            If you want to pursue an MBA, you must pick the correct college. General. Keep the following things in mind when selecting
the best institution.
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
            Successful online students who receive an MBA in Leadership Strategy are eligible to apply for jobs as marketing managers,
management consultants, brand or risk managers, digital marketing managers, project managers, HR managers, equity
research analysts, and sales managers.
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
            This discipline is offered by several universities. If a candidate intends to enroll in an online or distance learning MBA
program in strategic marketing, it is advised that they have a professional goal in business management and financial
management.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Strategic Marketing FAQ</h1>
          <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
          <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
              Is CAT required for taking admission in Distance/Online MBA?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              except for Manipal University, admission to online and distance MBA programs does not require a CAT score.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>Is distance/online MBA valuable?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              A distance/online MBA is comparable to a traditional MBA, according to UGC rules.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              Which is the best distance/online MBA?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              A variety of specializations are available in distance learning and online MBA programs. Some of the most sought-after
specialties are financial management, marketing management, human resource management, supply chain management,
and retail management.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>Do IIMs provide distance/online MBA?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              No IIM presently offers distance learning or online MBA degree programs. Universities like NMIMS, Jain, and
Chandigarh offer MBA programs online and through distance learning.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>
              What are the jobs after doing a distance/online MBA?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              After earning your distance learning or online MBA degree, you are eligible to apply for any managerial or executive
position. With a distance/online MBA, you can get positions as managers, analysts, and executives as well as those market
researchers, brand managers, digital media managers, financial analysts, human resource managers, and corporate
executives.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
