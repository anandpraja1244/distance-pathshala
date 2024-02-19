import React from "react";
import HRM from "../../../assets/images/BBA/MM/mm.svg";
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
              Online and distance BBA in <span> Multimedia Management </span>
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The BBA in Multimedia Management online and distance program is a
              three-year undergraduate program comprising six semesters.
              Throughout the program, students learn about multimedia at its
              most basic level and how it works at a higher level. The
              Multimedia Management courses can be taken online and distanced by
              students who have completed their 12th boards or are interested in
              making a career in this field. During the program, students
              comprehensively understand the world of multimedia creativity. A
              wide variety of topics can be explored by students, such as
              management, design, multimedia production, and technical
              evaluation.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>Why should you choose BBA in Multimedia Management?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              This course will provide students with a thorough understanding of
              creative and media skills. Students who complete the course should
              be able to hold various positions in leading digital or media
              organizations. The course includes pre-recorded online lectures
              and a convenient study schedule that allows you to study at your
              own pace. Candidates who finish the course will be able to find
              well-paying jobs in a variety of industries.
            </p>
          </div>
          <div className="section">
            <h3>Explore Advanced Career Opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              This course educates applicants on the different kinds of
              successful roles. This course is intended to assist you in
              building the necessary skill set. Numerous job opportunities are
              available, such as digital media consultant, entertainment and
              social media, social media strategist/writer, and film production
              houses.
            </p>
          </div>
          <div className="section">
            <h3>Earn a high salary </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              This degree will train you in capabilities that will enable you to
              achieve a higher salary. Applicants will eventually be considered
              for jobs in the media or digital world with competitive pay.
              Following completion of the course, the student will be able to
              obtain the highest level of work with remarkable and intriguing
              benefits.
            </p>
          </div>
          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Students pursuing a BBA in Multimedia Management must complete
              three years of six-month semesters via an online/distance program.
              Please review the important information before applying for
              admissions.
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
              An online BBA in Multimedia Management program lasts three years
              and is divided into six semesters of six months each. The
              program's curriculum combines common BBA subjects and Multimedia
              Management subjects.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left"> Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>English</li>
                    <li>Business management</li>
                    <li>Graphics and Illustrations</li>
                    <li>Concepts of Cinematography & Photography </li>
                    <li> Quantitative Techniques for Management</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right"> Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Marketing Management</li>
                    <li>Organization Behavior and HRM</li>
                    <li> Introduction to Business Analytics</li>

                    <li>Communicative English</li>
                    <li>---</li>
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
                    <li>Managerial Economics</li>
                    <li>Concepts of 2D Animation</li>
                    <li>Environmental Science</li>
                    <li>-----</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2"> Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>Macroeconomics </li>
                    <li>Financial Markets and Instruments</li>
                    <li>Web Designing Concepts</li>
                    <li>Entrepreneurship</li>
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
                    <li> Clay Modelling and Animation</li>
                    <li>3D Basics - Modelling to Animation</li>
                    <li> Research Methodology</li>
                    <li>Personal & Managerial Effectiveness</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back"> Semester 6</p>
                  <ul className="p-0 mt-1">
                    <li>Operations Management</li>
                    <li>Strategic Management</li>

                    <li>Information Systems For Business</li>
                    <li> Digital Marketing & Media Concepts</li>
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
              Choosing the best and most relevant university to pursue the BBA
              in Multimedia Management is essential. When choosing a university,
              keep the following factors in mind.
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
              Students who complete this online and distance BBA in Multimedia
              Management dual specialization program are capable of applying to
              a variety of companies, private organizations, and government
              departments. There are numerous positions available, including
              Media Planner, Entertainment and Social Media Consultant, Digital
              Media Consultant, and many others. This program provides numerous
              career options.
            </p>
          </div>
          <div className="section">
            <h3>Summing it up</h3>
            <p>
              A wide range of universities offer this course. Those interested
              in careers in Multimedia Management should enroll in this online
              and distance BBA program.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Multimedia Management FAQ</h1>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
                How long does the Online and Distance BBA in Multimedia
                Management program last
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                A. This course is three years in duration and is divided into
                six semesters
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>What will students learn about media management?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                A. Media management is a field of business administration
                concerned with the development, planning, and branding of media
                enterprises. This course program prepares students to gain
                knowledge and experience in media production, marketing,
                finance, and operations.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>How much does a social media manager end up making?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                A. In India, social media managers earn an annual salary of Rs.
                5.6 lakh. These professionals earn around Rs. 5 lakh yearly as a
                starting salary.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>How do I get a job as a digital media manager?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                A. An individual seeking a digital medium manager career must
                have a bachelor's degree in communications or marketing, work
                experience in the industry, the ability to write and edit, and
                the ability to learn new digital media skills as tools and
                platforms are developed.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>
                What are job opportunities associated with the Online and
                Distance BBA in Multimedia Management?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                A. Those who complete the online and distance BBA in Multimedia
                Management course will have many opportunities at their
                disposal. They can apply for higher positions in these several
                sectors. Numerous entertainment and social media companies,
                gaming websites, news and media companies, radio stations, and
                companies produce films.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
