import React from 'react'
import iconCheck from '../img/icon-check.svg'
import iconCross from '../img/icon-cross.svg'

export default function Notes({
  done, toggleDone, task, deleteNote, id,
}) {
//    console.log(`Note id: ${id}`)
  return (
    <div className={`btn note flex ${done ? 'done' : 'notdone'}`}>
      <button
        onClick={toggleDone}
        alt={done ? 'Mark as undone' : 'Mark as done'}
      >
        <div
          className="checkbox"
          style={done
            ? { backgroundImage: 'linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))' }
            : null}

        >

          {done ? <img src={iconCheck} alt="check" /> : null}

        </div>
      </button>
      <p className="noteText">
        {' '}
        {task}
      </p>

      <button onClick={deleteNote} className="delBtn" aria-label="delete item">
        <img src={iconCross} alt="icon" />
      </button>
    </div>
  )
}
