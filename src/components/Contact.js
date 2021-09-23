import React from "react"

const Contact = props => {
    return (
        <>
            <p>
                {/*hyperlink to contact page on fullName*/}
                <a href={props.profileURL}>
                    {props.name}
                </a>

            </p>
        </>
    )
}

export default Contact
