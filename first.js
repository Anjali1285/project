console.log("welcome to spotify");
let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterpaly=document.getElementById('masterpaly');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songs=[
    {songName : "salam-e-Ishq",filePath:"1.mp3",coverPath:"1.jpg"},
    {songName : "salam-e-Ishq",filePath:"2.mp3",coverPath:"1.jpg"},
    {songName : "salam-e-Ishq",filePath:"3.mp3",coverPath:"1.jpg"},
    {songName : "salam-e-Ishq",filePath:"4.mp3",coverPath:"1.jpg"},
    {songName : "salam-e-Ishq",filePath:"5.mp3",coverPath:"1.jpg"},
    {songName : "salam-e-Ishq",filePath:"6.mp3",coverPath:"1.jpg"},
    {songName : "salam-e-Ishq",filePath:"7.mp3",coverPath:"1.jpg"},
    {songName : "salam-e-Ishq",filePath:"8.mp3",coverPath:"1.jpg"},
    {songName : "salam-e-Ishq",filePath:"9.mp3",coverPath:"1.jpg"},
    {songName : "salam-e-Ishq",filePath:"10.mp3",coverPath:"1.jpg"},

]
masterpaly.addEventListener('click',()=>{
    if(audioElement.paused ||audioElement.currentTime<=0 ){
        audioElement.play();
        masterpaly.classList.remove('fa-circle-play');
        masterpaly.classList.add('fa-circle-pause')
        gif.style.opacity=1;
    }
    else{
            audioElement.pause();
            masterpaly.classList.remove('fa-circle-pause');
            masterpaly.classList.add('fa-circle-play');
            gif.style.opacity=0;
        }
   
})
myProgressBa.addEventListener('timeupdate',()=>{
    
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myProgressBar.Value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})
