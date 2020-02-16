async function Random(){
    const api=await fetch('https://5e11cc4a84b3db00149765e0.mockapi.io/Food');
    const data=await api.json();
    var k=Math.floor(Math.random() * data.length);
    data[k];
    var IMG=document.getElementById('detailimg').style.backgroundImage;
    var Name=document.getElementById('detailname').innerText;
    var Info=document.getElementById('detailinfo').innerText;
    // window.location.replace('file:///C:/Users/DELL/Desktop/github/Food-dinh-kout/Food.html');
} 
function OpenYoutubeLink(){
    var utube = document.getElementById('youtubelink');
    window.location.replace(utube.innerHTML);
}