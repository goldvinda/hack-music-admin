import React from "react";
import { Link, Outlet } from "react-router-dom";
function Componente() {
  return (
    <div className="d-flex">
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
        harum?
      </div>
      <div>
        <Outlet />
      </div>
      <Link to="box1">Box 1</Link>
      <Link to="box2">Box 2</Link>
    </div>
  );
}

export default Componente;
