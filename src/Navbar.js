import {Box, DropButton, ResponsiveContext} from 'grommet'
import { useContext } from 'react'
import {Menu as MenuIcon} from 'grommet-icons'
import Logo from './logo.png'

function Navbar() {
    const size = useContext(ResponsiveContext)

    let height = "50px"
    switch(size) {
        case "small":
            height = "30px"
            break
        case "medium":
            height = "40px"
            break
        default:
            height = "50px"    
    }
    return(
        <Box
            direction='row' // sets the flex direction to row
            align='center'
            justify='between' // spreads out the content of the box
            pad='small' // sets the padding, or space around all content within the box
        >
            <Box flex={1}>
                <img alt="direktiv" style={{height:height}} src={Logo}/>
            </Box>
            <Box style={{
                display: 'block'
            }}>
                {size === "small" ? 
                    <>
                        <DropButton
                            style={{border: 'none', padding: "0px"}}
                            label={
                                <div style={{textAlign:"right", width:"100%", color:"white"}}>
                                    <MenuIcon id="mi-icon" style={{fill: "white", stroke:"white"}}/>
                                </div>}
                            dropAlign={{ top:"bottom"}}
                            dropContent={
                                <>
                                    <Box onClick={()=>{window.location.href = "https://github.com/vorteil/direktiv"}} className="nav-name" style={{padding:"5px"}}>
                                        Github
                                    </Box>
                                    <Box onClick={()=>{window.location.href = "https://docs.direktiv.io"}} className="nav-name" style={{padding:"5px"}}>
                                        Docs
                                    </Box>
                                    <Box onClick={()=>{window.location.href = "https://wf.direktiv.io"}} className="nav-name" style={{padding:"5px"}}>
                                        Sign In
                                    </Box>
                                </>
                            }
                        />
                    </>
                :
                    <>
                        <Box className="navbar-button" onClick={()=>{window.location.href = "https://github.com/vorteil/direktiv"}}>
                            Github
                        </Box>
                        <Box className="navbar-button" onClick={()=>{window.location.href = "https://docs.direktiv.io"}}>
                            Docs
                        </Box>
                        <Box className="navbar-button" onClick={()=>{window.location.href = "https://wf.direktiv.io"}}>
                            Sign In
                        </Box>
                    </>
                }

            </Box>
        </Box>
    )
}

export default Navbar