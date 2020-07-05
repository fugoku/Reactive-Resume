import React from "react";
import Profile from "../sections/Profile";
import LeftNavbar from "./LeftNavbar";
import styles from "./LeftSidebar.module.css";

const LeftSidebar = () => {
  return (
    <div className="flex">
      <LeftNavbar />

      <div className={styles.container}>
        <Profile />
      </div>
    </div>
  );
};

export default LeftSidebar;
