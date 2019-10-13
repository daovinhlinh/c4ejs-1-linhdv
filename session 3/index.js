/*
let item1='com';
let item2='ga';
let item3='kem';
let item4='thit';
*/
//let menu= [];
//console.log(menu);
//let menu=['chao ga']; 
//console.log(menu);

let movies= ['Anabelle','Dead pool','Spider man','Hit man'];
console.log(movies);
let newMovie=prompt("ADD A FLIM");
movies.push(newMovie);
console.log(movies);

//read item
let i=prompt('enter position');
console.log(movies[i]);

//update item 
let movieTitle=prompt('Update movie');
movies[0]=movieTitle;
console.log(movies);

let pos=prompt('Enter position');
movieTitle=prompt('Update movie');
movies[pos]=movieTitle;
console.log(movies);

//delete item
pos=prompt('Enter position');
movies.splice(pos,1);
console.log(movies);

let delMovie=prompt('Number');
movies.splice(pos,delMovie);
console.log(movies);

//read
let n=movies.length;
for (i=0;i<n;i++){
    console.log(movies[i]);
}
for (i=0;i<n/2;i++){
    console.log(movies[i]);
}
for (i=0;i<n;i++){
    console.log(i+'. '+movies[i]);
}

//update
for (i = 0; i < n; i++){
    movies[i]=movies[i].toLocaleLowerCase();
}
console.log(movies);
