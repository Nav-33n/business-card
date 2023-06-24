import react from "react"
import Button from "./info/Button"
import Name from "./info/Name"
import Photo from "./info/Photo"
import About from "./Text/About"
import Interest from "./Text/Interest"
import Footer from "./Footer"

export default function Card() {
    return (
        <div className="container">
            <Photo />
            <Name />
            <Button />
            <About />
            <Interest />
            <Footer />
           </div>
    )
}
