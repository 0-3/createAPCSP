var canvas = document.getElementById('mycanvas');
if (canvas.getContext) {
    turtle = new Turtle(canvas.getContext('2d'));
}