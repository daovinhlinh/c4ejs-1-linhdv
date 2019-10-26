//1. Answer: 3
//2.
setInterval(() => {
    console.log('hello');   
}, 300);
//3.1 No
//3.2 No
//4
let x = document.getElementsByTagName('li');
console.log(x[1]);
console.log('--------------------------');
for ( i = 0 ; i < x.length ; i++){
console.log(x[i]);
}
console.log('--------------------------');

let z = document.getElementsByClassName('singer');
console.log(z[1]);
console.log('------------------------------');
for ( let i = 0 ; i < z.length ; i++){
    console.log(z[i]);
}

let click1 = document.getElementById('button1');
click1.addEventListener('click', (e) => {
    console.log('clicked button 1');
    console.log(e.target);
});

let click2 = document.getElementById('button2');
click2.addEventListener('click', (e) => {
    console.log('clicked button 2');
    console.log(e.target);
});
let keydown1 = document.getElementById('box');
keydown1.addEventListener('keydown', (e) => {
    // console.log(onkeydown);
    console.log(e);
});     

function event() {
    alert('linh');
    alert('trung so xo');
}
event();

function userevent(name, wish) {
    if (wish == undefined){
        alert(name);
        alert('missing wish');
    }else 
    {
        alert(name);
        alert(wish);
    }
}
userevent('abc');