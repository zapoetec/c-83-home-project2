var mouseEvent="empty";
var last_x_position,last_y_position;
var color="empty";
var linewidth="empty";
var canvas= document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var width=screen.width;
var new_width=screen.width-70;
var new_height=screen.height-300;
if (width < 992)
{
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e)
{
    console.log("touchstart");
    last_x_position=e.touches[0].clientX-canvas.offsetLeft;
    last_y_position=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
    console.log("touchmove");
    var currentpositionofx= e.touches[0].clientX-canvas.offsetLeft;
    var currentpositionofy= e.touches[0].clientY-canvas.offsetTop;
        ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=linewidth;
    console.log("last position of x and y");
console.log("x = "+last_x_position+"y = "+last_y_position);
    ctx.moveTo(last_x_position,last_y_position);
    console.log("current position of x and y");
    console.log("x = "+currentpositionofx+"y = "+currentpositionofy);
    ctx.lineTo(currentpositionofx,currentpositionofy);
    ctx.stroke();
last_x_position=currentpositionofx;
last_y_position=currentpositionofy;

}
linewidth=document.getElementById("input2").value;
color=document.getElementById("input1").value;
var input1= Text(input1);
var input2= Text(input2);
if (input1 == Text(input1)){
    color=input1;
}
if (input2 == Text(input2)){
    linewidth=input2;
}