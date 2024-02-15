let canvas=document.getElementById('mycanvas');
let context=canvas.getContext('2d');
context.beginPath();
context.moveTo(0,0);
context.lineTo(10,203);
context.lineTo(20,206);
context.lineTo(100,200);
context.lineTo(100,210);
context.lineTo(100,195);

context.lineWidth=10;
context.strokeStyle='green';
context.stroke();