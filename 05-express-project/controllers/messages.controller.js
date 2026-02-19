const path = require("path");

function getMessages(req, res) {
  res.render("messages"),
    {
      title: "Messages to my Friends!",
      friend: "Elon Musk",
    };
  // res.sendFile(path.join(__dirname, "..", "public", "img", "send.jpg"));
}

function postMessages(req, res) {
  console.log("Updating messages...");
}

module.exports = {
  getMessages,
  postMessages,
};
