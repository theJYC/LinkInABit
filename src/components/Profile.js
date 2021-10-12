import React, {useState, useEffect} from "react"

import PropTypes from "prop-types"

//selectively importing Font Awesome paperplane icon via react-icons
import { FaRegPaperPlane as ContactInfoIcon } from "react-icons/fa"

import { IoClose as DeleteProfileIcon } from "react-icons/io5";


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

    //conditionally rendering texts for profiles that are / are not checked:
    const profileCheckedOrNot = () => {
        return isProfileChecked ? "text-decoration-line-through fst-italic" : ""
    }

    //placeholder for function that removes selected profile from list of profiles:
    const removeProfileFromList = () => {
        return console.log("clicked")
    }

    return (
        <li className="list-group-item d-flex flex-row border rounded-3 ">
        {/* three column layout: close (x) icon | profilePhoto, checkBox & contact icon | name, position, companyLogo */}
            {/*first col: close (x) icon*/}
            <div className="mt-0">
                <DeleteProfileIcon
                    size="14"
                    className="d-flex justify-content-center text-decoration-none text-secondary"
                    onClick={removeProfileFromList}
                />
            </div>
            {/*second col: profile photo, checkBox & contact icon*/}
            <div
                className="d-flex flex-column col-4 mt-2 me-3"
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
                {/* div to hold contact icon and checkbox */}
                <div
                    className="d-flex flex-direction-row justify-content-evenly pt-2 pb-1"
                >
                    {/* checkbox to indicate followed-up/not */}
                    <input
                        style={checkBoxStyle}
                        className="form-check-input ms-3 me-4"
                        type="checkbox"
                        checked={isProfileChecked}
                        onChange={toggleCheckbox}
                        id="flexCheckDefault"
                    />
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
                </div>
            </div>
            {/*third col: name, position, companyLogo*/}
            <div
                className={`d-flex flex-column align-items-center col-8 mt-2 ${profileCheckedOrNot()}`}
            >
                <div className="d-flex justify-content-center col-6">
                    {/* hyperlink to profile link on fullName */}
                    <a
                        style={nameStyle}
                        className="d-inline-block text-truncate col-12"
                        href={props.profileURL}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Go to Profile"
                    >
                        {props.name}
                    </a>
                </div>
                <div className="d-flex justify-content-center col-8">
                {/*para tag to display profile's title/position */}
                <p
                    className="d-inline-block text-truncate text-secondary col-12"
                >
                    {props.currentTitle}
                </p>
                </div>
                <p
                    className="d-flex justify-content-center text-secondary me-3"
                >
                    @
                </p>
                <div className="d-flex flex-direction-row justify-content-evenly col-9 me-3">
                    {/* clickable company logo */}
                    <div className="col-2">
                        <a
                            href={props.companyLinkedIn}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <img
                                style={companyLogo}
                                src={props.companyLogoURL}
                                alt={props.company}
                                className="rounded mt-1 ms-2"
                            />
                        </a>
                    </div>
                    {/* clickable companyName hyperlink */}
                    <div className="col-6">
                        <a
                            href={props.companyLinkedIn}
                            className="d-flex justify-content-center text-primary text-decoration-none mt-1 col-12"
                            style={{fontSize: 15}}
                            target="_blank"
                            rel="noreferrer noopener"
                        >

                                <p className="d-inline-block text-truncate text-primary">
                                    {props.company}
                                </p>
                        </a>
                    </div>
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
