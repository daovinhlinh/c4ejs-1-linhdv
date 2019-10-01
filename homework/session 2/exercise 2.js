//Print 6 numbers
for (let i = 0; i < 6; i++){
    console.log(i);
}
console.log('\n');

//n number, start from 0
let n = prompt('Enter n');
for (let i = 0; i < n; i++){
    console.log(i);
}
console.log('\n');

//Starting from 3, ending before n
n = prompt('Enter n');
for (let i = 3; i < n; i++){
    console.log(i);
}
console.log('\n');

//Starting from c, ending before n
let c = prompt('Enter c');
n = prompt('Enter n');
for (let i = c; i < n; i++ ){
    console.log(i);
}
console.log('\n'); 
// starting from ​c​, ending before ​n​, stepping by 3
c = Number(prompt('Enter c'));
n = Number(prompt('Enter n'));
for (let i = c; i < n;i += 3){
    console.log(i);
}
//starting from ​c​, ending before ​n​, stepping by ​s
c = Number(prompt('Enter c'));
n = Number(prompt('Enter n'));
s = Number(prompt('Enter s'));
for (let i = c; i < n; i += s){
    console.log(i);
}
console.log('\n');

//14+
let age = Number(prompt('Your age?'));
if (age > 14){
    console.log('Enjoy!');
}
else{
    console.log('You are not old enough!');
}
console.log('\n');

//Compare to half of 9
let x = Number(prompt('Enter number from 0-9'));
if (x < 0 && x > 9){
    console.log('Out of range');
}
else if(x < 4.5){
    console.log('Lower half of 9');
}
else{
    console.log('Higher half of 9');
}
console.log('\n');

//Compare to half of x
x = Number(prompt('Enter x'));
n = Number(prompt('Enter n'));
if (x > n/2){
    console.log(`${x} higher than half of ${n}`);
}
else{
    console.log(`${x} lower than half of ${n}`);
}

console.log('\n');
// check even/odd number
let number = Number(prompt('Enter a number'));
if (number % 2 == 0){
    console.log(`${number} is an even number`);
}
else{
    console.log(`${number} is an odd number`);
}
// 6 L's and H's
let Low = 0;
    High = 0;
for (i = 0; i < 6; i++){
    if (i < 3){
        Low++;
    }
    else{
        High++;
}
}
console.log(`${Low}L`);
console.log(`${High}H`);

Low = 0;
High = 0; 
n = Number(prompt('Enter total L and H '));
for (i = 0; i < n; i++){
    if (i < n/2){
        Low++;
    }
    else{
        High++;
    }
}
console.log(`${Low}L`);
console.log(`${High}H`);

//8 1's and 0's in total
for (i = 0; i < 8; i++){
    if (i % 2  ==  0){
    console.log('0');
    }
    else{
    console.log('1');
}
}
n = Number(prompt('Enter number of line '));
for (i = 0; i < n; i++){
    if (i % 2  ==  0){
        console.log('0');
    }
    else{
        console.log('1');
    }
}

let yourWeight = Number(prompt('Enter your weight in kg'));
let yourHeightcm = Number(prompt('Enter your height in cm'));
let yourHeightm = yourHeightcm/100;
let BMI = yourWeight/(yourHeightm*yourHeightm);
alert(`Your BMI: ${BMI.toFixed(1)}`);

if (BMI < 16){
    alert('Severely underweight');
}
else if (BMI > 16 && BMI < 18.5){
    alert('Underweight');
}
else if (BMI > 18.5 && BMI < 25){
    alert('Normal');
}
else if (BMI > 25 && BMI < 30){
    alert('Overweight');
}
else{
    alert('Obese');
}

//JS Turtle
//Square
for (i = 0; i < 4; i++){
    fd(100);
    rt(90);
  }
//Triangle
for (i = 0; i < 3; i++){
    fd(100);
    rt(120);
  }
//Pentagon
for (i = 0; i < 5; i++){
    fd(100);
    rt(72);
  }
//Hexagon
for (i = 0; i < 6; i++){
    fd(100);
    rt(60);
  }
//Polygon n edges
let n = Number(prompt('Enter number of edges'));
for (i = 0; i < n; i++){
  fd(100);
  rt(360/n);
}

//5 polygons
clear();
var n= [3,4,5,6,7];

for (i=0;i<n.length;i++){
  for (j=1;j<i+4;j++){
    	fd(100);
      	lt(360/n[i]);
    }
}


