import React, { useEffect, useState } from 'react'
import Figure from './Figure'
import WrongLetters from './WrongLetters'
import Notifictation from './Notifictation'
import Popup from './Popup'
import Word from './Word'
import { showNotification as show } from '../helpers/helpers'



const words = ['application', 'programming', 'interface', 'wizard'];
let selectedWord = words[Math.floor(Math.random() * words.length)];

const GameContainer = () => {
    const [playable, setPlayable] = useState(true)
    const [correctLetters, setCorrectLetters] = useState([])
    const [wrongLetters, setWrongLetters] = useState([])
    const [showNotification, setShowNotification] = useState(false)

    useEffect(() => {
        const handleKeydown = e => {
            const { key, keyCode } = e

            if (playable && keyCode >= 65 && keyCode <= 90) {
                const letter = key.toLowerCase();

                if (selectedWord.includes(letter)) {
                    if (!correctLetters.includes(letter)) {
                        setCorrectLetters(currentLetters => [...currentLetters, letter])
                    } else {
                        show(setShowNotification)
                    }
                } else {
                    if (!wrongLetters.includes(letter)) {
                        setWrongLetters(wrongLetters => [...wrongLetters, letter])
                    } else {
                        show(setShowNotification)
                    }
                }
            }
        }
        window.addEventListener('keydown', handleKeydown)
        return () => window.removeEventListener('keydown', handleKeydown)
    }, [playable, correctLetters, wrongLetters])

    const playAgain = () => {
        setPlayable(true)
        setCorrectLetters([])
        setWrongLetters([])

        const random = Math.floor(Math.random() * words.length)
        selectedWord = words[random]
    }

    return (
        <>
            <section className="game-container">
                <Figure
                    wrongLetters={wrongLetters}
                />
                <WrongLetters
                    wrongLetters={wrongLetters}
                />
                <Word
                    selectedWord={selectedWord}
                    correctLetters={correctLetters}
                />
            </section>
            <Popup
                correctLetters={correctLetters}
                wrongLetters={wrongLetters}
                selectedWord={selectedWord}
                setPlayable={setPlayable}
                playAgain={playAgain}
            />
            <Notifictation
                showNotification={showNotification}
            />
        </>
    )
}

export default GameContainer