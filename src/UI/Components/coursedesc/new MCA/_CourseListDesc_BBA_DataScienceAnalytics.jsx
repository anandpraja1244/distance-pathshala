import React from "react";
import { Helmet } from "react-helmet";
import Data from "../../../assets/images/process/data.png";
import DataGroup from "../../../assets/images/process/DataGroup.png";

import line_h from "../../../assets/images/process/Line.png";
import Common from "../../../assets/images/process/common.png";
import Rankings from "../../../assets/images/process/rankings.png";

import Content from "../../../assets/images/process/content.png";

import Structure from "../../../assets/images/process/structure.png";
import Career_Opportunities from "../../../assets/images/process/Career-Opportunities.png";
import Accordion from "react-bootstrap/Accordion";
import Searchform from "../../Pages/searchform";
export default function CourseListDesc() {
  return (
    <>
      <Helmet>
        <title>
          Distance BBA In Data Science And Analytics Universities in India |
          Distane Pathshala
        </title>
        <meta
          name="description"
          content="Get trained by top industry experts for Data analytics courses distance learning at Distance Pathshala."
        />
        <meta
          name="keywords"
          content="data analytics courses distance learning"
        />
      </Helmet>
      <Searchform />
      <div className="container mt-3 hrm">
        <div className="row">
          <div className="col-md-4 hrm-img">
            <img src={Data} className="img-fluid" alt="" />
          </div>
          <div className="col-md-8 py-4 hrm-text">
            <h3>
              Online and distance BBA in{" "}
              <span> Data Science and Analytics </span>
            </h3>

            <p>
              BBA in data science and analytics offers knowledge of many
              business acumens with a comprehensive understanding of the
              business domain. Data science and analytics is a broad field that
              offers huge career opportunities. This course also offers
              career-oriented knowledge and understanding to build a perfect
              base with an enhanced management curriculum.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>Why should you choose BBA in data science and analytics?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="" />
            </span>
            <p>
              The jobs of data science and analysis are growing exponentially
              over the years. This course will help you in learning both
              business management skills and technical skills amongst students.
              Data science and analytics is an emerging field that a lead to a
              lucrative career.
            </p>
          </div>
          <div className="section">
            <h3>Huge demand for data science and analytics</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="" />
            </span>
            <p>
              It is one of the driving subjects that is rapidly taking over most
              organizations. There is a rise in demand for data scientists and
              analysts day by day. Additionally, some experts in this field make
              it a top priority for big companies to employ as many data
              scientists as possible.
            </p>
          </div>
          <div className="section">
            <h3>It is a very promising field</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="" />
            </span>
            <p>
              Data science and analytics is considered to be one of the hottest
              career paths. As there is a huge demand for skilled data science
              and analysis practitioners in the industry, aspirants will have a
              great future. There is a very positive job outlook for data
              scientists and analytes and there are many promising and reputed
              organizations hiring data scientists. With this degree, you can
              increase your odds of getting a job in the data science field.
            </p>
          </div>
          {/* <div className="section">
            <h3>Good salary package</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="" />
            </span>
            <p>
              Digital marketers are already paying high in the industry. With
              the growing demand for digital marketers and increased spending on
              them by companies, the salary packages are still expected to grow
              further.
            </p>
          </div> */}

          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="" />
            </span>
            <p>
              BBA in Data science and analytics is a 3 years program that is
              divided into 6 semesters of 6 months each. The maximum duration of
              this course is 5-years to pass all the exams. To pursue this
              course, students should get admission in this online and distance
              BBA in data science and analysis course.
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
                <img src={Common} className="img-fluid" alt="" />
              </div>
            </section>
          </div>

          <div className="section">
            <h3>Course Subjects</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="" />
            </span>

            <p>
              This executive BBA in Data science and analytics is 3 years course
              that includes 6 semesters. This Data science and analytics course
              include subjects like python for data science, data visualization,
              data mining and so forth. The data science and analytics course
              offer a comprehensive knowledge of both business and fundamentals
              and analytical skills of data science and analysis. Here is a list
              of subjects of the courses that candidates will learn.
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
              <img src={line_h} className="img-fluid" alt="" />
            </span>
            <p>
              This course will help the candidates to delve deep into business
              and marketing concepts. After completion of the BBA in marketing
              course, candidates can get various opportunities. Candidates can
              apply for many posts after completing their bachelor’s degree
              program in BBA marketing. Here is a list of jobs that candidates
              with a BBA in Finance can apply for.
            </p>

            <div className="row mt-4">
              <div className="col-md-4">
                <img src={Rankings} className="img-fluid" alt="" />
              </div>
              <div className="col-md-4">
                <img src={Content} className="img-fluid" alt="" />
              </div>

              <div className="col-md-4">
                <img src={Structure} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
          <div className="section pt-4">
            <h3>Career opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="" />
            </span>
            <p>
              BBA in Data science and analytics is a postgraduate degree course
              that helps students in gaining traction towards a successful
              career in the IT and machine learning domain. Here are some major
              job positions that are available after the completion of a
              distance BBA in Data science and analytics.
            </p>
            <div className="container text-center mt-4">
              <img src={DataGroup} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="section">
            <h3>Summing it up</h3>
            <p>
              In this course, aspirants will gain in-depth knowledge in data
              science and related stuff. Candidates can find this digital course
              in many universities but not everyone is in an online format. So,
              before you choose any course, it is essential to choose the right
              universities based on your requirements. Only by choosing the
              right university, an individual can lead a successful career.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Data Science And Analytics FAQ</h1>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>Is Online BBA in Data Science and Analytics course valid?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Yes, the online degree BBA in Data Science and Analytics is
                valid as it has been approved by the University Grants
                Commission (UGC).
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>What is the eligibility of an online BBA in Data Science and Analytics?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
			  The candidates must be 10+2 in any stream from a recognized board to be eligible for the course.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>What is the average fees of an online BBA in Data Science and Analytics?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
			  The average fee of an online BBA in Data Science and Analytics is between INR 35,000 and INR 2,00,000.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
