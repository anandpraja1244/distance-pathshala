import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Auditing from "../../../assets/images/B.Com/Auditing.png";
import line_h from "../../../assets/images/process/Line.png";
import Common from "../../../assets/images/B.Com/Hindi.svg";
import Commons from "../../../assets/images/B.Com/Common.svg";
import Rankings from "../../../assets/images/process/rankings.png";
import Content from "../../../assets/images/process/content.png";
import Structure from "../../../assets/images/process/structure.png";

import Accordion from "react-bootstrap/Accordion";
export default function CourseListDesc() {
  return (
    <>
      <Helmet>
        <title>
          Best Online & Distance B.Com in Hindi Course University in india |
          Distane Pathshala
        </title>
        <meta
          name="description"
          content="Get your degree in Online & Distance B.Com in Hindi at one of the best distance education providers. Enroll now at Distance Pathshala and get trained by the world’s best faculties."
        />
        <meta name="keywords" content="Online & Distance B.Com in Hindi" />
      </Helmet>
      <Searchform />
      <div className="container mt-3 hrm">
        <div className="row">
          <div className="col-md-4 hrm-img">
            <img src={Auditing} className="img-fluid" alt="Hrm page image" />
          </div>
          <div className="col-md-8 py-4 hrm-text">
            <h3>
              Online &amp; Distance B.Com in <span>Auditing </span>
            </h3>
            <span className="m-0 p-0">
              <img
                src={line_h}
                className="img-fluid"
                alt="Finance page image"
              />
            </span>
            <p>
              Online/Distance B.Com in Auditing is a three-year undergraduate
              programme covering topics like finance, accounting, business
              management, and a thorough understanding of commerce-related
              topics. The programme is developed to give students a strong
              foundation in management and accounting, economics, taxation,
              statistics, auditing, cost accounting, and finance.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>Why should you choose B.Com in Auditing?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The B.Com in Auditing places a strong emphasis on accounts and the
              importance of accounting. Additionally, it offers a strong
              foundation in both customer service and accounting. B.Com. in
              Auditing, graduates can compete fiercely in the accounting
              industry and find various career opportunities. People with a
              degree in this field have access to many employment opportunities.
              However, before pursuing this career, look for a programme that
              matches your interests and strengths.
            </p>
          </div>
          <div className="section">
            <h3>Explore Advanced Career Opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              B.Com. Graduates will find a wide range of uses for their degree
              in Auditing. The industry is constantly changing and is
              anticipated to grow in the upcoming years. The B.Com in Auditing
              programme lays the groundwork for a successful career. Students
              pursuing a B.com in this field will also be well-prepared to face
              the challenges of any accounting and finance sector.
            </p>
          </div>
          <div className="section">
            <h3>Earn a High Salary</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Candidates will be qualified for positions in the accounting and
              auditing sector. When the course is finished, the student will be
              qualified for the highest employment level with amazing and
              fascinating benefits.
            </p>
          </div>

          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The duration of this course is three years which consists of six
              semesters of 6 months each.To take admission for online and
              distance B. Com Hindi, candidates should meet the minimum
              eligibility criteria.
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
                <img src={Commons} className="img-fluid" alt="Hrm page image" />
              </div>
            </section>
          </div>

          <div className="section">
            <h3>Course Subjects</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The Online and Distance B.Com in Auditing prepares students for
              jobs in the accounting and finance industry by promoting
              accounting skills. The onlineB.Com in Auditing program is a
              three-year program. The online B.Com in Auditing the syllabus
              covers the curriculum.
            </p>
          </div>
          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left"> Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>Essentials of Accounting</li>
                    <li>Micro-Economics</li>
                    <li>Business Communication and Commercial Knowledge</li>
                    <li>Business Organization & Management</li>
                    <li>Patent & Copyright Law</li>
                    <li>Environmental Studies</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right"> Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Fundamentals of Computers and Data Handling</li>
                    <li>Advanced Accounting</li>
                    <li>Macro Economics</li>

                    <li>Commercial Statistics</li>
                    <li>Mercantile Law</li>
                    <li>.......</li>
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
              B.Com in Auditing should be pursued at the best and most
              appropriate university possible. Consider the following factors
              when selecting a university.
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
              Students who complete these distance learning and online B.Com in
              Auditing programmes are qualified to apply to numerous businesses,
              nonprofits, and governmental agencies. Many jobs are available
              after completing this degree, including chartered accounting,
              financial analysis, and financial management.
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
              The B.Com. in Auditing is a course offered at several
              universities, and anyone interested in a career in finance or
              accounting should enroll.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Auditing FAQ</h1>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
                What are the requirements for an online B.Com in Auditing?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The candidates must complete their 10+2 from an accredited board
                with at least a 50% grade.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
                Can I get an MBA after completing a distance/online B Com
                degree?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                A B.Com degree earned remotely or online can be followed by an
                MBA. After earning a distance/online B.Com, one can pursue a
                regular or distance/online MBA.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
                Is there a test for admission to the distance learning or online
                B.Com programme?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The programme requires no entrance exam for distance learning or
                online B.Com enrollment.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>Is correspondence with B.Com beneficial?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Both degrees are the same in every way. This qualification
                entitles you to apply for jobs.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>Is B Com good for the future?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Many private and public banks hire recent B.com graduates each
                year. Both the public and private sectors are open to
                candidates.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
