// контейнеры игроков
let item1 = document.querySelector(`#item1`);
let item2 = document.querySelector(`#item2`);
let item3 = document.querySelector(`#item3`);

function onCounterClick(evt) {
    let item = evt.target;
    let number = item.innerHTML;
    number = Number(number);
    number++;
    item.innerHTML = number;
}
item1.addEventListener(`click`, onCounterClick);
item2.addEventListener(`click`, onCounterClick);
item3.addEventListener(`click`, onCounterClick);