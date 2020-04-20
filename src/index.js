import cipher from './cipher.js';

const outputText = document.getElementById("output-text");
const cipherBtn = document.getElementById("cipher-btn");
const decipherBtn = document.getElementById("decipher-btn");

cipherBtn.addEventListener("click", clickBtn);
decipherBtn.addEventListener("click", clickBtn);

function clickBtn(e){
    const offset = Number(document.getElementById("offset").value);
    const inputText = document.getElementById("input-text").value;

    if(e.target.id == "cipher-btn"){
        const writeText = cipher.encode(offset, inputText);
        outputText.innerHTML = writeText;    
    } else {
        const writeText = cipher.decode(offset, inputText);
        outputText.innerHTML = writeText;
    }
}