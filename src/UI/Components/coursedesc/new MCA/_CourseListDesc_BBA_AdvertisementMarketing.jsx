import React from "react";
import { Helmet } from "react-helmet";
import Adver from "../../../assets/images/process/Groupsvg.svg";
import DataGroup from "../../../assets/images/process/advergroup.png";
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
          Distance/Correspondence BBA in Advertising colleges in India | Distane
          Pathshala
        </title>
        <meta
          name="description"
          content="– Get a rewarding skill from an expert at Distance branding and advertising colleges. Be the earliest to become a brand."
        />
        <meta
          name="keywords"
          content="distance branding and advertising colleges"
        />
      </Helmet>
      <Searchform />
      <div className="container mt-3 hrm">
        <div className="row">
          <div className="col-md-4 hrm-img">
            <img src={Adver} className="img-fluid" alt="" />
          </div>
          <div className="col-md-8 py-4 hrm-text">
            <h3>
              Online and distance BBA in
              <span> Advertisement and Marketing </span>
            </h3>

            <p>
              Advertisement and marketing are in the commerce and management
              domain which can be pursued with different specializations
              including BBA in Advertising and marketing. It is a 3 – years
              course that can pursue in an online mode from top-notch
              universities. This course will help the students in developing
              skills required for managing a business or pursuing their
              management careers ahead. BBA in advertisement and marketing is a
              job-oriented program that inculcates marketing skills amongst
              students.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>Why should you choose BBA in advertisement & marketing?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="" />
            </span>
            <p>
              BBA in advertising and marketing is a very suitable course for
              marketing enthusiasts. This course also helps those working
              professionals who started their careers early and are now willing
              to get the specialization in advertising and marketing. In this
              course, candidates will study both the core subjects that are
              common for all BBA students and also the elective of advertising
              and marketing.
            </p>
          </div>
          <div className="section">
            <h3>A wide range of career options</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="" />
            </span>
            <p>
              This course offers many different types of career opportunities
              after graduation. Based on your skills and interest you might
              decide to work as a brand manager, a consumer research analyst,
              perhaps an advertising executive.
            </p>
          </div>
          <div className="section">
            <h3>Specialists are always in demand</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="" />
            </span>
            <p>
              Aspirants will not find any shortage of work as marketing and
              advertising experts. This is because marketing is something that
              is very important for every business or organization. Since the
              global consumer markets are growing rapidly, marketing and
              advertising services are required more throughout the world.
            </p>
          </div>
          <div className="section">
            <h3>Incredible earning potential</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="" />
            </span>
            <p>
              Marketing and advertising professionals are highly valued in very
              companies and organizations. This means candidates are remunerated
              well for the work that they do. By pursuing BBA in marketing and
              advertising course, aspirants can get higher earning potential in
              their careers.
            </p>
          </div>

          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="" />
            </span>
            <p>
              Candidates who are willing to take admission in the online and
              distance BBA in adverting and marketing should look at the
              eligibility criteria that are required for successful admission.
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
              BBA in Marketing and advertising is a 3 years program and the
              curriculum is divided into 6 semesters. BBA in Marketing and
              advertising syllabus is completely designed to meet the industry
              requirements. This course also offers flexible timing and an
              online learning management system to students. Here is a list of
              subjects of the courses that candidates will learn.
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
              Once you decide to pursue an executive BBA in Marketing and
              advertising it is essential to choose the right university. The
              following points are essential in selecting the right university.
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
              BBA in Marketing and advertising is an undergraduate course that
              helps students to get a good position in their lives. After
              completion of this course, candidates will get various job
              opportunities in the industries. Candidates can pursue a career in
              the branding and marketing field. Here are some major job
              positions that are available after the completion of a distance
              BBA in Marketing and advertising candidates.
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
          <h1 className="Accordi">Advertisement and Marketing FAQ</h1>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>What is the duration of an online BBA in Advertising & Marketing?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The duration of the online BBA in Advertising & Marketing program is 3 years and the curriculum is divided into 6 semesters.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
              What is the average fee of an online BBA in Advertising & Marketing?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The average academic fee of an online BBA in Advertising & Marketing is Rs. 80,000 - Rs. 1,00,000.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              What is the eligibility criteria of an online BBA in Advertising & Marketing?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The candidates must be 10+2 pass-outs from a recognized board to be eligible for the course.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
