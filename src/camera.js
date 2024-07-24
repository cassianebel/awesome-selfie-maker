export const setupVideo = async () => {
  const video = document.createElement("video");
  const stream = await navigator.mediaDevices.getUserMedia({ video: true });

  try {
    // modern browsers
    video.srcObject = stream;
  } catch {
    // old browsers
    video.src = window.URL.createObjectURL(stream);
  }
  await video.play();
  return video;
};

export function takePhoto(video, canvas) {
  const context = canvas.getContext("2d");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  context.drawImage(video, 0, 0);
}
