import { GrLinkNext, GrMenu } from 'react-icons/gr'
import { useMediaQuery } from 'react-responsive'
import Logo from "./img/direktiv-logo.png"
import VLogo from "./img/direktiv-logo.png"

const menuItems = [
    {
        name: "Overview",
        link: "#overview",
        highlighted: false,
    }, 
    {
        name: "Docs",
        link: "https://docs.direktiv.io",
    },
    {
        name: "Features",
        link: "#features",
        highlighted: false
    },
    {
        name: "Use Cases",
        link: "#usecases",
        highlighted: false
    },
    {
        name: "Github",
        link: "https://github.com/direktiv/direktiv",
        highlighted: true
    }
]

export default function Landing() {
    const isMobile = useMediaQuery({ maxWidth: 767 })

    return(
        <div className="slanted">
            <div className="container">
                <nav>
                    <div className="logo"><img src={Logo} style={{height:"40px"}} alt="direktiv"/></div>
                    <div className="menu">
                        {
                            isMobile ? 
                            <div className="dropdown" onClick={()=>document.getElementById("menu-content").classList.toggle("show")}>
                                <GrMenu className="menu-icon" />
                                <div className="dropdown-content" id="menu-content">
                                    {
                                        menuItems.map((item)=><a href={item.link}>{item.name}</a>)
                                    }
                                </div>
                            </div>
                            :
                            <ul>
                                {
                                    menuItems.map((item)=><li className={item.highlighted ? "highlighted-btn" : ""}><a href={item.link}>{item.name}</a></li>)
                                }
                            </ul>
                        }  
                    </div>
                </nav>
                <main>
                    <div className={isMobile ? "sub-section-mobile":"sub-section"}>
                        <h1>Turning Microservices into Business Logic</h1>
                        <p style={{color:"#8e9092", paddingTop:"30px", paddingBottom:"30px", lineHeight: 2.5, fontSize:"13pt"}}>
                            Leverage your microservices, containers or code to build event-driven serverless workflows in a cloud-native platform. No need to re-engineer, re-skill or re-process.
                        </p>
                  
                        <div className="landing-btn">
                            <div className="consul" ><a style={{textDecoration:"none", color:"white"}} href="https://github.com/direktiv/direktiv">Github</a></div>
                            <div className="started"><a style={{textDecoration:"none", color:"white", display:"flex", alignItems:"center", gap:"4px"}} href="https://docs.direktiv.io/docs/walkthrough/walkthrough.html">Get Started <GrLinkNext className="menu-icon" style={{fontSize:"12pt"}}/></a></div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}