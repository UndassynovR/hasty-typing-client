import { useState, useEffect } from 'react'
//import PropTrypes from 'prop-types'
import Letter from './Letter.js'
var words = ["be", "and", "of", "a", "in", "to", "have", "too", "it", "that", "for", "you", "he", "with", "on", "do", "say", "this", "they", "at", "but", "we", "his", "from", "that", "not", "cat", "wo", "by", "she", "or", "as", "what", "go", "their", "can", "who", "get", "if", "would", "her", "all", "my", "make", "about", "know", "will", "as", "up", "one", "time", "there", "year", "so", "think", "when", "which", "them", "some", "me", "people", "take", "out", "into", "just", "see", "him", "your", "come", "could", "now", "than", "like", "other", "how", "then", "its", "our", "two", "more", "these", "want", "way", "look", "first", "also", "new", "because", "day", "more", "use", "no", "man", "find", "here", "thing", "give", "many", "well", "only", "those", "tell", "one", "very", "her", "even", "back", "any", "good", "woman", "through", "us", "life", "child", "there", "work", "down", "may", "after", "should", "call", "world", "over", "school", "still", "try", "in", "as", "last", "ask", "need", "too", "feel", "three", "when", "state", "never", "become", "between", "high", "really", "something", "most", "another", "much", "family", "own", "out", "leave", "put", "old", "while", "mean", "on", "keep", "student", "why", "let", "great", "same", "big", "group", "begin", "seem", "country", "help", "talk", "where", "turn", "problem", "every", "start", "hand", "might", "show", "part", "about", "against", "place", "over", "such", "again", "few", "case", "most", "week", "company", "where", "system", "each", "right", "program", "hear", "so", "question", "during", "work", "play"];

function randInt(min, max){return Math.floor(Math.random() * (max - min)) + min;}
const max_word_count = 20;
function TypingField(props) {
    const [letters, setLetters] = useState([]);
    const [counter, setCounter] = useState(0);
    useEffect(() => {
    let letters = [];
    for(let word_count = 0; word_count < max_word_count; word_count++){
        let word = words[randInt(0, words.length)];
        for(let i = 0; i < word.length; i++){
            letters.push(<Letter value={word[i]} />);
        }
        letters.push(<Letter />);
    }
    setLetters(letters);
    }, []);
    

    function keyboardEvent(event){
        switch(event.key){
            case "Backspace":
                if(counter <= 0) return;
                setCounter(counter -1);
                //make normal text color
                break;
            default:
                if(!event.key.match(/^[\p{L}|\s]$/ui)) break;
                //change color to error or correct
                //text[counter].classList.add(event.key == text[counter].innerHTML ? "correct_text" : "error_text");
                setCounter(counter +1);
        }
        if(counter === letters.length - 1){
            alert('you are done');
        }
    }

    return  <div className='TypingField' tabIndex={1} onKeyDown={keyboardEvent}>
                {counter}<br/>
                {letters}
            </div>
}

//TypingField.propTypes = {}

export default TypingField