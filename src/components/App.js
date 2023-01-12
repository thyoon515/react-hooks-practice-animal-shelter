import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  const onChangeType = (type) => {
    setFilters(type)
  }

  const onFindPetsClick = () => {
    if(filters === "all") {
      fetch('http://localhost:3001/pets')
        .then(r => r.json())
        .then(petsData => setPets(petsData))
    } else {
      fetch(`http://localhost:3001/pets/?type=${filters}`)
        .then(r => r.json())
        .then(petsData => setPets(petsData))
    }
  }

  console.log(pets)

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType} onFindPetsClick={onFindPetsClick} />
          </div>
          <div className="twelve wide column">
            <PetBrowser />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
