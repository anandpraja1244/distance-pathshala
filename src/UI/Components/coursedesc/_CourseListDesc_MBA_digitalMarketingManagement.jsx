import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import digitalmarket from "../../../assets/images/MBA/digitalmarket.png";
import line_h from "../../../assets/images/process/Line.png";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/MBA/Datascience/M1.svg";
import StepB from "../../../assets/images/msc/stepA.png";
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
        Online & Distance MBA In  Digital Marketing E-Commerce Management colleges in India | Distance Pathshala
        </title>
        <meta
          name="description"
          content="Get the Best Online and Distance MBA in  Digital Marketing E-Commerce Management distance learning colleges/University in India. Distance Pathshala is Best option to advance your career."
        />
        <meta name="keywords" content="MBA In  Digital Marketing E-Commerce Management  colleges"/>
      </Helmet>
      <Searchform />
      <img src={digitalmarket} alt="hr Management" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>Why should you choose Distance MBA in Digital Marketing E-Commerce Management?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Online MBA in Marketing Management provides numerous opportunities to students opting it. The course will provide students with lessons on marketing concepts like sales, promotions, leadership skills, and other management aspects. The course will help individuals to attain high positions in top notch companies like amazon, flipkart, ITC, etc. Throughout the sessions the students will learn the latest and specialised techniques and marketing concepts. The course is in high demand and organisations are in need of skilled professionals.
            </p>
          </div>

          <div className="section">
            <h3>Explore Advanced Career Opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Once they have finished their degree programme, interested candidates can look for outstanding employment opportunities in both the public and private sectors. Graduates are qualified for many positions after completing the programme, including content writers, Google ads managers, SEO specialists, and many more. 
            </p>
          </div>

          <div className="section">
            <h3>Earn a High Salary </h3>
            <p>
            Candidates will eventually be qualified for jobs in the digital world sector. The student can find the highest level of employment after completing the course, with amazing and mesmerizing benefits.
            </p>
          </div>

          <div className="section">
            <h3>Admission Procedure Of Online/Distance</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Students are pursuing a Distance MBA in Digital Marketing E Commerce Management  and will complete the program in two years via an online/distance program. Please read the important information before applying for enrollment.
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

            <br></br>Digital Marketing E Commerce Management.
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
            There are 4 semesters in Online and Distance MBA in Digital Marketing E-Commerce Management. The duration of an Online and Distance MBA in Digital Marketing E-Commerce Management is 2-4 years candidates can check the syllabus given below in table:
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
                    <li>Organizational Behaviour & Human Resource Management</li>
                    <li>Quantitative Techniques & Analytics</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Entrepreneurship</li>
                    <li>Marketing Management & Research</li>
                    <li>Digital Marketing and E-Commerce FundamentalsStrategic Management </li>
                    <li>Inbound Marketing: Content and Search Marketing </li>
                    <li>Outbound Marketing: Digital Ads and Social Media Marketing</li>
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
                    <li>Growth Marketing</li>
                    <li>Brand Management for E-Commerce</li>
                    <li>Elective</li>
                    {/* <li>Performance Management Strategy</li>
                    <li> Strategic HRM: Gaining a Competitive Advantage</li> */}
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>Web & Social Media Analytics</li>
                    <li>
                    Digital Product Management
                    </li>
                    <li>Marketing Analytics</li>
                    <li> Integrated Marketing Strategy</li>
                    <li> Cross-functional elective</li>

                    <li>Project</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="section mt-1" id="Semester">
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



          <div className="section">
            <h3>How to choose the right university?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Remember these important points while choosing the best university for your career. Many universities offer online and Distance MBAs in Digital Marketing and E-Commerce Management, so choose wisely.
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
            Digital marketing and E-Commerce are among the most popular courses nowadays. Many amazing career opportunities are awaiting after completing this course. Jobs like: SEO Specialist, Digital Analyst, Content Writer and many more.
            </p>

            <div className="container text-center mt-4">
              <img src={Common} className="img-fluid" alt="Hrm page image" />
            </div>
          </div>
          <div className="section">
            <h3>Summing up</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Many universities are offering this course. Those interested in careers in the digital world will benefit from this Online and Distance MBA in Digital Marketing E-Commerce Management.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Digital Marketing E-Commerce Management FAQ</h1>
          <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>What are the costs for this online course?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The cost of this online and distance MBA in Digital Marketing E-Commerce Management depends on the type of institution, from private to public.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
              How do I apply for this program/course?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              This MBA programme in digital marketing and e-commerce management is available online and via distance education. Browse all the courses and choose the ones that best suit your interests and abilities.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              Does an MBA in digital marketing make sense?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The average salary for graduates ranges from three lakhs to ten lakhs per year, depending on their knowledge, skills, and expertise, among other factors.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
                Will this degree/ Courses be Beneficial in the Real-world?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Yes, of course, this degree provides a key skill to learn the
                strategies for your business life and teaches you how to be sure
                and strategically forwarded from the rest of the world.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>Which is better: an online MBA or a distance MBA?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The University Grants Commission has approved that both courses have equal value, making them both equal in the eyes of the law as online and distance learning (UGC).
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5" className="mt-2">
            <Accordion.Header>
              <h5>What is the average salary for an MBA in digital marketing?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The salary range for someone with an MBA in digital marketing is between INR 5,000 and INR 25,00,000. Additionally, an MBA in Digital Marketing graduate can expect to earn INR 5,50,000 as their first job salary.
              </p>
            </Accordion.Body>
          </Accordion.Item>
 
        </Accordion>
      </div>
    </>
  );
}
