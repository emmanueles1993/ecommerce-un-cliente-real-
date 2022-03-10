import React from "react";
import Itemcard from "./Itemcard";
import Data from "./Data";
import GalleryReact from "./GalleryReact";

const Menu = () => {
  return (
    <>
      <h1 className="text-center mt-3"></h1>
      <section className="py-4 container">
        <div className="row justify-content-center">
          <GalleryReact />
        </div>
      </section>
    </>
  );
};

export default Menu;
