import React from 'react'
import beerInformation from "../beerInformation.json"
import {Link} from "react-router-dom"

export default function HomePage() {
    return (
        <div>
        {
            beerInformation.map((elem, index) => {
                return (
                <div key={index}>
                    <Link style={{color: "black", textDecoration: "none"}} to={`${elem.link}`}>   
                    <div style={{display:"flex", justifyContent: "center", flexDirection: "column"}}>
                    <img src={elem.image} alt={elem.title}></img>
                    <div style={{margin: "0px 20px"}}>
                    <h1>{elem.title}</h1>
                    <p>{elem.description}</p>
                    </div>
                    </div>
                    </Link>
                </div>
                )
            })
        }
        </div>
    )
}
