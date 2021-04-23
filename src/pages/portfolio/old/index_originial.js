import React from "react";
import { CardDeck, Card, Col, Container, Row } from "react-bootstrap";
import './style.css';

function Portfolio() {

    return (
        <Container>
            <Col md={12}>
                <CardDeck className="mt-4">

                    <Card.Body id="grad1">

                        <Card.Title>Portfolio</Card.Title>

                        {/* <!-- line divider between heading and image --> */}
                        <div className="line" />

                        {/* <!-- Card Container --------------------------> */}

                        {/* <!-- Card Row 1 ------------------------------> */}
                        <Row>
                            <Col md={6}>
                                <Card className="card shadow p-2 mt-4">
                                    <Card.Body className="portfolio-card-body">
                                        <Card.Title className="portfolio-card-title">
                                            <h6>Ashen Void - Game Web App</h6>
                                        </Card.Title>
                                        <Row>
                                            <a href="https://ashen-void.herokuapp.com/"><img className="img-fluid shadow" src="images/ashen-void.gif" alt="ashen-void" /></a>
                                        </Row>
                                        <Row className="mt-2 justify-content-center">
                                            {/* <!-- Git Hub Profile Link --> */}
                                            <a className="portlolio-link" href="https://github.com/AlecWGreene/MSU-Project3-Four-Horsemen"><i className="fab fa-github fa-1x"></i></a>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={6}>
                                <Card className="card shadow p-2 mt-4">
                                    <Card.Body className="portfolio-card-body">
                                    <Card.Title className="portfolio-card-title">
                                            <h6>Avalon - Game Web App</h6>
                                        </Card.Title>
                                        <Row>
                                            <a href="https://avalon-web-app.herokuapp.com/"><img className="img-fluid shadow" src="images/Avalon.gif" alt="WeatherDine" /></a>
                                        </Row>
                                        <Row className="mt-2 justify-content-center">
                                            {/* <!-- Git Hub Profile Link --> */}
                                            <a className="portlolio-link" href="https://github.com/AlecWGreene/MSUProject2Team4"><i className="fab fa-github fa-1x"></i></a>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>   
                        </Row>
                        {/* <!-- end: Card Row 1 -------------------------> */}

                        {/* <!-- Card Row 2 ------------------------------> */}
                        <Row>
                            <Col md={6}>
                                <Card className="card shadow p-2 mt-4">
                                    <Card.Body className="portfolio-card-body">
                                        <Card.Title className="portfolio-card-title">
                                            <h6>Employee Tracker - CLI</h6>
                                        </Card.Title>
                                        <Row>
                                            <a href="https://github.com/SeaBa55/employee-tracker"><img className="img-fluid shadow" src="images/employee-tracker.gif" alt="weather-dashboard" /></a>
                                        </Row>
                                        <Row className="mt-2 justify-content-center">
                                            {/* <!-- Git Hub Profile Link --> */}
                                            <a className="portlolio-link" href="https://github.com/SeaBa55/employee-tracker"><i className="fab fa-github fa-1x"></i></a>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={6}>
                                <Card className="card shadow p-2 mt-4">
                                    <Card.Body className="portfolio-card-body">
                                        <Card.Title className="portfolio-card-title">
                                            <h6>Weather Dashboard - Open Weather API</h6>
                                        </Card.Title>
                                        <Row>
                                            <a href="https://seaba55.github.io/weather-dashboard/"><img className="img-fluid shadow" src="images/weather-dashboard.gif" alt="weather-dashboard" /></a>
                                        </Row>
                                        <Row className="mt-2 justify-content-center">
                                            {/* <!-- Git Hub Profile Link --> */}
                                            <a className="portlolio-link" href="https://github.com/SeaBa55/weather-dashboard"><i className="fab fa-github fa-1x"></i></a>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        {/* <!-- end: Card Row 2 --------------------------> */}

                    {/* <!-- Card Container ---------------------------> */}
                    </Card.Body>
                </CardDeck>
            </Col>
        </Container>
    );
}
  
export default Portfolio;