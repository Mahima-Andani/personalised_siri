const btn = document.querySelector('.talk');
const content = document.querySelector('.content');


const YouTube = [
    'opening youtube'
];
const music = [
    'playing music', 'cool, lets listen to music'
];
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition =  new SpeechRecognition();

recognition.onstart = function(){
    console.log('How Can I Help You ?')
}
recognition.onresult = function (event) {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);

};

btn.addEventListener('click', () =>{
    recognition.start();
});


function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();

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

    speech.volume = 1;
    speech.rate = 1.1;
    speech.pitch = 2;

    window.speechSynthesis.speak(speech);
}