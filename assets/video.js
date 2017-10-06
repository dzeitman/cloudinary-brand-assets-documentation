var video = document.getElementsByTagName('video')[0],
var lastTime = -1;
function draw() {
    var time = video.currentTime;
    if (time !== lastTime) {
        console.log('time: ' + time);
        //todo: do your rendering here
        lastTime = time;
    }

    //wait approximately 16ms and run again
    requestAnimationFrame(draw);
}

draw();