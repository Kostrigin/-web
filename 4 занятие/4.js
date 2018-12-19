var button = document.getElementById("katya");
var count = 0;

function print() {
    count = count + 1;
    console.log("Количество сосисок: " + count);
}

button.addEventListener("click", print);