import React from "react";
import ImageCard from "./ImageCard";

const ImageGallery = ({ images, onImageClick }) => {

  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {images.map((img) => (
        <li key={img.id}>
          <ImageCard image={img} onClick={() => onImageClick(img)} className="overflow-hidden rounded-lg shadow-md"/>
        </li>
      ))}
    </ul>
    
  );
};

export default ImageGallery;


