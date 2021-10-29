import { GrLinkNext } from "react-icons/gr";

import OPAT from "./img/opa-telemetry.png"
import CodeFunctions from "./img/code-functions.png"
import Cloud from "./img/cloud.png"
import Events from "./img/cloud-events.png"
import Direktiv from "./img/direktiv.png"

export default function Points() {

    return(
        <div className="g">
        <div className="sub-container points">
        <h1 id="features" style={{textAlign:"center", margin: 0}}>Features</h1>

            <div className="points-container">
                <div className="text">
                    <h2>Your code, containers or functions</h2>
                    <p className="gray" style={{lineHeight: 2}}>Whatever skills your people currently have they can re-use. Direktiv places no restrictions on what you
can use in the workflows, because the components are run as industry standard containers.</p>
                    <div className="landing-btn" style={{paddingTop:"30px"}}>
                        <a className="consul" href="https://blog.direktiv.io/direktiv-serverless-custom-plugins-in-go-java-node-python-or-rust-or-anything-1b41a257af91">Learn More</a>
                        <a className="started" href="https://github.com/direktiv/direktiv-apps/tree/master/examples">Get Started <GrLinkNext  style={{fontSize:"12pt"}}/></a>
                    </div>
                </div>
                <div className="img">
                    <img alt="code-functions" src={CodeFunctions} style={{width:"100%", height:"auto", maxWidth:"600px"}} />
                </div>
            </div>
            <div className="points-container">
                <div className="img">
                    <img alt="cloud-support" src={Cloud}  style={{width:"100%", height:"auto", maxWidth:"600px"}}/>
                </div>
                <div className="text">
                    <h2>Any cloud, platform or service</h2>
                    <p className="gray" style={{lineHeight: 2}}>Direktiv removes the risk of running multiple solutions within the environment to support multiple
vendors or cloud platforms. It’s cloud and platform agnostic and gives a customer freedom of choice.</p>
                    <div className="landing-btn" style={{paddingTop:"30px"}}>
                    <a className="consul" href="https://aws.plainenglish.io/direktiv-v0-2-1-deploying-on-aws-eks-or-docker-and-new-ui-c94741d7d74b">Learn More</a>
                        <a className="started" href="https://docs.direktiv.io/docs/install.html">Get Started <GrLinkNext  style={{fontSize:"12pt"}}/></a>
                    </div>
                </div>
            </div>
            <div className="points-container">
                <div className="text" >
                    <h2>Driven by events from anywhere!</h2>
                    <p className="gray" style={{lineHeight: 2}}>Direktiv is driven by events from cloud platforms, applications in-house or SaaS platforms. Stopping,
starting or acting based on conditions and events within the environment, Direktiv intelligently handles
CloudEvents.</p>
                    <div className="landing-btn" style={{paddingTop:"30px"}}>
                        <a className="consul" href="https://blog.direktiv.io/direktiv-event-driven-serverless-container-workflows-introduction-8e6bb4b1a54a">Learn More</a>
                        <a className="started" href="https://docs.direktiv.io/docs/walkthrough/events.html">Get Started <GrLinkNext  style={{fontSize:"12pt"}}/></a>
                    </div>
                </div>
                <div className="img">
                    <img alt="cloud-events" src={Events} style={{width:"100%", height:"auto", maxWidth:"600px"}}/>
                </div>
            </div>
            <div className="points-container">
                <div className="img">
                    <img alt="open policy agent, open telemetry" src={OPAT}  style={{width:"100%", height:"auto", maxWidth:"600px"}}/>
                </div>
                <div className="text">
                    <h2>Visibility & Control</h2>
                    <p className="gray" style={{lineHeight: 2}}>Leveraging the OpenTelemetry and Open Policy Agent industry standard, users are given fine-grained policy-enabled control over workflows and containers, while offering visibility into runtime execution statistics.</p>
                    <div className="landing-btn" style={{paddingTop:"30px"}}>
                        <a className="consul" href="https://www.openpolicyagent.org/">Open Policy Agent</a>
                        <a className="started" href="https://opentelemetry.io/">Open Telemetry</a>
                    </div>
                </div>
            </div>
            <div className="points-container">
                <div className="text">
                    <h2>Direktiv Plugins</h2>
                    <p className="gray" style={{lineHeight:2}}>We at Direktiv have created <b>50+</b> plugins. Want to run a cloud based CLI in your workflows? Check out our <a style={{color:"#2396d8", textDecoration:"none"}} href="https://github.com/direktiv/direktiv-apps/tree/master/azgo">Azure</a>, <a style={{color:"#2396d8", textDecoration:"none"}} href="https://github.com/direktiv/direktiv-apps/tree/master/gcloud">Google</a> and <a style={{color:"#2396d8", textDecoration:"none"}} href="https://github.com/direktiv/direktiv-apps/tree/master/awsgo">Amazon</a>. You can find the entire range of our plugins at <a style={{color:"#2396d8", textDecoration:"none"}} href="https://github.com/direktiv/direktiv-apps">Github</a>.</p>
                </div>
                <div className="img">
                    <img alt="custom direktiv plugins" src={Direktiv}  style={{width:"100%", height:"auto", maxWidth:"600px"}}/>
                </div>
            </div>
        </div>
        </div>
    )
}