//console.time()= starts a timer u can use to track howlong an operation
//      takes give each timer a unique name

//start 
console.time("response time");

alert('clck ok btn');

//end 
console.timeEnd('response time');


//console.time() will measure how much time does a 
//  synchronous code will take to execute ;

console.time('response time');

setTimeout(()=>console.log('hii'),5000);
console.timeEnd('response time') //we get time bfe hii is printed
