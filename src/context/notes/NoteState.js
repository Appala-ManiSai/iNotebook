import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
   const notesInitial = [
    {
      "_id": "66e6dee8ae773b3bae81cb7c5",
      "user": "66e6d34e6881fede7bae3520",
      "title": "new note",
      "description": "please access the playlist",
      "tag": "youtube",
      "date": "2024-09-15T13:19:36.689Z",
      "__v": 0
    },
    {
      "_id": "66e6f4c6087328911e02e759a",
      "user": "66e6d34e6881fede7bae3520",
      "title": "new note",
      "description": "please access the playlist",
      "tag": "youtube",
      "date": "2024-09-15T14:52:54.926Z",
      "__v": 0
    },
    {
        "_id": "66e6dee8ae77b3bae181cb7c5",
        "user": "66e6d34e6881fede7bae3520",
        "title": "new note",
        "description": "please access the playlist",
        "tag": "youtube",
        "date": "2024-09-15T13:19:36.689Z",
        "__v": 0
      },
      {
        "_id": "66e6dee8ae77b3ba1e81cb7c5",
        "user": "66e6d34e6881fede7bae3520",
        "title": "new note",
        "description": "please access the playlist",
        "tag": "youtube",
        "date": "2024-09-15T13:19:36.689Z",
        "__v": 0
      },
      {
        "_id": "66e6dee8ae77b3bae811cb7c5",
        "user": "66e6d34e6881fede7bae3520",
        "title": "new note",
        "description": "please access the playlist",
        "tag": "youtube",
        "date": "2024-09-15T13:19:36.689Z",
        "__v": 0
      },
      {
        "_id": "66e6dee8ae77b3bae81cb7c5",
        "user": "66e6d34e6881fede7bae3520",
        "title": "new note",
        "description": "please access the playlist",
        "tag": "youtube",
        "date": "2024-09-15T13:19:36.689Z",
        "__v": 0
      },
      {
        "_id": "66e6dee8ae77b3bae812cb7c5",
        "user": "66e6d34e6881fede7bae3520",
        "title": "new note",
        "description": "please access the playlist",
        "tag": "youtube",
        "date": "2024-09-15T13:19:36.689Z",
        "__v": 0
      }
  ]
   const [notes,setNotes] = useState(notesInitial)


  // Add a Note
    const addNote = (title,description,tag)=>{
        //TODO: API Call
        console.log("Adding a new note");
       const note = {
            "_id": "66e6dee8ae77b3bae812cb7c5",
            "user": "66e6d34e6881fede7bae35204",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2024-09-15T13:19:36.689Z",
            "__v": 0
        };
        setNotes(notes.concat(note))
    }
  // Delete a Note
    const deleteNote = ()=>{
        
     }
  // Edit a Note
    const editNote = ()=>{
        
    }


    return(
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;