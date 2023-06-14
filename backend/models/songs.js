const mongoose = require("mongoose");

const songsShema = mongoose.Schema(
  { name: String, artist: String, url: String },
  { versonKey: false }
);

const SongsModel = mongoose.model("allSongs", songsShema);

module.exports = { SongsModel };
