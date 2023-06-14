const { default: mongoose, version } = require("mongoose");

const playlistSchema = mongoose.Schema(
  { name: String, url: String, artist: String, user_id: String },
  { versionKey: false }
);

const PlaylistModel = mongoose.model("playlist", playlistSchema);
module.exports = { PlaylistModel };
