import React from "react";
import Itemcard from "./Itemcard";
import Data from "./Data";

const Menu = () => {
  return (
    <>
      <h1 className="text-center mt-3">Nuestro menu</h1>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {Data.productData.map((item, index) => {
            return (
              <Itemcard
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
                item={item}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Menu;
