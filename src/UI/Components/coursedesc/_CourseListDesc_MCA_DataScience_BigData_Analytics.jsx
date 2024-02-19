import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Finance from "../../../assets/images/B.Com/Finance3.svg";
import line_h from "../../../assets/images/process/Line.png";
import Common from "../../../assets/images/msc/CareerOppor.svg";
import Rankings from "../../../assets/images/process/rankings.png";
import Commons from "../../../assets/images/B.Com/Common.svg";
import Content from "../../../assets/images/process/content.png";
import Structure from "../../../assets/images/process/structure.png";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/msc/10th.svg";
import StepB from "../../../assets/images/msc/stepA.png";
import StepA from "../../../assets/images/msc/stepB.png";
import Mr_management from "../../../assets/images/MCA/dataanalytic.jpg";
import linepg from "../../../assets/images/msc/Linepg.png";
import Accordion from "react-bootstrap/Accordion";
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
              Why Should You Choose Online and Distance MCA in Data Science and
              Big Data Analytics?
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Both Data Science and Big Data Analytics are two of the hottest
              career options currently in the IT sector. Big Data is growing
              enormously every day at an exponential rate and there is a need to
              manage this data in a better way. This is why there has been an
              increased demand for professionals who are specifically
              experienced in the domains of Data Science and Big Data Analytics.
              The increased demand has made this one of the highest-paying
              career options in recent times and the trend is likely to continue
              for a long time. So, it definitely is a secure career choice.
            </p>
          </div>
          <div className="section">
            <h3>
              Key Highlights- Online and Distance MCA in Data Science and Big
              Data Analytics
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Following are some of the key facts about the online and distance
              MCA in Data Science and Big Data Analytics course.
            </p>
          </div>
          {/* <div className="section">
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
          </div> */}

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
            <img src={AdmissionProcedure} alt="admin" className="w-100 mt-5" />

            <img src={elegibilty} alt="admin" className="w-100 mt-5" />
            <div className="container py-3 text-center">
              <p>
                Here is a common procedure to take admission in the distance MCA in  <br></br>Data Science and
              Big Data Analytics
              </p>
              <img src={StepA} alt="admin" className="mw-100 mt-5" />
              <img src={StepB} alt="admin" className=" w-100 mt-5" />
            </div>
          </div>

          <div className="section">
            <h3>
              Fees- Online and Distance MCA in Data Science and Big Data
              Analytics
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              The fee for the online and distance MCA in Data Science and Big
              Data Analytics course is different for different universities. The
              difference is due to the kind of facilities and curriculum that
              the universities offer may differ. However, there is not a big
              difference. So, the average fee for the online and distance MCA in
              Data Science and Big Data Analytics program lies in the range of
              INR 1-1.6 lacs for the entire duration of the course.
            </p>
          </div>
          <div className="section">
            <h3>
              Duration- Online and Distance MCA in Data Science and Big Data
              Analytics
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              MCA is a postgraduate program and is generally for a duration of 2
              years. Few universities however offer this course in 3 years
              duration. In the online and distance mode, the minimum duration of
              this course is 2 years and the maximum duration is 4 years. The
              extra 2 years are for students to clear all their exams, in case
              they couldn’t for any reason. This flexibility is offered in the
              online and distance mode only.
            </p>
          </div>
          <div className="section">
            <h3>
              Eligibility- Online and Distance MCA in Data Science and Big Data
              Analytics
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              MCA is a professional postgraduate course and so not everybody can
              take admission to it and especially when you talk about the data
              science and big data analytics specialization. You must fulfill
              the following eligibility criteria:
            </p>
            <li>
              The candidate must have a bachelor’s degree in BCA or B.Sc in
              Computer Science/ Information Technology.{" "}
            </li>
            <li>
              The candidate must have secured at least 45% marks or an
              equivalent grade in the undergraduate degree.{" "}
            </li>
            <li>
              The candidate must have pursued the UG degree from a recognized
              higher education institution.{" "}
            </li>
          </div>
          <div className="section">
            <h3>
              Syllabus- Online and Distance MCA in Data Science and Big Data
              Analytics
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              The basic syllabus for the online and distance MCA in data science
              and big data analytics course is as follows:
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>Computer Organization & Architecture</li>
                    <li>Data Communication & Computer Networks</li>
                    <li>Data Structures with Algorithms</li>
                    <li>Mathematical Foundation for Computer Applications</li>
                    <li>Operating System and Unix Shell Programming</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Design and Analysis of Algorithms </li>
                    <li>Java Programming</li>
                    <li>Python for Data Science </li>
                    <li>Relational Database Management System </li>
                    <li>Statistical Methods in Decision Making </li>
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
                    <li>Advanced Web Technologies </li>
                    <li>Application Development using Python </li>
                    <li>Data Mining </li>
                    <li>Data Visualization </li>
                    <li>SQL for Data Science </li>
                    <li>Elective Subject </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>Applied Analytics- Marketing, Web, Social Media </li>
                    <li>Predictive Analytics Using Machine Learning </li>
                    <li>Text Mining </li>
                    <li>Time Series Analytics </li>
                    <li>Elective Subject</li>
                    <li>Project</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Quarter 5</p>
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
                  <p className="Semester-right sam-back">Quarter 6</p>
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
          </div> */}

          <div className="section">
            <h3>
              Career Scope- Online and Distance MCA in Data Science and Big Data
              Analytics
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Big Data is a big part and parcel of our lives now and will remain
              the same in the future as well. We are bound to work with some
              sort of data in whatever we do in our day-to-day lives. All of
              this data is recorded and used to derive business solutions for
              better functionality and profits. Data Science and Big Data
              Analytics are therefore two such domains of the IT sector that are
              not going to go out of work as long as there is data in this
              world. So, the scope of a career in this field is definitely great
              and worth going forward for.
            </p>
            <p>
              Following are some of the companies where you can easily get jobs
              after pursuing the online MCA in Data Science and Big Data
              Analytics course:
            </p>

            <div className="section mt-1" id="Semester">
              <div className="container p-0">
                <div className="row my-0 g-0">
                  <ul className="mb-0">
                    <li className="text-center fw-bold">
                      Job Roles after Online & Distance MCA in data science and
                      big data analytics
                    </li>
                  </ul>
                  <div className="col-md-6">
                    <ul className="p-0 ">
                      <li>Data Analyst </li>
                      <li>Data Scientist </li>
                      <li>Business Analyst </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="p-0 ">
                      <li> Data Engineer </li>
                      <li>Data Architect </li>
                      <li>Software Engineer </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="section pt-4">
              <h3>
                Salary After Online and Distance MCA in Data Science and Big
                Data Analytics
              </h3>
              <span className="m-0 p-0">
                <img src={line_h} className="img-fluid" alt="Hrm page image" />
              </span>
              <p>
                The jobs that you get after pursuing the online and distance MCA
                in data science and big data analytics course are quite
                high-paying and the salaries increases enormously as your
                experience in the field increases.
              </p>

              <div>
                <p>
                  Following are the job roles and their respective average
                  salaries:{" "}
                </p>

                <div className="section mt-1" id="Semester">
                  <div className="container p-0">
                    <div className="row my-0 g-0">
                      <ul className="mb-0">
                        <li className="text-center fw-bold">
                          Salary After Online & Distance MCA in data science &
                          big data analytics
                        </li>
                      </ul>
                      <div className="col-md-6">
                        {/* <p className="Semester-left sam-back">Job Role </p> */}
                        <ul className="p-0 ">
                          <li className="text-center fw-bold">Job Role </li>
                          <li>Data Analyst </li>
                          <li>Data Scientist </li>
                          <li>Data Engineer </li>
                          <li>Business Analyst </li>
                          <li>Software Engineer </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul className="p-0 ">
                          <li className="text-center fw-bold">
                            {" "}
                            Average Salary{" "}
                          </li>
                          <li>INR 5,00,000/- </li>
                          <li>INR 9,00,000/-</li>
                          <li>INR 9,00,000/-</li>
                          <li>INR 6,50,000/-</li>
                          <li>INR 6,50,000/-</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="section">
              <h3>
                Admission Procedure- Online and Distance MCA in Data Science and
                Big Data Analytics
              </h3>
              <span className="m-0 p-0">
                <img src={line_h} className="img-fluid" alt="Hrm page image" />
              </span>
              <p>
                Following is the step-wise procedure for getting admission to
                the online and distance MCA in data science and big data
                analytics course.
              </p>
              <p>
                <span className=" fw-bold">Step 1-</span> The first step is to
                go to the official website of the university.{" "}
              </p>
              <p>
                <span className=" fw-bold">Step 2-</span> Now register yourself
                by providing basic info like name, email address, and phone
                number.
              </p>
              <p>
                <span className=" fw-bold">Step 3-</span> Now apply to your
                course by filling out the application form.{" "}
              </p>
              <p>
                <span className=" fw-bold">Step 4-</span> Upload all the
                documents then pay the fees and submit the form.{" "}
              </p>
              <p>
                <span className=" fw-bold">Step 5-</span> The university will
                send an admission confirmation mail with details of all further
                communication.{" "}
              </p>
            </div> */}

            
          </div>
          <div className="section">
            <h3>
              Top Universities- Online and Distance MCA in Data Science and Big
              Data Analytics
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Some of the top universities that offer online and distance
              courses in MCA in data science and big data analytics are:
            </p>
            <li>Hindustan Centre for Online and Distance Education (CODE)</li>
            <li>Vignan University </li>
            <li>Jain University Online</li>
          </div>
          <div className="section">
            <h3>How To Choose The Right University? </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              For a particular course, there are a few differences in each
              university whether in terms of fee structure, curriculum, teaching
              pedagogy, course material, LMS, etc. Also, not all universities
              are government-approved, so, consider the following before taking
              any decision:
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

          <div className="section">
            <h3>Summing Up! </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The online and distance MCA in data science and big data analytics
              course is one of the best PG-level courses for students looking
              forward to a career in the IT industry. The future scope of this
              career is vast as the industry is growing and expanding at an
              enormous pace. The online and distance mode allows you to pursue
              such a course at a very cost-effective fee structure, so, it is
              definitely a great choice for all the IT enthusiasts out there. If
              you are looking for a university to pursue this course from, then
              visit Distance Pathshala where you can find only approved and
              authentic online universities offering this course.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">  Data Science and Big Data Analytics FAQs</h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
              Is the online MCA in data science and big data analytics course valid? 
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Yes, if you pursue the online and distance MCA in data science and big data analytics from a UGC-DEB approved university, then the course is completely valid.  
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
              Which jobs can I get after an online MCA in data science and big data analytics? 
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              After completing the online and distance MCA in data science and big data analytics course, you are eligible for several job profiles like data scientist, data engineer, data analyst, data architect, business analyst, software engineer, and more. 
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              What is the fee structure for an online MCA in data science and big data analytics course? 
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The average fee for the online and distance MCA in data science and big data analytics course lies in the range of INR 1,00,000 to 1,60,000/- for the complete course. 
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
              What is the total duration of the online MCA program? 
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The minimum duration for the online and distance MCA programs is 2 years and the maximum duration is 4 years.  
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>
              Which are the top recruiters for graduates of online MCA in data science and big data analytics course? 
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Some of the top companies that recruit graduates of online MCA in data science and big data analytics degree program are- Accenture, TCS, Tech Mahindra, Infosys, Cognizant, Deloitte, IBM, Microsoft, and Capgemini.   
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
