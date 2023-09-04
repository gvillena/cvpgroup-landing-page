import React from "react";
import { Link } from "react-router-dom";

const Menus = () => {
  return (
    <ul>
      <li>
        <Link to="/">Inicio</Link>
      </li>
      <li>
        <Link to="/about">Nosotros</Link>
      </li>
      <li className="has-dropdown">
        <Link to="/team">Servicios</Link>
        <ul className="submenu">
          <li>
            <Link to="/team">Asesoria Tributaria</Link>
          </li>
          <li>
            <Link to="/team-details">Asesoria Legal</Link>
          </li>
          <li>
            <Link to="/service">Asesoria Laboral</Link>
          </li>
          <li>
            <Link to="/service-details">Asesoria Aduanera</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/about">RESERVE UNA CITA</Link>
      </li>
    </ul>
  );
};

export default Menus;
