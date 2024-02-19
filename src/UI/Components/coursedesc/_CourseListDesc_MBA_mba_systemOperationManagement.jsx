import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import operation from "../../../assets/images/MBA/operation.png";
import line_h from "../../../assets/images/process/Line.png";
import AdmissionProcedure from "../../../assets/images/msc/AdmissionProcedure.svg";
import elegibilty from "../../../assets/images/msc/10th.svg";
import StepB from "../../../assets/images/msc/stepA.png";
import StepA from "../../../assets/images/msc/stepB.png";
import new_firem from "../../../assets/images/msc/new_firem.png";
import Common from "../../../assets/images/msc/CareerOppor.svg";
import Rankings from "../../../assets/images/process/rankings.png";
import Content from "../../../assets/images/process/content.png";
import Structure from "../../../assets/images/process/structure.png";
import Accordion from "react-bootstrap/Accordion";
export default function CourseListDesc() {
  return (
    <>
      <Helmet>
        <title>
          Online & Distance MBA In System and Operations Management colleges in
          India | Distance Pathshala
        </title>
        <meta
          name="description"
          content="Get the Best Online and Distance MBA in  System and Operations Management distance learning colleges/University in India. Distance Pathshala is Best option to advance your career."
        />
        <meta
          name="keywords"
          content="MBA In  System and Operations Management colleges"
        />
      </Helmet>

      {/* <h1>Finance Management MARKET not</h1> */}

      <Searchform />
      <img
        src={operation}
        alt="MBA in System and Operations Management Distance University"
        className="w-100"
      />

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section">
            <div>
              <p className="mb-3">
                Online and Distance MBA in System and Operations Management is
                an adjustable course. Here this course curriculum mainly
                involves and looks at all the key elements of an ongoing
                business in its best potential manner. It is examined by
                recasting raw materials and human resources into the actual
                product which shall reach its customer. The students can study
                subjects like Operations Management, Production Management,
                Logistics, Supply Chain Management, Inventory Control,
                Production Planning & Control, Operations Strategy, etc.
              </p>
              <li>
                The effectiveness of this online course is that it instructs the
                entire operational process that takes place as smoothly as
                imaginable in the least quantity of time with the optimum cost
                to the association.
              </li>
              <li>
                As you go through this online and distance, MBA in System and
                Operations Management the mastership of operations coupled with
                methods will get along with you.{" "}
              </li>
              <li>
                This Online MBA program will help you gain insight into
                technology administration and its linkage to better business
                judgments.
              </li>
            </div>
            <h3>
              Why should you choose an online and distance MBA in System and
              Operations Management?{" "}
            </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              There are an enormous amount of universities that offer online and
              distance MBA in System and Operations Management whose value is
              the exact as a regular offline degree. Multiple universities are
              offering this course from a distance mode along with the required
              help and study materials. Even if you are in a job or balancing
              your life then this online & distance MBA is best for you. The
              students are free to pick their subjects as per their interests
              and professional path
            </p>
          </div>

          <div className="section">
            <h3>Explore Advance Career Options</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              In the era of rapid technological growth and change in online
              inventions, this course in systems and procedures will train one
              to build expert understanding and experienced people to work in
              the digital world of societies. The distribution and established
              production needs to get more organizational ability, to study and
              become a master of management one should get admission in the
              online and distance MBA in system and operations management.
            </p>
          </div>

          {/* <div className="section">
            <h3>Earn a High Salary </h3>
            <p>
              Using the knowledge you acquire from this degree, you might
              increase your wage. Individuals will ultimately be capable of
              working as brand managers, product managers, sales executives,
              merchandisers, etc. The student would be able to land the best job
              with fantastic benefits after completing the program.
            </p>
          </div> */}
          {/* <div className="section">
            <h3>Eligibility Criteria </h3>
      
           <li>Bachelor’s degree from a recognized university with at least 55% or more in their graduation.</li>
<li>There is no entrance exam needed for most of the universities providing MBA in Fintech Management course. However, if there is any entrance exam candidates must have to pass.</li>


          </div> */}

          <div className="section">
            <h3>Admission Procedure Of Online/Distance</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              If you are looking to take admission to the online MBA in System
              and Operations Management then you need to understand that:
            </p>
            <li>
              {" "}
              You must have a Graduation degree in any stream is basically
              represented by a recognized university with a minimum of 50%
              marks.
            </li>
            <li>
              {" "}
              The duration of an MBA in Systems and Operations Management is 2
              years and the maximum duration is 4 years. But you need to pass
              all the subjects examination.{" "}
            </li>
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
                Here is a common procedure to take admission in the Distance MBA
                in
                <br></br>System and Operations Management
              </p>
              <img src={StepA} alt="admin" className="mw-100 mt-5" />
              <img src={StepB} alt="admin" className=" w-100 mt-5" />
            </div>
          </div>

          <div className="section">
            <h3>Course Outline</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            <p>
              The degree of distance and online MBA in System and Operations
              Management gives a huge scope of interesting topics for the
              students. These subjects not only create up the academic base but
              also help in getting valuable practical understanding in detail.
            </p>
          </div>

          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>Principles and Practice of Management </li>
                    <li>Management Economics </li>
                    <li>Accounting & Finance </li>
                    <li>Organizational Behaviour </li>
                    <li>Business Law </li>
                    <li>Management Accounting</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Production/Operation Management </li>
                    <li>Financial Management</li>
                    <li>Human Resource Management</li>
                    <li>Marketing Management</li>
                    <li>Management Information system </li>
                    {/* <li>Decision Science </li> */}
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
                    <li>Business Environment & Strategy </li>
                    <li>Operations Management </li>

                    <li>Information Technologies in SCM </li>
                    <li>Total Quality Management </li>
                    <li>Lean and Six Sigma</li>
                    <li>Elective</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right sam-back2">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li> Data Mining & Visualization</li>
                    <li> E-business Technologies </li>
                    <li> Strategic Sourcing & Inventory Management </li>
                    <li>Cross-Functional Elective </li>
                    <li> Project</li>
                    <li>----</li>
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
          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-4">
                  <ul className="p-0 mt-1 text-center">
                    <li className="px-5">MBA in Marketing and HR management</li>
                    <li className="px-5">
                      MBA in Marketing and Finance management
                    </li>
                    <li className="px-5">MBA in System and operations</li>
                    <li className="px-5">
                      MBA in Banking and finance management
                    </li>
                    <li className="px-5">MBA in International Marketing</li>
                    <li className="px-5">
                      MBA in Investment Banking Equity research
                    </li>
                    <li className="px-5">MBA in Supply chain Management</li>
                    <li className="px-5">
                      MBA Data Science and Analytics Management
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul className="p-0 mt-1 text-center">
                    <li className="px-5">
                      MBA in Strategic finance Management
                    </li>
                    <li className="px-5">MBA in HR Management</li>
                    <li className="px-5">MBA in Oil and gas Management</li>
                    <li className="px-5">MBA in General Management</li>
                    <li className="px-5">MBA in Finance Management</li>
                    <li className="px-5">
                      MBA in International finance management
                    </li>
                    <li className="px-5">MBA in Marketing management</li>
                    <li className="px-5">
                      MBA in Finance and Leadership Management
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul className="p-0 mt-1 text-center">
                    <li className="px-5">
                      MBA in Finance and Leadership Management
                    </li>
                    <li className="px-5">MBA in Power Management</li>
                    <li className="px-5">MBA in Aviation Management</li>
                    <li className="px-5">MBA in digital Marketing Ecommerce</li>
                    <li className="px-5">MBA in Fintech Management</li>
                    <li className="px-5">MBA in Finance and HR Management</li>
                    <li className="px-5">
                      MBA in Business Intelligence and analytics{" "}
                    </li>
                    <li className="px-5">MBA in IT Management</li>
                    <li>----</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <h3>How to choose the right university?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              Choosing a suitable college for an online and distance MBA in
              System and Operations Management is very important. The right
              environment & teaching faculty has a great influence on the
              quality of education you get. Some of the points to keep in mind
              while making the right preference are as follows:
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
          <div className="section pt-4">
            <h3>Career opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              After the completion of the online and distance MBA systems and
              operations students can avail so many possible options like jobs
              in these positions
            </p>

            <div className="container text-center mt-4">
              <img src={Common} className="img-fluid" alt="Hrm page image" />
            </div>
            {/* <div className="section mt-1" id="Semester">
              <div className="container p-0">
                <div className="row">
                  <div className="col-md-4">
                    <ul className="p-0 ">
                      <li > Operations Executive </li>
                      <li className="mt-2"> Store Manager</li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="p-0 ">
                      <li > Operations Manager </li>
                      <li className="mt-2"> Production Manager</li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="p-0 ">
                      <li> Plant Manager </li>
                      <li className="mt-2"> Material Manager</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="section pt-4">
            <h3>The favorable companies you can opt for are: </h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            {/* <p>
            There is an overload of job opportunities available after the fulfillment of this program and Students can apply for job positions like: 
            </p> */}

            <div className="container text-center mt-4">
              <img src={new_firem} className="img-fluid" alt="Hrm page image" />
            </div>
          </div>
          <div className="section">
            <h3>Conclusion</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
              The opportunities are piled up for you after completion of an
              online & distance MBA in System and Operations Management. You can
              pick from any university as per your will and needs as there are
              providing numerous universities providing online & distance MBA
              courses. You can follow up with the course with comfort in your
              home and still while balancing your life duties
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">System and Operations Management FAQ</h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
                What is the part of online/distance MBA operations management?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                An MBA course in operations management personnel is accountable
                for overlooking the company's procedures by guaranteeing the
                efficient and the most efficacious way.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
                What positions can I get with an online/distance MBA in
                operations management offered?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Some of the job posts are available in this field; operations
                manager, production analyst, production supervisor, industrial
                engineer, inventory manager, purchasing administrator, schedule
                coordinator, quality analyst, and plant supervisor.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>
                What is being taught in online/distance MBA systems and
                operations management?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                A graduate with an online/distance MBA in operations management
                is mainly concerned with planning, organizing, and leading in
                the context of production, manufacturing, and delivering
                services.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-2">
            <Accordion.Header>
              <h5>
                Online/distance MBA in system and operations salary package?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The average pay package of MBA people who get offered at
                starting is INR 4- 5 lakhs per annum.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mt-2">
            <Accordion.Header>
              <h5>Does MBA in operations require coding?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                You do not need much coding mastery to pursue your course of
                choice of MBA in systems and operations. Candidates applying for
                this course only demanded to learn how technological pictures
                are applied in the field of business.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          {/* <Accordion.Item eventKey="5" className="mt-2">
            <Accordion.Header>
              <h5>
              What is the scope of an MBA in artificial intelligence?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              In MBA in Artificial Intelligence Course, learners will know and develop the skills and knowledge required to manage the complexness that comes from a more unnatural intelligence-driven world. They will also comprehend and explore how AI technology can be employed to create revenue and generate business possibilities.
              </p>
            </Accordion.Body>
          </Accordion.Item> */}
        </Accordion>
      </div>
    </>
  );
}
