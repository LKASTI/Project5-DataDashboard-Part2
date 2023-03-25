import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import DataOutput from './components/DataOutput';
import SearchBox from './components/SearchBox';
import FilterBox from './components/FilterBox';

const options = {
  method: 'GET',
  url: 'https://star-wars-characters.p.rapidapi.com/46DYBV/star_wars_characters',
  headers: {
    'X-RapidAPI-Key': 'e3e0ae3a5bmshba832cb318db2aep12a3bcjsnc774d9252559',
    'X-RapidAPI-Host': 'star-wars-characters.p.rapidapi.com'
  }
};

function App() {
  const [listResponse, setListResponse] = useState(null)
  const [listDisplay, setListDisplay] = useState(null)
  const [searchValue, setSearchValue] = useState("")

  useEffect(() =>{
    // setListResponse([
    //   {
    //     birth_year
    //       :
    //       "19BBY",
    //     eye_color
    //       :
    //       "blue",
    //     gender
    //       :
    //       "male",
    //     hair_color
    //       :
    //       "blond",
    //     height
    //       :
    //       "172",
    //     homeworld
    //       :
    //       "Tatooine",
    //     id
    //       :
    //       1,
    //     mass
    //       :
    //       "77",
    //     name
    //       :
    //       "Luke Skywalker",
    //     skin_color
    //       :
    //       "fair",
    //     species
    //       :
    //       "Human"
    //   },
    //   {
    //     birth_year
    //     : 
    //     "112BBY",
    //     eye_color
    //     : 
    //     "yellow",
    //     gender
    //     : 
    //     "NA",
    //     hair_color
    //     : 
    //     "NA",
    //     height
    //     : 
    //     "167",
    //     homeworld
    //     : 
    //     "Tatooine",
    //     id
    //     : 
    //     2,
    //     mass
    //     : 
    //     "75",
    //     name
    //     : 
    //     "C-3PO",
    //     skin_color
    //     : 
    //     "gold",
    //     species
    //     : 
    //     "Droid"
    //   },
    //   {
    //     birth_year
    //     : 
    //     "33BBY",
    //     eye_color
    //     : 
    //     "red",
    //     gender
    //     : 
    //     "NA",
    //     hair_color
    //     : 
    //     "NA",
    //     height
    //     : 
    //     "96",
    //     homeworld
    //     : 
    //     "Naboo",
    //     id
    //     : 
    //     3,
    //     mass
    //     : 
    //     "32",
    //     name
    //     : 
    //     "R2-D2",
    //     skin_color
    //     : 
    //     "white, blue",
    //     species
    //     : 
    //     "Droid"
    //   },
    //   {
    //     birth_year
    //     : 
    //     "41.9BBY",
    //     eye_color
    //     : 
    //     "yellow",
    //     gender
    //     : 
    //     "male",
    //     hair_color
    //     : 
    //     "none",
    //     height
    //     : 
    //     "202",
    //     homeworld
    //     : 
    //     "Tatooine",
    //     id
    //     : 
    //     4,
    //     mass
    //     : 
    //     "136",
    //     name
    //     : 
    //     "Darth Vader",
    //     skin_color
    //     : 
    //     "white",
    //     species
    //     : 
    //     "Human"
    //   },
    //   {
    //     birth_year
    //     : 
    //     "19BBY",
    //     eye_color
    //     : 
    //     "brown",
    //     gender
    //     : 
    //     "female",
    //     hair_color
    //     : 
    //     "brown",
    //     height
    //     : 
    //     "150",
    //     homeworld
    //     : 
    //     "Alderaan",
    //     id
    //     : 
    //     5,
    //     mass
    //     : 
    //     "49",
    //     name
    //     : 
    //     "Leia Organa",
    //     skin_color
    //     : 
    //     "light",
    //     species
    //     : 
    //     "Human"
    //   }
    // ])

    // setListDisplay([
    //   {
    //     birth_year
    //       :
    //       "19BBY",
    //     eye_color
    //       :
    //       "blue",
    //     gender
    //       :
    //       "male",
    //     hair_color
    //       :
    //       "blond",
    //     height
    //       :
    //       "172",
    //     homeworld
    //       :
    //       "Tatooine",
    //     id
    //       :
    //       1,
    //     mass
    //       :
    //       "77",
    //     name
    //       :
    //       "Luke Skywalker",
    //     skin_color
    //       :
    //       "fair",
    //     species
    //       :
    //       "Human"
    //   },
    //   {
    //     birth_year
    //     : 
    //     "112BBY",
    //     eye_color
    //     : 
    //     "yellow",
    //     gender
    //     : 
    //     "NA",
    //     hair_color
    //     : 
    //     "NA",
    //     height
    //     : 
    //     "167",
    //     homeworld
    //     : 
    //     "Tatooine",
    //     id
    //     : 
    //     2,
    //     mass
    //     : 
    //     "75",
    //     name
    //     : 
    //     "C-3PO",
    //     skin_color
    //     : 
    //     "gold",
    //     species
    //     : 
    //     "Droid"
    //   },
    //   {
    //     birth_year
    //     : 
    //     "33BBY",
    //     eye_color
    //     : 
    //     "red",
    //     gender
    //     : 
    //     "NA",
    //     hair_color
    //     : 
    //     "NA",
    //     height
    //     : 
    //     "96",
    //     homeworld
    //     : 
    //     "Naboo",
    //     id
    //     : 
    //     3,
    //     mass
    //     : 
    //     "32",
    //     name
    //     : 
    //     "R2-D2",
    //     skin_color
    //     : 
    //     "white, blue",
    //     species
    //     : 
    //     "Droid"
    //   },
    //   {
    //     birth_year
    //     : 
    //     "41.9BBY",
    //     eye_color
    //     : 
    //     "yellow",
    //     gender
    //     : 
    //     "male",
    //     hair_color
    //     : 
    //     "none",
    //     height
    //     : 
    //     "202",
    //     homeworld
    //     : 
    //     "Tatooine",
    //     id
    //     : 
    //     4,
    //     mass
    //     : 
    //     "136",
    //     name
    //     : 
    //     "Darth Vader",
    //     skin_color
    //     : 
    //     "white",
    //     species
    //     : 
    //     "Human"
    //   },
    //   {
    //     birth_year
    //     : 
    //     "19BBY",
    //     eye_color
    //     : 
    //     "brown",
    //     gender
    //     : 
    //     "female",
    //     hair_color
    //     : 
    //     "brown",
    //     height
    //     : 
    //     "150",
    //     homeworld
    //     : 
    //     "Alderaan",
    //     id
    //     : 
    //     5,
    //     mass
    //     : 
    //     "49",
    //     name
    //     : 
    //     "Leia Organa",
    //     skin_color
    //     : 
    //     "light",
    //     species
    //     : 
    //     "Human"
    //   }
    // ])
    
    const req = async () => {
      await axios.request(options).then(function (response) {
        setListResponse(response.data)
        setListDisplay(response.data)
        console.log(response.data)
      }).catch(function (error) {
        console.error(error);
      })
    }

    req()
      
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    if(searchValue === "" || searchValue === " ")
    {
      setListDisplay(listResponse)
    }
    else
    {
      setListDisplay(listResponse.filter((character) => character.name.toLowerCase().includes(searchValue.toLowerCase())))
    }
  }
 
  const handleFilterSelect = (e) => {
    let value = e.target.value

    if(value === "none" || value === "--Choose a Filter--")
    {
      setListDisplay(listResponse)
      return
    }

    let filterGroup = ""

    // console.log(e.target.options)

    for(const option of e.target.options)
    {
      if(option.value === value)
      {
        filterGroup = option.parentElement.label
        break
      }
    }

    if(filterGroup === "Gender")
      setListDisplay(listResponse.filter((character) => {
        if(character.gender === null)
          return false
        return (character.gender.toLowerCase() === value.toLowerCase())
      }))
    else if(filterGroup === "Species")
    {
      setListDisplay(listResponse.filter((character) => {
        if(character.species === null)
          return false
        if(value === "other")
        {
          return (character.species != 'Human' && character.species != "Droid")
        }
        return (character.species.toLowerCase() === value.toLowerCase())
      }))
    }

  }



  return (
    <div className="App">
      <h1>Star<br/>Wars<br/><br/>Characters</h1>
      <div className='content'>
        <div className='query-options'>
          <SearchBox handleSearch={handleSearch} setSearch={setSearchValue} searchVal={searchValue}/>
          <FilterBox handleFilterSelect={handleFilterSelect}/>
        </div>
        <div className='data-summary'> 
          Summary
        </div>
        <DataOutput listDisplay={listDisplay}/>
      </div>
    </div>
  )
}

export default App
