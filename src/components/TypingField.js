import React from 'react'
//import PropTypes from 'prop-types'
import Letter from './Letter.js'
var words = ["be", "and", "of", "a", "in", "to", "have", "too", "it", "that", "for", "you", "he", "with", "on", "do", "say", "this", "they", "at", "but", "we", "his", "from", "that", "not", "cat", "wo", "by", "she", "or", "as", "what", "go", "their", "can", "who", "get", "if", "would", "her", "all", "my", "make", "about", "know", "will", "as", "up", "one", "time", "there", "year", "so", "think", "when", "which", "them", "some", "me", "people", "take", "out", "into", "just", "see", "him", "your", "come", "could", "now", "than", "like", "other", "how", "then", "its", "our", "two", "more", "these", "want", "way", "look", "first", "also", "new", "because", "day", "more", "use", "no", "man", "find", "here", "thing", "give", "many", "well", "only", "those", "tell", "one", "very", "her", "even", "back", "any", "good", "woman", "through", "us", "life", "child", "there", "work", "down", "may", "after", "should", "call", "world", "over", "school", "still", "try", "in", "as", "last", "ask", "need", "too", "feel", "three", "when", "state", "never", "become", "between", "high", "really", "something", "most", "another", "much", "family", "own", "out", "leave", "put", "old", "while", "mean", "on", "keep", "student", "why", "let", "great", "same", "big", "group", "begin", "seem", "country", "help", "talk", "where", "turn", "problem", "every", "start", "hand", "might", "show", "part", "about", "against", "place", "over", "such", "again", "few", "case", "most", "week", "company", "where", "system", "each", "right", "program", "hear", "so", "question", "during", "work", "play"];

function randInt(min, max){return Math.floor(Math.random() * (max - min)) + min;}
var counter = 0;
var letters = [];
const max_word_count = 50;
function TypingField(props) {
    for(let word_count = 0; word_count < max_word_count; word_count++){
        let word = words[randInt(0, words.length)];
        for(let i = 0; i < word.length; i++){
            letters.push(<Letter value={word[i]} />);
        }
        letters.push(<Letter value=' ' />);
    }

  return(
    <div className='TypingField'>
        {letters}
    </div>
  )
}

//TypingField.propTypes = {}

export default TypingField
document.onkeydown = function(event){
    switch(event.key){
        case "Backspace":
            if(counter <= 0) return;
            counter--;
            /*
            text[counter].classList.add("normal_text");
            text[counter].classList.remove("correct_text");
            text[counter].classList.remove("error_text");
            */
            break;
        default:
            if(!event.key.match(/^[\p{L}|\s]$/ui)) break;
            /*
            text[counter].classList.remove("normal_text");
            text[counter].classList.add(event.key == text[counter].innerHTML ? "correct_text" : "error_text");
            */
            counter++;
            console.log(event.key);
    }
    if(counter === letters.length -1){
        alert('you are done');
    }
}