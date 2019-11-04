let timeleft = document.getElementById('input'),
downloadTimer;
    
function start(){
    downloadTimer = setInterval(function(){
    timeleft.value -= 1;
    if(timeleft.value <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Time's up!!!"
        timeleft.value = '';
    }
}, 1000);
}
function stop(){
    clearInterval(downloadTimer);
    timeleft.value = '';
    document.getElementById('countdown').innerHTML = 'Stopped!'
}