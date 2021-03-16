import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Logo from './logo.png'

import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import MenuButton from 'react-bootstrap-icons/dist/icons/list'

function Nav() {
    
    return(
        <Navbar variant="dark" style={{ height: "64px", padding: "0px"}}>
            <div className="nav-div">
                <Navbar.Brand href="/" style={{ padding: "11px" }}>
                    <img alt="direktiv" style={{ height:"42px" }} src={ Logo }/>
                </Navbar.Brand>
            </div>
            <div className="hide-xs nav-div" style={{ textAlign: "right" }} >
                <ul className="nav-ul">
                    <li className="nav-li">
                        <a href="https://github.com/vorteil/direktiv">GitHub</a>
                    </li>
                    <li className="nav-li">
                        <a href="https://docs.direktiv.io/">Docs</a>
                    </li>
                    <li className="nav-li">
                        <a href="https://wf.direktiv.io/">Log in</a>
                    </li>
                </ul>
            </div>
            <div className="display-xs nav-div" style={{ flexDirection: "row-reverse" }}>
                <ul className="nav-ul">
                    <li className="nav-li">
                            <Dropdown alignRight={true}>
                                <Dropdown.Toggle variant="light" id="dropdown-basic">
                                    <MenuButton/>
                                </Dropdown.Toggle>
                                <Dropdown.Menu >
                                    <Dropdown.Item style={{color: "#3f3f3f"}} href="https://github.com/vorteil/direktiv">GitHub</Dropdown.Item>
                                    <Dropdown.Item style={{color: "#3f3f3f"}} href="https://docs.direktiv.io/">Docs</Dropdown.Item>
                                    <Dropdown.Item style={{color: "#3f3f3f"}} href="https://wf.direktiv.io/">Log in</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                    </li>
                </ul>
            </div>
        </Navbar>
    )
}

export default Nav