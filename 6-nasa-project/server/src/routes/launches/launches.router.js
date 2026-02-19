const express = require("express");
const {
  httpGetAllLaunches,
  httpAddNewLaunch,
  httpAbortLaunch,
} = require("./launches.controller");

const launchRouter = express.Router();

launchRouter.route("/").get(httpGetAllLaunches).post(httpAddNewLaunch);

launchRouter.route("/:id").delete(httpAbortLaunch);

module.exports = launchRouter;
