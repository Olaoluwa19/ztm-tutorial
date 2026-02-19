const mongoose = require("mongoose");

DATABASE_URI =
  "mongodb+srv://oladapooluwadurotimi:yhCIFQCCPwL6ZeWk@nasacluster.bdls3.mongodb.net/?retryWrites=true&w=majority&appName=NASACluster";

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(DATABASE_URI);
}

module.exports = {
  mongoConnect,
};
