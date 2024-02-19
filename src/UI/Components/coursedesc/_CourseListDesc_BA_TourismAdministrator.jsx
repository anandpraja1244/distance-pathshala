import React from "react";
import HRM from "../../../assets/images/BA/TA/TA.svg";
import line_h from "../../../assets/images/process/Line.png";
import Common from "../../../assets/images/BA/TA/Common.svg";
import Rankings from "../../../assets/images/process/rankings.png";

import Content from "../../../assets/images/process/content.png";
import Accordion from "react-bootstrap/Accordion";
import Structure from "../../../assets/images/process/structure.png";
import Career_Opportunities from "../../../assets/images/BBA/gencourse.svg";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";

export default function CourseListDesc() {
  return (
    <>
      <Helmet
        title="BBA Human Resource Management Distance Education in India | Distane Pathshala"
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
            <img src={HRM} className="img-fluid" alt="Hrm page image" />
          </div>
          <div className="col-md-8 py-4 hrm-text">
            <h3>
              Online and Distance BA in <span> Tourism and Administration</span>
            </h3>

            <p>
              One of the best BA programs that enable students to pursue a job
              that allows them to travel and experience the globe is the degree
              in tourism and administration that is offered online and through
              distance learning. A BA in Tourism and Administration is offered
              by prestigious colleges and can be completed online, on-campus, or
              through distance learning. This course is perfect since it gives
              students unrestricted access to job opportunities.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>Why should you choose BA in Tourism and Administration?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Upon finishing this course, students will have great management
              and creative abilities. Successful students should be qualified
              for a variety of roles in significant news companies. You may
              study at your speed with the help of the course's straightforward
              study plan and already-recorded online lessons. Successful program
              graduates may find employment in several lucrative fields.
            </p>
          </div>
          <div className="section">
            <h3>Examine Profession Opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Candidates may learn about a range of profitable job sectors in
              this course. This course's objective is to assist you in acquiring
              the required skill set. Career opportunities exist in journalism,
              content writing, and HR management.
            </p>
          </div>
          <div className="section">
            <h3>Earn a high salary </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              You can boost your salary with the information you gain from this
              degree. In the end, candidates will be qualified for positions as
              content writers, geographic designers, executive assistants,
              operations managers, and HR managers. After finishing the program,
              the student would be able to obtain the greatest job with
              excellent perks.
            </p>
          </div>
          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Candidates for the BA in Tourism and Administration are required
              to successfully finish a three-year distance learning program with
              six-month-long semesters. Before you register for enrollment, you
              must meet some requirements.
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
              Students who enroll in the online and distance learning BA in
              Tourism and Administration program learn about the experiences
              they have in everyday life and how those experiences shape their
              way of life. The three-year, six-semester undergraduate BA in
              Tourism and Administration program is offered online. The course
              material also includes political science, literature, history, and
              philosophy.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left"> Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>  Tourism Geography</li>
                    <li>	 Tourism Principles and concepts </li>
                    <li>  Transport Operation and Logistics Management </li>
                    <li> Culture and Heritage Management </li>
                    <li>	 Business Communication </li>
          
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right"> Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>  Environmental studies</li>
                    <li>Managing Tourism Resources</li>
                    <li>International Tourism and Leisure Management </li>
                    <li>	 Travel Agency and Tour Operation Management </li>
                    <li>  Itinerary design and Tour Packaging </li>
             
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
                    <li>Destination Planning and Development</li>
                    <li>Tourism Technology and Automation </li>
                    <li>Development Communication </li>
                    <li> Individual Excellence and Social Dynamic</li>
                    <li>  Economics of Tourism</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2"> Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li> Medical and Health Tourism</li>
                    <li> World Tourism Destination- II (Asia, Africa, &, Australia)</li>
                    <li> Airline Ticketing and CRS</li>
                <li>---</li>
                <li>----</li>
                <li>----</li>
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
                    <li> Introduction to Aviation and Airport Management </li>
                    <li>  Professional Ethics</li>
                    <li> Reporting and Editing II: Electronic Media</li>
                    <li>----</li>
                    <li>-----</li>
                    <li>-----</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back"> Semester 6</p>
                  <ul className="p-0 mt-1">
                    <li> Dissertation </li>
                    <li> Managing People in Tourism </li>
                    <li> Travel Journalism and Media Operations </li>
                    <li> Tourism Planning and Policy</li>
                    <li>  Accommodation Management</li>
                    <li>Entrepreneurship Development in Tourism</li>
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
              It's essential to choose the right college if you want to pursue a
              BA in Tourism and Administration. When choosing the ideal
              institution, take into account the following factors.
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
              Students who successfully finish this distance learning BA in
              Tourism and Administration program are qualified to apply for
              careers in journalism, international relations, broadcasting, and
              business processing outsourcing units. To develop their careers or
              to apply for jobs in this profession, they are also entitled to
              apply to MBA programs in the same industry.
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
              Multiple universities offer this course. It is advisable to enroll
              in this online and distance learning BA degree if you want to work
              in tourism or administration.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Tourism and Administration FAQ</h1>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>Is Distance/ online BA equal to regular BA?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                If the university is AICTE, UGC-DEB accredited, a distance or
                online BA is equivalent to a conventional BA following UGC
                policy.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>What is the eligibility criterion for online/distance BA?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>You must have graduated from an accredited 10+2 program.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
                Is there any entrance examination for taking admission in a BA
                distance/online course?{" "}
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Each university chooses its examination format. Some colleges
                provide online test options, while others only provide offline
                options.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>What is the duration of the BA distance/online course?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The distance/online BA can be finished in three to five years.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>
                What is the examination mode of the semester examination of
                Distance/Online BA?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Each university chooses its examination format. While some
                colleges have offline testing facilities, others provide online
                testing options.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
