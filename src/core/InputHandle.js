// Core

import ENV from "../static";
import { copyToClipboard, formatLetter } from "../utils";

export default function setUpEventListeners() {
    ENV.MAIN_INPUT.addEventListener("input", ({ inputType, target }) => {
        if (inputType === "insertLineBreak") {
            ENV.RESULT_INPUT.focus();
            copyToClipboard(ENV.RESULT_INPUT.value);
        }
        const result = target.value
            .split("")
            .map((l) => {
                if (ENV.EXCLUDED_SYMBOL.includes(l)) return l;
                if (l === " ") return "   ";
                if (ENV.SYMBOL_DICO[l]) return ENV.SLACK_PREFIX.replace("#", ENV.SYMBOL_DICO[l])
                const formattedLetter = ENV.SLACK_PREFIX.replace("#", formatLetter(l));
                return formattedLetter;
            })
            .join("");

        ENV.RESULT_INPUT.innerText = result;
    });

    ENV.COPY_BUTTON.addEventListener("click", () => {
        copyToClipboard(ENV.RESULT_INPUT.value);
    });
}
