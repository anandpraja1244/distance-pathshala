import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Finance from "../../../assets/images/B.Com/Finance3.svg";
import line_h from "../../../assets/images/process/Line.png";
import Common from "../../../assets/images/msc/CareerOppor.svg";
import Rankings from "../../../assets/images/process/rankings.png";
import Commons from "../../../assets/images/B.Com/Common.svg";
import Content from "../../../assets/images/process/content.png";
import Structure from "../../../assets/images/process/structure.png";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/msc/10th.svg";
import StepB from "../../../assets/images/msc/stepA.png";
import StepA from "../../../assets/images/msc/stepB.png";
import power from '../../../assets/images/mTech/power.png';
import linepg from "../../../assets/images/msc/Linepg.png";
import Accordion from "react-bootstrap/Accordion";
export default function CourseListDesc() {
  return (
    <>
      <Helmet>
        <title>
        M.Tech in
              Electrical Power System | Distance Pathshala
        </title>
        <meta
          name="description"
          content="M.Tech in
          Electrical Power System degree online and distance by Distance Pathshala, The course curriculum includes programming languages"
        />
        <meta
          name="keywords"
          content="  Electrical Power System"
        />
      </Helmet>
      <Searchform />
      <img src={power} alt="  M.Tech in
              Electrical Power System " className="w-100" /> 

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>Why should you choose this course?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              A constant rise in the popularity and demand of M.Tech in
              Electrical Power System can be seen in recent times. This course
              is a best-fit for all those professionals who are working and want
              to enhance their skills in research and technical fields of power
              electronics management. The online course helps students to study
              part-time with e-learning and can also work side-by-side to gain
              experience. The best thing about studying online is that it
              provides students with flexible study hours and e-content.
              Therefore, if you are interested in power electronics and other
              related tools you better do online M.Tech in Electrical Power
              System.
            </p>
          </div>
          {/* <div className="section">
            <h3>Explore Advanced Career Opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Students have numerous career opportunities after completing this course. The course can help mould the career of the graduates with top companies looking out for these professionals. Students who possess core knowledge of Artificial Intelligence and machine learning are guaranteed to benefit greatly with lucrative career setting jobs such as Machine Learning Engineer, Robotics engineer, Computer Vision Engineer, and Data Scientist awaiting them after graduation. 
            </p>
          </div> */}
          {/* <div className="section">
            <h3>This course helps you make a good living</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              It is one of the fastest-growing technologies in the job market.
              Nowadays, these courses are in high demand and the average annual
              wage for an entry-level AI engineer will be high. AI and Machine
              learning engineer salaries will be considerably greater than the
              average salary for any other engineering graduate.
            </p>
          </div> */}
          <div className="section">
            <h3>Earn a High Salary</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              M.Tech in Electrical Power System is going to be one of the
              fantastic course to pursue. An M.Tech in Electrical Power System
              graduate student can earn a good pay range. Entry-level salary
              starts from more than 4,00,000 per year. On an average individual
              can earn 8-10LPA depending upon their posts. And in fact, most
              experienced workers sometimes make up to 15 Lac Per year.
            </p>
          </div>

          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              To be able to get admitted successfully to any university,
              students are required to follow the admission procedures and
              execute the following procedures carefully.
            </p>
            <img src={AdmissionProcedure} alt="admin" className="w-100 mt-5" />

            <img src={elegibilty} alt="admin" className="w-100 mt-5" />
            <div className="container py-3 text-center">
              <p>
                Here is a common procedure to take admission in the distance  M.Tech in <br></br> Electrical Power System
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
              For 2 years, students will study and learn various relevant
              subjects of the course. Each semester will consist of distinct
              subjects. Some of the subjects the students will study are listed
              below:
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>Graph Theory and Combinatorics</li>
                    <li> Advanced Database Management Systems</li>
                    <li>Advanced Software Engineering Principles</li>
                    <li>Professional Communication</li>
                    <li>Core Java</li>
                    <li>.....</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li> Network Security and Cryptography</li>
                    <li>
                      Cognitive Analytics and Social Skills for Professionals
                    </li>
                    <li> Blockchain Technology and Management</li>
                    <li>
                      {" "}
                      Introduction to Ethereum, Enterprise Blockchain
                      Applications and Hyperledger
                    </li>
                    <li> Data Structures and Algorithm Design</li>
                    <li> Research Methodology</li>
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
              One of the most difficult and important part of getting admission
              is choosing a right university. Please review followings before
              enrolment-
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
            <h3>Course Fee Structure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Students are required to pay a requisite amount of admission fee
              to pursue the course. Fees may vary according to university or
              more of education. However, the average fee for an online MCA in
              Machine Learning and Artificial Intelligence is 5,000-3,00,000 L.
            </p>

            <div className="container text-center mt-4">
              <img src={Common} className="img-fluid" alt="Hrm page image" />
            </div>
          </div>
          <div className="section pt-4">
            <h3>Career opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Students pursuing this degree have a wide range of opportunities
              awaiting them. They can bag jobs of high salary and give their
              career a good boost. Data Scientist, Research Scientist, AI
              Engineer, Business Intelligence Developer, Robotics Scientist, and
              AI Data Analyst are just a handful of examples of the numerous top
              jobs available for students. The students can work in top Machine
              Learning and Artificial Intelligence companies such as Wipro, IBM,
              Accenture, Infosys, TCS etc., and earn a fortune in their salary.
              This course is a great option to kick-start your career.
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
              M.Tech in Electrical Power System presents great options that will
              lead you to secure good position in companies based on electrical
              power industry at national as well as international level. This
              programme is full of technology and material designs. Students
              will not regret after choosing this course as their career.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Frequently Asked Questions (FAQ’s)</h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
                What are the top ranking recruiters of M.Tech in Electrical
                Power System?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                {" "}
                The following are the top hiring firms for M.Tech in Electrical
                Power System –
              </p>
              <p>i. BHEL</p>
              <p>ii. BSNL</p>
              <p> iii. Amazon</p>
              <p> iv. Microsoft</p>
              <p> v. Abode</p>
              <p>vi. Jaguar</p>
              <p>vii. Indian Oil</p>
              <p> viii. Indian railways</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
                Is online learning of M.Tech in Electrical Power System
                valuable?{" "}
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Yes, pursuing M.Tech in Electrical Power System is worth doing
                only if you really work hard and studied throughout the course.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
                How mIs online and regular learning of M.Tech in Electrical
                Power System is of equal value?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                There is no difference between them. As a matter of fact online
                mode of learning is more preferable due its affordability by
                students. And also, students can also work side-by-side while
                doing online M.Tech.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
