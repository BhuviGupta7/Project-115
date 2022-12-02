function preload() {
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("lipstick x = " + results[0].pose.lipstick.x);
        console.log("lipstick y = " + results[0].pose.lipstick.y);
    }
}
function draw() {

}

function take_snapshot() {
    save('myFilterImage.png');
}
