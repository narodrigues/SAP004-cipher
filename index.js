import cipher from './cipher.js';

const outputText = document.getElementById("outputText");
const cipherBtn = document.getElementById("cipherBtn");
const decipherBtn = document.getElementById("decipherBtn");

cipherBtn.addEventListener("click", function(){
    const offset = Number(document.getElementById("offset").value);
    const inputText = document.getElementById("inputText").value;
    const writeText = cipher.encode(offset, inputText);

    outputText.innerHTML = writeText;
})

decipherBtn.addEventListener("click", function(){
    const offset = Number(document.getElementById("offset").value);
    const inputText = document.getElementById("inputText").value;
    const writeText = cipher.decode(offset, inputText);

    outputText.innerHTML = writeText;
})