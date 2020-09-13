import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

let noteArr = [];

function App() {
    function supportsLocalStorage() {
        try {
            return 'localStorage' in window && window['localStorage'] !== null;
        } catch(e) {
            return false;
        }
    }

    const storage = window.localStorage;

    const [notes, setNotes] = useState([]);

    function addNote(addedNote) {
        setNotes(prevNotes => [...prevNotes, addedNote]);
        noteArr.push(addedNote);
        storage.setItem("notes", JSON.stringify(noteArr));
    }

    function deleteNote(id) {
        let deleteConf = window.confirm("Are you sure you want to delete this note?");
        if (deleteConf) {
            noteArr = noteArr.filter((note, i) => i !== id);
            storage.setItem("notes", JSON.stringify(noteArr));
            setNotes(prevNotes => {
                return prevNotes.filter((note, i) => i !== id);
            });
        }
    }

    if (supportsLocalStorage && storage.notes != null) {
        noteArr = JSON.parse(storage.notes);
    }

    function returnNotes(note, index) {
        return <Note 
                    key={index}
                    id={index}
                    title={note.title}
                    content={note.content}
                    onDelete={deleteNote}
                />;
    }

    return (
        <div className="react-content">
            <Header />
            <CreateArea onAdd={addNote} />
            <div className="notes">
                {(supportsLocalStorage) ? noteArr.map(returnNotes) : notes.map(returnNotes)}
            </div>
            <Footer />
        </div>
    );
}

export default App;
