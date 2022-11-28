import React,{useEffect, useState} from "react";
import "./nav.css";
import avatar from "../../assets/avatar.png";
import logo from "../../assets/netflix.png";
const Nav = () => {
const [show, setShow] = useState(false)

const animateNav = () =>{
    return window.scrollY > 100 ? setShow(true) : setShow(false)
}

useEffect(()=>{
    window.addEventListener('scroll',animateNav);
    return () => window.removeEventListener('scroll', animateNav);
},[]);

  return (
    <div className={`nav ${ show &&`nav_black`}`}>
      <div className="nav_content">
        <img src={logo} className="nav_logo" alt="logo" />
        <img src={avatar} className='nav_avatar' alt="avatar" />
      </div>
      
    </div>
  );
};

export default Nav;
