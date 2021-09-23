import React from "react"

//importing top-level components to arrange App.js as "index":
import Header from "./components/Header"
import List from "./components/List"
import Footer from "./components/Footer"

//bringing in manually recorded array of contacts
//to send down to List and Links as props
import contactsData from "./contacts.js"


const App = () => {
    return (
        <div className="container col-12 col-sm-6">
            <Header />
            <List contacts={contactsData}/>
            <Footer />
        </div>
    )
}

export default App
