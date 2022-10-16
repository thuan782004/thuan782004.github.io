var g = 1.5;var k = 0.1;var h = 0;var w = 0
var lc = new Date().getTime()
var vx = 0;var vy = 0;cx = 0;cy = 0;
var dragging = false
$(document).ready(()=>{
    h = window.innerHeight-40
    w = window.innerWidth-40
    setInterval(tick, 20); 
    $(".ball").on("mousedown touchstart",start)
    function start(e) {
        $(this).on("mousemove",drag).on("mouseup",stop)
        dragging = true; drag(e) 
        vx = 0; vy = 0;
        cx = e.clientX-20;
        cy = e.clientY-20;
        function drag(e){
            $(".ball").css("top",e.clientY-20+"px")
            $(".ball").css("left",e.clientX-20+"px")
        }
        function stop(){
            $(this).off("mousemove").off("mouseup")
            dragging = false
        }
    }
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
    if (dragging) {
        cnx = $(".ball").css("left").slice(0,-2)-0;
        cny = $(".ball").css("top").slice(0,-2)-0;
        vx = cnx - cx; cx = cnx;
        vy = cny - cy; cy = cny;
        return
    }
    vy+=g
    var ny = $(".ball").css("top").slice(0,-2)-0+vy
    if (ny>=h||ny<=0){ny=ny<=0?0:h;vy=-vy/Math.abs(vy)*(Math.abs(vy)*0.9) }
    $(".ball").css("top",ny+"px")
    
    if (ny>=h) vx = vx/Math.abs(vx)*Math.max(0,Math.abs(vx)-k)
    var nx = $(".ball").css("left").slice(0,-2)-0+vx
    if (nx>=w||nx<=0){nx=nx<=0?0:w;vx=-vx/Math.abs(vx)*(Math.abs(vx)*0.95) }
    $(".ball").css("left",nx+"px")
}