import React from "react"

import {FaLinkedin as LinkedInIcon} from "react-icons/fa"

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
            ><i className="text-warning fw-bold">↻</i> LinkedIn<LinkedInIcon size="17" color="#0072b1" className="ms-1 mb-1"/></a>
        </footer>
    )
}

export default Footer
