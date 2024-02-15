let ele=document.body;
let child =ele.firstElementChild;
child.style.backgroundColor='pink';
// if we try to change the last child of body then you will not observe any change bcz the last child will be script tag

let ele1=document.querySelector("#veg");
let par=ele1.parentElement;
par.style.backgroundColor='green'; //entire body 

let ele2=document.querySelector("#veg");
let nsib=ele2.nextElementSibling;
nsib.style.backgroundColor='blue'; 

let ele3=document.querySelector("#veg");
let psib=ele2.previousElementSibling;
psib.style.backgroundColor='yellow'; //this will overwrite pink which is prvs col

let ele4=document.querySelector('#fruits');
let ch=ele4.children[0];
ch.style.backgroundColor='orange';

let ele5=document.querySelector('#veg');
let chldrn=Array.from(ele5.children);
chldrn.forEach(chl=>chl.style.backgroundColor='black')


//.firstElementChild
//lastElementChild
//parentElement
//.nextElementSibling
//.previousElementSibling
//.children[]
//Array.from(.children)
