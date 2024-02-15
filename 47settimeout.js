//setTimeout() =invokes a func after a number of millisec
//      asynchronous (doesnt pause ur execution)



let item='crypto';
let price=420.67;
let t1=setTimeout(firstMessage,3000,item,price);

let t2=setTimeout(SecMessage,6000);
console.log('hii');
let t3=setTimeout(ThirdMessage,9000);


function firstMessage(item,price){
    alert(`buy this course ${item} for ${price}!`);
}

function SecMessage(item,price){
    alert(`not as cam`);
}

function ThirdMessage(item,price){
    alert(`do it!`);
}

document.getElementById('button').onclick=function(){
    clearTimeout(t1);
    clearTimeout(t2);
    clearTimeout(t3);
    
    alert('thanks for buying');
}