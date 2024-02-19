import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Mr_management from "../../../assets/images/MBA/mcaai.png";
import line_h from "../../../assets/images/process/Line.png";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/MBA/Datascience/M1.svg";
import StepB from "../../../assets/images/msc/stepA.png";
import StepA from "../../../assets/images/msc/stepB.png";
import course from "../../../assets/images/MCA/AI/course.svg";
import choose from "../../../assets/images/MBA/choose.svg";
import Common from "../../../assets/images/MCA/AI/Career.svg";
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
            <h3>Why should you choose MCA in Artificial Intelligence?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The program allows the learner to handle various machines learning
              integration of computer science with real-time automation. In this
              course, aspirants will learn various technologies like SQL, Python
              apart from some necessary and useful machine learning techniques.
              The course will offer an interactive e-portfolio for every project
              to prove your expertise.
            </p>
          </div>

          <div className="section">
            <h3>The Course Promises a Bright Career</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Almost many companies looking to introduce artificial intelligence
              in their domain so AI and Machine learning opens up a world of
              opportunities to create cutting-edge technologies in diverse
              sectors. You can earn your degree from one of the top artificial
              intelligences to get introduced to exciting career prospects.
            </p>
          </div>

          <div className="section">
            <h3>The Course Makes a Good Living</h3>
            <p>
              It is one of the fastest-growing technologies in the job market
              and AI is high demand. The aspirants will get high pay in this
              field which assure to have a good living. Even the average salary
              for artificial intelligence is high.
            </p>
          </div>
          <div className="section">
            <h3>It is a Versatile Discipline </h3>
            <p>
              AI is widely used in computing and space-based fields. Artificial
              intelligence also used in industries closely related to the common
              citizens like automobiles, healthcare, finance and banking.
              Artificial can also use in any sector and consistently offer
              outstanding results.
            </p>
          </div>

          <div className="section">
            <h3>Admission Procedure Of Online/Distance</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              MCA in artificial intelligence is a two years program offered in
              four semesters. To take this program, aspirants should have a
              bachelor’s degree in the respective subjects.
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
                in Artificial Intelligence
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
              Artificial intelligence programs are delivered with a pragmatic
              and updated curriculum, especially for new generations. In this
              course, aspirants will get career-oriented courses and programs
              that consist of many things. It is two years program that is
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
                    <li>• Operating System & Unix Shell Programming </li>
                    <li>• Data Communication & Computer Networks</li>
                    <li>• Data Structures with Algorithms </li>
                    <li>• Computer Organization & Architecture</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>• Relational Database Management System</li>
                    <li>• Design and Analysis of Algorithms </li>
                    <li>• Java Programming</li>
                    <li>• Foundations of Machine Learning</li>
                    <li>• Prediction using machine learning </li>
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
                    <li>• Big Data Management & Analytics </li>
                    <li>• Recommendation Systems </li>
                    <li>• Advanced Machine Learning</li>
                    <li>• Open Elective Course</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>• Model Deployment & AI in Practice </li>
                    <li>• Neural Networks & Deep Learning</li>
                    <li>• Computer Vision </li>
                    <li> • Internet of Things </li>
                    <li>• Natural Language Processing </li>

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
              Once you decide to pursue MCA in Artificial intelligence, it is
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
              The aspirants can go for various jobs in and off-campus placement
              programs. Candidates can enrol in the final years of the online
              and distance MCA degree course for job opportunities. Here are
              some premier positions for MCA in Artificial Intelligence.
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
              You will not find artificial intelligence in many universities
              since only reputed, and selected universities offer it. Ensure to
              pursue this in the most reputed universities to get a bright
              future.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Artificial Intelligence FAQ</h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
              What are the subjects to study in online and distance MCA Artificial Intelligence?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              There are many subjects a student has to study to complete the program. It includes data Structures and Algorithms, Computer Organization and Architecture, Mathematical Foundation for Computer Applications, Operating systems and Unix Shell programming etc.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
              Is Study material available on the internet for online and distance programs of MCA AI?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Yes, the study materials are available on the internet. One can easily get in touch with the website to fetch resources related to studying
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              What is the age limit to take admission to online and distance MCA AI courses?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              There is no specific age limit for taking admission to this program.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
