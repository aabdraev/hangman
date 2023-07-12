import React from 'react'

const WrongLetters = ({ wrongLetters }) => {
    return (
        <section className="wrong-letters-container">
            <div>
                {wrongLetters.length > 0 && <p>wrong letters:</p>}
                {wrongLetters
                    .map((letter, i) =>
                        <span key={i}>
                            {letter}
                        </span>)
                    .reduce((prev, curr) => prev === null ? [curr] : [prev, ", ", curr], null)
                }
            </div>
        </section>
    )
}

export default WrongLetters