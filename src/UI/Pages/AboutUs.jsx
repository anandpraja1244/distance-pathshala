import React from "react";
import CompareFindFilter from "../Components/_CompareFindFilter";
import Footer from "../Components/_Footer";
import Header from "../Components/_Header";
import HomeProcess from "../Components/_HomeProcess";
import Line from "../../assets/images/process/Line.png";
import Line2 from "../../assets/images/process/Line2.png";
import Getcollage from "../../assets/images/process/get.svg";
import top_Searches from "../../assets/images/process/Top-Searches.svg";
import Apply from "../../assets/images/process/Apply.svg";
import Consult from "../../assets/images/process/Consult.svg";
import Decide from "../../assets/images/process/Decide.svg";
// import Vector from "../../assets/images/process/Vector.svg";
import f1 from "../../assets/images/process/f1.png";
import f2 from "../../assets/images/process/f2.png";
import f3 from "../../assets/images/process/f3.png";
// images
import Mission from "./../../assets/images/process/mission.png";
import Objective from "./../../assets/images/process/objective.png";
import Vision from "./../../assets/images/process/vision.png";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import Searchform from "./searchform";

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const styles = {
    sorting: {
      display: "none !important",
    },
  };
  return (
    <>
    <Header />
    <Helmet title = "About | Distance Pathshala"
          htmlAttributes={{ lang: "en" }}
          meta={[
        {
          property: 'og:title',
          content: 'About',
        }
      ]}
   />    

      <Searchform />
      <div className="bg-light" id="about">
        <div className="container text-center">
          <h1 className="mb-2">About Us</h1>
          <hr></hr>
          <p className="mt-3">
            Empower your search for the perfect distance educational
            institutions<br></br>
            with <span>DistancePathshala.</span>
          </p>
        </div>
      </div>

      <div className="bg-light">
        <div className="container text-center" id="vision">
          <div className="row">
            <div className="col-md-4">
              <div>
                <img src={Vision} alt="Vision" className="img-fluid" />
                <h1 className="py-3">Our Vision</h1>
                <p className="borderr">
                  We envision the reach of distance education to every single
                  aspirant without any hassle. We are dedicating our experience
                  to making distance education institutions within reach of
                  every student.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <img src={Mission} alt="Mission" className="img-fluid" />
              </div>
              <h1 className="py-3">Our Mission</h1>
              <p className="borderr">
                We are on a mission to make education reachable to every student
                or aspirant in the country. Our mission is fueled by our
                unmatchable hard work and the zeal to find the best-in-class
                distance education institutions.
              </p>
            </div>
            <div className="col-md-4">
              <div>
                <img src={Objective} alt="Objective" className="img-fluid" />
              </div>
              <h1 className="py-3">Objective</h1>
              <p className="">
                Distancepathshala is a concoction of experienced education
                professionals with wide expertise. Our team focuses on the
                utmost importance of distance education and delivers precise
                information about genuine institutions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-light">
        <div className="container process">
          <div className="row">
            <div className="col-md-4 text-end">
              <img src={Line} className="img-fluid" alt="" />
              <img src={Line2} className="img-fluid" alt="" />
            </div>
            <div className="col-md-4">
              <h2>What Can You Get With Us?</h2>
            </div>
            <div className="col-md-4">
              <img src={Line2} className="img-fluid" alt="" />
              <img src={Line} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <img src={Getcollage} className="img-fluid" alt="" />
        <p className="last-text">
          Still searching for the best distance education institutions but not
          getting the right results? Come to Distancepathshala for a new
          perspective and guaranteed results! Connect to us for more information
          about any distance education institutions @Distance Pathshala .
          Remember, with us, you are just a click away from your dream distance
          college!
        </p>
      </div>

      <section className="bg-light">
        <div className="container process">
          <div className="row">
            <div className="col-md-4 text-end">
              <img src={Line} className="img-fluid" alt="" />
              <img src={Line2} className="img-fluid" alt="" />
            </div>
            <div className="col-md-4">
              <h2>Distance Pathshala Process</h2>
            </div>
            <div className="col-md-4">
              <img src={Line2} className="img-fluid" alt="" />
              <img src={Line} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
        <div className="container mt-5 pt-3" id="process">
          <div className="row">
            <div className="col text-center">
              <img src={top_Searches} className="img-fluid" alt="" />
              <h2 className="mt-3">Search</h2>
              <p>Apply a wide range of filters to get customized results.</p>
            </div>

            <div className="col text-center">
              <img src={f1} className="img-fluid" alt="" />
              <h2 className="mt-3">Compare </h2>
              <p>Get detailed info about hundreds of distance colleges.</p>
            </div>

            <div className="col text-center">
              <img src={Consult} className="img-fluid" alt="" />
              <h2 className="mt-3">Consult</h2>
              <p>Highly Qualified Educational Experts at your service.</p>
            </div>

            <div className="col text-center">
              <img src={Decide} className="img-fluid" alt="" />
              <h2 className="mt-3">Decide</h2>
              <p>Find out your perfect pick with our exclusive services.</p>
            </div>

            <div className="col text-center">
              <img src={Apply} className="img-fluid" alt="" />
              <h2 className="mt-3">Apply</h2>
              <p>Fill out the form and your application is ready to go..</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
