import React from "react";
import Btech from "../../../assets/images/btech/BtechGeneral.svg";
import line_h from "../../../assets/images/process/Line.png";
import Common from "../../../assets/images/btech/btechadmin.png";
import Rankings from "../../../assets/images/process/rankings.png";
import Content from "../../../assets/images/process/content.png";
import Structure from "../../../assets/images/process/structure.png";
import bCareer_Opportunities from "../../../assets/images/btech/civil.png";
import Searchform from "../../Pages/searchform";
import { Helmet } from "react-helmet";
import { Accordion } from "react-bootstrap";
export default function CourseListDesc() {
  return (
    <>
      <Helmet>
        <title>
          Civil Engineering distance education in India | Distane Pathsala
        </title>
        <meta
          name="description"
          content="Be the first to apply for Civil Engineering distance education at Distance Pathsala to get an attractive career opportunity."
        />
        <meta name="keywords" content="Civil Engineering distance education" />
      </Helmet>
      <Searchform />
      <div className="container mt-3 hrm">
        <div className="row">
          <div className="col-md-4 hrm-img">
            <img src={Btech} className="img-fluid" alt="Hrm page image" />
          </div>
          <div className="col-md-8 py-4 hrm-text">
            <h3>
              Online and Distance B.Tech
              <span> General </span>
            </h3>

            <p>
              B.Tech for Working Professionals is a Bachelor's degree programme
              in Engineering Technology exclusively designed for working
              professionals. This programme is intensely suitable for candidates
              who wish to pursue higher education degrees for their professional
              growth and, at the same time to enhance their knowledge concerning
              their field. Moreover, this programme also assists in managing the
              current role of working professionals.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>Why should you choose B.Tech General Course?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              An array of subject domains characterizes engineering. B.Tech for
              working professionals has emerged as a surprise for all the
              candidates who want to supplement their knowledge and degree. It
              is the best option for aspirants to rise in their careers without
              leaving their current job. The primary benefit of choosing B.Tech
              for working professionals is that it has been specifically
              designed to examine the present educational scenario and
              requirement of knowledge.
            </p>
          </div>

          <div className="section">
            <h3>Explore Advanced Career Opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              B.Tech General course for working professionals boasts tremendous
              benefits for all aspirants. With this degree, diploma holders, who
              could not pursue their further studies due to several personal
              reasons or stopped in between, could grasp enormous opportunities
              of completing their degree while continuing their jobs. Moreover,
              the degree provides prodigious career growth while upgrading
              working professionals' salaries, respect, and knowledge. In short,
              avid learners can relish the best of both worlds by studying and
              earning simultaneously.
            </p>
          </div>
          <div className="section">
            <h3>Earn a High Salary</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              B.Tech General course is a highly beneficial degree as it helps in
              requisite skills to earn a better salary. Candidates will
              eventually receive enormous possibilities such as working in the
              public sector like SAIL, GAIL, ONGC, BHEL, HPCL, Railways,
              Building projects, as well as a private industry like ABG,
              Infosys, TCS, Adani group, Reliance Group, Google, et al. As every
              company demands for professionals in their Research and
              Development department, a B.Tech Degree, would help you grab such
              an excellent opportunity.
            </p>
          </div>
          <div className="section">
            <h3>Admission Procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              For admission in B.Tech General course of 4 years divided into
              eight semesters, approach the colleges and universities of your
              choice. B.Tech courses are available through distance education in
              Civil, Mechanical, Computer, Information Technology, Electronics,
              and Telecommunications Engineering areas. Review the admission
              procedures mentioned in the respective Institute / University
              websites and follow the guidelines for enrollment.
            </p>
            <div className="row mt-4">
              <div className="col-md-4">
                <ul className="stlye-none text-center">
                  <li className="eligibility">Eligibility</li>
                  <li className="eligibility-nd">10+2 Pass Out</li>
                </ul>
              </div>

              <div className="col-md-4">
                <ul className="stlye-none text-center">
                  <li className="eligibility">Duration</li>
                  <li className="eligibility-nd">Min 3 – Max 6 years</li>
                </ul>
              </div>

              <div className="col-md-4">
                <ul className=" stlye-none text-center">
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
            <h3>How to choose the right university?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              While enrolling for the B.Tech General programme, choosing an
              appropriate and authentic institute or university is vital. You
              must consider the following points while making the selection of
              the best suitable university:
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
              After completion of B.Tech, candidates can get enormous
              opportunities. Skilled and experienced B. Tech graduates have high
              demand in the professional world as industries offer distinct
              roles as per candidates' specializations. B.Tech graduates can get
              highly paid jobs in the Civil, Aeronautics, Automobile,
              Mechanical, Chemical, Information Technology (IT), Agriculture,
              and Electronics sectors. All the reputed industries offer major
              roles of Managers, Researchers, Engineers, and Consultants to
              B.Tech graduates. Students can get excellent job opportunities in
              reputed companies while receiving a fantastic package. The initial
              pay packages for B-Tech General for working professionals range
              from approx. INR 1.8 to 2.5 LPA.
            </p>
            <div className="container text-center mt-4">
              <img
                src={bCareer_Opportunities}
                className="img-fluid"
                alt="Hrm page image"
              />
            </div>
          </div>
          <div className="section">
            <h3>Summing it up</h3>
            <p>
              Pursuing online and distance B.Tech General for working
              professionals is a tremendous opportunity. Several universities
              offer B.Tech courses, so it is crucial to choose the right
              university. Enrol now and boost up your career!
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">B.Tech General FAQ</h1>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
                What is the eligibility criterion for taking admissions in the
                B.Tech General course?{" "}
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Candidate must have completed 10+2 or a related diploma. Working
                professionals can get enormous career growth by enrolling in
                B.Tech for working professionals programmes from the select
                universities offering such courses.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
                What are the job opportunities after B.Tech General for working
                professionals?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                B.Tech General graduates can get highly reputed jobs in
                prominent multinational companies. They can get employment in
                ISRO, DRDO, NIC, TCS, IBM, Google, WIPRO, Infosys and many more.
                They can also bring opportunities in the public sector like
                SAIL, GAIL, ONGC, BHEL, HPCL, Railways, and Government Buildings
                projects.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
                Is B.Tech General for Working professionals valid in India?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Yes, currently, as per the guidelines of AICTE, B.Tech for
                working professionals through online or distance education is
                equally valid.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
                What is the primary difference between a Bachelor of Technology
                and a Bachelor of Engineering?{" "}
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Bachelor of Engineering (BE) is a theory-based course, whereas
                B.Tech courses offer practical knowledge too. Thus, the
                significant difference concerns course material being taught and
                programme orientation.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>Is B.Tech a good choice for a career?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Yes, B.Tech is an excellent choice for working and non-working
                professionals. It offers tremendous career growth and reputed
                jobs in prominent companies worldwide.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
