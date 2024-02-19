import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import mba_genaral from "../../../assets/images/MBA/mba_genaral.png";
import line_h from "../../../assets/images/process/Line.png";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/msc/10th.svg";
import StepB from "../../../assets/images/msc/stepA.png";
import StepA from "../../../assets/images/msc/stepB.png";
import Common from "../../../assets/images/msc/CareerOppor.svg";
import Rankings from "../../../assets/images/process/rankings.png";
import Content from "../../../assets/images/process/content.png";
import Structure from "../../../assets/images/process/structure.png";
import Accordion from "react-bootstrap/Accordion";
export default function CourseListDesc() {
  return (
    <>
      <Helmet>
        <title>
        Online & Distance MBA In MBA General Management colleges in India | Distance Pathshala


        </title>
        <meta
          name="description"
          content="Get the Best Online and Distance MBA in MBA General Management distance learning colleges/University in India. Distance Pathshala is Best option to advance your career."
        />
        <meta name="keywords" 
        content="MBA In  MBA General Management  colleges" />
      </Helmet>

      {/* <h1>General manage not</h1> */}


      <Searchform />
      <img src={mba_genaral} alt="MBA In  MBA General Management  colleges" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>Why should you choose an Online and Distance MBA in MBA General? </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              This course will give you the proper knowledge about all dimensions of management and business.  Areas like project management, sales, finance, planning, product, and services. This course gives a fundamental and advanced glimpse of business operations and growth.  You should take an Online and Distance MBA in MBA General if you are interested in “ What is business and how is it administrated in a profitable direction?” Online and Distance MBA in MBA General will sum up all aspects of business and the factors influencing and handling it.
            </p>
          </div>

          <div className="section">
            <h3>Explore Advanced Career Opportunities </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Today`s world is the century of innovation and entrepreneurs. And India is growing at a rapid pace in the business world so it is high time to have trained professionals. This degree makes you fit many domains of business administration.
            </p>
          </div>

          <div className="section">
            <h3>Earn a High Salary </h3>
            <p>
              After an online and Distance MBA in MBA General, you can earn a high payscale by becoming, a management consultant, project manager, or business analyst, and many such options will get open for you. The average salary can be 10 lacs pa to 12 lacs pr
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
                <br></br>MBA General
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
              This course will include business planning and entrepreneurship, fundamentals, and advanced business management It is designed in such a way that you can gain a wholesome idea of business administration and growth. And in the last semester, you may need to take practical exposure through internships and projects.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li> Management Concepts and Theories</li>
                    <li>  Organizational Behaviour</li>
                    <li> Management Accounting</li>
                    <li>
                       Statistics for Management
                    </li>
                    <li>  Managerial Economics</li>
                    <li>
                       Managerial Communication
                    </li>
                    <li> Business Government and Society</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li> Marketing Management </li>
                    <li> Human Resource Management</li>
                    <li> Corporate Finance </li>
                    <li> Quantitative Methods</li>
                    <li> Legal aspects of Business</li>
                    <li> Operations Management</li>
                    <li> Management Information Systems</li>
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
                    <li> Project Management</li>
                    <li> Entrepreneurship and Small Business</li>
                    <li> Consumer Behaviour and Marketing Research</li>
                    <li> Portfolio Management </li>
                    <li> Organizational Change and Development</li>
                    <li> Business Familiarization Repor</li>
                    <li>----</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>
                       Strategic Management
                    </li>
                    <li> Product and Brand Management</li>
                    <li> International Financial Management</li>
                    <li> Strategic Human Resource Management</li>
                    <li> International Marketing</li>
                    <li> Electronic Commerce</li>
                    <li> Project Work</li>
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
              Doing MBA from a renowned university is impactful from a career perspective. Before you go for admission in online and distance you must be aware of the right place to apply. Consider these points while looking for a college or university
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
              After completing this course, you can be hired as a brand manager, product manager, training professional and sales manager, etc. You can work in management firms or with start-ups there is a vast pool of opportunities after this degree.
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
              After completing this course, you can be hired as a brand manager, product manager, training professional and sales manager, etc. You can work in management firms or with start-ups there is a vast pool of opportunities after this degree.
            </p>
          </div>
        
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">MBA General FAQ</h1>
          <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
              Do any science graduate can pursue an Online and Distance MBA in MBA General
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Yes, graduates with the stream will be eligible for Online and Distance MBA in MBA General even non-commerce students also. 
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
              Is CAT score important for taking admission in Online and Distance MBA in MBA General?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              May or may not as it totally varies from college to college as per their policy but you can read out the course prospectus from their official website.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              What is the average fee for online and Distance MBA in MBA General? </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The average fee for online and Distance MBA in MBA General
can be lie between 3 lacs to 10lacs 

              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
          
              Is pursuing online and Distance MBA in MBA General worthy for future.
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Yes, it is a good decision for those who intend to make a great career in the business world.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
