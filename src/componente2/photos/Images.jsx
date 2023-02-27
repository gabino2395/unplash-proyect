//hooks
import React, { useContext, useState, useEffect } from "react";
import { contexto } from "../contexto/DataContext";
// import photos from "../mocks/data.json";
import "./Images.css";
const API_KEY2 = "JWFm60gGKHwTtB71tEdSRDp_CPyUNvKo2iGyWhgcBlQ";

const Images = ({ photo }) => {
  const [valorTag, setValorTag] = useState("");
  const [pageTag, setPageTag] = useState(1);
  const [photosTags, setphotosTags] = useState([]);

  //funcion para mostrar por tag
  useEffect(() => {
    const fetchImgsTags = async () => {
      let URL = `https://api.unsplash.com/search/photos/?client_id=${API_KEY2}&query=${valorTag}&per_page=${pageTag}`;
      const response = await fetch(URL);
      const data = await response.json();
      setphotosTags(data.results);
      // setResultados((datosPrev) => datosPrev.concat(data));

      console.log(data.results);
    };
    fetchImgsTags();
  }, [valorTag, pageTag]);

  const { setSearchValueTag } = useContext(contexto);
  // console.log(photos)
  return (
    <>
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
              Camera:not found{" "}
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
    </>
  );
};

export default Images;
