import react, { useEffect } from "react"
import "./detailview.css"
import { useState } from "react"
import { Link, useParams } from "react-router-dom"


const DetailView = ({listResponse}) =>{
    const params = useParams()
    const id = params.id
    const [character, setCharacter] = useState(null)

    useEffect(() =>{
        setCharacter(listResponse[id-1])
    }, [listResponse])

    return(
        <div className="detail-view">
          {character &&  
            <div className="detail-view-output">
                <h2>{character.name}</h2>
                <p>Species: {character.species}</p>
                <p>Homeworld: {character.homeworld}</p>
                <p>Gender: {character.gender}</p>
                <p>Eye Color: {character.eye_color}</p>
                <p>Hair Color: {character.hair_color}</p>
                <p>Mass: {character.mass}</p>
                <p>Height: {character.height}</p>
                <p>Birth Year: {character.birth_year}</p>
            </div>}
            <div className="btn"><Link to={"/"}>Back</Link></div>
        </div>
    )
}

export default DetailView