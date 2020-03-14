var detailfood=`<div id='detailcontain'>
<div id='maininfo'>
    <div id='detailimg'></div>
    <div id='detailname'>aaaaa</div>
    <div id="detailinfo">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum nesciunt voluptatum vero laborum necessitatibus voluptate, voluptatem possimus ipsa aliquid deserunt saepe! Sit labore eos dolorem blanditiis reprehenderit magni accusamus tempore!</div>
</div>
<div id='stepcontain'>
    <div id='steps'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, provident? Totam, commodi placeat! Dolorem ratione, eligendi quos, quisquam dolor harum nesciunt accusantium possimus distinctio nostrum maxime porro incidunt at aliquam.</div>
    <div id='youtubelink' onclick="OpenYoutubeLink()">https://www.youtube.com/watch?v=7Hj8j4sEyJg</div>
</div>
<div id='cataloguecontain'>
    <div id='tagtext'>Tags</div>
    <div id='catalogue'></div>
</div>
<div class="randombtn" onclick="Random()">Again</div>
<div class="Homebtn" onclick="Home()">Back</div>
</div>`
var img;
var Name;
var Info;
var step;
var youtubelink;
var catalist="";

var home=`<div class="containerfull">
<!--SlideImg-->
<div class='Slide'>
    <!--button-->
    <a id="backbtn" onclick="nextslide(-1)">&#10094;</a>
    <a id='nextbtn'onclick="nextslide(1)">&#10095;</a>
    <div id="slidecontain">
        <div class='slideshow' id='loading1'>
            <a class="text">Gia vị tuyệt vời</a>
        </div>
        <div class='slideshow' id='loading2'>
            <a class="text">Đủ Dinh Dưỡng</a>
        </div>
        <div class='slideshow' id='loading3'>
            <a class="text">Giá rẻ và sạch</a>
        </div>
    <div class="glider">
        <div class="Dot" id='Dot1' onclick="Dot(1)"></div>
        <div class="Dot" id='Dot2' onclick="Dot(2)"></div>
        <div class="Dot" id='Dot3' onclick="Dot(3)"></div>
    </div>
    </div>
</div>
</div>
<!--Random-->
<hr>
<div class="containerfull">
<!--Contentrandom-->
<div class="Randomcontent">
            <div id='randomtext'>Hôm nay bạn chưa biết nấu món gì<br>Hãy để chúng tôi chọn cho bạn</div>
            <a class='randombtn' onclick="Random()">Click here</a>
        </div>
<br>
<br>
    <br>
    <br>
    <hr>
<!--Mon An Viet MOi-->
<div class="containerfull">
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
</div>
<!--Mon AN Y MOI-->
<div class="containerfull">
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
</div>
<!--Mon An phap moi-->
<div class="containerfull">
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
</div>
</div>`

async function Random(){
    catalist="";
    const api=await fetch('https://5e11cc4a84b3db00149765e0.mockapi.io/Food');
    const data=await api.json();
    var k=Math.floor(Math.random() * data.length);   
    var detail=data[k];
    items=detail.Catalogue;

    var inside=document.getElementById('mainpagebody');
    inside.innerHTML = detailfood;

    document.getElementById('detailimg').style.backgroundImage=detail.thumbnail;
    document.getElementById('detailname').innerText = detail.Name;  
    document.getElementById('detailinfo').innerText = detail.Intro;
    document.getElementById('steps').innerHTML= detail.Steps;
    document.getElementById("youtubelink").innerText=detail.Youtubelink;
    
    
    for(let u=0;u<items.length;u++){
        var item=items[u];
             catalist= catalist + `<a class="catalogueitem" onclick="" >${item}</a>`;
             console.log(catalist);
             document.getElementById('catalogue').innerHTML=catalist;
        }

}

function OpenYoutubeLink(){
    var utube = document.getElementById('youtubelink');
    window.location.replace(utube.innerHTML);
}

function Home(){
    document.getElementById('mainpagebody').innerHTML=home;
}

