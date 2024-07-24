import "./style.css";
import { setupVideo, takePhoto } from "./src/camera";

(async function run() {
  const video = await setupVideo();
  const canvas = document.querySelector("canvas");
  const button = document.getElementById("camera");

  button.addEventListener("click", () => {
    takePhoto(video, canvas);
  });
})();
