import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import financial from "../../../assets/images/MBA/financial.png";
import line_h from "../../../assets/images/process/Line.png";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/MBA/Datascience/M1.svg";
import StepB from "../../../assets/images/msc/stepA.png";
import StepA from "../../../assets/images/msc/stepB.png";
import Common from "../../../assets/images/MBA/Healthcare/Career.svg";
import course from "../../../assets/images/MBA/Datascience/M4.svg";
import choose from "../../../assets/images/MBA/choose.svg";
import Accordion from "react-bootstrap/Accordion";


import Content from "../../../assets/images/process/content.png";
import Rankings from "../../../assets/images/process/rankings.png";
import Structure from "../../../assets/images/process/structure.png";
export default function CourseListDesc() {
  return (
    <>
      <Helmet>
      <title>
        Online & Distance MBA In Financial Markets Management colleges in India | Distance Pathshala
        </title>
        <meta
          name="description"
          content="Get the Best Online and Distance MBA in Financial Markets Managementdistance learning colleges/University in India. Distance Pathshala is Best option to advance your career."
        />
        <meta name="keywords" content="MBA In Financial Markets Management  colleges" />
   
      </Helmet>

      {/* <h1>healthcare</h1> */}

      <Searchform />
      <img src={financial} alt="MBA in Financial Markets Management Distance University" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>Why should you choose MBA in Financial markets management?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            MBA in financial markets management program prepares the students key positions in
finance like banks, research and analysis. The course is advantageous for students who wish
to combine work and higher education in several ways. The program enables the students to
be more flexible.
            </p>
          </div>
          <div className="section">
            <h3>Multiple career choices</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Some degrees will let you go for only a few set careers, but with MBA in Financial markets
management, you have many career options. Customers can opt for a career that most suits
their abilities based on specialization. Aspirants can work in the industry based on their
choice, from analysts to bankers. Individuals can also switch industries as the basics of
finance and accounting.
            </p>
          </div>
          <div className="section">
            <h3>High salary and benefits</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            People working in this field are some of the highest-paid professionals. With financial
markets managements, aspirants can land a job that pays high. This course will get you a high
salary and benefits package. Students will also learn how to negotiate for high salaries in this
course. Due to this, aspirants will get a substantial hike from their previous salary.
            </p>
          </div>

          <div className="section">
            <h3>Admission Procedure Of Online/Distance</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            The course enables more flexibility for the students. To apply for this career, students must
hold a bachelors degree or equivalent in any relevant subjects. Candidates at any age are
welcome to take part in the course.
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
                Here is a common procedure to take admission in the distance MBA in <br></br>Financial markets management .
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
            The program offers a semester-based online and distance MBA in Financial Markets with
four 6-month semesters. Many universities that offer online and distance MBA in Financial
markets are accredited and approved by the NAAC and the UGC.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>Principles of Economics & Markets</li>
                    <li>Managerial Effectiveness & Ethics</li>
                    <li>Accounting & Finance</li>
                    <li>
                    Organizational Behavior & Human
Resource Management
                    </li>
                    <li>Quantitative Techniques & Analytics</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Entrepreneurship</li>
                    <li>Marketing Management & Research</li>
                    <li>Financial Markets & Research</li>
                    <li>Secondary Market Operations</li>
                    <li>Equity derivatives</li>
                    {/* <li>Mathematical Foundation for Machine Learning</li> */}
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
                    <li>Technical Analysis</li>
                    <li>Materials Management</li>
                    <li>Fundamental Analysis & Portfolio
Management </li>
                    <li>Commodities & Currency Derivatives</li>
                    <li>Elective</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>Algo Trading and blockchain technology forstock

markets</li>
                    <li> Mutual funds and portfolio construction</li>
                    <li> Financial planning, insurance and wealth

management</li>
                    <li> Marketing and Management of Financial

Services</li>
                    <li> Cross-functional Elective</li>

                    <li>Project</li>
                    <li>.......</li>
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
            Once you decide to pursue MBA in healthcare management, it is essential to choose the right
university.
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
            MBA in Financial market management helps students get managerial positions in the financesector.
When you pursue this course, you are limited to banks since you will get an edge overothers in
getting reputed jobs in financial markets.
            </p>

            <div className="container text-center mt-4">
              <img src={Common} className="img-fluid" alt="Hrm page image" />
            </div>
          </div>
          <div className="section">
            <h3>Conclusion</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            It will be the right choice for the people interested in and capable of working with a variety of
financial abilities for the organizations’ financial success. After completion of this course,
you will get various job opportunities.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Financial markets management FAQ</h1>
          <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
              Is Online MBA in Finance Management and Marketing good?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              MBA in Finance Market Management through Distance Learning has plenty of job opportunities in
areas such as banks, investment and portfolio management firms, accounts departments of companies
etc. MBA in Marketing, on the other hand, provides job prospects in areas such as brand management,
advertising, and sales operations, among others.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
              Which branch of Distance MBA has more scope?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Nowadays, finance, marketing, HR, operations, and entrepreneurship are some of the most sought-
after and the best MBA specializations and are considered safest by many students. However, with

time and especially post COVID, scope in Finance Market management has risen as compared to the
other MBA Specializations.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              Is MBA in finance difficult?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              MBA in Finance is almost similar to any other MBA programmes. However, since there is extra use of
Maths and Statistics, some students may find it tougher than other specializations.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
              Can I do MBA in Finance through Distance Learning if I am weak in maths?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Although it is an added bonus if a candidate has a good academic background in Mathematics, it is not
a necessary requirement for an Online MBA in Finance Market and Management.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>
              Can I get govt job after my Online MBA in finance?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Starting from Banking to Information Technology and to Agriculture sector, MBA is pursued for its
never ending benefits. There are several government jobs as well that can be taken up after
completing a Distance MBA degree.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
