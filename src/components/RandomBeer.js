import React, {useState, useEffect} from 'react';
import BeerDetails from './BeerDetails';
import Header from './Header'
import axios from 'axios';


export default function RandomBeer() {

    const [randomBeer, setRandomBeer] = useState(null);


    useEffect(() => {
        const getRandomBeer = async () => {
            try {
                let randomBeerData = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`);
                setRandomBeer(randomBeerData.data);
            }
            catch(error) {
                throw new Error("Failed to get the beer", error);
            }
        }

        getRandomBeer();
    }, [])
    
    if (!randomBeer) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <Header/>
            <BeerDetails beer={randomBeer}/>
        </div>
    )
}
