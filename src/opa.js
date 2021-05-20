

export default function Opa() {
    return(
        <div className="sub-gray-container">
            <div className="opa">
                <h1 style={{textAlign:"center"}}>Open Source & Enterprise</h1>
                <div className="editions" >
                    <div className="col-edition" style={{flex: 1, background:"white", alignSelf:"stretch", textAlign:"left"}}>
                        <h2 style={{textAlign:"center"}}>Open Source</h2>
                        <ul className="gray" style={{listStyle:"none", lineHeight: 2, padding: 0}}>
                            <li>All plugins are open-source, governed and maintained under the open-source license initiative</li>
                            <li>A graphical user interface to allow easy access to run Direktiv.</li>
                            <li>Community Support</li>
                        </ul>
                    </div>
                    <div className="col-edition" style={{flex: 1, background:"white", alignSelf:"stretch", textAlign: "left"}}>
                        <h2 style={{textAlign:"center"}}>Enterprise</h2>
                        <ul className="gray" style={{listStyle:"none", lineHeight: 2, padding: 0}}>
                            <li>Support from direktiv.io (24x7 Critical Support, 8x5 Business Support)</li>
                            <li>Authentication and Authorisation using Keycloak and Open Policy Agent</li>
                            <li>Code promotion and workflow unit testing</li>
                            <li>Performance monitoring / tuning (OpenTelemetry tracing)</li>
                            <li>External Logging capabilities</li>
                            <li>Three custom plugins developed a year</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}