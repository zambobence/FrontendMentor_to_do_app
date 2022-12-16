import React from 'react'
import iconCheck from '../img/icon-check.svg'
import iconCross from '../img/icon-cross.svg'

export default function Notes(props){
    console.log(`Note id: ${props.id}`)
    return (
        <div className={`btn note flex ${props.done ? "done" : "notdone"}`}>
            <div className="checkbox" 
                    style={props.done ? 
                            {backgroundImage: "linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))"} : 
                            null}
                    onClick={props.toggleDone}

            >

            {props.done ? <img src={iconCheck} /> :null}
            
            </div>
            <p className="noteText"> {props.task}</p>
            
            <div className="delBtn" onClick={props.deleteNote}>
                <img src={iconCross}/>
            </div>
        </div>
    )
}