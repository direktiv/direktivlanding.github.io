export default function CTA() {

    return(
        <div className="slanted-cta">
            <div className="sub-container" style={{marginTop:"-1px"}}>
                <div className="cta">
                    <div className="intro">
                        <h1>Let's talk about your next big project.</h1>
                    </div>
                    <div className="btns">
                        {/* <a className="blue-btn" href="tel:TODO" style={{textDecoration:"none"}}>Call Us</a> */}
                        <a className="blue-btn" style={{textDecoration:"none"}} href="mailto:info@direktiv.io">Email Us</a>
                    </div>
                </div>
            </div>      
        </div>
    )
}