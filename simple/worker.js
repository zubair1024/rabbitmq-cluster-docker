var amqp = require("amqplib/callback_api");
const CONN_URL = "amqp://localhost";
amqp.connect(CONN_URL, function(err, conn) {
  conn.createChannel(function(err, ch) {
    ch.consume(
      "123",
      function(msg) {
        console.log(".....");
        setTimeout(function() {
          console.log("Message:", msg.content.toString());
          ch.ack(msg);
        }, 100);
      },
      { noAck: false }
    );
  });
});
