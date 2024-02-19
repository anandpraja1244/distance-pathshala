import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Mr_management from "../../../assets/images/B.Com/I.svg";
import line_h from "../../../assets/images/process/Line.png";
import Common from "../../../assets/images/mSC1/mcom/IF/Career.svg";
import choose from "../../../assets/images/mSC1/msc/AI/choose.svg";
import AdmissionProcedure from '../../../assets/images/msc/AdmissionProcedure.svg';
import elegibilty from '../../../assets/images/mSC1/mcom/AF/Admission.svg';
import StepB from '../../../assets/images/msc/stepA.png';
import StepA from '../../../assets/images/msc/stepB.png';
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
            <h3>Why should you choose M.com in International finance?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              With this course, students gain expertise in management, taxation,
              finance, leadership, accounting and a lot more. With this one
              course, aspirants will get various opportunities in their careers.
            </p>
          </div>
          <div className="section">
            <h3>Abundant job opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Almost all corporations have set up their bases in different
              countries. Because of this most of them require people well-versed
              in the area of international business to help with various roles
              that continue to emerge and evolve based on business requirements.
              There are many good job opportunities within and across India.
            </p>
          </div>
          <div className="section">
            <h3>International exposure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              This course allows for international exposure or exposure to
              international business environments. Based on the situations,
              professionals will travel the world on business and meet with
              clients and customers from overseas and connect with them. This
              not only adds great value in career but also offer the unique
              opportunity to get to know and assess the business environments of
              another country.
            </p>
          </div>
          <div className="section">
            <h3>Salary and perks</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Many multinational corporations pay good salaries for aspirants
              with an international finance degree. Some perks like while you
              are travelling to countries, all your travel, stay and food
              expenses are completely taken care of by the organizations. Like
              this, there are various perks and benefits associated with this
              profile.
            </p>
          </div>

          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            To pursue this course, students must attain an aggregate of 50%
              and above in the bachelor’s degree in b.com stream or evaluating
              to the commerce degree from UGC recognized university. Candidates
              who have passed graduation in international finance can easily
              apply for M.com international finance.
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
            <p>Here is a common procedure to take admission in the distance M.com in international finance.</p>
          <img src={StepA} alt="admin" className="mw-100 mt-5" />
          <img src={StepB} alt="admin" className=" w-100 mt-5" />

           </div>
          </div>

     

          <div className="section">
            <h3>How to choose the right university?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Once you decide to pursue M.com in international finance it is
              essential to choose the right university. The following points are
              essential in selecting the right university.
            </p>

            <div className="row mt-4">
            <span className="m-0 p-0">
                <img src={choose} className="img-fluid" alt="Hrm page image" />
              </span>
            </div>
          </div>
          <div className="section pt-4">
            <h3>Career opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Every subject in this course gives them a deeper knowledge of
              accounting, international business, business environment, finance,
              banking, management and a lot more. M.com in international finance
              is a two-year course divided into four semesters. After completion
              of this course, aspirants will get a huge career opportunity in
              various firms.
            </p>

            <div className="container text-center mt-4">
              <img src={Common} className="img-fluid" alt="Hrm page image" />
            </div>
          </div>
          <div className="section">
            <h3>Bottom line</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Experience breeds the very best accountancy professionals on the
              market. Pursing this M.com in accountancy and finance will get a
              bright future. Ensure to choose the right and reputed universities
              to lead a successful life.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">International Finance FAQ</h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>What is M.com international finance?</h5>
            </Accordion.Header>
            <Accordion.Body>
         <p>M.com (International Finance) programme is designed to develop professionals with specialized skills and applied global competencies in the areas of financial management.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
              What are the scopes after this online M.com in international finance degree?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
  <p>After completing the master’s degree, there is a wide variety of career options available which deal with the flow of money, from manager to personal finance consultant, from accountant to investment banker. There are lots of opportunities in the commerce field nationally and internationally also.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              What is the salary M.com in International Finance earns?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The average M.com salary with specialization in international finance is INR 5.1 lakh per year. As a beginner, you can expect to earn around 2 lakh per annum and after some years as a professional, the salary goes high around INR 40 Lakh per year.
              </p>
            </Accordion.Body>
          </Accordion.Item> 
        </Accordion>
      </div>
    </>
  );
}
