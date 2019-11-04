var click = 0;
let up = document.getElementById('up');
let down = document.getElementById('down');
document.getElementById('count').innerHTML = click;
up.addEventListener('click', () => {
    click++;
    document.getElementById('count').innerHTML = click;
})
down.addEventListener('click', () => {
    click--;
    console.log(click);
    document.getElementById('count').innerHTML = click;
})