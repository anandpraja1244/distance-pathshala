import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import Mr_management from "../../../assets/images/MSC(PG)/M.svg";
import line_h from "../../../assets/images/process/Line.png";
import Common from "../../../assets/images/mSC1/msc/M/Career.svg";
import choose from "../../../assets/images/mSC1/msc/M/choose.svg";
import AdmissionProcedure from '../../../assets/images/msc/AdmissionProcedure.svg';
import elegibilty from '../../../assets/images/msc/10th.svg';
import StepB from '../../../assets/images/msc/stepA.png';
import StepA from '../../../assets/images/msc/stepB.png';
import Accordion from "react-bootstrap/Accordion";
export default function CourseListDesc() {
  return (
    <>
      <Helmet>
        <title>
          M.Sc Mathematics in distance education in India - Distance Pathshala
        </title>
        <meta
          name="description"
          content="M.sc Mathematics Masters Degree Distance Education learning Admission – Join the best Master of Mathematics through Distance Pathshala."
        />
        <meta name="keywords" content="MSC Mathematics Distance Education" />
      </Helmet>
      <Searchform />
   
      <img src={Mr_management} alt="hr Management" className="w-100" />
      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>Why should you choose Online and distance MSc in MSc general?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            If you want to achieve something, you will always find a way. And Online and distance MSc in MSc
general is the best alternative for students who desperately want to complete their studies, but
cannot attend the classes on offline mode. You can pursue your education without going out of your
way. The curriculum has been designed as per career demands.
            </p>
          </div>
        
          <div className="section">
            <h3>Explore advanced career opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            After gaining expertise in your domain, you can explore many options and choose the apt profession
for yourself. Science is guiding the world, and being a science graduate is full of advantages. You
can work as a scientist, researcher, Food inspector, Lab Assistant, Medical assistant, or teacher.
And many more options are open for you by doing Online and distance MSc in MSc general.
            </p>
          </div>
          <div className="section">
            <h3>Earn a high salary</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            You can expect a great kickstart of your career with a handsome salary. With Online and distance
MSc in MSc general, you can apply to the chemical, oil, and chemical industry.
            </p>
          </div>

          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            It is 2 years postgraduate degree that can be done by anyone who completed an undergraduate degree in
science stream from any recognized college or university. Getting admission is a smooth process just you need
to choose a college. Any individual with 60%aggregate marks in bachelor&#39;s can apply for it.
            </p>
            <div className="text-center">
              <h3>ADMISSION PROCEDURE </h3>
              <span className="m-0 p-0">
                <img src={line_h} className="img-fluid" alt="Hrm page image" />
              </span>
            </div>
          <img src={AdmissionProcedure} alt="admin" className="w-100 mt-5" />
          
          <img src={elegibilty} alt="admin" className="w-100 mt-5" />
           <div className="container py-3 text-center">
            <p>Here is a common procedure to take admission in the distance MSc in MSc general.</p>
          <img src={StepA} alt="admin" className="mw-100 mt-5" />
          <img src={StepB} alt="admin" className=" w-100 mt-5" />

           </div>
          </div>

       

          <div className="section">
            <h3>Course subjects</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>

            {/* <p>
              The syllabus of this course helps you in delving deep into the
              concepts. M. Sc in Mathematics courses are distributed in 4
              different semesters of 6 months each. Every course in M. Sc in
              Mathematics program is designed by professionals to meet the
              requirement of the industry. Here are some lists of courses that
              candidates will learn in this program.
            </p> */}
          </div>
          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 1</p>
                  <ul className="p-0 mt-1">
                    <li>Analytical Chemistry and Separation Techniques -I (Theory)</li>
                    <li>Organic chemistry - I (Theory)</li>
                    <li>Physical chemistry - I (Theory)</li>
                    <li>Practical-I: Chemistry</li>
                    <li>Practical-II: Organic chemistry</li>
                    <li>Practical-III: Physical Chemistry</li>
                    <li>Subject other than the course</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 2</p>
                  <ul className="p-0 mt-1">
                    <li>Inorganic Chemistry - I (Theory)</li>
                    <li>Organic Chemistry - II (Theory)</li>
                    <li>Physical Chemistry - II (Theory)</li>
                    <li>Practical-IV: Inorganic Chemistry</li>
                    <li>Practical-V: Organic Chemistry</li>
                    <li>Practical-VI: Physical Chemistry</li>
                    <li>Subject other than course</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="section mt-1" id="Semester">
            <div className="container p-0">
              <div className="row">
                <div className="col-md-6">
                  <p className="Semester-left">Semester 3</p>
                  <ul className="p-0 mt-1">
                    <li>Ana. II Spectroscopic Separation Techniques (Theory)</li>
                    <li>Inorganic Chemistry- II (Theory)</li>
                    <li>Practical-VII: Analytical Chemistry</li>
                    <li>Practical-VIII: Inorganic Chemistry</li>
                    <li>Anyone soft core theory paper has to be selected from the
first and practicals about the selected soft core papers</li>
<li>Subject other than course</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p className="Semester-right">Semester 4</p>
                  <ul className="p-0 mt-1">
                    <li>Any three soft core papers from the list (other than that
selected during the third semester) have to be chosen</li>
                 
                    <li>Soft Core paper - II</li>
                    <li>Soft Core pa per - III</li>
                    <li>Soft Core paper - IV</li>
                    <li>Project Work</li>
                    <li>.....</li>
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
            Before you go for admission online and distance you must consider these points while looking for a
college or university
            </p>

            <div className="row mt-4">
            <span className="m-0 p-0">
                <img src={choose} className="img-fluid" alt="Hrm page image" />
              </span>
            </div>
          </div>
          <div className="section pt-4">
            <h3>Career opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            After earning a Masters degree in science, you can choose from a wide variety of specialized
positions. Students may apply to any positions depending on the specific courses they select
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
              In this course, aspirants will gain in-depth knowledge about math
              and other related kinds of stuff. Many universities are offering
              M. Sc in mathematics so before you choose any course, it is
              essential to choose the right universities based on your
              requirements. Only by choosing the right university, an individual
              can lead a successful career.
            </p>
          </div>
        </div>
      </div>
      <div className="container faq">
        <div className="text-center">
          <h1 className="Accordi">
          online and distance MSc in MSc general  FAQ
          </h1>
          <span className="m-0 p-0">
            <img src={line_h} className="img-fluid" alt="Hrm page image" />
          </span>
        </div>
        <Accordion defaultActiveKey="0" className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>
              Do having a science background compulsory to pursue Online and distance MSc in MSc
general?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Yes, it is compulsory to have a science background for Online and distance MSc in MSc general.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-2">
            <Accordion.Header>
              <h5>
              In how many years student can complete Online and distance MSc in MSc general?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              One is expected to complete the course minimum in 2 years and a maximum of 5 years.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2" className="mt-2">
            <Accordion.Header>
              <h5>Is Online and distance MSc in MSc general valid as regular Msc</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Yes, if it is from a college approved by UGC, DEB, AICTE, NAAC
              </p>
            </Accordion.Body>
          </Accordion.Item>
          

         
        </Accordion>
      </div>
    </>
  );
}
