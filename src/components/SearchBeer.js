import React from 'react'

export default function SearchBeer(props) {

    const {handleSearch, searchBeer} = props

    return (
        <div style={{display: "flex", justifyContent: "center", flexDirection: "column", margin: "20px"}}>
            <label>Search for Beers</label>
            <br/>
            <input onChange={handleSearch} value={searchBeer} type="text" name="name"/>
        </div>
    )
}
