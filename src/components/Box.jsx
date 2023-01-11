import React from "react";

import "./box.css"

function Box({value, onCLick}){
  const style = value === "X" ? "box x" : "box o";

  return (

  <button className={style} onClick={onCLick}> {value}</button>
  )
}

export default Box;