import React from "react"

//importing top-level components to arrange App.js as "index":
import Header from "./components/Header"
import List from "./components/List"
import Footer from "./components/Footer"


const App = () => {
    return (
        <div className="container col-12 col-sm-6">
            <Header />
            <List />
            <Footer />
        </div>
    )
}

export default App
