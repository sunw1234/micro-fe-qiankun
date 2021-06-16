import React from 'react';
import { Link } from "react-router-dom";

function User() {
  return (
    <div>
      成功加载子应用2！
      <Link to="/about">222</Link>
    </div>
  );
}

export default User;
