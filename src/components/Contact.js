import React from "react"

const Contact = props => {

    // container to hold the vertical column of profile pic and company logo


    const nameAndTitleStyle = {

    }

    //resize to ~50% dimension of contactPhoto
    const companyLogo = {
        width: "65%",
        margin: "0 auto",
    }

    const nameStyle = {
        padding: 2.5,
        textDecoration: "none",
        color: "black",
        fontWeight: "normal",
    }

    return (
        <li className="list-group-item d-flex flex-row">
        {/* three column layout: photos | name & title | toggle/checkbox */}
            <div
                className="d-flex flex-column col-4 gap-3"
            >
                {/*profile picture as shown on in/profile link*/}
                <img
                    src={props.contactPhotoURL}
                    alt={props.fullName}
                    className="order-0 rounded-circle"

                />

                {/*clickable company logo*/}
                <a href={props.companyLinkedIn}>
                    <img
                        style={companyLogo}
                        src={props.companyLogoURL}
                        alt={props.fullName}
                        className="d-flex order-1 rounded"

                    />
                </a>
            </div>

            <div
                className="d-flex flex-column col-8"
            >
                {/*hyperlink to profile link on fullName*/}
                <a
                    style={nameStyle}
                    className="d-flex align-items-start justify-content-center"
                    href={props.profileURL}
                >
                    {props.name}
                </a>
                {/*para tag to display profile's title/position */}
                <p
                    className="d-flex justify-content-center text-secondary"
                >
                    {props.currentTitle}
                </p>
            </div>

            <div
                className="d-flex flex-column col-5"
            >

            </div>
        </li>
    )
}

export default Contact
