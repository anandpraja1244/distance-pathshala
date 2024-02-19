import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Mr_management from "../../../assets/images/MSC(PG)/DS.svg";
import line_h from "../../../assets/images/process/Line.png";
import Common from "../../../assets/images/mSC1/msc/DS/Career.svg";
import choose from "../../../assets/images/mSC1/msc/DS/choose.svg";
import AdmissionProcedure from '../../../assets/images/msc/AdmissionProcedure.svg';
import elegibilty from '../../../assets/images/msc/10th.svg';
import StepB from '../../../assets/images/msc/stepA.png';
import StepA from '../../../assets/images/msc/stepB.png';


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
      <img src={Mr_management} alt="hr Management" className="w-100" />

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
            <div className="text-center">
              <h3>ADMISSION PROCEDURE </h3>
              <span className="m-0 p-0">
                <img src={line_h} className="img-fluid" alt="Hrm page image" />
              </span>
            </div>
          <img src={AdmissionProcedure} alt="admin" className="w-100 mt-5" />
          
          <img src={elegibilty} alt="admin" className="w-100 mt-5" />
           <div className="container py-3 text-center">
            <p>Here is a common procedure to take admission in the distance M. Sc in Data Science</p>
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
