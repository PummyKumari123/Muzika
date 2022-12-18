
console.log("Welcome to Muzika");
let songIndex = 0;
let audioElement=new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songitems=Array.from(document.getElementsByClassName('songitem'));

let songs = [
    {songName: "salam-e-ishq", filePath: "songs/1.mp3",  coverPath:"covers/1.jpg"},
    {songName: "Roohaniyat", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Tera Ban Jauga", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Filhall", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Thodi Jagah", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Dil Ke Pass", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Le Ja Re", filePath: "songs/7.mp3",  coverPath:"covers/7.jpg"},
    {songName: "Lo Safar", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Sanam Re", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Mere Bina", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]
songitems.forEach((element,i)=>{
console.log(element,i);
element.getElementsByTagName("img")[0].src=songs[i].coverPath;
element.getElementsByClassName("songname")[0].innerText=songs[i].songName;

})
//audioElement.play();
//handle play/pause click
masterplay.addEventListener('click',()=>{
if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
}
else{
    audioElement.pause();
    masterplay.classList.remove('fa-pause-circle');
    masterplay.classList.add('fa-play-circle');
    gif.style.opacity=0;
}

})


//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
     // console.Log('timeupdate');
      progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
      //console.log(progress);
      myprogressbar.value = progress;
})
myprogressbar.addEventListener('change',()=>{
audioElement.currentTime=myprogressbar.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{
    
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle'); 
        element.classList.add('fa-play-circle');  
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        mastersongname.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    mastersongname.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    mastersongname.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

})
