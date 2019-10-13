let month=Number(prompt('Nhap thang: '));
if (month>12||month<1){
    alert('Khong co thang nay');
}
if (12-month<=2){
    alert('Mua dong');
} else if (12-month<=4) {
    alert('Mua thu')        
} else if (12-month<=7) {
    alert('Mua he');
} else if (12-month<=0){
    alert('Mua xuan');
} 