import React from "react";
import HRM from "../../../assets/images/BBA/IF/if.svg";
import Common from "../../../assets/images/BBA/admission.svg";
import line_h from "../../../assets/images/process/Line.png";
import Rankings from "../../../assets/images/process/rankings.png";
import Content from "../../../assets/images/process/content.png";
import Accordion from "react-bootstrap/Accordion";
import Structure from "../../../assets/images/process/structure.png";
import Career_Opportunities from "../../../assets/images/process/Career-Opportunities.png";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";

export default function CourseListDesc() {
  return (
    <>
      <Helmet
        title="BBA Human Resource Management Distance Education in India | Distane Pathshala"
        htmlAttributes={{ lang: "en" }}
        meta={[
          {
            property: "og:description",
            content:
              "Advance your career by applying for BBA Human Resource Management Distance Education at Distance Pathshala now",
          },
          {
            property: "og:keywords",
            content: "BBA Human Resource Management Distance Education",
          },
        ]}
      />
      <Searchform />
      <div className="container mt-3 hrm">
        <div className="row">
          <div className="col-md-4 hrm-img">
            <img src={HRM} className="img-fluid" alt="Hrm page image" />
          </div>
          <div className="col-md-8 py-4 hrm-text">
            <h3>
              Online and Distance BBA in <span> International Finance </span>
            </h3>

            <p>
              One of the greatest BBA courses is the online and
              distance-learning degree in international finance, which enables
              students to pursue a profession in which they may manage the
              finances of multinational corporations. A BBA in International
              Finance is offered by prestigious colleges, and it may be
              completed online, on-campus, or via distance learning. Students
              who are interested in business reporting, financial management,
              and other topics such as overseas investments. Here, international
              finance students will get a thorough understanding of management,
              finance, and accounting.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>Why should you choose BBA in International Finance?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Students who pass this course will be fully equipped with
              management and creative abilities. Students who successfully
              finish the course should be qualified for a variety of employment
              in prestigious travel and tour companies. You may study at your
              speed with the help of the course's convenient study schedule and
              online lectures that have already been recorded. Candidates who
              successfully finish the program can work in a variety of lucrative
              sectors.
            </p>
          </div>
          <div className="section">
            <h3>Explore Advanced Career Opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Candidates can learn about numerous successful job kinds in this
              course. This course is intended to assist you in acquiring the
              required skill set. the mortgage and credit industry, stock and
              capital markets, financial institutions, commercial banks, the
              healthcare industry, and mutual funds.
            </p>
          </div>
          <div className="section">
            <h3>Earn a high salary </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              You will learn skills from this degree that will enable you to
              earn more money. In the end, candidates will be qualified for
              tourist positions with a competitive salary. After finishing the
              program, the student will be able to get the greatest job with
              excellent advantages.
            </p>
          </div>
          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Students pursuing a BBA in International Finance must successfully
              finish a three-year distance learning program with six-month
              semesters. Before you register for enrollment, you need to be
              aware of several eligibility requirements
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
                <img src={Common} className="img-fluid" alt="Hrm page image" />
              </div>
            </section>
          </div>

          <div className="section">
            <h3>Course subjects</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              Students who enroll in the online and distance-learning BBA in
              international finance program study accounting, management, and
              financial concepts. The 3-year, 6-semester undergraduate BBA in
              International Finance online program is offered online. a further
              three years if you're pursuing MBA studies. The disciplines and
              topics included in the curriculum are covered by the online BBA in
              International Finance syllabus.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left"> Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>
                      {" "}
                      Language: Kannada/Sanskrit/Hindi/Additional English
                    </li>
                    <li>Language II: English</li>
                    <li> Business Management</li>
                    <li>Business & Technology</li>
                    <li>Quantitative Techniques - I</li>
                    <li> Financial Accounting</li>
                    <li> Mind Management & Human Values – I</li>
                    <li> Business Economics Project-I</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right"> Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Language: Kannada/Sanskrit/Hindi/Additional English</li>
                    <li>Language II: English</li>
                    <li> Business Trends</li>
                    <li> Quantitative Techniques - II</li>
                    <li>Mind Management & Human Values – II</li>
                    <li>
                      {" "}
                      Discipline Specific Elective – A1<br/>
                      <span>Banking & Insurance </span><br/>
                      <span>Corporate & Business Law</span>
                    </li>
                    <li>Project-II</li>
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
                    <li> Business Ethics</li>
                    <li> Marketing</li>
                    <li> Human Resource Management</li>
                    <li>
                      Discipline Specific Elective – A2<br/>
                      <span>Financial Reporting Performance Management</span>
                    </li>
                    <li>
                      Conflict Management & Human Rights /Contemporary Politics
                      in India /Business Analytics
                    </li>
                    <li> Mind Management & Human Values – III</li>
                    <li> Computer Application Lab-I</li>
                    <li> Project Report – III</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2"> Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>Computer Networks</li>
                    <li>Database Management Systems</li>
                    <li>
                      Discipline Specific Elective – A3<br/>
                      <span>Audit & Assurance</span><br/>
                      <span>Business Taxation</span>
                    </li>
                    <li>Journalism / Spanish / Psychology</li>
                    <li>Constitutional Values</li>
                    <li>Mind Management & Human Values – IV</li>
                    <li>Project Report – IV</li>
                    <li>-----</li>
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
                    <li> Strategic Business Reporting</li>
                    <li> Discipline Specific Elective – A2<br/>
                    <span>Advanced Financial Management</span><br/>
                    <span> FinTech </span>
                    </li>
                    <li>Advanced Audit & Assurance</li>
                    <li> French / Corporate Communication / E-Commerce</li>
                    <li>Mind Management & Human Values - V</li>
                    <li> Project Report - V</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back"> Semester 6</p>
                  <ul className="p-0 mt-1">
                    <li> International Business</li>
                    <li>Management Accounting</li>
                    <li>Strategic Business Leadership </li>
                    <li>
                      {" "}
                      Discipline Specific Elective – A5<br/>
                      <span>Financial Planning Advance Taxation</span>
                    </li>
                    <li>
                      Public Relation in Management / Event Management /
                      Business Oriented Computer Application
                    </li>
                    <li>Project Report – VI</li>
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
              It's crucial to pick the best university for continuing your BBA
              in International Finance studies. When choosing the best
              university, keep the following factors in mind.
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
              Students who successfully finish this distance learning, dual
              concentration BBA in International Finance Management program are
              qualified to apply to MBA programs in the same sector to enhance
              their careers or to apply for jobs in this industry. Some of the
              positions accessible in finance and accounting include investment
              banker, financial analyst, international distribution manager,
              venture capitalist, and global business manager.
            </p>
            {/* <div className="container text-center mt-4">
              <img
                src={Career_Opportunities}
                className="img-fluid"
                alt="Hrm page image"
              />
            </div> */}
          </div>
          <div className="section">
            <h3>Summing it up</h3>
            <p>
              Several different universities offer this subject. This online and
              distance learning BBA program is recommended for those who want to
              pursue jobs in international finance.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">International Finance FAQ</h1>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
                What can I do after an online BBA in International Finance?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                After the completion of the online and distance BBA in
                International Finance, students can pursue jobs like
                International Finance Manager, Investment Banker, and consultant
                in reputed firms.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
                What are the eligibility criteria for distance and online BBA in
                International Finance?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The candidates must have passed 10+2 from a recognized board
                with a minimum of 50% marks to be eligible for the program.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
                What are the colleges that offer distance and online BBA in
                International Finance?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                There are some reputed colleges like Jain and others that are
                offering distance and online BBA in International Finance.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
                How much does the Online BBA in International Finance cost?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The average cost of an Online BBA in International Finance is
                around Rs.50000 and Rs. 300000.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>
                What is the procedure for the entrance exam for BBA in
                International Finance?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                There is no need to give any entrance examination to take
                admission in the online BBA in International Finance program.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
