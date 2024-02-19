import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import FinanceM from "../../../assets/images/MBA/FinanceM.png";
import line_h from "../../../assets/images/process/Line.png";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/MBA/Datascience/M1.svg";
import StepB from "../../../assets/images/msc/stepA.png";
import StepA from "../../../assets/images/msc/stepB.png";
import course from "../../../assets/images/MBA/HRMfinance/course.svg";
import Content from "../../../assets/images/process/content.png";
import Rankings from "../../../assets/images/process/rankings.png";
import Structure from "../../../assets/images/process/structure.png";
import choose from "../../../assets/images/MBA/choose.svg";
import Common from "../../../assets/images/MBA/Datascience/M2.svg";
import Accordion from "react-bootstrap/Accordion";
export default function CourseListDesc() {
  return (
    <>
      <Helmet>
        <title>
          Distance learning Masters Programs in Applied Finance 2022
        </title>
        <meta
          name="description"
          content="Distance MSC Applied Finance course at Distance Pathshala is offered with numerous advantages and facilities to the students online."
        />
        <meta name="keywords" content="Applied Finance Distance Education" />
      </Helmet>

      {/* <h1> hrm and fINANCE MANAGEMENT</h1> */}

      <Searchform />
      <img src={FinanceM} alt="hr Management" className="w-100" />
      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>Why should you choose an online & distance MBA in Finance Management?  </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            This course will give you the proper knowledge about all dimensions of financial management like insurance, capital, loss, assets profit, and fund management. It enhances your skills in such a way that you can analyze the risk and make the business financially secure in this highly dynamic business world. If you are working professionally in the corporate sector then this degree will add surplus value to your CV This online and distance MBA in finance is an excellent substitute for a regular degree for those who can`t attend college due to a job or other reasons. 
Although it is 2 years you will get 5 years to complete your degree.The most amazing factor you can learn anytime anywhere.

         
            </p>
          </div>

          <div className="section">
            <h3>Explore Advanced Career Opportunities </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            As the market is never stable it keeps on changing, that`s why the industry is always in need of a financial experts team who could handle their account affairs. If you have any doubt regarding career opportunities after pursuing an online and distance MBA in finance then you are wrong as this single degree can make you eligible for many job profiles like a financial adviser, accounts manager, market researcher, etc. 
            </p>
          </div>

          <div className="section">
            <h3>Earn a High Salary  </h3>
            <p>
            After an online and distance degree in Financial management, you can earn a high payscale by becoming CFO, investment banker, account manager, project manager, or business analyst, and many such options will get open for you.
            </p>
          </div>

          <div className="section">
            <h3>Admission Procedure Of Online/Distance</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            It is 2 years postgraduate degree that can be done by anyone who completed an undergraduate degree from any recognized college or university. Getting admission is a smooth process just you need to choose a college. Any individual with 55% aggregate marks in bachelor's can apply for it.  
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
              Here is a common procedure to take admission in the Distance MBA in

        <br></br>Financial Management 
              </p>
              <img src={StepA} alt="admin" className="mw-100 mt-5" />
              <img src={StepB} alt="admin" className=" w-100 mt-5" />
            </div>
          </div>

          <div className="section">
            <h3>Course Outline</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
            This course will include businss law, fundamental and advance of managment as well as finance. It design in such a way that you can gain wholesome idea of financial and business planning. And in last semester you may need to take practical exposure through internship and project. 
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li> Principles and Practice of Management  </li>
                    <li> Management Economics</li>
                    <li> Organizational Behaviour </li>
                    <li>
                     Business Law
                    </li>
                    <li> Management Accounting </li>
                    <li>---- </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li> Production/Operation Management           </li>
                    <li> Financial Management</li>
                    <li> Human Resource Management</li>
                    <li> Marketing Management</li>
                    <li> Marketing Management</li>
                    <li> Management Information system</li>
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
                    <li> Cost and Management Accounting</li>
                    <li> Taxation-Direct & Indirect </li>
                    <li> Capital Market & Portfolio Management </li>
                    <li> Strategic Cost Management </li>
                    <li> Corporate Finance </li>
                    <li> Marketing of Financial Services </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li> Strategic Financial Management</li>
                    <li> International Finance</li>
                    <li> Financial Institutions and Markets </li>
                    <li> Business: Ethics, Governance & Risk </li>
                    <li> Research Methodology </li>
                    <li> Project </li>
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
              Once you decide to pursue MBA in Finance management, it is
              essential to choose the right university. The following points are
              essential in selecting the right university.
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
            After completing this course, you can be hired as financial advisor, business analyst, financial risk manager. Equity and investment planner. You  can work in bank in accounts dealer. There is vast pool opportunity after this degree. 
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
            The online and distance MBA in Financial management is the great choice for individual who are passionate regarding financial market and risk management. This course open  door to many everlasting high paying job profile. Finance is the important part of business likewise financial team is the strength of the business. This degree can make such part of the business in this uncertain environment.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Financial Management FAQ</h1>
          <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
              Do any science graduate can pursue online and distance MBA in Financial management? 
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Yes, graduate with stream will be eligible for online and distance MBA in Financial management even arts and engineering too.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
              Is CAT score is important for taking admission in online and distance MBA in Financial management?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              May be or may not as it totally varies from college to college as per their policy but you can read out course propestus from their official website.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              What is the average fee of online and distance MBA in Financial management 
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The average fee for online and distance MBA in Financial management can be lie between 2 lacs to 5 lacs
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
          
              Is pursuing online and distance MBA in Financial management is wise move? 
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Yes, it is wise move for those who intend to make great career in financial domain of market.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
