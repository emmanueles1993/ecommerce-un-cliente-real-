import React, { useState } from "react";
import Data from "./Data";
import Itemcard from "./Itemcard";

const GalleryReact = () => {
  const [items, setItems] = useState(Data.productData);
  const filterItem = (categItem) => {
    const updatedItems = Data.productData.filter((curElem) => {
      return curElem.category === categItem;
    });
    if (updatedItems == null) {
      setItems(null);
    }
    setItems(updatedItems); 
  };

  return (
    <>
      <h1 className="mt-5 text-center main-heading">Nuestro Menu</h1>
      <hr />
      <div className="menu-tabs container">
        <div className="menu-tab d-flex justify-content-around">
          <button
            className="btn btn-warnig"
            onClick={() => setItems(Data.productData)}
          >
            Todos
          </button>

          <button
            className="btn btn-warnig"
            onClick={() => filterItem("Entradas y Desayunos")}
          >
            Entradas y Desayunos
          </button>
          <button
            className="btn btn-warnig"
            onClick={() => filterItem("Carnes y Pescados")}
          >
            Carnes y Pescados
          </button>
          <button
            className="btn btn-warnig"
            onClick={() => filterItem("Bebidas")}
          >
            Bebidas
          </button>
        </div>
      </div>
      {/* mi secion de items principales */}
      <div className="menu-items container-fluid mt-5">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5">
              {items != null ? (
                items.map((elem) => {
                  const { id, title, img, desc, price } = elem;
                  return (
                    <Itemcard
                      img={img}
                      title={title}
                      desc={desc}
                      price={price}
                      item={elem}
                      key={id}
                    />
                  );
                })
              ) : (
                <p>no hay datos</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryReact;
