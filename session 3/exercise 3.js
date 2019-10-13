//Swap a b
let a = 5;
let b = 6;
//Example 1
let swap;
swap = a;
a = b;
b = swap;
console.log(`${a} and  ${b}`);
//Example 2
[a,b] = [b,a];
console.log(`${a} and  ${b}`);

//Split String to Array
let arraySplits;
const s = 'Hello beauty there';
const a = Array(s);
console.log(s);
arraySplits = s.split(' ');
console.log(arraySplits);

//Clothes shop
let item = ['Jeans', 'T-shirt', 'Socks'];
let choice = 0;
let r,u,c,d;
while (true ){
    choice = prompt('Welcome to shop admin panel! What do you want? (C, R, U, D)');
if (choice == 'r'){
        console.log('The current items are: \n');
        for (i = 0; i < item.length; i++){
        let a = Number(item.indexOf(item[i], 0));
        console.log(`${a+1}. ${item[i]}`);      
        }
} else if (choice == 'c'){
        let updateItem = prompt('Enter the name of the new item');
        item.push(updateItem);  
        alert('Done');
} else if (choice == 'u'){
        let updatePos = Number(prompt('Enter the position you want to update'));
        let updateName = prompt('Enter the new name');
        item[updatePos-1] = updateName;
        alert('Done!');
} else if (choice == 'd'){
        posItem = Number(prompt('Enter position you want to delete'));
        item.splice(posItem-1,1);
        alert('Done!');
} else {
    alert('Wrong input')
}
}


//Sum of array
let number = prompt('enter number');
let numSplits = number.split(',');
console.log(numSplits);
let sum = 0;
for (let i = 0; i < numSplits.length; i++){
    sum = sum + Number(numSplits[i]);
}
alert(`The sum is ${sum}`);
let min = Math.min(...numSplits);
alert(`Min number is ${min}`);

const arr = [1,2,4,5,6,100];
let findNum = Number(prompt('Enter number you need to find'));
let getindex = arr.indexOf(findNum, 0);
if (findNum == arr[getindex]){
    alert(`${findNum} is FOUND at position ${getindex}`);
} else{
    alert('Number not found');
}
let total = Number(prompt('Enter amount of sheep'));
let sheep = [];
let a;
for (i = 0; i < total; i++){
let add = Number(prompt(`Enter size of sheep ${i+1}`));
sheep.push(add);
}
console.log(`This is size of my sheep: ${sheep.join(' ')}`);
console.log(`My biggest sheep has size ${Math.max(...sheep)}`);
let biggest = Math.max(...sheep);
a = sheep.indexOf(biggest,0);
sheep[a] = 8;
console.log(`After sheering, this is my flock: ${sheep.join(' ')}\n`);

// Info of sheep
let month = Number(prompt(`Enter amount of month`));
for (j = 1; j <= month; j++){
for (i = 0; i < total; i++){
    sheep[i] = sheep[i]+ 50;
}
console.log(`MONTH ${j}`);
console.log(`This is size of sheep after ${j} month: ${sheep.join(' ')}`)
console.log(`My biggest sheep has size ${Math.max(...sheep)}. Let's shave it`);
biggest = Math.max(...sheep);
a = sheep.indexOf(biggest,0);
sheep[a] = 8;
console.log(`After sheering, this is my flock: ${sheep.join(' ')}\n`);;
}  
let totalSize = 0;
for (i = 0; i< total; i++){
    totalSize = totalSize + sheep[i];
}
console.log(`This is total size of my sheep ${totalSize}`);
console.log(`I would get: ${totalSize}*2$ = ${totalSize*2}$`);

//Turtle
clear();
let mau = ['red', 'grey', 'blue', 'purple', 'cyan'];
for (i = 0; i < 5; i++){
  color(`${mau[i]}`);
  for (j = 1; j <= 4; j++){
  fd(i*30);
  rt(90);
}
}

//Optional 1
let namelist = prompt('Enter name');
let nameSplits = namelist.split(', ');
let nameSplits1 = [...nameSplits];
for (i = 0; i < nameSplits1.length; i++){
    nameSplits1[i] = `<${nameSplits1[i]}>`;
}
alert(`${nameSplits.join(', ')} => ${nameSplits1.join()} `);

//optional 2
let numberlist = prompt('Enter a sequence number');
let numberSplits = numberlist.split(',');
console.log(numberSplits);
let oddNumber = []
for (i = 0; i < numberSplits.length; i++){
    if (numberSplits[i] %2 == 1){
    oddNumber.push(numberSplits[i]);
}
}
alert(`${numberSplits.join(', ')} => ${oddNumber.join()} `);
