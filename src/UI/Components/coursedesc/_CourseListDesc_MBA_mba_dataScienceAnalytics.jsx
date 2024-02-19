import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Mr_management from "../../../assets/images/MBA/buismanag.png";
import line_h from "../../../assets/images/process/Line.png";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/MBA/Datascience/M1.svg";
import StepB from "../../../assets/images/msc/stepA.png";
import StepA from "../../../assets/images/msc/stepB.png";
import course from "../../../assets/images/MBA/Business/course.svg";
import choose from "../../../assets/images/MBA/choose.svg";
import Common from "../../../assets/images/MBA/Business/Career.svg";
import Rankings from "../../../assets/images/process/rankings.png";
import Content from "../../../assets/images/process/content.png";
import Structure from "../../../assets/images/process/structure.png";
import Accordion from "react-bootstrap/Accordion";
export default function CourseListDesc() {
  return (
    <>
      <Helmet>
        <title>
          Online & Distance MBA In Adertising and branding colleges in India |
          Distance Pathshala
        </title>
        <meta
          name="description"
          content="Get the Best Online and Distance MBA in Adertising and branding distance learning colleges/University in India. Distance Pathshala is Best option to advance your career."
        />
        <meta
          name="keywords"
          content="MBA In Adertising and branding colleges"
        />
      </Helmet>
      {/* <h1>buisness management</h1>
      <h1>market and hr not</h1> */}

      <Searchform />
      <img
        src={Mr_management}
        alt="MBA in Adertising and branding Distance University"
        className="w-100"
      />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>
              Why Should You Choose Online and Distance MBA in Data Science and
              Analytics Management
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The data science and analytics industry is surely one of the most
              prosperous one currently. 2.5 quintillion bytes of data is
              generated every day in the world and this number is growing at a
              rapid pace. This has in turn increased the need for managing this
              data and hence the need for data science. There are a lot of IT
              professionals in India but the country still lacks professionals
              specializing in data science and analytics domain. The demand for
              data science professionals is extremely high in India, so a career
              in data science and analytics in any job profile is definitely
              worth considering.
            </p>
          </div>

          <div className="section">
            <h3>
              Key Highlights- Online and Distance MBA in Data Science and
              Analytics Management
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Know the key factors about the online and distance MBA in data
              science and analytics management course from the table below.
            </p>
          </div>

          <div className="section">
            <h3>
              {" "}
              Fees- Online and Distance MBA in Data Science and Analytics
              Management
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              The exact fee structure is different for every university
              depending upon factors like the facilities offered, the digital
              infrastructure, the curricula, and whether the university is
              government or private. On an average, the total fee for the online
              and distance MBA in data science and analytics management lies in
              the range of INR 1,00,000 to 3,00,000/- for the complete course.
            </p>
          </div>
          <div className="section">
            <h3>
              Duration- Online and Distance MBA in Data Science and Analytics
              Management
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              The online and distance MBA in Data Science and Analytics
              Management is a post graduate course so the minimum duration of
              the program is 2 years. And since this is an online and distance
              course, you get the benefit of extra two years. So the maximum
              duration is 4 years.
            </p>
          </div>
          <div className="section">
            <h3>
              Eligibility- Online and Distance MBA in Data Science and Analytics
              Management
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              Following are the general eligibility criteria for admission to
              the online and distance MBA in data science and analytics
              management course:
              <li>
                The candidate must have a bachelor’s degree in any stream from a
                recognized university.
              </li>
              <li>
                The candidate must have secured at least 45% marks in their
                graduation.
              </li>
              <li>Working professionals must have relevant work experience.</li>
            </p>
          </div>
          <div className="section">
            <h3>
              Syllabus- Online and Distance MBA in Data Science and Analytics
              Management
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              The general syllabus for the online and distance MBA in data
              science and analytics management course is as follows:
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>Accounting and Finance </li>
                    <li>Managerial Effectiveness and Ethics </li>
                    <li>Organizational Behavior & Human Resource Management</li>
                    <li>Principles of Economics & Markets </li>
                    <li>Quantitative Techniques & Analytics </li>
                    {/* <li>Information Systems for Managers</li> */}
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Data Wrangling & Exploratory Data Analysis</li>
                    <li>Entrepreneurship </li>
                    <li>Marketing Management & Research </li>
                    <li>Statistics for Decision Making </li>
                    <li>Python for Data Science </li>
                    {/* <li>Decision Science</li> */}
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
                    <li> Business Analytics </li>
                    <li>Business Environment & Strategy </li>
                    <li>Data Analytics using Excel </li>
                    <li>Data Visualization </li>
                    <li>Operations Management </li>
                    {/* <li>International Business</li> */}
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>AI for Business </li>
                    <li>Predictive Analytics using Machine Learning </li>
                    <li>SQL for Data Science </li>
                    <li> Web & Social Media Analytics </li>
                    <li>Elective Courses & Project</li>
                    {/* <li>Project</li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <h3>Other Online/distance MBA course specializations </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
          </div>

          <div className="section">
            <h3>
              Admission Procedure- Online and Distance MBA in Data Science and
              Analytics Management
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Given below is the step-wise admission procedurefor the online and
              distance MBA in data science and analytics management course.
            </p>
            <p>
              <span className="fw-bold">Step 1 - </span> Go to the official
              website of the university where you are taking admission.
            </p>
            <p>
              <span className="fw-bold">Step 2 - </span>First register and then
              login to apply for the course.
            </p>
            <p>
              <span className="fw-bold">Step 3 - </span> Fill out the
              application form and upload all the required documents.
            </p>
            <p>
              <span className="fw-bold">Step 4 - </span>Pay the fees and submit
              the form
            </p>
            <p>
              <span className="fw-bold">Step 5 - </span>Now wait for your
              admission confirmation email which will have your enrollment
              details.
            </p>
          </div>
          <div className="section">
            <h3>
              Top Universities- Online and Distance MBA in Data Science and
              Analytics Management
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Some of the best universities that provide the online and distance
              MBA in data science and analytics management course are:
            </p>
          </div>
          <div className="section">
            <h3>How To Choose The Right University? </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Each and every university has their own unique set of facilities.
              Not all of them will offer you the same services. So, you must
              choose the university based on the services you particularly need.
              You must consider the following factors before choosing the online
              university for your online and distance MBA in data science and
              analytics management course:
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
            <h3>
              Salary After Online and Distance MBA in Data Science and Analytics
              Management
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              The online and distance MBA in data science and analytics
              management course will get you managerial-level jobs in MNCs and
              top IT corporations with fairly good salary packages. Following
              table lists the average base salary offered to the job roles in
              this field.
            </p>
          </div>
          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <ul>
                  <li className="text-center">
                    Salary after Online & Distance MBA in data science &
                    analytics management
                  </li>
                </ul>
                <div className="col-md-6">
                  <p className="Semester-left text-center">Job Role </p>

                  <ul className="p-0 mt-1">
                    <li>Business Development Manager </li>
                    <li>Data & Advertising Administrator </li>
                    <li>Risk Analyst </li>
                    <li>Project Manager </li>
                    <li>Data Analyst </li>
                    {/* <li>Information Systems for Managers</li> */}
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right text-center">Salary </p>
                  <ul className="p-0 mt-1">
                    <li>INR 6,09,716/- </li>
                    <li>INR 5,08,682/- </li>
                    <li>INR 5,55,161/- </li>
                    <li>INR 16,61,453/-</li>
                    <li>INR 4,87,805/- </li>
                    {/* <li>Decision Science</li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="section pt-4">
            <h3>
              Career Scope- Online and MBA in Data Science and Analytics
              Management{" "}
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Big Data is growing day by day and so is our dependence on it. The
              industry is expanding rapidly and so there is definitely great
              demand for experienced management professionals who also have some
              domain knowledge of data science and analytics.
            </p>
            <p>
              The career scope after this course is incredible as you get job
              opportunities in top corporate companies and MNCs that offer
              handsome salary packages. Some of the top companies that hire
              graduates of this course are:
            </p>
            <p>
              Following table lists some of the popular job roles that you can
              get after online and distance MBA in data science and analytics
              management.
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
              The online and distance MBA in data science and analytics
              management course is a great course in terms of career
              opportunities. This course is specially a wonderful opportunity
              for all those IT professionals who wish to now grow their career
              in management roles. The course fee is quite pocket-friendly but
              the salary that you will receive in jobs after this course is
              fairly good. This is why, this course is one of the best in terms
              of ROI. however, you must be careful in selecting the right
              college that is UGC-DEB approved otherwise your online degree will
              not stand valid.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">
          FAQs- Online and Distance MBA in Data Science and Analytics Management  
          </h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
              Is the online MBA in data science and analytics management course government-approved? 
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Yes, the online MBA in data science and analytics management course is government-approved but only when you pursue it from government recognized universities. So, your university must be UGC-DEB approved for your online degree to be valid.   
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
              Which jobs can I get after an online MBA in data science and analytics management? 
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              You can get the following job roles after pursuing an online MBA in data science and analytics management course- project manager, data analyst, risk analyst, business development manager, and data administrator. 

              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              What is the fee structure for an online MBA in data science and analytics management course? 
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The average fee for the online and distance MBA in data science and analytics management course lies in the range of INR 1,00,000 to 3,00,000/- for the complete course. 

              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
              Is B.Tech compulsory for admission in online MBA in data science and analytics management program? 

              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              No, B.Tech is not compulsory. The minimum eligibility is that you must have a bachelor’s degree in any stream to get admission to the online and distance MBA in data science and analytics management program.  

              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>
              Where can I get a job with a degree in online MBA in data science and analytics management? 

              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Some of the top companies where you can get a job with a degree in online and distance MBA in data science and analytics management are- Amazon, IB, TCS, Accenture, Infosys, LinkedIn, and Cognizant.   
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
