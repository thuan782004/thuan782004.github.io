var g = 0.7
var k = 0.05
var h = 0
var w = 0
var lc = new Date().getTime()
var vx = 10
var vy = 0
$(document).ready(()=>{
    h = window.innerHeight-40
    w = window.innerWidth-40
    setInterval(tick, 20); 
})
$(window).resize(()=>{
    h = window.innerHeight-40
    var nw = window.innerWidth-40
    var nx = $(".ball").css("left").slice(0,-2)-0
    var c = new Date().getTime()
    if ($(".ball").css("left").slice(0,-2)-0>nw){vx = nx-w}
    lc = c; w = nw
});

function tick(){
    vy+=g
    var ny = $(".ball").css("top").slice(0,-2)-0+vy
    if (ny>=h||ny<=0){ny=ny<=0?0:h;vy=-vy/Math.abs(vy)*(Math.abs(vy)*0.9) }
    $(".ball").css("top",ny+"px")
    
    if (ny>=h) vx = vx/Math.abs(vx)*Math.max(0,Math.abs(vx)-k)
    var nx = $(".ball").css("left").slice(0,-2)-0+vx
    if (nx>=w||nx<=0){nx=nx<=0?0:w;vx=-vx/Math.abs(vx)*(Math.abs(vx)*0.95) }
    $(".ball").css("left",nx+"px")
}