import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Hosptality from "../../../assets/images/MBA/Hosptality.png";
import line_h from "../../../assets/images/process/Line.png";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/MBA/Datascience/M1.svg";
import StepB from "../../../assets/images/msc/stepA.png";
import StepA from "../../../assets/images/msc/stepB.png";
import course from "../../../assets/images/MBA/Datascience/M4.svg";
import choose from "../../../assets/images/MBA/choose.svg";
import Common from "../../../assets/images/MBA/FinancialMarkets/Career.svg";
import Accordion from "react-bootstrap/Accordion";
import Content from "../../../assets/images/process/content.png";
import Rankings from "../../../assets/images/process/rankings.png";
import Structure from "../../../assets/images/process/structure.png";

export default function CourseListDesc() {
  return (
    <>
      <Helmet>
      <title>
        Online & Distance MBA In Hospitality Management colleges in India | Distance Pathshala
        </title>
        <meta
          name="description"
          content="Get the Best Online and Distance MBA in Hospitality Management distance learning colleges/University in India. Distance Pathshala is Best option to advance your career."
        />
        <meta name="keywords" content="MBA In Hospitality Management  colleges" />
      </Helmet>

      {/* <h1>international finance not</h1> */}

      <Searchform />
      <img src={Hosptality} alt="hr Management" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>Why should you choose MBA in Hospitality Management?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Online MBA in Hospitality Management provides lessons through digital means and it
              helps students who are unable to afford full-time MBA course due to its high toll.
              It is of equal value to a regular one if obtained from a well-recognized institute.
              Throughout the lessons, students will study latest and specialized strategies,
              and will develop a thorough understanding of the various domains of this field.
              The biggest achievement of this management course is that it provides individuals with flexible study alternatives.
              The course will provide ample of opportunities to secure high positions with good salary amount in top companies.
            </p>
          </div>

          {/* <div className="section">
            <h3>Multiple Career Choices </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Some degrees will let you go for only a few set careers, but with
              MBA in Financial markets management, you have many career options.
              Customers can opt for a career that most suits their abilities
              based on specialization. Aspirants can work in the industry based
              on their choice, from analysts to bankers. Individuals can also
              switch industries as the basics of finance and accounting.
            </p>
          </div> */}

          {/* <div className="section">
            <h3>High Salary and Benefits</h3>
            <p>
              MBA in strategic human resource management course opens the door,
              People working in this field are some of the highest-paid
              professionals. With financial markets managements, aspirants can
              land a job that pays high. This course will get you a high salary
              and benefits package. Students will also learn how to negotiate
              for high salaries in this course. Due to this, aspirants will get
              a substantial hike from their previous salary.
            </p>
          </div> */}

          <div className="section">
            {/* <h3>Admission Procedure Of Online/Distance</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span> */}
            {/* <p>
              The course enables more flexibility for the students. To apply for
              this career, students must hold a bachelor's degree or equivalent
              in any relevant subjects. Candidates at any age are welcome to
              take part in the course.
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

                Here is a common procedure to take admission in the Distance MBA in <br></br> Hospitality Management
              </p>
              <img src={StepA} alt="admin" className="mw-100 mt-5" />
              <img src={StepB} alt="admin" className=" w-100 mt-5" />
            </div>
          </div>

          <div className="section">
            <h3>Earn a High Salary </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              In India, the average pay year differs from INR 1,50,000 to INR 20,00,000. Students after completing this course can easily grasp a perfect job with high pay for themselves.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="section">
              <h3>Career Options With Average Salary </h3>
              <span className="m-0 p-0">
                <img src={line_h} className="img-fluid" alt="Hrm page image" />
              </span>

            </div>
            <div className="container p-0">

              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left text-center">Jobs</p>
                  <ul className="p-0 mt-1">
                    <li> Travel Manager</li>
                    <li>  Front Office Manager</li>
                    <li> Culinary Artist</li>
                    <li>
                       Hotel Manager
                    </li>
                    <li>  Lodging Manager</li>
                    <li> Event Manager</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right text-center">Average Salary</p>
                  <ul className="p-0 mt-1">
                    <li>INR 7,00,000 </li>
                    <li>INR 6,50,000</li>
                    <li>INR 6,00,000</li>
                    <li>INR 5,00,000</li>
                    <li>INR 4,50,000</li>
                    <li>INR 4,00,000</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="section">
              <h3>Course Subjects </h3>
              <span className="m-0 p-0">
                <img src={line_h} className="img-fluid" alt="Hrm page image" />
              </span>
              <p>Online MBA Hospitality management deals with communication skills, personality development, practicals, hospitality law, etc. it develops person’s analytical thinking and abilities.</p>
            </div>
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left sam-back">First Year</p>
                  <ul className="p-0 mt-1">
                    <li> Organizational Behaviour</li>
                    <li> Organizational Behaviour</li>
                    <li> Communication Skills</li>
                    <li> Accommodation Management</li>
                    <li> Event Management</li>
                    <li> Principles of Practices and Management</li>
                    <li> Food Science and Dietetics Management</li>
                    <li> Practicals</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Second Year</p>
                  <ul className="p-0 mt-1">
                    <li>
                       Tourism Issues and Strategies
                    </li>
                    <li> Hospitality Law</li>
                    <li> Workshop on Executive Communication</li>
                    <li> Marketing management</li>
                    <li> Event Marketing Concepts</li>
                    <li> Hospitality Marketing and Sales</li>

                    <li>    Projects</li>
                    <li>-----</li>
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
              <p>One of the most difficult and important part of getting admission is choosing a right university. Please review followings before enrolment-</p>
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
              MBA in Financial market management helps students get managerial
              positions in the fiancé sector. When you pursue this course, you
              are limited to banks since you will get an edge over others in
              getting reputed jobs in financial markets. Here are some career
              opportunities that you can refer to after completing this course.
            </p>

            <div className="container text-center mt-4">
              <img src={Common} className="img-fluid" alt="Hrm page image" />
            </div>
          </div> */}
          <div className="section">
            <h3>Summing it up</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Online MBA Hospitality Management provides you with ample of opportunities and develops individual’s skills. If you want to have a perfect job for yourself just after graduation you can choose this course.
            </p>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="text-center">
          <h1 className="Accordi">Hospitality Management FAQ</h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>Is MBA good for future?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>This course has a wide range of opportunities and a good future scope. This is a suitable career for students who want to develop themselves in good field.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>What 2 trends are there currently in the hospitality industry?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>• Local and voice search</p>
              <p>• Virtual tours to sell hospitality products.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
                What makes the hospitality management unique?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>It is unique in terms of its techniques, concepts, and organization</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
                What is the hospitality industry today?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Resorts, casinos, cruise, tourism, entertainment, hotels, etc. are growing at a good pace nowadays. It is not only important for business but also to employees.
              </p>
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
      </div>
      {/* <div className="container mt-2">
        <div className="text-center">
          <p className="text-dark mb-2">By clicking, you agree to our Privacy Policy, & Our Trust </p>

          <p>Distance Pathshala's mission is to provide accurate information and comparative assistance on universities and academic programs. The Distance Pathshala Site's content, which includes the words, graphics, photos, blogs, videos, university logos, and other items within (collectively, "Content"), is solely for informational purposes. The content is not meant to be a replacement for its Academia Partner's products in any way. It is not intended or intentional to infringe on intellectual property rights or related rights. Only general informational purposes are served by the information provided by Distance Pathshala on www.distancepathshala.com or any of its mobile or other applications. All content on the website and in our mobile application is accurate and presented in good faith.</p>
        </div>

      </div> */}
    </>
  );
}
