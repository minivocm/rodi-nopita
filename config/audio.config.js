/*
OPSI PENGATURAN SIAP PAKAI:
- enabled: true/false
- autoplayAfterOpen: true/false
- loop: true/false
- volume: angka 0 sampai 1
- button.enabled: true/false
- button.position: "bottom-right" | "bottom-left" | "top-right" | "top-left"
*/

const AUDIO_CONFIG = {
  // Dimatikan karena backsound memakai audio dari video pembuka (config/video.config.js).
  // Untuk mode MP3 saja: set enabled ke true di sini dan enabled ke false di video.config.js.
  enabled: false,

  file: "assets/audio/music.mp3",
  sources: ["assets/audio/music.mp3"],

  title: "Wedding Music",
  autoplayAfterOpen: true,
  loop: true,
  volume: 0.55,

  button: {
    enabled: true,
    position: "top-right",
    showDelayAfterOpen: 260,
    showWhenDisabled: false
  }
};
