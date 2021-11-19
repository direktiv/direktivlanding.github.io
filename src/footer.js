import {FaRegCopyright} from "react-icons/fa"
import { GrLinkedin, GrMedium, GrTwitter } from "react-icons/gr";
import Logo from "./img/direktiv-logo.png"
import VLogo from "./vorteil-logo.png"

export default function Footer() {
    var d = new Date();
    var n = d.getFullYear();

    return(
        <div className="footer">
            <div className="company" style={{display: "flex", flexDirection:"column", justifyContent:"center"}}>
                <div><img alt="direktiv" src={Logo}/></div>
                <p style={{lineHeight: 2}}>Turning Microservices into Business Logic</p>
               
                <div style={{display:"flex",  flexDirection:"column", gap:"3px", paddingTop:"30px"}} className="copyright">
                    <img src={VLogo} style={{width:"120px", paddingBottom:"20px"}}/>
                    <div style={{textAlign:"left", margin:"0"}}>
                    <FaRegCopyright/> {n} 
                    <a style={{textDecoration:"none", color:"#2396d8"}} href="https://vorteil.io">vorteil.io</a>
                    </div>
                </div>
            </div>
            <div className="footer-menu">
                <div className="overview">
                    <h4>Overview</h4>
                    <ul className="footer-list">
                        <li><a href="#features">Features</a></li>
                        <li><a href="#usecases">Use Cases</a></li>
                        <li><a href="https://docs.direktiv.io">Docs</a></li>
                        <li><a href="https://github.com/direktiv/direktiv">Github</a></li>
                        <li><a href="/privacy-policy.html">Privacy Policy</a></li>
                    </ul>
                </div>
                {/* <div className="f-cases">
                    <h4>Use Cases</h4>
                    <ul className="footer-list">
                        <li><a href="#!">Engagement</a></li>
                        <li><a href="#!">Intelligence</a></li>
                        <li><a href="#!">Organization</a></li>
                    </ul>
                </div> */}
                <div className="social">
                    <h4>Social Media</h4>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/company/direktiv/">
                            <div className="icon">
                                <GrLinkedin/>
                            </div>
                        </a>
                        <a href="https://twitter.com/direktiv_io">
                            <div className="icon">
                                <GrTwitter/>
                            </div>
                        </a>
                        <a href="https://blog.direktiv.io/">
                            <div className="icon">
                                <GrMedium/>
                            </div>
                        </a>
                    </div>
                
                </div>
            </div>
        </div>
    )
}