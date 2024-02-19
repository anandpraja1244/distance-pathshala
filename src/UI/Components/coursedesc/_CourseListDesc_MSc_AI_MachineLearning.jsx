import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Mr_management from "../../../assets/images/MSC(PG)/AI.svg";
import line_h from "../../../assets/images/process/Line.png";
import Common from "../../../assets/images/mSC1/msc/AI/Career.svg";
import choose from "../../../assets/images/mSC1/msc/AI/choose.svg";
import AdmissionProcedure from '../../../assets/images/msc/AdmissionProcedure.svg';
import elegibilty from '../../../assets/images/msc/10th.svg';
import StepB from '../../../assets/images/msc/stepA.png';
import StepA from '../../../assets/images/msc/stepB.png';


export default function CourseListDesc() {
  return (
    <>
      <Helmet>
        <title>
          MSC In Artificial Intelligence & Machine Learning | Distance Pathshala
        </title>
        <meta
          name="description"
          content="MSC Artificial Intelligence and Machine Learning degree online and distance by Distance Pathshala, The course curriculum includes programming languages"
        />
        <meta
          name="keywords"
          content="Artificial Intelligence Distance learning"
        />
      </Helmet>
      <Searchform />
   
  <img src={Mr_management} alt="hr Management" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>
              Why study M. Sc for Artificial intelligence and machine learning?
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              This course is specially designed for students who are willing to
              gain core knowledge of artificial intelligence methods,
              computational science, and other concepts. This course also
              involves data mining, computer vision, robotics and autonomous
              systems and more. Artificial intelligence and machine learning are
              designed to provide comprehensive knowledge of its subjects.
            </p>
          </div>
          <div className="section">
            <h3>This course promises a Bright career</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Nowadays, almost every company are looking to introduce artificial
              intelligence in their domain. So, studying machine learning and
              artificial intelligence opens up a world of opportunities to
              create cutting-edge technologies in diverse sectors. If you
              complete your course from a recognized company, you can get
              introduced to exciting career prospects
            </p>
          </div>
          <div className="section">
            <h3>This course helps you make a good living</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              It is one of the fastest-growing technologies in the job market.
              Nowadays, these courses are in high demand and the average annual
              wage for an entry-level AI engineer will be high. AI and Machine
              learning engineer salaries will be considerably greater than the
              average salary for any other engineering graduate.
            </p>
          </div>

          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The minimum duration of M. Sc in artificial intelligence and
              machine learning is a 2 years course that is divided into 8
              quarters. The maximum duration of this course is 4 years and
              students will get additional 2 years to pass all the exams. To
              apply for this course, there is no age limit for the candidates.
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
            <p>Here is a common procedure to take admission in the distance M. Sc in Artificial <br></br>Intelligence and Machine Learning.</p>
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
              concepts. Each and every course in artificial intelligence and
              machine learning program is designed by professionals to meet the
              requirement of the industry. Here is a list of courses that
              candidates will learn in their semesters
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>
                      Foundations Of Probability and Statistics for Data Science
                    </li>
                    <li>Digital and Social Media Analytics</li>
                    <li>
                      Business Communication and Presentation Skills for Data
                      Analytics
                    </li>
                    <li>
                      Essential Engineering Skills in Data Analytics using R and
                      Python
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Statistics and Probability in Decision Modeling-1</li>
                    <li>
                      The Art and Science of Storytelling with Data
                      Visualizations
                    </li>
                    <li>Hands-on Data Science Project 1</li>
                    <li>----</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left sam-back">Semester 3</p>
                  <ul className="p-0 mt-1">
                    <li>Behaviour Science and Analytics</li>
                    <li>Project Management</li>
                    <li>Methods and Algorithms in Machine Learning-1</li>
                    <li>Design Thinking</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>Methods and Algorithms in Machine Learning -2</li>
                    <li>AI and Decision Sciences</li>
                    <li>Economics for Analysts</li>
                    <li>Hands-on Data Science Project 2</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 5</p>
                  <ul className="p-0 mt-1">
                    <li>Mathematical Analysis for Data Science</li>
                    <li>Advanced Mathematical Analysis for Data Science</li>
                    <li>
                      Computer Vision Fundamentals and Deep Learning
                      Applications -1
                    </li>
                    <li>Business Law and Ethics</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back">Semester 6</p>
                  <ul className="p-0 mt-1">
                    <li>
                      Computer Vision Fundamentals and deep learning
                      fundamentals - 2
                    </li>
                    <li>
                      Text Mining and Natural Language Processing using Deep
                      Learning
                    </li>
                    <li>Quantitative Research Methods</li>
                    <li>Data Engineering-2</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Quarter 7</p>
                  <ul className="p-0 mt-1">
                    <li>ML Algorithm Development Bootcamp</li>
                    <li>Masters Dissertation</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back">Quarter 8</p>
                  <ul className="p-0 mt-1">
                    <li>Masters Dissertation</li>
                    <li>Statistics and Probability in Decision Modeling-2</li>
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
              Once you decide to pursue an M. Sc in artificial intelligence and
              machine learning.it is essential to choose the right university.
              The following points are essential in selecting the right
              university.
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
              The duration of M. Sc in artificial intelligence and machine
              learning is 2 years. In this course, students will get an in-depth
              understanding of subjects related to artificial intelligence and
              machine learning. Here is a list of jobs that candidates from M.
              Sc in artificial intelligence and machine learning can apply for.
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
              In this course, aspirants will gain in-depth knowledge in a
              related field. Many universities are offering M. Sc in artificial
              intelligence and machine learning so before you choose any course,
              it is essential to choose the right universities based on your
              requirements. Only by choosing the right university, an individual
              can lead a successful career.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
