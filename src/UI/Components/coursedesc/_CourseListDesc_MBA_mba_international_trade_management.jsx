import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import trademanage from "../../../assets/images/MBA/trademanage.png";
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
        Online & Distance MBA In  International Trade Management colleges in India | Distance Pathshala
        </title>
        <meta
          name="description"
          content="Get the Best Online and Distance MBA in  International Trade Management distance learning colleges/University in India. Distance Pathshala is Best option to advance your career."
        />
        <meta name="keywords" content="MBA In  International Trade Management colleges" />
      </Helmet>

      {/* <h1>Finance Management MARKET not</h1> */}

      <Searchform />
      <img src={trademanage} alt="MBA in International Trade Management Distance University" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>Why should you choose this course?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            The online course of MBA in International Trade Management lays multiple opportunities for students. The course is best suited for the individuals who are interested to involve themselves in global trade, exchange of capital, and trying to explore overseas market. Throughout the lessons students will get to learn about the trading concepts related to international market like analyzing global market, multicultural trends, primary laws and strategies of business. This course will introduce students with effective trade development techniques at national as well as international level. The course will help students to learn about basic cross-border trading issues, risk factors, how foreign exchange effects country politically as well as legally. This is one of the best and popular course which is in great demand due to large expansion of trade over world. Students should opt. this course if they want to grow at multinational level through trading.
            </p>
          </div>

          <div className="section">
            <h3>Career opportunities in International Trade Management </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            If students get proper guidance and support of their senior educationalist they can achieve a lot in this field. With the help of complete knowledge, right implementation tools students can definitely secure good position in their international trading career. The course will prepare students and make them suitable for various jobs like business annotator at international level, policy columnist, cargo auditor and many more.
            </p>
          </div>

          <div className="section">
            <h3>Earn a High Salary </h3>
            <p>
            MBA in International Trade Management is one of the on growing course and is in high demand. Many Multinational Companies also known as MNC’s need more professionals in this field. An MBA (International Trade Management) graduate student can earn a good pay range of INR 6,80,000 to INR 24,20,000 per year. On an average individual can earn 10LPA depending upon their work.
            </p>
          </div>
          <div className="section">
            <h3>Eligibility Criteria </h3>
           <li>Bachelor’s degree from a recognized university with 50% or more.</li>
<li>	Few colleges may ask for work experience of 1-2 years.</li>
	<li>There is no entrance exam needed for most of the universities providing MBA in Oil and Gas Management course.</li>

          </div>

          <div className="section">
            <h3>Admission Procedure Of Online/Distance</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The course enables more flexibility for the students. To apply for
              this career, students must hold a bachelor's degree or equivalent
              in any relevant subjects. Candidates at any age are welcome to
              take part in the course.
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
              <p><span className="fw-bold">Note: </span> The average expense of doing MBA in International Trade Management is more than 35k per semester. The course is offered by few universities only.</p>
              <p>
              Here is a common procedure to take admission in the Distance MBA in

              <br></br>International Trade Management
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
            The following are the few major subjects you will get to learn. The MBA in International Trade Management is a course in which students will develop not only trading skills but also behavioral patterns related to risk that usually faced by entrepreneurs.

            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">1st Year</p>
                  <ul className="p-0 mt-1">
                    <li>Theory of trade</li>
                    <li>Trading communication</li>
                    <li>Marketing laws</li>
                    <li>
                    Financial analysis           
                    </li>
                    <li> Decision art</li>
                    <li> Organizational behaviour</li>
                    <li>Strategy management </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">2nd Year</p>
                  <ul className="p-0 mt-1">
                    <li> International marketing and finance</li>
                    <li> Research methods </li>
                    <li> India’s foreign trade and exchange </li>
                    <li> Cross-border business</li>
                    <li> Export-import laws </li>
                    <li> Ethics and risk assessments of trade</li>
                    <li> Project management</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left sam-back">Semester 3</p>
                  <ul className="p-0 mt-1">
                    <li>Business Environment & Strategy</li>
                    <li>Operations Management</li>
                    <li>Technical Analysis</li>
                    <li>Materials Management </li>
                    <li>Fundamental Analysis & Portfolio Management</li>
                    <li>Commodities & Currency Derivatives</li>
                    <li>Elective</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>
                      Algo Trading & blockchain technology for stock markets
                    </li>
                    <li>Mutual funds and portfolio construction</li>
                    <li>Financial planning, insurance & wealth management</li>
                    <li>Marketing and Management of Financial Services</li>
                    <li>Cross-functional Elective</li>
                    <li>Project</li>
                    <li>-----</li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}

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
            One of the most difficult and important part of getting admission is choosing a right university. Please review followings before enrolment-
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
          {/* <div className="section pt-4">
            <h3>Career opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Online and Distance MBA in Oil and Gas Management provides you with ample opportunities and develops individual’s skills. If you want to have a perfect job for yourself with good range of average salary you should definitely choose this course. It will surely help you to score good career growth.
            </p>

            <div className="container text-center mt-4">
              <img src={Common} className="img-fluid" alt="Hrm page image" />
            </div>
          </div> */}
          <div className="section">
            <h3>Conclusion</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            MBA in International Trade Management presents great options that will lead you to secure good position in the international trading world which is full of exploration, risks and development. The course provides a great path to students who want to have in-depth knowledge of international marketing. Students will not regret after choosing this course as their career.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">International Trade Management FAQ</h1>
          <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>What are the top ranking recruiters of MBA in International Trade Management?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              There are few top recruiters like Amazon, Flipkart, SBI life insurance who are at top ranking in recruiting MBA (International Trade Management) professionals.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>Is experience needed for this course?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              No, generally no experience is required. However sometimes universities ask for a preferred experience of 1-2 years. Otherwise no such thing is mandatory for enrolling yourself in this course.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              Is MBA in International Trade Management valuable?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Yes, pursuing MBA in International Trade Management is worth doing only if you really work hard and studied throughout the course.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
              Can I do MBA in International Trade Management?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Yes you can do but only after graduation. It is a course of 2 years in which you will get to know about trading skills at national as well as international level and also their impacts of political and legal life of a country.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
