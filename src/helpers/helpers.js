export const showNotification = (setter) => {
    setter(true)
    setTimeout(() => {
        setter(false)
    }, 1500)
}

export const checkWin = (correct, wrong, word) => {
    let status = "win"

    word.split('').forEach(letter => {
        if (!correct.includes(letter)) {
            status = ""
        }
    })

    if (wrong.length === 6) status = "loss"

    return status
}