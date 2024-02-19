import React from "react";
import HRM from "../../../assets/images/BBA/branding/AB.svg";
import Common from "../../../assets/images/BBA/admission.svg";
import Rankings from "../../../assets/images/process/rankings.png";
import Accordion from "react-bootstrap/Accordion";
import Content from "../../../assets/images/process/content.png";
import line_h from "../../../assets/images/process/Line.png";
import Structure from "../../../assets/images/process/structure.png";
// import career from "../../../assets/images/BBA/LOG/bbacourse.svg";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";

export default function CourseListDesc() {
  return (
    <>
      <Helmet
        title="Distance/Correspondence BBA in Advertisement and Marketing learning in India | Distance Pathshala"
        htmlAttributes={{ lang: "en" }}
        meta={[
          {
            property: "og:description",
            content:
              "Update your skills and credentials from the best Online and Distance BBA in Advertisement and Marketing colleges/ Universities in India at Distance Pathshala.",
          },
          {
            property: "og:keywords",
            content: "BBA Advertisement and Marketing degree online and distance",
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
              Online and Distance BBA in <span> Advertising and Branding</span>
            </h3>

            <p>
              Online and Distance BBA in Advertising and Branding is an
              undergraduate course for 3 years. It is one of the courses which
              is in high demand. With traditional advertisements being a thing
              of the past, there is high demand for professionals who are
              specialised in the field of advertising and branding to take over
              the business and its marketing operations. Online BBA in
              Advertising and Branding is arguably one of the best courses to
              take on.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>Why should you choose BBA in Advertising and Branding?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Online BBA in Advertising and Branding open up a world of
              opportunities for the students. The course will teach the students
              the fundamentals of marketing. The course will enable students to
              secure top positions in companies. Online BBA in Advertising and
              Branding teaches students the principles and techniques of
              marketing. Throughout the program, students will study and learn
              the latest trends, concepts, and strategies. Students will gain
              concrete and thorough understanding of the marketing processes and
              the functional activities of the business.
            </p>
          </div>
          <div className="section">
            <h3>Explore Advanced Career Opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              he opportunities are endless. The course prepares the students for
              managing top activities and functionalities of the business.
              Students can apply for numerous jobs, including account managers,
              customer relationship managers, and public relations personnel.
              Students can also find employment as copywriters, PR writers, and
              market researchers and relatively get a high salary package
            </p>
          </div>
          <div className="section">
            <h3>Earn a high salary </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Advertisement and Branding are one of the most important factors
              in the business and students after graduation can easily bag a job
              with a high salary package. Now That the students are prepared to
              prepare for the real industry, an Advertising and Branding degree
              can boost the career of the graduates. Students can bag salary
              packages as high as 3LPA to 7LPA.
            </p>
          </div>
          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Online BBA in Advertising and Branding require students to
              complete three years of 6-month semesters through an
              online/distance program. Please review the details to know before
              enrolling.
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
              The Online and Distance BBA in Advertising and Branding prepares
              students for careers in marketing, retail management, and sales
              management. The course also develops their analytical skills. The
              BBA in Advertising and Branding online course is a 3-year,
              6-semester undergraduate program. The online BBA in Advertising
              and Branding syllabus covers the curriculum's subjects and topics.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">
                    1st Year or 1st and 2nd Semester Syllabus
                  </p>
                  <ul className="p-0 mt-1">
                    <li> Principles of Basic Accountancy</li>
                    <li> Principles of Management</li>
                    <li> Business Decision Making</li>
                    <li> Branding </li>
                    <li> Advertising</li>
                    <li> Creative Development</li>
                    <li> Principles of Marketing</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">
                    2nd Year or 3rd and 4th Semester Syllabus
                  </p>
                  <ul className="p-0 mt-1">
                    <li>Digital Marketing</li>
                    <li> Services Marketing</li>
                    <li> Product and operation management</li>
                    <li> Business Strategy </li>
                    <li> Market Research</li>
                    <li>Financial Management</li>
                    <li> Consumer Behaviour</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-12">
                  <p className="Semester-left sam-back">
                    3rd Year or 5th and 6th Semester Syllabus{" "}
                  </p>
                  <ul className="p-0 mt-1">
                    <li>Media Management</li>
                    <li>Event Management</li>
                    <li> Advertising Agencies</li>
                    <li> Journey of Advertising & Emerging Trends</li>
                    <li>Personal and Professional Effectiveness</li>
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
              The most important part is choosing the most suitable and
              appropriate university to continue pursuing the BBA in Advertising
              and Branding. Consider the following key considerations when
              selecting the right university.
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
              BBA in Advertising & Branding will provide students with a variety
              of career options. Students who complete this dual specialization
              are eligible to apply to various companies and private
              organizations. With digital marketing being a boom in today’s era,
              students have endless opportunities waiting for them.This course
              offers numerous career options.
            </p>
            <div className="container text-center mt-4">
              {/* <img src={Career_Opportunities} className="img-fluid" alt="Hrm page image" /> */}
            </div>
          </div>
          <div className="section">
            <h3>Summing it up</h3>
            <p>
              You have numerous options to choose from the universities that
              offer this course. If you wish to receive quality education and
              polish your skills and develop yourself in becoming a future
              marketer then you should pursue this online and distance BBA
              programme.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Advertising and Branding FAQ</h1>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
                Is BBA in Advertising and Branding suitable for the future?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The future scope of a BBA in Advertising and Branding is very
                wide. Advertisements and Brandings is never going out of trend
                and the industry is a boom thus the opportunities are endless
                and students can always benefit from this course.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
                Are there entrance exams for the BBA Advertising & Branding
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
                How much does the Online BBA in Advertising and Branding cost?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The average cost of an Online BBA in Advertising and Branding
                Management is around 50,000 to 3,00,000 per semester.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
                What are the career options for graduates of the Online BBA in
                Advertising and Branding Management program?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Advertising and Branding Management graduates can work as
                account managers, customer relationship managers, and public
                relations personnel. They can also find employment as
                copywriters, PR writers, and market researchers.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>
                Are graduates of the Online BBA in Advertising and Branding
                Management likely to make a good living?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Advertising and Branding graduates often earn between 3LPA and
                6LPA after graduating from the program.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
