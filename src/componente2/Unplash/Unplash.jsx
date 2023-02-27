import React, { useContext } from "react";
import ImageContainer from "../img-container/ImageContainer";
import Input from "../Input/Input";
import "./unplash.css"
import { contexto } from "../contexto/DataContext";
const Unplash = () => {
  const {
    photos,
    seachValue,
    loading,
    photosRandom,
    variable,
    page,
  } = useContext(contexto);

  return (
    <div className="main-box">
      <Input page={page} photos={photos}/>
      <ImageContainer />
    </div>
  );
};

export default Unplash;
