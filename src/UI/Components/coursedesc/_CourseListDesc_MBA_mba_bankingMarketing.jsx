import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Mr_management from "../../../assets/images/MBA/leadernstrag.png";
import line_h from "../../../assets/images/process/Line.png";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/MBA/Datascience/M1.svg";
import StepB from "../../../assets/images/msc/stepA.png";
import StepA from "../../../assets/images/msc/stepB.png";
import course from "../../../assets/images/MBA/Leadership/course.svg";
import choose from "../../../assets/images/MBA/choose.svg";
import Common from "../../../assets/images/MBA/Leadership/Career.svg";
import Accordion from "react-bootstrap/Accordion";
export default function CourseListDesc() {
  return (
    <>
      <Helmet>
        <title>
          Distance learning Masters Programs in Applied Finance 2022
        </title>
        <meta
          name="description"
          content="Distance MSC Applied Finance course at Distance Pathshala is offered with numerous advantages and facilities to the students online."
        />
        <meta name="keywords" content="Applied Finance Distance Education" />
      </Helmet>
      <Searchform />
      <img src={Mr_management} alt="hr Management" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>Why should you choose MBA in Leadership and Strategy</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              MBA in leadership and strategy course provides you with in-depth
              knowledge of the art of leadership and management theories. In
              some cases, candidates might unable to pursue their master’s due
              to a job and still cannot spend the complete 2 years. Choosing an
              EMBA course will be one of the best options for those candidates
              where they can gain management insights.
            </p>
          </div>

          <div className="section">
            <h3>Learn Critical Skills</h3>
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
            <h3>Opportunity to Learn Strategic Thinking</h3>
            <p>
              MBA in digital marketing course allows you to learn strategic
              thinking. In this course, strategic thinking skills can be
              imparted to the students. Strategic thinking is necessary to make
              good decisions in a business environment.
            </p>
          </div>

          <div className="section">
            <h3>Admission Procedure Of Online/Distance</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The minimum duration of the EMBA in Leadership and strategy course
              is 15 months and divided into 5 terms. Candidates with a
              bachelor’s degree and at least two years of work experience can
              apply for this programme. There is no age limit for applying for
              this course.
            </p>
            <div className="text-center">
              <h3>ADMISSION PROCEDURE </h3>
              <span className="m-0 p-0">
                <img src={line_h} className="img-fluid" alt="Hrm page image" />
              </span>
            </div>
            <img src={AdmissionProcedure} alt="admin" className="w-100 mt-5" />
            <img src={elegibilty} alt="admin" className="w-100 mt-5" />
            <div className="container py-3 text-center">
              <p>
                Here is a common procedure to take admission in the distance M.
                Sc in Artificial <br></br>Intelligence and Machine Learning.
              </p>
              <img src={StepA} alt="admin" className="mw-100 mt-5" />
              <img src={StepB} alt="admin" className=" w-100 mt-5" />
            </div>
          </div>

          <div className="section">
            <h3>Course subjects</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              This executive MBA in Leadership and strategy course is 15 months
              course that includes 5 different terms. This Leadership and
              strategy course includes subjects that will offer you in-depth
              knowledge of the art of leadership and management theories. Here
              is a list of syllabuses of the courses that candidates will learn.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>Financial Accounting: Information For Decisions</li>
                    <li>Managerial Economics</li>
                    <li>Marketing Management</li>
                    <li>Information Systems for Managers</li>
                    <li>Organizational Behaviour</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Business Statistics for Decision Makers</li>
                    <li>Operations Management</li>
                    <li>Strategic Management </li>
                    <li>Business Communication </li>
                    <li>Corporate Finance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left sam-back">Semester 3</p>
                  <ul className="p-0 mt-1">
                    <li> Art of Leadership</li>
                    <li>International Management: Culture</li>
                    <li>Learning and Development</li>
                    <li>Managing Organization Change</li>
                    <li>Organization Theory Structure & Design</li>
                    <li>Performance Management Strategy</li>
                    <li> Strategic HRM: Gaining a Competitive Advantage</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>Consumer Marketing</li>
                    <li>
                      Search Engine Optimization & Search Engine Marketing
                    </li>
                    <li>Integrated Marketing Communications</li>
                    <li> Mobile & Email Marketing</li>
                    <li>Marketing in a digital world</li>

                    <li>-----</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-12">
                  <p className="Semester-left sam-back">Semester 5</p>
                  <ul className="p-0 mt-1">
                    <li> Capstone Project</li>
                    <li>
                      {" "}
                      Marketing, web, & Social Media Analytics (Elective)
                    </li>
                    <li>Fraud & Risk Analytics(Elective)</li>
                    <li>Supply Chain & Logistics Analytics (Elective)</li>
                    <li>HR Analytics (Elective)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <h3>Other Online/distance MBA course specializations </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
          </div>
          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
              <span className="m-0 p-0">
              <img src={course} className="img-fluid" alt="Hrm page image" />
            </span>
              </div>
            </div>
          </div>

          <div className="section">
            <h3>How to choose the right university?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Once you decide to pursue an executive MBA in Leadership and
              strategy it is essential to choose the right university. The
              following points are essential in selecting the right universit
            </p>

            <div className="row mt-4">
            <span className="m-0 p-0">
              <img src={choose} className="img-fluid" alt="Hrm page image" />
            </span>
            </div>
          </div>
          <div className="section pt-4">
            <h3>Career opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              After completing the course aspirants have plenty of job
              opportunities. With this degree, candidates can apply to many top
              companies to get high pay. Here is a list of jobs that candidates
              from executive MBA Leadership and strategy can apply for.
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
              In this course, aspirants will gain in-depth knowledge in relevant
              fields. Candidates can find this Leadership and strategy course in
              many universities but not everyone is in an online format. So,
              before you choose any course, it is essential to choose the right
              universities based on your requirements. Only by choosing the
              right university, an individual can lead a successful career
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Leadership and Strategy FAQ</h1>
          <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>What are the roles of a leadership and strategy manager?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The role of strategic managers collaborated with the senior
                executive leadership in setting the business, their policies,
                agenda, and vision. They work systematically, with planning
                teams and develop collaboration to manage and succeed in the
                plan.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
                Will this MBA in leadership and strategy degree provide a good
                stable platform?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Yes, this degree is specifically designed for those who are
                curious to develop a strategic and leadership career in the
                corporate world.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
                What is the salary package of an MBA in leadership and strategy
                employee?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The salary at the initial level is to an MBA in leadership and
                strategy offered average at Rs 2,550,000 per annum.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
                Will this degree/ Courses be Beneficial in the Real-world?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Yes, of course, this degree provides a key skill to learn the
                strategies for your business life and teaches you how to be sure
                and strategically forwarded from the rest of the world.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>How the programme is asserted/ accumulated?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The program is accumulated in 15 months of the course which
                carries 5 semesters and 14 exams.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5" className="mt-2">
            <Accordion.Header>
              <h5>What is this MBA course aimed at?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                This course is aimed at making the student groomed confidently
                from head to toe. Get highly skilled to perform best to use the
                curriculum.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6" className="mt-2">
            <Accordion.Header>
              <h5>Am I eligible for the admissions?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The age for pursuing MBA in this specific program, should not be
                beyond 35 years as of 1 August 2021. Must have a graduation
                degree in any stream with 50% aggregate or more.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7" className="mt-2">
            <Accordion.Header>
              <h5>
                What is the minimum percentage to get admission in the program?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The minimum passing criteria to get admission in this program is
                50%-55% from any recognized university at the graduation level.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
