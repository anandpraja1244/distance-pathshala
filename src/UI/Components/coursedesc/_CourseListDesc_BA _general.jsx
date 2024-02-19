import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Banking from "../../../assets/images/BA/GENEREAL/G.svg";
import line_h from "../../../assets/images/process/Line.png";
import Common from "../../../assets/images/BA/GENEREAL/Common.svg";
import Rankings from "../../../assets/images/process/rankings.png";
import Content from "../../../assets/images/process/content.png";
import Accordion from "react-bootstrap/Accordion";
import Structure from "../../../assets/images/process/structure.png";
// import Career_Opportunities from "../../../assets/images/BBA/BF/Career.svg";
import Searchform from "../../Pages/searchform";

export default function CourseListDesc() {
  const [collegeName, setCollegeName] = useState("");
  return (
    <>
      <Helmet>
        <title>
          BBA Banking and Finance Distance Education universities in India |
          Distane Pathshala
        </title>
        <meta
          name="description"
          content="– Learn the functionality of financial and banking in the Distance learning banking and finance course at Distance Pathshala. Learn today to become a better person tomorrow."
        />
        <meta name="keywords" content="distance learning banking and finance" />
      </Helmet>

      <Searchform />
      <div className="container mt-3 hrm">
        <div className="row">
          <div className="col-md-4 hrm-img">
            <img src={Banking} className="img-fluid" alt="" />
          </div>
          <div className="col-md-8 py-4 hrm-text">
            <h3>
              Online and Distance BA in <span> BA General </span>
            </h3>

            <p>
              A Bachelor of Arts, in general, is one of the most popular degrees
              in the humanities and social science domain. This popular course
              has a vast collection of subjects covering different aspects of
              human life, society, government, polity, etc
            </p>
            <p>
              Subjects like history, geography, politics, and economics will
              give you knowledge about the country and its socio-economic
              conditions. Psychology, home science, and sociology will give a
              glimpse of how people think, their lifestyle, and society
              formulation. There are so many languages that scholars can choose
              to learn like, English, French, Hindi, and Sanskrit, even many
              regional languages are also available.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>Why should you choose online and distance BA in BA General?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="" />
            </span>
            <p>
              A numerous range of subjects can be offered online and distance BA
              in BA general whose value is the same as a regular degree. If you
              are stuck with something that hurdles in the journey of attending
              a regular degree then an online and distance BA is such a great
              opportunity. Many colleges are offering this course from a
              distance mode along with the required resources and study
              materials. The students can choose their subjects as per their
              interests and career path.
            </p>
            <p>
              You will allow studying a major and minor from the different
              subject lists.
            </p>
          </div>
          <div className="section">
            <h3>Explore Advanced Career Opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="" />
            </span>
            <p>
              This course offers a wide range of career opportunities as each
              subject has its own scope. After B.A. you can pursue masters in a
              particular subject will helps you more in choosing a field. This
              course works as the base for many jobs and advanced courses.
            </p>
          </div>
          <div className="section">
            <h3>Earn a High Salary</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="" />
            </span>
            <p>
              This degree will teach you skills that will allow you to receive a
              higher salary. After completing the course, the student can obtain
              the best level of employment with amazing and interesting
              benefits. After this course, you will be eligible for all
              government exams. You can work in advertising, community services,
              journalism banks or language interpreter, etc
            </p>
          </div>

          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="" />
            </span>
            <p>
              Online and distance BA in BA general is the degree of 3 years
              which has 6 semesters in total. The terms of being admitted are
              simple but you must be aware of the basic outline of the college
              you choose and the course you wish to apply to.
            </p>
            <div className="row mt-4">
              <div className="col-md-4">
                <ul className="stlye-none text-center d-flex">
                  <li className="eligibility">Eligibility</li>
                  <li className="eligibility-nd">10+2 Pass Out</li>
                </ul>
              </div>

              <div className="col-md-4">
                <ul className="stlye-none text-center d-flex">
                  <li className="eligibility">Duration</li>
                  <li className="eligibility-nd">Min 3 – Max 6 years</li>
                </ul>
              </div>

              <div className="col-md-4">
                <ul className=" stlye-none text-center d-flex">
                  <li className="eligibility">Approvals</li>
                  <li className="eligibility-nd">UGC | DEB | NAAC</li>
                </ul>
              </div>
            </div>

            <section className="bg-white mt-5 pt-3">
              <div className="container text-center mt-3">
                <img src={Common} className="img-fluid" alt="" />
              </div>
            </section>
          </div>

          <div className="section">
            <h3>Course Subjects</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="" />
            </span>

            <p>
              The course online and distance BA in BA general give you a chance
              to study two subjects as core and one you have to study as an
              elective course. You can choose which one you love to study as a
              core and which as an elective. The core subjects will provide
              in-depth knowledge and electives can be counted as skill
              enrichment.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left"> Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li> Introduction to Psychology</li>
                    <li>	 Classical Literature</li>
                    <li>Introduction to Mass Communication and Journalism</li>
                    <li>	 English - I</li>
                    <li> Psychology Lab - I</li>
                    <li> Additional Languages - Kannada, Hindi, English</li>
                    <li> Entrepreneurship Skills</li>
                    <li> Mind Management and Human Values I</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right"> Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li> Cognitive Psychology</li>
                    <li>	 Medieval and Renaissance Literature</li>
                    <li>Feature and Writing</li>
                    <li>	 English - II </li>
                    <li> Psychology Lab - II</li>
                    <li>Indian Constitution</li>
                    <li> Additional Languages - Kannada, Hindi, English</li>
                    <li>Mind Management and Human Values II</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left sam-back"> Semester 3</p>
                  <ul className="p-0 mt-1">
                    <li> Pre-Victorian to Pre-Modern Literature</li>
                    <li>Biological Processor & Behaviour</li>
                    <li>Reporting & Editing - Print Media</li>
                    <li>Emotional Intelligence / Conflict & Negotiation Skills</li>
                    <li>Mind Management and Human Values - III</li>
                    <li>Constitutional Values</li>
                    <li> Psychology Lab - III</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2"> Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li> Modern to Post-Truth Era Literature </li>
                    <li> Lifespan Development</li>
                    <li> Introduction to Audio-Visual Media</li>
                    <li> Recreation, Leisure & Sports Studies / Creative Non-Fiction / Human Rights</li>
                    <li>Research Methodology in Humanities & Social Sciences</li>
                    <li>Mind Management & Human Values - III</li>
                    <li>Environmental Studies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left"> Semester 5</p>
                  <ul className="p-0 mt-1">
                    <li>Gender and Literature</li>
                    <li> Psychological Disorders</li>
                    <li> Reporting and Editing II: Electronic Media</li>
                    <li> Introduction to Culture & Creative Industries / Tourism & Hospitality / Pedagogical Practices in Education</li>
                    <li>Mind Management & Human Values - V</li>
                    <li>	 Health Humanities / Environmental Humanities / Fiction in Films</li>
                    <li> Advertising and Public Relations / Media Management</li>
                    <li> Health Psychology / Sports Psychology / Positive Psychology / Community Psychology</li>
                    <li> Reporting and Editing II: Electronic Media</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back"> Semester 6</p>
                  <ul className="p-0 mt-1">
                    <li>Native Narratives</li>
                    <li> Social Psychology</li>
                    <li>Media, Law, and Ethics </li>
                    <li> Foundations of Artificial Intelligence / Digital Story Telling / Social Networking</li>
                    <li>Mind Management & Human Values - Vg</li>
                    <li> Homeland and diaspora / Language and Literature: Fundamentals of Language / Creative Writing</li>
                  <li> Development Communication / Business Journalism</li>
                  <li>Sports Journalism / Scientific Journalism</li>
                  <li>Internship</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <h3>How to choose the right university?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="" />
            </span>
            <p>
              Choosing the right college for online and distance BA in BA
              general is very important. The right institution has an impact on
              the quality of education. The points that need to be considered
              while choosing your university or college are as follow{" "}
            </p>

            <div className="row mt-4">
              <div className="col-md-4">
                <img src={Rankings} className="img-fluid" alt="" />
              </div>
              <div className="col-md-4">
                <img src={Content} className="img-fluid" alt="" />
              </div>

              <div className="col-md-4">
                <img src={Structure} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
          <div className="section pt-4">
            <h3>Career opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="" />
            </span>
            <p>
              After online and distance BA in BA general, many doors will open
              towards a bright future. You can be an author, social activist,
              psychologist, journalist, civil service aspirant, translator, or
              editor. It will depend on the subject you studied. But this single
              course makes you fit for many fields.
            </p>
 
          </div>
          <div className="section">
            <h3>Summing it up</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="" />
            </span>
            <p>
              There are bundles of opportunities after completing online and
              distance BA in BA general. You can choose any university as per
              your interests and needs. You can pursue the course with ease in
              your home and lifestyle.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">BA General FAQ</h1>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
                Are there entrance exams for online and distance BA in BA
                general?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Mostly there is no entrance but it varies from university to
                university. Universities can conduct their own entrance exams.
                You need to check their admission criteria
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
                Is this online and distance BA in BA general degree valid as a
                regular degree?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>Yes, it is equally as regular mode per UGC norms.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>How much it costs?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>The average cost of this course can be 2 lacs.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>What about study material and practicals?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The study material can be recorded in lectures, pdf, and books.
                And practical classes will be conducted at the study center.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>
                What is the process for the semester examination of
                Distance/Online BA?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Some colleges like to conduct CBT on their student portals
                whereas some colleges have their examinations center for
                commencement of exams.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
