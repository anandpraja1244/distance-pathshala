import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import HRM from "../../../assets/images/B.Com/Finance2.svg";
import line_h from "../../../assets/images/process/Line.png";
import Common from "../../../assets/images/B.Com/Banking.svg";
import Commons from "../../../assets/images/B.Com/Common.svg";
import Rankings from "../../../assets/images/process/rankings.png";

import Content from "../../../assets/images/process/content.png";

import Structure from "../../../assets/images/process/structure.png";
import Career_Opportunities from "../../../assets/images/process/Career-Opportunities.png";
export default function CourseListDesc() {
  return (
    <>
      <Helmet
        title="Bcom Banking and Finance Distance Education Admission  | Distane Pathshala"
        htmlAttributes={{ lang: "en" }}
        meta={[
          {
            property: "og:description",
            content:
              "Bcom Banking Finance Distance Education: This course duration is 3-years. Students can check eligibility, fees, and syllabus.",
          },
          {
            property: "og:keywords",
            content: "Banking and Finance Distance Education",
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
              Online and distance B. Com in <span>Banking & Finance</span>{" "}
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              B. Com in banking and finance is an undergraduate program that is
              consists of 6 different semesters. This is specially designed for
              those individuals who wish to learn these concepts to make a
              thriving career in the finance and banking sector. B. Com in
              banking and finance course prepares the students by giving them
              the required knowledge and tools to excel in their future roles.
              This course is available in all modes of education that are
              regular, online and distance.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>Why you should choose B. Com in Banking and Finance? </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              B. Com is the most rewarding career for students. It is an
              undergraduate program approved by the University Grant Commission
              (UGC) and Distance Education Bureau (DEB). If you are looking for
              the most secure and handsomely paired career option, then a B. Com
              in Banking and Finance course will be a wise choice. The course
              will improve management aptitude, inventive ability, critical
              thinking ability and a lot more.
            </p>
          </div>
          <div className="section">
            <h3>High in Demand </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              You can clinch a job in any industry with sound knowledge of
              Finance and banking. Almost every industry needs to record cash
              flow, investment details, salary payment information and a lot
              more. The subjects in this field will be very helpful for students
              to work with financial organizations and other corporate in
              leadership roles.
            </p>
          </div>
          <div className="section">
            <h3>Job security </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The course focuses on business administration with
              specializations. B. Com in Banking and Finance management is
              responsible for managing and maintaining the costs and capital
              required for all sectors across the industry. Job in this field is
              available regardless of the industry, making this specialization
              highly versatile and jobs in this specialization more secure.
            </p>
          </div>
          <div className="section">
            <h3>Personal and professional growth </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
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
          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The duration of this course is three years and is divided into 6
              semesters. The admission process for this course is done on the
              basis of merit. To take admission for online and distance B. Com
              programs, candidates should meet the minimum eligibility criteria.
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
            <h3>Course subjects</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              The duration of this course is 3 years and the curriculum is
              divided into 6 different semesters. The curriculum of this course
              includes various subjects to meet the industry requirement. Here
              is a list of subjects of the courses that candidates will learn
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left"> Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>Principles and Performs of Banking and Insurance</li>
                    <li>Financial Accounting</li>
                    <li>Effective Communication II</li>
                    <li>Economics II</li>
                    <li>Quantitative Methods II</li>
                    <li>Business Law</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right"> Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>The environment of Financial Facilities</li>
                    <li>Principle of Management</li>
                    <li>Effective Communication I</li>
                    <li>Economics I</li>
                    <li>Quantitative Methods I</li>
                    <li>Introduction to Computer Systems</li>
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
                    <li>Laws Governing Banking and Insurance</li>
                    <li>Financial Management I</li>
                    <li>Management Accounting</li>
                    <li>Customer Relationship</li>
                    <li>Information Technology in Banking and Insurance</li>
                    <li>Organizational Behavior</li>
                    <li>Taxation of Financial Facilities</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2"> Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>Universal Banking</li>
                    <li>Financial Management II</li>
                    <li>Innovations in Banking and Insurance</li>
                    <li>Corporate Law and Governing Capital Market laws</li>
                    <li>Entrepreneurship Management</li>
                    <li>Financial Markets</li>
                    <li>Cost Accounting of Banking</li>
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
                    <li>Marketing in Banking and Insurance</li>
                    <li>Financial Services Management</li>
                    <li>International Banking and Finance</li>
                    <li>Financial Reporting and Analysis</li>
                    <li>Security Analysis and Portfolio Management</li>
                    <li>Auditing</li>
                    <li>----</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back"> Semester 6</p>
                  <ul className="p-0 mt-1">
                    <li>Strategic Management</li>
                    <li>Central Banking</li>
                    <li>International Business</li>
                    <li>Human Resource Management in Banking and Insurance</li>
                    <li>Business Ethics and Corporate Governance</li>
                    <li>Turnaround Management</li>
                    <li>Project Presentation of Banking and Insurance</li>
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
              Once you decide to pursue an executive B. Com in banking and
              finance it is essential to choose the right university. The
              following points are essential in selecting the right university.
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
              B. Com in banking and finance is an undergraduate course that
              helps students to get a good position in their lives. After
              completion of this course, candidates will get various job
              opportunities in the industries. Here are some major job positions
              that are available after the completion of a distance B. Com in
              banking and finance candidates.
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
              In this course, aspirants will gain in-depth knowledge in
              accounting and finance and related stuff. Banking and finance
              course is offed by many universities so it is essential to choose
              the right universities based on your requirements. Only by
              choosing the right university, an individual can lead a successful
              career.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
