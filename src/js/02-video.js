import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

  const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

function handleCurrentVideoTime(data) {
  console.log(data);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

player.on('timeupdate', throttle(handleCurrentVideoTime, 1000));

setSavedTime();

function setSavedTime() {
  const savedCurrentTime = localStorage.getItem(STORAGE_KEY);

  if (savedCurrentTime) {
    try {
      const { seconds } = JSON.parse(savedCurrentTime);
      console.log(seconds);

     
      player.setCurrentTime(seconds).then(function (seconds) {})
      .catch(function (error) {
      switch (error.name) {
       case 'RangeError':
      break;

      default:
      break;
        }
});
    } catch (error) {
      console.log(error);
    }
  }
}
