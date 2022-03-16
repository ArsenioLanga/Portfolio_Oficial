import React from "react"
import './Footer.css'
// import  Profile from "./profile.png";
import  Profile from "../../../assets/Home/shape-bg.png";
export default function Footer(){
    return(
        <div className="footer-container">
            <div className="footer-parent">
               <img src={Profile} alt="" />
            </div>
        </div>
    )
}