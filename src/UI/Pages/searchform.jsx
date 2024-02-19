import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import "../../mycss.css";
import Search from "../../assets/images/process/search.svg";
// import Typewriter from './typewriter-effect/dist/core';
import Typewriter from "../../../node_modules/typewriter-effect/dist/react";
// import Typewriter from "../../../node_modules/typewriter-effect/dist/core";
import Typewrite from "./Typewrite";
import Ugcoursetag from "./Ugcoursetag";
import Coursecrasual from "./Coursecrasual";


const Searchform = () => {

    const Mytext = [" 50+ Universities in India", "  4k+ Distance Courses in India", " 2L+ Student Reviews in India"];


  return (
    <div id="search">
      <srction>
        <div className="container pt-4">
        
          <h1>Search Over<Typewrite data={Mytext}  /></h1>
          <p>University and Genuine Comparison, Absolutely Free!!</p>
          <div className="search-form mt-4">
          <InputGroup className="mb-3">
          <Button className="search-icon" >
          <img src={Search} className="img-f" alt="image" />
        </Button>
        <Form.Control className="anisecrch"
          placeholder="Search Course for MBA, B.Tech, BA Finance"
          aria-describedby="basic-addon2"
        />
        <Button className="rightsearch" variant="outline-secondary" id="button-addon2">
          Search Now
        </Button>
      </InputGroup>
          </div>
        </div>
        <Ugcoursetag />
        <br/>
      </srction>
      <Coursecrasual/>

    </div>
    
  );
};
export default Searchform;
