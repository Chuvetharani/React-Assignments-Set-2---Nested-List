import React,{useState} from 'react'
import City from "./City"

function State ({name, cities, index }) {
    const [clicked, setClicked] = useState(false);
    function handleClick(){
        setClicked(!clicked)
    }

    return (
        <li>
            <h2 id={'state'+(index +1)} onClick={handleClick}>{name}</h2>
            {clicked ? (
                <ul>
                {cities.map(item=>(
                    <City 
                    name={item.name} 
                    towns={item.towns} 
                    index={cities.indexOf(item)} />
                ))}
                </ul>     
            ):null}
        </li>
    )
}
export default State