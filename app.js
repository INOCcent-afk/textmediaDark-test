// !!!!!! JS FOR REVERSE TEXT MEDIA DARK VERSION 3 !!!!!!!!!!!
// !!!!!! JS FOR REVERSE TEXT MEDIA DARK VERSION 3 !!!!!!!!!!!
// !!!!!! JS FOR REVERSE TEXT MEDIA DARK VERSION 3 !!!!!!!!!!!
// !!!!!! JS FOR REVERSE TEXT MEDIA DARK VERSION 3 !!!!!!!!!!!
// !!!!!! JS FOR REVERSE TEXT MEDIA DARK VERSION 3 !!!!!!!!!!!

const reverseTxtMediaDarkV3PlayIcon = document.querySelector(
  ".reverse-text-media-dark-v3-video-play-icon"
);
const reverseTextMediaDarkV3Overlay = document.querySelector(
  ".reverse-text-media-dark-v3-video-overlay"
);
const reverseTextMediaDarkV3Video = document.querySelector(
  ".reverse-text-media-dark-v3-img"
);

reverseTxtMediaDarkV3PlayIcon.addEventListener("click", () => {
  reverseTextMediaDarkV3Overlay.style.opacity = "0";
  reverseTxtMediaDarkV3PlayIcon.style.opacity = "0";
  reverseTxtMediaDarkV3PlayIcon.pointerEvents = "none";
  reverseTextMediaDarkV3Video.src += "?autoplay=1";
  reverseTextMediaDarkV3Video.style.opacity = "1";
  reverseTextMediaDarkV3Video.style.pointerEvents = "all";
});

// !!!!!! JS FOR REVERSE TEXT MEDIA DARK VERSION 4 !!!!!!!!!!!
// !!!!!! JS FOR REVERSE TEXT MEDIA DARK VERSION 4 !!!!!!!!!!!
// !!!!!! JS FOR REVERSE TEXT MEDIA DARK VERSION 4 !!!!!!!!!!!
// !!!!!! JS FOR REVERSE TEXT MEDIA DARK VERSION 4 !!!!!!!!!!!
// !!!!!! JS FOR REVERSE TEXT MEDIA DARK VERSION 4 !!!!!!!!!!!

const reverseTxtMediaDarkV4PlayIcon = document.querySelector(
  ".reverse-text-media-dark-v4-video-play-icon"
);
const reverseTextMediaDarkV4Overlay = document.querySelector(
  ".reverse-text-media-dark-v4-video-overlay"
);
const reverseTextMediaDarkV4Video = document.querySelector(
  ".reverse-text-media-dark-v4-img"
);

reverseTxtMediaDarkV4PlayIcon.addEventListener("click", () => {
  reverseTextMediaDarkV4Overlay.style.opacity = "0";
  reverseTxtMediaDarkV4PlayIcon.style.opacity = "0";
  reverseTxtMediaDarkV4PlayIcon.pointerEvents = "none";
  reverseTextMediaDarkV4Video.src += "?autoplay=1";
  reverseTextMediaDarkV4Video.style.opacity = "1";
  reverseTextMediaDarkV4Video.style.pointerEvents = "all";
});
