let click = document.getElementById('button');
console.log(click);
let input = document.getElementById('inputbox');
console.log(input);
let div = document.getElementsByTagName('div');
console.log(div[0]);
click.addEventListener('click', () => {
    console.log('Upper it!!!! Just clicked');
    let text = document.getElementById("inputbox").value;
    console.log('Username: ' +text);
    upper = text.toUpperCase()
    console.log('Upper: ' +upper);
    document.getElementById('result_div').innerHTML = upper;
});



