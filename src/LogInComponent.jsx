

import { useState } from "react";


function LogInComponent({ type }) {
  return (
    <input
      type={type}
      placeholder={type === "text" ? "輸入帳號" : "輸入密碼"}
    />
  );
}

export default LogInComponent;
