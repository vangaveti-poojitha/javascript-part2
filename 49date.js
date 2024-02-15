// the date obj is used to work with dates and times

let date=new Date();
let date1= new Date(10000000000000); // this many milli secs after start date assumed start date like 1970
let d2=new Date(2023,0,2,3,4,5,56);
let d3=new Date('january 1,2021 00:02:00')
console.log(d3);
let year=date.getFullYear()
let d=date.getDate();
let day=date.getDay();
let mn=date.getMonth();
let hr=date.getHours() ;

d3.setFullYear(2020);
d3.setDate(22);
d3.setHours(11);
d3.setMonth(9);
console.log(d3);


date=date.toLocaleString();
document.getElementById('mylabel').innerHTML=date;

console.log(year);
console.log(d);
console.log(day);
