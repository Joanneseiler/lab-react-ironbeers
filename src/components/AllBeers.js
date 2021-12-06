import React, {useState, useEffect} from 'react'
import Header from './Header'
import axios from "axios";
import SingleBeer from './SingleBeer';
import SearchBeer from './SearchBeer';


export default function AllBeers() {
 
    const [beers, setBeers] = useState([]);
    const [filteredBeers, setFilteredBeers] = useState([]);
    const [searchBeer, setSearchBeer] = useState("")

    useEffect(() => {
        getAllBeersData();
}, [])

    const getAllBeersData = async () => {
    try {
        let allBeersData = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
        setBeers(allBeersData.data);
    }
    catch(error) {
        throw new Error("Failed to get all beers", error);
    }
}
    const handleSearch = async (event) => {
        setSearchBeer(event.target.value);
        searchBeer ? fetchSearchedBeer() : getAllBeersData() 
    }


    const fetchSearchedBeer = async () => {
        try {
            let filteredBeerData = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchBeer}`);
            setFilteredBeers(filteredBeerData.data)
        }
        catch(error) {
            throw new Error('Something went wrong while searching for beers', error);
        }
    }

    
    if (!beers.length) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
        <Header/>
        <h1>All beers</h1>
        <SearchBeer handleSearch={handleSearch} searchBeer={searchBeer}/>
        {
        searchBeer ? 
        filteredBeers.map((beer, index) => {
                    return <SingleBeer key={index} beer={beer} />
        })
        :
        beers.map((beer, index) => {
                    return <SingleBeer key={index} beer={beer} />
        })

       
        }
        </div>
    )
}
