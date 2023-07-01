import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(onTimeupdate, 1000));
function onTimeupdate(e) {
    localStorage.setItem('videoplayer-current-time', e.seconds);
    console.log(e.seconds);
}

const currentTime = localStorage.getItem('videoplayer-current-time');

if (currentTime) {
    player.setCurrentTime(currentTime);
}
