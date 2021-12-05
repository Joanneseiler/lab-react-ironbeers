import React from 'react'
import beerInformation from "../beerInformation.json"
import {Link} from "react-router-dom"
import "../App.css"

export default function HomePage() {
    return (
        <div>
        {
            beerInformation.map((elem, index) => {
                return (
                <div className="home-page">
                    <Link key={index}  to={`${elem.link}`}>   
                    <div>
                    <img src={elem.image} alt={elem.title}></img>
                    <h1>{elem.title}</h1>
                    <p>{elem.description}</p>
                    </div>
                    </Link>
                </div>
                )
            })
        }
        </div>
    )
}
