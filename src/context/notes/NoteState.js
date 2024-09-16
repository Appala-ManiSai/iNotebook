import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
   const notesInitial = [
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
      "_id": "66e6f4c608732891e02e759a",
      "user": "66e6d34e6881fede7bae3520",
      "title": "new note",
      "description": "please access the playlist",
      "tag": "youtube",
      "date": "2024-09-15T14:52:54.926Z",
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
        "_id": "66e6dee8ae77b3bae81cb7c5",
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
        "_id": "66e6dee8ae77b3bae81cb7c5",
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
      }
  ]
   const [notes,setNotes] = useState(notesInitial)
    return(
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;