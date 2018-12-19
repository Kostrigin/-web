var input = document.getElementById("field");
var result = document.getElementById("kate");
var button = document.getElementById("convert")
var x = Number(input.value);

function toF()
{
    var sum = Number(input.value);
    result.value = 9 / 5 * sum + 32;
}

button.addEventListener("click", toF(x));
result.input = x;