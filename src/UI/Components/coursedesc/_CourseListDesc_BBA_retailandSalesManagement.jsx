import React from "react";
import HRM from "../../../assets/images/BBA/RSM/rsm.svg";
import Common from "../../../assets/images/BBA/admission.svg";
import line_h from "../../../assets/images/process/Line.png";
import Rankings from "../../../assets/images/process/rankings.png";
import Accordion from "react-bootstrap/Accordion";
import Content from "../../../assets/images/process/content.png";
import Structure from "../../../assets/images/process/structure.png";
// import Career_Opportunities from "../../../assets/images/process/Career-Opportunities.png";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";

export default function CourseListDesc() {
  return (
    <>
      <Helmet
        title="Best Online Retail and Sales Management in Distance Learning Colleges/University | Distance Pathshala"
        htmlAttributes={{ lang: "en" }}
        meta={[
          {
            property: "og:description",
            content:
              "Best of Distance BBA in Retail & Sales Management program Distance Learning in India. Find and compare top colleges/universities, subjects, fees, approvals, eligibility, careers, more.",
          },
          {
            property: "og:keywords",
            content: "BBA Retail & Sales Management program Distance Learning",
          },
        ]}
      />
      <Searchform />
      <div className="container mt-3 hrm">
        <div className="row">
          <div className="col-md-4 hrm-img">
            <img src={HRM} className="img-fluid" alt="BBA Retail & Sales Management program Distance Learning" />
          </div>
          <div className="col-md-8 py-4 hrm-text">
            <h3>
              Online & Distance BBA in <span>Retail and Sales Management </span>
            </h3>

            <p>
              Students pursuing an online BBA in retail and sales management are
              prepared for management jobs in the retail industry. Management,
              merchandising, and marketing are among the topics covered in this
              program. A portion of the curriculum is devoted to finance and
              retail sales. It is a three-year undergraduate program that
              includes various fields of study.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>Why should you choose BBA in Retail and Sales Management?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="BBA Retail & Sales Management program Distance Learning" />
            </span>
            <p>
              The BBA in retail and sales management emphasizes client
              satisfaction and the value of marketing. It also provides a solid
              foundation in accounting and customer service. A BBA in retail and
              sales management graduate can find various career opportunities in
              the retail sector and be extremely competitive. Numerous job
              opportunities are available for those with a degree in this
              profession. However, before pursuing this career, find the right
              program that fits your interests and strengths.
            </p>
          </div>
          <div className="section">
            <h3>Explore advanced career opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="BBA Retail & Sales Management program Distance Learning" />
            </span>
            <p>
              The future application of BBA in retail and sales management is
              vast and diverse. The industry is always evolving and is expected
              to expand in the coming years. The BBA in retail and sales
              management program establishes a solid foundation for career
              success. Among its many aspects are economics, marketing, and
              sales. Furthermore, students pursuing a BBA in this ground will be
              well-prepared to face the challenges of any retail sector
            </p>
          </div>
          <div className="section">
            <h3>Earn a high salary </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="BBA Retail & Sales Management program Distance Learning" />
            </span>
            <p>
              This degree will teach you skills that will enable you to earn
              more finances. Applicants will eventually be eligible for jobs in
              the retail industry with good salaries. Following completion of
              the course, the student will be able to obtain the highest
              employment level with incredible and intriguing benefits.
            </p>
          </div>
          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="BBA Retail & Sales Management program Distance Learning" />
            </span>
            <p>
              Students are pursuing a BBA in retail and sales management and
              complete three years via an online/distance program. Please review
              the important information before applying for enrollment.
            </p>
            <div className="row mt-4">
              <div className="col-md-4">
                <ul className="stlye-none text-center d-flex">
                  <li className="eligibility">Eligibility</li>
                  <li className="eligibility-nd">10+2 Pass Out</li>
                </ul>
              </div>

              <div className="col-md-4">
                <ul className="stlye-none text-center d-flex">
                  <li className="eligibility">Duration</li>
                  <li className="eligibility-nd">Min 3 – Max 6 years</li>
                </ul>
              </div>

              <div className="col-md-4">
                <ul className=" stlye-none text-center d-flex">
                  <li className="eligibility">Approvals</li>
                  <li className="eligibility-nd">UGC | DEB | NAAC</li>
                </ul>
              </div>
            </div>

            <section className="bg-white mt-5 pt-3">
              <div className="container text-center mt-3">
                <img src={Common} className="img-fluid" alt="BBA Retail & Sales Management program Distance Learning" />
              </div>
            </section>
          </div>

          <div className="section">
            <h3>Course subjects</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="BBA Retail & Sales Management program Distance Learning" />
            </span>

            <p>
              The Online and Distance BBA in retail and sales management
              prepares students for jobs in the retail industry by promoting
              marketing skills. The online BBA in retail and sales management
              program is a three-year program. The online BBA in retail and
              sales management syllabus covers the curriculum.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-4">
                  <p className="Semester-left"> Year 1</p>
                  <ul className="p-0 mt-1">
                    <li>Overview of retailing</li>
                    <li>Retail marketing</li>
                    <li> Retail management perspective</li>
                    <li> Customer service management </li>
                    <li> Internship</li>
                    <li>Viva-voce</li>
                    <li>-----</li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <p className="Semester-right"> Year 2</p>
                  <ul className="p-0 mt-1">
                    <li>Buying merchandizing I</li>
                    <li>Store operations I</li>
                    <li>Human resources</li>
                    <li>Principles of marketing economics</li>
                    <li>Business communication</li>
                    <li> Field study 1</li>
                    <li>----</li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <p className="Semester-right"> Year 3</p>
                  <ul className="p-0 mt-1">
                    <li>Buying merchandizing II</li>
                    <li>Store operations II</li>
                    <li> Visual merchandizing</li>
                    <li> Sales management </li>
                    <li>Customer value management</li>
                    <li>IT application in retail</li>
                    <li>Field study 2</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <h3>How to choose the right university?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="BBA Retail & Sales Management program Distance Learning" />
            </span>
            <p>
              Choosing the best and most relevant university to pursue the BBA
              in retail and sales management is essential. When choosing a
              university, keep the following factors in mind.
            </p>

            <div className="row mt-4">
              <div className="col-md-4">
                <img
                  src={Rankings}
                  className="img-fluid"
                  alt="BBA Retail & Sales Management program Distance Learning"
                />
              </div>
              <div className="col-md-4">
                <img src={Content} className="img-fluid" alt="BBA Retail & Sales Management program Distance Learning" />
              </div>

              <div className="col-md-4">
                <img
                  src={Structure}
                  className="img-fluid"
                  alt="BBA Retail & Sales Management program Distance Learning"
                />
              </div>
            </div>
          </div>
          <div className="section pt-4">
            <h3>Career opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="BBA Retail & Sales Management program Distance Learning" />
            </span>
            <p>
              Students who complete this online and distance BBA in retail and
              sales management program are eligible to apply to various
              companies, private organizations, and government departments.
              Marketing managers, telemarketing, ITES, and e-commerce businesses
              hire experienced retail professionals to run their marketing
              campaigns.
            </p>
          </div>
          <div className="section">
            <h3>Summing it up</h3>
            <p>
              This course is available at a range of universities. Those
              interested in retail and marketing careers should enroll in this
              online and distance BBA program.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Retail and Sales Management FAQ</h1>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>Is it worthwhile to pursue a BBA online?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Yes, an online BBA is worthwhile because it is a UGC-recognized
                program with a degree that is as valuable as a basic one.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>Is BBA retail management a good degree??</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                A BBA degree course in retail management is more beneficial for
                students because it allows them to work with leading brands in
                retail and merchandise at a young age, providing them with the
                domain expertise required to build a reputation in this sector.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
                What are the basic requirements for the online BBA Retail &
                Sales Management program?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                This program requires a 10+2 certificate from a recognized board
                with a minimal level of 50% marks
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>Can I get a job after completing a distance BBA?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Students who complete the Distance BBA course can find
                employment in areas such as Academic Institutions, Education and
                Research Institutes, Banks, Multinational Companies, Educational
                Institutes, Marketing Organizations, Sales, Retail, IT
                Companies, Recruitment, and so on.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>Is it possible to do BBA Retail & Sales online?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Online study is possible for the BBA Retail & Sales Management
                program. The program is offered online by many universities
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
