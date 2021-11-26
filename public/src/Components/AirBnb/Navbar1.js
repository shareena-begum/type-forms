import React from "react"
import Image from "next/image"

function Navbar1() {
    return (
        <nav>
            <Image src="/airbnb-logo.png" alt="Airbnb logo" width={128} height={77}  className="nav--logo"/>
        </nav>
    )
}

export default Navbar1