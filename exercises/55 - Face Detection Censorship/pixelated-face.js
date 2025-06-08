const video = document.querySelector('.webcam');

const canvas = document.querySelector('.video');
const ctx = canvas.getContext('2d');

const facecanvas = document.querySelector('.face');
const faceCtx = facecanvas.getContext('2d');

const faceDetector = new FaceDetector();

async function populateVideo() {
    const stream = await navigator.mediaDevices.getUserMedia({
        video: {width: 1280, height: 720},
    });

    video.srcObject = stream;
    await video.play();

    console.log(video.videoWidth, video.videoHeight);

    canvas.width =  video.videoWidth;
    canvas.height =  video.videoHeight;
    facecanvas.width =  facecanvas.videoWidth;
    facecanvas.height =  facecanvas.videoHeight;
}

async function detect() {
    const faces = await faceDetector.detect(video);
    console.log(faces);
    //requestAnimationFrame(detect);
}

populateVideo().then(detect);