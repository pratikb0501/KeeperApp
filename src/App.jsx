import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "./notes";


function App() {
    return <div>
        <Header />
        {notes.map(noteitem => <Note
            key={noteitem.key}
            title={noteitem.title}
            content={noteitem.content}
        />
        )
        }

        <Footer /></div>
}

export default App;