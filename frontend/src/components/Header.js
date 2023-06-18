import React, { useEffect, useState } from 'react';
import "../css/Header.css"
import logo from "../data/images/Navbar/logo.jpg";
import { useSelector } from 'react-redux';
import {useNavigate, Link} from "react-router-dom";

const Header = () => {
    const [style, setstyle] = useState("cont123");
    const icon = document.querySelector(".icon");
    const search = document.querySelector(".search");
    const displaydown = () => {
        setstyle("open123")
    }
    const { auth } = useSelector((store) => store.authReducer);
    console.log("authh", auth)
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    }


    return (
        <div className='header'>

            <div style={{ display: 'flex', flexDirection: "row" }}>
                <div style={{ display: 'flex', flexDirection: "row", columnGap: "4px", border: "0px solid red", height: "auto", background:"rgb(28,27,27)" }} className='first'>
                    <div style={{ border: "0px solid red", borderRadius: "20px" }}>
                        <img style={{ width: "130px", borderRadius: "30px" }} src={logo} alt="logo" />
                    </div>

                    <div style={{ border: "0px solid red", marginLeft: "20px" }}>
                        Vibe Tunes
                    </div>


                </div>


            </div>



            {/*  space */}
            <div style={{ display: 'flex', flexDirection: "row" }}>
                <div className='second' style={{ border: "0px solid red", height: "auto",background:"rgb(28,27,27)" }}>
                    <div className='search'>

                        <div className='icon'></div>
                        <div className='input'>
                            <input style={{ color: "white" }} type="text" placeholder="search songs" id="mysearch" />
                        </div>


                    </div>

                </div>
                <div className='third'>

                    Manage Subscription

                </div>{auth===false &&
                <div className='fourth'>
                    

<Link  to="/login"><i style={{ fontSize: "20px", cursor:"pointer" }} className="fa fa-user" ></i></Link> 
&nbsp;


Login
                    
</div>}

{auth===true &&
<div className='fourth'>
                    

<i style={{ fontSize: "20px", cursor:"pointer" }} className="fa fa-user" onClick={handleLogout}></i>
&nbsp;


Logout
                    
</div>}



                   
                <div className='fifth'>

                    {/*   <div style={{ cursor: "pointer" }} onClick={displaydown}>

                        <i class="fa fa-bars"></i>
                    </div>  */}



                    <div className="dropdown">
                        <button className="dropbtn"> <i className="fa fa-bars"></i></button>
                        <div className="dropdown-content">
                            <a href="#"><i className="fa fa-download"></i>   &nbsp;Download App</a>
                            <a href="#"><i className="fa fa-language"></i>  &nbsp;Select Language</a>
                            <a href="#"><i className="fa fa-language"></i>  &nbsp;Sound Quantity</a>
                            <a href="#"><i className="fa fa-language"></i> Podcast</a>
                        </div>
                    </div>


                </div>


            </div>



        </div>
    );
}

export default Header