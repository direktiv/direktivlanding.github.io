import EventDriven from "./img/event-driven-auto.png"
import Serverless from "./img/serverless-icon.png"
import ConnectedSaas from "./img/connected-saas.png"

export default function Cases() {

    return(
        <div className="g">
            <div className="sub-container cases">
                <h1 id="usecases" style={{textAlign:"center"}}>Use Cases</h1>
                <div className="use-cases">
                    <div className="use">
                        <div><img alt="event-driven" src={EventDriven}/></div>
                        <h3>Event-driven Automation</h3>
                        <p style={{flexGrow: 1,lineHeight: 1.5}} className="gray">Using CloudEvents to trigger simple serverless workflows, drive integrations and respond to changes in your environment. </p>
                        {/* <div style={{width:"100%", paddingTop:"20px", paddingBottom:"20px"}}>
                            <div style={{justifyContent:"center"}} className="learn-more">
                                Learn More <GrLinkNext  style={{fontSize:"12pt"}}/>
                            </div>
                        </div> */}
                    </div>
                    <div className="use">
                        <div><img alt="serverless" src={Serverless}/></div>
                        <h3>Serverless Processing</h3>
                        <p  style={{flexGrow: 1,lineHeight: 1.5}} className="gray">Leverage the power of serverless compute, container standards and Knative intelligence to execute any code, anywhere!</p>
                        {/* <div style={{width:"100%", paddingTop:"20px", paddingBottom:"20px"}}>
                            <div style={{justifyContent:"center"}} className="learn-more">
                                Learn More <GrLinkNext  style={{fontSize:"12pt"}}/>
                            </div>
                        </div> */}
                    </div>
                    <div className="use">
                        <div><img alt="connectedsaas" src={ConnectedSaas}/></div>
                        <h3>Connected SaaS Services</h3>
                        <p  style={{flexGrow: 1, lineHeight: 1.5}} className="gray">Connect your SaaS platforms, cloud provider services and on-premise applications from anywhere using generic containers!</p>
                        {/* <div style={{width:"100%", paddingTop:"20px", paddingBottom:"20px"}}>
                            <div style={{justifyContent:"center"}} className="learn-more">
                                Learn More <GrLinkNext  style={{fontSize:"12pt"}}/>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>

    )
}