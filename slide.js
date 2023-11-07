var Kichthuoc = document.getElementsByClassName("slideshow-contain")[0].clientWidth;
var chuyenslide = document.getElementsByClassName("slideshow")[0];
var Img = chuyenslide.getElementsByTagName("img")
var Max = Kichthuoc * Img.length;
Max -= Kichthuoc;
var Chuyen = 0;
function next(){
    if(Chuyen<Max) Chuyen += Kichthuoc;
    else Chuyen = 0;
    chuyenslide.style.marginLeft ='-'+ Chuyen +'px';
}
function back(){
    if(Chuyen == 0) Chuyen = Max
    else Chuyen -= Kichthuoc;
    chuyenslide.style.marginLeft ='-'+ Chuyen +'px';
}
setInterval(function(){
next();
},3500)