//hooks
import React, { useContext } from "react";
//components
import ImageContainer from "../img-container/ImageContainer";
import Input from "../Input/Input";
//css
import "./unplash.css"
//context
import { contexto } from "../contexto/DataContext";
const Unplash = () => {
  const {
    photos,
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
