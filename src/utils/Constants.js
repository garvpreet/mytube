const YT_API_KEY = "AIzaSyBcSzkBv3VyohwPj2N_YCCx7me9_qbhdjo";
const BASE_URL_1 = "https://www.googleapis.com/youtube/v3/";
const BASE_URL_2 = "https://youtube.googleapis.com/youtube/v3/";

export const VIDEO_API = `${BASE_URL_1}videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=CA&key=${YT_API_KEY}`;
export const CHANNEL_API = `${BASE_URL_1}channels?part=snippet%2CcontentDetails%2Cstatistics&key=${YT_API_KEY}`;
export const SEARCH_API =
  "https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const SEARCH_RESULTS_API = `${BASE_URL_2}search?part=snippet&maxResults=25&key=${YT_API_KEY}&q=`;
export const CHANNEL_IMG_API = `${BASE_URL_2}channels?part=snippet%2CcontentDetails%2Cstatistics&key=${YT_API_KEY}&id=`;
export const VIDEO_DETAILS_API = `${BASE_URL_2}videos?part=snippet%2CcontentDetails%2Cstatistics&key=${YT_API_KEY}&id=`;
export const VIDEO_COMMENT_DETAILS_API = `${BASE_URL_1}commentThreads?textFormat=plainText&part=snippet&maxResults=100&order=relevance&key=${YT_API_KEY}&videoId=`;

export const VIDEO_RECOMMENDATIONS_API = `${BASE_URL_1}activities?part=snippet%2CcontentDetails&maxResults=50&regionCode=CA&key=${YT_API_KEY}&channelId=`;
