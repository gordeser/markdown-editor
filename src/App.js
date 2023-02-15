import './App.css';
import {useState} from "react";

function App() {
    const [markdown, setMarkdown] = useState('# hello world')

    return (
        <div className="App">
            <textarea value={markdown}/>
            <div className="preview">{markdown}</div>
        </div>
    );
}

export default App;
