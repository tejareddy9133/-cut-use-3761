import React from "react";
import "./style.css";
import one from "./img/1.jpg";
import arjit from "./img/arjit.jpg";
import atif from "./img/atif.jpg";

const Playlist123 = () => {
  return (
    <header>
      <div className="menu_side">
        <h1>Playlist</h1>
        <div className="playlist">
          <h4 className="active">
            <span></span>
            <i className="bi bi-music-note-beamed"></i> Playlist
          </h4>
          <h4>
            <span></span>
            <i className="bi bi-music-note-beamed"></i> Last Listening
          </h4>
          <h4>
            <span></span>
            <i className="bi bi-music-note-beamed"></i> Recommended
          </h4>
        </div>
        <div className="menu_song">
          <li className="songItem">
            <span>01</span>
            <img src={one} alt="Alan" />
            <h5>
              On My Way
              <div className="subtitle">Alan Walker</div>
            </h5>
            <i className="bi playListPlay bi-play-circle-fill" id="1"></i>
          </li>
          <li className="songItem">
            <span>02</span>
            <img src={one} alt="Alan" />
            <h5>
              On My Way
              <div className="subtitle">Alan Walker</div>
            </h5>
            <i className="bi playListPlay bi-play-circle-fill" id="2"></i>
          </li>
          <li className="songItem">
            <span>03</span>
            <img src={one} alt="Alan" />
            <h5>
              On My Way
              <div className="subtitle">Alan Walker</div>
            </h5>
            <i className="bi playListPlay bi-play-circle-fill" id="3"></i>
          </li>
          <li className="songItem">
            <span>04</span>
            <img src={one} alt="Alan" />
            <h5>
              On My Way
              <div className="subtitle">Alan Walker</div>
            </h5>
            <i className="bi playListPlay bi-play-circle-fill" id="4"></i>
          </li>
          <li className="songItem">
            <span>05</span>
            <img src={one} alt="Alan" />
            <h5>
              On My Way
              <div className="subtitle">Alan Walker</div>
            </h5>
            <i className="bi playListPlay bi-play-circle-fill" id="5"></i>
          </li>
          <li className="songItem">
            <span>06</span>
            <img src={one} alt="Alan" />
            <h5>
              On My Way
              <div className="subtitle">Alan Walker</div>
            </h5>
            <i className="bi playListPlay bi-play-circle-fill" id="6"></i>
          </li>
        </div>
      </div>

      <div className="song_side">
        <nav>
          <ul>
            <li>
              Discover <span></span>
            </li>
            <li>MY LIBRARY</li>
            <li>RADIO</li>
          </ul>
          <div className="search">
            <i className="bi bi-search"></i>
            <input type="text" placeholder="Search Music..." />
          </div>
          <div className="user">
            <img
              src="img/KDS CODER.png"
              alt="User"
              title="KDS CODER (Jahid Khan)"
            />
          </div>
        </nav>
        <div className="content">
          <h1>Alen Walker-Fade</h1>
          <p>
            You were the shadow to my light Did you feel us Another start You
            fade
            <br />
            Away afraid our aim is out of sight Wanna see us Alive
          </p>
          <div className="buttons">
            <button>PLAY</button>
            <button>FOLLOW</button>
          </div>
        </div>
        <div className="popular_song">
          <div className="h4">
            <h4>Popular Song</h4>
            <div className="btn_s">
              <i id="left_scroll" className="bi bi-arrow-left-short"></i>
              <i id="right_scroll" className="bi bi-arrow-right-short"></i>
            </div>
          </div>
          <div className="pop_song">
            <li className="songItem">
              <div className="img_play">
                <img src={one} alt="hihello" />
                <i className="bi playListPlay bi-play-circle-fill" id="7"></i>
              </div>
              <h5>
                On My Way
                <br />
                <div className="subtitle">Alan Walker</div>
              </h5>
            </li>
            <li className="songItem">
              <div className="img_play">
                <img src={one} alt="hihello" />
                <i className="bi playListPlay bi-play-circle-fill" id="8"></i>
              </div>
              <h5>
                On My Way
                <br />
                <div className="subtitle">Alan Walker</div>
              </h5>
            </li>
            <li className="songItem">
              <div className="img_play">
                <img src={one} alt="hihello" />
                <i className="bi playListPlay bi-play-circle-fill" id="9"></i>
              </div>
              <h5>
                On My Way
                <br />
                <div className="subtitle">Alan Walker</div>
              </h5>
            </li>
            <li className="songItem">
              <div className="img_play">
                <img src={one} alt="hihello" />
                <i className="bi playListPlay bi-play-circle-fill" id="10"></i>
              </div>
              <h5>
                On My Way
                <br />
                <div className="subtitle">Alan Walker</div>
              </h5>
            </li>
            <li className="songItem">
              <div className="img_play">
                <img src={one} alt="hihello" />
                <i className="bi playListPlay bi-play-circle-fill" id="11"></i>
              </div>
              <h5>
                On My Way
                <br />
                <div className="subtitle">Alan Walker</div>
              </h5>
            </li>
            <li className="songItem">
              <div className="img_play">
                <img src={one} alt="hihello" />
                <i className="bi playListPlay bi-play-circle-fill" id="12"></i>
              </div>
              <h5>
                On My Way
                <br />
                <div className="subtitle">Alan Walker</div>
              </h5>
            </li>
            <li className="songItem">
              <div className="img_play">
                <img src={one} alt="hihello" />
                <i className="bi playListPlay bi-play-circle-fill" id="13"></i>
              </div>
              <h5>
                On My Way
                <br />
                <div className="subtitle">Alan Walker</div>
              </h5>
            </li>
            <li className="songItem">
              <div className="img_play">
                <img src={one} alt="hihello" />
                <i className="bi playListPlay bi-play-circle-fill" id="14"></i>
              </div>
              <h5>
                On My Way
                <br />
                <div className="subtitle">Alan Walker</div>
              </h5>
            </li>
            <li className="songItem">
              <div className="img_play">
                <img src={one} alt="hihello" />
                <i className="bi playListPlay bi-play-circle-fill" id="15"></i>
              </div>
              <h5>
                On My Way
                <br />
                <div className="subtitle">Alan Walker</div>
              </h5>
            </li>
          </div>
        </div>
        <div className="popular_artists">
          <div className="h4">
            <h4>Popular Artists</h4>
            <div className="btn_s">
              <i id="left_scrolls" className="bi bi-arrow-left-short"></i>
              <i id="right_scrolls" className="bi bi-arrow-right-short"></i>
            </div>
          </div>
          <div className="item">
            <li>
              <img src={arjit} alt="Arjit Singh" title="Arjit Singh" />
            </li>
            <li>
              <img src={atif} alt="Alan Walker" title="Alan Walker" />
            </li>
            <li>
              <img src={atif} alt="Atif Aslam" title="Atif Aslam" />
            </li>
            <li>
              <img src={arjit} alt="Guru RAndawa" title="Guru Randawa" />
            </li>
            <li>
              <img src={arjit} alt="Dhvani" title="Dhvani" />
            </li>
            <li>
              <img src={arjit} alt="Diljit Dosanjh" title="Diljit Dosanjh" />
            </li>
            <li>
              <img src={arjit} alt="Jubin Nautiyal" title="Jubin Nautiyal" />
            </li>
            <li>
              <img src={arjit} alt="Neha Kakker" title="Neha Kakker" />
            </li>
            <li>
              <img src={arjit} alt="Justin Bieber" title="Justin Bieber" />
            </li>
            <li>
              <img src={arjit} alt="Honey Singh" title="Honey Singh" />
            </li>
            <li>
              <img src={arjit} alt="Akhil" title="Akhil" />
            </li>
          </div>
        </div>
      </div>

      <div className="master_play">
        <div className="wave">
          <div className="wave1"></div>
          <div className="wave1"></div>
          <div className="wave1"></div>
        </div>
        <img src="img/26th.jpg" alt="Alan" id="poster_master_play" />
        <h5 id="title">
          Vande Mataram
          <br />
          <div className="subtitle">Bankim Chandra</div>
        </h5>
        <div className="icon">
          <i classNameName="bi bi-skip-start-fill" id="back"></i>
          <i classNameName="bi bi-play-fill" id="masterPlay"></i>
          <i classNameName="bi bi-skip-end-fill" id="next"></i>
        </div>
        <span id="currentStart">0:00</span>
        <div className="bar">
          <input type="range" id="seek" min="0" value="0" max="100" />
          <div className="bar2" id="bar2"></div>
          <div className="dot"></div>
        </div>
        <span id="currentEnd">0:00</span>

        <div className="vol">
          <i className="bi bi-volume-down-fill" id="vol_icon"></i>
          <input type="range" id="vol" min="0" value="30" max="100" />
          <div className="vol_bar"></div>
          <div className="dot" id="vol_dot"></div>
        </div>
      </div>
    </header>
  );
};

export default Playlist123;
