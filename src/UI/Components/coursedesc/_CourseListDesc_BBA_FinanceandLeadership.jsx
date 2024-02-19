import React from "react";
import HRM from "../../../assets/images/BBA/FL/fl.svg";
import Common from "../../../assets/images/BBA/admission.svg";
import line_h from "../../../assets/images/process/Line.png";
import Rankings from "../../../assets/images/process/rankings.png";
import Content from "../../../assets/images/process/content.png";
import Structure from "../../../assets/images/process/structure.png";
import Accordion from "react-bootstrap/Accordion";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";

export default function CourseListDesc() {
  return (
    <>
      <Helmet
        title="Distance/Correspondence BBA in International Finance Education in India | Distance Pathshala"
        htmlAttributes={{ lang: "en" }}
        meta={[
          {
            property: "og:description",
            content:
              "Advance your career by applying for Online & Distance BBA in International Finance correspondence College/universities in India at Distance Pathshala now!!!",
          },
          {
            property: "og:keywords",
            content: "Online & Distance BBA in International Finance Education LearningDistance BBA Finance and Leadership Education online",
          },
        ]}
      />
      <Searchform />
      <div className="container mt-3 hrm">
        <div className="row">
          <div className="col-md-4 hrm-img">
            <img src={HRM} className="img-fluid" alt="Hrm page image" />
          </div>
          <div className="col-md-8 py-4 hrm-text">
            <h3>
              Online and distance BBA in <span> Finance and Leadership </span>
            </h3>

            <p>
              Online BBA in finance and Leadership is a distance learning course
              for 3 years. It is an Undergraduate Program for students who
              aspire to excel in the field of Accounting and leadership. For 3
              years, students proceed through a total of 6 semesters, each
              semester with their distinctive syllabus that prepares the
              students for the actual world. This programme is designed to
              provide a competitive edge to the students to solve global
              business challenges. The curriculum framework and content of this
              course will facilitate students to conveniently pursue a career in
              management accounting
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>Why should you choose Online BBA Finance and Leadership?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              BBA in Finance and Leadership have flourished over the years. The
              course has employed millions of professionals who have chosen this
              course.
            </p>
            <p>
              The curriculum equips the students to have hands-on case studies,
              analytic thinking, and a comprehensive understanding of the market
              and its scenarios. In addition to that, the availability of
              numerous career opportunities makes it one of the most versatile
              career options.
            </p>
          </div>
          <div className="section">
            <h3>Explore advanced career opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Graduates from this field are experts in Finances, Insurance,
              Accounting, Banking, Fund management etc. which makes them ideal
              candidates for different finance scopes. BBA in finance scope
              allows students to apply for both government and Public Sector
              jobs in the area of finance, accounts and Banking sectors. Jobs
              like Credit Managers, Insurance Managers, Cash Managers, and
              Financial Analysts are a few of the examples the graduates can
              grab after graduation.
            </p>
          </div>
          <div className="section">
            <h3>Earn a high salary </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The financial sector is in a boom and high in demand. A fresh
              graduate may expect to earn around 4.5 Lakhs in India and after
              5-10 years of experience in this very field, they can earn around
              10 Lacs.
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
                <img src={Common} className="img-fluid" alt="Hrm page image" />
              </div>
            </section>
          </div>

          <div className="section">
            <h3>Course subjects</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              For 3 years, students will study and learn various relevant
              subjects. Each semester will consist of distinct subjects. Some of
              the subjects the students will study are listed below
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left"> Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>English</li>
                    <li>Business management</li>
                    <li>Financial Management and Accounting</li>
                    <li> Project Management </li>
                    <li>	 Business Environment and Regulatory Framework</li>
                    <li>	 Quantitative Techniques for Management</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right"> Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Marketing Management</li>
                    <li>Organization Behavior and HRM</li>
                    <li> Sales and Distribution Management</li>
                    <li>Business Finance </li>
                    <li>Introduction to Business Analytics</li>
                    <li>Communicative English</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left sam-back"> Semester 3</p>
                  <ul className="p-0 mt-1">
                    <li>Managerial Economics</li>
                    <li> Supply Chain Management</li>
                    <li>Design Thinking</li>
                    <li> Indian Economy and Policy</li>
                    <li> Environmental Science</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2"> Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>Macroeconomics </li>
                    <li>Financial Markets and Instruments</li>
                    <li>Digital Transformation</li>
                    <li>Competitive Strategy</li>
                    <li>Entrepreneurship</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left"> Semester 5</p>
                  <ul className="p-0 mt-1">
                    <li>Strategic Problem Solving</li>
                    <li> Negotiation</li>
                    <li> Leadership, Strategy and People Management</li>
                    <li>Research Methodology</li>
                    <li> Personal and Managerial Effectiveness</li>
                    <li>----</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back"> Semester 6</p>
                  <ul className="p-0 mt-1">
                    <li>Operations Management</li>
                    <li>Strategic Management</li>
                    <li>Global Strategy</li>
                    <li>Information Systems for Business</li>
                    <li>Ethics and Values</li>
                    <li> Research Project</li>
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
              Choosing the right university helps you be on the right track and
              bring you closer to your goals and ambition. Therefore, choose
              universities wisely and analyse carefully whether the university
              meets all the requirements.
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
            <h3>How to Choose the Right University?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Choosing the right university helps you be on the right track and
              bring you closer to your goals and ambition. Therefore, choose
              universities wisely and analyse carefully whether the university
              meets all the requirements.
            </p>
          </div>
          <div className="section pt-4">
            <h3>Career opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Students pursuing this degree have a wide range of opportunities.
              Both the private and Government sectors vouch and scout for the
              graduates. BBA in Finance and Leadership will open a lot of job
              opportunities for students in the market similarly it will offer
              attractive paychecks which can vary from individual to individual
              based on their experience, skillset, position and productivity.
              With opportunities in abundance and paychecks going off the roof,
              this degree has the potential to set students' careers for good.
            </p>
          </div>
          <div className="section">
            <h3>Summing it up</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Online BBA in Finance and Leadership can help you polish your
              skills and develop you for utilising the skills in the actual
              workplace. Consider all the factors and other important aspects
              while choosing the university you want to study in. Make sure the
              university favours all your terms and conditions.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Finance and Leadership FAQ</h1>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>Is BBA in Finance and Leadership suitable for the future?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                BBA in Finance and leadership is a great option to take on. With
                the financial sector flourishing, graduates can get jobs both in
                the private and government sector with high salary packages.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
                Are there entrance exams for the BBA in Finance and Leadership
                program?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                AIMA UGAT, SET, and IPU CET are among the admission tests
                possible. These are examinations administered by individual
                institutes at the state and national levels. It depends on the
                institute whether an entrance exam is required.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
                How much does the Online BBA in Finance and Leadership cost?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The average cost of an Online BBA in Finance and Leadership
                ranges from 2 lacs- 4 lacs P.A. However, it may vary from
                university to university.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
                What are the career options for graduates of the Online BBA in
                Finance and Leadership program?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Opportunities are abundant for the graduates. Graduates can
                apply for numerous jobs in both the private and government
                finance sectors. Jobs like Credit Managers, Insurance Managers,
                Cash Managers, and Financial Analysts are a few of the examples
                the graduates can grab after graduation.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>
                Are graduates of the Online BBA in Finance and Leadership likely
                to make a good living?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Finance and Leadership graduates earn between 4 Lakhs to 4.5
                Lakhs per annum as their starting salary with the possibility to
                increase with years and experience up to 10 lacs - 22 lacs
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
