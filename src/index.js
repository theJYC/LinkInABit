import React from "react"
import ReactDOM from "react-dom"

import App from "./App"

// importing bootstrap as a dependency vs through CDN
import "bootstrap/dist/css/bootstrap.min.css"

ReactDOM.render(
    <App />,
    document.getElementById("root")
)
