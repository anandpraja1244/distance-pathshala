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
import Mechanis from '../../../assets/images/mTech/Mechanis.png';
import linepg from "../../../assets/images/msc/Linepg.png";
import Accordion from "react-bootstrap/Accordion";
export default function CourseListDesc() {
  return (
    <>
      <Helmet>
        <title>
        M.Tech in
              Mechanical Production | Distance Pathshala
        </title>
        <meta
          name="description"
          content=" M.Tech in
          Mechanical Production degree online and distance by Distance Pathshala, The course curriculum includes programming languages"
        />
        <meta
          name="keywords"
          content=" Mechanical Production"
        />
      </Helmet>
      <Searchform />
      <img src={Mechanis} alt="M.Tech in
          Mechanical Production " className="w-100" /> 

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
              Mechanical Production can be seen in recent times. This course is
              a best-fit for all those professionals who are working and want to
              enhance their skills in concepts related to production and testing
              of machinery. The online course helps students to study part-time
              with e-learning and can also work side-by-side to gain experience.
              The best thing about studying online is that it provides students
              with flexible study hours and e-content. Therefore, if you are
              interested in power electronics and other related tools you better
              do online M.Tech in Mechanical Production.
            </p>
          </div>

          <div className="section">
            <h3>Earn a High Salary</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              M.Tech in Mechanical Production is going to be one of the
              fantastic course to pursue. An M.Tech in Electrical Power System
              graduate student can earn a good pay range. Entry-level salary
              starts from more than 1,75,000 per year. On an average individual
              can earn 5-7LPA depending upon their posts. And in fact, most
              experienced workers sometimes make up to 10 Lac Per year.
            </p>
          </div>

          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>Admission procedure includes following steps-</p>
            <img src={AdmissionProcedure} alt="admin" className="w-100 mt-5" />

            <img src={elegibilty} alt="admin" className="w-100 mt-5" />
            <div className="container py-3 text-center">
              <p>
                <span className="fw-bold">Note:</span> The average course fee of
                doing M.Tech in Mechanical Production ranges between INR 50,000
                to INR 100,000. However, the fee structure also depends on the
                university you have opted. The fee structure of course is
                offered differently by private institutes and government one.
                Also, online mode of learning is helpful to those students who
                cannot afford a full-time course due to its huge expenses.
              </p>
              <p>
                Here is a common procedure to take admission in the distance M.Tech in  <br></br>Mechanical Production
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
              this M.Tech in Mechanical Production. It is a course in which
              students will develop not only machine management skills but also
              enter in a production world which enable candidates to achieve a
              creative career.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>Machining processes and analysis</li>
                    <li>CAM</li>
                    <li>Metrology</li>
                    <li>Metal forming analysis</li>
                    <li>Computation methods</li>
                    <li>Experiments</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Material handling</li>
                    <li>Practical workshop</li>
                    <li> Computational methods in CAD</li>
                    <li> Metal forming designs</li>
                    <li>Ergonomics</li>
                    <li>Research workshop and viva</li>
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
                    <li>Cloud Infrastructure and Services</li>
                    <li> Quantitative Aptitude</li>
                    <li> Professional Ethic </li>
                    <li> Seminar (Evaluation)</li>
                    <li>Unix/Linux Programming</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li> Elective Subjects</li>
                    <li>Projects</li>
                    <li>----</li>
                    <li>----</li>
                    <li>----</li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}

          <div className="section pt-4">
            <h3>Career advancement in M.Tech in Mechanical Production</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Online and distance learning in M.Tech in Mechanical Production
              offers great career opportunities in private as well as government
              companies. It is one of the most opted courses in the upcoming
              machinery production sector. For students who are M.Tech in
              Mechanical Production graduates there are ample career
              advancements in different sectors like-
            </p>
            <p> Project manager</p>
            <li> Senior engineer</li>
            <li> Technical writer</li>
            <li> Manufacturing manager</li>
            <li> Mechanical production engineer</li>
            <li> Testing engineer</li>
            <li> Associate professor</li>
            <li> Mechanical engineering technician</li>

            <p>
              {" "}
              Under proper guidance and complete support of senior
              educationalist, students can do better in this field in the
              upcoming years and will secure good position in the companies with
              a good pay range.
            </p>
          </div>
          <div className="section">
            <h3>How to choose the right university?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            One of the most difficult and important part of getting admission is choosing a right university. Please review
followings before enrolment-
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
          {/* <div className="section pt-4">
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
          </div> */}
          <div className="section">
            <h3>Conclusion</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            M.Tech in Mechanical Production presents great options that will lead you to secure good position in companies
based on machine production industry at national as well as international level. This programme is full of technology
and material designs. Students will not regret after choosing this course as their career.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">
          Frequently Asked Questions (FAQ’s)
          </h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
              What are the top ranking recruiters of M.Tech in Mechanical Production?

              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The following are the top hiring firms for M.Tech in Mechanical Production –

              </p>
              <p>i. Aditya Birla Group</p>
<p>ii. Reliance Industries</p>
<p>iii. L amd T</p>
<p>iv. Sterlite Industries and many more</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
              Is online learning of M.Tech in Mechanical Production valuable?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Yes, pursuing M.Tech in Mechanical Production is worth doing only if you really work hard and studied throughout the
course.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              Is online and regular learning of M.Tech in Mechanical Production is of equal value?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              There is no difference between them. As a matter of fact online mode of learning is more preferable due its
affordability by students. And also, students can also work side-by-side while doing online M.Tech.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          {/* <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
                What are the career options for graduates of the Online MCA in
                Machine Learning and Artificial Intelligence program?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Opportunities are abundant for the graduates. Graduates can
                apply for numerous jobs in top companies in India. Top companies
                in India such as Infosys, Infotech, IBM, WIPRO and many more
                await them.
              </p>
            </Accordion.Body>
          </Accordion.Item> */}

         
        </Accordion>
      </div>
    </>
  );
}
