import React from "react"

const Header = () => {

    //style object for the add-contact and save-html icons
    //so that they don't render with default underline with Bootstrap
    const headerIconStyle = {
        textDecoration : "none",
    }

    return (
        <header
            className="d-flex bg-dark text-white flex-direction-row align-items-center justify-content-between"
        >
            <h1
                className="d-flex order-0"
            >
                circleBack
            </h1>

            <div className="container d-flex flex-direction-row justify-content-end">

                {/* clickable "add contact" icon to initiate scraping of the LinkedIn profile page */}
                <a
                    href="#"
                    style={headerIconStyle}
                >
                    {/* icon: fa-user imported from fontawesome */}
                    <i
                        className="d-flex fas fa-user-plus fa-lg me-4 mb-1 link-success">
                    </i>
                </a>
                {/* clickable "export profiles" icon to initiate generation of profiles.html file */}
                <a
                    href="#"
                    style={headerIconStyle}
                >
                    {/* icon: fa-share-square imported from fontawesome */}
                    <i
                        className="d-flex fas fa-share-square fa-lg me-3 link-primary">
                    </i>
                </a>
            </div>
        </header>
    )
}

export default Header
