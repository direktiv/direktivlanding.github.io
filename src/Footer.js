import Vorteil from './vlogo.png'
import {Box} from 'grommet'

function Footer() {
    return(
        <Box className="footer" direction="row" justify="center" align="center" pad="small" gap="xsmall">
            <Box style={{color:"white"}}>
                Powered by
            </Box>
            <Box>
                <a href="https://vorteil.io" style={{display:'flex', alignItems:'center', color: 'white', textDecoration: 'none'}}>
                    <img alt="vorteil" style={{height:"30px", paddingRight:"3px"}} src={Vorteil}/>
                    Vorteil.io
                </a>
            </Box>
        </Box>
    )
}    

export default Footer