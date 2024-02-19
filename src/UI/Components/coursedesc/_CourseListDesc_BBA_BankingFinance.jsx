import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Banking from "../../../assets/images/BBA/BF/BF.svg";
import Groupmarket from "../../../assets/images/process/Groupmarket.png";

import line_h from "../../../assets/images/process/Line.png";
import Common from "../../../assets/images/process/common.png";
import Rankings from "../../../assets/images/process/rankings.png";

import Content from "../../../assets/images/process/content.png";
import Accordion from "react-bootstrap/Accordion";
import Structure from "../../../assets/images/process/structure.png";
import Career_Opportunities from "../../../assets/images/BBA/BF/Career.svg";
import Searchform from "../../Pages/searchform";
export default function CourseListDesc() {
  const [collegeName, setCollegeName] = useState("");
  return (
    <>
      <Helmet>
        <title>
          BBA Banking and Finance Distance Education universities in India |
          Distane Pathshala
        </title>
        <meta
          name="description"
          content="– Learn the functionality of financial and banking in the Distance learning banking and finance course at Distance Pathshala. Learn today to become a better person tomorrow."
        />
        <meta name="keywords" content="distance learning banking and finance" />
      </Helmet>

      <Searchform />
      <div className="container mt-3 hrm">
        <div className="row">
          <div className="col-md-4 hrm-img">
            <img src={Banking} className="img-fluid" alt="" />
          </div>
          <div className="col-md-8 py-4 hrm-text">
            <h3>
              Online and distance BBA in <span> Banking and finance </span>
            </h3>

            <p>
              BBA in Banking and Finance is a Bachelor’s degree program of 3
              years is aimed at providing intense knowledge about the practical
              applications of advanced banking and finance aspects. The 3-year
              program boasts extensive tech-enabled coursework specifically
              designed to increase the industrial expertise of banking and
              financial facets
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>Why should you choose BBA in Banking and finance?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="" />
            </span>
            <p>
              Banking and Finance is the well-competent specialization of
              Bachelors in Business Administration (BBA). The elective helps the
              aspirants explore contemporary banking solutions while offering a
              captivating learning experience requisite for career growth. BBA
              in Banking and Finance is the perfect domain for aspirants seeking
              a future in the banking and financial arena.
            </p>
            <p>
              {" "}
              Moreover, people already working in the Banking and Finance sector
              can grab this opportunity to learn advanced curriculum while
              continuing their jobs.
            </p>
          </div>
          <div className="section">
            <h3>Explore Advanced Career Opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="" />
            </span>
            <p>
              BBA in Banking and Finance helps aspirants to explore advanced
              business and financial ethics. A BBA in Banking and Finance
              candidate would get enormous job opportunities, specifically in
              the field of Banking and Finance. Interestingly, Banking and
              Finance sector offers unexpected salaries while offering
              managerial roles to talented candidates.
            </p>
          </div>
          <div className="section">
            <h3>Earn a High Salary</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="" />
            </span>
            <p>
              The Banking and Finance sector constantly searches for talented
              and dedicated candidates with a handful of knowledge concerning
              distinct aspects of banking. Besides offering deferential
              managerial roles, highly reputed companies offer special packages
              to BBA candidates. Some top recruiters offering surprising
              packages include Goldman Sachs, Bain & Company, McKinsey & Co.,
              KPMG, Barclays, Boston Consulting Group et al.
            </p>
          </div>

          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="" />
            </span>
            <p>
              For admission to BBA in Banking and Finance degree of 3 years
              divided into six semesters, approach the colleges and universities
              suitable for you. BBA in Banking and Finance is available online
              and through distance education. Working professionals can grab
              this opportunity without leaving their jobs and get a hike in
              their careers. </p>
              <p>To pursue this degree program, aspirants must have
              cleared 12th grade from a recognized board to be eligible for the
              course. There is no entrance examination for the online BBA in
              Banking and Finance.
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
              BBA in Banking and Finance course is 3 years and consists of 6 semesters of
              6 months each. Every subject in this course is designed to prepare
              the students to meet the industry requirement. The course syllabus
              offers a comprehensive understanding of banking and finance. Here
              is a list of syllabuses of the courses that candidates will learn
              in BBA in banking and finance.
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
            If you have decided to pursue BBA in Banking and Finance, choose an appropriate and genuine university. The following points can assist you in selecting a suitable university:
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
            BBA in Banking and Finance offers enormous career opportunities along with an unexpected hike in positions and salaries. After completing BBA in Banking and Finance, a candidate can get the following jobs:
            </p>
            <div className="container text-center mt-4">
              <img src={Career_Opportunities } className="img-fluid" alt="" />
            </div>
          </div>
          <div className="section">
            <h3>Summing it up</h3>
            <p>
            Getting enrolled for BBA in Banking and Finance is no less than a golden opportunity. If you want a satisfying job profile with a considerable salary package, get admission to BBA in Banking and Finance.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Marketing FAQ</h1>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>Where can I apply after an online BBA in Marketing?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                You can easily apply in the marketing sector after completing
                the online BBA in Marketing degree. You will get jobs like Brand
                Manager, Marketing Executive, etc.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>What is the eligibility of an online BBA in Marketing??</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The candidates must be 10+2 passed from a recognized board with
                a minimum percentile to be eligible for the course.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>Is the Online and distance BBA in Marketing course valid?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Yes, the degree is valid as it has been approved by UGC-DEB.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion> 
      </div>
    </>
  );
}
