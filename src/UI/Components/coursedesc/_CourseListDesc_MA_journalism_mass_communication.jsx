import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Journalism from "../../../assets/images/MA/Journalism.png";
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
      <img src={Journalism} alt="hr Management" className="w-100" />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <h3>
              Why should you choose MA in journalism and mass communication?
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              If you are looking forward to building a career in media, films,
              radio, newspapers then doing MA in journalism and mass
              communication will be a perfect option. This course is a real
              career booster for those individuals. In online and distance mode,
              individuals can get in-depth knowledge of editing, reporting,
              writing, advertising, radio and a lot more. Most importantly, in
              recent times, the importance of journalism and mass communication
              has increased worldwide.
            </p>
          </div>

          <div className="section">
            <h3>Offer career options upon graduation</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              After completing the course, the students can choose to work in
              several fields. Since today’s world rely so much on the media,
              aspirants have tremendous opportunities to make a good career in
              this field. This degree can open so many doors because it can be
              applied in almost every mass media opportunity.
            </p>
          </div>

          <div className="section">
            <h3>It is a medium for landing more paying jobs</h3>
            <p>
              With this course, you will have abounding opportunities in ad
              agencies, print media, broadcasting media, and a lot more. Also,
              individuals can work as independent filmmakers, a copywriter,
              broadcasters and in other fields.
            </p>
          </div>

          <div className="section">
            {/* <h3>Admission Procedure Of Online/Distance</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            It is 2 years postgraduate degree that can be done by anyone who completed an undergraduate degree from any recognized college or university. Getting admission is a smooth process just you need to choose a college. Individuals with 55% aggregate marks in bachelor's can apply for it. 
            </p> */}
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
                Here is a common procedure to take admission in the distance MA
                in <br></br>journalism and mass communication.
              </p>
              <img src={StepA} alt="admin" className="mw-100 mt-5" />
              <img src={StepB} alt="admin" className=" w-100 mt-5" />
            </div>
          </div>

          <div className="section">
            <h3>Course subject</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              MA in journalism and mass communication is a two years course and
              its syllabus is divided into 4 semesters. Every subject is
              designed by experts in the field to help students to meet the
              industrial requirements. The course helps the aspirants to get
              in-depth knowledge related to the field.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li> History of Media</li>
                    <li>Introduction to Journalism </li>
                    <li>Communication Theories and Practices </li>
                    <li>New Media Studies and Digital Journalism</li>
                    <li>Advertising: Theory & Practice</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li> Public Relations  </li>
                    <li>Editorial Practices</li>
                    <li>News Reporting</li>
                    <li>Media Laws & Ethics</li>
                    <li>Corporate Communications</li>
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
                    <li> Radio and Television: Theory & Practice</li>
                    <li>Print Media: Theory & Practice</li>
                    <li>Media and Gender</li>
                    <li>Audio-Visual Communication</li>
                    <li>Communication Research</li>
                    <li>Open Elective Course</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li> Development Communication </li>
                    <li>Film and Documentary Appreciation</li>

                    <li>Media Management</li>
                    <li>Media & Culture Studies </li>
                    <li>Cross-Functional Elective Course</li>
                    <li>Project</li>
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
          </div>
          <div className="section mt-1" id="Semester">
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

          <div className="section">
            <h3>How to choose the right university?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Doing MBA from a renowned university is impactful from a career
              perspective. Before you go for admission in online and distance
              you must be aware of the right place to apply. Consider these
              points while looking for a college or university
            </p>

            <div className="row mt-4">
              <span className="m-0 p-0">
                <img src={choose} className="img-fluid" alt="Hrm page image" />
              </span>
            </div>
          </div>
          <div className="section pt-4">
            <h3>Career Opportunities </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            After completion of this course, students can find many jobs with a handsome salary. This course
opens an ample opportunity for the aspirants. After completing this course individuals can be:
            </p>
            {/* <li> Writer </li>     
<li> Anchor  </li>
<li> Journalist  </li> 
<li> Film Maker   </li>
<li> Public Relations Officer  </li>
<li> Marketing Operations Specialist   </li>
<li>Communication Manager  </li> 
<li>  Social Media Executive  </li>
<li> Education and Communication officer </li> 
<li> Radio Jockey </li> 
<li>Sound Technician  </li>  */}

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
            In this course, individuals can get an in-depth knowledge of many skills that are required in the
industry. MA in journalism and mass communication is a popular course, however, ensure to
choose the right universities based on your requirements.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">HR Management FAQ</h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
                Can any science graduate pursue an Online and Distance MBA in HR
                Management?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Yes, graduates with the stream will be eligible for an Online
                and Distance MBA in MBA General even non-commerce students also.{" "}
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
                {" "}
                Is the CAT score important for taking admission in Online and
                Distance MBA in HR Management?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                May or may not as it totally varies from college to college as
                per their policy but you can read out the course prospectus from
                their official website
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
                What is the average fee for an Online and Distance MBA in HR
                Management?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The average fee for an online and Distance MBA in MBA General
                can lie between 3 lacs to 10lacs
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
                Is pursuing Online and Distance MBA in HR Management worthy for
                the future
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Yes, it is a good decision for those who intend to make a great
                career as Talent and people management
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div> */}
    </>
  );
}
