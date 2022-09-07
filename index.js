const hoursEle = document.getElementById("hours");
const minEle = document.getElementById("minutes");
const secEle = document.getElementById("seconds");
const ampmEle= document.getElementById("ampm");
function UpdateClock(){
    let h= new Date().getHours()
    let m= new Date().getMinutes()
    let s= new Date().getSeconds()
    let ampm="AM"
    if(h>12){
        h=h-12;
        ampm="PM";
    }
    h=h<10 ? "0"+h : h;
    m=m<10 ? "0"+m : m;
    s=s<10 ? "0"+s : s;




    hoursEle.innerText=h;
    minEle.innerText=m;
    secEle.innerText=s;
    ampmEle.innerText=ampm;
    setTimeout(()=>{
        UpdateClock()

    },1000)
}
UpdateClock()