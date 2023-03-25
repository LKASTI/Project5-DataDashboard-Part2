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

        if(value === "other")
        {
          return (character.gender != 'male' && character.gender != "female")
        }
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
