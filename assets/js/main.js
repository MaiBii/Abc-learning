console.log("JS đang chạy");
const btnVideo = document.querySelector(".watch-video");
const popup = document.querySelector(".video-popup");
const overlay = document.querySelector(".video-overlay");

btnVideo.addEventListener("click", () => {
  popup.classList.remove("hidden");
});

overlay.addEventListener("click", () => {
  popup.classList.add("hidden");
});