// Static const
const SLACK_PREFIX = ":alphabet-yellow-#:"
const EXCLUDED_SYMBOL = ["'", ",", ".", "?", "!", ":", ";", "\n"]
const MAIN_INPUT = document.querySelector("textarea")
const RESULT_INPUT = document.querySelector(".result")
const COPY_BUTTON = document.querySelector('#copy')
const COPIED = "Copié dans le presse Papier"

const ENV = {
    SLACK_PREFIX,
    EXCLUDED_SYMBOL,
    MAIN_INPUT,
    RESULT_INPUT,
    COPY_BUTTON,
    COPIED
}

export default ENV