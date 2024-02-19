import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Nav } from 'react-bootstrap';

const Ugcoursetag = () => {

    

  return (
    <div>
      <srction>
        <div className="pb-3 text-center">
        <div className='d-flex' id="ugcource">
        <Nav.Link href="https://distancepathshala.com/ug-courses/online-distance-bba/finance" >BBA Courses |</Nav.Link>
            <Nav.Link href="https://distancepathshala.com/ug-courses/online-distance-bcom/banking-finance" >B.Com Courses |</Nav.Link>
            <Nav.Link href="https://distancepathshala.com/ug-courses/online-distance-ba">BA Courses |</Nav.Link>
            <Nav.Link href="https://distancepathshala.com/ug-courses/online-distance-bba/marketing" >MBA Courses |</Nav.Link>
            <Nav.Link href="https://distancepathshala.com/ug-courses/online-distance-bca" >BCA Courses |</Nav.Link>
            <Nav.Link href="https://distancepathshala.com/ug-courses/online-distance-btech/computer-science-engineering" >B.Tech Courses |</Nav.Link>


        </div>
          </div>
      </srction>
    </div>
  );
};


export default Ugcoursetag;