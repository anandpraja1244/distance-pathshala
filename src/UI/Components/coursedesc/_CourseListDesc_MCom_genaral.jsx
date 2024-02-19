import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Mr_management from "../../../assets/images/B.Com/mcom_genaral.jpg";
import line_h from "../../../assets/images/process/Line.png";
import Common from "../../../assets/images/mSC1/mcom/IF/Career.svg";
import choose from "../../../assets/images/mSC1/msc/AI/choose.svg";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/mSC1/mcom/AF/Admission.svg";
import StepB from "../../../assets/images/msc/stepA.png";
import StepA from "../../../assets/images/msc/stepB.png";
import Accordion from "react-bootstrap/Accordion";

export default function CourseListDesc() {
  return (
    <>
      <Helmet>
        <title>
          Top Distance learning Masters in International Finance in India
        </title>
        <meta
          name="description"
          content="Distance Pathshala offerings Distance Courses in International Finance in India. Learn more and apply now."
        />
        <meta name="keywords" content="International Finance Management" />
      </Helmet>
      <Searchform />

      <img src={Mr_management} alt="hr Management" className="w-100" />
      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>Why should you choose this course?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The online M.Com is specially designed for those students who are
              working in the same field side-by-side as it helps in e-learning
              and also gain experience in the same field simultaneously. The
              course is based on modern education system and can be studied by
              students sitting anywhere. This encourage students to do jobs and
              study at the same time and build up their career. Full time M.Com
              and part time M.Com are similar programme. In fact, online
              education of M.Com proved to be more beneficial those students who
              are willing to have deep knowledge about financial transaction but
              do want to leave their ongoing jobs. This course will help them to
              upgrade their job status.
            </p>
          </div>
          <div className="section">
            <h3>Career advancement Distance Education in M.Com</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Online and distance learning in Distance Education in M.Com offers
              great career opportunities in private as well as government
              companies. It is one of the most opted courses in the upcoming
              financial sector. For students who are Distance Education in M.Com
              graduates there are ample career advancements in different sectors
              like-
            </p>
            <li> Accountant</li>
            <li>Account executive</li>
            <li> Business consultant</li>
            <li>Finance analyst</li>
            <li>Operation manager</li>
            <li>Finance manager</li>
            <li>Corporate analyst and many more</li>
            <p>
              Under proper guidance and complete support of senior
              educationalist, students can do better in this field in the
              upcoming years and will secure good position in the companies with
              a good pay range.
            </p>
          </div>

          <div className="section">
            <h3>Earn high salary</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Distance Education in M.Com is going to be one of the fantastic course to pursue. A Distance Education in M.Com
graduate student can earn a good pay range. Entry-level salary starts from more than 5 Lac per year. On an average
individual can earn 10-12LPA depending upon their posts. For instance, a business consultant can earn 12 Lac Per
Annum. And in fact, most experienced workers sometimes make up to 18 Lac Per year.
            </p>
          </div>

          <div className="section">
            {/* <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            To pursue this course, students must attain an aggregate of 50%
              and above in the bachelor’s degree in b.com stream or evaluating
              to the commerce degree from UGC recognized university. Candidates
              who have passed graduation in international finance can easily
              apply for M.com international finance.
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
                <span className="fw-bold">Note:</span> The average course fee of
                doing online M.Com ranges between INR 50,000 to INR 150,000 per
                semester. The fee structure of course is offered differently by
                private institutes and government one. Also, online mode of
                learning is helpful to those students who cannot afford a
                full-time course due to its huge expenses.
              </p>
              <p>
                Here is a common procedure to take admission in the distance
                M.com in <br /> online Genaral M.Com.
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
              this online M.Com programme. It is a course in which students will
              develop not only monetary management skills but also enter in a
              business world which enable candidates to achieve a creative
              career.
            </p>
          </div>
          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>Managerial Economics</li>
                    <li>Quantitative techniques</li>
                    <li>Advanced financial management</li>
                    <li>Marketing management</li>
                    <li>Microfinance management</li>
                    <li>Research methodology</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Entrepreneurship</li>
                    <li>Family business</li>
                    <li>Capital market and finance</li>
                    <li>Digital marketing</li>
                    <li>Supply chain and logistics</li>
                    <li> Corporate responsibility</li>
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
            <li>University’s ranking</li>
            <li>Course subjects</li>
            <li>Fee structure</li>
            <li> Analyse personal needs like accommodation.</li>

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
              The following are the few major subjects you will get to learn in
              this online M.Com programme. It is a course in which students will
              develop not only monetary management skills but also enter in a
              business world which enable candidates to achieve a creative
              career.
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
              Distance Education in M.Com presents great options that will lead
              you to secure good position in companies based on monetary
              transactions, banks, finance management, etc at national as well
              as international level. This programme is full of financial
              mangement. Students will not regret after choosing this course as
              their career.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">M.Com Genaral (FAQ’s)</h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
                What are the top ranking recruiters of Distance Education in
                M.Com?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>The following are the top hiring firms for M.Com students-</p>
              <p> i. KPMG</p>
              <p> ii. Audit officer</p>
              <p>iii. Bain company</p>
              <p>iv. Boston consulting group</p>
              <p> v. Barclays</p>
              <p>vi. Goldman Sachs</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>Is online learning of Distance Education in M.Com?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Yes, pursuing Distance Education in M.Com is worth doing only if
                you really work hard and studied throughout the course.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
                Is online and regular learning of M.Com is of equal value?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                There is no difference between them. As a matter of fact online
                mode of learning is more preferable due its affordability by
                students. And also, students can also work side-by-side while
                doing online M.Com
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
