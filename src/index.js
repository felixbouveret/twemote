/**
 * JS File Compiled in Dist
 * Webpack module activated - Benoit Lamonica
 */

console.log('====================================');
console.log('JS Loaded');
console.log('====================================');

const SLACK_PREFIX = ":alphabet-yellow-#:";
const excludedSymboles = ["'", ",", ".", "?", "!", ":"];

const input = document.querySelector("textarea");
const resultBox = document.querySelector(".result");

input.addEventListener("input", ({ target }) => {
    const result = target.value
        .split("")
        .map((l) => {
            if (excludedSymboles.includes(l)) return l;
            if (l === " ") return "   ";
            const formattedLetter = SLACK_PREFIX.replace("#", l);
            return formattedLetter;
        })
        .join("");
    resultBox.innerText = result;
});