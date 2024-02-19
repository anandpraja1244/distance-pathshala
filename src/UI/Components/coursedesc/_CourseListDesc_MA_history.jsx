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
export default function CourseListDesc() {
  return (
    <>
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
            <h3>Why Should You Choose Online and Distance MA in History?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              MA in History is one of the most pursued postgraduate courses in
              the Arts stream. If you are someone who has a keen interest in
              subjects like ancient civilizations and the culture of India and
              of several regions across the world, then this is just the right
              course for you. The best part is that you can pursue this course
              while doing your job at the same time because it is in the online
              and distance mode that offers you the flexibility to pursue other
              things along with studying this course. This course is also a
              great option for all the aspirants of Civil Services and other
              competitive exams. This course opens a lot of diverse career
              opportunities for you with well-reputed and high-paying positions.
            </p>
          </div>

          {/* <div className="section">
            <h3>Explore Advanced Career Opportunities </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            With the degree, online and distance in MBA in HR Management you will be there to the firm to right and productive workforce which can help it to grow in the competitive world. You can apply for the post of HR manager, talent acquisition manager, etc
            </p>
          </div> */}

          <div className="section">
            <h3>Key Highlights- Online and Distance MA in History </h3>
            <p>
              Following are the important factors about the online and distance
              MA in History.
            </p>
            <div className="section mt-1" id="Semester">
              <div className="container p-0">
                <div className="row my-0 g-0">
                  <ul className="mb-0">
                    <li className="text-center fw-bold">
                      Key Highlights for Online & Distance MA in History
                    </li>
                  </ul>
                  <div className="col-md-6 col-6">
                    {/* <p className="Semester-left sam-back">Job Role </p> */}
                    <ul className="p-0 ">
                      <li>Average Fee </li>
                      <li>Duration </li>
                      <li>Eligibility </li>
                      <li>Admission Procedure </li>
                      <li>Average Salary </li>
                      <li className="">Job Opportunities</li>
                    </ul>
                  </div>
                  <div className="col-md-6 col-6">
                    <ul className="p-0 ">
                      <li>INR 60,000 - 1,00,000/- </li>
                      <li>2-4 years </li>
                      <li>Graduation in any stream </li>
                      <li>Online </li>
                      <li>INR 3-7 LPA </li>
                      <li>
                        Teaching ,Writing , Editing , Research , Journalism
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
            <h3>Fees- Online and Distance MA in History</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              The exact fees for the online and distance MA in History will be
              different for different universities as each of them have their
              own unique fee structure. On an average, the total fee is in
              between the range of INR 60,000 to 1,00,000/- for the online and
              distance MA in History degree course.
            </p>
          </div>
          <div className="section">
            <h3>Duration- Online and Distance MA in History </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              Since this is an online course, there is flexibility in the
              duration of the course as well. Accordingly, the minimum duration
              for the online and distance MA in History is 2 years while the
              maximum duration for the same is 4 years.
            </p>
          </div>
          <div className="section">
            <h3>Eligibility- Online and Distance MA in History</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              The eligibility criteria for the online and distance MA in History
              is as follows:
            </p>
            <div>
              <li>
                {" "}
                The candidate must have a bachelor’s degree in any stream and
                relevant subjects with at least 45% marks.{" "}
              </li>
              <li>
                The candidate must have pursued their bachelor’s degree from a
                recognized university/institution.{" "}
              </li>
              <li>
                There are no entrance exams but the universities have the right
                to conduct screening tests if needed.{" "}
              </li>
            </div>
          </div>
          <div className="section">
            <h3>Syllabus- Online and Distance MA in History</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              The basic syllabus for the online and distance MA in History is
              given in the table below. It is almost the same for all
              universities. There can be only minute differences in topics,
              otherwise, it is all the same.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li> Fundamentals of Research </li>
                    <li>History of India up to AD 650</li>
                    <li> History of India from 1757 AD to 1857 </li>
                    <li>Polity and Economy of India from 1200 AD to 1750 AD</li>
                    {/* <li> Management Accounting </li>
                    <li> ----</li> */}
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li> History of India 1858-1964 AD </li>
                    <li>History of India from 650-1200 AD </li>
                    <li>Society and Culture of India 1200 AD- 1750 AD</li>
                    <li> Generic Elective Subject I</li>
                    {/* <li> Marketing Management</li>

                    <li> Management Information system</li> */}
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
                    <li>Economic History of India from 1757 AD to 1947 AD </li>
                    <li>History of Modern Europe from 1795 AD to 1870 AD</li>
                    <li>Women in Indian History </li>
                    <li>Generic Elective Subject II</li>
                    {/* <li>Organization Culture </li>
                    <li>Compensation & Benefits </li> */}
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li> Twentieth Century World </li>
                    <li>Generic Elective Subject III</li>
                    <li>Generic Elective Subject IV </li>
                    {/* <li> Business Ethics, Governance & Risk </li>
                    <li> Research Methodology </li> */}
                    <li>-----</li>
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
            <h3>Career Scope- Online and Distance MA in History </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              There are myths that online degrees in the Arts stream are not
              good for the career. But that is not at all the case. If you are
              interested in your subject and you study and complete the course
              properly, then there are a number of great career opportunities
              waiting for you.
            </p>
            <div>
              Some of the top companies that hire graduates of the MA in History
              course are:
              <li>World Health Organization (WHO) </li>
              <li>JP Morgan </li>
              <li>BBC</li>
              <li>Thomson Reuters </li>
              <li>Dechert </li>
              <li>Barclays </li>
            </div>
            <p>
              Following are some of the popular job roles that you can get after
              online and distance MA in History degree.{" "}
            </p>
            <div className="section mt-1" id="Semester">
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
            </div>
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
            <h3>Admission Procedure- Online and Distance MA in History</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Following is the step-wise procedure for admission to the online
              and distance MA in History program.
            </p>
            <p>
              <span className="fw-bold">Step 1-</span> Visit the official
              website of the university where you are taking admission.{" "}
            </p>
            <p>
              <span className="fw-bold">Step 2-</span> You first have to
              register by filling few details like name, contact number, and
              email.
            </p>
            <p>
              <span className="fw-bold"> Step 3-</span> Now, fill out the
              application form by clicking on the Apply Now tab.{" "}
            </p>
            <p>
              <span className="fw-bold"> Step 4-</span> Upload the required
              documents, pay the fees, and then submit the form.{" "}
            </p>
            <p>
              <span className="fw-bold"> Step 5-</span> You will receive an
              admission confirmation email with your student enrollment
              credentials.{" "}
            </p>
          </div>
          <div className="section">
            <h3>Top Universities- Online and Distance MA in History</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The Aligarh Muslim University (AMU Online) and Lovely Professional
              University (LPU Online) are two of the top universities in India
              among others that offer online and distance MA in History PG
              degree courses.
            </p>
          </div>
          <div className="section">
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
          </div>
          <div className="section">
            <h3>Summing Up! </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The online and distance MA in History is a great course for
              students, especially the ones with an Arts background. This
              postgraduate course is an ideal choice for those willing to give
              competitive exams like Civil Services, SSC-CGL, banks, etc. Apart
              from these exams, this course prepares you for jobs in sectors
              like research, academics, journalism, writing, and teaching
            </p>
          </div>
        </div>
      </div>

      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi"> Online and Distance MA in History FAQs</h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>Is the online MA in History course government-approved?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Yes, the online and distance MA in History is a
                government-approved course but only when pursued from a
                university that is UGC-DEB recognized.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
                Can I get a job after completing an online MA in History course?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Yes, there are various fields where you can get a job after
                pursuing the online and distance MA in History. Some of the top
                job roles are- History Professor, Historical Research Assistant,
                Historical Research Writer, Civil Service Administrator,
                Historian, Journalist, and Research Officer.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>What is the fee for an online MA in History course?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The average total fee for the online and distance MA in History
                course is between the range of INR 60,000 to 1,00,000/- for the
                entire program.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
                What is the eligibility for the online MA in History course?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The minimum eligibility requirement for admission to an online
                and distance MA in History is that the applicant must have a
                bachelor’s degree in any stream with at least 45% marks and the
                degree must be from a recognized university/institute.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>What is the duration of an online MA in History course?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                For the online and distance MA in History course, the minimum
                duration is 2 years while the maximum duration is 4 years.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
