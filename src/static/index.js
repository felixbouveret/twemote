// Static const
const SLACK_PREFIX = ":alphabet-yellow-#:"
const EXCLUDED_SYMBOL = ["'", ",", ".", "!", ":", ";", "\n"]
const MAIN_INPUT = document.querySelector("textarea")
const RESULT_INPUT = document.querySelector(".result")
const COPY_BUTTON = document.querySelector('#copy')
const COPIED = "Copié dans le presse Papier"
const SYMBOL_DICO = {
    "?": "question"
}

const ENV = {
    SLACK_PREFIX,
    EXCLUDED_SYMBOL,
    MAIN_INPUT,
    RESULT_INPUT,
    COPY_BUTTON,
    COPIED,
    SYMBOL_DICO
}

export default ENV