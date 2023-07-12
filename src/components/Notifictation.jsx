import React from 'react'

const Notifictation = ({ showNotification }) => {
    return (
        <section className={`notification-container ${showNotification ? "show" : ""}`}>
            <p>You have already entered this letter</p>
        </section>
    )
}

export default Notifictation