// Utils

import ENV from "../static";

export function copyToClipboard(text) {
    const elem = document.createElement('textarea');
    elem.value = text;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);

    let confMsg = document.createElement('strong')
    confMsg.style.color = "red"
    confMsg.textContent = ENV.COPIED

    document.querySelector('body').appendChild(confMsg)
    setTimeout(() => {
        document.querySelector('body').removeChild(confMsg)
    }, 1000)
}
