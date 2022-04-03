import React from 'react'
import PropTypes from 'prop-types'
import Letter from './Letter.js'

function Word(props) {
    let letters = [<Letter value=' ' />];
    for(let i = 0; i < props.text.length; i++){
        letters.push(<Letter value={props.text[i]} />);
    }

  return <span>{letters}</span>
}

Word.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Word
