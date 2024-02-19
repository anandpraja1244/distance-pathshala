import React from "react";
import HRM from "../../../assets/images/BBA/EPM/epepmm.svg";
import line_h from "../../../assets/images/process/Line.png";
import Common from "../../../assets/images/BBA/admission.svg";
import Rankings from "../../../assets/images/process/rankings.png";
import Accordion from "react-bootstrap/Accordion";
import Content from "../../../assets/images/process/content.png";

import Structure from "../../../assets/images/process/structure.png";
import Career_Opportunities from "../../../assets/images/process/Career-Opportunities.png";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";

export default function CourseListDesc() {
  return (
    <>
      <Helmet
        title="Online & Distance BBA In Engineering And Project Management colleges in India | Distance Pathshala"
        htmlAttributes={{ lang: "en" }}
        meta={[
          {
            property: "og:description",
            content:
              "Get the Best Online and Distance BBA in Engineering and Project Management distance learning colleges/University in India. Distance Pathshala is Best option to advance your career.",
          },
          {
            property: "og:keywords",
            content: "BBA In Engineering And Project Management colleges",
          },
        ]}
      />
      <Searchform />
      <div className="container mt-3 hrm">
        <div className="row">
          <div className="col-md-4 hrm-img">
            <img src={HRM} className="img-fluid" alt="BBA In Engineering And Project Management colleges" />
          </div>
          <div className="col-md-8 py-4 hrm-text">
            <h3>
              Online and distance BBA in{" "}
              <span> Engineering And Project Management </span>
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="BBA In Engineering And Project Management colleges" />
            </span>
            <p>
              Engineers and project managers are the most popular management
              specializations in the three-year bachelor's degree program.
              Online degree programs consist of three years of undergraduate
              education with six semesters. BBA Engineering and Project
              Management online degree programs are open to students who have
              completed their class 12 exams. Students enrolled in online BBA
              Engineering and Project Management programmes can learn about
              Emerging Technologies, Design Thinking, Engineering Project
              Management, and other topics.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>
              Why should you choose BBA in Engineering & Project Management?
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="BBA In Engineering And Project Management colleges" />
            </span>
            <p>
              Students will gain a comprehensive understanding of technical and
              managerial skills in this course. After completing the course,
              students should be able to hold various positions in top
              organizations IT departments easily. The course provides a
              convenient study schedule that allows you to study at your own
              pace and includes online pre recorded lectures. After completing
              the course, candidates can find jobs in a variety of industries
              that pay well.
            </p>
          </div>
          <div className="section">
            <h3>Demand for Engineering & Project Management</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="BBA In Engineering And Project Management colleges" />
            </span>
            <p>
              Applicants can explore various types of leadership positions
              through this course. This course is intended to assist you in
              acquiring the required skill set. Many positions are available,
              including Software Project Manager, Project Analyst, and Program
              Coordinator.
            </p>
          </div>
          <div className="section">
            <h3>Earn a high salary </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="BBA In Engineering And Project Management colleges" />
            </span>
            <p>
              With this degree, you will learn skills that will enable you to
              earn a higher salary. The candidates will eventually be qualified
              for technical jobs offering attractive salaries. Companies almost
              always need engineers, especially those with substantial
              experience and credible technical backgrounds.
            </p>
          </div>
          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="BBA In Engineering And Project Management colleges" />
            </span>
            <p>
              In an online/distance BBA in Engineering and Project Management
              program, students complete six-month semesters over a period of
              three years. Please review the things to know before actually
              applying for enrollment.
            </p>
            <div className="row mt-4">
              <div className="col-md-4">
                <ul className="stlye-none text-center d-flex">
                  <li className="eligibility">Eligibility</li>
                  <li className="eligibility-nd">10+2 Pass Out</li>
                </ul>
              </div>

              <div className="col-md-4">
                <ul className="stlye-none text-center d-flex">
                  <li className="eligibility">Duration</li>
                  <li className="eligibility-nd">Min 3 – Max 6 years</li>
                </ul>
              </div>

              <div className="col-md-4">
                <ul className=" stlye-none text-center d-flex">
                  <li className="eligibility">Approvals</li>
                  <li className="eligibility-nd">UGC | DEB | NAAC</li>
                </ul>
              </div>
            </div>

            <section className="bg-white mt-5 pt-3">
              <div className="container text-center mt-3">
                <img src={Common} className="img-fluid" alt="BBA In Engineering And Project Management colleges" />
              </div>
            </section>
          </div>

          <div className="section">
            <h3>
              BBA (Engineering and Project Management) Semester Wise Syllabus
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="BBA In Engineering And Project Management colleges" />
            </span>

            <p>
              The Online and Distance BBA in Engineering and Project Management
              prepares students for vacancies in the engineering world by
              providing them with multidisciplinary abilities. The BBA in
              Engineering and Project Management online degree programme is a
              three-year undergraduate programme with six semesters. The online
              BBA Engineering and Project Management syllabus covers all of the
              subjects and topics covered in the curriculum.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left"> Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>English</li>
                    <li>Business management</li>
                    <li>	 Introduction to Accounting</li>
                    <li>Modern business environment </li>
                    <li>Business regulatory framework</li>
                    <li>Quantitative techniques for management</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right"> Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Marketing Management</li>
                    <li>Organization Behavior and HRM</li>
                    <li>	 Introduction to Finance</li>
                    <li> E-Business </li>
                    <li>Introduction to Business Analytics</li>
                    <li>Communicative English</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left sam-back"> Semester 3</p>
                  <ul className="p-0 mt-1">
                    <li>Managerial Economics</li>
                    <li> Management Decision Making</li>
                    <li>Customer Relationship Management</li>
                    <li>Technology for Business</li>
                    <li>Environmental Science</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2"> Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>Macroeconomics </li>
                    <li>Financial Markets and Instruments</li>
                    <li> Engineering Project Management</li>
                    <li>Risk & Quality Management</li>
                    <li>Entrepreneurship</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left"> Semester 5</p>
                  <ul className="p-0 mt-1">
                    <li>Agile & Lean Principles</li>
                    <li> Design Thinking</li>
                    <li>Emerging Technologies in Information Management </li>
                    <li>Research Methodology</li>
                    <li>Personal and Managerial Effectiveness</li>
                    <li>-----</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back"> Semester 6</p>
                  <ul className="p-0 mt-1">
                    <li>Operations Management</li>
                    <li>Strategic Management</li>
                    <li>Information Systems for Business </li>
                    <li>Supply Chain Management</li>
                    <li>Ethics and Values</li>
                    <li> Research Project</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <h3>How to choose the right university?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="BBA In Engineering And Project Management colleges" />
            </span>
            <p>
              When deciding to keep pursuing the BBA in Engineering And Project
              Management, it is essential to choose the best and most
              appropriate university. When choosing the right university, keep
              the following key points in mind.
            </p>

            <div className="row mt-4">
              <div className="col-md-4">
                <img
                  src={Rankings}
                  className="img-fluid"
                  alt="BBA In Engineering And Project Management colleges"
                />
              </div>
              <div className="col-md-4">
                <img src={Content} className="img-fluid" alt="BBA In Engineering And Project Management colleges" />
              </div>

              <div className="col-md-4">
                <img
                  src={Structure}
                  className="img-fluid"
                  alt="BBA In Engineering And Project Management colleges"
                />
              </div>
            </div>
          </div>
          <div className="section pt-4">
            <h3>Career opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="BBA In Engineering And Project Management colleges" />
            </span>
            <p>
              A student with this dual specialization online and distance BBA in
              Engineering and Project Management can apply to various companies,
              private organizations, and government departments. Jobs such as
              Operations Manager, Business Project Manager, IT Project Manager,
              and many more are available. This course has very vast career
              opportunities.
            </p>
          </div>
          <div className="section">
            <h3>Summing it up</h3>
            <p>
              Many universities offer this course, so choose wisely. Pursuing
              this online and distance BBA programme is perfect for students who
              want to pursue management and technical.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Engineering and Project Management  FAQ</h1>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>What are the admissions criteria for the Online and Distance BBA in Engineering and Project Management?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Students must have completed 10+2 in science and commerce from a recognized board of education. They must have obtained more than 50% on their 12th-grade exams.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>What does an Online and Distance BBA in Engineering and Project Management course teach?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Distance BBA in Engineering and Project Management program emphasizes critical thinking, leadership development, creative mindset, accountability, and other critical skills to help students develop their overall personality and thinking abilities
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>Is CAT required to take distance/online BBA courses in India?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              For admission in distance/online BBA, CAT is a desirable factor not necessary to enroll in the program.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>Is Engineering Management in high demand in the United Kingdom?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Master of Engineering Management programs in the United Kingdom is becoming increasingly popular as the industry adapts to the new generation of engineering graduates that are simultaneously business and technology savvy.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>Is an online BBA in Engineering and Project Management degree recognized?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Yes, the BBA in Engineering and Project Management degree received through distance education is UGC-approved and valid.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion> 
      </div>
    </>
  );
}
