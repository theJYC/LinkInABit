import React from "react"

//importing top-level components to arrange App.js as "index":
import Header from "./components/Header"
import List from "./components/List"
import Footer from "./components/Footer"

//bringing in manually recorded array of contacts
//to send down to List and Links as props
import contactsData from "./contactsData.js"


const App = () => {

    //custom styling to override Bootstrap's default flex width
    //this width determines the width of popup window:
    const fixedWidth = {
        maxWidth: "450px"
    }

    return (
        <div
            style={fixedWidth}
            className="col-12"
        >
            <Header />
            <List contacts={contactsData}/>
            <Footer />
        </div>
    )
}

export default App
