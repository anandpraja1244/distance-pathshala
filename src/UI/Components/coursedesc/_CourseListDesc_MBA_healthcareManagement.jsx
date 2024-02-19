import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import health from "../../../assets/images/MBA/health.png";
import line_h from "../../../assets/images/process/Line.png";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/MBA/Datascience/M1.svg";
import StepB from "../../../assets/images/msc/stepA.png";
import StepA from "../../../assets/images/msc/stepB.png";
import course from "../../../assets/images/MBA/HR/course.svg";
import choose from "../../../assets/images/MBA/choose.svg";
import Common from "../../../assets/images/MBA/HR/Career.svg";
import Accordion from "react-bootstrap/Accordion";
import Content from "../../../assets/images/process/content.png";
import Rankings from "../../../assets/images/process/rankings.png";
import Structure from "../../../assets/images/process/structure.png";
export default function CourseListDesc() {
  return (
    <>
      <Helmet>
        <title>
          Online & Distance MBA In Healthcare Management colleges in India |
          Distance Pathshala
        </title>
        <meta
          name="description"
          content="Get the Best Online and Distance MBA in Healthcare Management distance learning colleges/University in India. Distance Pathshala is Best option to advance your career."
        />
        <meta
          name="keywords"
          content="MBA In Healthcare Management  colleges"
        />
      </Helmet>

      {/* <h1>Stragic HR</h1> */}

      <Searchform />
      <img src={health} alt="hr Management" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>Why should you choose MBA in Healthcare Management?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              It is the best program today as the need for a well-managed
              hospital and healthcare resources is the need of the hour. The
              course will help you gain the right skills and training required
              to become business managers and leaders in various sectors of
              different industries. It is generally a two-year degree.
            </p>
          </div>

          <div className="section">
            <h3>A career with vast opportunities </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              There is a tremendous requirement for qualified professionals in
              this field. Many companies are looking for people who can manage
              healthcare resources optimally. There are many career
              opportunities available to a professional holding an MBA in
              Healthcare management. After completion of this course, students
              can be hired in hospitals, private healthcare clinics,
              pharmaceutical companies and within the government healthcare
              infrastructure. Students will get estimated career opportunities
              that will grow over the years.
            </p>
          </div>

          {/* <div className="section">
            <h3>Job Diversity</h3>
            <p>
              MBA in strategic human resource management course opens the door,
              not just in the field itself. Managing people and client
              relationships is the essential skill required for every business,
              which is a part of what you will learn in this course. Aspirants
              will learn other useful skills, including administration,
              multitasking, presentations, reporting and communications. With
              this course, you can have a variety of career paths and job
              positions in human resource management and beyond.
            </p>
          </div> */}

          <div className="section">
            <h3>Admission Procedure Of Online/Distance</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              These programs will help you understand the industry better with
              the knowledge of the latest technological advancement in
              healthcare. To apply for this course, students should be at least
              a graduate from a recognized university with a minimum of 50%
              marks.
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
                Here is a common procedure to take admission in the distance MBA
                in <br></br>Healthcare Management.
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
              Online MBA in Healthcare Management is a 2 – year’s program. The
              course is divided into four semesters. The first two semester
              subjects are common for all specializations, and electives will be
              included in the third and fourth semesters.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>Principles of Economics & Markets</li>
                    <li>Managerial Effectiveness & Ethics</li>
                    <li>Accounting & Finance</li>
                    <li>Organizational Behavior & Human Resource Management</li>
                    <li> Quantitative Techniques & Analytics</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Entrepreneurship</li>
                    <li>Marketing Management & Research</li>
                    <li>Healthcare Quality</li>
                    <li>Risk & Disaster Management</li>
                    <li>Patient Care Management</li>
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
                    <li>Operations Managemen</li>
                    <li>Supply Chain & Material Management in
Healthcare</li>
                    <li>Medical Record Management</li>
                    <li>Planning of Healthcare Services</li>
                    <li>Open Elective Course</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>Healthcare Information Technology</li>
                    <li>Healthcare Insurance</li>
                    <li>Healthcare Laws</li>
                    <li>Medical Tourism</li>
                    <li>Cross-Functional Elective course</li>
                    <li>Master Thesis/ Project</li>
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
            Once you decide to pursue MBA in healthcare management, it is essential to choose the right
university.
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
            The quality of healthcare management course will help you learn and adopt healthcare laws,
Ethics, medico-legal problems and medical tourism. After completing this course, students
will have various career opportunities worldwide. Here is a list of career opportunities that
aspirants can apply.
            </p>

            <div className="container text-center mt-4">
              <img src={Common} className="img-fluid" alt="Hrm page image" />
            </div>
          </div>
          <div className="section">
            <h3>Conclusion</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Choosing a career in healthcare management is a wise option for aspirants who prefer to
work in hospital surroundings. It also offers you good career options.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Healthcare Management FAQ</h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
              What can I do with a Distance MBA in Healthcare Management?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The online degree of MBA in Healthcare Management explores areas such as business ethics, law,
leadership, accounting and marketing, budgeting, and planning. Graduates with an Online MBA in
Healthcare Management Degree can work as department directors, CEOs, and financial planners for
hospitals, nursing homes, and also some other care facilities.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
              Is Distance MBA healthcare management a good career?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Distance MBA in Healthcare Management is specialization that has gained immense popularity in the
past few years. With India moving forward in the healthcare sector to compete with other
nations, management of hospitals and healthcare facilities has become a prominent sphere for career
opportunities
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              Is MBA healthcare in demand?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Due to the immensely growing demand for expert managers, the healthcare industry is actively
searching for MBA graduates. The graduates will be provided with various career opportunities from

MNCs to government jobs after an MBA in healthcare management, considered one of the highest-
paying and most rewarding professions.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>Why do people get an Online MBA in healthcare?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              By training in both healthcare and business, healthcare MBAs can work throughout healthcare
management, contributing to office management or helping oversee the development of healthcare
products. Healthcare MBAs are designed to help people learn to manage operations within the
healthcare industry.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>What jobs can I get after my Distance MBA in Healthcare Management?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Job opportunities after an Online MBA in Healthcare Management include marketing manager,
product manager, hospital administrator, medical practice manager, pharmaceutical sales, HR
executive and health insurance executive among others.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
