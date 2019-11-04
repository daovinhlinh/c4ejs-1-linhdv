var timeSheetData = [
    ['Learn front-end' , 'Learn HTML' , 6 ],
    ['Learn front-end' , 'Learn CSS' , 8 ],
    ['Learn front-end' , 'Learn JS Variables and Data Types' , 6],
    ['Learn git' , 'Learn git basics' , 2],
]
let table = document.getElementById('newtable').getElementsByTagName('tbody')[0];
for (let i = 0 ; i < 3 ; i++){
    let row = table.insertRow(i);   
    for(let j = 0 ; j < 3 ; j++){
        let newcell = row.insertCell[j];    
        // newcell.innerHTML = timeSheetData[i][j];
    }
}

function addRow() {
    document.getElementById('ts_tbody').insertAdjacentHTML('beforeend' , 
    `<tr>
    <td>${document.getElementById('pj').value}</td>
    <td>${document.getElementById('task').value}</td>
    <td>${document.getElementById('ts').value}</td>
    <td><button class = 'del_btn'>x</button></td>
    </tr>`)
}
document.getElementById('btn').addEventListener('click', ()=> {
    addRow();
})

let deletebtn = document.getElementsByClassName('del_btn');
for (let i = 0 ; i < deletebtn.length ; i++){
deletebtn[i].addEventListener('click',(e) => {
    
});}


    