import React from "react"

const Header = () => {
    return (
        <header
            className="d-flex bg-dark text-white flex-direction-row align-items-center justify-content-between"
        >
            <h1
                className="d-flex order-0"
            >
                circleBack
            </h1>
            <i
                className="d-flex fas fa-user-plus fa-lg me-3 mb-1">
            </i>
        </header>
    )
}

export default Header
