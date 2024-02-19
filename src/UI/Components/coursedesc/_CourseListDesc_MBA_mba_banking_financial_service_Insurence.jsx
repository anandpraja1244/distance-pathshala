import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import financial_BFSI from "../../../assets/images/MBA/financial_BFSI.png";
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
        Online & Distance MBA In  Banking Financial Services, and Insurance  colleges in India | Distance Pathshala
        </title>
        <meta
          name="description"
          content="Get the Best Online and Distance MBA in  Banking Financial Services, and Insurance distance learning colleges/University in India. Distance Pathshala is Best option to advance your career."
        />
        <meta name="keywords" content="MBA In  Banking Financial Services, and Insurance  colleges" />
      </Helmet>

      {/* <h1>Finance Management MARKET not</h1> */}

      <Searchform />
      <img src={financial_BFSI} alt="MBA in Banking Financial Services, and Insurance Distance University" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>
            Why should you choose an Online and Distance MBA in Banking Financial Services, and Insurance-BFSI
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            This course will give you the proper knowledge about all the essentials of banking operation. This course gives a fundamental and advanced glimpse of the BFSI sector. By shaping your personality and mindset according to the market's demands, Online and Distance MBA in Banking Financial Services, and Insurance-BFSI will make you ideal for handling banking affairs.
            </p>
          </div>

          <div className="section">
            <h3>Explore Advanced Career Opportunities </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Online and Distance MBA in Banking Financial Services and Insurance-BFSI will equip you all essential skills to be banking professional, you can apply for bank vacancies, investment advisor and many such roles.
            </p>
          </div>

          <div className="section">
            <h3>Earn a High Salary </h3>
            <p>
            After an Online and Distance MBA in Banking Financial Services, and Insurance-BFSI you can earn a high pay scale by working with banks and prestigious financial institutions, and insurance firms 
            </p>
          </div>
          {/* <div className="section">
            <h3>Eligibility Criteria </h3>
           <li>Bachelor’s degree from a recognized university with 50% or more.</li>
<li>	Few colleges may ask for work experience of 1-2 years.</li>
	<li>There is no entrance exam needed for most of the universities providing MBA in Oil and Gas Management course.</li>

          </div> */}

          <div className="section">
            <h3>Admission Procedure Of Online/Distance</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            It is 2 years postgraduate degree that can be done by anyone who completed an undergraduate degree from any recognized college or university. Getting admission is a smooth process just you need to choose a college. Any individual with 55% aggregate marks in bachelor's can apply for it
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

                <br></br>Banking Financial Services, and Insurance-BFSI
              </p>
              <img src={StepA} alt="admin" className="mw-100 mt-5" />
              <img src={StepB} alt="admin" className=" w-100 mt-5" />
            </div>
          </div>

          <div className="section">
            <h3>Course Subjects</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
            It is designed in such a way that you can gain a wholesome idea of the banking and insurance world.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>Principles of Management</li>
                    <li>Managerial Economics</li>
                    <li>Financial Reporting & Analysis </li>
                    <li>Marketing Management           </li>
                    <li>Organizational Behavior</li>
                    <li>Quantitative Techniques for Management</li>
                    <li>Managerial Communications </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li> Human Resource Management</li>
                    <li>Research Methodology for Management </li>
                    <li> Operations Management</li>
                    <li> Accounting Management</li>
                    <li>Corporate Finance   </li>
                    <li>Principles and Practices of Banking</li>
                    <li>International Business</li>
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
                    <li>Operations Research</li>
                    <li>Ethics and Moral Values </li>
                  
                    <li> Bank Marketing </li>
                    <li>Financial Markets and Services </li>
                    <li>Strategic Management</li>
                    <li>Insurance Products and Management</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>
                     E-banking
                    </li>
                    <li>Entrepreneurship & Small Business Management </li>
                    <li> Risk Management in Banks </li>
                    <li> Human Capital in Bank Management </li>
                    <li> International Financial Management</li>
                    <li> Technology in Banking, CRM and Retail Banking</li>
                    {/* <li>-----</li> */}
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
            Doing MBA from a renowned university is impactful from a career perspective. Before you go for admission in online and distance you must be aware of the right place to apply. Consider these points while looking for a college or university.
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
            After completing this course, you can great career in the banking and insurance industry. These industries are growing rapidly with huge demand of trained professionals with proper comprehensive knowledge about the banking and investment world.  You can be a banking assistant, investment guide, mutual funds advisor etc with an Online and Distance MBA in Banking Financial Services, and Insurance-BFSI
            </p>

            {/* <div className="container text-center mt-4">
              <img src={Common} className="img-fluid" alt="Hrm page image" />
            </div> */}
          </div>
          {/* <div className="section">
            <h3>Summing it up</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            One of the most popular courses today is international business management. After completing this course, you will have many exciting career opportunities. Jobs such as manager of suppliers, manager of investment banking, and many more.
            </p>
          </div> */}
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Banking Financial Services, and Insurance-BFSI FAQ</h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
              Can any science graduate pursue an Online and Distance MBA in Banking Financial Services, and Insurance-BFSI?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Yes, graduates with the stream will be eligible for Online and Distance MBA in Banking Financial Services, and Insurance-BFSI even non-commerce students also.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>Do employers recognize a distance MBA?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Yes, degrees earned through distance learning are recognized for employment in positions with both state and federal governments.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>Is an Online and Distance MBA in Banking Financial Services, and Insurance-BFSI equivalent to a regular degree?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Yes, it will be treated the same as a regular degree where one needs to attend classes, only you need to make sure that your university should be approved legally by UGC and other important institutions.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>Is it mandatory to do internship and project work online and Distance MBA in Banking Financial Services, and Insurance-BFSI?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Yes, students need to do internships and project work in the last semester so that they could have practical exposure to upcoming careers.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>Is placement also provided by colleges?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Most colleges tend to provide placements for their students but sometimes you need to find a job by yourself. So make sure you choose the right college.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>What is the maximum duration of the course to be completed?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Although it is a master's level degree of 2 years, you can extend it to 3 years if you miss out on the exams
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
