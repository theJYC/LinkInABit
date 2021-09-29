import React from "react"

//selectively named importing Font Awesome icons via react-icons
import { FaUserPlus as AddContactIcon, FaRegShareSquare as ExportProfilesListIcon } from "react-icons/fa"

import logo from "../assets/icon32.png"

const Header = () => {

    //style object for the "cB" logo next to circleBack title
    const headerLogoStyle = {
        height: 32
    }

    //style object to fix the font-size of "circleBack",
    //overriding Bootstrap's default responsive behaviour
    const fixedHeaderFontStyle = {
        fontSize: "28.75px"
    }


    return (
        <header
            className="d-flex bg-dark text-white flex-direction-row align-items-center justify-content-between"
        >
            {/* container to hold extension's logo "cB" and title "circleBack" respectively */}
            <div className="container d-flex flex-direction-row justify-content-start">

                {/* icon, re-sized */}
                <img
                    src={logo}
                    alt="circleBack logo"
                    style={headerLogoStyle}
                    className="d-flex pt-1 me-1"
                />

                <h1
                    style={fixedHeaderFontStyle}
                >
                    contactBack
                </h1>
            </div>

            <div className="container d-flex flex-direction-row justify-content-end">

                {/* clickable "add contact" icon to initiate scraping of the LinkedIn profile page */}
                <a
                    href="#"
                >
                    {/* icon: fa-user imported from fontawesome */}
                    <AddContactIcon
                        size="27.5"
                        className="d-flex me-4 mb-1 link-success text-decoration-none"
                    />
                </a>
                {/* clickable "export profiles" icon to initiate generation of profiles.html file */}
                <a
                    href="#"
                >
                    {/* icon: fa-share-square imported from fontawesome */}
                    <ExportProfilesListIcon
                        size="27.5"
                        className="d-flex me-2 link-primary text-decoration-none"
                    />
                </a>
            </div>
        </header>
    )
}

export default Header
