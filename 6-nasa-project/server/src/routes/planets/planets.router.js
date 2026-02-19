const express = require("express");
const planetRouter = express.Router();
const { httpGetAllPlanets } = require("./planets.controller.js");

planetRouter.route("/").get(httpGetAllPlanets);

module.exports = planetRouter;
