const express = require("express");
const messagesRouter = express.Router();
const messagesController = require("../controllers/messages.controller");

messagesRouter
  .route("/")
  .get(messagesController.getMessages)
  .post(messagesController.postMessages);

module.exports = messagesRouter;
