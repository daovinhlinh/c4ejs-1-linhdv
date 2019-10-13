// let movie = {
//     title: 'Tom & Jerry',
//     year: 2000,
//     rate: 10
// };
// console.log(movie);
// console.log(`${movie.title} \n${movie.rate} \n${movie.year}`);
// console.log(movie.director); //undefined

// ///Find  property
// let question = prompt('What do you want to know?');
// if (movie[`${question}`] == null || movie[`${question}`] == undefined){
//     alert('Cannot find the property');
// }else {
//     alert(movie[`${question}`]);
// }
// movie.rate = 8.7;
// console.log(movie);
// movie.rate += 0.5;
// console.log(movie);

// //Update
// let update = prompt('What do you want to update?');
// let updateInfo;
// if (movie[update] == undefined ){
//     alert(`Cannot find ${update}. Create new property: ${update}`)
//     updateInfo = prompt('Value of new property');
//     movie[update] = updateInfo;
// }else{
//     updateInfo = prompt('Enter new value');
//     movie[update] = updateInfo;
// }
// console.log(movie);

// delete movie.year;
// console.log(movie);
// let deleteProperty = prompt('What do you want to delete?');
// if (movie[deleteProperty] == null || movie[deleteProperty] == undefined){
//     alert('Cannot find the property');
// }else {
//     delete movie[deleteProperty];
//     console.log(movie);
// }
let movie = [
    {
        Title: 'Attack on Titans',
        Year: 2013,
        Rate: 8.8,
        
    },
    {
        Title: 'My boss my hero',
        Year: 2006,
        Rate: 8.2,
    },
    {
        Title: 'Mind hunter',
        Year: 2017,
        Rate: 8.6,
    },
    {
        Title: 'Unabomber',
        Year: 2017,
        Rate: 8.1,
    },
]

// const inspect = (obj) => {
//     for (i = 0; i < movie.length; i++) {
//         var obj = movie[i]
//     for (const prop in obj) {
//         if (obj.hasOwnProperty(prop)) {
//                 console.log(`${prop}: ${obj[prop]}`)
                
//             }
//         }
//         console.log("-------------")
//     }
// }
// inspect(movie)

// for (i = 0; i <movie.length; i++){
// let objString = JSON.stringify(movie[i], null, " ").replace(/"|{|}|,|/gi, '');
// console.log(objString);
// console.log("======================="); 
// }
// movie[3].rate += 0.7;

// let movieObj = {
//     title : 'hihi',
//     year : 2000,
//     rate : 99,
//     character : ['a', 'b', 'c'],
// };
// console.log(movieObj);


