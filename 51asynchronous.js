//synchronous code=in a ordered sequence 
//              step by step linear-instructions 
//          (strt now,finish now)


console.log('hi');
console.log('this will wait');
console.log('end');


//asynchronous code = out of sequence 
//          ex.access a database fetch a file
 //           tasks that take time 
 //     (strt now,finish later)
 console.log('strt')
 setTimeout(()=>console.log('this is asynchronous'),5000);
 console.log('end');