import {useEffect, useState} from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import DetailView from "./components/DetailView"
import axios from 'axios'

const options = {
    method: 'GET',
    url: '',
    headers: {
      'X-RapidAPI-Key': '',
      'X-RapidAPI-Host': ''
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
