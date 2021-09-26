import React from "react"

const Contact = props => {

    //resize to ~50% dimension of contactPhoto
    const companyLogo = {
        width: 40,
        marginRight: 0
    }

    const nameStyle = {
        padding: 2.5,
        textDecoration: "none",
        color: "black",
        fontWeight: "normal",
    }

    //overriding default Bootstrap styling for paper aeroplane icon left of checkbox
    const contactIconStyle = {
        textDecoration: "none",
    }

    //checkbox to override default Bootstrap marginTop, and tailouring square sizing
    const checkBoxStyle = {
        width: 32,
        height: 32,
        //marginTop is set to 1 (vs 0) in order to best align with contact icon (paper aeroplane)
        marginTop: 1,
    }

    return (
        <li className="list-group-item d-flex flex-row">
        {/* two column layout: photo & logo | name & title and contact icon & checkbox */}
            <div
                className="d-flex flex-column col-4 gap-3"
            >
                {/* profile picture as shown on in/profile link */}
                <img
                    src={props.contactPhotoURL}
                    alt={props.fullName}
                    className="order-0 rounded-circle"

                />
            </div>

            <div
                className="d-flex flex-column col-8"
            >
                {/* hyperlink to profile link on fullName */}
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
                <p
                    className="d-flex justify-content-center text-secondary"
                >
                    @
                </p>
                <div className="d-flex flex-direction-row justify-content-center me-4">
                    {/* clickable company logo */}
                    <a href={props.companyLinkedIn}>
                        <img
                            style={companyLogo}
                            src={props.companyLogoURL}
                            alt={props.fullName}
                            className="d-flex rounded me-3"
                        />
                    </a>
                    {/* clickable companyName hyperlink */}
                    <a
                        href={props.companyLinkedIn}
                       className="d-flex justify-content-center text-secondary"
                    >
                        <p
                            className="d-flex justify-content-center text-primary mt-1"
                        >
                            {props.company}
                        </p>
                    </a>
                </div>
                {/* div to hold contact icon and checkbox */}
                <div
                    className="d-flex flex-direction-row justify-content-evenly pt-3 pb-2 me-2"
                >
                    {/* contact icon from fontawesome */}
                    <a
                        href={props.contactInfo}
                        style={contactIconStyle}
                        className="text-primary"
                    >
                        <i
                            className="far fa-paper-plane fa-2x d-flex justify-content-center">
                        </i>
                    </a>
                    {/* checkbox to indicate followed-up/not */}
                    <input
                        style={checkBoxStyle}
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                    />
                </div>
            </div>
        </li>
    )
}

export default Contact
