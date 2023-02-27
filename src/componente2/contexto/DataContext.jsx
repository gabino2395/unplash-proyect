import React from "react";
import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const contexto = createContext();
const Provider = contexto.Provider;

import { API_KEY3, API_KEY2, API_KEY } from "../Endpoints/Endpoints";

export const DataContext = ({ children }) => {
  //arrays de imagenes
  const [photos, setPhotos] = useState([]);
  const [photosRandom, setPhotosRandom] = useState([]);
  const [photosTags, setphotosTags] = useState([]);
  //valores de input
  const [seachValue, setSearchValue] = useState("");
  const [seachValueTag, setSearchValueTag] = useState("");


  //paginados para scroll
  const [page, setPage] = useState(1);
  const [pageRandom, setPageRandom] = useState(1);
  const [pageTag, setPageTag] = useState(1);

  //estado variable para condicionar que tipo de imagen renderizar
  const [variable, setVariable] = useState(1);
  const [loading, setLoading] = useState(false);

  /* funcion para busqueda de imagenes */
  const searchImages = async () => {
    setVariable(1);

    let URL = `https://api.unsplash.com/search/photos/?client_id=${API_KEY2}&query=${seachValue}&per_page=6&`;

    const response = await fetch(URL);
    const data = await response.json();
    setPhotos(data.results);
    console.log(data.results);
  };

  /* scroll  funcion para buscar si cambia de pagina */
  useEffect(() => {
    const searchImages = async () => {
      let URL = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${seachValue}&per_page=6&page=${page}`;

      const response = await fetch(URL);
      const data = await response.json();
      setPhotos((datosPrev) => datosPrev.concat(data.results));
    };
    searchImages();
  }, [page]);

  /* funcion para busqueda random cuando inicia la pagina y vaciamos el input */

  useEffect(() => {
    if (seachValue === "") {
      const randomImages = async () => {
        setVariable(2);

        let urlRandom = `https://api.unsplash.com/photos/random?count=6&client_id=${API_KEY2}`;

        const response = await fetch(urlRandom);
        const data = await response.json();
        setPhotosRandom(data);
      };
      randomImages();
    }
  }, [seachValue]);

  /* funcion para concatenar paginas del infinte scroll */
  useEffect(() => {
    if (seachValue === "" || seachValue === null) {
      const randomImages = async () => {
        let urlRandom = `https://api.unsplash.com/photos/random?count=6&client_id=${API_KEY2}&page=${pageRandom}`;

        const response = await fetch(urlRandom);
        const data = await response.json();
        setPhotosRandom((datosPrev) => datosPrev.concat(data));
      };
      randomImages();
    }
  }, [pageRandom]);

  //tags
  useEffect(() => {
    if (!seachValue == "") {
      const fetchTags = async () => {
        setVariable(3);
        let URL = `https://api.unsplash.com/search/photos/?client_id=${API_KEY2}&query=${seachValueTag}&per_page=6`;
        const response = await fetch(URL);
        const data = await response.json();
        setphotosTags(data.results);
      };
      fetchTags();
    }
  }, [seachValueTag]);

  //tags scroll
  useEffect(() => {
    //if(!valor==''){
    const fetchTags = async () => {
      let URL = `https://api.unsplash.com/search/photos/?client_id=${API_KEY2}&query=${seachValueTag}&per_page=6&page=${pageTag}`;
      const response = await fetch(URL);
      const data = await response.json();
      setphotosTags((datosPrev) => datosPrev.concat(data.results));
    };
    fetchTags();
    //}
  }, [pageTag]);
  return (
    <Provider
      value={{
        photos,
        photosRandom,
        photosTags,

        seachValue,
        seachValueTag,
        setSearchValue,
        setSearchValueTag,
        
        page,
        setPage,
        pageRandom,
        setPageRandom,
        pageTag,
        setPageTag,


        loading,
        variable,
        searchImages,
      }}
    >
      {children}
    </Provider>
  );
};
