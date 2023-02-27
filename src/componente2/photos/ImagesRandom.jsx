import React from 'react'

const ImagesRandom = ({photo}) => {
  return (
    <div className="img-box">
    <img className="img img-random" src={photo.urls.regular} />
    <h5 className=" img-texts font-3-italic">
      {/* {photo.alt_description.toUpperCase()[0] +
        photo.alt_description.substring(1)} */}
        {photo.alt_description}
    </h5>
    <h5 className="font-7 img-texts">
      Camara:
      <span className="font-3 img-texts">{photo.exif.name?photo.exif.name:"no disponible"}</span>
    </h5>
    <h5 className="font-7 img-texts">
      Location:
      <span className="font-3 img-texts">{photo.location.name? photo.location.name:"no disponible"}</span>
    </h5>
  
  </div>
  )
}

export default ImagesRandom