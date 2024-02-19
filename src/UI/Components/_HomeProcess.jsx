// icons
// import top_Searches from "../../assets/images/process/Search.svg";
import top_Searches from "../../assets/images/process/search.svg";

import Searchesani from "../../assets/images/process/Searchani.svg";
import Apply from "../../assets/images/process/Apply.svg";
import Consult from "../../assets/images/process/Consult.svg";
import Decide from "../../assets/images/process/Decide.svg";

import Line from "../../assets/images/process/Line.png";
import Line2 from "../../assets/images/process/Line2.png";
import Vector_Object from "../../assets/images/process/Vector-Object.png";
import Vector_Smart from "../../assets/images/process/Vector-Smart.png";
import Phone from "../../assets/images/process/Phone.png";
import Bar_Graph from "../../assets/images/course/graphh.png";
import f1 from "../../assets/images/process/Compare.svg";
import time_img from "../../assets/images/process/time_image.png";
import f2 from "../../assets/images/process/f2.png";
// import f3 from "../../assets/images/process/filters.svg";
import mba_icon from "../../assets/images/MBA 2.svg";
import bca_icon from "../../assets/images/compair/BCA.svg";
import Btech_icon from "../../assets/images/compair/Btech.svg";
import bba_icon from "../../assets/images/compair/BBA.svg";
import bcom_icon from "../../assets/images/compair/Bcom.svg";
//  import ba_icon from "../../assets/images/compair/BA.svg";
 import ma_icon from "../../assets/images/compair/ma.svg";
 import mCom_icon from "../../assets/images/compair/Mcom.svg";
 import mca_icon from "../../assets/images/compair/mca.svg";
 import Mtech_icon from "../../assets/images/compair/Mtech.svg";
 import Msc_icon from "../../assets/images/compair/Msc.svg";


// import service from "../../assets/images/process/24X7.png";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { Card } from "react-bootstrap";
import BAinHindi from "../../assets/images/viewall/BA-in-Hindi.svg";
import Vector from "../../assets/images/process/vector.svg";
import filter from "../../assets/images/process/filter.svg";  
import mobile from "../../assets/images/process/mobile.svg";
import Ai from "../../assets/images/process/ai.svg";
import video from "../../assets/images/process/video.svg";
import verify from "../../assets/images/process/verify.svg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../../node_modules/react-multi-carousel/lib/styles.css";

import icon_homeProcessSearch from "../../assets/images/home/icon-process-find.svg";
import icon_homeProcess_compare from "../../assets/images/home/homeProcess_Compare.svg";
import icon_homeProcess_consult from "../../assets/images/home/homeProcess_Consult.svg";
import icon_homeProcess_decision from "../../assets/images/home/homeProcess_Decision.svg";
import icon_homeProcess_apply from "../../assets/images/home/homeProcess_Apply.svg";
import Carousal from "../Components/Carousal";
import React from "react";
import { Link } from "react-router-dom";
import URLMapping from "../../Context/URLs";
import { Form, Tabs } from "react-bootstrap";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 5 
    },
    tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 
    },
    mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 
    }
    };


// =================================option======================



// breakpoint: { max: 4000, min: 3000 },
// items: 5,
// },
// desktop: {
// breakpoint: { max: 3000, min: 1024 },
// items: 5,
// },
// tablet: {
// breakpoint: { max: 1024, min: 464 },
// items: 1,
// },
// mobile: {
// breakpoint: { max: 464, min: 0 },
// items: 1,
// },
// };
export default function HomeProcess() {
  return (
    <>
      <section className="bg-light">
        <div className="container process">
          <div className="row">
            <div className="col-md-4  text-end">
              <img
                src={Line}
                className="img-fluid mobile-d-none"
                alt="home page image"
              />
              <img
                src={Line2}
                className="img-fluid mobile-d-none"
                alt="home page image"
              />
            </div>
            <div className="col-md-4 ">
              <h2>
                <span>Distance Pathshala Process</span>
              </h2>
            </div>
            <div className="col-md-4">
              <img
                src={Line2}
                className="img-fluid mobile-d-none"
                alt="home page image"
              />
              <img
                src={Line}
                className="img-fluid mobile-d-none"
                alt="home page image"
              />
            </div>
          </div>
        </div>

        <div className="container mt-5 pt-3" id="process">
          <div className="row  d-flex justify-content-center">
            <div className="col-md-2 col-sm-6 col-6 text-center">
              <div className="process_home_o1 ">
                <a href="/compare" className=" ">
                  <div>
                    <img
                      src={Searchesani}
                      className="img-fluid"
                      alt="home page image"
                    />
                  </div>
                  <span>Search</span>
                </a>
              </div>
            </div>

            <div className="col-md-2 col-sm-6 col-6  text-center">
              <div className="process_home_o1">
                <a href="/compare">
                  <div>
                    <img src={f1} className="img-fluid" alt="home page image" />
                  </div>
                  <span className="">Compare</span>
                </a>
              </div>
            </div>

            <div className="col-md-2 col-sm-6 col-6 text-center">
              <div className="process_home_o1">
                <a href="/book-appointment">
                  <div className="">
                    <img
                      src={Consult}
                      className="img-fluid"
                      alt="home page image"
                    />
                  </div>
                  <span className="">Consult</span>
                </a>
              </div>
            </div>
            <div  className="col-md-2 col-sm-6 col-6 text-center">
              <div className="process_home_o1">
                <a href="/apply-now">
                  <div>
                    <img
                      src={Apply}
                      className="img-fluid"
                      alt="home page image"
                    />
                  </div>
                  <span className="">Apply</span>
                </a>
              </div>
            </div>
            <div  className="col-md-2 col-sm-12 text-center" id="process_decide">
              <div className="process_home_o1">
                <a href="/book-appointment">
                  <div>
                    <img
                      src={Decide}
                      className="img-fluid"
                      alt="home page image"
                    />
                  </div>
                  <span className="">Decide</span>
                </a>
              </div>
            </div>

       
          </div>
        </div>
      </section>
      <section className="bg-light" id="compair">
        <div className="container text-center">
          <h1>
            Compare Course <br></br>
            From Multiple Universities in one place
          </h1>

          <br></br>

          <div className="container hrm py-5">
            <Tab.Container id="left-tabs-example " defaultActiveKey="first">
              <Row>
                <Nav variant="pills">
                  <Col className="col-12 col-sm">
                    <Nav.Item>
                      <Nav.Link className="ug" eventKey="first">
                        PG Courses
                      </Nav.Link>
                    </Nav.Item>
                  </Col>
                  <Col className="col-12 col-sm">
                    <Nav.Item>
                      <Nav.Link id="ug" eventKey="second">
                        UG Courses
                      </Nav.Link>
                    </Nav.Item>
                  </Col>
                  <Col className="col-12 col-sm">
                    <Nav.Item>
                      <Nav.Link eventKey="third">Diploma</Nav.Link>
                    </Nav.Item>
                  </Col>
                  <Col className="col-12 col-sm">
                    <Nav.Item>
                      <Nav.Link eventKey="four">Certificate</Nav.Link>
                    </Nav.Item>
                  </Col>
                </Nav>
              </Row>
              <Row>
                <Col sm={12} className="mt-4">
                  <Tab.Content id="viewall">
                    <Tab.Pane eventKey="first">
                      <Carousel
                        swipeable={true}
                        draggable={true}
                        ssr={true} 
                        infinite={true}
                        // autoPlay={true}
                        autoPlaySpeed={1500}
                        keyBoardControl={true}
                        showDots={false}
                        removeArrowOnDeviceType={[
                          "superLargeDesktop",
                          "desktop",
                        ]}
                        className="mt-3 mba"
                        responsive={responsive}
                      >
                        <div className="compair-text">
                          <div className="row p-2 d-flex justify-content-center">
                            <div className="col d-flex justify-content-start ">
                              <div>
                                <img src={mba_icon} alt="mba icons " />
                              </div>
                              <div className="text-start">
                                <h3>MBA</h3>
                              </div>
                            </div>
                            </div>
                            <div className="p-2">
                              <p>
                                Average Fees -<span> Rs 39k to 90k/Y</span>
                              </p>
                              <p>
                                Min Eligibility -<span> Graduation</span>
                              </p>
                              <p>
                                Duration - <span>2 Years </span>
                              </p>
                              <p>
                                Specializations - <span>40+ </span>
                              </p>
                          
                          </div>
                         

                       
                          {/* <a href="/viewallpgpage">
                            <button className="mt-3 read">Read More</button>
                          </a> */}
                        </div>

                        <div className="compair-text">
                          <div className="row p-2 d-flex justify-content-start">
                            <div className="col d-flex justify-content-start ">
                              <div>
                                <img src={ma_icon} alt="mba icons " />
                              </div>
                              <div className="text-start">
                                <h3>MA</h3>
                              </div>
                            </div>
                          </div>
                          <div className="p-2">
                              <p>
                                Average Fees -<span> Rs 39k to 90k/Y</span>
                              </p>
                              <p>
                                Min Eligibility -<span> Graduation</span>
                              </p>
                              <p>
                                Duration - <span>2 Years </span>
                              </p>
                              <p>
                                Specializations - <span>40+ </span>
                              </p>
                          
                          </div>
                          {/* <a href="/viewallpgpage">
                            <button className="mt-3 read">Read More</button>
                          </a> */}
                        </div>

                        <div className="compair-text">
                          <div className="row p-2 d-flex justify-content-start">
                            <div className="col d-flex justify-content-start ">
                              <div>
                                <img src={mCom_icon} alt="mba icons " />
                              </div>
                              <div className="text-start">
                                <h3>M.Com</h3>
                              </div>
                            </div>
                          </div>
                          <div className="p-2">
                              <p>
                                Average Fees -<span> Rs 39k to 90k/Y</span>
                              </p>
                              <p>
                                Min Eligibility -<span> Graduation</span>
                              </p>
                              <p>
                                Duration - <span>2 Years </span>
                              </p>
                              <p>
                                Specializations - <span>40+ </span>
                              </p>
                          
                          </div>
                          {/* <a href="/viewallpgpage">
                            <button className="mt-3 read">Read More</button>
                          </a> */}
                        </div>

                        <div className="compair-text">
                          <div className="row p-2 d-flex justify-content-start">
                            <div className="col d-flex justify-content-start ">
                              <div>
                                <img src={mca_icon} alt="mba icons " />
                              </div>
                              <div className="text-start">
                                <h3>MCA</h3>
                              </div>
                            </div>
                          </div>
                          <div className="p-2">
                              <p>
                                Average Fees -<span> Rs 39k to 90k/Y</span>
                              </p>
                              <p>
                                Min Eligibility -<span> Graduation</span>
                              </p>
                              <p>
                                Duration - <span>2 Years </span>
                              </p>
                              <p>
                                Specializations - <span>40+ </span>
                              </p>
                          
                          </div>
                          {/* <a href="/viewallpgpage">
                            <button className="mt-3 read">Read More</button>
                          </a> */}
                        </div>

                        <div className="compair-text">
                          <div className="row p-2 d-flex justify-content-start">
                            <div className="col d-flex justify-content-start ">
                              <div>
                                <img src={Mtech_icon} alt="mba icons " />
                              </div>
                              <div className="text-start">
                                <h3>M.Tech</h3>
                              </div>
                            </div>
                          </div>
                          <div className="p-2">
                              <p>
                                Average Fees -<span> Rs 39k to 90k/Y</span>
                              </p>
                              <p>
                                Min Eligibility -<span> Graduation</span>
                              </p>
                              <p>
                                Duration - <span>2 Years </span>
                              </p>
                              <p>
                                Specializations - <span>40+ </span>
                              </p>
                          
                          </div>
                          {/* <a href="/viewallpgpage">
                            <button className="mt-3 read">Read More</button>
                          </a> */}
                        </div>
                        <div className="compair-text">
                          <div className="row p-2 d-flex justify-content-start">
                            <div className="col d-flex justify-content-start ">
                              <div>
                                <img src={Msc_icon} alt="mba icons " />
                              </div>
                              <div className="text-start">
                                <h3>M.sc</h3>
                              </div>
                            </div>
                            </div>
                            <div className="p-2">
                              <p>
                                Average Fees -<span> Rs 39k to 90k/Y</span>
                              </p>
                              <p>
                                Min Eligibility -<span> Graduation</span>
                              </p>
                              <p>
                                Duration - <span>2 Years </span>
                              </p>
                              <p>
                                Specializations - <span>40+ </span>
                              </p>
                          
                          </div>
                  
                       
                          {/* <a href="/viewallpgpage">
                            <button className="mt-3 read">Read More</button>
                          </a> */}
                        </div>
                      </Carousel>
                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
                      <Carousel
                        swipeable={true}
                        draggable={true}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        // autoPlay={true}
                        autoPlaySpeed={1500}
                        keyBoardControl={true}
                        showDots={false}
                        removeArrowOnDeviceType={[
                          "superLargeDesktop",
                          "desktop",
                        ]}
                        className="mt-3 mba"
                        responsive={responsive}
                      >
                        <div className="compair-text">
                        <div className="row p-2 d-flex justify-content-start">
                            <div className="col d-flex justify-content-start ">
                              <div>
                                <img src={bba_icon} alt="mba icons " />
                              </div>
                              <div className="text-start">
                                <h3>BBA</h3>
                              </div>
                            </div>
                          </div>
                          <div className="p-2">
                              <p>
                                Average Fees -<span> Rs 39k to 90k/Y</span>
                              </p>
                              <p>
                                Min Eligibility -<span> Graduation</span>
                              </p>
                              <p>
                                Duration - <span>2 Years </span>
                              </p>
                              <p>
                                Specializations - <span>40+ </span>
                              </p>
                          
                          </div>
                          {/* <a href="/ViewAllpage">
                            <button className="mt-3 read">Read More</button>
                          </a> */}
                        </div>

                        <div className="compair-text">
                        <div className="row p-2 d-flex justify-content-start">
                            <div className="col d-flex justify-content-start ">
                              <div>
                                <img src={bcom_icon} alt="mba icons " />
                              </div>
                              <div className="text-start">
                                <h3> B.com</h3>
                              </div>
                            </div>
                          </div>
                          <div className="p-2">
                              <p>
                                Average Fees -<span> Rs 39k to 90k/Y</span>
                              </p>
                              <p>
                                Min Eligibility -<span> Graduation</span>
                              </p>
                              <p>
                                Duration - <span>2 Years </span>
                              </p>
                              <p>
                                Specializations - <span>40+ </span>
                              </p>
                          
                          </div>
                          {/* <a href="/ViewAllpage">
                            <button className="mt-3 read">Read More</button>
                          </a> */}
                        </div>

                        <div className="compair-text">
                        <div className="row p-2 d-flex justify-content-start">
                            <div className="col d-flex justify-content-start ">
                              <div>
                                <img src={mba_icon} alt="mba icons " />
                              </div>
                              <div className="text-start">
                                <h3> BA</h3>
                              </div>
                            </div>
                          </div>
                          <div className="p-2">
                              <p>
                                Average Fees -<span> Rs 39k to 90k/Y</span>
                              </p>
                              <p>
                                Min Eligibility -<span> Graduation</span>
                              </p>
                              <p>
                                Duration - <span>2 Years </span>
                              </p>
                              <p>
                                Specializations - <span>40+ </span>
                              </p>
                          
                          </div>
                          {/* <a href="/ViewAllpage">
                            <button className="mt-3 read">Read More</button>
                          </a> */}
                        </div>

                        <div className="compair-text">
                        <div className="row p-2 d-flex justify-content-start">
                            <div className="col d-flex justify-content-start ">
                              <div>
                                <img src={bca_icon} alt="mba icons " />
                              </div>
                              <div className="text-start">
                                <h3> BCA</h3>
                              </div>
                            </div>
                          </div>
                          <div className="p-2">
                              <p>
                                Average Fees -<span> Rs 39k to 90k/Y</span>
                              </p>
                              <p>
                                Min Eligibility -<span> Graduation</span>
                              </p>
                              <p>
                                Duration - <span>2 Years </span>
                              </p>
                              <p>
                                Specializations - <span>40+ </span>
                              </p>
                          
                          </div>
                          {/* <a href="/ViewAllpage">
                            <button className="mt-3 read">Read More</button>
                          </a> */}
                        </div>

                        <div className="compair-text">
                        <div className="row p-2 d-flex justify-content-start">
                            <div className="col d-flex justify-content-start ">
                              <div>
                                <img src={Btech_icon} alt="mba icons " />
                              </div>
                              <div className="text-start">
                                <h3> B.Tech</h3>
                              </div>
                            </div>
                          </div>
                          <div className="p-2">
                              <p>
                                Average Fees -<span> Rs 39k to 90k/Y</span>
                              </p>
                              <p>
                                Min Eligibility -<span> Graduation</span>
                              </p>
                              <p>
                                Duration - <span>2 Years </span>
                              </p>
                              <p>
                                Specializations - <span>40+ </span>
                              </p>
                          
                          </div>
                          {/* <a href="/ViewAllpage">
                            <button className="mt-3 read">Read More</button>
                          </a> */}
                        </div>
                      </Carousel>
                    </Tab.Pane>

                    <Tab.Pane eventKey="third">
                      <div className="container mba">
                        <div className="row">
                          <div className="col-md-3">
                            <div className="compair-text">
                            <div className="row p-2 d-flex justify-content-start">
                            <div className="col d-flex justify-content-start ">
                              <div>
                                <img src={mba_icon} alt="mba icons " />
                              </div>
                              <div className="text-start">
                                <h3>Diploma </h3>
                              </div>
                            </div>
                          </div>
                          <div className="p-2">
                              <p>
                                Average Fees -<span> Rs 39k to 90k/Y</span>
                              </p>
                              <p>
                                Min Eligibility -<span> Graduation</span>
                              </p>
                              <p>
                                Duration - <span>2 Years </span>
                              </p>
                              <p>
                                Specializations - <span>40+ </span>
                              </p>
                          
                          </div>
                              {/* <a href="/">
                                <button className="mt-3 read">Read More</button>
                              </a> */}
                            </div>
                          </div>
                          <div className="col-md-4"></div>
                          <div className="col-md-4"></div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="four">
                      <div className="container mba">
                        <div className="row">
                          <div className="col-md-3">
                            <div className="compair-text">
                            <div className="row p-2 d-flex justify-content-start">
                            <div className="col d-flex justify-content-start ">
                              <div>
                                <img src={mba_icon} alt="mba icons " />
                              </div>
                              <div className="text-start">
                                <h3>certificate </h3>
                              </div>
                            </div>
                          </div>
                          <div className="p-2">
                              <p>
                                Average Fees -<span> Rs 39k to 90k/Y</span>
                              </p>
                              <p>
                                Min Eligibility -<span> Graduation</span>
                              </p>
                              <p>
                                Duration - <span>2 Years </span>
                              </p>
                              <p>
                                Specializations - <span>40+ </span>
                              </p>
                          
                          </div>
                              {/* <a href="/">
                                <button className="mt-3 read">Read More</button>
                              </a> */}
                            </div>
                          </div>
                          <div className="col-md-4"></div>
                          <div className="col-md-4"></div>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </div>
      </section>

      <section className="bg-light pt-4" id="top-univercity">
        <div className="container">
          <div className="row">
            <div className="text-center">
              <div className="col">
                <h1>TOP TRENDING COURSES</h1>
                <p className="top_tranding text-light">
                  Don’t know what career path to follow for a secure future?
                </p>
              </div>
            </div>
            <div className="text-center top_tranding_para">
              <p>
                Let us help you take this crucial decision by making an informed
                course choice perfect for your career because just one mistake
                can jeopardize your future. According to our analytics, this
                chart here shows the top searched courses by students for this
                month.
              </p>
            </div>

            <div className=" text-center">
              <img
                src={Bar_Graph}
                className="img-fluid"
                alt="home page image"
                width={789}
                height={789}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light" id="Comparison">
        <div className="container text-center">
          <div className="border_Comparison">
            <h1 className="f-800 ">Leverage Ultra-Modern <br/> <span className="filter_01">Filters and Comparison Features</span></h1>
          
<p className="border_Comparison_01">We compare multiple Distance Universities for your preferred course at once with our AI-based and <br/> techno-advanced filters and comparison features.</p>
            <div className="row border_Compa_01 align-items-center">
              <div className="col-md-4 col-sm-12 ">
                <p>
                  Compare
                  <br />
                  Universities based on
                </p>
              </div>
              <div className="col-md-8  col-sm-12" id="filter_structure_01">
                <div className="row py-3 gap-2 justify-content-end">
                  <div className="col-3 capmare_bases1 custom_hover ">
                    Fee <br />
                    Structure
                  </div>
                  <div className="col-3 capmare_bases1 custom_hover ">
                    Average <br />
                    Rating
                  </div>
                  <div className="col-3 capmare_bases1  custom_hover">
                    Student <br />
                    Reviews
                  </div>
                </div>
                <div className="row py-3 gap-2 justify-content-end">
                  <div className="col-3 capmare_bases custom_hover">Approvals </div>
                  <div className="col-3  capmare_bases custom_hover">Eligibility</div>
                  <div className="col-3  capmare_bases custom_hover">Ranking</div>
                </div>
              </div>
            </div>
            {/* <div className="row mt-5">
            <div className="col-md-4  mt-4">
              <div className="shadow-border">
                <div className=" mb-3 mt-3">
                  <img src={f1} className="img-fluid" alt="home page image" />
                </div>
                <p className="my-3">
                  Compare university in-detail with a list of filters such as
                  course level, average rating, fees, course duration and more
                </p>
              </div>
            </div>

            <div className="col-md-4  mt-4">
              <div className="shadow-border">
                <div className="mb-3 mt-3">
                  <img
                    src={Searchesani}
                    className="img-fluid"
                    alt="home page image"
                  />
                </div>
                <p className="my-3">
                  Find university with unlimited access to ultra-modern features
                  to get your right fit, try it yourself and feel the
                  difference.
                </p>
              </div>
            </div>

            <div className="col-md-4  mt-4">
              <div className="shadow-border">
                <div className=" mb-3 mt-3">
                  <img
                    src={f3}
                    className="img-fluid ani-image"
                    alt="home page image"
                  />
                </div>
                <p className="my-3">
                  Filter university via approval status and accreditations to
                  get the right information at the right time.
                </p>
              </div>
            </div>
          </div> */}
          </div>
        </div>
      </section>

      <section className="bg-light" id="Distance">
        <div className="container text-center">
          <p className="Distance">
          Get on with your search for Top
            <span className="f-700 filter_01 fst-italic"> Distance Education Universities
</span>
            <br/>
        
          </p>
          <Link to={URLMapping.courseList.label}>
            <button className="find-cource my-3">Find Your Ideal University</button>
          </Link>
        </div>
      </section>

      <section className="bg-light" id="mobile-app">
      <div className="container process">
          <div className="row my-1">
            <div className="col-md-4 text-end">
              <img
                src={Line}
                className="img-fluid mobile-d-none"
                alt="home page image"
              />
              <img
                src={Line2}
                className="img-fluid mobile-d-none"
                alt="home page image"
              />
            </div>
            <div className="col-md-4  mobile_margin"  >
              <h2>
                <span>Distance Pathshala Mobile App</span>
              </h2>
            </div>
            <div className="col-md-4">
              <img
                src={Line2}
                className="img-fluid mobile-d-none"
                alt="home page image"
              />
              <img
                src={Line}
                className="img-fluid mobile-d-none"
                alt="home page image"
              />
            </div>
          </div>
        </div>

        <div className="container mt-4" id="app">
          <div className="row">
       
            <div className="col-md-6 mt-5">
            <div className="">
                <div className="col enabale_coun_01">
                  <p className="text-center align-items-center text-light"> The app will enable you to</p>
                    </div>
                </div>
              <div className="row  mt-5 mb-3  align-items-center">
               
                <div className="col-md-2 col-4">
                  <div className="app-image">
                    <img
                      src={Vector}
                      className="img-fluid"
                      alt="home page image"
                    />
                  </div>
                </div>
                <div className="col-md-10 col-8">
                  <p>Compare Colleges & Courses 
                    on the go</p>
                </div>
              </div>

              <div className="row  mt-5 mb-3 align-items-center">
               
                <div className="col-md-2 col-4">
                  <div className="app-image1">
                    <img
                      src={filter}
                      className="img-fluid"
                      alt="home page image"
                    />
                  </div>
                </div>
                <div className="col-md-10 col-8">
                  <p>Apply a Wide Variety of Filters to Get the Exact Result</p>
                </div>
              </div>

              <div className="row mb-3 mt-5 align-items-center">
               
                <div className="col-md-2 col-4">
                  <div className="app-image2">
                    <img
                      src={mobile}
                      className="img-fluid"
                      alt="home page image"
                    />
                  </div>
                </div>
                <div className="col-md-10 col-8">
                  <p>Remote Pathshala mobile app has interactive UI design</p>
                </div>
              </div>
          
              <div className="row mb-3 mt-5 align-items-center">
                <div className="col-md-2 col-4">
                  <div className="app-image3">
                    <img
                      src={verify}
                      className="img-fluid"
                      alt="home page image"
                    />
                  </div>
                </div>
             
              
                <div className="col-md-10 col-8">
                  <p>Get Verified Details within 2 Minutes</p>
                </div>
              </div>

              <div className="row mt-5 mb-3 d-flex  align-items-center">
                <div className="col-md-2 col-4 ">
                  <div className="app-image4">
                    <img src={Ai} className="img-fluid" alt="home page image" />
                  </div>
                </div>
                <div className="col-md-10 col-8">
                  <p>AI/ML Based Features & Predictability</p>
                </div>
              </div>

              <div className="row mt-5 align-items-center">
                <div className="col-md-2 col-4">
                  <div className="app-image5">
                    <img
                      src={video}
                      className="img-fluid"
                      alt="home page image"
                    />
                  </div>
                </div>
                <div className="col-md-10 col-8">
                  <p>HD Video/Audio Calls For Easy Consultation</p>
                </div>
              </div>
              <div className="mt-3">
                <div className="col enabale_coun">
                  <p className="text-center align-items-center text-light"> We won’t let you wait a lot, App Coming Soon!</p>
                    </div>
                </div>
            </div>
           
         
            <div className="col-md-6 mt-5 d-flex mobile_image_33 ">
              <img src={Phone}   width="auto" height="830px" className="img-fluid"   alt="home page image" />
            </div>
         

            {/* <div className="col-md-4 mt-5">
              <div className="row mb-3">
                <div className="col-md-3 col-4">
                  <div className="app-image3">
                    <img
                      src={verify}
                      className="img-fluid"
                      alt="home page image"
                    />
                  </div>
                </div>
                <div className="col-md-9 col-8">
                  <p>Get Verified Details within 2 Minutes</p>
                </div>
              </div>

              <div className="row mt-5 mb-3">
                <div className="col-md-3 col-4">
                  <div className="app-image4">
                    <img src={Ai} className="img-fluid" alt="home page image" />
                  </div>
                </div>
                <div className="col-md-9 col-8">
                  <p>AI/ML Based Features & Predictability</p>
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-md-3 col-4">
                  <div className="app-image5">
                    <img
                      src={video}
                      className="img-fluid"
                      alt="home page image"
                    />
                  </div>
                </div>
                <div className="col-md-9 col-8">
                  <p>HD Video/Audio Calls For Easy Consultation</p>
                </div>
              </div>
            </div> */}
          </div>
          {/* <div className="row mt-5 text-center">
            <p id="text-center">
              Can t wait for the app? We would not let you wait more! Coming
              soon!
            </p>
          </div> */}
        </div>
      </section>

      <section id="verifide" className="py-4">
        <div className="container">
          <h2>Get Counselling</h2>
          <p>Still Confused? Don’t make the wrong move.</p>
          <p>Get Counselling from Expert Academic Mentors and take on the right career path!</p>
          <div className="row pt-2 ">
            <div className="col-md-6">
              <Form.Group className="mt-2 mb-2">
                {/* <Form.Select id="disabledSelect">
                  <option>Qualification</option>
                </Form.Select> */}
                  <Form.Control
                            className="py-3"
                            required
                            // onChange={(e) => setFullName(e.target.value)}
                            type="text"
                            placeholder="Name*"
                          />
              </Form.Group>

              <Form.Group className="mt-2 mb-2">
                {/* <Form.Select id="disabledSelect">
                  <option>Major</option>
                </Form.Select> */}
                  <Form.Control
                            className="py-3"
                            required
                            // onChange={(e) => setFullName(e.target.value)}
                            type="text"
                            placeholder="Contact Number*"
                          />
              </Form.Group>
            </div>
            <div className="col-md-6">
         
              <Form.Group className="mt-2 mb-2">
                {/* <Form.Select id="disabledSelect">
                  <option>Course</option>
                </Form.Select> */}
                  <Form.Control
                            className="py-3"
                            required
                            // onChange={(e) => setFullName(e.target.value)}
                            type="text"
                            placeholder="Email-id *"
                          />
              </Form.Group>

              <Form.Group className="mt-2 mb-2">
                {/* <Form.Select id="disabledSelect">
                  <option>State</option>
                </Form.Select> */}
                  <Form.Control
                            className="py-3"
                            required
                            // onChange={(e) => setFullName(e.target.value)}
                            type="text"
                            placeholder="Course"
                          />
              </Form.Group>
         
              
            </div>
      
        <button className="mt-3" id="apply-now">
            Enquiry Now
            </button>
   
          </div>
       
        </div>
      </section>
      <section>
        <div className="container py-4">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-4 col-12 text-center">
              <img src={time_img} width="316px" height="316px" className="img-fluid" alt="home process" />
            </div>
            <div className="col-md-8 col-12 ">
           
             <div className="col text-center " id="time_expert">
                <h2 >Talk to our Expert</h2>
                <p>Get the best advice from our top talented subject experts. Any time. <br/>Any matter.</p>
              </div>
             <div className="row  align-items-center ">
             <div className="col d-flex mt-2">
                <div className="col">
                  <div className="main_div d-flex">
                    <div className="sub_div">
                        <div className="time_border ml-1"><span className="time_cercle_01">01</span></div>
                    </div>
                    <div className="sub_talk_proces mx-2  mt-1 ">
                    Book An Appointment
                    </div>
                  </div>
                </div>
              
                <div className="col">
                  <div className="main_div d-flex">
                    <div className="sub_div">
                        <div className="time_border ml-1"><span className="time_cercle">02</span></div>
                    </div>
                    <div className="sub_talk_proces mx-2  mt-1 ">
                    Book Your 30 Minutes Slot
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="main_div d-flex">
                    <div className="sub_div">
                        <div className="time_border ml-1"><span className="time_cercle">03</span></div>
                    </div>
                    <div className="sub_talk_proces mx-2  mt-1 ">
                    Make a Direct Call
                    </div>
                  </div>
                </div>
              
              </div>
             </div>
        
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="" id="right_proces">
        <div className="container mt-4 ">
          <div className="row py-2 d-flex justify-content-between"  >
            <div className="col-md-8 col-12 ">
<h2>QUITE INTERESTING RIGHT</h2>
<p>800-180-1000 / distancepathsala@gmail.com</p>
            </div>
            <div className="col-md-4 col-12 text-end d-flex  ">
            <button className="mt-3 " id="apply-Find-Course">
            Find Your Course
            </button>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
