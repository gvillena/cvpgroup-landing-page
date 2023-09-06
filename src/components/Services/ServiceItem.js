import React from "react";
import { Link } from "react-router-dom";
import SvgIcon from "../common/SvgIcon";

const ServiceItem = ({ icon, title, desc }) => {
  return (
    <div className="col-xl-3 col-md-6">
      <div className="tp-service text-center white-bg pt-60 pb-45 pl-25 pr-25 mb-30">
        <div className="tp-service__icon">
          <SvgIcon name={icon} />
        </div>
        <h3 className="tp-service__title pt-40 pb-25">
          <Link to="/service-details">{title}</Link>
        </h3>
        <p>{desc}</p>
        <Link className="tp-btn-sm-black" to="/service-details">
          <span>
            <svg
              width="36"
              height="8"
              viewBox="0 0 36 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.3536 4.35355C35.5488 4.15829 35.5488 3.84171 35.3536 3.64644L32.1716 0.464463C31.9763 0.269201 31.6597 0.269201 31.4645 0.464463C31.2692 0.659726 31.2692 0.976308 31.4645 1.17157L34.2929 4L31.4645 6.82842C31.2692 7.02369 31.2692 7.34027 31.4645 7.53553C31.6597 7.73079 31.9763 7.73079 32.1716 7.53553L35.3536 4.35355ZM4.37114e-08 4.5L35 4.5L35 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z"
                fill="currentColor"
              />
            </svg>
            <svg
              width="36"
              height="8"
              viewBox="0 0 36 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.3536 4.35355C35.5488 4.15829 35.5488 3.84171 35.3536 3.64644L32.1716 0.464463C31.9763 0.269201 31.6597 0.269201 31.4645 0.464463C31.2692 0.659726 31.2692 0.976308 31.4645 1.17157L34.2929 4L31.4645 6.82842C31.2692 7.02369 31.2692 7.34027 31.4645 7.53553C31.6597 7.73079 31.9763 7.73079 32.1716 7.53553L35.3536 4.35355ZM4.37114e-08 4.5L35 4.5L35 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z"
                fill="currentColor"
              />
            </svg>
          </span>
          Leer Mas
        </Link>
      </div>
    </div>
  );
}

export default ServiceItem;