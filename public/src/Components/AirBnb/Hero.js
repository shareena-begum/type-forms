import React from "react"
import Image from "next/image"

export default function Hero() {
    return (
        <section>
            <Image src="/photo-grid.png" width={300} height={300}  className="hero--photo" />
            <h1 className="hero--header">Online Experiences</h1>
            <p>Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}