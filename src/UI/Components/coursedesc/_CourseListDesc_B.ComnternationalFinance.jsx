import React from "react";
import { Helmet } from "react-helmet";
import Searchform from "../../Pages/searchform";
import HRM from "../../../assets/images/B.Com/BComHindi.svg";
import line_h from "../../../assets/images/process/Line.png";
import Common from "../../../assets/images/B.Com/Hindi.svg";
import Commons from "../../../assets/images/B.Com/Common.svg";
import Rankings from "../../../assets/images/process/rankings.png";
import Content from "../../../assets/images/process/content.png";
import Structure from "../../../assets/images/process/structure.png";


export default function CourseListDesc() {
  return (
    <>
      <Helmet>
        <title>
		Best Online & Distance B.Com in Hindi Course University in india  | Distane Pathshala
        </title>
        <meta
          name="description"
          content="Get your degree in Online & Distance B.Com in Hindi at one of the best distance education providers. Enroll now at Distance Pathshala and get trained by the world’s best faculties."
        />
        <meta name="keywords" content="Online & Distance B.Com in Hindi" />
      </Helmet>
      <Searchform />
      <div className="container mt-3 hrm">
        <div className="row">
          <div className="col-md-4 hrm-img">
            <img src={HRM} className="img-fluid" alt="Hrm page image" />
          </div>
          <div className="col-md-8 py-4 hrm-text">
            <h3>
            Online and distance B. Com <span> Hindi </span>
            </h3>
            <span className="m-0 p-0">
              <img
                src={line_h}
                className="img-fluid"
                alt="Finance page image"
              />
            </span>
            <p>
            Hindi is a language that is designed to give students the leverage
             to choose to pursue a B. Com in the Hindi language. B. Com in Hindi
              is a three-years bachelor’s degree. During the course, aspirants will 
              study a variety of topics linked to the course for six semesters. 
              B. Com Hindi is an undergraduate
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid courseListDesc">
        <div className="container">
          <div className="section"></div>
          <div className="section">
            <h3>Why to choose B. Com in Hindi?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            B. Com in Hindi course offers a wealth of information about general business 
            and an in-depth understanding of finance and accounting. Candidates will have 
            top job profiles like auditors, certified public accountants, business consultants and a lot more.
            </p>
          </div>
     
      
          <div className="section">
            <h3>Admission procedure</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            The duration of this course is three years which consists of six semesters of 
            6 months each.To take admission for online and distance B. Com Hindi, candidates 
            should meet the minimum eligibility criteria.
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
              <img src={Commons} className="img-fluid" alt="Hrm page image" />
              </div>
            </section>
          </div>
          <div className="section">
            <h3>How to choose the right university?</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            Once you decide to pursue an executive B. Com in Hindi,
             it is essential to choose the right university. The following points
              are essential in selecting the right university.
            </p>

            <div className="row mt-4">
              <div className="col-md-4">
                <img src={Rankings} className="img-fluid" alt="Hrm page image" />
              </div>
              <div className="col-md-4">
                <img src={Content} className="img-fluid" alt="Hrm page image" />
              </div>

              <div className="col-md-4">
                <img src={Structure} className="img-fluid" alt="Hrm page image" />
              </div>
            </div>
          </div>


        
          <div className="section pt-4">
            <h3>Career opportunities</h3>
            <span className="m-0 p-0">
              <img src={line_h} className="img-fluid" alt="Hrm page image" />
            </span>
            <p>
            B. Com in Hindi is an undergraduate course that helps students to get a 
            good position in their lives. After completion of this course, candidates 
            will get various job opportunities in the industries. Here are some major job
           positions that are available after the completion of a distance B. Com in Hindi.
           
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
            In this course, aspirants will learn Hindi and related stuff. Candidates can find this course in many universities but not everyone is in an online format. So, before you choose any course, it is essential to choose the right universities based on your requirements. Only by choosing the right university, an individual can lead a successful career.
            </p>
          </div>
        </div>
      </div>
    
    </>
  );
}
