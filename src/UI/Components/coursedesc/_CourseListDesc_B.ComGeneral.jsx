import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
// import HRM from "../../../assets/images/B.Com/BComHindi.svg";
import HRM from "../../../assets/images/B.Com/bcomgenral.png";

import line_h from "../../../assets/images/process/Line.png";
import Common from "../../../assets/images/B.Com/Hindi.svg";
import Commons from "../../../assets/images/B.Com/Common.svg";
import Rankings from "../../../assets/images/process/rankings.png";
import Content from "../../../assets/images/process/content.png";
import Structure from "../../../assets/images/process/structure.png";
import { Accordion } from "react-bootstrap";

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
          content="Distance Pathsala is one the best university for BCOM distance education which gives you the best learning experience to keep your knowledge on its toes with various activities."
        />
        <meta name="keywords" content=" best university for BCOM distance education" />
      </Helmet>
      <Searchform />
      <div className="container mt-3 hrm">
        <div className="row">
          <div className="col-md-4 hrm-img">
            <img src={HRM} className="img-fluid" alt="Hrm page image" />
          </div>
          <div className="col-md-8 py-4 hrm-text">
            <h3>
              Online and Distance B.com in B.com <span> General </span>
            </h3>
            <span className="m-0 p-0">
              <img
                src={line_h}
                className="img-fluid"
                alt="Finance page image"
              />
            </span>
            <p>
              The B.com degree program is one of the most popular but excellent
              programs that enable students to pursue a job that allows them to
              do in-depth study about businesses, play with numbers, and more. A
              B.com General is offered by prestigious colleges and can be
              completed online, on-campus, or through distance learning. This
              course is perfect since it gives students unrestricted access to
              job opportunities.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>Why should you choose B.com in B.com General?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              This curriculum is appropriate for students seeking positions in
              the business world as auditors or financial analysts.
              Additionally, for students who are seeking budget-friendly
              standards, schedule flexibility, and global networking it is a
              course that promotes the growth of professional abilities. You may
              study at your speed with the help of the course's straightforward
              study plan and already-recorded online lessons. Successful program
              graduates may find employment in some prestigious jobs.
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
              the required skill set. Career opportunities include those as an
              investment banker, chief financial officer, auditor, and manager
              of corporate operations.
            </p>

            <h3>Earn a High Salary </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              You can boost your salary with the information you gain from this
              degree. Candidates will ultimately be qualified to work as
              investment bankers, chief financial officers, budget analysts,
              auditors, and managers of company operations. After finishing the
              program, the student would be able to obtain the greatest job with
              excellent perks.
            </p>
            <h3>Admission Procedure</h3>

            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Candidates must finish a three-year distance learning program with
              six-month-long semesters to be eligible for the B.com in B.com
              General. Before you register for enrollment, you must meet several
              requirements.
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
              <img
                src={line_h}
                className="img-fluid"
                alt="Finance page image"
              />
            </span>

            <p>
              Students who participate in the online and distance learning B.com
              General program gain an in-depth understanding of accounting and
              finance. The three-year, six-semester undergraduate B.com. A
              General degree is offered online.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left"> Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>• Essential of Management</li>
                    <li>• Business Communication</li>
                    <li>• Essentials of Financial Accounting</li>
                    <li>• Micro Economics</li>
                    <li>• Organizational Behaviour & HRM</li>
                    <li>• Essentials of IT</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right"> Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>• Advanced Financial Accounting</li>
                    <li>• Principles of Marketing</li>
                    <li>• Corporate Accounting</li>
                    <li>• Macro Economics</li>
                    <li>• Business statistics for Decision Making</li>
                    <li>• Environmental and Disaster Management</li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left"> Semester 3</p>
                  <ul className="p-0 mt-1">
                    <li>• Business and Allied Law</li>
                    <li>• Banking and Insurance</li>
                    <li>• Financial Management </li>
                    <li>• Cost Accounting</li>
                    <li>• Audit -I</li>
                    <li>
                      • International Business and Export-Import Management
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right"> Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>• Corporate and Information Technology Law</li>
                    <li>• Introduction to Analytics</li>
                    <li>• Fundamental of Taxation</li>
                    <li>• Research Methodology</li>
                    <li>• Audit - II</li>
                    <li>• Management Accounting</li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left"> Semester 5</p>
                  <ul className="p-0 mt-1">
                    <li>• Financial Institutions and Markets</li>
                    <li>• Financial statement Analysis</li>
                    <li>• Indian Accounting Standards</li>
                    <li>• Investment Product and Analysis</li>
                    <li>• Entrepreneurship Management</li>
                    <li>• Project</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right"> Semester 6</p>
                  <ul className="p-0 mt-1">
                    <li>• Business Ethics and Corporate Governance</li>
                    <li>• Strategic Management</li>
                    <li>• Financial Modelling</li>
                    <li>• Corporate Finance</li>
                    <li>• Portfolio Management</li>
                    <li>• ----- ------ </li>
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
              The right college must be chosen if you wish to pursue a B.com
              degree. General. When choosing the ideal institution, take into
              account the following factors.
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
            <h3>Career Opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Students who successfully finish this distance learning B.com
              General program are qualified to apply for positions as investment
              bankers, chief financial officers, budget analysts, and auditors.
              To develop their careers or to apply for jobs in this profession,
              they are also entitled to apply to MBA programs in the same
              industry.
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
              Several universities offer this course. It is recommended that
              applicants to this online and distance learning B.com general
              program have a career goal in the field of commerce.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">B.com General FAQ</h1>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>Which universities are best for distance/online B Com?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The following colleges are the finest for distant learning and online B Com:
IGNOU, Jaipur National University, Delhi University, Mumbai University, Amity University

              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>What is the eligibility criterion of distance/online B. Com?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              You must complete your 10+2 education with a business major and Math as a required subject.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              Is there any entrance examination for taking admission in distance/online B.Com?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              There is no admission test to enroll in distance learning or online B.Com. To enroll in a distance or online B.Com program, you only need to have a minimum grade point average in intermediate.
              </p>
            </Accordion.Body>

            
          </Accordion.Item>

          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
              What is the examination mode of semester examination of distance/online B.Com?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Examining procedures vary from institution to university. While some colleges have offline testing locations, some provide online testing options.
              </p>
            </Accordion.Body>

            
          </Accordion.Item>

          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>
              Can I pursue an MBA after a distance/online B Com degree?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              After earning a distance learning or online B.Com, one may pursue an MBA. After earning a distance or online B.Com degree, one may choose to pursue a standard or distance/online MBA.
              </p>
            </Accordion.Body>

            
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
