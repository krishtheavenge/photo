//api for converting speach to text//
var SpeechRecognition= window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}


recognition.onresult  =  function(event){
        console.log(event);
        var content = event.results[0][0].transcript;
        console.log(content);
        if(content=="take my selfie"){
            console.log("taking selfie");
            speak();
            
        }
        document.getElementById("textbox").innerHTML=content;

}
function speak(){
    //api for converting text to speach//
    //speach synthesis utterance is used to convert text to speach//
     var synth=window.speechSynthesis;
    speak_data="taking selfie in 5 sec.";
    var utterthis= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        save();
    },5000);
}
camera = document.getElementById("my_camera");
Webcam.set({
    width:350,
    height:250,
    image_format:'jpg',
    jpg_quality:100
});


        function take_snapshot(){
            Webcam.snap(function(data_uri){
                document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"' />";
            });
        }


        function save(){
            var link = document.getElementById("link");
            image = document.getElementById("captured_image").src;
            link.href=image;
            link.click();
        }