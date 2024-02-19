import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Banking from "../../../assets/images/process/banking.svg";
import Groupmarket from "../../../assets/images/process/Groupmarket.png";

import line_h from "../../../assets/images/process/Line.png";
import Common from "../../../assets/images/process/common.png";
import Rankings from "../../../assets/images/process/rankings.png";

import Content from "../../../assets/images/process/content.png";
import Accordion from "react-bootstrap/Accordion";
import Structure from "../../../assets/images/process/structure.png";
import Career_Opportunities from "../../../assets/images/process/Career-Opportunities.png";
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
              You can get many specializations provided in the BBA program that
              you can choose from. BBA in banking and finance is one of the
              top-rated and demanding courses that is preferred by many
              candidates. Banking and finance are three years undergraduate
              professional programs divided into six semesters. This sector
              involved banking laws and financial policies and a lot more. This
              course is specially designed for those who are willing to work in
              banks and financial institutions.
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
              BBA in banking and finance is a program that can help you in
              learning the activities of banking administrations and monetary
              organizations. After completion of this course, candidates get
              plenty of job opportunities available after completing BBA in
              banking and finance for students.
            </p>
          </div>
          <div className="section">
            <h3>This sector is always in-demand</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="" />
            </span>
            <p>
              BBA in Banking and finance is always in-demand and it is filled
              with challenges and opportunities. If candidates are interested in
              accepting challenges, this is the best reason for them to study
              banking and finance courses. Banking and finance offer a good
              salary package which is also crucial in life.
            </p>
          </div>
          <div className="section">
            <h3>Personal and professional growth</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="" />
            </span>
            <p>
              In this course, candidates are beneficial in both personal and
              professional growth. The course will help you to learn managerial
              skills. This course will also help you learn how to save money and
              have a proper budget for a time of emergencies, travelling and
              education. With this course, you will get to invest and how to
              invest. Also, you will understand the difference between price and
              value.
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
              The minimum duration of this course is three years which is
              divided into six semesters. Candidates will have extra years to
              pass all the exams of this online degree. To pursue this course,
              aspirants must be 12th pass from a recognized board to be eligible
              for the course. There is no entrance exam for admission in the
              online BBA in business and finance
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
              BBA in marketing course is 3 years and consists of 6 semesters of
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
              Once you decide to pursue an executive BBA in Banking and finance
              it is essential to choose the right university. The following
              points are essential in selecting the right university.
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
              This course will help the candidates to delve deep into business
              and finance related concepts. After completion of the BBA in
              banking and finance course, candidates will get various job
              opportunities. Candidates can apply for many posts after
              completing their bachelor’s degree program in BBA banking and
              finance. Here is a list of jobs that candidates with a BBA in
              Banking and Finance can apply for.
            </p>
            <div className="container text-center mt-4">
              <img src={Groupmarket} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="section">
            <h3>Summing it up</h3>
            <p>
              After this course, aspirants will have plenty of job options. With
              this course, candidates can easily hold various posts in the top
              organizations in finance departments. Many universities are
              offering BBA in finance and banking courses so ensure to choose
              the right university. Pursuing this online and distance BBA in
              finance and banking is an ideal course for students who want to
              pursue their degree along with their jobs.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Marketing FAQ</h1>
        </div>
        {/* <Accordion defaultActiveKey="0" className="mt-3">
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
        </Accordion> */}
      </div>
    </>
  );
}
