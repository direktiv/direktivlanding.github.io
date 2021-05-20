import Serverless from "./img/serverless.png"
import ContainerBased from "./img/container-based.png"
import EventDriven from "./img/event-driven.png"
import Simple from "./img/simple.png"

export default function Easy() {

    return(
        <div className="g" style={{marginTop:"-25px"}}>

        <div className="sub-container easy">
            <h1 id="overview" style={{textAlign:"center"}}>Overview</h1>
            <div className="section-container" style={{paddingTop:"50px"}}>
                <div className="section">
                    <div className="easy-icon">
                        <img alt="event-driven" src={EventDriven}/>
                    </div>  
                    <div className="section-desc" style={{flex:"auto"}}>
                        <div style={{width:"100%"}}>
                            <h2 className="header-easy" style={{marginTop:"0px", textAlign:"left"}}>Event-Driven</h2>
                        </div>
                        <div style={{ flex: "auto" }}>
                            <p style={{lineHeight: 1.5}} className="desc gray">Leveraging the power and standardization of CloudEvents, Direktiv instantiates the business logic workflows based on conditions and events within your environment or microservice.</p>
                        </div>
                        {/* <div>
                            <div style={{width:"fit-content"}}>
                                <div className="learn-more">
                                    Learn More <GrLinkNext  style={{fontSize:"12pt"}}/>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="section">
                    <div className="easy-icon">
                        <img alt="container-based" src={ContainerBased}/>
                    </div>     
                    <div className="section-desc" style={{flex:"auto"}}>
                        <div style={{width:"100%"}}>
                            <h2 className="header-easy" style={{marginTop:"0px", textAlign:"left"}}>Container-Based</h2>
                        </div>
                        <div style={{flex:"auto"}}>
                            <p style={{lineHeight: 1.5}} className="desc gray">Harnessing the standardization of containers and cloud-native platforms. Direktiv decouples the microservices(or plugins) from the workflow engine.</p>
                        </div>
                        {/* <div style={{width:"fit-content"}}>
                            <div className="learn-more">
                                Learn More <GrLinkNext  style={{fontSize:"12pt"}}/>
                            </div>
                        </div> */}
                    </div>             
                </div>
            </div>
            <div className="section-container">
                <div className="section" >
                    <div className="easy-icon">
                        <img alt="serverless" src={Serverless}/>
                    </div>      
                    <div className="section-desc" style={{flex:"auto"}}>
                        <div style={{width:"100%"}}>
                            <h2 className="header-easy" style={{marginTop:"0px", textAlign:"left"}}>Serverless</h2>
                        </div>
                        <div style={{flex:"auto"}}>
                            <p style={{lineHeight: 1.5}} className="desc gray">Use what you need, when you need it without managing the infrastructure, the networking or the resources needed to run and maintain the workflow platform.</p>
                        </div>
                        {/* <div style={{width:"fit-content"}}>
                            <div className="learn-more">
                                Learn More <GrLinkNext  style={{fontSize:"12pt"}}/>
                            </div>
                        </div> */}
                    </div>                  
                </div>
                <div className="section">
                    <div className="easy-icon">
                        <img alt="simple workflows" src={Simple}/>
                    </div>                  
                    <div className="section-desc" style={{flex:"auto"}}>
                        <div style={{width:"100%"}}>
                            <h2 className="header-easy" style={{marginTop:"0px",textAlign:"left"}}>Powerful & Simple Workflow</h2>
                        </div>
                        <div style={{flex:"auto"}}>
                            <p style={{lineHeight: 1.5}} className="desc gray">Describe your business logic, plugins and microservices in a simple industry standard language & graphically for visual verification of flow and transition.</p>
                        </div>
                        {/* <div style={{width:"fit-content"}}>
                            <div className="learn-more">
                                Learn More <GrLinkNext  style={{fontSize:"12pt"}}/>
                            </div>
                        </div> */}
                    </div>    
                </div>
            </div>
        </div>
        </div>
    )
}