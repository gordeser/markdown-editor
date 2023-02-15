import './App.css';
import {useState} from "react";
import ReactMarkdown from "react-markdown";

function App() {
    const [markdown, setMarkdown] = useState('# hello world')

    const handleOnChange = (e) => {
        setMarkdown(e.target.value)
    }

    return (
        <div className="App">
            <textarea onChange={handleOnChange} value={markdown} />
            <ReactMarkdown className="preview" children={markdown}/>
        </div>
    );
}

export default App;
