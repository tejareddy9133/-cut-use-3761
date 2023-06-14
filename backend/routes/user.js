//user signup login

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { User } = require("../models/user");

const { Router } = require("express");
const { authenticator } = require("../middleware/authentication");
const { SongsModel } = require("../models/songs");
const { PlaylistModel } = require("../models/playlist");

const userRouter = Router();

//! songs ,playlist

userRouter.post("/register", async (req, res) => {
  try {
    const payload = req.body;
    const user = await User.findOne({ email: payload.email });
    if (user) {
      return res.send({ msg: "Please login, user already exist" });
    } else {
      const hashPassword = await bcrypt.hashSync(payload.password, 8);
      payload.password = hashPassword;

      const newUser = new User(payload);
      await newUser.save();

      return res.json({ msg: "User registered", user: newUser });
    }
  } catch (error) {
    res.send({ msg: error.message });
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    const payload = req.body;
    const user = await User.findOne({ email: payload.email });
    if (!user) return res.send("Please signup first");
    //password verification
    const isPasswordCorrect = await bcrypt.compareSync(
      payload.password,
      user.password
    );
    if (isPasswordCorrect) {
      const token = await jwt.sign(
        { email: user.email, userId: user._id },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "7d" }
      );

      res.json({ msg: "Login success", token });
    } else {
      res.send({ msg: "Invalid credentials" });
    }
  } catch (error) {
    res.send(error.message);
  }
});

userRouter.post("/admin/add/allSongs", authenticator, async (req, res) => {
  const { name, url, artist } = req.body;

  if (!name || !url || !artist) {
    return res.send({ msg: "Please fill all the fields" });
  }
  const song_exists = await SongsModel.findOne({ name });
  if (song_exists) {
    return res.status(200).json({ msg: "Song already exists" });
  } else {
    const song = new SongsModel({ name, url, artist });
    await song.save();
    res.status(200).json({ msg: "Song is Added Successfully" });
    return;
  }
});

userRouter.post("/user/add/song/playlist", async (req, res) => {
  let token = req.headers.authorization?.split(" ")[1];
  const { name, artist, url } = req.body;
  console.log(token);
  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  if (decoded) {
    const song_exists = await PlaylistModel.findOne({
      user_id: decoded.userId,
      name,
    });
    if (song_exists) {
      res.status(200).json({ msg: "Song already added in Playlist" });
      return;
    }
    const data = new PlaylistModel({
      name,
      url,
      artist,
      user_id: decoded.userId,
    });
    await data.save();
    console.log(data);
    res.status(200).json({ msg: "Song is Added to the Playlist Successfully" });
  } else {
    res.status(200).json({ msg: "Please login first" });
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

  //! Add isAdmin subscription
  if (token) {
    const allSongs = await SongsModel.find({ user_id: token.userId });

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
    const allSongs = await SongsModel.findByIdAndDelete({
      user_id: token.userId,
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
