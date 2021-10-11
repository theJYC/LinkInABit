import React from "react"

const Footer = () => {
    return (
        <footer
            className="d-flex justify-content-center text-white pt-2 pb-2 border rounded-3"
            style={{backgroundColor:'#3c3f42'}}
        >
            <a
                className="text-white text-decoration-none"
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer noopener"
            ><i className="text-warning fw-bold">↻</i> Go to LinkedIn</a>
        </footer>
    )
}

export default Footer
