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
              Why Should You Choose Online and Distance Certificate in Digital
              Marketing?
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Digital Marketing is one of the biggest industries in the
              Marketing and Advertising world today. All the big companies,
              whatever sector they belong to, spend tons on digital marketing.
              Why? Because the profits that digital marketing brings are
              incredible. Digital Marketing is a major market and offers many
              diverse career opportunities that are both lucrative and creative.
              The scope of a career in the field of Digital Marketing is great.
              You get to work on innovative and creative projects. So, if you
              are someone who has that creative and imaginative bent of mind and
              would like to work in an innovative environment, then digital
              marketing is surely what you’re looking for.
            </p>
          </div>

          <div className="section">
            <h3>
              Key Highlights- Online and Distance Certificate in Digital
              Marketing
            </h3>

            <div className="section mt-1" id="Semester">
              <div className="container p-0">
                <div className="row my-0 g-0">
                  <ul className="mb-0">
                    <li className="text-center fw-bold">
                      Key Highlights for Online &amp; Distance Certificate in
                      Digital Marketing
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
                      <li>INR 20,000 - 30,000/-</li>
                      <li>6-12 months</li>
                      <li>10+2 </li>
                      <li>Online </li>

                      <li>
                        Social Media Manager Digital Marketing Executive,
                        Content Creator, Copywriter, Brand Manager, Market
                        Research Expert, SEO Specialist,
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
            <h3>Fees- Online and Distance Certificate in Digital Marketing</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              The total fees for the online and distance certificate in digital
              marketing may vary a lot depending upon the university you choose
              to pursue it from or on the duration of the program. Since it is a
              certificate program, the duration and the curriculum are flexible
              which is why the total fees also vary. However, the average fee at
              some of the top universities is in the range of INR 20,000 to
              30,000 for the entire program.
            </p>
          </div>
          <div className="section">
            <h3>
              Duration- Online and Distance Certificate in Digital Marketing
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              The general duration of an online and distance certificate in
              digital marketing is 6 months. However, many certificate courses
              are for a duration of 1 year as well. The duration is not fixed
              and completely depends on the university.
            </p>
          </div>
          <div className="section">
            <h3>
              Eligibility- Online and Distance Certificate in Digital Marketing
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              Anybody who has completed their class 12th board examination or
              equivalent from any stream are eligible to apply for the online
              and distance certificate in digital marketing.
            </p>
          </div>
          <div className="section">
            <h3>
              Syllabus- Online and Distance Certificate in Digital Marketing
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              The syllabus of the online and distance certificate in digital
              marketing will vary depending on the university you get admitted
              to. However, the syllabus will revolve around the following
              topics.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row my-0 g-0">
                <ul className="mb-0">
                  <li className="text-center fw-bold">
                    Syllabus for Online &amp; Distance Certificate in Digital
                    Marketing
                  </li>
                </ul>
                <div className="col-md-6">
                  <ul className="p-0 ">
                    <li>Introduction to Digital Marketing</li>
                    <li>Search Engine Optimization (SEO)</li>
                    <li>Search Engine Marketing</li>
                    <li>Web Analytics</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="p-0 ">
                    <li>Website Planning and Creation</li>
                    <li>Social Media Marketing</li>
                    <li>Content Marketing & Strategies</li>
                    <li>Social Media Analytics</li>
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
              Career Scope- Online and Distance Certificate in Digital Marketing
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The online and distance certificate in Digital Marketing is a
              job-oriented certificate program. There is a big spectrum of job
              opportunities when it comes to a career in digital marketing. The
              industry is expanding at an exponential rate every day and so
              there are a plethora of open jobs in the industry.
            </p>
            <p>
              Following are some of the high-paying job roles that you can get
              after completing this certificate course in digital marketing:
            </p>
            <div className="section mt-1" id="Semester">
              <div className="container p-0">
                <div className="row my-0 g-0">
                  <ul className="mb-0">
                    <li className="text-center fw-bold">
                      Job Roles after Online &amp; Distance Certificate in
                      Digital Marketing
                    </li>
                  </ul>
                  <div className="col-md-6">
                    <ul className="p-0 ">
                      <li>Social Media Manager/Executive</li>
                      <li>Content Creator</li>
                      <li>Copywriter</li>
                      <li>Web/Social Media Analytics Specialist</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="p-0 ">
                      <li> Digital Marketing Manager/Executive </li>
                      <li>Content/Script Writer</li>
                      <li>SEO Specialist/Executive</li>
                      <li>Brand Manager</li>
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
              Admission Procedure- Online and Distance Certificate in Digital
              Marketing
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Following is the step-wise admission procedure for the online and
              distance certificate in digital marketing. This is the general
              admission procedure applicable to the maximum of the colleges,
              however, a few colleges might have a slightly different procedure.
            </p>
            <p>
              <span className="fw-bold">Step 1-</span>Visit the official website
              of the university where you are getting admitted.
            </p>
            <p>
              <span className="fw-bold">Step 2-</span>Register yourself with
              details like your name, phone number, and email ID.
            </p>
            <p>
              <span className="fw-bold"> Step 3-</span> Register yourself with
              details like your name, phone number, and email ID.
              <p />
              <span className="fw-bold"> Step 4-</span>Upload all the necessary
              documents followed by fee payment.
            </p>
            <p>
              <span className="fw-bold"> Step 5-</span>Submit the application
              form and then the university will revert with a confirmation.
            </p>
          </div>
          <div className="section">
            <h3>
              Top Universities- Online and Distance Certificate in Digital
              Marketing
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Currently, NMIMS and D.Y. Patil are two of the top universities
              that offer the online certificate in Digital Marketing. Both the
              universities are great universities and offer amazing digital
              infrastructures.
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
              The online and distance certificate in digital marketing is a
              great short-term course if you wish to build a career in marketing
              and advertising. The fee structure for the course is extremely
              pocket-friendly which makes it a great course in terms of ROI.
              This is because you are eligible for decent-paying jobs after
              pursuing this course at a minimum fee structure. However, you must
              choose your university wisely so that your certificate is valid.
            </p>
          </div>
        </div>
      </div>

      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">
            Online and Distance Certificate in Digital Marketing FAQs
          </h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>Is an online certificate in digital marketing valid?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Yes, the online certificate in digital marketing is completely
                valid as long as you pursue it from a UGC-DEB recognized
                university.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
                What is the fee for the online certificate in digital marketing?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The average fee structure for the online certificate in digital
                marketing is in the range of INR 20,000 to 30,000 for the entire
                course. The fee might vary with the duration of the course.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
                What is the duration of the online certificate in digital
                marketing?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The general duration of an online and distance certificate in
                digital marketing is 6 months. However, many certificate courses
                are for a duration of 1 year as well. The duration is not fixed
                and completely depends on the university.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
                Which jobs can I get after pursuing an online certificate in
                digital marketing?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                After pursuing the online certificate in digital marketing, you
                can go for job roles like social media manager/executive,
                content writer, copywriter, content creator, digital marketing
                executive/manager, brand manager, SEO specialist, and more.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>
                Where can I get the online certificate in digital marketing?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                NMIMS and DY Patil University are two of the top universities
                that offer the online certificate in digital marketing which is
                valid for jobs across all sectors.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
