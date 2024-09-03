
 var myElement = document.getElementById('demo');
var myElement = document.getElementsByTagName('h2');
var myElement = document.getElementsByClassName('item');
var myElement = document.querySelectorAll('.item h2');
var myElement = document.querySelector(' h2');

console.log(myElement);


var element = document.querySelector('img');

document.addEventListener('mousemove' , function(eventInfo){
    element.style.left=eventInfo.clientX+'px';
    element.style.top=eventInfo.clientY+'px';

})


//light boxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

var imgList = Array.from(document.querySelectorAll('.item img'));
var lightboxcontainer=document.querySelector('#lightboxcontainer');
var currrentIndex;

for(var i=0 ; i<imgList.length ;i++){
    imgList[i].addEventListener('click' , function(eventInfo) {
        lightboxcontainer.classList.replace('d-none','d-flex');
        var imgSrc=  eventInfo.target.getAttribute('src');
        lightboxcontainer.firstElementChild.style.backgroundImage=`url(${imgSrc})`;
        currrentIndex=imgList.indexOf(eventInfo.target);

    })

}

// lightboxcontainer.addEventListener('dblclick',function(eventInfo){
//     lightboxcontainer.classList.replace('d-flex','d-none');

// });

var closeBtn =document.querySelector('#closeBtn');
closeBtn.addEventListener('click' , function(eventInfo){
    lightboxcontainer.classList.replace('d-flex','d-none');

} );
lightboxcontainer.addEventListener('click' , function(eventInfo){
    lightboxcontainer.classList.replace('d-flex','d-none');

} );
lightboxcontainer.firstElementChild.addEventListener('click' , function(eventInfo){
    eventInfo.stopPropagation();

} );

closeBtn.nextElementSibling.addEventListener('click',function(eventInfo){
    slide(1);
    eventInfo.stopPropagation();


})
closeBtn.previousElementSibling.addEventListener('click',function(eventInfo){
    slide(-1);
    eventInfo.stopPropagation();


})

function slide(step){
    currrentIndex+=step;
    if(currrentIndex==imgList.length){
    currrentIndex=0;
}

    if(currrentIndex <0){
                currrentIndex=imgList.length-1;
            }

            var imgSrc= imgList[currrentIndex].getAttribute('src');
            lightboxcontainer.firstElementChild.style.backgroundImage=`url(${imgSrc})`;

}


// function nextImage(){
//     currrentIndex++;
//     if(currrentIndex==imgList.length){
//         currrentIndex=0;}
//         var imgSrc= imgList[currrentIndex].getAttribute('src');
//         lightboxcontainer.firstElementChild.style.backgroundImage=`url(${imgSrc})`;
// }

// function incremntImage(){
//     currrentIndex--;
//     if(currrentIndex==-1){
//         currrentIndex=imgList.length-1;
//     }
//     var imgSrc= imgList[currrentIndex].getAttribute('src');
//         lightboxcontainer.firstElementChild.style.backgroundImage=`url(${imgSrc})`;
//}

