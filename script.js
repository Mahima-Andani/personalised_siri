const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const d = new Date();
document.getElementById("demo").innerHTML = d.getFullYear();



const YouTube = [
    'opening youtube'
];
const music = [
    'playing music', 'cool, lets listen to music'
];
const weather = [
    'Here is todays weather forecast '
]
const presentation = [
    'Showing you the presentation.... '
]
const email = [
    'Send the emails.. '
]
const jokes = [
    'Here are some hilarious jokes, Knock, knock.\"\n\"Whos there?\"\n\n[very long pause]\n\n\"Java.\, Judge: \"I sentence you to the maximum punishment...\"\nMe (thinking): \"Please be death, please be death...\"\nJudge: \"Learn Java!\"\nMe: \"Damn.\ '
]
const camera = [
    'Opening camera..'
]
const year = [
    'todays date is,' + d
    
]

let camera_button = document.querySelector("#start-camera");
let video = document.querySelector("#video");
let click_button = document.querySelector("#click-photo");
let canvas = document.querySelector("#canvas");



click_button.addEventListener('click', function() {
   	canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
   	let image_data_url = canvas.toDataURL('image/jpeg');

   	// data url of the image
   	console.log(image_data_url);
});


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

btn.addEventListener('click', function () {
        recognition.start();
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
    if(message.includes('weather')){
        const finalText = 
        weather[Math.floor(Math.random()*weather.length)];
        speech.text = finalText; 
        window.open('https://www.google.com/search?q=weather&rlz=1C1NDCM_enIN900IN900&oq=weather+&aqs=chrome..69i57.4639j0j15&sourceid=chrome&ie=UTF-8&dlnr=1&sei=M3WaYfiRHp7G4-EPicm68Ag');
    }
    if(message.includes('presentation')){
        const finalText = 
        presentation[Math.floor(Math.random()*presentation.length)];
        speech.text = finalText; 
        window.open('https://docs.google.com/presentation/u/0/?tgif=d');
    }
    if(message.includes('email')){
        const finalText = 
        email[Math.floor(Math.random()*email.length)];
        speech.text = finalText; 
        window.open('mailto:mahimaandanijj11@gmail.com');
    }
    if(message.includes('jokes')){
        const finalText = 
        jokes[Math.floor(Math.random()*jokes.length)];
        speech.text = finalText; 
        // window.open('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single&amount=10').;
    }
    
    if(message.includes('year')){
        const finalText = 
        year[Math.floor(Math.random()*year.length)];
        speech.text = finalText;   
    }
    


    


    speech.volume = 1;
    speech.rate = 1.1;
    speech.pitch = 8;

    window.speechSynthesis.speak(speech);
}