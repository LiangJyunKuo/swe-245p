import "./Sidebar.css";

// External Libraries

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="sidenav">
        <Link to="/">React Intro</Link>
        <Link to="exampledataview">Component</Link>
      </div>
    </>
  );
}

export default Sidebar;
