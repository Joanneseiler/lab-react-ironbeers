import React from 'react'
import {Link} from "react-router-dom"

export default function Header() {
    return (
        <div>
            <Link to="/">
            <div>
                <img src="./images/home.png" alt="home" />
            </div>
        </Link>
        </div>
    )
}
