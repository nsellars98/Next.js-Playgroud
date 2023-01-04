import React from "react";
import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
        <h1 className={headerStyles.title}>
          <span>New</span> Title
        </h1>
        <p className={headerStyles.description}>Stay tuned for scenes from our next episode</p>
    </div>
  )
}

export default Header;