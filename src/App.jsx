import {useEffect, useState} from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import DetailView from "./components/DetailView"
import axios from 'axios'

const options = {
    method: 'GET',
    url: 'https://star-wars-characters.p.rapidapi.com/46DYBV/star_wars_characters',
    headers: {
      'X-RapidAPI-Key': 'e3e0ae3a5bmshba832cb318db2aep12a3bcjsnc774d9252559',
      'X-RapidAPI-Host': 'star-wars-characters.p.rapidapi.com'
    }
  };

const App = () => {
    const [listResponse, setListResponse] = useState(null)

    useEffect(() =>{
  
        const req = async () => {
          await axios.request(options).then(function (response) {
            
            setListResponse(response.data)
    
            // console.log(response.data)
          }).catch(function (error) {
            console.error(error);
          })
        }
    
        req()
    
      }, [])

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home listResponse={listResponse}/>}/>
                <Route path="/detail/:id" element={<DetailView listResponse={listResponse}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App