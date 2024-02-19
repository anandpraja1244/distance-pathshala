import React from "react";
import HRM from "../../../assets/images/BBA/IM/im.svg";
import Common from "../../../assets/images/BBA/admission.svg";
import line_h from "../../../assets/images/process/Line.png";
import Rankings from "../../../assets/images/process/rankings.png";
import Accordion from "react-bootstrap/Accordion";
import Content from "../../../assets/images/process/content.png";

import Structure from "../../../assets/images/process/structure.png";

import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";

export default function CourseListDesc() {
  return (
    <>
      <Helmet
        title="Online & Disance BBA in International Marketing courses in India | Distance Pathshala"
        htmlAttributes={{ lang: "en" }}
        meta={[
          {
            property: "og:description",
            content:
              "Get all the details about online and Distance BBA in International Marketing Learning colleges/ Universities in India at Distance Pathshala.",
          },
          {
            property: "og:keywords",
            content: "BBA in International Marketing Distance Learning ",
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
              Online and Distance BBA in <span> International Marketing </span>
            </h3>

            <p>
              The online and distance BBA in International marketing is an
              undergraduate course for 3 years. This is a management course
              provided by the management department of the university. Various
              courses of the program enable the students to learn and understand
              the various marketing strategies to be utilised in the actual
              business operation. The course of the program emphasizes marketing
              analytics, social media marketing, data accumulation, and more.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>Why should you choose BBA in International Marketing?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The international marketing programme is a professional degree
              course. The course creates and teaches students to execute market
              strategies for international businesses. Students can learn and
              acquire a deep understanding of various marketing aspects.
              Students after completing the course can apply for various jobs
              and this profession is one of the professions which is high in
              demand and with high salary thus this course will never go to
              waste.
            </p>
          </div>
          <div className="section">
            <h3>Explore Advanced Career Opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The course prepares the students for real industry and the course
              opens up a wide range of oopportunies for the students.
              International marketing is a high in demand profession thus the
              students can get top job roles in top companies. Some prominent
              job profiles for BBA International Marketing students include:
              Marketing Executive, Sales Executive, International Brand Manager,
              Business Development Manager etc.
            </p>
          </div>
          <div className="section">
            <h3>Earn a high salary </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              BBA in International Marketinf graduates will be able to work with
              job profiles including Marketing Specialist, Export Manager,
              Marketing Executive, etc. Students with these job profiles will
              get an average annual salary ranging from 200,000 to 15,00,000
              INR.
            </p>
          </div>
          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              BBA in International Marketing is a 3-year course with 2 semesters
              every year and the mode of education is an online/distance
              program. Do make sure to review the things to know before actually
              applying for enrollment.
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
              The Online and Distance BBA in International prepares students for
              real industry challenges and enhances their knowledge in the
              working and operation of the marketing department. The students
              are equipped with various important marketing strategies and
              tools. The online BBA in International Marketing is a 3-year,
              6-semester undergraduate program. The course covers the
              curriculum's subjects and topics.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left"> Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>Business Mathematics</li>
                    <li> Foreign language</li>
                    <li> Management Foundation</li>
                    <li>Economic Environment</li>
                
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right"> Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Organization and Administration for Business</li>
                    <li> Accounting</li>
                    <li>Indian System of Business</li>
                    <li>Global Business Management</li>
             
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
                    <li> Micro Economics & Applications</li>
                    <li>	 Environmental Studies</li>
                    <li> Financial Management</li>
                    <li>Fundamentals of Marketing</li>
                    <li> Business Statistics</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2"> Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>Computer Awareness </li>
                    <li>Behavioral Science</li>
                    <li> International Business Management</li>
                    <li> Event Management</li>
                    <li>Database Management System</li>
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
                    <li>Legal Framework of Business & Management</li>
                    <li> International strategic management</li>
                    <li>Export – import documentation & logistics</li>
                    <li>Cross Cultural Management</li>
                    <li> International Trade law</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back"> Semester 6</p>
                  <ul className="p-0 mt-1">
                    <li> Research Methods & Reports Preparing Module </li>
                    <li>International institutions & trade implications</li>
                    <li> International Law</li>
                    <li> E – Commerce & international trade</li>
                    <li> Dissertation</li>
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
              Choosing the most suitable and appropriate university to continue
              pursuing the BBA in International Marketing is important. Keep in
              mind the following key considerations when selecting the right
              university.
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
              Students who complete this course of online and distance BBA in
              the International Marketing program are eligible to apply to
              various top companies. With jobs of high income packages such as
              Marketing Specialist, Export Manager, Marketing Executive and many
              more. This course is a great choice to set your career, go for it.
            </p>
          </div>
          <div className="section">
            <h3>Summing it up</h3>
            <p>
              There are various universities offering this course and you can
              choose from a wide variety of universities. If you want both
              flexibility and quality education then you must apply for an
              online BBA in International Marketing.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">International Marketing FAQ</h1>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
                Is BBA in International Marketing suitable for the future?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                A bachelor's degree in International Marketing can prepare you
                for a bright future and set your career on the right track.
                Opportunities are abundant and you just have to grab the right
                one that fits you right. The course is always a great choice and
                the demand for this profession will only keep increasing.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
                Are there entrance exams for the BBA in International Marketing
                program?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                AIMA UGAT, SET, and IPU CET are among the admission tests
                possible. These are examinations administered by individual
                institutes at the state and national levels. It depends on the
                institute whether an entrance exam is required.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
                How much is the Online BBA in International Marketing cost?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The average cost of an Online BBA in International Marketing is
                around INR 50,000 - 5,00,000.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
                What are the career options for graduates of the Online BBA in
                International Marketing program?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Graduates after completion of the course online BBA in
                International Marketing can work as Marketing Specialist, Export
                Manager, Marketing Executive and many more top job roles.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>
                Are graduates of the Online BBA in International Marketing
                likely to make a good living?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The graduates often earn between INR 3,00,000 – 10,00,000 after
                completing the course in online BBA in International Marketing.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
