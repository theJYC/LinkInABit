import React, {useState, useEffect} from "react"

//importing top-level components to arrange App.js as "index":
import Header from "./components/Header"
import List from "./components/List"
import Footer from "./components/Footer"

//bringing in manually recorded array of contacts
//to send down to List and Links as props
import contactsData from "./contactsData.js"


const App = () => {

    //state to store profiles sent via chrome message api:
    const [profiles, setProfiles] = useState([])

    //querying the
    useEffect(() => {
        //until chrome messaging is set, allow demo data to be set into state:
        setProfiles(contactsData)

    },[])

    return (
        <div
            className="ms-0 me-0"
        >
            <Header />
            <List profiles={profiles}/>
            <Footer />
        </div>
    )
}

export default App
