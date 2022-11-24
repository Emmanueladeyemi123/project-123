var leftWristX=0;
var rightWristX=0;
var difference=0;

function setup() {
    canvas = createCanvas(500, 500);
    canvas.position(560, 150);
    video = createCapture(VIDEO);
    video.size(500, 500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function draw() {
    background("grey");
    textSize(difference);
    fill("red");
    text("Emmanuel",100,200);
    document.getElementById("font_sz").innerHTML="Font size of the text will be"+difference+"px";
}
function modelLoaded() {
    console.log("posenet has started");
}
function gotPoses(results) {
if (results.length>0){
    console.log(results);
leftWristX=results[0].pose.leftWrist.x;
rightWristX=results[0].pose.rightWrist.x;
difference=floor(leftWristX-rightWristX);
console.log("Left wrist x="+leftWristX+"Right wrist x="+rightWristX+"difference="+difference);

}
}