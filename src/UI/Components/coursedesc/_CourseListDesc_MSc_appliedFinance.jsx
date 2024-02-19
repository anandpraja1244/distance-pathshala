import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Mr_management from "../../../assets/images/MSC(PG)/AF.svg";
import line_h from "../../../assets/images/process/Line.png";
import Common from "../../../assets/images/mSC1/msc/AF/Career.svg";
import choose from "../../../assets/images/mSC1/msc/AF/choose.svg";
import AdmissionProcedure from '../../../assets/images/msc/AdmissionProcedure.svg';
import elegibilty from '../../../assets/images/msc/10th.svg';
import StepB from '../../../assets/images/msc/stepA.png';
import StepA from '../../../assets/images/msc/stepB.png';

export default function CourseListDesc() {
  return (
    <>
      <Helmet>
        <title>
          Distance learning Masters Programs in Applied Finance 2022
        </title>
        <meta
          name="description"
          content="Distance MSC Applied Finance course at Distance Pathshala is offered with numerous advantages and facilities to the students online."
        />
        <meta name="keywords" content="Applied Finance Distance Education" />
      </Helmet>
      <Searchform />
    
      <img src={Mr_management} alt="hr Management" className="w-100" />
      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>Why study M. Sc in applied finance?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              This course prepares students to prepare financial strategies for
              business. This course includes various subjects to meet the
              industry requirement. Applied finance is one of the most popular
              courses that opens up a huge career opportunity for aspirants.
            </p>
          </div>
          <div className="section">
            <h3>Finance jobs are well paid and in-demand</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              In today’s world, everybody depends on financial strategies and
              principles. From small start-ups to large corporations, finance is
              very important. From corner shops to international supermarket
              chains, from law firms to insurance companies, almost everyone
              needs finance and all are willing to pay top-dollar for experts in
              this field.
            </p>
          </div>
          <div className="section">
            <h3>Finance education is essential for a successful life</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The more financial knowledge you have, you will have a better
              life. Besides understanding finance, money and investments
              aspirants will learn to apply this knowledge, take risks, be
              willing to make mistakes, lose money and so on. All these make the
              difference between success and failure when it comes to personal
              finance.
            </p>
          </div>
          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Candidates who are willing to pursue an Applied finance course
              should fulfil some criteria required by the university. Aspirants
              should have either B. Tech or Bachelor’s degree in math, computer
              science, IT, statistics. Economics subjects. The degree they
              obtain should be from a recognized university. It is also
              essential to have a minimum of 50-55% aggregate marks in
              graduation and should have a minimum of 2 years of work
              experience.
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
            <p>Here is a common procedure to take admission in the distance M. Sc in Applied Finance</p>
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
              The syllabus of this course helps you in delving deep into the
              concepts. Every course in the applied finance program is designed
              by professionals to meet the requirement of the industry. Here are
              some lists of courses that candidates will learn in this program.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Quarter</p>
                  <ul className="p-0 mt-1">
                    <li>
                    Ethical and Professional Standards
                    </li>
                    <li>Financial Reporting and Analysis</li>
                    <li>
                    Equity Analysis and Evaluation
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-left">Quarter</p>
                  <ul className="p-0 mt-1">
                    <li>
                    Economics for Evaluation
                    </li>
                    <li>Fixed Income Securities and Analysis</li>
                    <li>-----</li>
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
              Once you decide to pursue an M. Sc in Applied finance it is
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
              The duration of M. Sc in Applied finance is 2 years. In this
              course, students will get an in-depth understanding of subjects
              related to finance. Here is a list of jobs which candidates from
              M. Sc in Applied finance can apply for.
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
              In this course, aspirants will gain in-depth knowledge about
              finance and other related stuff. Many universities are offering M.
              Sc programs in applied finance so before you choose any course, it
              is essential to choose the right universities based on your
              requirements. Only by choosing the right university, an individual
              can lead a successful career.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
