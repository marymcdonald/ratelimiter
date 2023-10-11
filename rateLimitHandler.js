const REQUEST_LIMIT = 5;
const WINDOW_SIZE = 1; //min

function rateLimiter(window) {

  let currentTime = Math.floor((Date.now()/ 1000)/60);
  if (currentTime - window.start >= WINDOW_SIZE) {
    window.start = currentTime;
    window.counter = 0;
  }

  if (window.counter < REQUEST_LIMIT) {
    window.counter += 1;
    return true;
  }

  return false;
}

module.exports = rateLimiter;