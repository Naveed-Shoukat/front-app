import React, { useEffect, useState } from 'react'

export default function Notes() {
  const [notes, setNotes] = useState([{
    title:'',
    content:''
  }]);

  useEffect(() => {
    fetch("/notes").then(res => {
      if (res.ok) {
        return res.json()
      }
    }).then(jsonRes => setNotes(jsonRes));
  })

  return (
    <div className='container'>
      <h1>Notes</h1>
      {
        notes.map(note => <>
          <h1>note.title</h1>
          <p>note.content</p>
          </>
        )
      }

    </div>
  )
}
