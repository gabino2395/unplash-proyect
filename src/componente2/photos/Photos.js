import React from "react";
import photos from "../mocks/data.json";
const Photos = ({ photo }) => {
  return (
    <div>
      <img className="img" src={photo.urls.regular} />
      <h5 className=" img-texts font-3-italic">
        {/* {photo.alt_description.toUpperCase()[0] +
          photo.alt_description.substring(1)} */}
      </h5>
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
      <div className="cont-tags">
        {photo.tags.map((tag, index) => (
          <a className="tags" key={index}>
            {tag.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Photos;
