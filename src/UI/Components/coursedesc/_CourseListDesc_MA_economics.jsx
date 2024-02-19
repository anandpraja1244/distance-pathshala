import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Economics from "../../../assets/images/MA/Economics.png";
import line_h from "../../../assets/images/process/Line.png";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/MBA/Datascience/M1.svg";
import StepB from "../../../assets/images/msc/stepA.png";
import StepA from "../../../assets/images/msc/stepB.png";
import course from "../../../assets/images/MBA/HR/course.svg";
import choose from "../../../assets/images/MBA/choose.svg";
import Common from "../../../assets/images/MBA/HR/Career.svg";
import Accordion from "react-bootstrap/Accordion";
export default function CourseListDesc() {
  return (
    <>
      <Helmet>
        <title>
          Online & Distance MBA In HR Management colleges in India | Distance
          Pathshala
        </title>
        <meta
          name="description"
          content="Get the Best Online and Distance MBA in HR Management distance learning colleges/University in India. Distance Pathshala is Best option to advance your career."
        />
        <meta name="keywords" content="MBA In HR Management  colleges" />
      </Helmet>

      {/* <h1>Stragic HR</h1> */}

      <Searchform />
      <img src={Economics} alt="hr Management" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>Why should you choose MA in economics?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              This course prepares the aspirants to understand the utilization
              of resources sector of the economy like banks, insurance and a lot
              more. M.com in economics gives you a better understanding of
              things around you. The program can also help in maximizing your
              personal economic situation by affecting the decision you make
              daily.
            </p>
          </div>

          <div className="section">
            <h3>Job prospects </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              With the degree, online and distance in MBA in HR Management you
              will be there to the firm to right and productive workforce which
              can help it to grow in the competitive world. You can apply for
              the post of HR manager, talent acquisition manager, etc
            </p>
          </div>

          <div className="section">
            <h3>You can be the better decision-maker </h3>
            <p>
              By pursuing this course, you can be better decision making in both
              your personal and professional life. MA in Economics is the study
              of how to assess alternatives and make better choices. The study
              can offer you a strong background to rely on to make decisions.
            </p>
          </div>

          <div className="section">
            {/* <h3>Admission Procedure Of Online/Distance</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              It is 2 years postgraduate degree that can be done by anyone who
              completed an undergraduate degree from any recognized college or
              university. Getting admission is a smooth process just you need to
              choose a college. Individuals with 55% aggregate marks in
              bachelor's can apply for it.
            </p> */}
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
                Here is a common procedure to take admission in the distance MA
                in
                <br></br> economics.
              </p>
              <img src={StepA} alt="admin" className="mw-100 mt-5" />
              <img src={StepB} alt="admin" className=" w-100 mt-5" />
            </div>
          </div>

          <div className="section">
            <h3>Course subject</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              This comprehensive program offers you in-depth knowledge of
              concepts like Microeconomics, welfare economics and a lot more. MA
              in Economics is a 4 semester, 2-year program that has detailed
              information on economics in society.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li> Microeconomics</li>
                    <li>Macroeconomics</li>
                    <li>Mathematics For Economics </li>
                    <li>Indian Economy</li>
                    <li>Economics Of Growth & Development</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                 <li> Welfare Economics</li>
<li>Monetary Economics</li>
<li>Statistics For Economics</li>
<li>Public Economics</li>
<li>Indian Public Finance</li>
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
           <li>       International Economics</li>
<li>Industrial Economics</li>
<li>Research Methodology </li>
<li>Econometrics</li>
<li>Economics of Infrastructure </li>
<li>Open Elective Course</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
               <li>   Urban Economics</li>
<li>Environmental Economics</li>
<li>Financial Institutions and Markets</li>
<li>Health Economics </li>
<li>Cross-Functional Elective Course</li>
<li>Project</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="section">
            <h3>Other Online/distance MBA course specializations </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
          </div>
          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <span className="m-0 p-0">
                  <img
                    src={course}
                    className="img-fluid"
                    alt="Hrm page image"
                  />
                </span>
              </div>
            </div>
          </div> */}

          <div className="section">
            <h3>How to choose the right university?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Once you decide to pursue MA in Economics, it is essential to choose the right university. The
following points are essential in selecting the right university.
            </p>

            <div className="row mt-4">
              <span className="m-0 p-0">
                <img src={choose} className="img-fluid" alt="Hrm page image" />
              </span>
            </div>
          </div>
          <div className="section pt-4">
            <h3>Career Opportunities </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Candidates can also do some internships or jobs to gain real-world knowledge. After completion
of this course, candidates will have various career opportunities. Students can apply for the
below-mentioned position after completing their degree.
            </p>
           {/* <li>Economist</li>
<li>  Editor - Business, Finance, and Economics </li>
<li>  Market Research Analyst </li>
<li>  Credit Analyst</li>
<li>  Banker</li>
<li>  Statistician </li>
<li>  Financial Analyst </li>
<li>  Data Analyst </li>
<li>  Economics Teacher</li>
<li>  Sales Executive</li>
<li>  Investment Administrator</li> */}

            <div className="container text-center mt-4">
              <img src={Common} className="img-fluid" alt="Hrm page image" />
            </div>
          </div>
          {/* <div className="section">
            <h3>Summing it up</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The aspirants can even get the high package as the minimum salary
              in this field. Before choosing the course, you have to choose the
              right university to step up in your career. Based on your
              convenience, you can choose the mode of learning.
            </p>
          </div> */}
        </div>
      </div>
      {/* <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">HR Management FAQ</h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
                Can any science graduate pursue an Online and Distance MBA in HR
                Management?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Yes, graduates with the stream will be eligible for an Online
                and Distance MBA in MBA General even non-commerce students also.{" "}
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
                {" "}
                Is the CAT score important for taking admission in Online and
                Distance MBA in HR Management?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                May or may not as it totally varies from college to college as
                per their policy but you can read out the course prospectus from
                their official website
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
                What is the average fee for an Online and Distance MBA in HR
                Management?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The average fee for an online and Distance MBA in MBA General
                can lie between 3 lacs to 10lacs
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
                Is pursuing Online and Distance MBA in HR Management worthy for
                the future
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Yes, it is a good decision for those who intend to make a great
                career as Talent and people management
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div> */}
    </>
  );
}
