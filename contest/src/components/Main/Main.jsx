import React from "react";
import Contest from "../Contest/Contest";

function Main() {
  return (
    <div className='hechNarsa'>
      <div className='container1'>
        <Contest />
        <div className='AsosiyPastgiQism'>
          <p>
            Contest Copyrighted © 2020-2030 by{" "}
            <a href='#' className='teamSpan'>
              Contest Team
            </a>
          </p>

          <button className='telegramChannel'>
            Yangiliklardan xabador bo'lish uchun Telegram kanalimizga obuna
            bo'ling
          </button>
          <div className='themeColorButtons'>
            <button className='themeColorButtons1'> </button>
            <button className='themeColorButtons2'> </button>
            <button className='themeColorButtons3'> </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
