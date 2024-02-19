import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Mr_management from "../../../assets/images/MCA/reality.png";
import line_h from "../../../assets/images/process/Line.png";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/MBA/Datascience/M1.svg";
import StepB from "../../../assets/images/msc/stepA.png";
import StepA from "../../../assets/images/msc/stepB.png";
import course from "../../../assets/images/MCA/FSD/course.svg";
import choose from "../../../assets/images/MBA/choose.svg";
import Common from "../../../assets/images/MCA/FSD/Career.svg";
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
            <h3>Why should you choose MCA in Full Stack Development?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The course is one of the most preferred options for commerce or
              computer science background students. With the course, candidates
              can get an upgraded understanding of new techniques of full-stack
              for various career prospects. Also, the industry is expected to
              increase at a pace of 13% in the upcoming decade. With this
              course, you will develop web pages databases to manage the system,
              server and client software.
            </p>
          </div>

          <div className="section">
            <h3>High Demand</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              There is a high demand for full-stack developers in the industry.
              The course opens up doors to tremendous growth opportunities for
              the aspirants. The course promises multi-dimensional opportunities
              as full-stack developers are top-of-the-line engineers.
            </p>
          </div>

          <div className="section">
            <h3>Great Pay </h3>
            <p>
              There is great pay for full-stack development. The professional
              with great expertise can even expect high pay. The main reason for
              the high pay is that you will reduce operating costs for the
              company as a full stack developer
            </p>
          </div>

          <div className="section">
            <h3>Admission Procedure Of Online/Distance</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              To apply for this course, students must have passed the bachelor's
              degree examination from an authorized board of education. For
              reserved category students, age relaxations will be given.
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
                in Full Stack Development.
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
              With this course, candidates will learn in-depth in full stack
              development. The course offers flexibility to the candidate to
              complete the course in 2-6 years along with their jobs. MCA in
              full stack development is two years, and its entire curriculum is
              divided into four semesters.
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
                    <li>• Java Programming</li>
                    <li>• Web Development Using HTML and CSS </li>
                    <li>• Dynamic Web Applications Using Java Script </li>
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
                    <li>• Application Development using Python </li>
                    <li>• Advanced Web Technologies </li>
                    <li>• React JS </li>
                    <li>• Advanced Database Systems </li>
                    <li>• Front-end Development Project</li>
                    <li>
                      • Open Elective Course-Effective Communication for
                      Technology Professionals
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>• Software Engineering </li>
                    <li>• Web APIs</li>
                    <li>• Software Testing </li>
                    <li> • CI/CD and DevOps </li>
                    <li>• Cross-Functional Elective Course</li>

                    <li>• Project </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <h3>Other Online/distance MCA course specializations </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
          </div>
          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <span className="m-0 p-0">
                  <img
                    src={course}
                    className="img-fluid"
                    alt="Hrm page image"
                  />
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
              Once you decide to pursue MCA in Full stack Development, it is
              essential to choose the right university. The following points are
              essential in selecting the right university.
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
              Once you decide to pursue MCA in Full stack Development, it is
              essential to choose the right university. The following points are
              essential in selecting the right university.
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
              After completing this, aspirants will have great career
              opportunities in top hiring companies. Though many universities
              offer the course, choosing the right and reputed universities is
              essential.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Full Stack Development FAQ</h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
              Are Online Materials Easy to understand?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Yes, in online and distance MCA (Full Stack Development), you will receive easy to understand online study materials.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
              Does online and distance MCA in Full Stack Development offer training and career skills to the students?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Yes, in the final year, you will get career-oriented skills and training classes.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              Do Doubt Clear Sessions are also organized for this course?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Yes, students can ask their doubts and queries from our expert panels.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
