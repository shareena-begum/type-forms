import React from "react";
import Navbar1 from "../public/src/AirBnb/Navbar1";
import Hero from "../public/src/AirBnb/Hero";
import Card from "../public/src/AirBnb/Card";
import data from "../public/src/data/data";

function airbnb() {
    const cards = data.map(item => {
        return(
            <Card 
                key={item.id}
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
                openSpots={item.openSpots}
            
            />
        )
    })
    return(
        <div>
            <Navbar1 />
            {/* <Hero /> */}
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}

export default airbnb