import {Box, Carousel, Image} from 'grommet'

import Graph from './graph.png'
import Logs from './logs.png'
import Yaml from './yaml.png'

function Content() {
    return(
        <Box fill={true} gap="large" pad="xlarge">
            <Box direction="column" align="center" justify="center">
                <Box style={{maxHeight:"300px", maxWidth:"300px"}}>
                    <svg style={{fill:"white"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 579.04"><defs></defs><title>Asset 1</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path id="Symbol" class="cls-1" d="M600,261.81a81.47,81.47,0,0,0-68-80.2C498,76.37,399.17,0,282.77,0h-212V271.15l-34-34L0,273.89l96.74,96.73,96.73-96.73-36.74-36.75-34,34V52h160c90.57,0,167.71,57.76,197.05,138.3a81.37,81.37,0,0,0,0,143.11c-29.34,80.54-106.52,138.28-197.09,138.28H178.13V416.25H15.34V579H178.13V523.63H282.77c116.36,0,215-76.39,249-181.58A81.46,81.46,0,0,0,600,261.81ZM126.16,527.07H67.31V468.22h58.85ZM518.61,291.24A29.43,29.43,0,1,1,548,261.81,29.46,29.46,0,0,1,518.61,291.24Z"/></g></g></svg>
                </Box>
                <Box pad="medium" color="white"  fill={true}> 
                    <p style={{margin: 0, fontSize:"32px", fontWeight:500, color:"white", textAlign:"center"}}>direktiv</p>
                    <p style={{color:"white", textAlign:"center"}}>Event-Based Serverless Container Workflows with Direktiv!</p>
                </Box>
            </Box>
            <Box style={{maxHeight:"300px", zIndex: 1000}}>
                <Carousel controls={false} play={5000} margin="small" fill>
                    <Image fit="contain" src={Graph}/>
                    <Image fit="contain" src={Yaml}/>
                    <Image fit="contain" src={Logs}/>
                </Carousel>
            </Box>
        </Box>
    )
}

export default Content