import React from 'react'
import "../css/Header.css"

const Header = () => {  
    const icon = document.querySelector(".icon");
    const search = document.querySelector(".search");
    // icon.onClick = function () {
    //   search.classList.toggle("active");
    // }
    return (
      <div className='header'>
  
        <div style={{ display: 'flex', flexDirection: "row" }}>
          <div style={{ display: 'flex', flexDirection: "row", columnGap: "4px" }} className='first'>
            <div style={{ border: "2px solid red" }}>
              <img style={{ width: "80px" }} src={logo} alt="logo" />
            </div>
  
            <div style={{ border: "2px solid red" }}>
              Vibe Tunes
            </div>
  
  
          </div>
  
  
        </div>
  
  
  
        {/*  space */}
        <div style={{ display: 'flex', flexDirection: "row" }}>
          <div className='second'>
            <div className='search'>
  
              <div className='icon'></div>
              <div className='input'>
                <input style={{color:"white"}} type="text" placeholder="search songs" id="mysearch" />
              </div>
  
  
            </div>
  
          </div>
          <div className='third'>
  
            Manage Subscription
  
          </div>
          <div className='fourth'>
          
          <i style={{fontSize:"20px"}} class="fa fa-user"></i>&nbsp;&nbsp;&nbsp;&nbsp;
          
        
            Login
  
          </div>
  
          <div className='fifth'>
           
            <div style={{cursor:"pointer"}}>
              <i class="fa fa-bars"></i></div>
  
  
          </div>
  
        </div>
  
  
  
      </div>
    );
}

export default Header