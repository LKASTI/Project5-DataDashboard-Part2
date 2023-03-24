import react from 'react'
import { useState } from 'react'
import "./dataoutput.css"


const DataOutput = (props) => {


    return(
        <div className='data-output'>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Homeworld</th>
                <th>Gender</th>
                <th>Species</th>
              </tr>
            </thead>
            <tbody>
              {props.listDisplay != null && props.listDisplay.map((character, key) => {
                return(
                  <tr key={key}>
                    <td>{character.name}</td>
                    <td>{character.homeworld}</td>
                    <td>{character.gender}</td>
                    <td>{character.species}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
    )
}

export default DataOutput