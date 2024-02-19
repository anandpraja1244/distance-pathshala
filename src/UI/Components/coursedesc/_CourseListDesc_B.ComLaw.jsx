import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import law from "../../../assets/images/B.Com/law.png";
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
		Best Online & Distance B.Com in Hindi Course University in india  | Distane Pathshala
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
            <img src={law} className="img-fluid" alt="Hrm page image" />
          </div>
          <div className="col-md-8 py-4 hrm-text">
            <h3>
            Online and Distance B.Com in <span>Law</span>
            </h3>
            <span className="m-0 p-0">
              <img
                src={line_h}
                className="img-fluid"
                alt="Finance page image"
              />
            </span>
            <p>
            Online and Distance B.Com in Law is an undergraduate course for 3 years. It is one of the courses which is always in great
demand. It provides students with knowledge of legal issues and their implications in the socio-economic environment.
Online B.Com in Law is definitely one of the best courses one can opt for.
            </p>
          </div>
        </div>
      </div>
      

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>Why should you choose B.Com in Law?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Online B.Com in Law opens up a world of opportunities for the students. The course will teach the students the
fundamentals of law practices. The course will enable students to secure top positions in corporate as well as government.
Online B.Com in Law teaches students the principles and techniques of marketing. Throughout the program, students will
study and learn the latest practices, concepts, and ongoing issues in the legal field.Students who are interested to explore
law and commerce field will benefit from this course.
            </p>
          </div>
          <div className="section">
            <h3>Earn a High Salary</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Law is one of the most important factors in the business and students after graduation can easily bag a job with a high
salary package. After finishing the degree, the students are prepared to provide various professional legal practices in socio
economic conditions which can boost the career of the graduates. Students can bag salary packages as high as 4LPA to
6LPA.
            </p>
          </div>
      
          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Online B.Com in Law requires students to complete three years of 6-month semesters through an online/distance program.
Please review the details to know before enrolling.
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
            <h3>  Course Subjects</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            The Online and Distance B.Com in Law prepares students for careers in business related legal matters or general law
practices. The course also develops their analytical skills. The B.Com in Law online course is a 3-year, 6-semester
undergraduate program. The online B.Com in Law syllabus covers the curriculums subjects and topics.
            </p>
            <li>Constitutional Law</li>
            <li>Principles Of Management</li>
            <li>Financial Accounting</li>
            <li>Essentials of Accounting</li>
            <li> Auditing</li>
            <li> Labor Law</li>
            <li> Cost Accounting</li>
            <li> Commercial Statistics</li>
          </div>

          <div className="section">
            <h3>How to choose the right university?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            The most important part is choosing the most suitable and appropriate university to continue pursuing the B.Com in Law.
Consider the following key considerations when selecting the right university.
            </p>

            <div className="row mt-4">
              <div className="col-md-4">
                <img src={Rankings} className="img-fluid" alt="Hrm page image" />
              </div>
              <div className="col-md-4">
                <img src={Content} className="img-fluid" alt="Hrm page image" />
              </div>

              <div className="col-md-4">
                <img src={Structure} className="img-fluid" alt="Hrm page image" />
              </div>
            </div>
          </div>


        
          <div className="section pt-4">
            <h3>Career opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            B.Com in Law will provide students with a variety of career options. Students who complete this course are eligible to apply
as Legal Advisor, Taxation Experts, Legal Manager and Legal Service Chief.
           
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
            You have numerous options to choose from the universities that offer this course. If you wish to receive quality education
and polish your skills and develop yourself in becoming a future legal officer then you should pursue this online and distance
B.Com programme.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Law FAQ</h1>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>Which universities are better for online B.Com in Laws?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              GLA university is famous for an online B.Com in Laws program and that is GLA University. It is highly renowned and its
courses are also approved by UGC-DEB.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>Is there any entrance examination for taking admission in distance/online B.Com?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              To get admission in distance or online B.Com,there is no Entrance exam required.Just need a minimum percentage to get
enrolled for the course.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              Can I pursue an MBA after a distance/online B.Com degree?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              For Sure,anyone who is interested to pursue MBA after a distance/online B.Com degree can apply. One can take a regular
or distance/online MBA after getting a distance/online B.Com degree.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
              What are the eligibility criteria for an online B.Com in Laws?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The candidates are required to complete their 10+2 from a recognized board with minimum marks of 50%.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>
              How does the BBA LLB course and B.Com LLB course differ?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Both BBA LLB and B.Com LLB are considered to be of parallel disciplines i.e. commerce &amp; management and, the only
difference is in the subjects included in the syllabus. While BBA LLB has management subjects like organizational business,
managerial economics, business and managerial communication, fundamentals of business organization etc. whereas,
B.Com LLB has subjects like accounting, economics, taxation etc.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
