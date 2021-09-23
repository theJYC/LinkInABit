import React from "react"

const Contact = props => {

    // container to hold the vertical column of profile pic and company logo


    const nameAndTitleStyle = {

    }

    const companyLogo = {
        width: "65%",
        height: "65%"
    }

    const nameStyle = {
        padding: 2.5,
        textDecoration: "none",
        color: "black",
        fontWeight: "normal",
    }

    return (
        <li className="list-group-item d-flex flex-row">
            <div
                className="d-flex flex-column col-4"
            >
                {/*profile picture as shown on in/profile link*/}
                <img
                    src={props.contactPhotoURL}
                    alt={props.fullName}
                    className="order-0"

                />

                {/*company logo*/}
                <img
                    style={companyLogo}
                    src={props.companyLogoURL}
                    alt={props.fullName}
                    className="order-1"

                />

            </div>
            {/*hyperlink to profile link on fullName*/}
            <div
                className="d-flex flex-column col-8"
            >
                <a
                    style={nameStyle}
                    className="d-flex align-items-start"
                    href={props.profileURL}
                >
                    {props.name}
                </a>
            </div>

            <div
                className="d-flex flex-column col-5"
            >

            </div>
        </li>
    )
}

export default Contact
