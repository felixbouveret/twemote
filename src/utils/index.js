// Utils

import ENV from "../static";

export function copyToClipboard(text) {
  const elem = document.createElement("textarea");
  elem.value = text;
  document.body.appendChild(elem);
  elem.select();
  document.execCommand("copy");
  document.body.removeChild(elem);

  let confMsg = document.createElement("strong");
  confMsg.classList.add("successMessage");
  confMsg.textContent = ENV.COPIED;

  document.querySelector("body").appendChild(confMsg);
  setTimeout(() => {
    confMsg.classList.add("successMessageEnter");
  }, 100);

  document.querySelector("body").appendChild(confMsg);
  setTimeout(() => {
    confMsg.classList.remove("successMessageEnter");
  }, 1900);

  setTimeout(() => {
    document.querySelector("body").removeChild(confMsg);
  }, 2000);
}
