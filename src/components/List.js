import React from "react"
import PropTypes from "prop-types"

//Contact component used as template for each profile:
import Profile from "./Profile"


const List = ({profiles}) => {

    // mapped out using the key-value attributes of the contacts.js array of objs:
    const profilesComponents = profiles.map(profile => {
        return (
            <Profile
                /* paying special attention to ordering of props */
                /* as order of appearance/usage in Contact */
                key={profile.id}
                name={profile.fullName}
                company={profile.companyName}
                contactPhotoURL={profile.contactPhotoURL}
                companyLogoURL={profile.companyLogoURL}
                profileURL={profile.profileURL}
                contactInfo={profile.contactInfoLink}
                currentTitle={profile.currentTitle}
                companyLinkedIn={profile.companyLinkedInURL}
            />
        )
    })

    return (
        <ul className="d-flex flex-column-reverse list-group">
            {/* no. of objs will be dynamically updated and mapped in profilesComponents */}
            {profilesComponents}
        </ul>
    )
}

//validating that List is receiving "contacts" prop, which is of the array data type, and required:
List.propTypes = {
    profiles: PropTypes.array.isRequired
}

//note to self: make sure to modify ^ when chrome API message passing is integrated

export default List
