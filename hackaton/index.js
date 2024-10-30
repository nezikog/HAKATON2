let Name = "Кирилл";
let SurName = "Шумаков";

let lesson0 = "C#"
let lesson1 = "Html, Css, Js"

let mark0 = 12
let mark1 = 10

let time0 = "10.00 до 11.30"
let time1 = "11.45 до 12.00"

let coins = 6

let wish = "мерч"
let coinsForWish = 12

function SingUp() {
    let inputN = document.getElementById("inputN");
    let inputNS = document.getElementById("inputSN");
    let but = document.getElementById("circle");

    if (inputN.value == Name && inputNS.value == SurName) {
        window.location.href = "diary.html";
        inputN.classList.remove("red");
        inputNS.classList.remove("red");
    }
    else {
        alert("Данные введены неккоректно! Попробуйте снова!")
        inputN.classList.add("red");
        inputNS.classList.add("red");
    }
}

function initials() {
    let nameTxt = document.getElementById("name")
    let surnameTxt = document.getElementById("surname")

    nameTxt.textContent = Name
    surnameTxt.textContent = SurName
}

function Lessons() {
    let Less0 = document.getElementById("en0")
    let Less1 = document.getElementById("en1")

    Less0.textContent = lesson0
    Less1.textContent = lesson1
}

function Time() {
    let Less0 = document.getElementById("enn0")
    let Less1 = document.getElementById("enn1")

    Less0.textContent = lesson0 + " " + time0
    Less1.textContent = lesson1 + " " + time1
}

function Marks() {
    let Less0 = document.getElementById("eng0")
    let Less1 = document.getElementById("eng1")

    Less0.textContent = lesson0 + " : " + mark0 + " баллов"
    Less1.textContent = lesson1 + " : " + mark1 + " баллов"
}

function Coin() {
    let balance = document.getElementById("balance")
    let dream = document.getElementById("dream")

    balance.textContent = "На вашем счету - " + coins + " рубикоинов"
    dream.textContent = "Продолжай в том же духе, и ты накопишь на " + wish + "." +
        " Осталось рубикоинов - " + (coinsForWish - coins)

}

Coin();
Marks();
Time();
Lessons();
initials();