import Footer from './Footer'
import Navbar from './Navbar'
import {Box, Grommet} from "grommet"
import Content from './Content';

function App() {

  return (
    <Grommet style={{overflow:"hidden"}} full>
      <Box fill={true}>
        <Box fill={true} style={{ margin:"auto"}}>
          <Navbar />
          <Content />
          <Footer />
        </Box>
      </Box>
      <Box id="stars" />
    </Grommet>
  );
}

export default App;
