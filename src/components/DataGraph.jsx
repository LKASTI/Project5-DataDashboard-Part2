import "./datagraph.css"
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Legend, Cell } from 'recharts';
import {useState, useEffect} from "react"


const DataGraph = ({homeworldList}) => {
    const [colorArray, setColorArray] = useState(null)

    useEffect(() => {
        const colors = [];
        const numOfColors = 88;
        const saturation = 0.7;
        const lightness = 0.5;
    
        for (let i = 0; i < numOfColors; i++) {
          const hue = (i * 360) / numOfColors;
          const color = `hsl(${hue}, ${saturation * 100}%, ${lightness * 100}%)`;
          colors.push(color);
        }
    
        setColorArray(colors)
      },[])

    return(
        <div className='data-graph'>
            <h2>Homeworld Popularity between Characters</h2>
            <PieChart width={400} height={400}>
              <Pie data={homeworldList} dataKey="count" nameKey="homeworld" cx="50%" cy="50%" outerRadius={175} innerRadius={30} fill="#8884d8">
                {homeworldList &&
                  homeworldList.map((entry, index) => (
                    <Cell stroke="#0000000" key={`cell-${index}`} fill={colorArray[index]}/>
                  ))
                }
              </Pie>
              <Tooltip/>
            </PieChart>
          </div>
    )
}

export default DataGraph