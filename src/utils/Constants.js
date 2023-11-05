const YT_API_KEY = "AIzaSyBcSzkBv3VyohwPj2N_YCCx7me9_qbhdjo";
const BASE_URL = "https://www.googleapis.com/youtube/v3/";

export const VIDEO_API = `${BASE_URL}videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=CA&key=${YT_API_KEY}`;
export const CHANNEL_API = `${BASE_URL}channels?part=snippet%2CcontentDetails%2Cstatistics&key=${YT_API_KEY}`;
export const SEARCH_API =
  "https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
