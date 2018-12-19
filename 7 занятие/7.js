var optionsIterator;
var options = [];
var QConter = 0, correct=0;
var container = document.getElementById("container");
var question = document.getElementById("question");

function load() {
    question.innerHTML = Questoions[QConter].text;
    for (optionsIterator = 0; optionsIterator < 4; ++optionsIterator) {
        options[optionsIterator].innerHTML = Questoions[QConter].options[optionsIterator];
    }
}

function proceed(event) {
    var index = event.target.index;
    if (Questoions[QConter].correct == index) {
        correct++;
    }
    QConter++;
    if (QConter == Questoions.length) {
        document.body.innerHTML = "<h1>Непраильных ответов: " + correct + "/" + Questoions.length + "</h1>";
    } else {
        load();
    }
    
}

for (optionsIterator = 0; optionsIterator < 4; ++optionsIterator) {
    var option = document.createElement("div");
    option.classList.add("panel", "panel--option");
    option.index = optionsIterator;
    option.addEventListener("click", proceed);
    container.appendChild(option);
    options.push(option);
}

load();