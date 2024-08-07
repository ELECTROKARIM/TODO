import React,{useEffect,useState} from "react"

export default function Task({name,done,id, toggleDone}){
    
    return(
        <div onClick={() => toggleDone(id)} className="flex justify-between">
            <div className="text-blue-900 ">{name}</div>
            {done && <div>	&#x2705; </div>}
        </div>
    )

}