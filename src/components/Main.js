/* eslint-disable react-hooks/exhaustive-deps */

import React, { useContext, useState, useEffect } from 'react'
import {
  collection, onSnapshot,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import Note from './Note'
import { app } from '../firebase'
import { ThemeContext } from '../context/ThemeContext'

import { UserAuth, db } from '../context/AuthContext'

export default function Main(props) {
  const [newNote, setNewNote] = React.useState({ task: '', done: false })
  const [noteArray, setNoteArray] = React.useState([])
  const [filteredNoteArray, setFilteredNoteArray] = React.useState([])
  const { on } = useContext(ThemeContext)
  const { auth, user } = useContext(UserAuth)
  const [error, setErrror] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/signup')
    } else {
      console.log('logged in')
    }
  }, [])

  const colRef = (user.uid) ? collection(db, 'users', user.uid, 'todos') : collection(db, 'sampleToDos')

  // Retrieves the data from the db
  React.useEffect(() => {
    onSnapshot(colRef, ((snapshot) => {
      const notes = snapshot.docs.map((e) => ({ ...e.data(), id: e.id }))
      setNoteArray(notes)
      //    console.log(notes)
      setFilteredNoteArray(notes)
    }))
  }, [user])

  // Filter notes
  const filterCompleted = () => {
    setFilteredNoteArray(noteArray.filter((e) => e.done))
  }

  const filterActive = () => {
    setFilteredNoteArray(noteArray.filter((e) => !e.done))
  }

  const showAll = () => {
    setFilteredNoteArray(noteArray)
  }

  // Add collection

  // Add note to the db

  const addNote = async (event) => {
    event.preventDefault()
    try {
      await addDoc((colRef), {
        task: newNote.task,
        done: newNote.done,
      })
      setNewNote({ text: '', done: false })
    } catch (e) {
      console.log('Error at adding note', e.message)
    }
    console.log('Document added')
  }

  // Delete note
  const deleteNote = async (id) => {
    const docRef = doc(colRef, id)
    try {
      await deleteDoc(docRef)
      console.log('Note deleted')
    } catch (e) {
      console.log('Error while deleting note', e.message)
      setErrror(e.message)
    }
  }

  // Toggle done
  const toggleDone = async (id) => {
    const docRef = doc(colRef, id) // get the element I would like to change
    // gets the data of the chosen from the array to be able to toggle
    const original = noteArray.filter((note) => id === note.id)[0]

    try {
      await updateDoc(docRef, {
        done: !original.done,
      })
    } catch (e) {
      console.log('Error while updating!', e.message)
      setErrror(e.message)
    }
  }

  // Clear completed
  const clearCompleted = () => {
    const completed = noteArray.filter((e) => (e.done === true ? e.id : null)).map((e) => e.id)
    completed.forEach((e) => deleteNote(e))
  }

  function handleChange(event) {
    setNewNote({ task: event.target.value, done: false })
  }

  // console.log("length ", noteArray.length)

  return (
    <section className={on ? 'main dark' : 'main light'}>
      <div className="container">
        <div className="flex input_container">
          <form onSubmit={addNote}>
            <div className="flex">
              <button className="addBtn checkbox" alt="add note" />
              <input
                type="text"
                value={newNote.text}
                name="task"
                onChange={handleChange}
                placeholder="Create a new todo..."
              />
            </div>
          </form>
        </div>
        <section className="main-section">
          <div className="notelist">
            {filteredNoteArray.map((e) => (
              <Note
                key={e.id}
                id={e.id}
                task={e.task}
                done={e.done}
                deleteNote={() => deleteNote(e.id)}
                toggleDone={() => toggleDone(e.id)}
              />
            ))}

          </div>

          {noteArray.length > 0
            ? (
              <div className="flexdesktop">

                <button type="button" className="box tasksleft">
                  {noteArray.filter((e) => !e.done).length}
                  {' '}
                  items left
                </button>
                <button type="button" className="box clearAll" onClick={clearCompleted}>Clear completed</button>

                <div className="flex box controlbox">
                  <button type="button" onClick={showAll}>All</button>
                  <button type="button" onClick={filterActive}>Active</button>
                  <button type="button" onClick={filterCompleted}>Completed</button>
                </div>

              </div>
            ) : null }

        </section>
      </div>
    </section>
  )
}
