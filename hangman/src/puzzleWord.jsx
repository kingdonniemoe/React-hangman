import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

import words from '../public/words.json';

function PuzzleWord  ( {guesses} ) {

    const [randomWord, setRandomWord] = useState('')
    const [hiddenWord, setHiddenWord] = useState('')

   

    useEffect(() => {
        const newRandomWord = words[Math.floor(Math.random() * words.length)]
        setRandomWord(newRandomWord);
    }, [])

    useEffect(() => {
        setHiddenWord(generateHiddenWord(randomWord, guesses).toUpperCase());
    }, [guesses])

    const generateHiddenWord = (word, guesses) => {
        return word.replace(/[a-zA-Z]/g, char => (guesses.includes(char.toUpperCase()) ? char : '_'));
    }

    const correct = () => {
        return(<h1 className="correct">Bitch You Guessed It</h1>)
    }

    if(hiddenWord !== '' && randomWord.toUpperCase() === hiddenWord){
        return correct()
    }

    return (
        <div className="random-word">
            <h1>{hiddenWord}</h1>
            <h2>Your Guesses:</h2>
                <p className="user-guesses">{guesses.map((letter) => !hiddenWord.includes(letter.toUpperCase())? `${letter} ` : null )}</p> 
        </div>
    )
}

PuzzleWord.propTypes = {
    guesses: PropTypes.array.isRequired
};


export default PuzzleWord