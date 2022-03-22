import { useState } from 'react'
import PlanetListItem from './PlanetListItem'

function PlanetList({planets, setDisplayPlanetId}) {

    const [filteredList, setFilteredList] = useState('all')

    const filteredPlanets = planets.filter(planet => {
        if (filteredList === 'all') {
            return true
        } else if (planet.is_planet && filteredList === 'planet') {
            return true
        } else if (!planet.is_planet && filteredList === 'non-planet') {
            return true
        }
    })

    // map through planets and display them in child components
    const renderedPlanets = filteredPlanets.map(planet => (
      <PlanetListItem
        key={planet.name}
        planet={planet}
        setDisplayPlanetId={setDisplayPlanetId}
      />
    ))

    function handleChange(e) {
        setFilteredList(e.target.value)
    }

    return (
        <div>

            <select onChange={handleChange}>
                <option value='all'>All Planets</option>
                <option value='planet'>Definitive Planets</option>
                <option value='non-planet'>Extreme Trans Neptunian Objects</option>
            </select>

            <ol>

                {renderedPlanets}

            </ol>

        </div>
    )
}

export default PlanetList
