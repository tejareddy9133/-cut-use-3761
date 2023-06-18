
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { User } = require("../models/user");

const { Router } = require("express");
const { authenticator } = require("../middleware/authentication");
const { SongsModel } = require("../models/songs");
const { PlaylistModel } = require("../models/playlist");

const userRouter = Router();


//! songs ,playlist

userRouter.post("/admin/add/allSongs", authenticator, async (req, res) => {
  const { name, url, artist } = req.body;
  const decoded = jwt.verify(
    req.headers.authorization.split(" ")[1],
    process.env.JWT_SECRET_KEY
  );
  console.log(decoded);
  const user = await User.findOne({ _id: decoded.userId });
  if (!user.isAdmin) {
    return res.status(200).send("Please login as admin");
  }

  if (!name || !url || !artist) {
    return res.send({ msg: "Please fill all the fields" });
  }
  const song_exists = await SongsModel.findOne({ name });
  if (song_exists) {
    return res.status(200).json({ msg: "Song already exists" });
  } else {
    const song = new SongsModel({ name, url, artist, userId: decoded.userId });
    await song.save();
    res.status(200).json({ msg: "Song is Added Successfully" });
    return;
  }
});

userRouter.post("/add/song/playlist/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // console.log(decoded);
    const song_exists = await SongsModel.findOne({ _id: id });
    // console.log(song_exists);
    if (!song_exists) {
      return res.status(200).send("Song does not exist");
    } else {
      const songCheck = await PlaylistModel.findOne({ name: song_exists.name });

      if (songCheck) {
        return res.status(200).send("Song already Added to Playlist");
      }
      const decoded = jwt.verify(
        req.headers.authorization.split(" ")[1],
        process.env.JWT_SECRET_KEY
      );
      console.log(decoded.userId);
      const newSong = new PlaylistModel({
        name: song_exists.name,
        artist: song_exists.artist,
        url: song_exists.url,
        user_Id: decoded.userId,
      });
      return newSong.save();
    }
  } catch (error) {
    console.log(error);
  }
});

userRouter.get("/allSongs", async (req, res) => {
  const token = jwt.verify(
    req.headers.authorization.split(" ")[1],
    process.env.JWT_SECRET_KEY
  );
  if (!token) {
    res.status(200).send("Please login first");
  }
  if (token.isAdmin) {
    const allSongs = await SongsModel.find();
    res.status(200).send(allSongs);
  }
});

userRouter.get("/user/allSongs", authenticator, async (req, res) => {
  const token = jwt.verify(
    req.headers.authorization.split(" ")[1],
    process.env.JWT_SECRET_KEY
  );
  console.log(token.userId);
  if (token) {
    const allSongs = await PlaylistModel.find({ user_Id: token.userId });

    if (allSongs.length == 0) {
      res.status(200).send("No Songs Available");
      return;
    }
    res.status(200).send(allSongs);
  } else {
    res.status(200).send("Please login first");
  }
});

userRouter.delete("/user/allSongs/:id", authenticator, async (req, res) => {
  const { id } = req.params;
  const token = jwt.verify(
    req.headers.authorization.split(" ")[1],
    process.env.JWT_SECRET_KEY
  );
  if (token) {
    const allSongs = await PlaylistModel.findByIdAndDelete({
      user_Id: token.userId,
      _id: id,
    });
    if (allSongs) {
      res.status(200).json({ msg: "Song deleted successfully" });
      return;
    } else {
      res.status(200).json({ msg: "Song not found" });
      return;
    }
  } else {
    res.status(200).send("Please login first");
  }
});
module.exports = { userRouter };
