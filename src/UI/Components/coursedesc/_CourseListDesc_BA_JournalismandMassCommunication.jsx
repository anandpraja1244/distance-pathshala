import React from "react";
import { Helmet } from "react-helmet";
import Adver from "../../../assets/images/BA/JMM/JMM.svg";
import DataGroup from "../../../assets/images/process/advergroup.png";
import line_h from "../../../assets/images/process/Line.png";
import Common from "../../../assets/images/BA/JMM/Common.svg";
import Rankings from "../../../assets/images/process/rankings.png";
import Content from "../../../assets/images/process/content.png";
import Structure from "../../../assets/images/process/structure.png";

import Accordion from "react-bootstrap/Accordion";
import Searchform from "../../Pages/searchform";
export default function CourseListDesc() {
  return (
    <>
      <Helmet>
        <title>
          Distance/Correspondence BBA in Advertising colleges in India | Distane
          Pathshala
        </title>
        <meta
          name="description"
          content="– Get a rewarding skill from an expert at Distance branding and advertising colleges. Be the earliest to become a brand."
        />
        <meta
          name="keywords"
          content="distance branding and advertising colleges"
        />
      </Helmet>
      <Searchform />
      <div className="container mt-3 hrm">
        <div className="row">
          <div className="col-md-4 hrm-img">
            <img src={Adver} className="img-fluid" alt="" />
          </div>
          <div className="col-md-8 py-4 hrm-text">
            <h3>
              Online and Distance BA in
              <span> Journalism and Mass Media</span>
            </h3>

            <p>
              The online and distance training degree in journalism and mass
              communication is one of the finest BA programs since it allows
              students to pursue a career in which they might oversee the
              finances of global organizations. Prestigious institutions provide
              a BA in journalism and mass communication that may be done online,
              on-campus, or through distance learning. This course is ideal for
              those interested in mass communication theories, including history
              and models, print journalism, advertising, photography,
              television, and radio production and writing, convergence
              journalism, social media, and public relations.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>Why should you choose BA in Journalism and Mass Media?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="" />
            </span>
            <p>
              Students who complete this course will possess strong managerial
              and creative skills. Students who complete the course successfully
              should be eligible for a range of positions in major news
              organizations. With the aid of the course's simple study plan and
              already-recorded online lectures, you may study at your own pace.
              Candidates who complete the program successfully might find
              employment in several profitable industries.
            </p>
          </div>
          <div className="section">
            <h3>Examine Profession Opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="" />
            </span>
            <p>
              In this course, candidates may learn about a variety of lucrative
              employment categories. The goal of this course is to help you
              develop the necessary skill set. There are career chances in
              digital media because it is a new technology.
            </p>
          </div>
          <div className="section">
            <h3>Earn a High Salary</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="" />
            </span>
            <p>
              With the knowledge you get from this degree, you will be able to
              increase your income. Candidates will ultimately be qualified
              journalists with competitive salaries. The student will be able to
              land the best job with fantastic benefits after completing the
              program..
            </p>
          </div>

          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="" />
            </span>
            <p>
              A three-year distance learning program with semester lengths of
              six months must be completed by candidates for the BA in
              Journalism and Mass Communication. You must be aware of several
              qualifying conditions before you register for enrollment
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
              students who enroll in the distance learning and online BA in
              Journalism and Mass Communication learn about various facets of
              journalism and the media. The online undergraduate BA in
              Journalism and Mass Communication program is a three-year,
              six-semester curriculum. This curriculum also covers topics
              including radio, television, print, new media, and other topics.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left"> Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li> Introduction to Mass Communication</li>
                    <li> National & International Issues & Affairs</li>
                    <li> Fundamentals of Print Media</li>
                    <li>Media and Society </li>
                    <li> Universal Human Values, Ethics, and Life</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right"> Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Mass Media Industry & Management</li>
                    <li>	 Media Laws & Ethics</li>
                    <li> Interview Principles & Practices</li>
                    <li>Mobile Journalism</li>
                    <li>  Communication Skills</li>
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
                    <li>	 Fundamentals of TV Journalism</li>
                    <li>	 Fundamentals of Radio Journalism</li>
                    <li> Development Communication</li>
                    <li> Environmental Science, Waste & Disaster Management</li>
                    <li>  Universal Human Values, Ethics, and Life Skills-2</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2"> Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li> Fundamentals of Public Relations</li>
                    <li>  Fundamentals of Advertising</li>
                    <li>	 Digital Media</li>
                    <li>Media Literacy</li>
                    <li> Entrepreneurship</li>
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
                    <li> Media Research</li>
                    <li>	 Investigation Journalism</li>
                    <li>  Print Design & Visualization</li>
                    <li>Social Media Content & Marketing</li>
                    <li> Creative Advertising </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back"> Semester 6</p>
                  <ul className="p-0 mt-1">
                    <li>Cultural Communication </li>
                    <li> Dynamics of Newsroom</li>
                    <li>  Integrated Marketing Communication</li>
                    <li>  Capstone Project</li>
                    <li>------</li>
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
              Choosing the appropriate college is essential if you want to
              pursue a BA in Journalism and Mass Communication. Consider the
              following aspects while selecting the best institution.
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
              Students who complete this distance learning BA in Journalism and
              Mass Communication program successfully are eligible to apply to
              MBA programs in the same field to advance their careers or to
              submit job applications in this field. Jobs in finance and
              accounting are available, including those as a reporter,
              sub-editor, journalist, columnist, new editor, feature writer,
              proofreader, and others.
            </p>
      
          </div>
          <div className="section">
            <h3>Summing it up</h3>
            <p>
              This subject is offered by many different universities. Those who
              desire to work in journalism and mass communication are advised to
              enroll in this online and distance learning BA program.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">Journalism and Mass Communication FAQ</h1>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
                What is the duration of an online BA in Journalism and Mass
                Communication?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                A three-year online BA in Journalism and Mass Communication
                degree has a typical program-like curriculum
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
                Is an online BA in Journalism and Mass Communication a valid
                course?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The University Grants Commission has authorized this course,
                thus it is legitimate.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
                Does an online BA in Journalism offer value or considered
                valuable by recruiters?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Live sessions, assignments, projects, and evaluations help you
                gain both academic and practical knowledge in your online BA in
                Journalism and Mass Communication program.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>How can I take admitted to this online program?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                After completing the online application form, the institution
                will examine your application. You must pay the academic fee to
                the university to book your seat after receiving confirmation
                from the school.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>
                How much do I need to pay to pursue an online BA in Journalism
                and Mass Communication?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                An online BA in Journalism and Mass Communication typically
                costs between Rs. 1-3 Lakhs in tuition.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
