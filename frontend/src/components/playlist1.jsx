import React from 'react'
import "../css/Playlist.css";

const Playlist1 = () => {
    const music = new Audio('vande.mp3');

    // create Array 

    const songs = [
        {
            id: '1',
            songName: ` On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
            poster: "img/1.jpg"
        },
        {
            id: '2',
            songName: ` Alan Walker-Fade <br>
        <div class="subtitle">Alan Walker</div>`,
            poster: "img/2.jpg"
        },
        // all object type 
        {
            id: "3",
            songName: `Cartoon - On & On <br><div class="subtitle"> Daniel Levi</div>`,
            poster: "img/3.jpg",
        },
        {
            id: "4",
            songName: `Warriyo - Mortals <br><div class="subtitle">Mortals</div>`,
            poster: "img/4.jpg",
        },
        {
            id: "5",
            songName: `Ertugrul Gazi <br><div class="subtitle">Ertugrul</div>`,
            poster: "img/5.jpg",
        },
        {
            id: "6",
            songName: `Electronic Music <br><div class="subtitle">Electro</div>`,
            poster: "img/6.jpg",
        },
        {
            id: "7",
            songName: `Agar Tum Sath Ho <br><div class="subtitle">Tamashaa</div>`,
            poster: "img/7.jpg",
        },
        {
            id: "8",
            songName: `Suna Hai <br><div class="subtitle">Neha Kakker</div>`,
            poster: "img/8.jpg",
        },
        {
            id: "9",
            songName: `Dilber <br><div class="subtitle">Satyameva Jayate</div>`,
            poster: "img/9.jpg",
        },
        {
            id: "10",
            songName: `Duniya <br><div class="subtitle">Luka Chuppi</div>`,
            poster: "img/10.jpg",
        },
        {
            id: "11",
            songName: `Lagdi Lahore Di <br><div class="subtitle">Street Dancer 3D</div>`,
            poster: "img/11.jpg",
        },
        {
            id: "12",
            songName: `Putt Jatt Da <br><div class="subtitle">Putt Jatt Da</div>`,
            poster: "img/12.jpg",
        },
        {
            id: "13",
            songName: `Baarishein <br><div class="subtitle">Atif Aslam</div>`,
            poster: "img/13.jpg",
        },
        {
            id: "14",
            songName: `Vaaste <br><div class="subtitle">Dhvani Bhanushali</div>`,
            poster: "img/14.jpg",
        },
        {
            id: "15",
            songName: `Lut Gaye <br><div class="subtitle">Jubin Nautiyal</div>`,
            poster: "img/15.jpg",
        },
    ]

    // Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    //     element.getElementsByTagName('img')[0].src = songs[i].poster;
    //     element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
    // })


    // let masterPlay = document.getElementById('masterPlay');
    // let wave = document.getElementsByClassName('wave')[0];

    // masterPlay.addEventListener('click',()=>{
    //     if (music.paused || music.currentTime <=0) {
    //         music.play();
    //         masterPlay.classList.remove('bi-play-fill');
    //         masterPlay.classList.add('bi-pause-fill');
    //         wave.classList.add('active2');
    //     } else {
    //         music.pause();
    //         masterPlay.classList.add('bi-play-fill');
    //         masterPlay.classList.remove('bi-pause-fill');
    //         wave.classList.remove('active2');
    //     }
    // } )


    // const makeAllPlays = () =>{
    //     Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    //             element.classList.add('bi-play-circle-fill');
    //             element.classList.remove('bi-pause-circle-fill');
    //     })
    // }
    // const makeAllBackgrounds = () =>{
    //     Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
    //             element.style.background = "rgb(105, 105, 170, 0)";
    //     })
    // }

    // let index = 0;
    // let poster_master_play = document.getElementById('poster_master_play');
    // let title = document.getElementById('title');
    // Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    //     element.addEventListener('click', (e)=>{
    //         index = e.target.id;
    //         makeAllPlays();
    //         e.target.classList.remove('bi-play-circle-fill');
    //         e.target.classList.add('bi-pause-circle-fill');
    //         music.src = `audio/${index}.mp3`;
    //         poster_master_play.src =`img/${index}.jpg`;
    //         music.play();
    //         let song_title = songs.filter((ele)=>{
    //             return ele.id == index;
    //         })

    //         song_title.forEach(ele =>{
    //             let {songName} = ele;
    //             title.innerHTML = songName;
    //         })
    //         masterPlay.classList.remove('bi-play-fill');
    //         masterPlay.classList.add('bi-pause-fill');
    //         wave.classList.add('active2');
    //         music.addEventListener('ended',()=>{
    //             masterPlay.classList.add('bi-play-fill');
    //             masterPlay.classList.remove('bi-pause-fill');
    //             wave.classList.remove('active2');
    //         })
    //         makeAllBackgrounds();
    //         Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    //     })
    // })


    // let currentStart = document.getElementById('currentStart');
    // let currentEnd = document.getElementById('currentEnd');
    // let seek = document.getElementById('seek');
    // let bar2 = document.getElementById('bar2');
    // let dot = document.getElementsByClassName('dot')[0];

    // music.addEventListener('timeupdate',()=>{
    //     let music_curr = music.currentTime;
    //     let music_dur = music.duration;

    //     let min = Math.floor(music_dur/60);
    //     let sec = Math.floor(music_dur%60);
    //     if (sec<10) {
    //         sec = `0${sec}`
    //     }
    //     currentEnd.innerText = `${min}:${sec}`;

    //     let min1 = Math.floor(music_curr/60);
    //     let sec1 = Math.floor(music_curr%60);
    //     if (sec1<10) {
    //         sec1 = `0${sec1}`
    //     }
    //     currentStart.innerText = `${min1}:${sec1}`;

    //     let progressbar = parseInt((music.currentTime/music.duration)*100);
    //     seek.value = progressbar;
    //     let seekbar = seek.value;
    //     bar2.style.width = `${seekbar}%`;
    //     dot.style.left = `${seekbar}%`;
    // })

    // seek.addEventListener('change', ()=>{
    //     music.currentTime = seek.value * music.duration/100;
    // })

    // music.addEventListener('ended', ()=>{
    //     masterPlay.classList.add('bi-play-fill');
    //     masterPlay.classList.remove('bi-pause-fill');
    //     wave.classList.remove('active2');
    // })


    // let vol_icon = document.getElementById('vol_icon');
    // let vol = document.getElementById('vol');
    // let vol_dot = document.getElementById('vol_dot');
    // let vol_bar = document.getElementsByClassName('vol_bar')[0];

    // vol.addEventListener('change', ()=>{
    //     if (vol.value == 0) {
    //         vol_icon.classList.remove('bi-volume-down-fill');
    //         vol_icon.classList.add('bi-volume-mute-fill');
    //         vol_icon.classList.remove('bi-volume-up-fill');
    //     }
    //     if (vol.value > 0) {
    //         vol_icon.classList.add('bi-volume-down-fill');
    //         vol_icon.classList.remove('bi-volume-mute-fill');
    //         vol_icon.classList.remove('bi-volume-up-fill');
    //     }
    //     if (vol.value > 50) {
    //         vol_icon.classList.remove('bi-volume-down-fill');
    //         vol_icon.classList.remove('bi-volume-mute-fill');
    //         vol_icon.classList.add('bi-volume-up-fill');
    //     }

    //     let vol_a = vol.value;
    //     vol_bar.style.width = `${vol_a}%`;
    //     vol_dot.style.left = `${vol_a}%`;
    //     music.volume = vol_a/100;
    // })



    // let back = document.getElementById('back');
    // let next = document.getElementById('next');

    // back.addEventListener('click', ()=>{
    //     index -= 1;
    //     if (index < 1) {
    //         index = Array.from(document.getElementsByClassName('songItem')).length;
    //     }
    //     music.src = `audio/${index}.mp3`;
    //     poster_master_play.src =`img/${index}.jpg`;
    //     music.play();
    //     let song_title = songs.filter((ele)=>{
    //         return ele.id == index;
    //     })

    //     song_title.forEach(ele =>{
    //         let {songName} = ele;
    //         title.innerHTML = songName;
    //     })
    //     makeAllPlays()

    //     document.getElementById(`${index}`).classList.remove('bi-play-fill');
    //     document.getElementById(`${index}`).classList.add('bi-pause-fill');
    //     makeAllBackgrounds();
    //     Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";

    // })
    // next.addEventListener('click', ()=>{
    //     index -= 0;
    //     index += 1;
    //     if (index > Array.from(document.getElementsByClassName('songItem')).length) {
    //         index = 1;
    //         }
    //     music.src = `audio/${index}.mp3`;
    //     poster_master_play.src =`img/${index}.jpg`;
    //     music.play();
    //     let song_title = songs.filter((ele)=>{
    //         return ele.id == index;
    //     })

    //     song_title.forEach(ele =>{
    //         let {songName} = ele;
    //         title.innerHTML = songName;
    //     })
    //     makeAllPlays()

    //     document.getElementById(`${index}`).classList.remove('bi-play-fill');
    //     document.getElementById(`${index}`).classList.add('bi-pause-fill');
    //     makeAllBackgrounds();
    //     Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";

    // })


    // let left_scroll = document.getElementById('left_scroll');
    // let right_scroll = document.getElementById('right_scroll');
    // let pop_song = document.getElementsByClassName('pop_song')[0];

    // left_scroll.addEventListener('click', ()=>{
    //     pop_song.scrollLeft -= 330;
    // })
    // right_scroll.addEventListener('click', ()=>{
    //     pop_song.scrollLeft += 330;
    // })


    // let left_scrolls = document.getElementById('left_scrolls');
    // let right_scrolls = document.getElementById('right_scrolls');
    // let item = document.getElementsByClassName('item')[0];

    // left_scrolls.addEventListener('click', ()=>{
    //     item.scrollLeft -= 330;
    // })
    // right_scrolls.addEventListener('click', ()=>{
    //     item.scrollLeft += 330;
    // })    
    return (
        <div>  //playlist
            <div className="menu_side">
                <h1>Playlist</h1>
                <div className="playlist">
                    <h4 className="active"><span></span><i className="bi bi-music-note-beamed"></i> Playlist</h4>
                    <h4 ><span></span><i className="bi bi-music-note-beamed"></i> Last Listening</h4>
                    <h4 ><span></span><i className="bi bi-music-note-beamed"></i> Recommended</h4>
                </div>
                <div className="menu_song">
                    <li className="songItem">
                        <span>01</span>
                        <img src="img/1.jpg" alt="Alan" />
                        <h5>
                            On My Way
                            <div className="subtitle">Alan Walker</div>
                        </h5>
                        <i className="bi playListPlay bi-play-circle-fill" id="1"></i>
                    </li>
                    <li className="songItem">
                        <span>02</span>
                        <img src="img/1.jpg" alt="Alan" />
                        <h5>
                            On My Way
                            <div className="subtitle">Alan Walker</div>
                        </h5>
                        <i className="bi playListPlay bi-play-circle-fill" id="2"></i>
                    </li>
                    <li className="songItem">
                        <span>03</span>

                        <img src="img/1.jpg" alt="Alan" />
                        <h5>
                            On My Way
                            <div className="subtitle">Alan Walker</div>
                        </h5>
                        <i className="bi playListPlay bi-play-circle-fill" id="3"></i>
                    </li>
                    <li className="songItem">
                        <span>04</span>
                        <img src="img/1.jpg" alt="Alan" />
                        <h5>
                            On My Way
                            <div className="subtitle">Alan Walker</div>
                        </h5>
                        <i className="bi playListPlay bi-play-circle-fill" id="4"></i>
                    </li>
                    <li className="songItem">
                        <span>05</span>
                        <img src="img/1.jpg" alt="Alan" />
                        <h5>
                            On My Way
                            <div className="subtitle">Alan Walker</div>
                        </h5>
                        <i className="bi playListPlay bi-play-circle-fill" id="5"></i>
                    </li>
                    <li className="songItem">
                        <span>06</span>
                        <img src="img/1.jpg" alt="Alan" />
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
                        <li>Discover <span></span></li>
                        <li>MY LIBRARY</li>
                        <li>RADIO</li>
                    </ul>
                    <div className="search">
                        <i className="bi bi-search"></i>
                        <input type="text" placeholder="Search Music..." />
                    </div>
                    <div className="user">
                        <img src="img/KDS CODER.png" alt="User" title="KDS CODER (Jahid Khan)" />
                    </div>
                </nav>
                <div className="content">
                    <h1>Alen Walker-Fade</h1>
                    <p>
                        You were the shadow to my light Did you feel us Another start You fade
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
                                <img src="img/1.jpg" alt="alan" />
                                <i className="bi playListPlay bi-play-circle-fill" id="7"></i>
                            </div>
                            <h5>On My Way
                                <br />
                                <div className="subtitle">Alan Walker</div>
                            </h5>
                        </li>
                        <li className="songItem">
                            <div className="img_play">
                                <img src="img/1.jpg" alt="alan" />
                                <i className="bi playListPlay bi-play-circle-fill" id="8"></i>
                                {/*   <!-- change All id  -->  */}

                            </div>
                            <h5>On My Way
                                <br />
                                <div className="subtitle">Alan Walker</div>
                            </h5>
                        </li>
                        <li className="songItem">
                            <div className="img_play">
                                <img src="img/1.jpg" alt="alan" />
                                <i className="bi playListPlay bi-play-circle-fill" id="9"></i>
                            </div>
                            <h5>On My Way
                                <br />
                                <div className="subtitle">Alan Walker</div>
                            </h5>
                        </li>
                        <li className="songItem">
                            <div className="img_play">
                                <img src="img/1.jpg" alt="alan" />
                                <i className="bi playListPlay bi-play-circle-fill" id="10"></i>
                            </div>
                            <h5>On My Way
                                <br />
                                <div className="subtitle">Alan Walker</div>
                            </h5>
                        </li>
                        <li className="songItem">
                            <div className="img_play">
                                <img src="img/1.jpg" alt="alan" />
                                <i className="bi playListPlay bi-play-circle-fill" id="11"></i>
                            </div>
                            <h5>On My Way
                                <br />
                                <div className="subtitle">Alan Walker</div>
                            </h5>
                        </li>
                        <li className="songItem">
                            <div className="img_play">
                                <img src="img/1.jpg" alt="alan" />
                                <i className="bi playListPlay bi-play-circle-fill" id="12"></i>
                            </div>
                            <h5>On My Way
                                <br />
                                <div className="subtitle">Alan Walker</div>
                            </h5>
                        </li>
                        <li className="songItem">
                            <div className="img_play">
                                <img src="img/1.jpg" alt="alan" />
                                <i className="bi playListPlay bi-play-circle-fill" id="13"></i>
                            </div>
                            <h5>On My Way
                                <br />
                                <div className="subtitle">Alan Walker</div>
                            </h5>
                        </li>
                        <li className="songItem">
                            <div className="img_play">
                                <img src="img/1.jpg" alt="alan" />
                                <i className="bi playListPlay bi-play-circle-fill" id="14"></i>
                            </div>
                            <h5>On My Way
                                <br />
                                <div className="subtitle">Alan Walker</div>
                            </h5>
                        </li>
                        <li className="songItem">
                            <div className="img_play">
                                <img src="img/1.jpg" alt="alan" />
                                <i className="bi playListPlay bi-play-circle-fill" id="15"></i>
                            </div>
                            <h5>On My Way
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
                            <img src="img/arjit.jpg" alt="Arjit Singh" title="Arjit Singh" />
                        </li>
                        <li>
                            <img src="img/alan.jpg" alt="Alan Walker" title="Alan Walker" />
                        </li>
                        <li>
                            <img src="img/atif.jpg" alt="Atif Aslam" title="Atif Aslam" />
                        </li>
                        <li>
                            <img src="img/guru.jpg" alt="Guru RAndawa" title="Guru Randawa" />
                        </li>
                        <li>
                            <img src="img/dhvani.jpg" alt="Dhvani" title="Dhvani" />
                        </li>
                        <li>
                            <img src="img/Diljit_Dosanjh.jpg" alt="Diljit Dosanjh" title="Diljit Dosanjh" />
                        </li>
                        <li>
                            <img src="img/jubin Nautiyal.jpg" alt="Jubin Nautiyal" title="Jubin Nautiyal" />
                        </li>
                        <li>
                            <img src="img/neha.jpg" alt="Neha Kakker" title="Neha Kakker" />
                        </li>
                        <li>
                            <img src="img/justin-bieber-lede.jpg" alt="Justin Bieber" title="Justin Bieber" />
                        </li>
                        <li>
                            <img src="img/honey.jpg" alt="Honey Singh" title="Honey Singh" />
                        </li>
                        <li>
                            <img src="img/akhil.jpg" alt="Akhil" title="Akhil" />
                        </li>
                        {/*  <!-- change all img  -->   */}

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
                <h5 id="title">Vande Mataram<br />
                    <div className="subtitle">Bankim Chandra</div>
                </h5>
                <div className="icon">
                    <i className="bi bi-skip-start-fill" id="back"></i>
                    <i className="bi bi-play-fill" id="masterPlay"></i>
                    <i className="bi bi-skip-end-fill" id="next"></i>
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
        </div>



    )
}

export default Playlist1