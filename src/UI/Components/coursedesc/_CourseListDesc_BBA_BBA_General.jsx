import React from "react";
import HRM from "../../../assets/images/BBA/gen.svg";
import line_h from "../../../assets/images/process/Line.png";
import Common from "../../../assets/images/process/common.png";
import Rankings from "../../../assets/images/process/rankings.png";

import Content from "../../../assets/images/process/content.png";
import Accordion from "react-bootstrap/Accordion";
import Structure from "../../../assets/images/process/structure.png";
import Career_Opportunities from "../../../assets/images/BBA/gencourse.svg";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";

export default function CourseListDesc() {
  return (
    <>
      <Helmet
        title="Best BBA Distance/Corresponding Education University in India  | Distance Pathshala"
        htmlAttributes={{ lang: "en" }}
        meta={[
          {
            property: "og:description",
            content:
              "Get your specially designed BBA distance education in India at Distance Pathshala to engage and learn in your own space. Be first to grab the learning opportunity!",
          },
          {
            property: "og:keywords",
            content: "Best BBA Distance/Corresponding Education University in India",
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
              Online and distance BBA in <span> General </span>
            </h3>

            <p>
              Online and Distance Bachelor of Business Administration (BBA)
              General is a bachelor's degree course of 3 years comprising six
              semesters. BBA offers whopping opportunities that help in
              formulating a career in this digitalized business and corporate
              world. Online and Distance BBA is designed explicitly for
              career-oriented aspirants who could not pursue further studies for
              several reasons. If you wish to make an impactful career as a
              Business Management professional or a Business Manager, then the
              Online and Distance BBA General programme is undoubtedly an
              excellent choice.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>Why should you choose BBA?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              BBA course offers tremendous knowledge about business aspects as
              well as a detailed overview of business competence. BBA course
              provides a basic understanding of management and business ethics.
              It also helps in developing a solid base of Managerial and
              Entrepreneurial Skills. Moreover, distance and online education
              offer flexibility to learn while continuing your job. Also, BBA is
              one of the most eminent online graduate degrees through which one
              could attain a hike in career.
            </p>
          </div>
          <div className="section">
            <h3>Explore Advanced Career Opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Through Online and Distance Education BBA General course, one
              develops a base for Business Ethics and Managerial cum Leadership
              skills. The candidate can acquire Entrepreneurship and
              International Business Operations knowledge with this degree. It
              equips you with the latest tools while making you aware of
              innovation in the business and corporate world. The course is
              designed as per the required skillsets for entry into the
              corporate world.
            </p>
          </div>
          <div className="section">
            <h3>Earn a high salary </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              BBA General through Online and Distance Education assists in
              bestowing needful skills to become future business leaders while
              earning a better salary. The degree helps a student to attain a
              managerial post with corporate experience after earning a degree
              that is a dream of every individual. BBA course also helps boost
              career and salary, especially for those already on the job.
              Currently, a BBA is getting INR 3.35 to INR 7.10 LPA in Indian
              multinational companies.
            </p>
          </div>
          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The minimum duration of the degree is three years, with a total of
              six semesters. Since universities offer distance and online
              education, an upper time limit for working professionals,
              aspirants can complete the course in 5 years.
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
              BBA in general course is 3 years and consists of 6 semesters of 6
              months each. Every subject in this course is designed to prepare
              the students to meet the industry requirement. The course syllabus
              offers a comprehensive understanding of marketing and its
              strategies. Here is a list of syllabuses of the courses that
              candidates will learn.{" "}
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left"> Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li> Microeconomics</li>
                    <li>Business Mathematics and Statistics </li>
                    <li> Basic Accounting </li>
                    <li> Human Resource Management </li>
                    <li>Communication Skills </li>
                    <li>Microeconomics</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right"> Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li> Principles of Management</li>
                    <li>Financial & Management Accounting</li>
                    <li>Marketing Management </li>
                    <li>Advanced Accounting </li>
                    <li> Computer Application to Management </li>
                    <li>Principles of Management</li>
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
                    <li>Banking</li>
                    <li>Logistics and Supply Chain Management </li>
                    <li>Indian Economy </li>
                    <li> Rural Marketing</li>
                    <li> Elective</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2"> Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>Research Methodology</li>
                    <li>Compensation Management</li>
                    <li>Commercial & Company Law</li>
                    <li>Organization Behavior</li>
                    <li>Elective 2</li>
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
                    <li>Market Research </li>
                    <li> Entrepreneurship Development</li>
                    <li>Industrial Field Report</li>
                    <li>Digital Marketing</li>
                    <li>Elective 3</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back"> Semester 6</p>
                  <ul className="p-0 mt-1">
                    <li>Corporate Strategy</li>
                    <li>Financial services & markets </li>
                    <li> Consumer Behavior </li>
                    <li> Industrial relations and Labor Laws</li>
                    <li> Elective 4</li>
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
              Once you decide to pursue an executive BBA in HRM it is essential
              to choose the right university. The following points are essential
              in selecting the right university.
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
              After completion of the BBA in HRM course, candidates can get
              various opportunities. Candidates can apply for many posts after
              completing their bachelor’s degree program in BBA courses. Here is
              a list of jobs that candidates from BBA in HRM can apply for.
            </p>
            <div className="container text-center mt-4">
              <img
                src={Career_Opportunities}
                className="img-fluid"
                alt="Hrm page image"
              />
            </div>
          </div>
          <div className="section">
            <h3>Summing it up</h3>
            <p>
              There are many universities offering this course so ensure to
              choose the right university. Pursuing this online and distance BBA
              is an ideal course for students who want to pursue their
              management along with their jobs.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">BBA General FAQ</h1>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
                What is the Bachelor of Business Administration (BBA) General
                Program?{" "}
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                BBA is a three-year comprehensive bachelor's degree programme
                that involves six semesters. The programme offers complete
                knowledge about business principles and practices. The degree is
                an excellent pathway to MBA programmes.{" "}
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>What specializations are involved in BBA?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Any BBA student can focus on areas like Finance, Economics,
                Accounting, Computer Information, Supply Chain, Banking,
                Administration, Human Resources, Rural Marketing, Company Law,
                Labour Law and many more.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>What are the eligibility criteria?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The candidate must have done 10+2 to be admitted to a BBA
                General programme.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>Is Distance BBA valuable?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Yes, distance and online BBA is equally valuable. The Government
                and Private Sector welcome online BBA candidates and offer
                satisfying salary packages.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>Is distance BBA applicable abroad</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Yes, distance and online BBA is applicable abroad. Moreover,
                multinational companies in foreign countries offer tremendous
                roles and packages to BBA candidates.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
