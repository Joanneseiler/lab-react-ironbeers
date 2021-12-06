import React, {useState, useEffect} from 'react'
import Header from './Header'
import axios from "axios";
import SingleBeer from './SingleBeer';


export default function AllBeers() {
 
    const [beers, setBeers] = useState([]); 

    useEffect(() => {
        const getAllBeersData = async () => {
            try {
                let allBeersData = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
                setBeers(allBeersData.data);
            }
            catch(error) {
                throw new Error("Failed to get all beers", error);
            }
    }

    getAllBeersData();
}, [])


    if (!beers.length) {
        return <h1>Loading ...</h1>
    }

    return (
        <div>
        <Header/>
        {
        beers.map((beer, index) => {
                    return <SingleBeer key={index} beer={beer} />
                })
        }
        </div>
    )
}
