https://www.youtube.com/watch?v=fjJHtyHYsyI
https://www.youtube.com/watch?v=EO8mZZxNuBI
https://www.youtube.com/watch?v=ColaCPC08ZY
https://www.youtube.com/watch?v=BI7gg4jwRZM
https://www.youtube.com/watch?v=WeVQwPBsZJY
https://www.youtube.com/watch?v=g4F2DLtPVv4
https://www.youtube.com/watch?v=Jx11NYXasf8
https://www.youtube.com/watch?v=mIbar0WTESE

https://www.youtube.com/watch?v=O0juf0DZuWs
https://www.youtube.com/watch?v=tsw1RtKEMng

https://www.youtube.com/watch?time_continue=767&v=ZgH68Wg8M68&feature=emb_logo
https://www.youtube.com/watch?v=vGs0QDzRA4A&feature=emb_rel_pause

https://www.youtube.com/watch?v=UNQIal4B3j0&t=5s
https://www.youtube.com/watch?v=eiih7ydIrj4&t=3s

document.getElementById('r1').oninput = cssGen;
function cssGen(){
	var div  = document.getElementById('slide');
	var p = document.getElementById('out');
	div.style.borderRadius = this.value+'px';
	p.innerHTML = this.value;
}

let slides = document.querySelectorAll('.slide-single');

var slider =[];

for (let i=0; i<slides.length;i++){
	slider[i] = (slides[i].src)
	slides[i].remove();}



let step = 0;
let offset = 0;

function draw(){
	let img = document.createElement('img');
	img.src = slider[step];
	img.classList.add('slide-single');
	img.style.left = offset*512 + 'px';

	document.querySelector('#slide').appendChild(img);
	if (step + 1 == slider.length){
		step = 0;
	}
	else {
		step ++;
	}
	offset=1;	
}

function left(){
	document.onclick = null;
	let slides2 = document.querySelectorAll('.slide-single');
	let offset2 = 0;
	for (var i = 0; i < slides2.length; i++) {
		slides2[i].style.left = offset2*512 - 512 + 'px';

		offset2++;
		}

	setTimeout (function(){
	slides2[0].remove();
	draw();
	document.onclick = left;		
	}, 200);

}
 draw(); draw();
document.onclick = left;




var p = document.getElementsByTagName('p');
var one = document.getElementsByClassName('one')


for (let i=0; i<p.length; i++)
	p[i].onclick = f1;

for (let i=0; i<one.length; i++)
	one[i].onclick = f2;

function f1(){
	 console.log(parseInt(this.style.fontSize))
	if (parseInt(this.style.fontSize)===30){
	this.style.fontSize = '10px';	
	}
 	this.style.fontSize = '30px';
 	 }

function f2(){
	this.style.background = 'red';}

 // function f3(){
 // 	console.log(this.style)}
// 	var i = 0;
// 	while (i<50){
// 		i++;
// 		p.innerHTML+=i+' ';

// 	var j =100;
// 	do{
// 		p.innerHTML+=j+' ';		
// 		j=j-2;
// 	}
// 	while(j>0);
// 	}
// }


// document.addEventListener("DOMContentLoaded", function () {
//     var X = Y = 0;

//     function move() {
//         document.getElementById('slide').style.left = X + 'px';
//         document.getElementById('slide').style.top = Y + 'px';
//     }
//     document.addEventListener("click", function (e) {
//         X = e.clientX-150;
//         Y = e.clientY-350;
//     }, false);

//     setInterval(move, 100);
// });

// // var c1 = document.querySelectorAll("circle")[0],
// // c2 = document.querySelectorAll("circle")[1],
// // c3 = document.querySelectorAll("circle")[2],
//  path = document.querySelectorAll("path")[0],
//  drag, d = {x1:10,y1:80,x2:95,y2:10,x3:180,y3:80};


// // window.addEventListener("mousedown",mdHandler);

//  function mdHandler(e){
//    if(e.srcElement instanceof SVGCircleElement){
//      drag = e.srcElement;
//      drag.x = e.srcElement.getAttribute("cx");
//      drag.y = e.srcElement.getAttribute("cy");
//      drag.setAttribute("cx",e.clientX - (drag.clientX - drag.x));
//    drag.setAttribute("cy",e.clientY - (drag.clientY - drag.y));
//    drag.clientX = e.clientX;
//      drag.clientY = e.clientY;
     

//  }}

// mdHandler();

// //     window.addEventListener("mousedown",mmHandler);
// //     // window.addEventListener("mouseup",muHandler);
// //   	console.log(d)}
// //     }



// //     switch( drag ){
// //     case c1:
// //       d.x1 = drag.getAttribute("cx");
// //       d.y1 = drag.getAttribute("cy"); break;    
// //     case c2:
// //       d.x2 = drag.getAttribute("cx");
// //       d.y2 = drag.getAttribute("cy"); break;
// //     case c3:
// //       d.x3 = drag.getAttribute("cx");
// //       d.y3 = drag.getAttribute("cy"); break;      
// //   }
  
// //   // for (i=0;i<200;i++){
// //   path.setAttribute("d",`M${d.x1} ${d.y1} Q ${d.x2} ${d.y2} ${d.x3} ${d.y3}`);
// //   document.getElementById("path").innerHTML = path.getAttribute("d");
  
// // }
// // function muHandler(e){
// //   window.removeEventListener("mousemove",mmHandler);
// //   window.removeEventListener("mouseup",muHandler);
// // }

// // // var div4 = document.getElementById('four4')
// // // var p = div4.getElementsByTagName('p')
// // // var div = document.getElementsByTagName('div')
// // // var c = document.getElementsByClassName('test')
// // // div[2].style.background = 'yellow'
// // // console.log(div,p)

// // // // // d = [];

// // // // // d.push(document.querySelector('div').querySelector('p')); //css-sel - 1 el

// // // // // d.push(document.querySelector('div p'));
// // // // // d.push(document.querySelector('#four4 p'));
// // // // // d.push(document.querySelector('div'));
// // // // // d.push(document.querySelectorAll('div'));
// // // // // d.push(document.querySelectorAll('div p'));

// // // // // console.log(d);

// // // // // four4.style.background = 'red';


// // // // // // // // function t9() {
// // // // // // // // 	let out = '';
// // // // // // // // 	let a = + document.querySelector('.i-91').value;
// // // // // // // // 	let b = + docum	ent.querySelector('.i-92').value;

// // // // // // // // 	if (a > b)
// // // // // // // // 		[a, b] = [b, a];
// // // // // // // // 	for (var i = a; i <= b; i++)
// // // // // // // // 		out += i = ' ';
// // // // // // // // 	document.querySelector('.out').innerHTML = out;
// // // // // // // // }
// // // // // // // // document.querySelector('.button').onclick = t9;

// // // // // // let x = Array
// // // // // // 	.apply(null, {length: 100})
// // // // // // 	.map(Number.call, Number)
// // // // // // 	.filter(i => 
// // // // // // 		{if (i %3 === 0) 
// // // // // // 			return true});
// // // // // // console.log(x)

// // // // // // for (let i=0; i<100; i++)
// // // // // // 	if (i%3 === 0)
// // // // // // 		x.push(i)
// // // // // // x.forEach(i => console.log(i));




// // // // // // let i = 0;
// // // // // // do {
// // // // // //   if (i%3===0)
// // // // // //   	console.log(i);
// // // // // //   i++;
// // // // // // } while (i < 100);

// // // // // // function myAlert(a,c,d){
// // // // // // 	let b = '<p class ="${c}">${a}<\p>';
// // // // // // 	document.querySelector(d).innerHTML = b;}

// // // // // // myAlert('Hi', 'red', '.test');
// // // // // // myAlert('Hell', 'orange', '.test2')

// // // // // // // class Alert{
// // // // // // // 	constructor(a,c,d){
// // // // // // // 		this.message = a;
// // // // // // // 		this.cssClass = c;
// // // // // // // 		this.out = d;
// // // // // // // 	}
// // // // // // // // 	showAlert(){
// // // // // // // // 		document.querySelector(this.out)
// // // // // // // // 		.innerHTML = '<p class ="${this.cssClass}">${this.message}<\p>';
// // // // // // // // 	}
// // // // // // // // }

// // // // // // // let m = new Alert('mess', 'orange', '.test');
// // // // // // // console.log(m);
// // // // // // // // m.showAlert();