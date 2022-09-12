import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const VIDEO_PLAYER = 'videoplayer-current-time';

player.on('timeupdate', throttle(time, 1000));

// player.setCurrentTime(localStorage.getItem(VIDEO_PLAYER));

let savedPlayer = localStorage.getItem(VIDEO_PLAYER);

if (savedPlayer) {
  player.setCurrentTime(savedPlayer);
}

function time(data) {
  localStorage.setItem(VIDEO_PLAYER, data.seconds);
  console.log(data);
}
