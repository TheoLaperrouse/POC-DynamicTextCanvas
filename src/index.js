var canvas = document.getElementById('plan');
if (canvas.getContext) {
  var ctx = canvas.getContext('2d');
}

function copyImageToCanvas(){
    var image = document.querySelector("img");
    ctx.drawImage(image, 0, 0, 500, 500);
}

function drawDynamicText(context) {
    setTimeout(() => {
        copyImageToCanvas();
        ctx.fillStyle = 'red';
        ctx.fillText(Math.random() * 100, 10, 50)
        drawDynamicText(context);
    },1000)
}

function drawRectangle(context) {
    setTimeout(() => {
        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(Math.random()*500, Math.random()*500, 50, 50);
        drawRectangle(context);
    },10)
}

setTimeout(() => {copyImageToCanvas()},300)
drawDynamicText();
