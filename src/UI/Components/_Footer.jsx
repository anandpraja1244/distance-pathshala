import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import URLMapping from "../../Context/URLs";

import React from "react";
import { Container, Navbar, Nav, NavDropdown, Form, InputGroup } from "react-bootstrap";
import Copy from "../../assets/images/copy.svg";
// images, icons
// import icon_brand from "../../assets/images/brand/Option4.png";
import logowhite from "../../assets/images/process/whitelogo.svg";
export default function Footer() {
  return (
    <>
      <a href="https://wa.me/919068474447" class="float" target="_blank">
        <i class="fa fa-whatsapp my-float"></i>
      </a>
      {/* new footer */}
      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="footerBlack__brand">
                <img src={logowhite} width="135px" alt="" />
                <p className="mt-2 pt-2">
                  Distancepathshala is a concoction of experienced education
                  professionals with wide expertise. Our team focuses on the
                  utmost importance of distance education and delivers precise
                  information about genuine institutions. Experience the new way
                  of distance education with DistancePathshala.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <h1 className="footer_heading">Get in touch</h1>
              <ul className="footer_ul">
              <li> <Link to={URLMapping.aboutUs.label}>About Us</Link></li>
              <li> <Link to={URLMapping.contactUs.label}>Contact Us</Link></li>

             
                
              <li> <Link to={URLMapping.compare.label}>
                          Compare University
                        </Link></li>
             
            
              </ul>
            </div>
            <div className="col-md-3">
              <h1 className="footer_heading">PG Courses</h1>
              <ul className="footer_ul">
                <a href="/courses/list">
                  <li>MA</li>
                </a>
                <a href="/courses/list">
                  <li>MCA</li>
                </a>
                <a href="/courses/list">
                  <li>M.Com</li>
                </a>
                <a href="/courses/list">
                  <li>MBA</li>
                </a>
              </ul>
            </div>
            <div className="col-md-3">
              <h1 className="footer_heading">UG Courses</h1>
              <ul className="footer_ul">
                <a href="/courses/list">
                  <li>Top Universites</li>
                </a>
                <a href="/courses/list">
                  <li>Top Searches</li>
                </a>
                <a href="/courses/list">
                  <li>Top Comparison</li>
                </a>
                <a href="/courses/list">
                  <li>Experts Advice - 30 mins</li>
                </a>
              </ul>
            </div>
          </div>

          <div className="row mt-2 pt-3">
            <div className="col-md-3">
              <div className="footerBlack__brand">
                <h1 className="footer_heading">Subscribe</h1>
                <p className="mt-2 pt-2">
                  Don't miss to subscribe to our new feeds, kindly fill the form
                </p>
              
                <InputGroup className="mb-3 mt-3">
                  <Form.Control aria-label="Email Address"  type="email"/>
                  <InputGroup.Text className="footericon"><i class="fa fa-telegram tele" ></i></InputGroup.Text>
                </InputGroup>
              </div>
            </div>

            <div className="col-md-9">
              <h1 className="footer_heading">
                Online & Distance Best Universitys for
              </h1>
              <div className="d-flex justify-content-between">
                <ul className="footer_ul">
                  <a href="/courses/list">
                    <li>Best University for MBA</li>
                  </a>
                  <a href="/courses/list">
                    <li>Best University for MCA</li>
                  </a>
                  <a href="/courses/list">
                    <li>Best University for M.Com</li>
                  </a>
                  <a href="/courses/list">
                    <li>Best University for MA</li>
                  </a>
                  <a href="/courses/list">
                    <li>Best University for BBA</li>
                  </a>
                  <a href="/courses/list">
                    <li>Best University for B.COM</li>
                  </a>
                  <a href="/courses/list">
                    <li>Best University for BA</li>
                  </a>
                </ul>

                <ul className="footer_ul">
                  <a href="/courses/list">
                    <li>Best University for BCA</li>
                  </a>
                  <a href="/courses/list">
                    <li>Best University for B.Tech</li>
                  </a>
                  <a href="/courses/list">
                    <li>Best University for M.Tech</li>
                  </a>
                  <a href="/courses/list">
                    <li>Best University for M.Sc</li>
                  </a>

                  <a href="/courses/list">
                    <li>Best University for Diploma</li>
                  </a>

                  <a href="/courses/list">
                    <li>Best University for Certificate</li>
                  </a>
                  <a href="/courses/list">
                    <li>Diploma & Certificate</li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
       
        </div>
      
      </section>
      <div className="w-100 text-center bg-dark text-light py-2 font-20">
      © All Rights Reserved
          </div>

     
    </>
  );
}
