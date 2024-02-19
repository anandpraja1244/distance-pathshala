import React from "react";
import HRM from "../../../assets/images/BBA/LOG/Logistics.svg";
import line_h from "../../../assets/images/process/Line.png";
import Common from "../../../assets/images/BBA/admission.svg";
import Rankings from "../../../assets/images/process/rankings.png";

import Content from "../../../assets/images/process/content.png";
import Accordion from "react-bootstrap/Accordion";
import Structure from "../../../assets/images/process/structure.png";
import career from "../../../assets/images/BBA/LOG/bbacourse.svg";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";

export default function CourseListDesc() {
  return (
    <>
      <Helmet
        title="BBA Logistics Distance Education in India | Online BBA Logistics Courses with Distance Pathshala"
        htmlAttributes={{ lang: "en" }}
        meta={[
          {
            property: "og:description",
            content:
              "Get all the details about online BBA in Logistics Distance Learning colleges/ Universities in India with Distance Pathshala.",
          },
          {
            property: "og:keywords",
            content: "Online and Distance BBA Logistics learning in India",
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
              Online and distance BBA in <span> Logistics </span>
            </h3>

            <p>
              Online BBA in logistics is a distance learning course for a period
              of 3 years. It is an Undergraduate Program for students who aspire
              to excel in the field of supply chain and logistics of business
              operations. Over the course of 3 years, students proceed through a
              total of 6 semesters, each semester with their distinctive
              syllabus that prepares the students for the actual world. Millions
              apply for this course every year around the world to gain both
              practical and theoretical experience and excel in this field hence
              making it one of the most preferred courses and professions.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>Why should you choose Online BBA in Logistics?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              BBA in Logistics has gained massive popularity in recent years due
              to its practicality and prospect in the actual world. It has
              provided employment to millions of professionals who have chosen
              this profession. The students are thoroughly prepared and fed with
              requisite knowledge and skills within the 3 year program to make
              them ready for getting their hands on the actual industrial
              setting.
            </p>
            <p>
              Over the years, BBA in logistics has become one of the most
              preferred and demanded courses and owing to its credibility,
              today, numerous universities and dedicated B schools offer this
              course. Students can avail the course of BBA in Logistics via
              various education modes. Students can do either of both; regular
              program or online or distance mode of education. Although the
              students will be trained and educated specifically on the course’s
              requirements, the students must also have prior understanding on
              the basics of the course and the industry.{" "}
            </p>
          </div>
          <div className="section">
            <h3>Explore advanced career opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              In this era of digitalisation, Logistic managers and coordinators
              play a vital role in business operations. Online BBA in Logistics
              can help you land yourself amongst abundant opportunities and set
              your career on the right path.
            </p>
          </div>
          <div className="section">
            <h3>Earn a high salary </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              With the profession being in high demand, choosing online BBA in
              logistics can bag you jobs of high salary and other benefits. So
              take the right step today and enroll yourself in a university that
              suits you best.
            </p>
          </div>
          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              To be able to get admitted successfully in any university,
              students are required to follow the admission procedures and
              execute the following procedures carefully.
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
              Over the course of 3 years, students will study and learn various
              relevant subjects. Each semester will consist of distinct
              subjects. Some of the subjects the students will study are listed
              below:
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left"> Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li> Business Communication I</li>
                    <li>Micro Economics</li>
                    <li>Fundamentals of Management</li>
                    <li> Business Accounting I</li>
                    <li> Principles of Logistics</li>
                    <li> Indian Constitution & Environmental Studies</li>
                    <li> Indian Constitution & Environmental Studies</li>
                    <li>
                      Workshop on Indian Company analysis & Corporate social
                      responsibility
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right"> Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li> Business Communication II</li>
                    <li> Macro Economics</li>
                    <li> Managerial Mathematics and Statistics</li>
                    <li>Business Accounting II </li>
                    <li>Marketing Management</li>
                    <li>Supply Chain Management</li>
                    <li> Employability skill development II</li>
                    <li>
                      Soft skill training and International company analysis
                    </li>
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
                    <li>Financial Management</li>
                    <li>Management Information Systems</li>
                    <li> Corporate Accounting</li>
                    <li> Business Law</li>
                    <li>Domestics & International Logistics Management</li>
                    <li> Product and operation management</li>
                    <li>Cyber law and security analysis</li>
                    <li> Leadership attitude and industry analysis</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2"> Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li> Operations Research </li>
                    <li> E-Business</li>
                    <li> Company Law</li>
                    <li>Global Business Management</li>
                    <li>Inventory & Warehousing Management</li>
                    <li> Procurement and Supply management</li>
                    <li>Retail management</li>
                    <li>Intellectual property rights</li>
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
                    <li> Cost Accounting</li>
                    <li> Business Research Methods</li>
                    <li>Business Strategy and management</li>
                    <li> Entrepreneurship Development</li>
                    <li>International Trade law</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back"> Semester 6</p>
                  <ul className="p-0 mt-1">
                    <li>Industry Internship</li>
                    <li>Dissertation</li>
                    <li>Viva-voce</li>
                    <li>-----</li>
                    <li>-----</li>
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
              Over the course of 3 years, students will study and learn various
              relevant subjects. Each semester will consist of distinct
              subjects. Some of the subjects the students will study are listed
              below:zz
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
              Students with this course have a wide range of opportunities and
              can apply for numerous job roles with high Salary packages. Jobs
              like Operation manager, shipping manager, Logistics Manager.
              Supply chain inventory specialist, warehouse manager etc, are just
              a few of the examples of the job and career opportunities students
              can get after completing the course..
            </p>
          </div>

          <div className="section pt-4">
            <h3>Top Other Online BBA Course Specialisations</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <span className="m-0 p-0">
              <img src={career} className="img-fluid" alt="Hrm page image" />
            </span>
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
          <h1 className="Accordi">Logistics  FAQ</h1>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
              What are the admissions criteria for the Online and Distance BBA in Logistics?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Students must have completed 10+2 with a minimum of 50% from a recognized board of education. 
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>What does an Online and Distance BBA in Logistics course teach?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Students in this course will learn how to plan, organize, and execute processes so that goods will flow smoothly in a smooth manner.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>Is CAT required to take distance/online BBA courses in India?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              For admission in distance/online BBA, CAT is a desirable factor not necessary to enroll in the program.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>Is an online BBA in Logistics degree recognized?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Yes, the BBA in Logistics degree received through distance education is UGC-approved and valid.
              </p>
            </Accordion.Body>
          </Accordion.Item>
  
        </Accordion>
      </div>
    </>
  );
}
