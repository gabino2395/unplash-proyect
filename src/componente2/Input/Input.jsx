//hooks
import React, { useContext } from "react";
//context
import { contexto } from "../contexto/DataContext";
//componentes
import "./Input.css";
const Input = () => {
  const {
  
    setSearchValue,
    searchImages,

  } = useContext(contexto);
 

  return (
    <div className="search-input-main">
    <div className="search-input-box">
      <input
        className="main-input"
        type="text"
        placeholder="Buscar..."
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            searchImages();
          }
        }}
      />
      <i className="bi bi-search icon-search"></i>
    </div>
    </div>
  );
};

export default Input;
