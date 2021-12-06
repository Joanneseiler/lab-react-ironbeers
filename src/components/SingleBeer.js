import React from 'react'
import {Link} from "react-router-dom";

export default function SingleBeer({ beer: { _id, name, tagline, image_url, contributed_by }}) {

    return (
        <div>
          <Link to={`/beers/${_id}`} style={{ textDecoration: "none", color: "black"}}>
            <div style={{display: "flex", flexDirection: "row", margin: "20px"}}>
                <div>
                    <img style={{width: "50px", margin: "20px"}} src={image_url} alt={name} />
                </div>
                <div>
                    <h3>{name}</h3>
                    <h5>{tagline}</h5>
                    <p>Created by: {contributed_by}</p>
                </div>            
            </div>
        </Link>
        <hr></hr>
        </div>
    )
}
