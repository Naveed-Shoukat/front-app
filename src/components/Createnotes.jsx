import axios from 'axios';
import React, {useState} from 'react'

export default function Createnotes() {
  const [notes, setNotes] = useState({
    title:'',
    content:''
  })
  const handleChange =(e) => {
    const {name, value} = e.target;
    setNotes(prevData => {
      return {
        ...prevData,
        [name]:value
      }
    })
  }

  const handleClick = (e) => {
    e.preventDefault()
    const newNote = {
      title:notes.title,
      content:notes.content
    }

    axios.post("http://localhost:3001/create", newNote)
  }
  return (
    <div className='container'>
      <h2>Createnotes</h2>
      <form>
        <div className='form-group'> 
          
          <input 
            className='form-control'
            onChange={handleChange}
            value={notes.title}
            name='title' 
            autoComplete='off'
            placeholder='Enter Note Title' 
          ></input>  

        </div>
        <br/>

        <div className='form-group'> 

          <textarea 
            className='form-control'
            onChange={handleChange}
            value={notes.content}
            name='content' 
            autoComplete='off'
            placeholder='Enter Note contents' 
            ></textarea>

        </div>
        <br/>

        <button 
          className='btn btn-lg btn-info'
          onClick={handleClick}
        >
          Add Note
        </button>


      </form>
    </div>
  )
}
