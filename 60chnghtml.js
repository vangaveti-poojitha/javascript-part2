/*//.innerHTML vulnerable xss attacks
//.textContent

//creating html tag
const nametag=document.createElement('h1');

//assigning text
//nametag.innerHTML=window.prompt("enter ur name:"); //smtyms we get virus alert

nametag.textContent=window.prompt("enter ur name:");

//wr to place this html
document.body.append(nametag);
*/


const mylst=document.querySelector("#fruit");
const lstitm=document.createElement('li');
lstitm.textContent='mango';
mylst.append(lstitm);
mylst.prepend(lstitm);//frst

//to get certain index
//before 2nd index
mylst.insertBefore(lstitm,mylst.getElementsByTagName('li')[2])




