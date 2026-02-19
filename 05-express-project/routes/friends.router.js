const express = require("express");
const friendsController = require("../controllers/friends.controller");
const friendsRouter = express.Router();

friendsRouter
  .route("/")
  .post(friendsController.postFriend)
  .get(friendsController.getFriends);

friendsRouter.get("/:friendId", friendsController.getFriend);

module.exports = friendsRouter;
