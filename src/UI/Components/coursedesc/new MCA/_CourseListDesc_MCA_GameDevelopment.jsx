import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Mr_management from "../../../assets/images/MBA/mcagame.png";
import line_h from "../../../assets/images/process/Line.png";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/MBA/Datascience/M1.svg";
import StepB from "../../../assets/images/msc/stepA.png";
import StepA from "../../../assets/images/msc/stepB.png";
// import course from "../../../assets/images/MBA/Leadership/course.svg";
import choose from "../../../assets/images/MBA/choose.svg";
import Common from "../../../assets/images/MCA/GD/Career.svg";
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
            <h3>Why should you choose MCA in Game Development?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Creative and innovative aspirants passionate about the gaming
              world can pursue this online and distance MCA in game development
              course. In this course, aspirants will get a deep knowledge to
              make their gaming programme or software. Even the basic pay of
              game developers is high than others.
            </p>
          </div>

          <div className="section">
            <h3>High Demand</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              One of the major reasons most people prefer game development is
              its high demand. It is one of the fast-growing jobs on many
              platforms. Prospective job seekers have many opportunities in this
              field. This course can command higher salaries and enjoy their
              pick of the available jobs.
            </p>
          </div>

          <div className="section">
            <h3>It is a Very Promising Field</h3>
            <p>
              Game development is considered to be one of the hottest career
              paths. There is a very positive job outlook for game developers,
              and there are many good and reputed organizations hiring aspirants
              in the field. With this degree, you can increase your odds of
              getting a job in this field. As there is an increase in demand for
              skilled game developers, aspirants will have a great future.
            </p>
          </div>

          <div className="section">
            <h3>Admission Procedure Of Online/Distance</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              To pursue MCA in Game development, aspirants should have a
              bachelorette degree in the relevant degree or other
              specialization. Students who prefer to pursue their careers in the
              gaming world can pursue this course. It is a two-year course, and
              aspirants can get a more extended duration of 2 years to complete
              their respective course. This can happen only when students are
              failing or unable to give their exams at the time of examination.
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
                Here is a common procedure to take admission in the distance MCA
                in Game Development
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
              Distance in MCA in Game development is a two-year professional
              course comprised of four semesters. The course will offer in-depth
              knowledge which a student can make their gaming programme or
              software. Industry experts specially design MCA in Game
              development courses.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>• Mathematical Foundation For Computer Applications</li>
                    <li>• Operating System & amp; Unix Shell Programming </li>
                    <li>• Data Communication & amp; Computer Networks</li>
                    <li>• Data Structures with Algorithms </li>
                    <li>• Computer Organization & amp; Architecture</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>• Relational Database Management System</li>
                    <li>• Design & amp; Analysis of Algorithms </li>
                    <li>• Advanced C++ and STL</li>
                    <li>• Game Design and Production Pipeline</li>
                    <li>• C# and .Net Framework </li>
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
                    <li>• Advanced Web Technologies</li>
                    <li>• Application Development using Python</li>
                    <li>• Computer Graphics</li>
                    <li>• Game Engine Programming I - Unity Basic </li>
                    <li>• Game World Design</li>
                    <li>• Open Elective Course</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>• Game Monetization </li>
                    <li>• Game Engine Programming II - Unity Advanced</li>
                    <li>• Gamification</li>
                    <li>
                      {" "}
                      • Game Engine Programming III - Unreal Programming{" "}
                    </li>
                    <li>• Cross-Functional Elective Course</li>

                    <li>• Projects/ Assessments/ Assignments/ Research </li>
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
              Once you decide to pursue MCA in Game Development, it is essential
              to choose the right university. The following points are essential
              in selecting the right university.
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
              After completion of the course, aspirants will get huge career
              opportunities. Once you complete online and distance MCA in Game
              development, you can apply in these below-mentioned job profiles
              in the respected organizations.
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
              After completing this course, candidates can expect high pay as
              their starting salary. You can choose this course if you are
              interested in working in the gaming environment. Ensure to choose
              the right university to stay ahead in your career.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Game Development FAQ</h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>How can a student take their lectures?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Students can enjoy their online and distance MCA in Game
                Development lectures or classes through an online mode of
                education. They can receive all their assignments, examination,
                classes, assessments, or other such curriculum details on the
                official website of the university/college.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
                What are the eligibility criteria to take admission in this
                online and distance MCA in Game Development?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                To take admission in this online and distance MCA in Game
                Development, a student must graduate in the same BBA field or
                specialized related field with a score of 50% or above aggregate
                marks required for admission.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>Does the university offer placements to their students?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Yes, the university has their own placement drive in the campus
                for the final year students of Online and Distance MCA Game
                Development programmers. They can also receive the internship in
                their 3rd semester to gain practical knowledge of the gaming
                field.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
