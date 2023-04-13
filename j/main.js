import { cueTimer } from "./modules/cuepoints.js";

document.addEventListener("DOMContentLoaded", init)
var myCues;
tag.src = "https://www.youtube.com/iframe_api";
var player;
function init() {

    myCues = [
        { seconds: 2, callback: func1 },
        { seconds: 7, callback: func2 }
    ];

    cueTimer.setup("vid", myCues);

    const vid = document.querySelector("#vid");
}

function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
        height: "390",
        width: "640",
        videoId: "7WsNK8-RWaY",
        playerVars: {
            playsinline: 1,
        },
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
        },
    });
}

function onPlayerReady(event) {
    console.log('playerReady');
}

function playVideo(clip)
{
    clip.play();
}

function pauseVideo(clip)
{
    clip.pause();
}

function muteVideo(clip)
{
    clip.muted = true;
}

function unmuteVideo(clip) 
{
    clip.muted = false;
}

function playRate(clip, rate)
{
    clip.playbackRate = rate;
}
