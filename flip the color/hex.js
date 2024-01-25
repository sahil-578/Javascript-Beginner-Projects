const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener("click", function() {
    let pre = "#";
    for(let i=0;i<6;++i) {
        pre += hex[getRandomNumber()];
    }
    color.textContent = pre;
    document.body.style.backgroundColor = pre;
})

function getRandomNumber() {
    return Math.floor((Math.random()*hex.length)); // returns a random number between
}
