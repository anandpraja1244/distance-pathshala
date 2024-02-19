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
const ViewAllpage = () => {
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
            Online Distance <span> Ug Course </span>
          </h3>
        </div>
      </div>
      <div className="container hrm py-5">
        <Tab.Container id="left-tabs-example " defaultActiveKey="first">
          <Row>
            <Nav variant="pills">
              <Col className="col-12 col-sm">
                <Nav.Item>
                  <Nav.Link eventKey="first">Online and Distance BA</Nav.Link>
                </Nav.Item>
              </Col>
              <Col className="col-12 col-sm">
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    Online and Distance B.Com
                  </Nav.Link>
                </Nav.Item>
              </Col>
              <Col className="col-12 col-sm">
                <Nav.Item>
                  <Nav.Link eventKey="third">Online and Distance BA</Nav.Link>
                </Nav.Item>
              </Col>
              <Col className="col-12 col-sm">
                <Nav.Item>
                  <Nav.Link eventKey="four">Online and Distance BCA</Nav.Link>
                </Nav.Item>
              </Col>
              <Col className="col-12 col-sm">
                <Nav.Item>
                  <Nav.Link eventKey="five">B.Tech For Professionals</Nav.Link>
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
                            href="/ug-courses/online-distance-bba"
                          >
                            <Card.Text className="viewall">
                              BBA General
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
                            href="/ug-courses/online-distance-bba/engineering-and-project-management"
                          >
                            <Card.Text className="viewall">
                              Engineering and Project Management
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
                            href="/ug-courses/online-distance-bba/strategy-and-leadership"
                          >
                            <Card.Text className="viewall">
                              Strategy and Leadership
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
                            href="/ug-courses/online-distance-bba/travel-and-tourism-management"
                          >
                            <Card.Text className="viewall">
                              Travel and Tourism Management
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
                            href="/ug-courses/online-distance-bba/retail-and-sales-management"
                          >
                            <Card.Text className="viewall">
                              Retail and Sales Management
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
                            href="/ug-courses/online-distance-bba/international-business-management"
                          >
                            <Card.Text className="viewall">
                              International Business Management
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
                            href="/ug-courses/online-distance-bba/international-marketing"
                          >
                            <Card.Text className="viewall">
                              international Marketing
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
                            href="/ug-courses/online-distance-bba/it-and-systems-management"
                          >
                            <Card.Text className="viewall">
                              IT and Systems Management
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
                            href="/ug-courses/online-distance-bba/finance-and-leadership"
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
                            href="/ug-courses/online-distance-bba/international-finance"
                          >
                            {" "}
                            <Card.Text className="viewall">
                              International Finance
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          {" "}
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
                            href="/ug-courses/online-distance-bba/hrm"
                          >
                            {" "}
                            <Card.Text className="viewall">BA in HRM</Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          {" "}
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
                            href="/ug-courses/online-distance-bba/finance"
                          >
                            {" "}
                            <Card.Text className="viewall">Finance</Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          {" "}
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
                            href="/ug-courses/online-distance-bba/marketing"
                          >
                            <Card.Text className="viewall">Marketing</Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          {" "}
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
                            href="/ug-courses/online-distance-bba/banking-and-finance"
                          >
                            {" "}
                            <Card.Text className="viewall">
                              Banking & Finance
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          {" "}
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
                            href="/ug-courses/online-distance-bba/digital-marketing"
                          >
                            {" "}
                            <Card.Text className="viewall">
                              Digital Marketing
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          {" "}
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
                            href="/ug-courses/online-distance-bba/data-science-and-analytics"
                          >
                            {" "}
                            <Card.Text className="viewall">
                              Data Science and Analytics
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          {" "}
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
                            href="/ug-courses/online-distance-bba/multimedia-management"
                          >
                            <Card.Text className="viewall">
                              Multimedia Management
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          {" "}
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
                            href="/ug-courses/online-distance-bba/advertising-and-branding"
                          >
                            {" "}
                            <Card.Text className="viewall">
                              Advertising and Branding
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          {" "}
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
                            href="/ug-courses/online-distance-bba/advertisement-marketing"
                          >
                            {" "}
                            <Card.Text className="viewall">
                              Advertisement and Marketing
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          {" "}
                          <Card.Footer className="text-center">
                            Compare Universities
                          </Card.Footer>
                        </Nav.Link>
                      </Card>
                    </div>
                    <div className="col-md-3 mt-2 col-12"></div>
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
                          {" "}
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
                            {" "}
                            <Card.Text className="viewall">
                            Accouting and Finance
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          {" "}
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
                            {" "}
                            <Card.Text className="viewall">
                            International Finance
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          {" "}
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
                            {" "}
                            <Card.Text className="viewall">
                            Professional Accounting and Finance
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          {" "}
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
                          {" "}
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
                            {" "}
                            <Card.Text className="viewall">
                            FinTech
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          {" "}
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
                            {" "}
                            <Card.Text className="viewall">
                            Hindi
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          {" "}
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
                            {" "}
                            <Card.Text className="viewall">
                            Auditing
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          {" "}
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
                          {" "}
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
                            {" "}
                            <Card.Text className="viewall">
                            Law
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          {" "}
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
                            {" "}
                            <Card.Text className="viewall">
                            International Business
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          {" "}
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
                            {" "}
                            <Card.Text className="viewall">
                            Behavioural Finance
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          {" "}
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
                          {" "}
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
                          {" "}
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
                            {" "}
                            <Card.Text className="viewall">
                            Journalism and Mass Communication
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          {" "}
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
                            {" "}
                            <Card.Text className="viewall">
                            Hindi
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          {" "}
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
                            {" "}
                            <Card.Text className="viewall">
                            Economics
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          {" "}
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
                          {" "}
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
                          {" "}
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
                            {" "}
                            <Card.Text className="viewall">
                            Database Management System
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          {" "}
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
                            {" "}
                            <Card.Text className="viewall">
                            Data Science and Big Data Analytics
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          {" "}
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
                            {" "}
                            <Card.Text className="viewall">
                            Multimedia and Animation
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          {" "}
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
                          {" "}
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
                            {" "}
                            <Card.Text className="viewall">
                            Artificial Intelligence and Machine Learning
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          {" "}
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
                            {" "}
                            <Card.Text className="viewall">
                            Cloud and Security
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          {" "}
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
                            {" "}
                            <Card.Text className="viewall">
                            Cyber Security
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          {" "}
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
                          {" "}
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
                            {" "}
                            <Card.Text className="viewall">
                            Mechanical Engineering
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          {" "}
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
                            {" "}
                            <Card.Text className="viewall">
                            Computer Science Engineering
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          {" "}
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
                            {" "}
                            <Card.Text className="viewall">
                            Electrical Engineering
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          {" "}
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
                          {" "}
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
                            {" "}
                            <Card.Text className="viewall">
                            Electronics Communication Engine
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          {" "}
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
                            {" "}
                            <Card.Text className="viewall">
                            Machanical automobile Engineering
                            </Card.Text>
                          </Nav.Link>
                        </Card.Body>
                        <Nav.Link className="p-0" href="/compare">
                          {" "}
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
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
      <Footer />
    </div>
  );
};

export default ViewAllpage;
