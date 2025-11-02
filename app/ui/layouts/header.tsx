import React from "react";
import styles from "../ui/home.module.css";

const Header = () => {
  return (
    <div className="bg-black ring-2 ring-gray-200 sticky top-10 z-40 text-gray-100 flex items-center gap-5 p-7 rounded-2xl mx-20">
      {/* With Tailwind */}
      <div className="relative w-0 h-0 border-l-15 border-r-15 border-b-26 border-l-transparent border-r-transparent border-b-white" />
      {/* Native */}
      {/* <div className={styles.shape}></div> */}
      <span className="tracking-widest font-semibold text-xl">HELLO WORLD</span>
    </div>
  );
};

export default Header;
