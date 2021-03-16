import React from 'react';
import Vorteil from './vlogo.png'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Footer() {
    return(
        <Row style={{marginBottom: "0px"}}>
            <Col>
                <div style={{ textAlign: "center", lineHeight: "64px" }}>
                    Powered by <div style={{ display: "inline" }}>
                        <a href="https://vorteil.io" style={{display:'inline', alignItems:'center', color: 'white', textDecoration: 'none'}}>
                            <img alt="vorteil" style={{height:"30px", paddingRight:"3px"}} src={Vorteil}/>
                        Vorteil.io
                        </a>
                    </div>
                </div>
            </Col>
        </Row>
    )
}    

export default Footer