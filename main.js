Webcam.attach('#camera');
camera = document.getElementById("camera")
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'jpeg',
    jpeg_quality: 100
});
function capture(){
    Webcam.snap(function(aa){
        document.getElementById("result").innerHTML='<img id="aaa" src="'+aa+'"/>';
    });
}
console.log("ml5 loaded",ml5.version);
r = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/WosYx49Zk/model.json',modelloaded);
function modelloaded(){
    console.log("Model Loaded.")
}
function identify(){ 
    abc = document.getElementById("aaa")
    r.classify(abc,gotresult)
}
function gotresult(error,result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
       document.getElementById("Object").innerHTML= result[0].label;
       document.getElementById("Accuracy").innerHTML=result[0].confidence.toFixed(3);
    }
}