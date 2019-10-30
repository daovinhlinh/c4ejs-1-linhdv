
let promise = new Promise(function(resolve, reject){
  setTimeout(() => {
    resolve('Promise is da best!');
  },5000)
});
promise.then((result) => {
  console.log(result);
});

async function a() {
  const data = await promise;
  console.log(data);
}
a();


let url = 'https://sheetdb.io/api/v1/5on4axbdztwoz';
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data[0].name);
    });


function randomNum(){
  return (Math.floor(Math.random() * 11));
};
let x = randomNum();
console.log(x);
if (x < 0 ){
  console.log('The number is smaller than 0');
} else if (x > 10){
  console.log('The number is bigger than 10');
} else 
  console.log('Passed! Bravo');

function randomNumb(min,max){
  return (Math.floor(Math.random() * (max - min +1)) + min);
}
x = randomNumb(4,16);
console.log(x);
if (x < 4 ){
  console.log('The number is smaller than 4');
} else if (x > 16){
  console.log('The number is bigger than 16');
} else 
  console.log('Passed! Bravo');

function distance(x1, y1, x2, y2){
  return(Math.sqrt((x1-y1)^2+(x2-y2)^2));
}
let d = distance(3,10,0,6);
console.log(d);
if (d!== 5){
  console.log('The calculation is wrong!');
}
else {
  console.log('Passed. Bravo!');
}

url = 'http://quotes.rest/qod.json';
async function getQuote() {
  const connect = await fetch(url);
  const data = await connect.json();
  document.getElementById('quote').innerHTML = data.contents.quotes[0].quote;
  document.getElementById('author').innerHTML = data.contents.quotes[0].author; 
}
getQuote();