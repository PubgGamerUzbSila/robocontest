import React from "react";
import styles from "./Contest.module.css";

function Contest() {
  return (
    <>
      <div>
        <div className='container1'>
          <div className={styles.homeTop}>1</div>
          <div className={styles.homeBottom}>
            <div className={styles.homeBottomLeft}>2.1</div>
            <div className={styles.homeBottomRight}>2.2</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contest;
