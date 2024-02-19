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
              Why Should You Choose Online and Distance Certificate in Social
              Media, Content Marketing & Digital Marketing Analytics?
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Digital Marketing and especially social media and content
              marketing have seen a sudden surge in recent times. There is so
              much more to social media marketing than what it looks like from
              the outside. With this course, you learn to interpret search
              analytics, website analytics, email analytics, social media
              analytics, and performance analytics. You get to understand the
              difference in various platforms and how o devise marketing
              strategies accordingly. This course will expose you to several
              frameworks like analytics-driven decision-making and how to create
              content that is valuable, engaging, and shareable. So, if you are
              interested in social media, then it is a great chance for you to
              build a career in the same. This course is great for freshers as
              well as working professionals.
            </p>
          </div>

          <div className="section">
            <h3>
              Key Highlights- Online and Distance Certificate in Social Media,
              Content Marketing &amp; Digital Marketing Analytics
            </h3>
            <p>
              Given below are some of the key factors about the online and
              distance certificate course in social media, content marketing,
              and digital marketing analytics.
            </p>
            <div className="section mt-1" id="Semester">
              <div className="container p-0">
                <div className="row my-0 g-0">
                  <ul className="mb-0">
                    <li className="text-center fw-bold">
                      Key Highlights for Online & Distance Certificate in Social
                      Media, Content Marketing, and Digital Marketing Analytics
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
                      <li>INR 50,000 - 60,000/-</li>
                      <li> 6 months </li>
                      <li>10+2 </li>
                      <li>Online </li>

                      <li>
                        Digital Marketing Manager, Performance Marketing
                        Manager, Digital Marketing Analyst, Digital Marketing
                        Specialist, Content Manager, Social Media Manager
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
              Fees- Online and Distance Certificate in Social Media, Content
              Marketing & Digital Marketing Analytics
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              The fee structure for this course will vary for different
              universities. This is because this field is vast and the
              universities might have different course structures. Depending on
              the tools taught and other facilities offered, the fee will vary.
              The average fee, however, lies in the range of INR 40,000 to
              60,000 for the complete program.
            </p>
          </div>
          <div className="section">
            <h3>
              Duration- Online and Distance Certificate in Social Media, Content
              Marketing & Digital Marketing Analytics
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              The total duration again depends on the university and the course
              structure they follow. Generally, the total duration for this
              online and distance certification program is 6 months. Since this
              is an online and distance program, the duration is flexible and
              many universities offer some extra time to complete the program.
            </p>
          </div>
          <div className="section">
            <h3>
              Eligibility- Online and Distance Certificate in Social Media,
              Content Marketing &amp; Digital Marketing Analytics
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              Following are the eligibility criteria for admission to the online
              and distance certificate in social media, content marketing, and
              digital marketing analytics:
            </p>
            <li>
              {" "}
              You must have passed 10+2 from a recognized board in any stream.
            </li>
            <li>
              You are also eligible if you have passed class 10th and you have
              at least 2 years of work experience.
            </li>
            <li>
              You are eligible if you have a bachelor’s degree in any stream
              from a recognized university.
            </li>
          </div>
          <div className="section">
            <h3>
              Syllabus- Online and Distance Certificate in Social Media, Content
              Marketing &amp; Digital Marketing Analytics
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              Following is the basic syllabus for this online and distance
              certificate program:
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row my-0 g-0">
                <ul className="mb-0">
                  <li className="text-center fw-bold">
                    Syllabus for Online &amp; Distance Certificate in Social
                    Media, Content Marketing &amp; Digital Marketing Analytics
                  </li>
                </ul>
                <div className="col-md-6">
                  {/* <p className="Semester-left sam-back">Job Role </p> */}
                  <ul className="p-0 ">
                    <li>Introduction to Social Media </li>
                    <li>Mimic Social Simulation</li>
                    <li>Organic Social Media Platforms Content Strategy </li>
                    <li>Paid Social Media Campaign Management </li>
                    <li>
                      Personal Brand Management &amp; Influencer Marketing{" "}
                    </li>

                    <li>
                      Metrics, Dimensions, KPIs, and Interpretation for POEM
                      Media{" "}
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="p-0 ">
                    <li>
                      {" "}
                      Introduction to Digital Marketing Analytics, Digital
                      Consumer, and Consumer Data
                    </li>
                    <li>Decision Optimization and Data Visualization</li>
                    <li>Data Technologies and Marketing Data Platforms</li>
                    <li>Measurement Model &amp; Data-driven
Decisions</li>
                    <li>Mimic Digital Marketing Analytics Simulation</li>
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
            Career Scope- Online and Distance Certificate in Social Media,
Content Marketing &amp; Digital Marketing Analytics
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            This online certificate in social media, content marketing, and digital marketing analytics is a
boon for freshers as they are eligible for entry-level jobs with this certification alone. You do
not mandatorily need prior work experience or a specific degree to get the job. Social Media
and Digital Marketing are vast fields with enormous scope in the future to come. The industry
is growing at an exponential rate and is generating newer job opportunities every day.
            </p>
            <p>
            Following are some of the top jobs that you can get after pursuing the online certificate in
social media, content marketing, and digital marketing analytics: 
            </p>
            <div className="section mt-1" id="Semester">
              <div className="container p-0">
                <div className="row my-0 g-0">
                  <ul className="mb-0">
                    <li className="text-center fw-bold">
                    Job Roles after Online &amp; Distance Certificate in Social Media, Content Marketing, &amp;

Digital Marketing Analytics
                    </li>
                  </ul>
                  <div className="col-md-6">
                    <ul className="p-0 ">
                      <li>Digital Marketing Manager</li>
                      <li>Digital Marketing Analyst</li>
                      <li>Content Manager</li>
                      <li>Blogger</li>
                      <li>Copywriter</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="p-0 ">
                      <li> Performance Marketing Manager </li>
                      <li>Digital Marketing Specialist</li>
                      <li>Social Media Manager</li>
                      <li>SEO Manager</li>
                      <li>Marketing and Automation Specialist</li>
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
            Admission Procedure- Online and Distance Certificate in Social
Media, Content Marketing &amp; Digital Marketing Analytics
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Following is the step-wise procedure for admission to this certification program.
            </p>
            <p>
              <span className="fw-bold">Step 1-</span>Go to the official website of the online university where you are getting admission.
            </p>
            <p>
              <span className="fw-bold">Step 2-</span> Register yourself using your name, contact number, and email address.
            </p>
            <p>
              <span className="fw-bold"> Step 3-</span> Fill out the application form to apply for the certificate course.
              <p />
              <span className="fw-bold"> Step 4-</span> Upload all the mentioned documents, pay the required fees, and submit the form.
            </p>
            <p>
              <span className="fw-bold"> Step 5-</span>You will get your admission confirmation and enrollment details via mail.
            </p>
          </div>
          <div className="section">
            <h3>
            Top Universities- Online and Distance Certificate in Social
Media, Content Marketing &amp; Digital Marketing Analytics
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            The best university to offer this certificate course is NMIMS. The university is approved and
recognized by UGC-DEB to provide online and distance courses. The university has one of
the best digital infrastructures in India.
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
            The online and distance certificate in social media, content marketing, and digital marketing
analytics is one of the finest short-term courses for freshers as it is a job-oriented course.
The future scope for a career in this field is magnificent as the industry is constantly growing
and expanding at a fast pace. So, it definitely is a great course and especially for freshers.
However, beware to choose the right platform to pursue this course. You can visit Distance
Pathshala and find the best online university to pursue this online certificate course.
            </p>
          </div>
        </div>
      </div>

      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">
          Online and Distance Certificate in Social Media, Content
Marketing & Digital Marketing Analytics FAQs
          </h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
              Is an online certificate in social media, content marketing, &amp; digital marketing
analytics valid for jobs?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Yes, the online certificate in social media, content marketing, and digital marketing
absolutely valid for jobs across all sectors but only when you pursue the course from
an online university that has been recognized by UGC-DEB.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
              What is the total fee for an online certificate in social media, content marketing,
&amp; digital marketing analytics?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The average fee structure lies in the range of INR 50,000 and 60,000 for the online
and distance certificate in corporate communications.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
              What is the duration of an online certificate in social media, content marketing,
&amp; digital marketing analytics?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              The total duration again depends on the university and the course structure they
follow. Generally, the total duration for this online and distance certification program
is 6 months.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
              Which jobs can I get after pursuing the online certificate in social media,
content marketing, &amp; digital marketing analytics?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              After pursuing the online and distance certificate in social media, content marketing,
and digital marketing analytics, you are eligible for the following job roles:
              </p>
            <li>  Digital Marketing Manager</li>
<li> Performance Marketing Manager</li>
<li>Digital Marketing Analyst</li>
<li>Digital Marketing Specialist</li>
<li> Content Manager</li>
<li> Social Media Manager</li>
<li> Blogger</li>

<li> SEO Manager</li>
<li> Copywriter</li>
<li> Marketing and Automation Specialist</li>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>
              Which university is the best for an online certificate in social media, content
marketing, &amp; digital marketing analytics?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              NMIMS is the best university for an online certificate in social media, content
marketing, and digital marketing analytics course.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
