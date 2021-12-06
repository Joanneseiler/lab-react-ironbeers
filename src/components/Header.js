import React from 'react'
import {Link} from "react-router-dom"

export default function Header() {
    return (
        <div>
            <Link to="/">
            <div>
                <img style={{width: "100%"}} src="./images/home.png" alt="home"/>
            </div>
        </Link>
        </div>
    )
}
