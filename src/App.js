// import Branding from "./branding";
import Cases from "./cases";
import CTA from "./cta";
import Easy from "./easy";
import Footer from "./footer";
import Landing from "./landing";
import Opa from "./opa";
import Points from "./points";

function App() {
  return (
    <>
      <Landing/>
      <Easy/>
      <Points/>
      {/* <Branding/> */}
      <Cases/>
      <Opa/>
      <CTA/>
      <Footer/>
      <h1 style={{display:"none"}}>Serverless Workflows</h1>
    </>
  );
}

export default App;
