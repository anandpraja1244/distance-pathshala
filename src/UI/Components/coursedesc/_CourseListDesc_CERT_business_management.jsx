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
            <h3>
              Why Should You Choose Online and Distance Certificate in Business
              Management?
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              An online and distance certificate in business management is a
              course that will definitely help you get an entry-level job. With
              this certificate, you can also prepare for a master’s degree in
              the same field or a senior job profile. There is a great demand
              for professionals in the field of Business Management as the
              industry is extremely vast. There is a need for business
              management professionals in every sector and industry. Therefore,
              it is a great choice in terms of career.
            </p>
          </div>

          <div className="section">
            <h3>
              Key Highlights- Online and Distance Certificate in Business
              Management
            </h3>

            <div className="section mt-1" id="Semester">
              <div className="container p-0">
                <div className="row my-0 g-0">
                  <ul className="mb-0">
                    <li className="text-center fw-bold">
                      Key Highlights for Online &amp; Distance Certificate in
                      Business Management
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
                      <li>INR 40,000 - 50,000/-</li>
                      <li>Upto 6 months</li>
                      <li>10+2 </li>
                      <li>Online </li>

                      <li>
                        Business Development Manager, Sales Executive/Manager,
                        Project Manager, Business Strategy Manager, Human
                        Resource Advisor, Project Manager,
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
            <h3>
              Fees- Online and Distance Certificate in Business Management
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              The total fee for the online and distance certificate in Business
              Management varies from university to university. However, on an
              average, the total fee lies between the range of INR 40,000 to
              50,000/- for the complete course.
            </p>
          </div>
          <div className="section">
            <h3>
              Duration- Online and Distance Certificate in Corporate
              Communications
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              The online and distance certificate in Business Management is for
              a duration of up to 6 months. This duration may vary for different
              universities in case they have a different curricula. However, the
              general duration for this certification program is 6 months.
            </p>
          </div>
          <div className="section">
            <h3>
              Eligibility- Online and Distance Certificate in Business
              Management
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              The minimum eligibility to get admission in the online and
              distance certificate in Business Management is that the candidate
              must have successfully passed their class 12th examination or
              equivalent in any stream from a recognized board of education.
            </p>
          </div>
          <div className="section">
            <h3>
              Syllabus- Online and Distance Certificate in Business Management
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              The basic syllabus for the online and distance certificate in
              Business Management program is as follows:
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row my-0 g-0">
                <ul className="mb-0">
                  <li className="text-center fw-bold">
                    Syllabus for Online &amp; Distance Certificate in Business
                    Management
                  </li>
                </ul>
                <div className="col-md-6">
                  <ul className="p-0 ">
                    <li>Business Economics </li>
                    <li>Information Systems for Managers</li>
                    <li>Organizational Behavior</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="p-0 ">
                    <li>Financial Accounting &amp; Analysis </li>
                    <li>Marketing Management</li>
                    <li>Organizational Behavior</li>
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
              Career Scope- Online and Distance Certificate in Business
              Management
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The online and distance certificate in Business Management program
              when done under the right guidance and from the right place, then
              gives you a good edge over others in the industry. There is a lot
              of scope once you start working in the industry, as there are many
              growth opportunities in this field.
            </p>
            <p>
              Following are some of the job roles that you can get after
              completing this certificate course in business management:
            </p>
            <div className="section mt-1" id="Semester">
              <div className="container p-0">
                <div className="row my-0 g-0">
                  <ul className="mb-0">
                    <li className="text-center fw-bold">
                      Job Roles after Online &amp; Distance Certificate in
                      Business Management
                    </li>
                  </ul>
                  <div className="col-md-6">
                    <ul className="p-0 ">
                      <li>Business Development Manager</li>
                      <li>Marketing Executive</li>
                      <li>Human Resource Executive</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="p-0 ">
                      <li> Business Strategy Manager </li>
                      <li>Sales Executive</li>
                      <li>Project Manager</li>
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
            {/* <div className="section">
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
            </div> */}
            {/* <div className="section mt-1" id="Semester">
              <div className="container p-0">
                <div className="row my-0 g-0">
                  <ul className="mb-0">
                    <li className="text-center fw-bold">
                      Salary After Online & Distance MA in History
                    </li>
                  </ul>
                  <div className="col-md-6">
                    <p className="Semester-left sam-back">Job Role </p>
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
            </div> */}
            {/* <div className="container text-center mt-4">
              <img src={Common} className="img-fluid" alt="Hrm page image" />
            </div> */}
          </div>
          <div className="section">
            <h3>
              Admission Procedure- Online and Distance Certificate in Business
              Management
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Below given is the step-wise admission procedure for the online
              and distance certificate in business management.
            </p>
            <p>
              <span className="fw-bold">Step 1-</span>Go to the official website
              of the university to which you are getting admitted.
            </p>
            <p>
              <span className="fw-bold">Step 2-</span>First register with your
              name, phone number, and email ID.
            </p>
            <p>
              <span className="fw-bold"> Step 3-</span> Apply to the course of
              your choice by filling out the application form.
              <p />
              <span className="fw-bold"> Step 4-</span>Upload all the documents
              that are mentioned and pay the fees.
            </p>
            <p>
              <span className="fw-bold"> Step 5-</span>Now submit the form and
              then the university will send you an admission confirmation.
            </p>
          </div>
          <div className="section">
            <h3>
              Top Universities- Online and Distance Certificate in Business
              Management
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Currently, NMIMS is one of the best universities that is offering
              an online and distance certificate in Business Management. The
              university has been recognized by UGC-DEB and hence all their
              online courses are valid for jobs across all sectors.
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
              There is no doubt that an online and distance certificate in
              business management is a great short-term course to help you grow
              better in your career. The scope of a career in this field is
              quite vast with a lot of varied job opportunities in several
              sectors. However, you must pursue this course from the right place
              so that you get the right guidance, which is very important in
              this field. Find the right university for your choice of course
              easily at Distance Pathshala where you will find only
              government-approved universities and all their information that is
              authentic.
            </p>
          </div>
        </div>
      </div>

      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">
            Online and Distance Certificate in Business Management FAQs
          </h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>Is an online certificate in business management valid?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Absolutely, the online and distance certificate in business
                management is totally valid but only and only if you pursue it
                from a university that is UGC-DEB approved.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
                What is the total fee for the online certificate in business
                management?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The average fee structure for the online certificate in business
                management is in the range of INR 40,000 to 50,000 for the
                complete course.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
                What is the duration of the online certificate in business
                management?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The online and distance certificate in Business Management is
                for a duration of up to 6 months. This duration may vary for
                different universities in case they have a different curricula.
                However, the general duration for this certification program is
                6 months.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
                Which type of jobs can I get after pursuing an online
                certificate in business management?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                After completing the online and distance certificate in business
                management, you can get jobs in the roles like Business
                Development Manager, Business Strategy Manager, Marketing
                Executive, Sales Executive, Project Manager, Human Resource
                Executive, and more.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>
                Which university provides the online certificate in business
                management?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                NMIMS is one of the top universities that offer an online
                certificate in business management which is completely valid for
                jobs across all sectors.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
