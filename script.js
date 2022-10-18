const videoElement = document.getElementById('video');
const button = getElementById('button');

//  Promt the user to select a media stream, pass to video element, then play
async function selectMediaStream() {
     try {
          const mediaStream = await navigator.mediaDevices.getDisplayMedia();
          videoElement.srcObject = mediaStream;
          videoElement.onloadedmetadata = () => {
              videoElement.play();
          };
     } catch(error) {
        // Catch Error Here
     }

}

// On Load
selectMediaStream();