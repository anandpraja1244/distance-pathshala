import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import banking_i from "../../../assets/images/B.Com/banking_i.png";
import line_h from "../../../assets/images/process/Line.png";
import Common from "../../../assets/images/B.Com/FinTech.svg";
import Commons from "../../../assets/images/B.Com/Common.svg";
import Rankings from "../../../assets/images/process/rankings.png";
import Content from "../../../assets/images/process/content.png";
import Structure from "../../../assets/images/process/structure.png";

export default function CourseListDesc() {
  return (
    <>
      <Helmet>
        <title>
          Best Online B.Com in FinTech Distance courses University in India |
          Distane Pathshala
        </title>
        <meta
          name="description"
          content="Enroll now in a FinTech course in India online to get a blend of cutting-edge educational strategies. Let Distance Pathshala guide you on your right career."
        />
        <meta name="keywords" content="FinTech courses in India online" />
      </Helmet>
      <Searchform />
      <div className="container mt-3 hrm">
        <div className="row">
          <div className="col-md-4 hrm-img">
            <img src={banking_i} className="img-fluid" alt="Hrm page image" />
          </div>
          <div className="col-md-8 py-4 hrm-text">
            <h3>
            Online and Distance B.Com in <span> Banking and Insurance</span>
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Online and Distance BCA is a bachelors degree of 3-years which includes 6 semesters. The knowledge of BCA is the need
of the majority of the industry that is functioning in the tertiary sector. BCA graduated students are given high compensations
as they work.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>Why should you choose Online and Distance B.Com in Banking and Insurance?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Online and Distance B.Com in Banking and Insurance opens up a world of opportunities for the students. The course will
teach the students the concepts of banking and insurance in the IT Field. The course will enable students to secure top
positions in corporate as well as government.
            </p>
          </div>
          <div className="section">
            <h3>Explore Advanced Career Opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            The opportunities are endless. The course prepares the students for managing top activities and functionalities of the
business. Students can apply for numerous jobs, including Data Science,Research,IT,Blockchain development.
            </p>
          </div>
          <div className="section">
            <h3>Career transformation </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            The opportunities are endless. The course prepares the students for managing top activities and functionalities of the
business. Students can apply for numerous jobs, including Data Science,Research,IT,Blockchain development.
            </p>
          </div>
          <div className="section">
            <h3>Earn a High Salary </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Law is one of the most important factors in the business and students after graduation can easily bag a job with a high
salary package. After finishing the degree, the students are prepared to provide various banking and insurance services
which can boost the career of the graduates. Students can bag salary packages as high as 2.5LPA to 7.8LPA.
            </p>
          </div>
          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The duration of this course is three years and is divided into 6
              semesters. The admission process for this course is done on the
              basis of merit. To take admission for online and distance B. Com
              programs, candidates should meet the minimum eligibility criteria.
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

          {/* <div className="section">
            <h3>Course subjects</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
            The Online and Distance B.Com in Banking and Insurance prepares students for careers in IT sector and Computer
Applications. The course also develops their computer and IT skills. The Online and Distance B.Com in Banking and
Insurance is a 3-year, 6-semester undergraduate program. The syllabus covers the curriculum&#39;s subjects and topics.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left"> Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>Fundamentals of IT & Computers</li>
                    <li>Digital Electronics</li>
                    <li>Basic Mathematics</li>
                    <li>C Language Lab</li>
                    <li>English Communication</li>
             
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right"> Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Operating Systems and Fundamentals</li>
                    <li>Advanced Mathematics</li>
                    <li>Organizational Behaviour</li>
                    <li>Advanced C Programming Lab</li>
                    <li>C Language Advanced Concepts</li>
             
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
                    <li>Innovation and Transformation in Financial Services</li>
                    <li>Securities Law</li>
                    <li>Derivatives Management</li>
                    <li>Fundamentals of Data Analytics</li>
                    <li>Robotic Process Automation Fundamentals</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2"> Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>Fintech in Personal Financial Management</li>
                    <li>Cyber Law</li>
                    <li>Financial Risk Management</li>
                    <li>Portfolio Management</li>
                    <li>Application of Data Analysis</li>
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
                    <li>Technical Analysis</li>
                    <li>Financial Modelling</li>
                    <li>Fundamentals of Algo Trading</li>
                    <li>Data Analysis Visualisation and Storytelling</li>
                    <li>Business Transformation Using AI and Analytics</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back"> Semester 6</p>
                  <ul className="p-0 mt-1">
                    <li>Blockchain and CryptoCurrency Fundamentals</li>
                    <li>FinTech: Credit Modelling</li>
                    <li>Future of Data-Driven Finance</li>
                    <li>Fin App in Entrepreneurial Finance</li>
                    <li>---</li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}

          <div className="section">
            <h3>How to choose the right university?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            The most important part is choosing the most suitable and appropriate university to continue pursuing B.Com in Banking and
Insurance.
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
              B. Com in FinTech is an undergraduate course that helps students
              to get a good position in their lives. After completion of this
              course, candidates will get various job opportunities in the
              industries. Here are some major job positions that are available
              after the completion of a distance B. Com in FinTech.
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
and polish your skills and develop yourself in becoming a future IT Manager then you can pursue this online and distance
B.Com programme.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Banking and Insurance FAQ</h1>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
              What is the eligibility criterion of distance/online BCA In India?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              You have to pass 10+2 with any stream and Math as the compulsory subject.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
              Is there any entrance examination for taking admission in distance/online BCA degree programs in India?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Yes, an MBA can be pursued after completing a distance/online B.Com degree. After earning a distance/online B.Com, one
can pursue a regular or distance/online MBA.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              Is there an entrance exam for distance/online B.Com admission?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Enrollment in a distance learning or online B.Com programme requires no entrance exam.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>Is B.Com superior to BSc?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              BCom is a better choice if you want to earn a little bit more money, even though both BSc and BCom offer enough job
opportunities. With a Bsc, you can work in teaching, laboratories, small-scale management, and government.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>Can I get a job after finishing my BCom?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              After completing BCom, one can pursue traditional careers such as accounting, Chartered Accountancy, Company
Secretary, Bank-PO exams, and so on, or pursue unconventional careers such as financial risk management, investment
banking, etc.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div> */}
    </>
  );
}
