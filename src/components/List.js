import React from "react"

//Contact component is mapped out through props passed down from App:
import Contact from "./Contact"


const List = props => {
    const contactsComponents = props.contacts.map(contact => {
        return (
            <Contact
                key={contact.id}
                name={contact.fullName}
                company={contact.companyName}
                profileURL={contact.profileURL}
                contactInfo={contact.contactInfoLink}
                curentTitle={contact.currentTitle}
                companyLinkedIn={contact.companyLinkedInURL}
            />
        )
    })
    return (
        <div class="row">
            {contactsComponents}
        </div>
    )
}

export default List
