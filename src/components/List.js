import React from "react"

//Contact component used as template for each profile:
import Contact from "./Contact"


const List = props => {

    // mapped out using the key-value attributes of the contacts.js array of objs:
    const contactsComponents = props.contacts.map(contact => {
        return (
            <Contact
                /* paying special attention to ordering of props */
                /* as order of appearance/usage in Contact */
                key={contact.id}
                name={contact.fullName}
                company={contact.companyName}
                contactPhotoURL={contact.contactPhotoURL}
                companyLogoURL={contact.companyLogoURL}
                profileURL={contact.profileURL}
                contactInfo={contact.contactInfoLink}
                currentTitle={contact.currentTitle}
                companyLinkedIn={contact.companyLinkedInURL}
            />
        )
    })

    return (
        <ul className="list-group">
            {/* no. of objs will be dynamically updated and mapped in contactsComponents */}
            {contactsComponents}
        </ul>
    )
}

export default List
