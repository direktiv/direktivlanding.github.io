import {Box, Menu, ResponsiveContext} from 'grommet'
import { useContext } from 'react'
import {Menu as MenuIcon} from 'grommet-icons'
import Logo from './logo.png'

function Navbar(props) {
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
    console.log(size)
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
                        <Menu
                            icon={<MenuIcon id="mi-icon" style={{fill:"#b5b5b5", stroke:"#b5b5b5"}}/>}
                            label={<div id="mi-text" style={{color:'#b5b5b5'}}>Menu</div>}
                            items={[
                                {label: "Github", onClick: () => {window.location.href = "https://github.com/vorteil/direktiv"}},
                                {label: "Docs", onClick: () => {window.location.href = "https://docs.direktiv.io"}},
                                {label: "Sign In", onClick: () => {window.location.href = "https://wf.direktiv.io"}}
                            ]}
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