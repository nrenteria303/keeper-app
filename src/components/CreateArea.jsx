import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
    const [newNote, setNewNote] = useState({
        title: "",
        content: ""
    });

    const [inputIsFocused, setInputIsFocused] = useState(false);

    function handleFocus() {
        setInputIsFocused(true);
    }

    function handleChange(e) {
        const {name, value} = e.target;

        setNewNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        });
    }

    function submitNote(e) {
        e.preventDefault();
        props.onAdd(newNote);
        setNewNote(() => {
            return {
                title: "",
                content: ""
            }
        });
        setInputIsFocused(false);
    }

    return (
        <div>
        <form onSubmit={submitNote}  onFocus={handleFocus} className="create-note">
            {inputIsFocused && <input aria-label="Title of the new note" onChange={handleChange} name="title" placeholder="Title" value={newNote.title} />}
            <textarea aria-label="Content of the new note" onChange={handleChange} name="content" placeholder="Take a note..." rows={inputIsFocused ? "3" : "1"} value={newNote.content} />
            <Zoom in={inputIsFocused}>
                <Fab onClick={submitNote}>
                    <AddIcon aria-label="Add new note" />
                </Fab>
            </Zoom>
        </form>
        </div>
    );
}

export default CreateArea;
