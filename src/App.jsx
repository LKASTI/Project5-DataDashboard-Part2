import react from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"

const App = () => {

    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            {/* <Route path="/detail:id" element={}/> */}
        </Routes>
    </BrowserRouter>
    )
}

export default App