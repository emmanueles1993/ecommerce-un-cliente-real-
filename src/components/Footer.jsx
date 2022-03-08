import React from "react";
import "./Footer.css";
const Footer = () => {
  let numeros = [
    { name: "Luis", number: "+573004963182" },
    { name: "Adrian", number: "+573004963182" },
    { name: "andrew", number: "+573004963182" },
  ];
  return (
    <footer className="footer text-center footer-expand-lg text-lg-start footer-light starmarine">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase text-white">Contactanos</h5>
            <ul className="list-unstyled mb-0">
              {numeros.map((numero, index) => {
                const { name, number } = numero;
                return (
                  <li key={index}>
                    <a
                      className="text-white"
                      href={`https://api.whatsapp.com/send?phone=${number}`}
                    >
                      contacta a {name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase text-white">Formas de pago</h5>
            <ul className="list-unstyled mb-0">
              <li className="text-white">Nequi: 3004963182</li>
              <li className="text-white">A la entrega</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center text-white p-3 footer-copyright">
        Diseñado Por Emmanuel Estupiñan ©Todos Los Derechos Reservados 2022
      </div>
    </footer>
  );
};

export default Footer;
