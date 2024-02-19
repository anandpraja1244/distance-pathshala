import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import strategic_finance from "../../../assets/images/MBA/strategic_finance.png";
import line_h from "../../../assets/images/process/Line.png";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/MBA/Datascience/M1.svg";
import StepB from "../../../assets/images/msc/stepA.png";
import StepA from "../../../assets/images/msc/stepB.png";
import course from "../../../assets/images/MBA/Datascience/M4.svg";
import choose from "../../../assets/images/MBA/choose.svg";
import Common from "../../../assets/images/MBA/System/Career.svg";
import Accordion from "react-bootstrap/Accordion";
export default function CourseListDesc() {
  return (
    <>
      <Helmet>
      <title>
        Online & Distance MBA In Strategic Finance Management colleges in India | Distance Pathshala
        </title>
        <meta
          name="description"
          content="Get the Best Online and Distance MBA in Strategic Finance Management distance learning colleges/University in India. Distance Pathshala is Best option to advance your career."
        />
        <meta name="keywords" content="MBA In Strategic Finance Management colleges" />
      </Helmet>

      {/* <h1>system and operation</h1> */}

      <Searchform />
      <img src={strategic_finance} alt="MBA in Strategic Finance Management Distance University" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>
            Why should you choose this course?
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
          <p>  The online MBA in Strategic Finance Management is specially designed for those students who are working
in the same field side-by-side as it helps in e-learning and also gain experience in the same field
simultaneously. The course is based on modern education system and can be studied by students sitting
anywhere. </p>
<p>This encourage students to do jobs and study at the same time and build up their career. Full
time MBA in Strategic Finance Management and part time MBA in Strategic Finance Management are
similar programme. In fact, online education of MBA in Strategic Finance Management proved to be more
beneficial those students who are willing to have deep knowledge about financial transaction but do want
to leave their ongoing jobs. This course will help them to upgrade their job status.</p>
          </div>
          <div className="section">
            <h3>Eligibility criteria</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <li>Bachelor’s degree from a recognized university with 50% or more.</li>
            <li>It will be good if you have bachelor’s degree in financial management.</li>
            <li>Generally no entrance exam is required in distance education.</li>
          </div>
          <div className="section">
            <h3>Earn high salary</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
<p>Distance Education in MBA is going to be one of the fantastic course to pursue. A Distance Education in
MBA graduate student can earn a good pay range. Entry-level salary starts from more than 5 Lac per year.
On an average individual can earn 7-8 LPA depending upon their posts. For instance, a business consultant
can earn 12 Lac Per Annum. And in fact, most experienced workers sometimes make up to 15 Lac Per year.</p>
          </div>

          <div className="section">
            {/* <h3>Admission Procedure Of Online/Distance</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Candidates who prefer to work in this career can get admission to
              the online MBA in System and Operations Management. In this
              course, you will know and gets to learn how things could work at
              the back level.
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
                Here is a common procedure to take admission in the distance MBA in  <br></br>Strategic Finance Management .
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
            The following are the few major subjects you will get to learn in this online MBA programme. It is a course
in which students will develop not only monetary management skills but also enter in a business world
which enable candidates to achieve a creative career.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>Principles of economics and markets</li>
                    <li>Entrepreneurship</li>
                    <li>Management Accounting</li>
                    <li>Managerial effectiveness and ethics</li>
                    <li>Marketing management and research</li>
                    <li>Organizational behaviour</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Business environment and strategy</li>
                    <li>Advanced economics</li>
                    <li> Operations management</li>
                    <li>International taxation and auditing</li>
                    <li>Business law</li>
                    <li>Strategic financial management</li>
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
                    <li>Information Technologies in SCM </li>
                    <li>Total Quality Management</li>
                    <li>Lean and Six Sigma </li>
                    <li>Elective</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>Data Mining & Visualisation</li>
                    <li>E-business Technologies</li>
                    <li>Strategic Sourcing & Inventory Management </li>
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
              <span className="m-0 p-0">
              <img src={course} className="img-fluid" alt="Hrm page image" />
            </span>
              </div>
            </div>
          </div>

          <div className="section">
            <h3>How to choose the right university?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Once you decide to pursue MBA in system and Operations Management,
              it is essential to choose the right university. The following
              points are essential in selecting the right university.
            </p>

            <div className="row mt-4">
            <span className="m-0 p-0">
              <img src={choose} className="img-fluid" alt="Hrm page image" />
            </span>
            </div>
          </div>
          {/* <div className="section pt-4">
            <h3>Career opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              After completion of this System and operation management program,
              aspirants will get various job opportunities. The course will help
              the individual to prepare to build expert knowledge and skilled
              people to work in the digital world of organizations. Here are
              some positions that aspirants can apply for.
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
            Distance Education in MBA (Finance Management) presents great options that will lead you to secure good
position in companies based on monetary transactions, banks, finance management, etc at national as well
as international level. This programme is all about finance and business. Students will not regret after
choosing this course as their career.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Strategic Finance Management FAQ</h1>
          <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>What are the top ranking recruiters of Distance Education in MBA (Finance Management)?</h5>

            </Accordion.Header>
            <Accordion.Body>
       <p>  The following are the top hiring firms for MBA students-</p>
<p>i. Amazon</p>
<p>ii. EY</p>
<p>iii. JP Morgan</p>
<p>iv. Tata Consultancy Services (TCS)</p>
<p>v. Wells Fargo</p>
<p>vi. Capgemini</p>
<p>vii. Accenture and many more.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>Is online learning of Distance Education in MBA (Strategic Finance Management)?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Some of the job positions are available in this field; operations manager, production analyst, production manager, industrial engineer, inventory manager, purchasing manager, schedule coordinator, quality analyst, and plant manager.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              Is online learning of Distance Education in MBA (Strategic Finance Management)?
            
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Yes, pursuing Distance Education in MBA (Strategic Finance Management) is worth doing only if you really
work hard and studied throughout the course.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
              Is online and regular learning of MBA in Strategic Finance Management of equal value?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              There is no difference between them. As a matter of fact online mode of learning is more preferable due
its affordability by students. And also, students can also work side-by-side while doing online MBA.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>
              Is there any entrance exam for taking admission in MBA (Finance Management)?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              There are exam like CAT, MAT, XAT, etc which need to be qualified by candidates to get admission in MBA
in Strategic Finance Management if asked by university.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
