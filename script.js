const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
var element = document.querySelector('.pulse-ring');

const YouTube = [
    'opening youtube'
];
const music = [
    'playing music', 'cool, lets listen to music'
];
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition =  new SpeechRecognition();

recognition.onstart = function(){
    console.log('How Can I Help You?')
}
recognition.onresult = function (event) {

    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};
recognition.onaudioend = function() {
    console.log('Audio capturing ended');
    element.classList.remove("animate");
  }  
btn.addEventListener('click', function () {
        recognition.start();
        element.classList.add("animate");
    });

function readOutLoud(message){
    var speech = new SpeechSynthesisUtterance();

    const synth = window.speechSynthesis;
    const voiceArray = synth.getVoices(); // returns array of voice objects
    console.log(voiceArray);
    speech.voice = voiceArray[4];

    speech.text = 'I am not able to understand';


    if(message.includes('YouTube')){
        const finalText = 
            YouTube[Math.floor(Math.random()*YouTube.length)];
        speech.text = finalText; 
        window.open('https://www.youtube.com/')
        }
    if(message.includes('music')){
        const finalText = 
        music[Math.floor(Math.random()*music.length)];
        speech.text = finalText; 
        musicCovers = ["https://www.youtube.com/watch?v=Pkh8UtuejGw&list=RDMMQJO3ROT-A4E&index=2", "https://www.youtube.com/watch?v=QJO3ROT-A4E&list=RDMMQJO3ROT-A4E&start_radio=1"];
        window.open(musicCovers[Math.floor(Math.random()*musicCovers.length)]);
    }
    if(message.includes('search')){
        speech.text = "searching"; 
        var q = message.replace("search", "");
        window.open('http://google.com/search?q='+q);
    }
    
    speech.volume = 1;
    speech.rate = 1.1;
    speech.pitch = 2;

    window.speechSynthesis.speak(speech);
}