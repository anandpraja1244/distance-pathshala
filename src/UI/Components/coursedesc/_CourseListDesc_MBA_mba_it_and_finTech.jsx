import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import it_fintech from "../../../assets/images/MBA/it_fintech.png";
import line_h from "../../../assets/images/process/Line.png";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/MBA/Datascience/M1.svg";
import StepB from "../../../assets/images/msc/stepA.png";
import StepA from "../../../assets/images/msc/stepB.png";
import course from "../../../assets/images/MBA/Datascience/M4.svg";
import choose from "../../../assets/images/MBA/choose.svg";
import Common from "../../../assets/images/MBA/FinancialMarkets/Career.svg";
import Accordion from "react-bootstrap/Accordion";

import Content from "../../../assets/images/process/content.png";
import Rankings from "../../../assets/images/process/rankings.png";
import Structure from "../../../assets/images/process/structure.png";

export default function CourseListDesc() {
  return (
    <>
      <Helmet>
        <title>
          Online & Distance MBA In IT and FinTech colleges in India | Distance
          Pathshala
        </title>
        <meta
          name="description"
          content="Get the Best Online and Distance MBA in IT and FinTech distance learning colleges/University in India. Distance Pathshala is Best option to advance your career."
        />
        <meta name="keywords" content="MBA In IT and FinTech colleges" />
      </Helmet>

      {/* <h1>international finance not</h1> */}

      <Searchform />
      <img
        src={it_fintech}
        alt="MBA in IT and FinTech Distance University"
        className="w-100"
      />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>
              Why should you choose an online and distance MBA in IT and
              FinTech?
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              As there is a countless range of subjects that can be proposed
              online and a distance MBA in IT and FinTech whose value is the
              same as a regular offline degree. For a chance, if you are unable
              to take the ordinary degree then this is the best way of following
              an online distance degree in MBA in IT and FinTech is such a
              wonderful opportunity. Countless universities are offering this
              course from a distance mode along with the entire help and study
              materials. The students are free to pick their subjects as per
              their interests and professional path.
            </p>
          </div>

          <div className="section">
            <h3>
              Explore career options in Online Distance MBA in IT and FinTech{" "}
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Online and Distance MBA in IT and FinTech is a professional degree
              course. Both IT and FinTech are highly appreciated in professional
              spheres in recent times. So, there is a wide scope of career
              growth after this dual profession course.
            </p>
          </div>

          <div className="section">
            <h3>High Salary and Benefits</h3>
            <p>
              MBA in strategic human resource management course opens the door,
              People working in this field are some of the highest-paid
              professionals. With financial markets managements, aspirants can
              land a job that pays high. This course will get you a high salary
              and benefits package. Students will also learn how to negotiate
              for high salaries in this course. Due to this, aspirants will get
              a substantial hike from their previous salary.
            </p>
          </div>

          <div className="section">
            <h3>Admission Procedure Of Online/Distance</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The candidates must keep eligibility criteria in regard to being
              involved in admission to online &amp; distance MBA in IT and
              FinTech. These are the subsequent eligibility criteria for
              admission in the online and distance MBA in IT and FinTech:
            </p>
            <li>
              The candidates must have a bachelors degree from an identified
              university.
            </li>
            <li>
              {" "}
              Also, the aggregate ratio in graduation must be at least 50%.
            </li>
            <li>Approvals: UGC | DEB | AICTE | NAAC</li>
            <p>
              The duration of this online MBA in IT and FinTech is 2 years and
              the curriculum of the program is bifurcated into 4 equal semesters
              with a duration of 6 months each.
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
                Here is a common procedure to take admission in the distance MBA
                in <br></br> IT and FinTech:
              </p>
              <img src={StepA} alt="admin" className="mw-100 mt-5" />
              <img src={StepB} alt="admin" className=" w-100 mt-5" />
            </div>
          </div>

          <div className="section">
            <h3>Course subjects</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              The program offers a semester-based online and distance MBA in
              Financial Markets with four 6-month semesters. Many universities
              that offer online and distance MBA in Financial markets are
              accredited and approved by the NAAC and the UGC.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>Management Process and Organizational Behavior</li>
                    <li>Business Communication</li>
                    <li>Statistics for Management</li>
                    <li>Financial and Management Accounting</li>
                    <li>Managerial Economics</li>
                    <li>Human Resource Management</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Production and Operations Management</li>
                    <li>Financial Management</li>
                    <li>Marketing Management</li>
                    <li>Management Information System</li>
                    <li>Operations Research</li>
                    <li>Project Management</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left sam-back">Semester 3</p>
                  <ul className="p-0 mt-1">
                    <li>Research Methodology</li>
                    <li>Legal Aspects of Business</li>
                    <li>Database Management System</li>
                    <li>Software Engineering </li>
                    <li>Technology Management</li>
                    <li>Business Intelligence / Tools</li>
                    <li>.......</li>
                    <li>.......</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>
                    Strategic Management and
Business Policy
                    </li>
                    <li>International Business
Management</li>
                    <li>Business Leadership</li>
                    <li>Project work</li>
                    <li>eCommerce</li>
                    <li>FinTech Payments and Regulations</li>
                    <li>Cryptocurrency and Blockchain</li>
                    <li>Enterprise Resource Planning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <h3>Other Online/distance MBA course specializations </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
          </div>
          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-4">
                  <ul className="p-0 mt-1 text-center">
                    <li className="px-5">MBA in Marketing and HR management</li>
                    <li className="px-5">
                      MBA in Marketing and Finance management
                    </li>
                    <li className="px-5">MBA in System and operations</li>
                    <li className="px-5">
                      MBA in Banking and finance management
                    </li>
                    <li className="px-5">MBA in International Marketing</li>
                    <li className="px-5">
                      MBA in Investment Banking Equity research
                    </li>
                    <li className="px-5">MBA in Supply chain Management</li>
                    <li className="px-5">
                      MBA Data Science and Analytics Management
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul className="p-0 mt-1 text-center">
                    <li className="px-5">
                      MBA in Strategic finance Management
                    </li>
                    <li className="px-5">MBA in HR Management</li>
                    <li className="px-5">MBA in Oil and gas Management</li>
                    <li className="px-5">MBA in General Management</li>
                    <li className="px-5">MBA in Finance Management</li>
                    <li className="px-5">
                      MBA in International finance management
                    </li>
                    <li className="px-5">MBA in Marketing management</li>
                    <li className="px-5">
                      MBA in Finance and Leadership Management
                    </li>
                    <li>.....</li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul className="p-0 mt-1 text-center">
                    <li className="px-5">
                      MBA in Finance and Leadership Management
                    </li>
                    <li className="px-5">MBA in Power Management</li>
                    <li className="px-5">MBA in Aviation Management</li>
                    <li className="px-5">MBA in digital Marketing Ecommerce</li>
                    <li className="px-5">MBA in Fintech Management</li>
                    <li className="px-5">MBA in Finance and HR Management</li>
                    <li className="px-5">
                      MBA in Business Intelligence and analytics{" "}
                    </li>
                    <li className="px-5">MBA in IT Management</li>
                    <li>----</li>
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
            Choosing the right college for an online and long-distance MBA in IT and FinTech is very vital. The right MBA in IT and
FinTech university has a great influence on the quality of education you get. Some of the issues to keep in the sense while
creating the right pick are as follows: 
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
            <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
              
                  <ul className="p-0 mt-1">
                    <li>Job Opportunities</li>
                    <li>Financial Analyst</li>
                    <li>Data Scientist</li>
                    <li>IT Manager</li>
                    <li>Chief Technology Officer</li>
                    <li>IT Consultant</li>
                    <li>Business Development Manager</li>
                  </ul>
                </div>
                <div className="col-md-6">
                
                  <ul className="p-0 mt-1">
                    <li>Average Salary in INR</li>
                    <li>4,00,000 PA</li>
                    <li>11,00,000 PA</li>
                    <li>9,10,000 PA</li>
                    <li>30,00,000 PA</li>
                    <li>9,40,000 PA</li>
                    <li>5,30,000 PA</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

            {/* <div className="container text-center mt-4">
              <img src={Common} className="img-fluid" alt="Hrm page image" />
            </div> */}
          </div>
          <div className="section">
            <h3>Conclusion</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            The opportunities are stacked up for you after completion of your online &amp; distance MBA in IT and FinTech. You can choose
from any university as per your appeals and needs as they variably deliver the course. You have the option to follow the
course with convenience in your home and still while balancing your life duties.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">IT and FinTech FAQ</h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>Is Online MBA in information technology a good option?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Yes, IT is an already well-established sector and after graduating with an IT domain, you can dig a wide variety of highly-
paid job parts including IT analytics, technology officer, IT analysis, etc.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
              Which university gives an IT and FinTech dual specialization?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>If you are looking for dual specialization in IT and FinTech in MBA in the online mode, then Manipal Online University is a
suitable option for you as it has a well-accredited and well-recognized online degree.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              How long is the Online MBA (IT and FinTech) course?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The MBA course in IT and FinTech is usually 2 years elongated (with a maximum of 4 years), split across 4 semesters.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
              Will my Online MBA be valid?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Today, several opportunities for an online MBA are known in the education market, but if you desire a valid and recognized
degree, guarantee that your chosen university and the degree has proof and accreditation from bodies like AICTE, UGC-
DEB, NAAC, NIRF, AIU. Then your degree will be valid and identified.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>
              What is the fee for an Online MBA (IT and FinTech)?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Since this course domain is mainly offered by private universities in India at the point, the complete course fee ranges
between INR 1,50,000-2,00,000 on average.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
