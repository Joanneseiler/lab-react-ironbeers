import React from 'react'

export default function AddBeerForm(props) {

    const {addNewBeer} = props

    return (
        <div style={{display: "flex", justifyContent: "center", marginTop: "40px"}}>
        <form onSubmit={addNewBeer}>
          <label>Name</label>
          <br/>
          <input name='name' type="text"/>
          <br/>
          <label>Tagline</label>
          <br/>
          <input name='tagline' type="text" />
          <br/>
          <label>Description</label>
          <br/>
          <input name='description' type="text"/>
          <br/>
          <label>First Brewed</label>
          <br/>
          <input name='first_brewed' type="text"/>
          <br/>
          <label>Brewers Tips</label>
          <br/>
          <input name='brewers_tips' type="text" />
          <br/>
          <label>Attenuation Level</label>
          <br/>
          <input name='attenuation_level' type="number"/>
          <br/>
          <label>Contributed By</label>
          <br/>
          <input name='contributed_by' type="text"/>
          <br/>
          <button style={{margin: "10px 25px", backgroundColor: "#86c4db", borderRadius: "10px"}}>Add new beer</button>
        </form>
      </div>
    )
}
