let message='Coding is great';
let studentCount=0;
//Change message & studentCount
console.log(message);
console.log(studentCount);
message='Coding might not be easy, but still great';
console.log(message);
studentCount=8;
console.log(studentCount);
message=message.toLowerCase(); //Change message to lower case
console.log(message);
studentCount++; // +1 student
console.log(studentCount);
alert('You look beautiful today');
//Display name
let yourName=prompt('Hi! Your name?');
alert('Hi '+yourName);
let firstName=prompt('Enter your first name');
let lastName=prompt('Enter your last name');
alert(`Hi ${firstName} ${lastName}!`);
//Calculates the area
let squareArea=prompt('Side length of the square'); 
alert(`The square area is ${squareArea*squareArea}`);
let circleArea=prompt('Radius of the circle');
alert(`The circle area is ${circleArea*circleArea*3.14}`);
let CtoF=prompt('Enter temperature in Celsius');
alert(`${CtoF}°C=${CtoF*9/5+32}°F`);

