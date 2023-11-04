const YT_API_KEY = "AIzaSyDPVe7Xz5PgxFjWsdULr_Ju0ckDaltcedM";

export const CHANNEL_API =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  YT_API_KEY;

export const VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=CA&key=" +
  YT_API_KEY;
