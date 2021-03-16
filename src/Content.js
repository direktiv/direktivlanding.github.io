import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ImgCarousel from './carousel'

function Content() {
    return(
        <Container style={{ flex: "auto" }}>
            <Row>
                <Col className="center-children" style={{ height: "500px" }}>
                    <div style={{ marginTop: "150px" }}>
                        <div id="banner-logo">
                            <svg style={{fill:"white"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 579.04"><defs></defs><title>direktiv (logo)</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path id="Symbol" class="cls-1" d="M600,261.81a81.47,81.47,0,0,0-68-80.2C498,76.37,399.17,0,282.77,0h-212V271.15l-34-34L0,273.89l96.74,96.73,96.73-96.73-36.74-36.75-34,34V52h160c90.57,0,167.71,57.76,197.05,138.3a81.37,81.37,0,0,0,0,143.11c-29.34,80.54-106.52,138.28-197.09,138.28H178.13V416.25H15.34V579H178.13V523.63H282.77c116.36,0,215-76.39,249-181.58A81.46,81.46,0,0,0,600,261.81ZM126.16,527.07H67.31V468.22h58.85ZM518.61,291.24A29.43,29.43,0,1,1,548,261.81,29.46,29.46,0,0,1,518.61,291.24Z"/></g></g></svg>
                        </div>
                        <div id="banner-title">
                            <b>direktiv</b>
                        </div>
                        <div>
                            <p>
                            Event-Based Serverless Container Workflows!
                            </p>
                            <p>
                                <b>Beta now live!</b> 
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row xs={1} sm={1} md={3} className="">
                <Col>
                    <div className="paper">
                        <div className="paper-header">
                            <h3>
                                No code, just configure
                            </h3>
                        </div>
                        <div className="paper-content">
                            <p>
                                Leverage the industry specification, remove the need for custom code development and leverage shared software components
                            </p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="paper">
                        <div className="paper-header">
                            <h3>
                                Cost efficient @ speed and scale
                            </h3>
                        </div>
                        <div className="paper-content">
                            <p>
                                Remove cost dependencies of cloud or infrastructure providers, execute & scale workflows at speed
                            </p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="paper">
                        <div className="paper-header">
                            <h3>
                                Secure, isolated & multi-tenanted
                            </h3>
                        </div>
                        <div className="paper-content">
                            <p>
                                Isolated workflows, isolated code execution, isolated container images - it's all about security!
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <ImgCarousel />
            </Row>
                    <Row>
                        <Col>
                        <br/>
                            <h2>
                                Simple use-cases
                            </h2>
                        </Col>
                    </Row>
                    <Row className="white-row">
                        <Col>
                            <h4>
                                STEM research
                            </h4>
                            <p>
                                Any STEM research candidate can execute common analysis workflows based on pre-defined container repositories
                                or data analysis result sets without any programmatic knowledge. Compute recourse can be made available on 
                                demand and at scale.
                            </p>
                        </Col>
                    </Row>
                    <Row className="white-row">
                        <Col>
                            <h4>
                                Micro-services
                            </h4>
                            <p>
                                You can use Direktiv to make decisions about how best to process data, for example, to do post processing
                                of groups of satellite images to determine the amount of trees per acre of land. Depending on the size and 
                                resolution of the image, this Direktiv workflow will determine whether to use AWS, Google Cloud, or Azure 
                                services to complete post-processing of each file, in order to optimize runtime and costs.
                            </p>
                        </Col>
                    </Row>
                    <Row className="white-row">
                        <Col>
                            <h4>
                                Batch processing
                            </h4>
                            <p>
                                You can perform secondary analysis on data to identify meaningful information. Direktiv can coordinate multiple
                                batch jobs that takes raw reads generated from geospatial information or image recognition software and inject 
                                these as additional metrics into external databases or GitHub code repositories.
                            </p>
                        </Col>
                    </Row>
                    <Row className="white-row">
                        <Col>
                            <h4>
                                Secure payment
                            </h4>
                            <p>
                                Leverage the event-driven nature of Direktiv workflows, internal payment processing based on single instance 
                                requests ensures that once the payment has been completed and written to an audit file all of the infrastructure 
                                associated with the payment is completely destroyed - single use workflows.
                            </p>
                        </Col>
                    </Row>
        </Container>
    )
}

export default Content