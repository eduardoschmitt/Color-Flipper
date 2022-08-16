const vetor = [];
const botao = document.getElementById("btn");
const color = document.querySelector(".color");
var stringColor = '#';

botao.addEventListener("click", () => {
    let stringColor = '#';
    while (stringColor.length < 7) stringColor += Math.floor(Math.random() * 0x10).toString(16);
    console.log(stringColor);
    document.body.style.backgroundColor = stringColor;
    color.textContent = stringColor;
    stringColor = '#'
})

function getRandomNumber(){
   return Math.floor(Math.random() * 16);
}