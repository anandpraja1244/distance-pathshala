import React from 'react'
import '.././Components/_FoundationPage.css'
import icon_location from "../../assets/images/icons/your-location.svg";
import icon_univCap from "../../assets/images/icons/graduation-cap.svg";
import icon_clock from "../../assets/images/icons/clock.svg";
import icon_college from "../../assets/images/icons/schoolIcon.svg";
import FoundationAccordiaon from './FoundationAccordiaon';


function _FoundationPage() {
    return (
        <div>
        
            <div className="foundation" id="accordianTab">
                <div className="container text-center py-5">
                    <h4 className="mt-2 text-light">ICFAI Foundation For Higher Education</h4>

                    <div className="row text-white d-flex  justifi-content-center align-items-center ">
                        <div className="col-md-3 col-sm-12 ">

                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnC8EvBPJyobDzJLvgsBL-rL0YiNI8S7Kmrw&usqp=CAU' className='  bordes_radius' alt='adAD' />
                            <span className=" borderright ">  </span>
                        </div>
                        <div className="col-md-2 col-sm-12">
                            <button type="button" className="btn btn-default ">
                                <span aria-hidden="true">
                                    <img src={icon_univCap} className="img-fluid" alt="" />
                                </span> ESTD,1984  |
                            </button>
                        </div>
                        <div className="col-md-2 col-sm-12">
                            <button type="button" className="btn btn-default ">
                                <span aria-hidden="true">
                                    <img src={icon_location} alt='adAD' />
                                </span> Hyderabad  |
                            </button>
                        </div>
                        <div className="col-md-2 col-sm-12">
                            <button type="button" className="btn btn-default ">
                                <span aria-hidden="true">
                                    <img src={icon_clock} alt="" />
                                </span> Mode : 1984  |
                            </button>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <button type="button" className="btn btn-default ">
                                <span aria-hidden="true">
                                    <img src={icon_college} alt="" />
                                </span> Autonomous Institute |
                            </button>
                        </div>


                    </div>


                    <div className='row'>
                       <div className='col-lg-12 col-sm-12'>
                       <div className="d-flex justify-content-center" id="foundation2">
                            <button className="btn btn-warning  btn-lg mr-5 btnmargin" >  Apply Now </button>
                            <button className="btn btn-outline-warning  btn-lg ml-4 ">Add to Compare</button>
                        </div>
                        
                       </div>
                    </div>



                </div>
            </div>

            <div className="container mt-3">

                <div className="row">
                    <div className="col-lg-2 col-sm-12">

                        <div className="foundantion__detail">
                            <h3>Approved by</h3>
                        </div>

                        <div className=" d-flex foundation__detailBody position-relative  ">

                            <div>
                                <div className=" position-absolute top-50  ">
                                    <div className='d-flex mb-2'>
                                        <div className=''>
                                            <p className='p-1' >UGC</p>
                                            <img src="http://localhost:3000/static/media/checkIcon.0e01d496.svg" className="img-fluid p-1" alt="ad" />
                                        </div>
                                        <div>
                                            <p  className='p-1'>DEB</p>
                                            <img src="http://localhost:3000/static/media/closeIcon.5b9be258.svg" className="img-fluid p-1" alt="asd" />
                                        </div>
                                        <div>
                                            <p className='p-1' >AIU</p>
                                           
                                            <img src="http://localhost:3000/static/media/checkIcon.0e01d496.svg" className="img-fluid p-1" alt="ad" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className=''>
                                            <p>NAAC Accreditation </p>
                                            <p>A, 3.43 (CGPA)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>



                    </div>
                    <div className="col-lg-2 col-sm-12">
                        <div className="">
                            <div className="foundantion__detail "  >
                                <h3 > Fee</h3>
                            </div>
                        </div>
                        <div className="foundation__detailBody position-relative">
                            <div>
                                <div className="position-absolute top-50 start-50 translate-middle ">
                                    <p className='d-flex align-items-center'>
                                        INR
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-12">
                        <div className="">
                            <div className="foundantion__detail">
                                <h3>
                                    Int. Calloboration
                                </h3>
                            </div>
                        </div>
                        <div className="foundation__detailBody position-relative">
                            <div>
                                <div className="position-absolute top-50 start-50 translate-middle ">
                                    <p className='d-flex align-items-center'>
                                        INR
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-12">
                        <div className=" ">
                            <div className="foundantion__detail">
                                <h3>magazine rank</h3>
                            </div>
                        </div>
                        <div className="foundation__detailBody position-relative">
                            <div className="">
                                <div>
                                    <div className="position-absolute outlook ">


                                        <div className="d-flex text-align-end">
                                            <div class="foundationcircle">10</div>
                                            <p className='align-self-center'>Outlook

                                            </p>

                                        </div>

                                        <div className="d-flex ">
                                            <div class="foundationcircle">50</div>
                                            <p className='align-self-center'>India Today </p>



                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-12">
                        <div className="">
                            <div className="foundantion__detail">
                                <h3>
                                    Duration & <br /> Learning Effort
                                </h3>
                            </div>
                        </div>
                        <div className="row foundation__detailBody position-relative">
                            <div className=''>
                                <div className="position-absolute top-50 start-50 translate-middle ">
                                    <div>
                                        <p>

                                            Years
                                        </p>
                                    </div>
                                    <div>
                                        <p>15 hrs/week</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-12">
                        <div className="">
                            <div className="foundantion__detail">
                                <h3>sessions</h3>
                            </div>
                        </div>
                        <div className="foundation__detailBody position-relative">
                            <div>
                                <div className="position-absolute top-50 start-50 translate-middle">
                                    <p>current -

                                    </p>
                                    <div></div>
                                    <p>Next -

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           <FoundationAccordiaon/>

        </div>
    )
}

export default _FoundationPage