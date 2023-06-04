import React from "react";
import { Link } from "react-scroll";
import { SocialIcon } from "react-social-icons";

import jtLogo from "./images/jtogotrans.png";

export default function Navbar() {

  return (
    <header className="row container">
        <img className="logo" src={jtLogo} alt="JTVA Logo" />
      <nav className="navigation row">
      
        <ul className="row">
          <li>
            <Link activeClass="active" smooth spy to="home">
              HOME
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="demos">
              DEMO
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="about">
              ABOUT
            </Link>
          </li>

          <li>
            <Link activeClass="active" smooth spy to="clients">
              CLIENTS
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="contact">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
      <ul className="navIcons">
        <li>
          <SocialIcon
            url="https://twitter.com/jtvoiceactor"
            style={{ height: 50, width: 50 }}
            bgColor="#ffffff"
          />
        </li>
        <li>
          <SocialIcon
            url="https://www.twitch.tv/jtva"
            style={{ height: 50, width: 50 }}
            bgColor="#ffffff"
          />
        </li>
        <li>
          <SocialIcon
            url="https://www.youtube.com/channel/UC_WdfmTvGS5gJuamdXqSnhg"
            style={{ height: 50, width: 50 }}
            bgColor="#ffffff"
          />
        </li>
      </ul>
    </header>
  );
}
