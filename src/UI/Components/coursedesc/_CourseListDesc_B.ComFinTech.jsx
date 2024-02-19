import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import HRM from "../../../assets/images/B.Com/FinTech1.svg";
import line_h from "../../../assets/images/process/Line.png";
import Common from "../../../assets/images/B.Com/FinTech.svg";
import Commons from "../../../assets/images/B.Com/Common.svg";
import Rankings from "../../../assets/images/process/rankings.png";
import Content from "../../../assets/images/process/content.png";
import Structure from "../../../assets/images/process/structure.png";

export default function CourseListDesc() {
  return (
    <>
      <Helmet>
        <title>
          Best Online B.Com in FinTech Distance courses University in India |
          Distane Pathshala
        </title>
        <meta
          name="description"
          content="Enroll now in a FinTech course in India online to get a blend of cutting-edge educational strategies. Let Distance Pathshala guide you on your right career."
        />
        <meta name="keywords" content="FinTech courses in India online" />
      </Helmet>
      <Searchform />
      <div className="container mt-3 hrm">
        <div className="row">
          <div className="col-md-4 hrm-img">
            <img src={HRM} className="img-fluid" alt="Hrm page image" />
          </div>
          <div className="col-md-8 py-4 hrm-text">
            <h3>
              Online and distance B. Com in <span> FinTech </span>
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Aspirants who prefer to learn about the latest technology used to
              enhance the delivery and use of financial services can choose this
              course. FinTech is a 3 years undergraduate course that is designed
              to deal with various disciplines of commerce, management and
              accounting subjects. B. Com in FinTech course makes students
              future-ready to take on roles in banking, financial markets and
              technology. In the last few years, the demand for FinTech
              professionals has seen an increase.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>Why you should choose B. Com in Fintech Management?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The courses offer a depth understanding of the logical structure
              with the limitations of business, new and marketing concepts.
              Fintech is nothing but the fusion of finance and technology. The
              course also offers the possibilities of using artificial
              intelligence and machine learning.
            </p>
          </div>
          <div className="section">
            <h3>Competitive advantage</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The course will make you stand out in a crowd, especially in a
              highly competitive market. With the proper understanding and
              knowledge, the individual will be rewarded for sure. In Fintech
              management you will also have a good understanding of financial
              technology. In this course, you will keep upgrading your skills to
              be more productive.
            </p>
          </div>
          <div className="section">
            <h3>Career transformation </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              By pursuing this course, an individual can step up their career by
              learning a valuable skill. Though the concept is new to many
              people, there is good growth in your career. The course will help
              you make better decisions. The course is employed as a valuable
              asset since it gives you a competitive edge over other candidate.
            </p>
          </div>
          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The duration of this course is three years and is divided into 6
              semesters. The admission process for this course is done on the
              basis of merit. To take admission for online and distance B. Com
              programs, candidates should meet the minimum eligibility criteria.
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
              The duration of this course is 3 years and the curriculum is
              divided into 6 different semesters. In this course, aspirants will
              come across various subjects that are required to meet the
              industry requirement. B. Com in FinTech is one of the best courses
              for techno finance enthusiasts. Here is a list of subjects of the
              courses that candidates will learn.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left"> Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>Economic Environment of Business</li>
                    <li>Business Statistics</li>
                    <li>Introduction to Information Technology</li>
                    <li>Investment Foundation</li>
                    <li>Business Communication-I</li>
                    <li>Foundation Course – I</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right"> Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Introduction to Financial System</li>
                    <li>Business Mathematics</li>
                    <li>Corporate Finance</li>
                    <li>Introduction to FinTech</li>
                    <li>Setting up of Business Entity</li>
                    <li>Foundation Course – II (EVS)</li>
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
                    <li>Innovation and Transformation in Financial Services</li>
                    <li>Securities Law</li>
                    <li>Derivatives Management</li>
                    <li>Fundamentals of Data Analytics</li>
                    <li>Robotic Process Automation Fundamentals</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2"> Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>Fintech in Personal Financial Management</li>
                    <li>Cyber Law</li>
                    <li>Financial Risk Management</li>
                    <li>Portfolio Management</li>
                    <li>Application of Data Analysis</li>
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
                    <li>Technical Analysis</li>
                    <li>Financial Modelling</li>
                    <li>Fundamentals of Algo Trading</li>
                    <li>Data Analysis Visualisation and Storytelling</li>
                    <li>Business Transformation Using AI and Analytics</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back"> Semester 6</p>
                  <ul className="p-0 mt-1">
                    <li>Blockchain and CryptoCurrency Fundamentals</li>
                    <li>FinTech: Credit Modelling</li>
                    <li>Future of Data-Driven Finance</li>
                    <li>Fin App in Entrepreneurial Finance</li>
                    <li>---</li>
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
              Once you decide to pursue an executive BBA in HRM it is essential
              to choose the right university. The following points are essential
              in selecting the right university.
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
              B. Com in FinTech is an undergraduate course that helps students
              to get a good position in their lives. After completion of this
              course, candidates will get various job opportunities in the
              industries. Here are some major job positions that are available
              after the completion of a distance B. Com in FinTech.
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
      </div>
    </>
  );
}
