let answer= ['1. None', '2. 4 legs', '3. 8 legs', '4. 12 legs'];
alert(`How many legs does a spider have? \n` +answer.join('\n'));
let choice=prompt('Choose your answer')
while (choice > 4 || choice < 1 || isNaN(choice)){
    alert('Haha');
    alert('Your answer is invalid. Enter again');
    choice=prompt('Choose your answer')
}
if (choice==3){
    alert('Your answer is correct!!!');
}
else{
    alert('Wrong!');
}
