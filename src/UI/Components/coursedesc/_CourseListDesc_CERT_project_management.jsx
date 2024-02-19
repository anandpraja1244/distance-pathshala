import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import hr_Manage from "../../../assets/images/MA/history.jpg";
import line_h from "../../../assets/images/process/Line.png";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/MBA/Datascience/M1.svg";
import StepB from "../../../assets/images/msc/stepA.png";
import StepA from "../../../assets/images/msc/stepB.png";
import course from "../../../assets/images/MBA/HR/course.svg";
import choose from "../../../assets/images/MBA/choose.svg";
import Common from "../../../assets/images/MBA/HR/Career.svg";
import Accordion from "react-bootstrap/Accordion";
import Header from "../_Header";
import Footer from "../_Footer";
export default function CourseListDesc() {
  return (
    <>
      <Header />

      <Helmet>
        <title>
          Online & Distance MBA In HR Management colleges in India | Distance
          Pathshala
        </title>
        <meta
          name="description"
          content="Get the Best Online and Distance MBA in HR Management distance learning colleges/University in India. Distance Pathshala is Best option to advance your career."
        />
        <meta name="keywords" content="MBA In HR Management  colleges" />
      </Helmet>

      {/* <h1>Stragic HR</h1> */}

      <Searchform />
      <img src={hr_Manage} alt="hr Management" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>
              Why Should You Choose Online and Distance Certificate in Project
              Management?
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Project Management is a profession that is one of the highest-paid
              in current times. However, to reach that level, you need expertise
              and experience. This certification helps you a lot in gaining that
              expertise as you will be able to understand the techniques and the
              tools used in project management. After completing this course you
              will have the expertise to effectively manage various forms of
              projects like public, information systems, business, engineering,
              energy, construction, and transportation. The scope is vast and
              the monetary benefits are incredible, so it definitely is a great
              course to pursue, especially for working professionals.
            </p>
          </div>

          <div className="section">
            <h3>
              Key Highlights- Online and Distance Certificate in Project
              Management
            </h3>
            <p>
              Following are some of the key facts about the online and distance
              certificate in project management.
            </p>
            <div className="section mt-1" id="Semester">
              <div className="container p-0">
                <div className="row my-0 g-0">
                  <ul className="mb-0">
                    <li className="text-center fw-bold">
                      Key Highlights for Online & Distance Certificate in
                      Project Management
                    </li>
                  </ul>
                  <div className="col-md-6 col-6">
                    {/* <p className="Semester-left sam-back">Job Role </p> */}
                    <ul className="p-0 ">
                      <li>Average Fee </li>
                      <li>Duration </li>
                      <li>Minimum Eligibility </li>
                      <li>Admission Procedure</li>

                      <li className="">Job Opportunities</li>
                    </ul>
                  </div>
                  <div className="col-md-6 col-6">
                    <ul className="p-0 ">
                      <li>INR 40,000 - 50,000/- </li>
                      <li>Up to 6 months </li>
                      <li>10+2 </li>
                      <li>Online </li>

                      <li>
                        Project Manager, Team Leader, Project Risk Manager,
                        Project Quality Manager, Project Cost Estimator
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
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
                Here is a common procedure to take admission in the Distance MA
                in
                <br></br>History
              </p>
              <img src={StepA} alt="admin" className="mw-100 mt-5" />
              <img src={StepB} alt="admin" className=" w-100 mt-5" />
            </div>
          </div>

          <div className="section">
            <h3>Fees- Online and Distance Certificate in Project Management</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              The exact fees for the online and distance certificate in project
              management will be different for different universities. However,
              the average total fee for this certification program is in between
              the range of INR 40,000 to 50,000 for the complete program.
            </p>
          </div>
          <div className="section">
            <h3>
              Duration- Online and Distance Certificate in Project Management{" "}
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              The general total duration is 6 months for the online and distance
              certificate in project management. But it totally depends upon the
              university to change the duration of the program as per their own
              curriculum.
            </p>
          </div>
          <div className="section">
            <h3>
              Eligibility- Online and Distance Certificate in Project Management
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              The minimum eligibility requirement for admission to an online and
              distance certificate in project management is that the candidate
              must have successfully passed the class 12th board examinations or
              equivalent in any stream and from a recognized institution of
              education.
            </p>
          </div>
          <div className="section">
            <h3>
              Syllabus- Online and Distance Certificate in Project Management
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              The general syllabus for the online and distance certificate in
              project management is as follows.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row my-0 g-0">
                <ul className="mb-0">
                  <li className="text-center fw-bold">
                    Syllabus for Online & Distance Certificate in Project
                    Management
                  </li>
                </ul>
                <div className="col-md-6">
                  {/* <p className="Semester-left sam-back">Job Role </p> */}
                  <ul className="p-0 ">
                    <li>Introduction to Project Management </li>
                    <li>Project Cost Estimation</li>
                    <li>Project Life Cycle and Initiation </li>
                    <li>Project Scheduling </li>
                    <li>Project Planning and Scope </li>
                    <li>Risk Analysis of Projects </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="p-0 ">
                    <li> Project Monitoring- Time & Cost Evaluation </li>
                    <li>Project Commissioning & Closure </li>
                    <li>Project Quality Management</li>
                    <li>Project Supply Chain Management</li>
                    <li>Six Sigma and Project Management</li>
                    <li>Project Management Software (MS Project)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="section">
            <h3>Other Online/distance MBA course specializations </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
          </div> */}
          {/* <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <span className="m-0 p-0">
                  <img
                    src={course}
                    className="img-fluid"
                    alt="Hrm page image"
                  />
                </span>
              </div>
            </div>
          </div> */}

          <div className="section pt-4">
            <h3>
              Career Scope- Online and Distance Certificate in Project
              Management{" "}
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Professional education in project management opens several doors
              for you in terms of career as the scope is quite vast. Project
              management roles pay you really well once you have reached
              high-level positions. With good experience and the knowledge of
              the right tools and techniques, this field becomes one of the
              highest-paying. Project Management definitely is a secure career
              choice.
            </p>
            <p>
              Given below are some of the top job roles that you can get after
              pursuing an online and distance certificate in project management.
            </p>
            <div className="section mt-1" id="Semester">
              <div className="container p-0">
                <div className="row my-0 g-0">
                  <ul className="mb-0">
                    <li className="text-center fw-bold">
                      Job Roles after Online & Distance Certificate in Project
                      Management
                    </li>
                  </ul>
                  <div className="col-md-6">
                    <ul className="p-0 ">
                      <li>Project Manager</li>
                      <li>Project Risk Manager</li>
                      <li>Project Cost Estimator </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="p-0 ">
                      <li> Team Leader </li>
                      <li>Project Quality Manager </li>
                      <li>Engineering Administrator </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="section mt-1" id="Semester">
              <div className="container p-0">
                <div className="row my-0 g-0">
                  <ul className="mb-0">
                    <li className="text-center fw-bold">
                      Job Roles after Online & Distance MA in History{" "}
                    </li>
                  </ul>
                  <div className="col-md-6">
                    <ul className="p-0 ">
                      <li>Historical Research Writer</li>
                      <li>Historian </li>
                      <li>Civil Service Administrator </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="p-0 ">
                      <li> History Professor </li>
                      <li>Historical Research Assistant </li>
                      <li>Journalist </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="section">
              <h3>Salary After Online and Distance MA in History </h3>
              <span className="m-0 p-0">
                <img src={line_h} className="img-fluid" alt="Hrm page image" />
              </span>
              <p>
                The online and distance MA in History helps you get some really
                high-paying jobs as most of them are related to research,
                academics, and writing, and hence pay you well. A few of the
                many job roles and their average salaries are mentioned in the
                table below.
              </p>
            </div>
            <div className="section mt-1" id="Semester">
              <div className="container p-0">
                <div className="row my-0 g-0">
                  <ul className="mb-0">
                    <li className="text-center fw-bold">
                      Salary After Online & Distance MA in History
                    </li>
                  </ul>
                  <div className="col-md-6">
                    {/* <p className="Semester-left sam-back">Job Role </p> */}
                    <ul className="p-0 ">
                      <li className="text-center fw-bold">Job Role </li>
                      <li>Historical Research Writer </li>
                      <li>Historian </li>
                      <li>Civil Service Administrator </li>
                      <li>History Professor </li>
                      <li>Historical Research Assistant </li>
                      <li>Journalist </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="p-0 ">
                      <li className="text-center fw-bold"> Average Salary </li>
                      <li> INR 4,00,000/- </li>
                      <li>INR 12,00,000/- </li>
                      <li>INR 15,00,000/-</li>
                      <li>INR 10,00,000/-</li>
                      <li>INR 6,00,000/-</li>
                      <li>INR 4,00,000/-</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="container text-center mt-4">
              <img src={Common} className="img-fluid" alt="Hrm page image" />
            </div> */}
          </div>
          <div className="section">
            <h3>
              Admission Procedure- Online and Distance Certificate in Project
              Management
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Given below is the admission procedure for online and distance
              certificate in project management applicable across a maximum of
              the online and distance universities.
            </p>
            <p>
              <span className="fw-bold">Step 1-</span>Go to the official website
              of the university where you are taking admission.
            </p>
            <p>
              <span className="fw-bold">Step 2-</span> First register yourself
              with personal details like name, phone number, and email ID.
            </p>
            <p>
              <span className="fw-bold"> Step 3-</span> NNow apply to the course
              by filling out the application form.
            </p>
            <p>
              <span className="fw-bold"> Step 4-</span> Upload all the required
              documents, pay the fees, and then submit the form.
            </p>
            <p>
              <span className="fw-bold"> Step 5-</span> The university will send
              you an admission confirmation email.
            </p>
          </div>
          <div className="section">
            <h3>
              Top Universities- Online and Distance Certificate in Project
              Management
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              NMIMS is one of the top universities that is currently offering
              this online and distance certificate in project management. NMIMS
              has been recognized by UGC-DEB and is one of India’s top
              B-schools.
            </p>
          </div>
          {/* <div className="section">
            <h3>How To Choose The Right University? </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Different universities offer different types of facilities and so
              you must be careful to choose the university that offers the
              facilities that you particularly want. It is very important to
              choose the right university for your higher education. Consider
              the following before taking this crucial decision.
            </p>
          </div> */}
          <div className="section">
            <h3>Summing Up! </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The online and distance certificate in project management will
              help you hone your skills for effective project management. At the
              end of this certification program, you will be able to automate
              and streamline the project management process using the right
              tools and techniques. However, you must choose the right
              university to pursue this course to get the right exposure. You
              must visit Distance Pathshala to find out the right university
              that is government-approved and offers the best-in-class education
              and facilities.
            </p>
          </div>
        </div>
      </div>

      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">
            Online and Distance Certificate in Project Management FAQs
          </h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
                Is an online certificate in project management even valid?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Yes, the online certificate in project management is completely
                valid as long as you pursue it from a higher education
                institution that is UGC-DEB recognized.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
                What is the fee for an online certificate in project management?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The average fee structure for the online certificate in project
                management lies within the range of INR 40,000 to 50,000 for the
                entire duration of the course.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
                What is the duration of the online certificate in project
                management?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The duration for an online and distance certificate in project
                management is up to 6 months.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
                What are the jobs after pursuing an online certificate in
                project management?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                After completing the online certificate in project management,
                you can work in job profiles like project manager, team leader,
                project risk manager, project quality manager, project cost
                estimator, engineering administrator, and more.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>
                Which is the best online university for the online certificate
                in project management?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                NMIMS is one of the best universities for an online and distance
                certificate in project management. NMIMS has been recognized by
                UGC-DEB and is one of India’s top B- schools.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <Footer />
    </>
  );
}
