const axios = require("axios");

let count = 0;
setInterval(async () => {
  try {
    console.log(`making request ${++count}`);
    await axios.post("http://localhost:5050", {});
  } catch (err) {
    console.log(err);
  }
}, 100);
