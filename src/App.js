import Body from "./Body";
import "./App.css";
import Heading from "./Heading";
import books from "./assets/book1.png"
import { useState } from "react";


function App() {
  const [word, setWord] = useState("");
  const [results, setResults] = useState(null);

  const searchWord = async () => {
    const response = await fetch(
      "https://api.dictionaryapi.dev/api/v2/entries/en/" + word
    );

    const data = await response.json();

    setResults(data[0]);
  };

  const heading = () => {
    const audio = results?.phonetics.find((phone) => phone.audio !== "")?.audio;
    return {
      audioUrl: audio,
      word: results?.word,
      phonetic: results?.phonetic,
    };
  };

  return (
    <div className="container mx-auto px-10">
      <nav className="mt-1 flex flex-col items-center">
        <div className="w-full flex flex-col items-center mt-40"><img src={books} width={150} h-50/></div>
        <h1 className="text ">Welcome to Searchie Dictionary</h1> 
        <p className="mt-1">Searchie gives you access to the most uncommon meanings, pronunciations, synonyms, antonyms, and other language-related information you input.</p>
        
      </nav>
      <input
        type="text" placeholder="search here"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        className="searchie w-full" 
      />
      
      <div className="move">
          <button className="where" onClick={searchWord}>
            Search Words
          </button>
      </div>
      

      {results?.meanings?.length > 0 && (
        <>
          <Heading {...heading()} />
          {results.meanings.map((body, index) => {
            return <Body {...body} key={index} />;
          })}
        </>
      )}
    </div>
  );
}

export default App;
