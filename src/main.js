import { nanoid } from 'nanoid'
import "./main.css"

const generatePassowordButton = document.querySelector('button');
const displayPassoword = document.querySelector('h2');

generatePassowordButton.addEventListener('click', ()=> {
    const randomPassoword = nanoid();
    displayPassoword.innerHTML = randomPassoword;
});