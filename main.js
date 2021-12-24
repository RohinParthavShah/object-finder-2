video = "";
img= "";


function setup(){
    canvas = createCanvas(380,180);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,180);
    video.hide();
}

function draw (){
    image(video,0,0,380,180);
}

function start(){
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}


function modelLoaded(){
    console.log("Modal Loaded !");
    status = true ;
}