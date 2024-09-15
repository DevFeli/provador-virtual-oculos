const video = document.getElementById('video');
const canvas = document.getElementById('overlay');
const ctx = canvas.getContext('2d');

// Load face-api models
Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('/models'), // Load detector model
]).then(startVideo);


function startVideo() {
    navigator.mediaDevices.getUserMedia({ video: {} })
        .then(stream => video.srcObject = stream)
        .catch(err => console.error(err));
}

video.addEventListener('play', () => {
    const displaySize = { width: video.width, height: video.height };
    faceapi.matchDimensions(canvas, displaySize);
    
    setInterval(async () => {
      const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions());
      const resizedDetections = faceapi.resizeResults(detections, displaySize);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      faceapi.draw.drawDetections(canvas, resizedDetections);

      // Check if face is centered in a specific area
      if (detections.length > 0) {
        const faceBox = detections[0].box;
        const centerX = video.width / 2;
        const centerY = video.height / 2;
        const tolerance = 50; // Adjust this value for sensitivity

        // Check if face is within the tolerance area
        if (
          Math.abs(faceBox.x + faceBox.width / 2 - centerX) < tolerance &&
          Math.abs(faceBox.y + faceBox.height / 2 - centerY) < tolerance
        ) {
          capturePhoto();
        }
      }
    }, 100);
});

function capturePhoto() {
    const photoCanvas = document.createElement('canvas');
    photoCanvas.width = video.width;
    photoCanvas.height = video.height;
    photoCanvas.getContext('2d').drawImage(video, 0, 0, photoCanvas.width, photoCanvas.height);
    const photoData = photoCanvas.toDataURL('image/png');
    
    // Log photo data or send it to a server
    console.log('Photo Captured', photoData);
    // Optionally display it or download
    downloadPhoto(photoData);
}

function downloadPhoto(dataUrl) {
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = 'photo.png';
    a.click();
}