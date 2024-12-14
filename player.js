const video = document.getElementById('Mbappe');
const timestamp = document.getElementById('timestamp');

video.addEventListener('timeupdate', () => {
  const currentTime = video.currentTime; 
  const duration = video.duration;      

  const formattedCurrentTime = formatTime(currentTime);
  const formattedDuration = duration ? formatTime(duration) : "00:00:00";

  timestamp.textContent = `${formattedCurrentTime} / ${formattedDuration}`;
});

function formatTime(time) {
  const hours = Math.floor(time / 3600);                 
  const minutes = Math.floor((time % 3600) / 60);      
  const seconds = Math.floor(time % 60);                

  return `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

video.addEventListener('loadedmetadata', () => {
  const duration = video.duration;
  const formattedDuration = duration ? formatTime(duration) : "00:00:00";
  timestamp.textContent = `00:00:00 / ${formattedDuration}`;
});

forwardButton.addEventListener('click', () => {
  video.currentTime += 10;  
});
