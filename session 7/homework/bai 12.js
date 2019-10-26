let item = ['Backpack' , 'MiBand watch' , 'Ring'];
console.log(item);
console.log(test_item);


for ( var i = 0 ; i < item.length ; i++){
    //Add
    let testitem = document.getElementById('test_item');
    testitem.insertAdjacentHTML("beforeend", `<li id = ${i} >${item[i]}</li> <button id = 'del_btn${i}' type = 'submit' >Delete</button>`);
    
    //Delete
    var delbtn = document.getElementById(`del_btn${i}`);    
    let item_id = document.getElementById(`${i}`);
    delbtn.onclick = function () {
    console.log('Remove');
    console.log(`Item ${item_id.id}`);
    item_id.remove();
    this.remove();
    var index = item.indexOf(item_id.textContent);
    if (index !== -1) item.splice(index, 1);
    console.log(item);
    console.log(document.getElementById('test_item'));
    };
    }
   
var input_item = document.getElementById('input_item');
console.log(input_item);
let btn = document.getElementById('add_btn');
console.log(btn);
btn.addEventListener('click', () => {
    i++;
    console.log('Add button clicked'); // Add button event
    console.log(input_item.value); //Get value of input
    item.push(input_item.value); //Add item
    console.log(item);
    let testitem = document.getElementById('test_item');
    testitem.insertAdjacentHTML("beforeend", `<li id = ${i}>${document.getElementById('input_item').value}</li> <button id ="del_btn${i}" type = 'submit'>Delete</button>`) //Create new item and button
    document.getElementById('input_item').value= ''; //Reset value
    
    //Delete
    var item_id = document.getElementById(`${i}`);
    var delbtn = document.getElementById(`del_btn${i}`);
    delbtn.onclick = function () {
    console.log('Remove');
    console.log(`Item ${item_id.id}`);
    item_id.remove();
    this.remove();
    var index = item.indexOf(item_id.textContent);
    if (index !== -1) item.splice(index, 1);
    console.log(item);
    console.log(document.getElementById('test_item'));
    };
});
