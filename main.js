//DROP DOWNMENU
var drop2 =document.getElementById('drop2');
var drop1 =document.getElementById('drop1');
var a=document.getElementsByClassName('dropdownmenu');
drop1.addEventListener('mouseover',() => {
    a[0].style.display='flex';
});
drop1.addEventListener('mouseout',() => {
    a[0].style.display='none';
});
drop2.addEventListener('mouseover',() => {
    a[1].style.display='flex';
});
drop2.addEventListener('mouseout',() => {
    a[1].style.display='none';
});
async function fetchdata(){
    const api=await fetch('https://5e11cc4a84b3db00149765e0.mockapi.io/Food');
    data=await api.json();
    
} 
function search(){
    var vale=document.getElementById('searchinput').value;
    console.log(vale);
    
}




