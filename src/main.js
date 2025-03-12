import { nanoid } from 'nanoid'

const generatePassowordButton = document.querySelector('button');
const displayPassoword = document.querySelector('h2');

generatePassowordButton.addEventListener('click', ()=> {
    const randomPassoword = nanoid();
    displayPassoword.innerHTML = randomPassoword;
});