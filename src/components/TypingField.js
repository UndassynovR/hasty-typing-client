import { useState, useEffect } from 'react'
import Letter from './Letter.js'
var words = ["be", "and", "of", "a", "in", "to", "have", "too", "it", "that", "for", "you", "he", "with", "on", "do", "say", "this", "they", "at", "but", "we", "his", "from", "that", "not", "cat", "wo", "by", "she", "or", "as", "what", "go", "their", "can", "who", "get", "if", "would", "her", "all", "my", "make", "about", "know", "will", "as", "up", "one", "time", "there", "year", "so", "think", "when", "which", "them", "some", "me", "people", "take", "out", "into", "just", "see", "him", "your", "come", "could", "now", "than", "like", "other", "how", "then", "its", "our", "two", "more", "these", "want", "way", "look", "first", "also", "new", "because", "day", "more", "use", "no", "man", "find", "here", "thing", "give", "many", "well", "only", "those", "tell", "one", "very", "her", "even", "back", "any", "good", "woman", "through", "us", "life", "child", "there", "work", "down", "may", "after", "should", "call", "world", "over", "school", "still", "try", "in", "as", "last", "ask", "need", "too", "feel", "three", "when", "state", "never", "become", "between", "high", "really", "something", "most", "another", "much", "family", "own", "out", "leave", "put", "old", "while", "mean", "on", "keep", "student", "why", "let", "great", "same", "big", "group", "begin", "seem", "country", "help", "talk", "where", "turn", "problem", "every", "start", "hand", "might", "show", "part", "about", "against", "place", "over", "such", "again", "few", "case", "most", "week", "company", "where", "system", "each", "right", "program", "hear", "so", "question", "during", "work", "play"];

function randInt(min, max){return Math.floor(Math.random() * (max - min)) + min;}
function TypingField(props) {
    const [counter, setCounter] = useState(0);
    const [letters, setLetters] = useState([]);
    
    useEffect(() => {
        let letters = [];
        for(let word_count = 0; word_count < props.max_word_count; word_count++){
            let word = words[randInt(0, words.length)];
            letters = letters.concat(Array.from(word));
            letters.push(' ');
        }
        letters.pop();
        letters = letters.map((letter) => ({letter: letter, class: 'normal'}));
        setCounter(0);
        setLetters(letters);
    }, [props.max_word_count]);

    useEffect(() => {
        if(counter===letters.length && counter!==0) alert("You typed "+props.max_word_count+" words");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [counter, letters]);
    
    function keyboardEvent(event){
        switch(event.key){
            case "Backspace":
                if(counter <= 0) return;
                setCounter(counter => counter -1);
                letters[counter-1].class = 'normal';
                if(letters[counter-1].letter === '_') letters[counter-1].letter = ' ';
                break;
            default:
                if(!event.key.match(/^[\p{L}|\s]$/ui)) break;
                letters[counter].class = letters[counter].letter === event.key ? 'typed' : 'error';
                if(letters[counter].letter === ' ' && ' ' !== event.key) letters[counter].letter = '_';
                setCounter(counter => counter > letters.length-1 ? counter : counter+1);
        }
    }
    const keys = (letter, id) => {
        return <Letter key={id} value={letter.letter} className={letter.class}/>;
    }

    return  <div className='TypingField unselectable' tabIndex={1} onKeyDown={keyboardEvent}>
                {counter}<br/>
                {letters.map(keys)}
            </div>
}

export default TypingField