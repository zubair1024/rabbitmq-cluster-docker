const publishToQueue = require("./publisher");

const express = require("express");

const app = express();

app.post("/", async (req, res) => {
  try {
    // let { queueName, payload } = req.body;
    await publishToQueue("123", "123");
    res.status(200).send({ "message-sent": true });
  } catch (err) {
    console.error(err);
    res.status(500).send({ "message-sent": false });
  }
});

app.listen(5050, () => {
  console.log(`Listening`);
});
