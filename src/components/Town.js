import React from 'react'

function Town({name,index}) {
    return (
        <li>
            <h4 id={'town'+(index+1)} >{name}</h4>
        </li>
    )
}

export default Town