import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import general_mba from "../../../assets/images/MBA/general_mba.png";
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
        Online & Distance MBA In General Management colleges in India | Distance Pathshala
        </title>
        <meta
          name="description"
          content="Get the Best Online and Distance MBA in General Management distance learning colleges/University in India. Distance Pathshala is Best option to advance your career."
        />
        <meta name="keywords" content="MBA In General Management  colleges" />
      </Helmet>

      {/* <h1>General manage not</h1> */}


      <Searchform />
      <img src={general_mba} alt="MBA in General Management Distance University" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>Why should you choose an Online & Distance MBA in General Management? </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            This course will give you the proper knowledge about all the essentials of management and business. This course gives a fundamental and advanced glimpse of business operations and growth.  It teaches you all fundamentals of running a business and operating it in the best way. By shaping the personality and mindset according to the demands of the market, online and distance MBA in general management will make you ideal for business and management profiles. 
            </p>
          </div>

          <div className="section">
            <h3>Explore Advanced Career Opportunities </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            By covering all the functional areas of business strategies and management, this course enhances problem-solving and risk-managing abilities and gives training in such a way you can be the perfect candidate for multiple job profiles. 
            </p>
          </div>

          <div className="section">
            <h3>Earn a High Salary </h3>
            <p>
            After an online and Distance MBA in General Management, you can earn a high pay scale by becoming, a management consultant, project manager, business analyst, retail and supply manager, or performance management, and many such options will get open for you.
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

            <br></br>General Management.
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
                    <li>Principles of Economics and Markets</li>
                    <li> Managerial Effectiveness & Ethics</li>
                    <li>Accounting & Finance</li>
                    <li>
                    Organizational Behaviour & HRM                        
                    </li>
                    <li>Quantitative Techniques and Analytics</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Entrepreneurship</li>
                    <li>Marketing Management & Research</li>
                    <li>Consumer Behaviour  </li>
                    <li>Talent Acquisition & Management </li>
                    <li>Banking & Financial Services </li>
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
                    <li>Business Environment & Strategy</li>
                    <li>Operations Management</li>
                    <li>Integrated Marketing Communications</li>
                    <li>Employee Reward Management                           </li>
                    <li>Investment Analysis and Portfolio Management  </li>
                    <li>Open Elective </li>
                    {/* <li>Elective</li> */}
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>
                         Retail Marketing & Brand Management            
                    </li>
                    <li>Digital Marketing and Data Analytics</li>
                    <li>Organization Development & Change Management</li>
                    <li>Wealth Management & Behavioural Finance</li>
                    <li>Cross-Functional Elective </li>
                    <li>Project</li>
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
            After completing this course, you can be hired as a brand manager, product manager, training professional and sales manager, etc. You can work in management firms or with start-ups there are many options after this degree.  This course trains you a good general manager, business analyst, and good planner whose planning and management skills can help to grow the business to new heights.
            </p>

            <div className="container text-center mt-4">
              <img src={Common} className="img-fluid" alt="Hrm page image" />
            </div>
          </div>
          <div className="section">
            <h3>Summing  up</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            The Online and Distance MBA in MBA General is a great choice for individuals who are passionate about the whole flow of business and its growth. This course open door to many everlasting high-paying job profiles.  This makes you a wonderful asset to an organization
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">General Management FAQ</h1>
          <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>Can any science graduate pursue an Online and Distance MBA in General Management? </h5>
            </Accordion.Header>
            <Accordion.Body>
         <p>Yes, graduates with the stream will be eligible for Online and Distance MBA in MBA General even non-commerce students also. </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>Is an Online and Distance MBA in General Management equivalent to a regular degree? </h5>
            </Accordion.Header>
            <Accordion.Body>
           <p>Yes, it will be treated the same as a regular degree where one needs to attend classes, only you need to make sure that your university should be approved legally by UGC and other important institutions.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              What jobs can I get after the completion of an online MBA in Strategic HR Management?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              A graduate with an online/distance MBA in operations management is primarily concerned with planning, organizing, and supervising in the context of production, manufacturing and providing services.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
              Is it mandatory to do internship and project work in Online and Distance MBA in General Management? 
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Yes, students need to do internships and project work in the last semester so that they could have practical exposure to upcoming careers. 
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>
              Is placement also provided by colleges? 
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Most colleges tend to provide placements for their students but sometimes you need to find a job by yourself. So make sure you choose the right college.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5" className="mt-2">
            <Accordion.Header>
              <h5>
              What is the maximum duration of the course to be completed?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Although it is a master's level degree of 2 years, you can extend it to 3 years if you miss out on the exams. 
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
