import { nanoid } from 'nanoid'
import copy from 'clipboard-copy'
import "./main.css"

const generatePassowordButton = document.querySelector('button');
const displayPassoword = document.querySelector('h2');

generatePassowordButton.addEventListener('click', ()=> {
    const randomPassoword = nanoid();
    displayPassoword.innerHTML = randomPassoword;
    copy(randomPassoword);
});