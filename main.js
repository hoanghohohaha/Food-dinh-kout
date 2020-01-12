var drop2 =document.getElementById('drop2');
var drop1 =document.getElementById('drop1');
var a=document.getElementsByClassName('dropdownmenu');
console.log(a);

drop1.addEventListener('mouseover',() => {
    console.log('1');
    a[0].style.display='flex';
});
drop1.addEventListener('mouseout',() => {
    console.log('1');
    a[0].style.display='none';
});
drop2.addEventListener('mouseover',() => {
    console.log('1');
    a[1].style.display='flex';
});
drop2.addEventListener('mouseout',() => {
    console.log('1');
    a[1].style.display='none';
});