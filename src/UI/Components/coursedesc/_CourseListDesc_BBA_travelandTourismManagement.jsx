import React from "react";
import HRM from "../../../assets/images/BBA/TTM/ttm.svg";
import line_h from "../../../assets/images/process/Line.png";
import Common from "../../../assets/images/BBA/admission.svg";
import Rankings from "../../../assets/images/process/rankings.png";

import Content from "../../../assets/images/process/content.png";
import Accordion from "react-bootstrap/Accordion";
import Structure from "../../../assets/images/process/structure.png";
import Career_Opportunities from "../../../assets/images/process/Career-Opportunities.png";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";

export default function CourseListDesc() {
  return (
    <>
      <Helmet
        title="BBA  inTravel and Tourism Management Distance Education in India | Distance Pathshala"
        htmlAttributes={{ lang: "en" }}
        meta={[
          {
            property: "og:description",
            content:
              "Advance your career by applying for BBA Human Resource Management Distance Education at Distance Pathshala now",
          },
          {
            property: "og:keywords",
            content: "BBA Human Resource Management Distance Education",
          },
        ]}
      />
      <Searchform />
      <div className="container mt-3 hrm">
        <div className="row">
          <div className="col-md-4 hrm-img">
            <img src={HRM} className="img-fluid" alt="BBA In Engineering And Project Management colleges" />
          </div>
          <div className="col-md-8 py-4 hrm-text">
            <h3>
              Online and Distance BBA in{" "}
              <span> Travel and Tourism Management </span>
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="BBA In Engineering And Project Management colleges" />
            </span>
            <p>
              One of the most popular courses is the online BBA in Travel and
              Tourism Management, which allows students to pursue a career that
              allows them to travel and explore the world. Many prestigious
              universities offer a BBA in Travel and Tourism, and this course is
              available in all modes: distance, regular, and online. Students
              interested in pursuing an online BBA in Travel and Tourism must be
              good communicators. Graduates of online travel and tourism
              management initiatives can work in various industries, including
              travel company staff, tourism and tourism consultants, travel
              agents, tour operators, and so on.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>Why should you choose BBA in Travel and Tourism Management?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="BBA In Engineering And Project Management colleges" />
            </span>
            <p>
              This course will provide students with complete knowledge of
              creative and managerial skills. Students who complete the course
              should be able to hold various positions in top travel and tour
              organizations. The course includes online pre-recorded lectures
              and a comfortable study timetable that allows you to study at your
              own pace. Candidates who complete the course can find well-paying
              jobs in various industries.
            </p>
          </div>
          <div className="section">
            <h3>Explore advanced career opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="BBA In Engineering And Project Management colleges" />
            </span>
            <p>
              This course allows applicants to learn about various types of
              successful positions. This course is designed to help you develop
              the necessary skill set. Multiple job opportunities are available,
              including Tourism Marketer, Tour Guide, Travel Agency Staff, and
              Travel and Tourism Consultant.
            </p>
          </div>
          <div className="section">
            <h3>Earn a high salary </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="BBA In Engineering And Project Management colleges" />
            </span>
            <p>
              This degree will teach you skills that will allow you to receive a
              higher salary. Applicants will ultimately be eligible for tourism
              jobs with competitive pay. After completing the course, the
              student can obtain the best level of employment with amazing and
              interesting benefits.
            </p>
          </div>
          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="BBA In Engineering And Project Management colleges" />
            </span>
            <p>
              BBA in Travel and Tourism Management students complete three years
              of 6-month semesters through an online/distance program. Please
              review the things to know before actually applying for enrollment.
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
                <img src={Common} className="img-fluid" alt="BBA In Engineering And Project Management colleges" />
              </div>
            </section>
          </div>

          <div className="section">
            <h3>Course subjects</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="BBA In Engineering And Project Management colleges" />
            </span>

            <p>
              The Online and Distance BBA in Travel and Tourism Management
              prepares students for tourism industry jobs by developing their
              multidisciplinary skills. The BBA in Travel and Tourism Management
              online course is a 3-year, 6-semester undergraduate program. The
              online BBA Travel and Tourism Management syllabus covers the
              curriculum's subjects and topics.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left"> Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li> Principles of Management</li>
                    <li> Business Economics-I</li>
                    <li> Business Mathematics</li>
                    <li>Computer Fundamentals-I </li>
                    <li>Financial Accounting</li>
                    <li>Personality Development and Communication Skills</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right"> Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li> Business Organisation</li>
                    <li>Business Economics-II</li>
                    <li>
                      {" "}
                      Quantitative Techniques & Operation Research in Management
                    </li>
                    <li>Database Management System </li>
                    <li> Cost Accounting</li>
                    <li>Personality Development and Communication Skills</li>
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
                    <li>Organisational Behaviour</li>
                    <li>Indian Economy</li>
                    <li>Marketing Management</li>
                    <li> Computer Application-I</li>
                    <li>Management Accounting</li>
                    <li>
                      {" "}
                      Personality Development and Communication Skills-III
                    </li>
                    <li>Computer Application Lab-I</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2"> Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li> Human Resource Management</li>
                    <li> Business Environment</li>
                    <li> Marketing Research</li>
                    <li> Computer Application-II</li>
                    <li> Business Laws</li>
                    <li>Taxation Laws</li>
                    <li> Ecology, Environment & Tourism</li>
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
                    <li> Values & Ethics in Business</li>
                    <li>Sales & Customer Relationship Management</li>
                    <li>Foreign Language-I (French – I)</li>
                    <li>Management of Information System</li>
                    <li> Financial Management</li>
                    <li>Summer Training Report & Viva-Voce</li>
                    <li>
                      Marketing in Service Industry Airlines, Travel, Tours &
                      Hotel
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back"> Semester 6</p>
                  <ul className="p-0 mt-1">
                    <li> Trends in Travel & Tourism & Laws</li>
                    <li> Project Planning & Evaluation</li>
                    <li> Entrepreneurship Development</li>
                    <li> International Business Management</li>
                    <li>Foreign Language-II (French-II)</li>
                    <li>Air Ticketing and Foreign Exchange Management</li>
                    <li>------</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <h3>How to choose the right university?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="BBA In Engineering And Project Management colleges" />
            </span>
            <p>
              Choosing the most suitable and appropriate university to continue
              pursuing the BBA in Travel and Tourism Management is critical.
              Consider the following key considerations when selecting the right
              university.
            </p>

            <div className="row mt-4">
              <div className="col-md-4">
                <img
                  src={Rankings}
                  className="img-fluid"
                  alt="BBA In Engineering And Project Management colleges"
                />
              </div>
              <div className="col-md-4">
                <img src={Content} className="img-fluid" alt="BBA In Engineering And Project Management colleges" />
              </div>

              <div className="col-md-4">
                <img
                  src={Structure}
                  className="img-fluid"
                  alt="BBA In Engineering And Project Management colleges"
                />
              </div>
            </div>
          </div>
          <div className="section pt-4">
            <h3>Career opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="BBA In Engineering And Project Management colleges" />
            </span>
            <p>
              Students who complete this dual specialization online and distance
              BBA in Travel and Tourism Management program are eligible to apply
              to various companies, private organizations, and government
              departments. Tour Guide, Travel Agency Staff, Travel and Tourism
              Consultant, and many other positions are available. This course
              offers numerous career options.
            </p>
        
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
          <h1 className="Accordi">Engineering and Project Management FAQ</h1>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
                What are the admissions criteria for the Online and Distance BBA
                in Engineering and Project Management?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Students must have completed 10+2 in science and commerce from a
                recognized board of education. They must have obtained more than
                50% on their 12th-grade exams.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
                What does an Online and Distance BBA in Engineering and Project
                Management course teach?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Distance BBA in Engineering and Project Management program
                emphasizes critical thinking, leadership development, creative
                mindset, accountability, and other critical skills to help
                students develop their overall personality and thinking
                abilities
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
                Is CAT required to take distance/online BBA courses in India?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                For admission in distance/online BBA, CAT is a desirable factor
                not necessary to enroll in the program.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
                Is Engineering Management in high demand in the United Kingdom?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Master of Engineering Management programs in the United Kingdom
                is becoming increasingly popular as the industry adapts to the
                new generation of engineering graduates that are simultaneously
                business and technology savvy.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>
                Is an online BBA in Engineering and Project Management degree
                recognized?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Yes, the BBA in Engineering and Project Management degree
                received through distance education is UGC-approved and valid.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
