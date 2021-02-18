import {Box} from 'grommet'
import Logo from './logo.png'

function Navbar() {

    return(
        <Box
            direction='row' // sets the flex direction to row
            align='center'
            justify='between' // spreads out the content of the box
            pad='small' // sets the padding, or space around all content within the box
        >
            <Box flex={1}>
                <img alt="direktiv" style={{height:"50px"}} src={Logo}/>
            </Box>
            <Box style={{
                display: 'block'
            }}>
                <Box className="navbar-button" onClick={()=>{window.location.href = "https://docs.direktiv.io"}}>
                    Docs
                </Box>
                <Box className="navbar-button" onClick={()=>{window.location.href = "https://wf.direktiv.io"}}>
                    Sign In
                </Box>
            </Box>
        </Box>
    )
}

export default Navbar