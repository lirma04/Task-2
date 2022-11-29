let count = 0;

let btn = document.querySelector("#clickme");

let disp = document.querySelector("#btn__state");

btn.onclick = function (event) {
    event.preventDefault();
    count++;
    disp.textContent = count;
}