import React from "react";
import HRM from "../../../assets/images/BBA/BF/bf.png";
import Common from "../../../assets/images/BBA/admission.svg";
import Rankings from "../../../assets/images/process/rankings.png";
import Accordion from "react-bootstrap/Accordion";
import Content from "../../../assets/images/process/content.png";
import line_h from "../../../assets/images/process/Line.png";
import Structure from "../../../assets/images/process/structure.png";
import career from "../../../assets/images/BBA/BF/career.png";
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
              Online and distance BBA in <span> Business Analytics</span>
            </h3>
            <p>
              BBA in business analytics course is specially designed for those
              who are unable to attend a regular program due to any
              circumstances. It is a 3 years undergraduate program that includes
              various subjects like business communication, business and allied
              laws, digital marketing, and a lot more. Students who are willing
              to pursue their careers in the commerce and management domain can
              pursue this course. BBA in business analytics offers skill-based
              learning and knowledge related to analytical tools.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>Why should you choose BBA in business analytics?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              It is a program for those who have an interest in business and
              management. BBA in business analytics offers skill-based learning
              and knowledge related to analytical tools. It is a professional
              certificate program designed for aspirants. This course imparts
              the knowledge of analytical tools and business management. BBA in
              business analytics also imparts the knowledge of analytical tools
              and business management.
            </p>
          </div>
          <div className="section">
            <h3>Flexible profile</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Based on the organization the roles of a business analyst can
              vary. Some Business analytics work on the technical side of the
              project and some might strictly handle the business part. With
              this course, there is a huge range of possibilities for someone to
              grow and nurture especially if he or she is looking for starting
              their own business in the future.
            </p>
          </div>
          <div className="section">
            <h3>No boring days </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The survey states that many people change their job because they
              are bored with the kind of work, they in. Almost 33% of people are
              looking for a challenging job. If you work as a business analyst,
              you will have a new challenge to tackle regularly. Business
              analysts work on projects involving a lot of different
              departments.
            </p>
          </div>
          <div className="section">
            <h3>Enormous demand</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              It is a comparatively new profile and new openings are available
              in abundance. The business analyst profile is expected to grow at
              19% over the next 10 years. Also, this profile gives a lot of
              freedom and autonomy.
            </p>
          </div>
          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Aspirants should have some educational qualifications to take
              admitted to the BBA in business analytics program. Here are some
              requirements that candidates should meet to get admission BBA in
              business analytics.
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
              Business analytics is a 2 years program that is divided into 4
              semesters of 6 months each. BBA in the business analytics syllabus
              is completely designed to meet the industry requirements. Here is
              a list of subjects of the courses that candidates will learn.
            </p>
          </div>
          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left sam-back"> Semester 3</p>
                  <ul className="p-0 mt-1">
                    <li> Essentials Of Management</li>
                    <li> Business Communication</li>
                    <li> Essentials Of Financial Accounting </li>
                    <li> Micro Economics</li>
                    <li> Essentials of IT </li>
                    <li>Organizational Behavior</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2"> Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>Business Statistics For Decision Making </li>
                    <li> Macro Economics </li>
                    <li> Principles Of Marketing </li>
                    <li>Cost and Management Accounting</li>
                    <li>Operations Research</li>
                    <li>Introduction To Analytics </li>
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
                    <li> Business and Allied Laws</li>
                    <li> Digital Marketing </li>
                    <li> Financial Management </li>
                    <li>Human Resource Management</li>
                    <li> Data Visualization with Tableau</li>
                    <li> Consumer Behavior </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back"> Semester 6</p>
                  <ul className="p-0 mt-1">
                    <li> Business Statistics For Decision Making</li>
                    <li> Macro Economics </li>
                    <li> Principles Of Marketing</li>
                    <li>Cost and Management Accounting </li>
                    <li> Operations Research </li>
                    <li>Introduction To Analytics</li>
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
              Once you decide to pursue an executive BBA in business analytics
              it is essential to choose the right university. The following
              points are essential in selecting the right university.
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
              BBA in business analytics is an undergraduate course that helps
              students to get a good position in their lives. After completion
              of this course, candidates will get various job opportunities in
              the industries. Here are some major job positions that are
              available after the completion of a distance BBA in business
              analytics.
            </p>
            <div className="container text-center mt-4">
              <img
                src={career}
                className="img-fluid"
                alt="Hrm page image"
              />
            </div>
          </div>
          <div className="section">
            <h3>Summing it up</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              In this course, aspirants will gain in-depth knowledge in business
              analytics and related stuff. Candidates can find this digital
              course in many universities but not everyone is in an online
              format. So, before you choose any course, it is essential to
              choose the right universities based on your requirements. Only by
              choosing the right university, an individual can lead a successful
              career.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Business Analytics FAQ</h1>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
                Do IIMs provide online/distance BBA in Business Analytics?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Currently, IIMs do not provide any online BBA in Business
                Analytics program; there are universities like NMIMS that offer
                this program
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>What is the scope of online BBA in Business Analytics?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The scope of online BBA in Business Analytics is so vast and
                students can apply for different job positions in different
                industries.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>Is Online BBA valuable?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Yes, online BBA is a valuable program as it has been approved by
                the University Grants commission.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
