import React, {useState, useEffect} from "react"

import PropTypes from "prop-types"

//selectively importing Font Awesome paperplane icon via react-icons
import { FaRegPaperPlane as ContactInfoIcon } from "react-icons/fa"

const Profile = props => {

    //resize to ~50% dimension of contactPhoto
    const companyLogo = {
        width: 27.5,
    }

    const contactPhotoStyle = {
        width: 115,
    }

    const nameStyle = {
        padding: 3.5,
        textDecoration: "none",
        color: "black",
        fontWeight: "normal",
    }

    //checkbox to override default Bootstrap marginTop, and tailouring square sizing
    const checkBoxStyle = {
        width: 25,
        height: 25,
    }

    //state to store at individual Profile level whether or not a profile has been "checked off",
    //initially setting as false:
    const [isProfileChecked, setIsProfileChecked] = useState(false)

    // to console log the state of isProfileChecked whenever it is altered:
    useEffect(() => {
        console.log(isProfileChecked)
    },[isProfileChecked])

    //to set isProfileChecked to it's reverse value when checkbox is manipulated:
    const toggleCheckbox = () => {
        return setIsProfileChecked(prevState => !prevState)
    }

    return (
        <li className="list-group-item d-flex flex-row">
        {/* two column layout: photo & logo | name & title and contact icon & checkbox */}
            <div
                className="d-flex flex-column col-4 mt-2"
            >
                {/* profile picture as shown on in/profile link */}
                <a
                    href={props.profileURL}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <img
                        src={props.contactPhotoURL}
                        alt={props.fullName}
                        className="order-0 rounded-circle"
                        style={contactPhotoStyle}
                    />
                </a>
            </div>

            <div
                className="d-flex flex-column col-8 mt-2"
            >
                {/* hyperlink to profile link on fullName */}
                <a
                    style={nameStyle}
                    className="d-flex align-items-start justify-content-center"
                    href={props.profileURL}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Go to Profile"
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
                <div className="d-flex flex-direction-row justify-content-center">
                    {/* clickable company logo */}
                    <a
                        href={props.companyLinkedIn}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <img
                            style={companyLogo}
                            src={props.companyLogoURL}
                            alt={props.fullName}
                            className="rounded me-2 mt-1"
                        />
                    </a>
                    {/* clickable companyName hyperlink */}
                    <a
                        href={props.companyLinkedIn}
                        className="d-flex justify-content-center text-primary text-decoration-none mt-1"
                        style={{fontSize: 15}}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <p>
                            {props.company}
                        </p>
                    </a>
                </div>
                {/* div to hold contact icon and checkbox */}
                <div
                    className="d-flex flex-direction-row justify-content-evenly pt-1 pb-1"
                >
                    {/* clickable contact-info (paper aeroplane) icon */}
                    <a
                        href={props.contactInfo}
                        className="text-secondary"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <ContactInfoIcon
                            size="25"
                            className="d-flex justify-content-center text-decoration-none mt-1"
                        />
                    </a>
                    {/* checkbox to indicate followed-up/not */}
                    <input
                        style={checkBoxStyle}
                        className="form-check-input"
                        type="checkbox"
                        checked={isProfileChecked}
                        onChange={toggleCheckbox}
                        id="flexCheckDefault"
                    />
                </div>
            </div>
        </li>
    )
}

//validating prop types to ensure all props being passed down
//are meeting their anticipated data types:
Profile.propTypes = {
    key: PropTypes.number,
    company: PropTypes.string.isRequired,
    contactPhotoURL: PropTypes.string.isRequired,
    companyLogoURL: PropTypes.string.isRequired,
    profileURL: PropTypes.string.isRequired,
    contactInfo: PropTypes.string.isRequired,
    currentTitle: PropTypes.string.isRequired,
    companyLinkedIn: PropTypes.string.isRequired,
}

export default Profile
