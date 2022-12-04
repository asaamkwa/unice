const getDateNow = new Date();
const getH = getDateNow.getHours();

const yearh = getDateNow.getFullYear();

if(getH < 12){
    document.getElementById("h2").innerHTML="Good Morning";
    document.getElementById("h2").style.color= "pink";
    
}else if(getH < 18){
    document.getElementById("h2").innerHTML="Good Afternoon";
    document.getElementById("h2").style.color= "green";
}else{
    document.getElementById("h2").innerHTML="Good Night";
    document.getElementById("h2").style.color= "red";
}



document.getElementById("foo").innerHTML = "Tiimtect @ "+yearh;

