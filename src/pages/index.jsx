import TypingField from "../components/TypingField";
import { useState, useEffect } from 'react';

function MainPage() {

  const [max_word_count, setMax_word_count] = useState(10)
  const [words, setWords] = useState([])

  useEffect(()=>{
    fetch('/api/words').then(res => res.json()).then(json => setWords(json))
  }, [])

  return (
    <div className="App">
      <div className="settings">
        <button onClick={() => (setMax_word_count(10))}>set 10</button>
        <button onClick={() => (setMax_word_count(50))}>set 50</button>
        <button onClick={() => (setMax_word_count(100))}>set 100</button>
      </div>
      <TypingField max_word_count={max_word_count}/>
      <div>
        {words.map(word => <p>{word.id}: {word.word}</p>)}
      </div>
    </div>
  );
}
export default MainPage;