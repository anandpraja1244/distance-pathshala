import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import "../../mycss.css";
import Search from "../../assets/images/process/search.svg";
// import Typewriter from './typewriter-effect/dist/core';
import Typewriter from "../../../node_modules/typewriter-effect/dist/react";
// import Typewriter from "../../../node_modules/typewriter-effect/dist/core";


import Carousel from "react-multi-carousel";


const Carousal = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };

  return (
    <div id="search">
   <Carousel className="mt-3" responsive={responsive}>
<div className="compair-text">
  <h3>MBA</h3>
  <p>
    MBA stands for Master of Business Administration and
    is one of the most demanded post-graduate degrees
    globally. This two-year degree opens the door to a
    variety of corporate career opportunities
  </p>
  <button className="mt-3">Read More</button>
</div>

<div className="compair-text">
  <h3>MA</h3>
  <p>
    The MA, or Master of Arts, is a postgraduate arts
    programme. Students can pursue an MA after
    completing their bachelor's degree. It is a two-year
    programme that can be pursued by applicants who hold
    a bachelor's degree.
  </p>
  <button className="mt-3">Read More</button>
</div>

<div className="compair-text">
  <h3>M.Com</h3>
  <p>
    Masters of Commerce is the full form of MCom. An
    entrance exam is required for MCom admission at
    elite universities. MCom programmes in India are
    available in full-time, part-time, distance
    learning, correspondence.
  </p>
  <button className="mt-3">Read More</button>
</div>

<div className="compair-text">
  <h3>MCA</h3>
  <p>
    The Master of Computer Application is a postgraduate
    degree that teaches students about computer
    programmes, application software, computer
    architecture, operating systems, and other topics.
    The course is for a period of two years.
  </p>
  <button className="mt-3">Read More</button>
</div>

<div className="compair-text">
  <h3>M.Tech</h3>
  <p>
    M.Tech is a professional postgraduate engineering
    master's degree programme granted to individuals
    after they have completed two years of engineering
    education. This degree is based on a specific
    engineering field.
  </p>
  <button className="mt-3">Read More</button>
</div>
</Carousel>

    </div>
    
  );
};
export default Carousal;
