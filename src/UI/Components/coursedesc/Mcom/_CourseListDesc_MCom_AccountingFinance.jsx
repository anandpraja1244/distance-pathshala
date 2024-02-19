import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Finance from "../../../assets/images/B.Com/Finance3.svg";
import line_h from "../../../assets/images/process/Line.png";
import Common from "../../../assets/images/B.Com/Career.svg";
import Rankings from "../../../assets/images/process/rankings.png";
import Commons from "../../../assets/images/B.Com/Common.svg";
import Content from "../../../assets/images/process/content.png";
import Structure from "../../../assets/images/process/structure.png";
export default function CourseListDesc() {
  return (
    <>
      <Helmet>
        <title>
          Distance learning Accounting courses in india | Distance Pathshala
        </title>
        <meta
          name="description"
          content="Here Students can study financial management through such distance learning programs as business, accounting and finance."
        />
        <meta name="keywords" content="Accounting and Finance Course" />
      </Helmet>
      <Searchform />
      <div className="container mt-3 hrm">
        <div className="row">
          <div className="col-md-4 hrm-img">
            <img src={Finance} className="img-fluid" alt="Hrm page image" />
          </div>
          <div className="col-md-8 py-4 hrm-text">
            <h3>
              Online and distance M.com <span>Accounting and Finance </span>
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              M.com in accounting and finance and the professional degree of two
              years minimum duration. The course completely focuses on economic
              theory, financial planning and understanding of financial policies
              and banking systems. This program completely deals with financial
              and accounting aspects. This online and distance education mode
              facilitate working professionals with the best education system in
              master’s degree in accounting and finance.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>Why should you choose M.com in accounting and Finance?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              M.com in accounting and finance completely focus on the objectives
              of financial planning, economic knowledge and theory, banking
              system and a lot more. After completion of the course, aspirants
              can expect a bright career path. A career in professional
              accountancy can be incredibly fulfilling and rewarding.
            </p>
          </div>
          <div className="section">
            <h3>Flexible career path</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Graduating from a reputed university with an accounting and
              finance degree will leave you with a variety of career paths. Even
              by working as a self-employed accountant, an individual can enjoy
              full flexibility and the freedom to choose their own working hours
              and patterns.
            </p>
          </div>
          <div className="section">
            <h3>High earning potential</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Individuals with a degree in accounting and finance have the
              potential to earn high-paying salaries depending on the career
              path they follow. You might prefer to work as a public or private
              accountant you can expect a high pay as a start salary. With
              further experience and the relevant qualification, you can expect
              a lot more pay.
            </p>
          </div>
          <div className="section">
            <h3>Every industry needs accountants</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Preferring this degree means, individuals will have the skills to
              work in a profession that is constantly in high demand. Almost
              every industry required accountants and finance professionals to
              manage their finances. There is a high demand for accounting and
              finance graduates means you will have strong job security.
            </p>
          </div>

          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              M.com in accounting and finance is a two-year course with four
              semesters. To pursue this course, students should have completed a
              bachelor’s degree program in the Accountancy and finance stream
              with a least 50% marks.
            </p>
            <div className="row mt-4">
              <div className="col-md-4">
                <ul className="stlye-none text-center">
                  <li className="eligibility">Eligibility</li>
                  <li className="eligibility-nd">Graduation pass out</li>
                </ul>
              </div>

              <div className="col-md-4">
                <ul className="stlye-none text-center">
                  <li className="eligibility">Duration</li>
                  <li className="eligibility-nd"> 2 -4 years</li>
                </ul>
              </div>

              <div className="col-md-4">
                <ul className=" stlye-none text-center">
                  <li className="eligibility">Approvals</li>
                  <li className="eligibility-nd">UGC, AICTE, NAAC</li>
                </ul>
              </div>
            </div>
            <section className="bg-white mt-5 pt-3">
              <div className="container text-center mt-3">
                <img src={Commons} className="img-fluid" alt="Hrm page image" />
              </div>
            </section>
          </div>

          <div className="section">
            <h3>Course subjects</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              The duration of this course is 2 years, and the curriculum is
              divided into 4 semesters that delves deep into accounting and
              financial aspects. The course is designed to meet the industry
              requirements.
            </p>
          </div>
          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>Advanced Accounting-1</li>
                    <li>Strategic Cost Management</li>
                    <li>Corporate Law</li>
                    <li>Economics For Business Decisions</li>
                    <li>Quantitative Methods For Finance and Investments</li>
                    <li>-----</li>
              
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Corporate Finance & Valuation</li>
                    <li>Financial Markets & Institutions</li>
                    <li>Advanced Accounting-2</li>
                    <li>Direct Tax Laws</li>
                    <li>Investment Analysis & Portfolio Management</li>
                    <li>Macroeconomics</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 3</p>
                  <ul className="p-0 mt-1">
                    <li>Business Research & Methodology</li>
                    <li>Banking & Financial Services</li>
                    <li>Advanced Auditing</li>
                    <li>Fixed Income Securities and Analysis</li>
                    <li>GST and Customs Law</li>
                    <li>Open Elective Course</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>International Finance</li>
                    <li>Wealth Management</li>
                    <li>Introduction to Fintech and Analytics</li>
                    <li>Financial Modelling</li>
                    <li>Research Project/Cross-Functional Elective</li>
                    <li>------</li>
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
              Once you decide to pursue M.com in accounting and finance it is
              essential to choose the right university. The following points are
              essential in selecting the right university.
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
              After completion of this course, aspirants will have various
              career opportunities in accounting and finance. Many students who
              have passes this course are placed in top companies and MNCs. Here
              is a list of career opportunities that students can apply for.
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
    </>
  );
}
