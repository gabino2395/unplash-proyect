import React, { useState, useEffect, useContext } from "react";
//css
import "./ImgContainer.css";
//components
import Images from "../photos/Images";
//fake data
import InfiniteScroll from "react-infinite-scroll-component";
import ImagesRandom from "../photos/ImagesRandom";
import { contexto } from "../contexto/DataContext";
import ImagesTags from "../photos/ImagesTags";
import { motion } from "framer-motion";

const ImageContainer = () => {
  const {
    photos,
    photosRandom,
    photosTags,

    page,
    setPage,
    pageRandom,
    setPageRandom,
    pageTag,
    setPageTag,

    variable,
  } = useContext(contexto);

  return (
    //   <motion.div
    //   initial={{ y: "-100px" }}
    //   transition={{ type: "spring", stiffness: 200 }}
    //   animate={{ y: "5px" }}
    // >
    <motion.div
      initial={{ y: "-200px" }}
      transition={{ type: "spring", stiffness: 600 }}
      animate={{ y: "15px" }}
      
    >
      <div className="img-container">
        {variable === 1 && (
          <InfiniteScroll
            className="img-container"
            dataLength={photos.length}
            hasMore={true}
            next={() => setPage(page + 1)}
          >
            {photos.map((photo,index) => {
              return <Images key={index} photo={photo} />;
              // {console.log(photo)}
            })}
          </InfiniteScroll>
        )}

        {variable === 2 && (
          <InfiniteScroll
            className="img-container"
            dataLength={photosRandom.length}
            hasMore={true}
            next={() => setPageRandom(pageRandom + 1)}
          >
            {photosRandom.map((photo) => {
              return <ImagesRandom key={photo.id} photo={photo} />;
              // {console.log(photo)}
            })}
          </InfiniteScroll>
        )}

        {variable === 3 && (
          <InfiniteScroll
            className="img-container"
            dataLength={photosTags.length}
            hasMore={true}
            next={() => setPageTag(pageTag + 1)}
          >
            {photosTags.map((photo) => {
              return <ImagesTags key={photo.id} photo={photo} />;
              // {console.log(photo)}
            })}
          </InfiniteScroll>
        )}
      </div>
    </motion.div>
  );
};

export default ImageContainer;