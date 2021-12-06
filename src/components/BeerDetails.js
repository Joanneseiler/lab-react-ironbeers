import React from 'react'

export default function BeerDetails({ beer: {name, description, tagline, image_url, attenuation_level, contributed_by,first_brewed}}) {
    return (
        <div>
        <div style={{display: "flex", justifyContent: "center"}}>
                <img src={image_url} style={{height: "200px"}} alt={name}/>
            </div>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <h1>{name}</h1>
                <p>{attenuation_level}</p>
            </div>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <h6>{tagline}</h6>
                <p>{first_brewed}</p>
            </div>
            <p>{description}</p>
            <p>Created by: {contributed_by}</p>
        </div>
    )
}
