import React from "react"
import Image from "next/image"

export default function Navbar() {
    return (
        <nav>
            <Image src="/logo.png" alt="react logo" width={50} height={50} priority />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}