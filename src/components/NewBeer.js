import React from 'react'
import Header from './Header'
import axios from 'axios';
import AddBeerForm from './AddBeerForm';
import {useNavigate} from 'react-router-dom';

export default function NewBeer() {

    const navigate = useNavigate()

    const addNewBeer = async (event) => {
        event.preventDefault();
        try {
            const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = event.target;

            let newBeer = {
                name: name.value,
                tagline: tagline.value,
                description: description.value,
                first_brewed: first_brewed.value,
                brewers_tips: brewers_tips.value,
                attenuation_level: attenuation_level.value,
                contributed_by: contributed_by.value
            }

            await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
            navigate("/beers")

        }
        catch(error) {
            console.log("Something went wrong while creating a new beer", error)
        }
    }

    return (
        <div>
        <Header/>
         <AddBeerForm addNewBeer={addNewBeer}/>
        </div>
    )
}
