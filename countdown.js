var h = 10; 
var m = 59; 
var s = 59; 

var timeout = null;
setInterval(function start(){
    if (s === -1){
        m -= 1;
        s = 59;
    }
    if (m === -1){
        h -= 1;
        m = 59;
    }
    document.getElementById('h').innerText = h
    document.getElementById('m').innerText = m
    document.getElementById('s').innerText = s
    
    timeout = setTimeout(function(){
        s--;
    })
}, 1000)