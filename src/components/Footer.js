import React from "react";
import "./Footer.css";
import fb from "../materials/fb.png";
import twitter from "../materials/twitter.png";
import ig from "../materials/ig.png";
import linkedin from "../materials/linkedin.png";
import yt from "../materials/yt.png";
import discord from "../materials/discord.png";
import wa from "../materials/wa.png";


function Footer() {
  return (
    <footer className="footer">

      <img src="https://assets-global.website-files.com/638b48215fd2fd34538fa6bc/6390122253829667e405c893_Funngrow%20Logo.svg" alt="FUNNGRO" />

      <div className="footer__links__wrapper">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="/">Home</a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">About</a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">Blogs</a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">FAQs</a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">Careers</a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">Investors</a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">Login</a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">Contact Us</a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">Privacy Policy</a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">Terms & Conditions</a>
      </div>

      <span>Enable Smart Teenagers and Smart Companies to realize their full potentials. It’s fun to grow.</span>

      <div class = "download">
                    <p>
                        Download App
                    </p>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href = "#">
                        <img src = "https://assets-global.website-files.com/638b48215fd2fd34538fa6bc/638c80746a8a27189ca05fb9_image%2029.png" alt = "appstore" class = "Appstore" />
                    </a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href = "#">
                        <img src = "https://assets-global.website-files.com/638b48215fd2fd34538fa6bc/638c80744c238bae49b47ff4_image%2027.png" alt = "googleplay" class ="Playstore"/>
                    </a>
                </div>

      <div className="footer__social__icons">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#"><img src={fb} alt="Facebook" /></a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#"><img src={twitter} alt="Twitter" /></a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#"><img src={ig} alt="Instagram" /></a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#"><img src={linkedin} alt="LinkedIn" /></a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#"><img src={yt} alt="YouTube" /></a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#"><img src={discord} alt="Discord" /></a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#"><img src={wa} alt="WhatsApp" /></a>
      </div>

      <span>All Copyrights reserved 2023 by <p>FUNNGRO</p> </span>
    </footer>
  );
}

export default Footer;