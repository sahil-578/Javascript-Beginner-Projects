var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var dlt = document.getElementsByClassName("delete");
var li = document.getElementsByTagName("li");

function removeParent(e) {
    e.target.removeEventListener("click", removeParent, false);
    e.target.parentNode.remove();
}

for (var i = 0; i < dlt.length; i++) {
    dlt[i].addEventListener("click", removeParent, false);
}

function inputLength() {
    return input.value.length;
}

function createListItems() {
    var btn = document.createElement("button");
    btn.innerHTML = "Delete";
    btn.onclick = removeParent;

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.innerHTML += " ";
    li.appendChild(btn);

    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListItems();
    }
}

function addListAfterKeypress(event) {
    if (input.value.length > 0 && event.keyCode === 13) {
        createListItems();
    }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

for (let i = 0; i < li.length; i++) {
    li[i].addEventListener("click", function () {
        if (li[i].classList.contains("done")) {
            li[i].classList.remove("done");
        } else {
            li[i].classList.add("done");
        }
    });
}
