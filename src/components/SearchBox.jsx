import react from "react"
import "./searchbox.css"

const SearchBox = (props) => {

    return(
        <form className="search-container" onSubmit={props.handleSearch}>
              <label className="">
                  <input 
                      className="" 
                      type="text"
                      placeholder='enter a name'
                      value={props.searchVal} 
                      onChange={(e) => {props.setSearch(e.target.value)}}
                  />
              </label>
              <button type="submit">Search</button>
          </form>
    )
}

export default SearchBox