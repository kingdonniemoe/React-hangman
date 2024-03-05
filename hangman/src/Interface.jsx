import { useState } from "react";
import PuzzleWord from "./puzzleWord";

function Interface () {

    const [guesses, setGuesses] = useState([])
    const [guess, setGuess] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()

        setGuesses([...guesses, guess])

        setGuess('')
    }

    const handleInput = (e) => {

        let userInput = e.target.value

        const letters = /^[a-zA-Z]*$/

        if(userInput.length > 1){
            return(<p>Please Enter 1 letter!</p>)
        }
        else if (guesses.includes(userInput.toUpperCase())) {
            window.alert('You already Guessed this letter')
        }

        else if (userInput.length === 1 && letters.test(userInput)){
                setGuess(userInput.toUpperCase())
            }

        else {
            setGuess('')
        }
        
    }

    return(
        <>
        <div className="interface">
            <form onSubmit={handleSubmit}>
            <input type="text" value={guess} placeholder="Enter a letter..." onChange={handleInput}></input>
            <br></br>
            <input type="submit"></input>
            </form>
        </div>
        <div className="puzzleWord">
            <PuzzleWord guesses={guesses}/>
        </div>
        </>
    )
}

export default Interface