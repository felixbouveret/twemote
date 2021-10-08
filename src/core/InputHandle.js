// Core


import ENV from "../static";
import { copyToClipboard } from "../utils";

export default function setUpEventListeners() {

    ENV.MAIN_INPUT.addEventListener("input", ({ inputType, target }) => {
        if (inputType === 'insertLineBreak') {
            ENV.RESULT_INPUT.focus()
            copyToClipboard(ENV.RESULT_INPUT.value)
        }
        const result = target.value
            .split("")
            .map((l) => {
                if (ENV.EXCLUDED_SYMBOL.includes(l)) return l;
                if (l === " ") return "   ";
                const formattedLetter = ENV.SLACK_PREFIX.replace("#", l);
                return formattedLetter;
            })
            .join("");

        ENV.RESULT_INPUT.innerText = result;
    });

    ENV.COPY_BUTTON.addEventListener('click', () => {
        copyToClipboard(ENV.RESULT_INPUT.value)
    })


}