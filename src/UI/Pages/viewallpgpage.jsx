import React from "react";
import { Helmet } from "react-helmet";
import CompareFindFilter from "../Components/_CompareFindFilter";
import Footer from "../Components/_Footer";
import Header from "../Components/_Header";
import Searchform from "./searchform";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { Card } from "react-bootstrap";
import BAinHindi from "../../assets/images/viewall/BA-in-Hindi.svg";
import { Link } from "react-router-dom";
// import Sonnet from '../../components/Sonnet';
const ViewAllPgpage = () => {
  return (
    <div>
      <Header />
      <Helmet>
        <meta charSet="utf-8" />
        <title></title>
      </Helmet>
      <Searchform />
      <div className="container hrm pt-5 mt-3">
        <div className="text-center">
          <h3>
            Online Distance <span> Pg Course </span>
          </h3>
        </div>
      </div>
      <div className="container hrm py-5">
        <Tab.Container id="left-tabs-example " defaultActiveKey="first">
          <Row>
            <Nav variant="pills">
              <Col className="col-12 col-sm">
                <Nav.Item>
                  <Nav.Link eventKey="first">Online & Distance MBA</Nav.Link>
                </Nav.Item>
              </Col>
              <Col className="col-12 col-sm">
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    Online & Distance MCA
                  </Nav.Link>
                </Nav.Item>
              </Col>
              <Col className="col-12 col-sm">
                <Nav.Item>
                  <Nav.Link eventKey="third">Online & Distance M.Com</Nav.Link>
                </Nav.Item>
              </Col>
              <Col className="col-12 col-sm">
                <Nav.Item>
                  <Nav.Link eventKey="four">Online & Distance MA</Nav.Link>
                </Nav.Item>
              </Col>
              <Col className="col-12 col-sm">
                <Nav.Item>
                  <Nav.Link eventKey="five">M.techS Professionals</Nav.Link>
                </Nav.Item>
              </Col>
              <Col className="col-12 col-sm">
                <Nav.Item>
                  <Nav.Link eventKey="six">Online & Distance M.Sc</Nav.Link>
                </Nav.Item>
              </Col>
            </Nav>
          </Row>
          <Row>
            <Col sm={12} className="mt-4">
              <Tab.Content id="viewall">
                <Tab.Pane eventKey="first">
                  <div className="row mt-3">
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex ">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/pg-courses/online-distance-mba/hr-management"
                          >
                            <Card.Text className="viewall">
                            HR Management
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex viewall">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/pg-courses/online-distance-mba/engineering-and-project-management"
                          >
                            <Card.Text className="viewall">
                            Finance Management
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex viewall">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/pg-courses/online-distance-mba/marketing-management"
                          >
                            <Card.Text className="viewall">
                            Marketing Management
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex viewall">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/pg-courses/online-distance-mba/general-management"
                          >
                            <Card.Text className="viewall">
                            General Management
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-3 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex ">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/pg-courses/online-distance-mba/system-and-operation-management"
                          >
                            <Card.Text className="viewall">
                            System and Operations Management
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                    <div className="col-md-3 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex viewall">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/pg-courses/online-distance-mba/marketing-and-finanace-management"
                          >
                            <Card.Text className="viewall">
                            Marketing and Finance Management
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                    <div className="col-md-3 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex viewall">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/pg-courses/online-distance-mba/marketing-and-hr-management"
                          >
                            <Card.Text className="viewall">
                            Marketing and HR Management
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                    <div className="col-md-3 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex viewall">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/pg-courses/online-distance-mba/aviation-management"
                          >
                            <Card.Text className="viewall">
                            Aviation Management
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex ">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/pg-courses/online-distance-mba/information-technology-management"
                          >
                            <Card.Text className="viewall">
                            Information Technology Management
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex viewall">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/pg-courses/online-distance-mba/logistic-supply-chain"
                          >
                            
                            <Card.Text className="viewall">
                            Logistics and Supply Chain Management
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex viewall">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/pg-courses/online-distance-mba/banking-finance"
                          >
                            
                            <Card.Text className="viewall">Banking & Finance Management</Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex viewall">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/pg-courses/online-distance-mba/international-finance"
                          >
                            
                            <Card.Text className="viewall">International Finance Management</Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex ">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/pg-courses/online-distance-mba/data-science-analytics"
                          >
                            <Card.Text className="viewall">Data Science and Analytics Management</Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex viewall">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/pg-courses/online-distance-mba/finance-leadership"
                          >
                            
                            <Card.Text className="viewall">
                            Finance and Leadership
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex viewall">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/pg-courses/online-distance-mba/digital-marketing"
                          >
                            
                            <Card.Text className="viewall">
                              Digital Marketing
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex viewall">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/pg-courses/online-distance-mba/banking-marketing"
                          >
                            
                            <Card.Text className="viewall">
                            Banking Marketing
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex ">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/pg-courses/online-distance-mba/multimedia-management"
                          >
                            <Card.Text className="viewall">
                              Multimedia Management
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex viewall">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/pg-courses/online-distance-mba/data-science-and-analytics-management"
                          >
                            
                            <Card.Text className="viewall">
                            Data Science and Analytics Management
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex viewall">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/pg-courses/online-distance-mba/information-technology-management"
                          >
                            
                            <Card.Text className="viewall">
                            Information Technology Management
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                    {/*  */}
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex viewall">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/pg-courses/online-distance-mba/leadership-and-stragey"
                          >
                            
                            <Card.Text className="viewall">
                            Leadership and Stragey
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex viewall">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/pg-courses/online-distance-mba/buisness-management"
                          >
                            
                            <Card.Text className="viewall">
                            Buisness Management
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex viewall">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/pg-courses/online-distance-mba/mba_powermanagemnet"
                          >
                            
                            <Card.Text className="viewall">
                            Power Managemnet
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                
                  
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
          
                  <div className="row mt-3">
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex ">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/ug-courses/online-distance-bcom"
                          >
                            <Card.Text className="viewall">B.Com General</Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex viewall">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/ug-courses/online-distance-bcom/accounts-and-finance"
                          >
                            
                            <Card.Text className="viewall">
                            Accouting and Finance
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex viewall">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/ug-courses/online-distance-bcom/international-finance"
                          >
                            
                            <Card.Text className="viewall">
                            International Finance
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex viewall">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/ug-courses/online-distance-bcom/professional-and-accounting-finance"
                          >
                            
                            <Card.Text className="viewall">
                            Professional Accounting and Finance
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex ">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/ug-courses/online-distance-bcom/banking-finance"
                          >
                            <Card.Text className="viewall">Banking Fincance</Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex viewall">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/ug-courses/online-distance-bcom/fin-tech"
                          >
                            
                            <Card.Text className="viewall">
                            FinTech
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex viewall">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/ug-courses/online-distance-bcom/hindi"
                          >
                            
                            <Card.Text className="viewall">
                            Hindi
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex viewall">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/ug-courses/online-distance-bcom/auditing"
                          >
                            
                            <Card.Text className="viewall">
                            Auditing
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex ">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/ug-courses/online-distance-bcom/stock-market-operations"
                          >
                            <Card.Text className="viewall">Stock Market Operations</Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex viewall">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/ug-courses/online-distance-bcom/law"
                          >
                            
                            <Card.Text className="viewall">
                            Law
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex viewall">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/ug-courses/online-distance-bcom/international-business"
                          >
                            
                            <Card.Text className="viewall">
                            International Business
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex viewall">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/ug-courses/online-distance-bcom/behavioural-finance"
                          >
                            
                            <Card.Text className="viewall">
                            Behavioural Finance
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex ">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/ug-courses/online-distance-bcom/banking-and-insurance"
                          >
                            <Card.Text className="viewall">Banking and Insurance</Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                    <div className="col-md-3 mt-2 col-12">
                   
                    </div>
                    <div className="col-md-3 mt-2 col-12">
                
                    </div>
                    <div className="col-md-3 mt-2 col-12">
                 
                    </div>
                  </div>
                 
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                <div className="row mt-3">
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex ">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/ug-courses/online-distance-ba"
                          >
                            <Card.Text className="viewall">BA General</Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex viewall">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/ug-courses/online-distance-ba/journalism-and-mass-communication"
                          >
                            
                            <Card.Text className="viewall">
                            Journalism and Mass Communication
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex viewall">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/ug-courses/online-distance-ba/hindi"
                          >
                            
                            <Card.Text className="viewall">
                            Hindi
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex viewall">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/ug-courses/online-distance-ba/economics"
                          >
                            
                            <Card.Text className="viewall">
                            Economics
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex ">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/ug-courses/online-distance-ba/tourism-administrator"
                          >
                            <Card.Text className="viewall">Tourism Administrator</Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                    <div className="col-md-3 mt-2 col-12">
                
                    </div>
                    <div className="col-md-3 mt-2 col-12">
                  
                    </div>
                    <div className="col-md-3 mt-2 col-12">
                    
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="four">
                <div className="row mt-3">
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex ">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/ug-courses/online-distance-bca"
                          >
                            <Card.Text className="viewall">BCA General</Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex viewall">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/ug-courses/online-distance-bca/data-base-management-system"
                          >
                            
                            <Card.Text className="viewall">
                            Database Management System
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex viewall">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/ug-courses/online-distance-bca/data-science-and-big-data-analytics"
                          >
                            
                            <Card.Text className="viewall">
                            Data Science and Big Data Analytics
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex viewall">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/ug-courses/online-distance-bca/multimedia-and-animation"
                          >
                            
                            <Card.Text className="viewall">
                            Multimedia and Animation
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex ">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/ug-courses/online-distance-bca/data-analytics"
                          >
                            <Card.Text className="viewall">Data Analytics</Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex viewall">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/ug-courses/online-distance-bca/ai-and-machine-learning"
                          >
                            
                            <Card.Text className="viewall">
                            Artificial Intelligence and Machine Learning
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex viewall">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/ug-courses/online-distance-bca/cloud-and-security"
                          >
                            
                            <Card.Text className="viewall">
                            Cloud and Security
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex viewall">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/ug-courses/online-distance-bca/cyber-security"
                          >
                            
                            <Card.Text className="viewall">
                            Cyber Security
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                  </div>
                
                </Tab.Pane>
                <Tab.Pane eventKey="five">
                <div className="row mt-3">
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex ">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/ug-courses/online-distance-btech"
                          >
                            <Card.Text className="viewall">B Tech General</Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex viewall">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/ug-courses/online-distance-btech/mechincal-engineering"
                          >
                            
                            <Card.Text className="viewall">
                            Mechanical Engineering
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex viewall">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/ug-courses/online-distance-btech/computer-science-engineering"
                          >
                            
                            <Card.Text className="viewall">
                            Computer Science Engineering
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex viewall">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/ug-courses/online-distance-btech/electrical-engineering"
                          >
                            
                            <Card.Text className="viewall">
                            Electrical Engineering
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex ">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/ug-courses/online-distance-btech/civil-engineering"
                          >
                            <Card.Text className="viewall">Civil Engineering</Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex viewall">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/ug-courses/online-distance-btech/electronics-communication-engineering"
                          >
                            
                            <Card.Text className="viewall">
                            Electronics Communication Engine
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                    <div className="col-md-3 mt-2 col-12">
                      <Card border="primary">
                        <Card.Body className="d-flex viewall">
                          <Card.Title>
                            <img
                              src={BAinHindi}
                              alt="Vision"
                              className="img-fluid"
                            />
                          </Card.Title>
                          <Nav.Link
                            className="p-0 viewall"
                            href="/ug-courses/online-distance-btech/machanical-automobile-engineering"
                          >
                            
                            <Card.Text className="viewall">
                            Machanical automobile Engineering
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                    <div className="col-md-3 mt-2 col-12">
                   
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="six">
          
          <div className="row mt-3">
            <div className="col-md-3 mt-2 col-12">
              <Card border="primary">
                <Card.Body className="d-flex ">
                  <Card.Title>
                    <img
                      src={BAinHindi}
                      alt="Vision"
                      className="img-fluid"
                    />
                  </Card.Title>
                  <Nav.Link
                    className="p-0 viewall"
                    href="/ug-courses/online-distance-bcom"
                  >
                    <Card.Text className="viewall">B.Com General</Card.Text>
                  </Nav.Link>
                </Card.Body>
                <Nav.Link className="p-0" href="/compare">
                  
                  <Card.Footer className="text-center">
                    Compare Universities
                  </Card.Footer>
                </Nav.Link>
              </Card>
            </div>
            <div className="col-md-3 mt-2 col-12">
              <Card border="primary">
                <Card.Body className="d-flex viewall">
                  <Card.Title>
                    <img
                      src={BAinHindi}
                      alt="Vision"
                      className="img-fluid"
                    />
                  </Card.Title>
                  <Nav.Link
                    className="p-0 viewall"
                    href="/ug-courses/online-distance-bcom/accounts-and-finance"
                  >
                    
                    <Card.Text className="viewall">
                    Accouting and Finance
                    </Card.Text>
                  </Nav.Link>
                </Card.Body>
                <Nav.Link className="p-0" href="/compare">
                  
                  <Card.Footer className="text-center">
                    Compare Universities
                  </Card.Footer>
                </Nav.Link>
              </Card>
            </div>
            <div className="col-md-3 mt-2 col-12">
              <Card border="primary">
                <Card.Body className="d-flex viewall">
                  <Card.Title>
                    <img
                      src={BAinHindi}
                      alt="Vision"
                      className="img-fluid"
                    />
                  </Card.Title>
                  <Nav.Link
                    className="p-0 viewall"
                    href="/ug-courses/online-distance-bcom/international-finance"
                  >
                    
                    <Card.Text className="viewall">
                    International Finance
                    </Card.Text>
                  </Nav.Link>
                </Card.Body>
                <Nav.Link className="p-0" href="/compare">
                  
                  <Card.Footer className="text-center">
                    Compare Universities
                  </Card.Footer>
                </Nav.Link>
              </Card>
            </div>
            <div className="col-md-3 mt-2 col-12">
              <Card border="primary">
                <Card.Body className="d-flex viewall">
                  <Card.Title>
                    <img
                      src={BAinHindi}
                      alt="Vision"
                      className="img-fluid"
                    />
                  </Card.Title>
                  <Nav.Link
                    className="p-0 viewall"
                    href="/ug-courses/online-distance-bcom/professional-and-accounting-finance"
                  >
                    
                    <Card.Text className="viewall">
                    Professional Accounting and Finance
                    </Card.Text>
                  </Nav.Link>
                </Card.Body>
                <Nav.Link className="p-0" href="/compare">
                  
                  <Card.Footer className="text-center">
                    Compare Universities
                  </Card.Footer>
                </Nav.Link>
              </Card>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-3 mt-2 col-12">
              <Card border="primary">
                <Card.Body className="d-flex ">
                  <Card.Title>
                    <img
                      src={BAinHindi}
                      alt="Vision"
                      className="img-fluid"
                    />
                  </Card.Title>
                  <Nav.Link
                    className="p-0 viewall"
                    href="/ug-courses/online-distance-bcom/banking-finance"
                  >
                    <Card.Text className="viewall">Banking Fincance</Card.Text>
                  </Nav.Link>
                </Card.Body>
                <Nav.Link className="p-0" href="/compare">
                  
                  <Card.Footer className="text-center">
                    Compare Universities
                  </Card.Footer>
                </Nav.Link>
              </Card>
            </div>
            <div className="col-md-3 mt-2 col-12">
              <Card border="primary">
                <Card.Body className="d-flex viewall">
                  <Card.Title>
                    <img
                      src={BAinHindi}
                      alt="Vision"
                      className="img-fluid"
                    />
                  </Card.Title>
                  <Nav.Link
                    className="p-0 viewall"
                    href="/ug-courses/online-distance-bcom/fin-tech"
                  >
                    
                    <Card.Text className="viewall">
                    FinTech
                    </Card.Text>
                  </Nav.Link>
                </Card.Body>
                <Nav.Link className="p-0" href="/compare">
                  
                  <Card.Footer className="text-center">
                    Compare Universities
                  </Card.Footer>
                </Nav.Link>
              </Card>
            </div>
            <div className="col-md-3 mt-2 col-12">
              <Card border="primary">
                <Card.Body className="d-flex viewall">
                  <Card.Title>
                    <img
                      src={BAinHindi}
                      alt="Vision"
                      className="img-fluid"
                    />
                  </Card.Title>
                  <Nav.Link
                    className="p-0 viewall"
                    href="/ug-courses/online-distance-bcom/hindi"
                  >
                    
                    <Card.Text className="viewall">
                    Hindi
                    </Card.Text>
                  </Nav.Link>
                </Card.Body>
                <Nav.Link className="p-0" href="/compare">
                  
                  <Card.Footer className="text-center">
                    Compare Universities
                  </Card.Footer>
                </Nav.Link>
              </Card>
            </div>
            <div className="col-md-3 mt-2 col-12">
              <Card border="primary">
                <Card.Body className="d-flex viewall">
                  <Card.Title>
                    <img
                      src={BAinHindi}
                      alt="Vision"
                      className="img-fluid"
                    />
                  </Card.Title>
                  <Nav.Link
                    className="p-0 viewall"
                    href="/ug-courses/online-distance-bcom/auditing"
                  >
                    
                    <Card.Text className="viewall">
                    Auditing
                    </Card.Text>
                  </Nav.Link>
                </Card.Body>
                <Nav.Link className="p-0" href="/compare">
                  
                  <Card.Footer className="text-center">
                    Compare Universities
                  </Card.Footer>
                </Nav.Link>
              </Card>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-3 mt-2 col-12">
              <Card border="primary">
                <Card.Body className="d-flex ">
                  <Card.Title>
                    <img
                      src={BAinHindi}
                      alt="Vision"
                      className="img-fluid"
                    />
                  </Card.Title>
                  <Nav.Link
                    className="p-0 viewall"
                    href="/ug-courses/online-distance-bcom/stock-market-operations"
                  >
                    <Card.Text className="viewall">Stock Market Operations</Card.Text>
                  </Nav.Link>
                </Card.Body>
                <Nav.Link className="p-0" href="/compare">
                  
                  <Card.Footer className="text-center">
                    Compare Universities
                  </Card.Footer>
                </Nav.Link>
              </Card>
            </div>
            <div className="col-md-3 mt-2 col-12">
              <Card border="primary">
                <Card.Body className="d-flex viewall">
                  <Card.Title>
                    <img
                      src={BAinHindi}
                      alt="Vision"
                      className="img-fluid"
                    />
                  </Card.Title>
                  <Nav.Link
                    className="p-0 viewall"
                    href="/ug-courses/online-distance-bcom/law"
                  >
                    
                    <Card.Text className="viewall">
                    Law
                    </Card.Text>
                  </Nav.Link>
                </Card.Body>
                <Nav.Link className="p-0" href="/compare">
                  
                  <Card.Footer className="text-center">
                    Compare Universities
                  </Card.Footer>
                </Nav.Link>
              </Card>
            </div>
            <div className="col-md-3 mt-2 col-12">
              <Card border="primary">
                <Card.Body className="d-flex viewall">
                  <Card.Title>
                    <img
                      src={BAinHindi}
                      alt="Vision"
                      className="img-fluid"
                    />
                  </Card.Title>
                  <Nav.Link
                    className="p-0 viewall"
                    href="/ug-courses/online-distance-bcom/international-business"
                  >
                    
                    <Card.Text className="viewall">
                    International Business
                    </Card.Text>
                  </Nav.Link>
                </Card.Body>
                <Nav.Link className="p-0" href="/compare">
                  
                  <Card.Footer className="text-center">
                    Compare Universities
                  </Card.Footer>
                </Nav.Link>
              </Card>
            </div>
            <div className="col-md-3 mt-2 col-12">
              <Card border="primary">
                <Card.Body className="d-flex viewall">
                  <Card.Title>
                    <img
                      src={BAinHindi}
                      alt="Vision"
                      className="img-fluid"
                    />
                  </Card.Title>
                  <Nav.Link
                    className="p-0 viewall"
                    href="/ug-courses/online-distance-bcom/behavioural-finance"
                  >
                    
                    <Card.Text className="viewall">
                    Behavioural Finance
                    </Card.Text>
                  </Nav.Link>
                </Card.Body>
                <Nav.Link className="p-0" href="/compare">
                  
                  <Card.Footer className="text-center">
                    Compare Universities
                  </Card.Footer>
                </Nav.Link>
              </Card>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-3 mt-2 col-12">
              <Card border="primary">
                <Card.Body className="d-flex ">
                  <Card.Title>
                    <img
                      src={BAinHindi}
                      alt="Vision"
                      className="img-fluid"
                    />
                  </Card.Title>
                  <Nav.Link
                    className="p-0 viewall"
                    href="/ug-courses/online-distance-bcom/banking-and-insurance"
                  >
                    <Card.Text className="viewall">Banking and Insurance</Card.Text>
                  </Nav.Link>
                </Card.Body>
                <Nav.Link className="p-0" href="/compare">
                  
                  <Card.Footer className="text-center">
                    Compare Universities
                  </Card.Footer>
                </Nav.Link>
              </Card>
            </div>
            <div className="col-md-3 mt-2 col-12">
           
            </div>
            <div className="col-md-3 mt-2 col-12">
        
            </div>
            <div className="col-md-3 mt-2 col-12">
         
            </div>
          </div>
         
        </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
      <Footer />
    </div>
  );
};

export default ViewAllPgpage;
