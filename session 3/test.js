let numberlist = prompt('Enter a sequence number');
let numberSplits = numberlist.split(',');
console.log(numberSplits);
let oddNumber= []
for (i=0; i < numberSplits.length; i++){
    if (numberSplits[i] %2==1){
    oddNumber.push(numberSplits[i]);
}
}
alert(`${numberSplits.join(', ')} => ${oddNumber.join()} `);
