import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Stock_Market from "../../../assets/images/B.Com/Stock_Market.png";
import line_h from "../../../assets/images/process/Line.png";
import Common from "../../../assets/images/B.Com/Hindi.svg";
import Commons from "../../../assets/images/B.Com/Common.svg";
import Rankings from "../../../assets/images/process/rankings.png";
import Content from "../../../assets/images/process/content.png";
import Structure from "../../../assets/images/process/structure.png";

import Accordion from "react-bootstrap/Accordion";
export default function CourseListDesc() {
  return (
    <>
      <Helmet>
        <title>
          Best Online & Distance B.Com in Hindi Course University in india |
          Distane Pathshala
        </title>
        <meta
          name="description"
          content="Get your degree in Online & Distance B.Com in Hindi at one of the best distance education providers. Enroll now at Distance Pathshala and get trained by the world’s best faculties."
        />
        <meta name="keywords" content="Online & Distance B.Com in Hindi" />
      </Helmet>
      <Searchform />
      <div className="container mt-3 hrm">
        <div className="row">
          <div className="col-md-4 hrm-img">
            <img src={Stock_Market} className="img-fluid" alt="Hrm page image" />
          </div>
          <div className="col-md-8 py-4 hrm-text">
            <h3>
            Online & Distance B.Com in <span> Stock Market Operations </span>
            </h3>
            <span className="m-0 p-0">
              <img
                src={line_h}
                className="img-fluid"
                alt="Finance page image"
              />
            </span>
            <p>
            A three-year undergraduate programme called the online B.Com in Stock Market Operations is specifically created for
people who have a keen interest in the stock market. The knowledge of topics like the equity market, financial services,
security analysis, etc. Students will get amazing career opportunities after completing this program.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>Why should you choose Distance B.Com in Stock Market Operations?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            An industry-focused course with a syllabus that addresses the demands of the modern economy is the B.Com in Stock
Market Operation. For B.Com students, the course opens up a new path because they can pursue a finance concentration
as a bachelors degree rather than a masters. Graduates of the program possess both practical and expert knowledge of
the Capital and Stock markets, making them immediately employable by businesses. There are many job openings for
courses in various industries and relevant positions in government organizations that deal with finance.
            </p>
          </div>
          <div className="section">
            <h3>Explore Advanced Career Opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Interested candidates can search for lucrative job opportunities in the public and private sectors after completing their
degree program. After completing the program, graduates are eligible for various positions: Research Analyst, Finance
Manager, Financial Assistant Manager, Financial Consultant, Wealth Manager, Finance Officer, and Accountant. Students
can also complete this program while working on an internship.
            </p>
          </div>
          <div className="section">
            <h3>Earn a High Salary</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            In the end, candidates will be qualified for positions in the accounting sector. After completing the course, the student can
find the highest level of employment with amazing and riveting benefits.
            </p>
          </div>

          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Students are pursuing a Distance B.Com in Stock Market Operations and will complete the program in three years via an
online/distance program. Please read the important information before applying for enrollment.
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
                <img src={Commons} className="img-fluid" alt="Hrm page image" />
              </div>
            </section>
          </div>

          <div className="section">
            <h3>Course Subjects</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Six equal semesters are required to complete the three-year, online B.Com in Stock Market Operations program. The
programs curriculums first two years (four semesters) are structured similarly to other B.com specializations. Specialization-
specific topics are taught during the programs final two semesters.
            </p>
          </div>
          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left"> Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>Principles of Investment</li>
                    <li>Micro – Economics</li>
                    <li>Basic Statistics</li>
                    <li>Basic Computer Skills</li>
                    <li>Financial Accounting</li>
                    <li>Business Environment</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right"> Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>The environment of Financial System</li>
                    <li>Macroeconomics</li>
                    <li>Statistical Applications</li>

                    <li>Communication Skills</li>
                    <li>Management Accounting</li>
                    <li>Principles of Business Management</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left"> Semester 3</p>
                  <ul className="p-0 mt-1">
                    <li>Debt Markets</li>
                    <li>Corporate Finance</li>
                    <li>Equity Market-I</li>
                    <li>Banking in Financial System</li>
                    <li>Computer Application in Investments</li>
                    <li>Business Ethics</li>
                    <li>Organizational Behavior</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right"> Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>Commodities Markets</li>
                    <li>Corporate Finance-II</li>
                    <li>Equity Market-II</li>

                    <li>Financial Services</li>
                    <li>Taxation for Investments</li>
                    <li>Security Analysis</li>
                    <li>Business Law</li>
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
                    <li>Global Capital Markets</li>
                    <li>Regulation of Securities Markets</li>
                    <li>Insurance-Fund Management</li>
                    <li>Derivative Markets</li>
                    <li>Foreign Exchange Markets</li>
                    <li>Portfolio Management</li>
                    <li>Project-I</li>
                  </ul>
                </div>  
                <div className="col-md-6">
                  <p className="Semester-right"> Semester 6</p>
                  <ul className="p-0 mt-1">
                    <li>Risk Management</li>
                    <li>Corporate Governance</li>
                    <li>Computer Applications in Financial Services</li>

                    <li>Marketing of Financial Services</li>
                    <li>Mutual Fund Management</li>
                    <li>Customer Relationship Management in Financial

Services</li>
                    <li>Project-II</li>
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
            It is critical to choose the best university for your studies. Before applying for university admission, keep the following points
in mind.
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
            Since the finance industry is constantly evolving and of the utmost importance, with new developments occurring every year,
B.Com in Stock Market Operations students can be flexible regarding their career goals.
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
            Several universities offer this course. Those interested in careers in the finance business will benefit from this online and
distance B.Com program.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Stock Market Operations FAQ</h1>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
              What are the requirements for an online B.Com in Stock Market Operations?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Candidates must have completed their 10+2 from a recognised board with a minimum of 50% marks.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
              Can I get an MBA after completing a distance/online B Com degree?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Yes, an MBA can be pursued after completing a distance/online B.Com degree. After earning a distance/online B.Com, one
can pursue a regular or distance/online MBA.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              Is there an entrance exam for distance/online B.Com admission?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Enrollment in a distance learning or online B.Com programme requires no entrance exam.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>Is B.Com superior to BSc?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              BCom is a better choice if you want to earn a little bit more money, even though both BSc and BCom offer enough job
opportunities. With a Bsc, you can work in teaching, laboratories, small-scale management, and government.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>Can I get a job after finishing my BCom?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              After completing BCom, one can pursue traditional careers such as accounting, Chartered Accountancy, Company
Secretary, Bank-PO exams, and so on, or pursue unconventional careers such as financial risk management, investment
banking, etc.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
