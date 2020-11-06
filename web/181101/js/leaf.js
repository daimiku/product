/* a Pen by Diaco m.lotfollahi  : https://diacodesign.com */
var falling = true;

TweenLite.set("#confetti",{perspective:600})
TweenLite.set("#confetti img",{xPercent:"-50%",yPercent:"-50%"})

var total = 15;
var container = document.getElementById("confetti"),	w = window.innerWidth , h = window.innerHeight;

var all = 6;
 
 for (i=0; i<total; i++){
     for(j=1; j<=all; j++){
         var divnum = 'Div'.concat(j);
         var dotnum = 'dot'.concat(j);
         var divnum = document.createElement(dotnum);
         TweenLite.set(divnum,{attr:{class:dotnum},x:R(0,w),y:R(-200,-550),z:R(-200,200)});
         container.appendChild(divnum);
         animm(divnum);
     }
     
 }
 
 function animm(elm){   
   TweenMax.to(elm,R(6,15),{y:h+100,ease:Linear.easeNone,repeat:-1,delay:-15});
   TweenMax.to(elm,R(4,8),{x:'+=-500',rotationZ:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
   TweenMax.to(elm,R(2,8),{rotationX:R(0,360),rotationY:R(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
 };

function R(min,max) {return min+Math.random()*(max-min)};






/* a Pen by Diaco m.lotfollahi  : https://diacodesign.com */