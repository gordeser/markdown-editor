import './App.css';
import {useState} from "react";

function App() {
    const [markdown, setMarkdown] = useState('# hello world')

    const handleOnChange = (e) => {
        setMarkdown(e.target.value)
    }

    return (
        <div className="App">
            <textarea onChange={handleOnChange} value={markdown}/>
            <div className="preview">{markdown}</div>
        </div>
    );
}

export default App;
