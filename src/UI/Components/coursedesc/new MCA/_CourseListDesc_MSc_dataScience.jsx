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
        <title>MSc Distance Machine Learning and Data Science in India</title>
        <meta
          name="description"
          content="Online and Distance M.Sc in Data Science is a postgraduate program by Distance Pathshala. This program provides a deep understanding of data engineering "
        />
        <meta name="keywords" content="Data Science Distance Learning" />
      </Helmet>
      <Searchform />
      <div className="container mt-3 hrm">
        <div className="row">
          <div className="col-md-4 hrm-img">
            <img src={Finance} className="img-fluid" alt="Hrm page image" />
          </div>
          <div className="col-md-8 py-4 hrm-text">
            <h3>
              Online and distance M. Sc <span>Data Science </span>
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              It is a postgraduate program that offers a deep understanding of
              data engineering and analysis. M. Sc data science is proven
              helpful while handling the data of companies. This program imparts
              knowledge of different disciplines like python programming, data
              analysis and visualization and a lot more. By pursuing this
              course, you can also be a data scientist and a data engineer who
              handles raw data. M. Sc data science course also imparts the
              knowledge of SQL, programming, python programming and a lot more.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>Why should you choose M. Sc in Data Science?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              M. Sc in Data science is the most popular course which is
              specially designed by industry experts and top academicians in
              this field. Data science is an emerging field that can lead to a
              lucrative career. It is the study of information that is the most
              important resource for industries to effective makes key decisions
              in solving problems. Here are some reasons why you should choose
              M. Sc in data science.
            </p>
          </div>
          <div className="section">
            <h3>Demand for data scientists</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              It is one of the driving subjects that is rapidly taking over most
              organizations. There is a rise in demand for data scientists day
              by day. Additionally, some experts in the data science field make
              it a top priority for big companies to employ as many data
              scientists as possible.
            </p>
          </div>
          <div className="section">
            <h3>It is a very promising field</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Data science is considered to be one of the hottest career paths.
              As there is an increase in demand for skilled data science
              practitioners in industry, academia and governments, aspirants
              will have a great future. There is a very positive job outlook for
              data scientists and there are many promising and reputed
              organizations hiring a data scientist. With this degree, you can
              increase your odds of getting a job in the data science field.
            </p>
          </div>

          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The minimum duration of M. Sc in data science is a 2 years course
              that is divided into 4 semesters. The maximum duration of this
              course is 4 years and students will get additional 2 years to pass
              all the exams. To apply for this course, there is no age limit for
              the candidates.
            </p>
            <div className="row mt-4">
              <div className="col-md-4">
                <ul className="stlye-none text-center">
                  <li className="eligibility">Eligibility</li>
                  <li className="eligibility-nd">
                    B.Tech / B. Sc / B. Sc pass out
                  </li>
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
              The syllabus of this course helps you in delving deep into the
              concepts. Every course in the data science program is designed by
              professionals to meet the requirement of the industry. Here is a
              list of courses that candidates will learn in their semesters.
            </p>
          </div>
          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>
                    SQL Programming
                    </li>
                    <li>Advanced Database Management Systems</li>
                    <li>
                    Communication and Soft Skills
                    </li>
                    <li>
                    Python Programming
                    </li>
                    <li>Applied Probability and Statistics</li>               
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Calculus and Linear Algebra for Data Scientists</li>
                    <li>
                    Deep Learning
                    </li>
                    <li>Data Analysis and Visualization</li>
                    <li>Machine Learning</li>
                    <li>Advanced Machine Learning</li>
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
                    <li>
                    Web Technologies
                    </li>
                    <li>Optimization</li>
                    <li>
                    Java Programming
                    </li>
                    <li>
                    Data Structures and Algorithms
                    </li>
                    <li>Cloud-Native Development</li>
                    <li>Project</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>Natural Language Processing</li>
                    <li>
                    Data Engineering
                    </li>
                    <li>Data Mining and warehousing</li>
                    <li>Applied Business Analytics</li>
                    <li>Project</li>
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
              Once you decide to pursue an M. Sc in data science.it is essential
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
              The duration of M. Sc in data science is 2 years. In this course,
              students will get an in-depth understanding of subjects related to
              data science. Here is a list of jobs that candidates from M. Sc
              data science can apply for.
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
              In a data science course, aspirants will gain in-depth knowledge
              in a related field. Many universities are offering M. Sc in data
              science but not everyone is in an online format. So, before you
              choose any course, it is essential to choose the right
              universities based on your requirements. Only by choosing the
              right university, an individual can lead a successful career.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
