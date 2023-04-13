// import { cueTimer } from "./modules/cuepoints.js";

document.addEventListener("DOMContentLoaded", init)
var myCues;
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
var myTimer = false;
function init() {

    /* myCues = [
        { seconds: 2, callback: func1 },
        { seconds: 7, callback: func2 }
    ];

    cueTimer.setup("vid", myCues);

    const vid = document.querySelector("#vid");*/
}

function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
        height: "390",
        width: "640",
        videoId: "YIjWwZwlHQg",
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

function onPlayerStateChange(event) {
    switch(event.data) {
        case YT.PlayerState.PLAYING:
            console.log('starting timer');
            myTimer = setInterval(getTime, 1000, event);
            break;
        case !YT.PlayerState.PLAYING:
            if (!myTimer) {
                console.log('no timer');
            }
            break;
        default:
            clearInterval(myTimer);
            console.log('stopping timer');
    }
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

function func1 ()
{

}

function func2 ()
{

}