import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Mr_management from "../../../assets/images/B.Com/P.svg";

import line_h from "../../../assets/images/process/Line.png";
import Common from "../../../assets/images/mSC1/mcom/PAF/Career.svg";
import choose from "../../../assets/images/mSC1/msc/AI/choose.svg";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/mSC1/mcom/AF/Admission.svg";
import StepB from "../../../assets/images/msc/stepA.png";
import StepA from "../../../assets/images/msc/stepB.png";
import Accordion from "react-bootstrap/Accordion";
export default function CourseListDesc() {
  return (
    <>
      <Helmet>
        <title>
          Professional Accounting And Finance Degree | Distance Pathshala
        </title>
        <meta
          name="description"
          content="Online and Distance Master of Commerce in Professional Accounting and Finance will help in building strong finance and accounting."
        />
        <meta name="keywords" content="Best accounting courses" />
      </Helmet>
      <Searchform />
      <img src={Mr_management} alt="hr Management" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>
              Why should you choose M.com in professional accounting and
              finance?
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              This online and distance course helps both students and working
              professionals in gaining an in-depth knowledge of advanced
              concepts in it. M.com in professional accounting and finance
              course helps learners to build profound knowledge of accounting
              and finance. The updated curriculum of professional accounting and
              finance sharpens the knowledge of accounts and finance.
            </p>
          </div>
          <div className="section">
            <h3>Job security</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Irrespective of technological advances, candidates will always
              meet the enormous and ongoing demand for skilled accountants and
              financial professionals. A career in the professional accounting
              and finance sector can represent a highly secure career for life.
            </p>
          </div>
          <div className="section">
            <h3>Advanced career opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Even if you are not working as an accountant, the skills that you
              learn in this course will help you advance your career. Whatever
              the work you do, you will become more effective in your current
              role and a more attractive candidate for advanced roles. Learning
              this course also presents a pathway for you to transition into a
              finance or accounting role.
            </p>
          </div>
          <div className="section">
            <h3>Endless job opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The main perks that an individual can enjoy after getting this
              degree are that they are open to an extensive number of
              opportunities. This is because accountants and finance
              professionals are a need for every organization so the requirement
              for finance candidates never sees a decline. The aspirants can
              enjoy the privilege of exposure to any industry they wish to work
              in.
            </p>
          </div>

          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              To pursue this online and distance education in M.com, candidates
              are not even required to give the entrance exam for admission. The
              duration of this course is 2 years and however, students will get
              additional years to pass all the exams of the program. To pursue
              this course, candidates must have at least a bachelor’s degree
              with a minimum percentile from a recognized university.
            </p>
            <div className="text-center">
              <h3>ADMISSION PROCEDURE </h3>
              <span className="m-0 p-0">
                <img src={line_h} className="img-fluid" alt="Hrm page image" />
              </span>
            </div>
            <img src={AdmissionProcedure} alt="admin" className="w-100 mt-5" />

            <img src={elegibilty} alt="admin" className="w-100 mt-5" />
            <div className="container py-3 text-center">
              <p>
              Here is a common procedure to take admission in the distance M.com in Professional Accounting and Finance.
              </p>
              <img src={StepA} alt="admin" className="mw-100 mt-5" />
              <img src={StepB} alt="admin" className=" w-100 mt-5" />
            </div>
          </div>

          <div className="section">
            <h3>How to choose the right university?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Once you decide to pursue M.com in professional accounting and
              finance it is essential to choose the right university. The
              following points are essential in selecting the right university.
            </p>

            <div className="row mt-4">
              <span className="m-0 p-0">
                <img src={choose} className="img-fluid" alt="Hrm page image" />
              </span>
            </div>
          </div>
          <div className="section pt-4">
            <h3>Career opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              This course makes the aspirants job-ready in the taxation and
              accounting sector. There are plenty of job opportunities that are
              available after completing this course. Aspirants can explore the
              banking and finance sector after the completion of the course.
              Here is a list of job opportunities that are available for
              aspirants after completion of this course.
            </p>

            <div className="container text-center mt-4">
              <img src={Common} className="img-fluid" alt="Hrm page image" />
            </div>
          </div>

      
          <div className="section">
            <h3>Bottom line</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              This online and distance education is an extremely flexible
              program and working professionals who are willing to pursue higher
              studies can easily opt for this course. Before getting into any
              universities, ensure to choose the right and reputed universities.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Professional Accounting And Finance FAQ</h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>What is the eligibility of an online M.Com in Professional Accounting and Finance?</h5>
            </Accordion.Header>
            <Accordion.Body>
         <p>The candidates must have a graduation degree from a recognized university with a minimum percentile to be eligible for the course.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
              Is Online M.Com in Professional Accounting & Finance course valid?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
  <p>Yes, the degree is valid as it has been approved by the University Grants Commission (UGC).</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              Where can I apply after an online M.Com in Professional Accounting & Finance?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              You can easily apply in the banking and finance sector after completing the degree.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
              What is the average salary earned by a Finance Manager?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The average salary earned by financial analysts is between Rs. 8LPA and 14LPA.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>
              What are the top recruiters in the banking and finance field?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The top recruiters are SBI, ICICI Bank, Deloitte, KPMG, RBS, Ernst & Young, etc.
              </p>
            </Accordion.Body>
          </Accordion.Item>
  
        </Accordion>
      </div>
    </>
  );
}
