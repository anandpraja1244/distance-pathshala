import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import "../../mycss.css";
// import Search from "../../assets/images/process/Search.svg";
import Carousel from "react-multi-carousel";
import "../../../node_modules/react-multi-carousel/lib/styles.css";
import Uni1 from "../../assets/images/crasual/1.svg";
import Uni2 from "../../assets/images/crasual/2.svg";
import Uni3 from "../../assets/images/crasual/3.svg";
import Uni4 from "../../assets/images/crasual/4.svg";
import Uni5 from "../../assets/images/crasual/5.svg";
import Uni6 from "../../assets/images/crasual/6.svg";
import Uni7 from "../../assets/images/crasual/7.svg";
import Uni8 from "../../assets/images/crasual/8.svg";
import Uni9 from "../../assets/images/crasual/9.svg";
import Uni10 from "../../assets/images/crasual/10.svg";
import Uni11 from "../../assets/images/crasual/11.svg";
import Uni12 from "../../assets/images/crasual/12.svg";


const Coursecrasual = () => {
  const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
      }
      
    
  };

  return (
    <div className="container">
   
   <Carousel
    swipeable={true}
  draggable={true}
  showDots={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
//   autoPlay={this.props.deviceType !== "mobile" ? true : true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}

 className="mt-3">
   <div><img src={Uni1} className="w-100 mx-2 p-2 rounded"  /></div>
   <div><img src={Uni2} className="w-100 mx-2 p-2 rounded"  /></div>
   <div><img src={Uni3} className="w-100 mx-2 p-2 rounded"  /></div>
   <div><img src={Uni4} className="w-100 mx-2 p-2 rounded"  /></div>
   <div><img src={Uni5} className="w-100 mx-2 p-2 rounded"  /></div>
   <div><img src={Uni6} className="w-100 mx-2 p-2 rounded"  /></div>
   <div><img src={Uni7} className="w-100 mx-2 p-2 rounded"  /></div>
   <div><img src={Uni8} className="w-100 mx-2 p-2 rounded"  /></div>
   <div><img src={Uni9} className="w-100 mx-2 p-2 rounded"  /></div>
   <div><img src={Uni10} className="w-100 mx-2 p-2 rounded"  /></div>
   <div><img src={Uni11} className="w-100 mx-2 p-2 rounded"  /></div>
   <div><img src={Uni10} className="w-100 mx-2 p-2 rounded"  /></div>
 
          </Carousel>
    </div>
  );
};
export default Coursecrasual;
