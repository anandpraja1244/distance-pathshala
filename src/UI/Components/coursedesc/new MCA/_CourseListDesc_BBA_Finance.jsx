import React from "react";
import { Helmet } from "react-helmet";
import Finance from "../../../assets/images/process/Finance.png";
import line_h from "../../../assets/images/process/Line.png";
import Common from "../../../assets/images/process/common.png";
import Rankings from "../../../assets/images/process/rankings.png";

import Content from "../../../assets/images/process/content.png";

import Structure from "../../../assets/images/process/structure.png";
import Career_Opportunities from "../../../assets/images/process/Career-Opportunities.png";
import Accordion from "react-bootstrap/Accordion";
import "../../../mycss.css"
import Searchform from "../../Pages/searchform";
import Ugcoursetag from "../../Pages/Ugcoursetag";
export default function CourseListDesc() {

  const compareFindFilter={
    display: "none",
  }
  return (
    <>    
      <Helmet title = "BBA Finance Distance Education in India | Distance Pathshala"
          htmlAttributes={{ lang: "en" }}
          meta={[
        {
          property: 'og:description',
          content: 'Distance Pathshala – The best place for building skills and enhancing your career in BBA Finance Distance Education. Start today to enhance your skill.',
        },
        {
          property: 'og:keywords',
          content: 'BBA Finance Distance Education',
        }
      ]}
   />
<Searchform />
{/* <Ugcoursetag /> */}
      <div className="container mt-3 hrm">
        <div className="row">
          <div className="col-md-4 hrm-img">
            <img src={Finance} className="img-fluid" alt="Finance page image" />
          </div>
          <div className="col-md-8 py-4 hrm-text">
            <h3>
              Online and Distance BBA in <span> Finance </span>
            </h3>

            <p>
              It is a specialized program for the student who is willing to dive
              into the fund and investments management of companies. BBA in
              Finance is one of the best bachelor's degree programs preferred by
              many students who prefer to make a career in management fields. It
              is an undergraduate program offered in the online and distance
              mode to both students and working professionals. BBA in Finance
              course offers management and communication skills to the students.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>Why should you choose BBA in Finance?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Finance page image" />
            </span>
            <p>
              BBA in Finance completely focuses on the objectives of financial
              planning, banking system and a lot more. After completion of this
              course, aspirants can expect a bright career path. Choosing a
              career path in this field can be incredibly fulfilling and
              rewarding. It is one of the best bachelor's degree programs
              preferred by many students who prefer to make a career in
              management fields.
            </p>
          </div>
          <div className="section">
            <h3>Career options </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Finance page image" />
            </span>
            <p>
              Finance offers a large number of financial positions giving
              diverse career options to professionals in this field. If you
              choose this course, candidates will have a lot of room to grow in
              the field. Based on your convenience, you can choose to work in
              your country or decide on a country abroad. Candidates will have
              multiple options to look for and settle down outside their home
              country.
            </p>
          </div>
          <div className="section">
            <h3>Job security </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Finance page image" />
            </span>
            <p>
              Job security is one of the most essential perks in almost every
              field. Candidates will always be in demand so this makes the
              positions in this field usually secure. This job gives you the
              freedom to move from one position to another.
            </p>
          </div>
          <div className="section">
            <h3>Learn and grow </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Finance page image" />
            </span>
            <p>
              A job in this field will give you an opportunity to grow.
              Candidates in this field can reach a great height. While working
              in this field, candidates will get greater opportunities to learn
              and grow.
            </p>
          </div>

          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Finance page image" />
            </span>
            <p>
              The minimum duration of this course is three years which is
              divided into four semesters. Some universities offer upper time
              relaxation to complete the course. The upper time limit of this
              course is two years and one can easily complete the course in 5
              years.
            </p>
            <div className="row mt-4">
              <div className="col-md-4">
                <ul className="stlye-none text-center">
                  <li className="eligibility">Eligibility</li>
                  <li className="eligibility-nd">10+2 Pass Out</li>
                </ul>
              </div>

              <div className="col-md-4">
                <ul className="stlye-none text-center">
                  <li className="eligibility">Duration</li>
                  <li className="eligibility-nd">Min 3 – Max 6 years</li>
                </ul>
              </div>

              <div className="col-md-4">
                <ul className=" stlye-none text-center">
                  <li className="eligibility">Approvals</li>
                  <li className="eligibility-nd">UGC | DEB | NAAC</li>
                </ul>
              </div>
            </div>

            <section className="bg-white mt-5 pt-3">
              <div className="container text-center mt-3">
                <img src={Common} className="img-fluid" alt="Finance page image" />
              </div>
            </section>
          </div>

          <div className="section">
            <h3>Course Subjects</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Finance page image" />
            </span>

            <p>
              BBA in finance course is 3 years and consists of 6 semesters of 6
              months each. Every subject in this course is designed to prepare
              the students to meet the industry requirement. The course syllabus
              offers a comprehensive understanding of financial services and
              markets. Here is a list of syllabuses of the courses that
              candidates will learn.
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
                    <li>Accounting for business</li>
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
                    <li>Cost and management accounting</li>
                    <li>Corporate Finance </li>
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
                    <li>Organizational Change and Development</li>
                    <li>Workforce Planning</li>
                    <li>Technology for Business</li>
                    <li>Environmental Science</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2"> Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>Macroeconomics </li>
                    <li>Financial Markets and Instruments</li>
                    <li>Training & Development</li>
                    <li>Compensation Management</li>
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
                    <li>Strategic Leadership</li>
                    <li>Performance Management System</li>
                    <li>Fundamentals of HR Analytics</li>
                    <li>Research Methodology</li>
                    <li>Personal and Managerial Effectiveness</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back"> Semester 6</p>
                  <ul className="p-0 mt-1">
                    <li>Operations Management</li>
                    <li>Strategic Management</li>
                    <li>International HRM </li>
                    <li>Information Systems For Business</li>
                    <li>Ethics and Values</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <h3>How to choose the right university?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Finance page image" />
            </span>
            <p>
              Once you decide to pursue an executive BBA in HRM it is essential
              to choose the right university. The following points are essential
              in selecting the right university.
            </p>

            <div className="row mt-4">
              <div className="col-md-4">
                <img src={Rankings} className="img-fluid" alt="Finance page image" />
              </div>
              <div className="col-md-4">
                <img src={Content} className="img-fluid" alt="Finance page image" />
              </div>

              <div className="col-md-4">
                <img src={Structure} className="img-fluid" alt="Finance page image" />
              </div>
            </div>
          </div>
          <div className="section pt-4">
            <h3>Career opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Finance page image" />
            </span>
            <p>
              After completion of the BBA in Finance course, candidates can get
              various opportunities. Candidates can apply for many posts after
              completing their bachelor’s degree program in BBA Finance. Here is
              a list of jobs that candidates with a BBA in Finance can apply
              for:
            </p>
            <div className="container text-center mt-4">
              <img src={Career_Opportunities} className="img-fluid" alt="Finance page image" />
            </div>
          </div>
          <div className="section">
            <h3>Summing it up</h3>
            <p>
              There are many universities offering this course so ensure to
              choose the right university. Pursuing this online and distance BBA
              finance is an ideal course for students who want to pursue their
              management studies along with their jobs.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Finance FAQ</h1>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header><h5>What are the major subjects to read in six semesters?</h5></Accordion.Header>
            <Accordion.Body>
			<p>Students have to read various subjects like Logistics Management, Financial Management, Macro and Micro Economics and so on.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header><h5>Does Online/Distance BBA Finance need Mathematics?</h5></Accordion.Header>
            <Accordion.Body>
			<p>Mathematics is an important subject for completing this course, however there is no restriction of maths for taking admission.</p>
            </Accordion.Body>
          </Accordion.Item>
		  <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header><h5>What is the average salary for Online/Distance BBA Finance Graduates?</h5></Accordion.Header>
            <Accordion.Body>
			<p>The average Online/Distance BBA Finance salary ranges from 5 lac to 7 lac.</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
		
      </div>
    </>
  );
}
