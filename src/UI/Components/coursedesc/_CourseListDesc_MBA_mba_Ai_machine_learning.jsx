import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import artificial_machine from "../../../assets/images/MBA/artificial_machine.png";
import line_h from "../../../assets/images/process/Line.png";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/MBA/Datascience/M1.svg";
import StepB from "../../../assets/images/msc/stepA.png";
import haring_firem from "../../../assets/images/msc/haring_firem.png";
import StepA from "../../../assets/images/msc/stepB.png";
import course from "../../../assets/images/MBA/Leadership/course.svg";
import choose from "../../../assets/images/MBA/choose.svg";
import Common from "../../../assets/images/MBA/Leadership/Career.svg";
import Accordion from "react-bootstrap/Accordion";


import Content from "../../../assets/images/process/content.png";
import Rankings from "../../../assets/images/process/rankings.png";
import Structure from "../../../assets/images/process/structure.png";
export default function CourseListDesc() {
  return (
    <>
      <Helmet>
      <title>
        Online & Distance MBA In Artificial Intelligence and Machine
              Learning colleges in India | Distance Pathshala
        </title>
        <meta
          name="description"
          content="Get the Best Online and Distance MBA in Artificial Intelligence and Machine
              Learning distance learning colleges/University in India. Distance Pathshala is Best option to advance your career."
        />
        <meta name="keywords" content="MBA In Artificial Intelligence and Machine
              Learning colleges" />
      </Helmet>
      <Searchform />
      <img src={artificial_machine} alt="MBA In Artificial Intelligence and Machine
              Learning colleges" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>Why should you choose this course?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The online course of MBA in Artificial Intelligence and Machine
              Learning lays numerous opportunities for students. The course is
              best suited for the individuals who are willing to build their
              future in artificial intelligence. The course is designed in such
              a way that throughout the lessons students will get to learn about
              the different topics associated with machine learning and other
              relevant tools and techniques related to it. This course
              curriculum will introduce students with effective programming
              languages (SAS, R, Python), mathematical skills, data
              visualisation and many more. Students should opt. this course if
              they want to equip all the required technical knowledge as well as
              wish to grow in technical world. This is one of the best and
              popular course which is in great demand due to its growing
              popularity in recent times. Students should opt. this course if
              they really have interest in technology.
            </p>
          </div>

          <div className="section">
            <h3>Eligibility Criteria</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              <li>
                Bachelor’s degree in any discipline from a recognized university
                with at least 50% marks or more.{" "}
              </li>
              <li>
                It will be good if you have bachelor’s degree in intelligence.{" "}
              </li>
              <li>
                {" "}
                Generally no entrance exam is required in online MBA in AI and
                ML.{" "}
              </li>
            </p>
          </div>

          {/* <div className="section">
            <h3>Opportunity to Learn Strategic Thinking</h3>
            <p>
              MBA in digital marketing course allows you to learn strategic
              thinking. In this course, strategic thinking skills can be
              imparted to the students. Strategic thinking is necessary to make
              good decisions in a business environment.
            </p>
          </div> */}

          <div className="section">
            {/* <h3>Admission Procedure Of Online/Distance</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The minimum duration of the EMBA in Leadership and strategy course
              is 15 months and divided into 5 terms. Candidates with a
              bachelor’s degree and at least two years of work experience can
              apply for this programme. There is no age limit for applying for
              this course.
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
                <span className="fw-bold"> Note:</span> The average course fee
                of doing MBA in Artificial Intelligence and Machine Learning
                ranges between 1 Lac to 2 Lac. The fee structure of course is
                offered differently by private institutes and government one.
                Also, online mode of learning is helpful to those students who
                cannot afford a full-time course due to its huge expenses.{" "}
              </p>
              <p>
                Here is a common procedure to take admission in the Distance MBA
                in Sc in Artificial <br></br>Artificial Intelligence and Machine
                Learning
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
              The following are the few major subjects you will get to learn in
              this MBA in Artificial Intelligence and Machine Learning
              programme. It is a course in which students will develop not only
              machine management skills but also enter in a technical world
              which enable candidates to achieve a creative career.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>Business Communication</li>
                    <li>Management Accounting</li>
                    <li>Organizational Behaviour </li>
                    <li>Human Resource Development</li>
                    <li> Marketing Strategies</li>
                    <li>Research Methodology</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Basic AI and ML </li>
                    <li>Programming Languages </li>
                    <li>Statistics </li>
                    <li>Business Intelligence </li>
                    <li>Data Analytics and Visualisation </li>
                    <li>Projects </li>
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
                    <li> Art of Leadership</li>
                    <li>International Management: Culture</li>
                    <li>Learning and Development</li>
                    <li>Managing Organization Change</li>
                    <li>Organization Theory Structure & Design</li>
                    <li>Performance Management Strategy</li>
                    <li> Strategic HRM: Gaining a Competitive Advantage</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>Consumer Marketing</li>
                    <li>
                      Search Engine Optimization & Search Engine Marketing
                    </li>
                    <li>Integrated Marketing Communications</li>
                    <li> Mobile & Email Marketing</li>
                    <li>Marketing in a digital world</li>

                    <li>-----</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-12">
                  <p className="Semester-left sam-back">Semester 5</p>
                  <ul className="p-0 mt-1">
                    <li> Capstone Project</li>
                    <li>
                      {" "}
                      Marketing, web, & Social Media Analytics (Elective)
                    </li>
                    <li>Fraud & Risk Analytics(Elective)</li>
                    <li>Supply Chain & Logistics Analytics (Elective)</li>
                    <li>HR Analytics (Elective)</li>
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

          <div className="section pt-4">
            <h3>Career advancements in International Marketing</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Online and distance learning in Artificial Intelligence and
              Machine Learning Management offers great career opportunities in
              private as well as government companies. It is one of the most
              opted courses in the upcoming IT sector. For students who are MBA
              (AI and ML) graduates there are ample career advancements in
              different areas like-
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
            <p className="mt-2">
              {" "}
              Under proper guidance and complete support of senior
              educationalist, students can do better in this field in the
              upcoming years and will secure good position in the companies with
              a good pay range.
            </p>
          </div>
          <div className="section pt-4">
            <h3>Top Hiring Firms </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <div className="container text-center mt-4">
              <img
                src={haring_firem}
                className="img-fluid"
                alt="Hrm page image"
              />
            </div>
          </div>
          <div className="section pt-4">
            <h3>Earn High Salary </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              MBA in Artificial Intelligence and Machine Learning Management is
              going to be one of the fantastic course to pursue. An MBA
              (Artificial Intelligence and Machine Learning) graduate student
              can earn a good pay range. Entry-level salary starts from more
              than 7,00,000 per year. On an average individual can earn 8-10LPA
              depending upon their work. And in fact, most experienced workers
              sometimes make upto 20 Lac Per year.
            </p>
          </div>
          <div className="section">
            <h3>How to choose the right university?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              One of the most difficult and important part of getting admission
              is choosing a right university. Please review followings before
              enrolment-
            </p>

            <div className="row mt-4">
              <span className="m-0 p-0">
                <img src={choose} className="img-fluid" alt="Hrm page image" />
              </span>
            </div>
          </div>

          <div className="section">
            <h3>Conclusion</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              MBA in Artificial Intelligence and Machine Learning Management
              presents great options that will lead you to secure good position
              in companies based on computer science and IT at multinational
              level. This management programme is full of technology, data
              analytics and simulation management. Students will not regret
              after choosing this course as their career.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">
            Artificial Intelligence and Machine Learning FAQ
          </h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
                Can I do MBA in Artificial Intelligence and Machine Learning?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Yes you can do, but only after graduation. It is a course of 2
                years in which you will get to know about technical strategies
                and machine programming languages.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
                Is MBA in Artificial Intelligence and Machine Learning valuable?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Yes, pursuing MBA in Artificial Intelligence and Machine
                Learning is worth doing only if you really work hard and studied
                throughout the course.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
                Is online and regular learning of MBA in AI and ML is of equal
                value?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                There is no difference between them. As a matter of fact online
                mode of learning is more preferable due its affordability by
                students.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
