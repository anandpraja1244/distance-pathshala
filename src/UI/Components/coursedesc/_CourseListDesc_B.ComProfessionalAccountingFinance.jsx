import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Finance from "../../../assets/images/B.Com/professional.svg";
import line_h from "../../../assets/images/process/Line.png";
import Common from "../../../assets/images/B.Com/Accounting.svg";
import Commons from "../../../assets/images/B.Com/Common.svg";
import Rankings from "../../../assets/images/process/rankings.png";
import Content from "../../../assets/images/process/content.png";
import Structure from "../../../assets/images/process/structure.png";
import Accordion from "react-bootstrap/Accordion";
export default function CourseListDesc() {
  return (
    <>
      <Helmet>
        <title>
		Online & Distance B.Com in Professional Accounting and Finance Course  | Distane Pathshala
        </title>
        <meta
          name="description"
          content="Want to build your career in Accounting and Finance? Enroll now in a specially designed Professional Accounting and Finance course by Distance Pathshala."
        />
        <meta name="keywords" content="Professional Accounting and Finance Course" />
      </Helmet>
      <Searchform />
      <div className="container mt-3 hrm">
        <div className="row">
          <div className="col-md-4 hrm-img">
            <img src={Finance} className="img-fluid" alt="Finance page image" />
          </div>
          <div className="col-md-8 py-4 hrm-text">
            <h3>
            Online and distance B. Com in professional <span> Accounting and Finance</span>
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Finance page image" />
            </span>
            <p>
            It is a 3-years undergraduate program that helps aspirants in gaining knowledge of 
            finance and accounting concepts like financial accounting and business economics. 
            B. Com in professional accounting and finance program covers various subjects. 
            In this course, students will learn various topics like financial accounting, 
            business organization, business law and a lot more. The professional accounting 
            and finance program offers a complete overview and theoretical understanding of
             various principles of professional Accounting through the business context.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>Why should you choose B.com in professional accounting and Finance?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Finance page image" />
            </span>
            <p>
            B. com in professional accounting and finance completely focuses on the objectives of financial planning, 
            economic knowledge and theory, banking system and a lot more. After completion of the course, aspirants can 
            expect a bright career path. A career in professional accountancy can be incredibly fulfilling and rewarding.
            </p>
          </div>
          <div className="section">
            <h3>Enjoy career flexibility </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Finance page image" />
            </span>
            <p>
            Aspirants with professional accounting and finance degrees can enjoy career flexibility since accounting 
            is the language of the very business. Having a strong foundation in accounting allows a professional to access
             a diverse range of roles in various businesses. Candidates can prefer to specialize in the strategic side of 
             finance like forecasting and analysis. Professional Accounting and finance open the door to a whole range of 
             interconnected careers.
            </p>
          </div>
          <div className="section">
            <h3>Set yourself up to become an entrepreneur</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Finance page image" />
            </span>
            <p>
            With professional accounting and finance, degree candidates will have a great foundation for becoming an entrepreneur. This is because aspirants will possess a mix of technical and strategic skills and have insights into how various industries and markets work. A highly qualified and professional accountant can even prefer to start their accounting firm one day.
            </p>
          </div>
    

          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Finance page image" />
            </span>
            <p>
            The duration of this course is three years which consists of six semesters. Candidates from a commerce background will give initial preference as they have an understanding of business and finance-related subjects. To take admission for online and distance B. Com programs, candidates should meet the minimum eligibility criteria.
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
                <img src={Commons} className="img-fluid" alt="Finance page image" />
              </div>
            </section>
          </div>

          <div className="section">
            <h3>Course Subjects</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Finance page image" />
            </span>

            <p>
            The duration of this course is 3 years and the curriculum is divided into 6 different semesters. The curriculum of this course includes various subjects like financial accounting, business organizations, cost professional accounting and so forth. Here is a list of subjects of the courses that candidates will learn. 
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
                    <li>Financial accounting -1</li>
                    <li>Financial Planning and Budgeting</li>
                    <li>Performance Management</li>
                    <li>Business mathematics</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right"> Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Business Economics</li>
                    <li>Cost management</li>
                    <li>Financial accounting – 11</li>
                    <li>Financial Decision Making-1 </li>
                    <li>Quantitative techniques</li>
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
                  <li>Marketing Management</li>
                    <li>Advanced Financial Accounting and Reporting</li>
                    <li>Financial Decision Making</li>
                    <li>Financial Analytics and Control</li>
                    <li>Environmental science</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2"> Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>Corporate Accounting</li>
                    <li>Organization Behavior and HRM</li>
                    <li>Advanced Financial Accounting and Reporting</li>
                    <li>Financial Decision Making</li>
                    <li>Introduction to Business Analytics</li>
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
                  <li>Financial markets and Instruments</li>
                    <li>Integral Auditing</li>
                    <li>International Taxation </li>
                    <li>Entrepreneurship</li>
                    <li>Financial modelling with spreadsheets</li>
                    <li>----</li>
              
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back"> Semester 6</p>
                  <ul className="p-0 mt-1">
                  <li>Banking and financial services</li>
                    <li>ICT for business</li>
                    <li>International Taxation</li>
                    <li>Research methodology</li>
                    <li>Ethics and values</li>
                    <li>Computerized accounting system</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <h3>How to choose the right university?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Finance page image" />
            </span>
            <p>
            Once you decide to pursue an executive B. Com is professional accounting and finance, it is essential to choose the right university. The following points are essential in selecting the right university.
            </p>

            <div className="row mt-4">
              <div className="col-md-4">
                <img src={Rankings} className="img-fluid" alt="Finance page image" />
              </div>
              <div className="col-md-4">
                <img src={Content} className="img-fluid" alt="Finance page image" />
              </div>

              <div className="col-md-4">
                <img src={Structure} className="img-fluid" alt="Finance page image" />
              </div>
            </div>
          </div>

          <div className="section pt-4">
            <h3>Career opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Finance page image" />
            </span>
            <p>
            B. Com in professional accounting and finance is an undergraduate course that helps students to get a good position in their lives. After completion of this course, candidates will get various job opportunities in the industries. Here are some major job positions that are available after the completion of a distance B. Com in professional accounting and finance candidates.
            </p>
            <div className="container text-center mt-4">
              <img src={Common} className="img-fluid" alt="Finance page image" />
            </div>
          </div>
          <div className="section">
            <h3>Summing it up</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Finance page image" />
            </span>
            <p>
              There are many universities offering this course so ensure to
              choose the right university. Pursuing this online and distance BBA
              finance is an ideal course for students who want to pursue their
              management studies along with their jobs.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Finance FAQ</h1>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header><h5>What are the major subjects to read in six semesters?</h5></Accordion.Header>
            <Accordion.Body>
			<p>Students have to read various subjects like Logistics Management, Financial Management, Macro and Micro Economics and so on.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header><h5>Does Online/Distance BBA Finance need Mathematics?</h5></Accordion.Header>
            <Accordion.Body>
			<p>Mathematics is an important subject for completing this course, however there is no restriction of maths for taking admission.</p>
            </Accordion.Body>
          </Accordion.Item>
		  <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header><h5>What is the average salary for Online/Distance BBA Finance Graduates?</h5></Accordion.Header>
            <Accordion.Body>
			<p>The average Online/Distance BBA Finance salary ranges from 5 lac to 7 lac.</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
		
      </div>
      {/* <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>
              Online and distance B. Com in professional accounting and finance{" "}
            </h3>
            <p>
              It is a 3-years undergraduate program that helps aspirants in
              gaining knowledge of finance and accounting concepts like
              financial accounting and business economics. B. Com in
              professional accounting and finance program covers various
              subjects. In this course, students will learn various topics like
              financial accounting, business organization, business law and a
              lot more. The professional accounting and finance program offers a
              complete overview and theoretical understanding of various
              principles of professional Accounting through the business
              context.
            </p>
          </div>
          <div className="section">
            <h3>
              Why should you choose B.com in professional accounting and
              Finance?
            </h3>
            <p>
              B. com in professional accounting and finance completely focuses
              on the objectives of financial planning, economic knowledge and
              theory, banking system and a lot more. After completion of the
              course, aspirants can expect a bright career path. A career in
              professional accountancy can be incredibly fulfilling and
              rewarding.
            </p>
          </div>

          <div className="section">
            <h3>Enjoy career flexibility </h3>
            <p>
              Aspirants with professional accounting and finance degrees can
              enjoy career flexibility since accounting is the language of the
              very business. Having a strong foundation in accounting allows a
              professional to access a diverse range of roles in various
              businesses. Candidates can prefer to specialize in the strategic
              side of finance like forecasting and analysis. Professional
              Accounting and finance open the door to a whole range of
              interconnected careers.
            </p>
          </div>
          <div className="section">
            <h3>Set yourself up to become an entrepreneur </h3>
            <p>
              With professional accounting and finance, degree candidates will
              have a great foundation for becoming an entrepreneur. This is
              because aspirants will possess a mix of technical and strategic
              skills and have insights into how various industries and markets
              work. A highly qualified and professional accountant can even
              prefer to start their accounting firm one day.
            </p>
          </div>

          <div className="section">
            <h3>Admission procedure </h3>
            <p>
              The duration of this course is three years which consists of six
              semesters. Students should pass the class 12th examination with at
              least 50% marks from a valid and recognized board. Candidates from
              a commerce background will give initial preference as they have an
              understanding of business and finance-related subjects in class
              12th. To take admission for online and distance B. Com programs,
              candidates should meet the minimum eligibility criteria.
            </p>
          </div>
          <table className="section-table section table">
            <thead>
              <tr>
                <th>Duration</th>
                <th>Approvals</th>
                <th>Eligibility</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>3 – 6 years</td>
                <td>UGC, AICTE, NAAC</td>
                <td>12th pass out</td>
              </tr>
            </tbody>
          </table>
          <div className="section">
            <h3>
              Here is a common procedure to take admission in the distance B.
              Com in professional accounting and finance.
            </h3>
            <ul>
              <li>
                Initially, you have to visit the particular university’s
                official website to take admitted.
              </li>
              <li>
                Fill out the application form with the required details and
                register yourself.
              </li>
              <li>
                Upload the required documents in the form and apply. Any
                registration fee ensures to pay via the mode of payment
                mentioned on the website.
              </li>
              <li>
                Once you are done with your registration, you will receive the
                confirmation mail along with the enrolment number.
              </li>
            </ul>
          </div>
          <div className="section">
            <h3>Course subject</h3>
            <p>
              The duration of this course is 3 years and the curriculum is
              divided into 6 different semesters. The curriculum of this course
              includes various subjects like financial accounting, business
              organizations, cost professional accounting and so forth. Here is
              a list of subjects of the courses that candidates will learn.{" "}
            </p>

            <div className="section-sub">
              <h4>Semester 1</h4>
              <ul>
                <li>English</li>
                <li>Business management</li>
                <li>Financial accounting -1</li>
                <li>Financial Planning and Budgeting</li>
                <li>Performance Management </li>
                <li>Business mathematics</li>
              </ul>
              <h4>Semester 2</h4>
              <ul>
                <li>Business Economics</li>
                <li>Cost management</li>
                <li>Financial accounting – 11</li>
                <li>Financial Decision Making-1 </li>
                <li>Quantitative techniques</li>
                <li>Communicative English</li>
              </ul>
              <h4>Semester 3</h4>
              <ul>
                <li>Marketing Management</li>
                <li>Advanced Financial Accounting and Reporting</li>
                <li>Financial Decision Making</li>
                <li>Financial Analytics and Control</li>
                <li>Environmental science</li>
              </ul>
              <h4>Semester 4</h4>
              <ul>
                <li>Corporate Accounting</li>
                <li>Organization Behavior and HRM</li>
                <li>Advanced Financial Accounting and Reporting</li>
                <li>Financial Decision Making </li>
                <li>Introduction to Business Analytics</li>
              </ul>
              <h4>Semester 5</h4>
              <ul>
                <li>Financial markets and Instruments</li>
                <li>Integral Auditing </li>
                <li>International Taxation</li>
                <li>Entrepreneurship</li>
                <li>Financial modelling with spreadsheets</li>
              </ul>
              <h4>Semester 6</h4>
              <ul>
                <li>Banking and financial services</li>
                <li>ICT for business</li>
                <li>International Taxation</li>
                <li>Research methodology</li>
                <li>Ethics and values</li>
                <li>Computerized accounting system</li>
              </ul>
            </div>
          </div>
          <div className="section">
            <h3>How to choose the right university?</h3>
            <p>
              Once you decide to pursue an executive B. Com is professional
              accounting and finance it is essential to choose the right
              university. The following points are essential in selecting the
              right university.
            </p>
            <ul>
              <li>Consult university rankings</li>
              <li>Check the course content</li>
              <li>Look what sports and societies are on offer</li>
              <li>Look for student accommodation</li>
            </ul>
          </div>

          <div className="section">
            <h3>Career opportunities </h3>
            <p>
              B. Com in professional accounting and finance is an undergraduate
              course that helps students to get a good position in their life.
              After completion of this course, candidates will get various job
              opportunities in the industries. Here are some major job positions
              that are available after the completion of a distance B. Com in
              professional accounting and finance candidates.
            </p>
            <ul>
              <li>Financial Analyst</li>
              <li>Company Secretary</li>
              <li>CA</li>
              <li>Chief Accounting Officer</li>
              <li>Account Executive</li>
              <li>Junior Analyst</li>
              <li>Auditor</li>
              <li>Financial Risk Manager</li>
            </ul>
          </div>

          <div className="section">
            <h3>Summing it up</h3>
            <p>
              In this course, aspirants will gain in-depth knowledge in
              accounting and finance and related stuff. Candidates can find this
              course in many universities but not everyone is in an online
              format. So, before you choose any course, it is essential to
              choose the right universities based on your requirements. Only by
              choosing the right university, an individual can lead a successful
              career.
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
}
