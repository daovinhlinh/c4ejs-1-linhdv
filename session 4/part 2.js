let word = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team'];
let arrLength = word.length;
word.sort();
for (i = 0; i < arrLength; i++){
    let count = 0;
    for (j = 0; j <= arrLength ; j++ ){
        if (word[i] === word[j]){
        count++;
        }
    }
    console.log(`${word[i]} : ${count}`);
}


//     for (i = 0; i <= arrLength ; i++ ){
//         for (j = 0; j <= arrLength ; j++ ){
//         if (word[i] != word[j])
    
//     }
// }

// const inventory = [
//     {
//         name: 'HP Envy 13 aq',
//         price: 21000,
//         brand: 'HP',
//         quantity: 5,
//     },
//     {
//         name: 'Dell XPS 9370',
//         price: 30000,
//         brand: 'Dell',
//         quantity: 1,
//     },
//     {
//         name: 'Dell Inspiron 3567',
//         price: 9300,
//         brand: 'Dell',
//         quantity: 12,
//     },
//     {
//         name: 'Dell Latitude E5450',
//         price: 8600,
//         brand: 'Dell',
//         quantity: 2,
//     },
//     {
//         name: 'Asus Zenbook',
//         brand: 'Asus',
//         price: 20000,
//         quantity: 4,
//     },
//     {
//         name: 'HP Pavilion',
//         brand: 'HP',
//         price: 14000,
//         quantity: 7,
//     },]

//     let inventoryByBrand = {
//         dell: [
//             {
//                 name: 'Dell XPS 9370',
//                 price: 30000,
//                 brand: 'Dell',
//                 quantity: 1,
//             },
//             {
//                 name: 'Dell Inspiron 3567',
//                 price: 9300,
//                 brand: 'Dell',
//                 quantity: 12,
//             },
//             {
//                 name: 'Dell Latitude E5450',
//                 price: 8600,
//                 brand: 'Dell',
//                 quantity: 2,
//             },
//         ],
//         hp: [
//                 {
//                     name: 'HP Envy 13aq',
//                     price: 21000,
//                     brand: 'HP',
//                     quantity: 5,
//                 },
//                 {
//                     name: 'HP Pavilion',
//                     brand: 'HP',
//                     price: 14000,
//                     quantity: 7,
//                 },
//             ],
//         asus: [
//            {
//                name: 'Asus Zenbook',
//                brand: 'Asus',
//                price: 20000,
//                quantity: 4,
//            },
//            ]
//     }
  
 
 
// let count = prompt('Which brand?');
// var arr = [];
// var totalprice = 0;
// for (let i = 0 ; i < inventoryByBrand[count].length ; i++){
//     arr.push(inventoryByBrand[count][i].name);
//     totalprice = totalprice + inventoryByBrand[count][i].price * inventoryByBrand[count][i].quantity * 1000 ;
// }

// alert(`There are ` +inventoryByBrand[count].length +count+ `laptop in inventory \n` +arr.join(`\n`) +`\nTotal price: `+totalprice);  

