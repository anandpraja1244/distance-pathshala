import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Mr_management from "../../../assets/images/MSC(PG)/M.svg";
import line_h from "../../../assets/images/process/Line.png";
import Common from "../../../assets/images/mSC1/msc/M/Career.svg";
import choose from "../../../assets/images/mSC1/msc/M/choose.svg";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/msc/10th.svg";
import StepB from "../../../assets/images/msc/stepA.png";
import StepA from "../../../assets/images/msc/stepB.png";
import Accordion from "react-bootstrap/Accordion";
export default function CourseListDesc() {
  return (
    <>
      <Helmet>
        <title>
          M.Sc Mathematics in distance education in India - Distance Pathshala
        </title>
        <meta
          name="description"
          content="M.sc Mathematics Masters Degree Distance Education learning Admission – Join the best Master of Mathematics through Distance Pathshala."
        />
        <meta name="keywords" content="MSC Mathematics Distance Education" />
      </Helmet>
      <Searchform />

      <img src={Mr_management} alt="hr Management" className="w-100" />
      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>
              Why should you choose online and distance? MSc in business
              analytics?
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              If you are passionate about analyzing statistics of the business
              world and have an innovative mindset to bring out the idea to
              ensure success by dealing with all obstacles hindering growth.
              This is a precise course to help you to step into a business
              regime with a data-driven approach which is a significant factor
              in influencing business.
            </p>
          </div>

          <div className="section">
            <h3>Explore advanced career opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              With this degree of online and distance MSc in business analytics,
              you can be a great advisor who has a keen eye on business
              operations and performance. with statistical interpretations drive
              business activities on the road to attainable success. Online and
              distance MSc in business analytics is the fastest growing career
              with numerous opportunities.
            </p>
          </div>
          <div className="section">
            <h3>Earn a high salary</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              With tremendous analysis power, you can earn a handsome salary
              with constant career growth. It demands very creative, scientific
              observation of factors that hinder the company&#39;s evolution.
              Your average starting salary could be 5 lacs to 7 Lac per annum
              once you are done with online and distance MSc in business
              analytics.
            </p>
          </div>

          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              It is 2 years postgraduate degree that can be done by anyone who
              completed an undergraduate degree in science stream from any
              recognized college or university. Getting admission is a smooth
              process just you need to choose a college. Any individual with 55%
              aggregate marks in bachelor&#39;s can apply for it.
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
                Here is a common procedure to take admission in the distance MSc
                in <br />
                business analytics admission
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
              The online and distance MSc in business analytics is designed
              efficiently so that you can learn about all possible areas of
              business data analytics such as business programs, data
              interpretations, projects, and database management which help you
              to keep the record of data and use it for the goodness of
              business.
            </p>
          </div>
          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>Financial Reporting & Statement Analysis</li>
                    <li>Business Statistics</li>
                    <li>Managerial Economics</li>
                    <li>Programming with R & Python</li>
                    <li>Database Management</li>
                    <li>.....</li>
                    {/* <li>Practical-III: Physical Chemistry</li>
                    <li>Subject other than the course</li> */}
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Business Econometrics</li>
                    <li>Financial Management</li>
                    <li>Applied Multivariate Data Analysis</li>
                    <li>Data Visualisation</li>
                    <li>Design and Analysis of Experiments</li>
                    <li>Mini Project</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 3</p>
                  <ul className="p-0 mt-1">
                    <li>Time Series Analysis</li>
                    <li>Machine Learning Methods</li>
                    <li>Deep Learning and Text Mining</li>
                    <li>Project Management</li>
                    <li>Big Data Analytics</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>Marketing Analytics</li>

                    <li>Digital and Web Analytics</li>
                    <li>Financial Assets Valuation</li>
                    <li>Financial Analytics</li>
                    <li>Capstone Project</li>
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
              First of all, you need to be clear about your goals and decide on
              your field for a master&#39;s degree and choose the institutions
              that offer your chosen specialization. Before you go for admission
              online and distance you must consider these points while looking
              for a college or university
            </p>
            <li> Fee structure</li>
            <li> Ranking or reviews</li>
            <li> Placement</li>
            <li> Admission criteria</li>
            <li> Compare the syllabus</li>
            <li> Study center and training</li>

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
              Online and distance MSc in business analytics offers you the
              diversified knowledge up to industrial requirements, train you for
              handle current trends and challenges in the market. It includes
              financial statistics, project management, market statistics,
              demand graph, etc. After an online and distance MSc in business
              analytics you can confidently apply for various job profiles like
              data scientist, market researcher, and database manager.
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
              Accelerate your career with an online and distance MSc in business
              analytics and stand out from the rat race with the miracle of
              analytical skill. In the technological world upskill yourself to
              match the speed of fast pace changing business scenario.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">
            online and distance MSc in business analytics FAQ
          </h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
                What is the duration of online and distance MSc in business
                analytics?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                This is a 2-year postgraduate degree but you can extend it as
                per the policy of the college.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
                Is this an online and distance MSc in business analytics only
                for science graduates?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                As this is a science-related program sharing some aspects of IT,
                this will be more appropriate for science students but
                eligibility can differ from college to college. In a few
                institutions, this course is open the students who studied
                statistics in their undergraduate courses.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
                What would be the cost of the online and distance MSc in
                business analytics?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>The expected cost can be 2 to 5 Lacs</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
