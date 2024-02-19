import React from "react";
import HRM from "../../../assets/images/BBA/ss.png";
import line_h from "../../../assets/images/process/Line.png";
import Common from "../../../assets/images/BBA/admission.svg";
import Rankings from "../../../assets/images/process/rankings.png";

import Content from "../../../assets/images/process/content.png";
import Accordion from "react-bootstrap/Accordion";
import Structure from "../../../assets/images/process/structure.png";
import Career_Opportunities from "../../../assets/images/BBA/sscourse.png";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";

export default function CourseListDesc() {
  return (
    <>
      <Helmet
        title="Distance/Correspondence Strategy and Leadership Course in India  | Distance Pathshala"
        htmlAttributes={{ lang: "en" }}
        meta={[
          {
            property: "og:description",
            content:
              "Advance your career by applying for Online BBA in Strategy and Leadership Distance Education in India at Distance Pathshala now!",
          },
          {
            property: "og:keywords",
            content: "Best Distance learning in Strategy and Leadership",
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
              Online and distance BBA in <span> Strategy and Leadership </span>
            </h3>

            <p>
              BBA in strategy and leadership is an undergraduate course that is
              specially designed in a way that students will adapt and learn all
              the course-related knowledge. Strategy and leadership course will
              teach the students to study to work in a strategic way with all
              the leadership qualities to lead their business, startup, ideas
              and a lot more. BBA in strategy and leadership course is a very
              remarkable course.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>Why should you choose BBA in strategy and leadership?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              BBA in strategy and leadership course offers a student a broad
              view of conceptual studies, knowledge, develops personal skills
              and competencies. Strategy and leadership course ensures an
              aspirant to develop leadership qualities and lead the business, a
              corporate world with their capabilities. The course helps to
              develop a vision for their own startup, an organization that is
              able to adapt.
            </p>
          </div>
          <div className="section">
            <h3>Learn critical skills </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              While pursuing a leadership and strategy course, aspirants will
              learn critical skills that are required in the corporate world.
              This course also teaches the critical skills required in the
              business world. In this course, students of this course will learn
              to collaborate and work in teams. Candidates will also learn to
              think critically as well as develop a long-term vision needed for
              business-related decision making.
            </p>
          </div>
          <div className="section">
            <h3>Opportunity to learn strategic thinking</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              BBA in strategy and leadership course allows you to learn
              strategic thinking. In this course, strategic thinking skills can
              be imparted to the students. Strategic thinking is necessary to
              make good decisions in a business environment.
            </p>
          </div>
          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              To take admission in a strategy and leadership course, aspirants
              should meet some requirements. Here are some basic qualifications
              to get admission in BBA in strategy and leadership.
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
              Strategy and leadership is a 3 years program that is divided into
              8 semesters. BBA in strategy and leadership syllabus is completely
              designed to meet the industry requirements. This course gives you
              the executive view by using different styles of technology and
              management. Here is a list of subjects of the courses that
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
                    <li> Project Management</li>
                    <li>Financial management and accounting</li>
                    <li> Business environment and regulatory framework</li>
                    <li>Quantitative techniques for management</li>
                    <li>----</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right"> Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Course title</li>
                    <li>Marketing management</li>
                    <li> Business finance</li>
                    <li> Organizational behaviour and HRM </li>
                    <li>Sales and Distribution management</li>
                    <li>Introduction to business analytics</li>
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
                    <li> Design Thinking</li>
                    <li>Supply Chain Management</li>
                    <li>Indian Economy and Policy</li>
                    <li>Environmental Science</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2"> Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>Macroeconomics </li>
                    <li>Financial Markets and Instruments</li>
                    <li> Digital Transformation</li>
                    <li>Competitive Strategy</li>
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
                    <li>Strategic Problem Solving</li>
                    <li>Negotiation</li>
                    <li>Leadership, Strategy and People Management</li>
                    <li>Research Methodology</li>
                    <li>Personal and Managerial Effectiveness</li>
                    <li>----</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back"> Semester 6</p>
                  <ul className="p-0 mt-1">
                    <li>Operations Management</li>
                    <li>Strategic Management</li>
                    <li> Global Strategy</li>
                    <li> Information Systems for Business</li>
                    <li>Ethics & Values</li>
                    <li> Research Project</li>
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
              Once you decide to pursue an executive BBA in Data science and
              analytics it is essential to choose the right university. The
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
              BBA in Strategy and leadership is an undergraduate course that
              helps students to get a good position in their lives. After
              completion of this course, candidates will get various job
              opportunities in the industries. Here are some major job positions
              that are available after the completion of a distance BBA in
              Strategy and leadership candidates.
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
              In this course, aspirants will gain in-depth knowledge in strategy
              and leadership skills and related stuff. Candidates can find this
              digital course in many universities but not everyone is in an
              online format. So, before you choose any course, it is essential
              to choose the right universities based on your requirements. Only
              by choosing the right university, an individual can lead a
              successful career.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Strategy and Leadership FAQ</h1>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>What is the eligibility required to get admission in the Online & Distance BBA in Strategy & Leadership course?</h5>
            </Accordion.Header>
            <Accordion.Body>
           <p>The basic eligibility criteria to take admission in Online and Distance BBA in Strategy and Leadership is that a student must have a 10+2 minimum score with 50% or above aggregate marks from a recognized board of education.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
              What are the online and distance BBA in Strategy and Leadership teaches?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The entire online and distance BBA in Strategy and Leadership course is designed in such a way, where students will learn a new set of skills, Interpersonal Skills, Leadership qualities, Industry knowledge, Management, and much more.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              What is the basic pass percentage of this online and distance BBA in Strategy and Leadership?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Pursuing students need to score a minimum percentage of 55% or above to get the online and distance BBA in Strategy and Leadership.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
