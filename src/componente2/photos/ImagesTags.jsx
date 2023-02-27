import React, { useContext } from "react";
import { contexto } from "../contexto/DataContext";

const ImagesTags = ({ photo }) => {
  const {
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
    //functions
    searchImages,
    fetchTags,
  } = useContext(contexto);
  return (
    <div className="img-box">
      <img className="img" src={photo.urls.regular} />
      {photo.alt_description ? (
        <p>
          {" "}
          {photo.alt_description.toUpperCase()[0] +
            photo.alt_description.substring(1)}
        </p>
      ) : (
        <p>Description: Not found</p>
      )}
      <div className="img-box-items">
        <div className="items-box">
          <h5 className="font-7 img-texts">
            Camara: no disponible
            {/* <span className="font-3 img-texts">{photo.exif.name}</span> */}
          </h5>
          <h5 className="font-7 img-texts">
            {photo.user.location ? (
              <p>Location: {photo.user.location}</p>
            ) : (
              <p>Location: Not found</p>
            )}{" "}
            {/* <span className="font-3 img-texts">{photo.location.name}</span> */}
          </h5>
        </div>
        <div className="cont-tags">
          {photo.tags.map((tag, index) => (
            <a
              className="tags"
              key={index}
              onClick={() => {
                setSearchValueTag(tag.title);
              }}
            >
              {tag.title}
            </a>
          ))}
        </div>
      </div>
      {/* <p className="img-texts">
        Tags:{photo.tags[0].title} <br /> {photo.tags[1].title}
      </p> */}
    </div>
  );
};

export default ImagesTags;
