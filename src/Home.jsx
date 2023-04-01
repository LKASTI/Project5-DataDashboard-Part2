import { useState, useEffect } from 'react'
import './Home.css'
import DataOutput from './components/DataOutput';
import SearchBox from './components/SearchBox';
import FilterBox from './components/FilterBox';
import DataGraph from './components/DataGraph';



function Home({listResponse}) {
  const [listDisplay, setListDisplay] = useState(null)
  const [searchValue, setSearchValue] = useState("")
  const [filterValue, setFilterValue] = useState("none")
  const [filterCount, setFilterCount] = useState(0)
  const [averageMass, setAverageMass] = useState(0)
  const [homeworldList, setHomeworldList] = useState(null)


  useEffect(() => {
    console.log(homeworldList)
  }, [homeworldList])

  useEffect(() =>{
    console.log(listResponse)
    
    setListDisplay(listResponse)
    setFilterCount(listResponse?.length)


  }, [listResponse])

  useEffect(() => {
    handleAverageMass()
    populateHomeworldList()

  },[listDisplay])

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
      setFilterValue("none")
      setFilterCount(listResponse.length)
      return
    }

    setFilterValue(value)
    
    let count = 0
    
    let filterGroup = ""

    // console.log(e.target.options)
    // console.log(e.target.value)

    for(const option of e.target.options)
    {
      if(option.value === value)
      {
        filterGroup = option.parentElement.label
        break
      }
    }

    // console.log(filterGroup)

    if(filterGroup === "Gender")
      setListDisplay(listResponse.filter((character) => {
        if(character.gender === null)
          return false

        if(value === "other")
        {

          return (character.gender != 'male' && character.gender != "female" && count++)
        }
        return (character.gender.toLowerCase() === value.toLowerCase() && count++)
      }))
    else if(filterGroup === "Species")
    {
      setListDisplay(listResponse.filter((character) => {
        if(character.species === null)
          return false
        if(value === "alien")
        {
          return (character.species != 'Human' && character.species != "Droid" && count++)
        }
        return (character.species.toLowerCase() === value.toLowerCase() && count++)
      }))
    }

    setFilterCount(count)
  }

  const handleAverageMass = () => {
    if(listDisplay === null)
    {
      return
    }

    let len = listDisplay.length
    let sum = 0;

    for(const c of listDisplay)
    {
      if(c.mass === null) break
      if(c.mass != "NA")
      {
        sum += parseInt(c.mass)
      }
      else
        len--
    }

    setAverageMass(Math.ceil(sum/len))
  } 

  const populateHomeworldList = () => {
    if(listDisplay == null)
      return

    let temp = [{homeworld: `${listDisplay[0].homeworld}`, count: 1}]

    for(const c of listDisplay)
    {
      if(temp.filter((o) => o.homeworld === c.homeworld).length != 0)
      {
        temp.map((o) => {
          if(o.homeworld === c.homeworld)
          {
            o.count += 1
          }
        })
      }
      else
      {
        temp.push({homeworld: `${c.homeworld}`, count: 1})
      }
    }

    temp.pop()

    setHomeworldList(temp)

  }

  return (
    <div className="Home">
      <h1>Star<br/>Wars</h1>
      <div className='content'>
        <div className='query-options'>
          <SearchBox handleSearch={handleSearch} setSearch={setSearchValue} searchVal={searchValue}/>
          <FilterBox handleFilterSelect={handleFilterSelect}/>
        </div>
        <div className='data-summary'> 
          <p>No. Characters: {listDisplay?.length}</p>
          <p>Average Mass of Current Selection: {averageMass}</p>
          <p>Percentage of Characters for filter {"("+filterValue+")"}: {listResponse? Math.floor((filterCount/listResponse.length)*100) +"%" : ""}</p>
        </div>
        <div className='data'>
          <DataOutput listDisplay={listDisplay}/>
          <DataGraph homeworldList={homeworldList}/>
        </div>
      </div>
    </div>
  )
}

export default Home
