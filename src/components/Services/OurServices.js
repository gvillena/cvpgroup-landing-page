import React from "react";
import { Link } from "react-router-dom";
import ServiceItem from "./ServiceItem";

const OurServices = () => {
  return (
    <>
      {/* <!-- service area start  --> */}
      <div id="our-services" className="tp-service-ara grey-bg-4 pt-130 pb-140">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-section-wrapper text-center mb-70">
                <span className="tp-section-subtitle mb-25">TE ASESORAMOS DE FORMA SIMPLE</span>
                <h2 className="tp-section-title">Nuestros Servicios</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <ServiceItem
              icon="ServicesAccounting"
              title="Asesoria Contable"
              desc="Asesoramiento y gestión en el cumplimiento y declaracion de obligaciones tributarias ante la SUNAT"
            />
            <ServiceItem
              icon="ServicesLegal"
              title="Asesoria Legal"
              desc="Ofrecemos servicios legales de calidad en materia de derecho civil, derecho penal y derecho comercial."
            />
            <ServiceItem
              icon="ServicesLabour"
              title="Asesoria Laboral"
              desc="Brindamos asesoria a empleadores y trabajadores sobre contratacion, normativa, seguridad, entre otros."
            />
            <ServiceItem
              icon="ServicesCustoms"
              title="Asesoria Aduanera"
              desc="Asesoramos a nuestros clientes en toda clase de operaciones aduaneras, valorizacion y de comercio exterior"
            />
            <div className="text-center mt-60">
              <Link to="/service" className="tp-btn-border">
                All Service
                <span>
                  <svg
                    width="22"
                    height="8"
                    viewBox="0 0 22 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.3536 4.35356C21.5488 4.15829 21.5488 3.84171 21.3536 3.64645L18.1716 0.464468C17.9763 0.269205 17.6597 0.269205 17.4645 0.464468C17.2692 0.65973 17.2692 0.976312 17.4645 1.17157L20.2929 4L17.4645 6.82843C17.2692 7.02369 17.2692 7.34027 17.4645 7.53554C17.6597 7.7308 17.9763 7.7308 18.1716 7.53554L21.3536 4.35356ZM-4.37114e-08 4.5L21 4.5L21 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                      fill="currentColor"
                    />
                  </svg>
                  <svg
                    width="22"
                    height="8"
                    viewBox="0 0 22 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.3536 4.35356C21.5488 4.15829 21.5488 3.84171 21.3536 3.64645L18.1716 0.464468C17.9763 0.269205 17.6597 0.269205 17.4645 0.464468C17.2692 0.65973 17.2692 0.976312 17.4645 1.17157L20.2929 4L17.4645 6.82843C17.2692 7.02369 17.2692 7.34027 17.4645 7.53554C17.6597 7.7308 17.9763 7.7308 18.1716 7.53554L21.3536 4.35356ZM-4.37114e-08 4.5L21 4.5L21 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- service area end  -->   */}
    </>
  );
};

export default OurServices;
