canvas=document.getElementById("Canvas");
ctx=canvas.getContext("2d");

    ctx.beginPath();
    ctx.strokeStyle="red";
    lineWidth = 1;
    ctx.rect(150,143,430,200);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="blue";
    ctx.lineWidth = 4;
    ctx.arc(250,200,40,0,2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.lineWidth = 4;
    ctx.arc(350,200,40,0,2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="red";
    ctx.lineWidth = 4;
    ctx.arc(450,200,40,0,2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="yellow";
    ctx.lineWidth = 4;
    ctx.arc(300,245,40,0,2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="green";
    ctx.lineWidth = 4;
    ctx.arc(400,245,40,0,2*Math.PI);
    ctx.stroke();