import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useCart } from "react-use-cart";

const ModalCart = ({ show, handleClose }) => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  const sendMessage = () => {
    let msg = [];
    for (let item of items) {
      let textopedido = ` ${item.title}(${item.quantity})`;
      msg += textopedido;
    }
    window.open(
      `https://api.whatsapp.com/send?phone=${"3013771875"}&text=${"Hola quisiera pedir: "}${msg} precioTotal:${cartTotal}`
    );
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Productos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <section className="py-4 container">
            <div className="row justify-content-center">
              <div className="col-12">
                <h5>
                  Carrito({totalUniqueItems})Cantidad: ({totalItems})
                </h5>
                <table className="table table-light table-hover m-0">
                  <tbody>
                    {items.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <img src={item.img} style={{ height: "6rem" }} />
                          </td>
                          <td>{item.title}</td>
                          <td>{item.price}</td>
                          <td>Cantidad({item.quantity})</td>
                          <td>
                            <button
                              className="btn  btn-info ms-2"
                              onClick={() =>
                                updateItemQuantity(item.id, item.quantity - 1)
                              }
                            >
                              -
                            </button>
                            <button
                              className="btn  btn-info ms-2"
                              onClick={() =>
                                updateItemQuantity(item.id, item.quantity + 1)
                              }
                            >
                              +
                            </button>
                            <button
                              className="btn btn-danger ms-2"
                              onClick={() => removeItem(item.id)}
                            >
                              Remover
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="col-auto ms-auto">
                <h2>precio total: $ {cartTotal}</h2>
              </div>
              <div className="col-auto">
                <button
                  className="btn btn-danger ms-2"
                  onClick={() => emptyCart()}
                >
                  limpiar carro
                </button>
                <button className="btn btn-primary ms-2" onClick={sendMessage}>
                  compra ahora
                </button>
              </div>
            </div>
          </section>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCart;
