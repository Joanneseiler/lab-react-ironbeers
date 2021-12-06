import React, { useState, useEffect } from 'react';
import Header from './Header';
import BeerDetails from './BeerDetails';
import {useParams} from "react-router-dom"
import axios from 'axios';

export default function Beer() {

    const {id} = useParams()

    const [beer, setBeer] = useState(null); 
        
    useEffect(() => {
        const getBeerData = async () => {
            try {
                let beerData = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`);
                setBeer(beerData.data);
            }
            catch(error) {
                throw new Error("Failed to get the beer", error);
            }
        }

        getBeerData();
    }, [id])
    
    if (!beer) {
        return <h1>Loading...</h1>
    }


    return (
        <div>
            <Header/>
            <BeerDetails beer={beer}/>
        </div>
    )
}
