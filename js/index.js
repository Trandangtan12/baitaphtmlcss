let control = document.getElementsByClassName('control')
let col = document.getElementsByClassName('col');
let slide = document.getElementsByClassName('slide')
let col_page = Math.ceil(col.length/4);
let l = 0;
let movePer = 33;
let maxMove = 306;

//Mobile view

let mobile_view = window.matchMedia("(max-width: 768px)");
if(mobile_view.matches) {
    movePer = 103;
    maxMove = 600
}

let right_mover = () => {
    l = l + movePer;
    if(col == 1) {l=0}
    for(const i of col) {
        if(l > maxMove) {l = 0}
        i.style.left = '-' + l + '%';
    }
}

let left_mover = () => {
    l = l - movePer;
    if(l <= 0) {l=0}
    for(const i of col) {
        if(col_page > 1) {
        i.style.left = '-' + l + '%';
        }
    }
}


control[0].onclick = () => {left_mover();}
control[1].onclick = () => {right_mover();}


slide.onload = setInterval(() => {right_mover()}, 5000)
