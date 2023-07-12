import React from 'react'

const Word = ({ selectedWord, correctLetters }) => {
    return (
        <section className="word">
            {selectedWord
                .split('')
                .map((letter, i) => {
                    return (
                        <span className="letter" key={i}>
                            {correctLetters.includes(letter) ? letter : ''}
                        </span>
                    )
                })}
        </section>
    )
}

export default Word