import React from "react";
import ImageCard from "./ImageCard";

const ImageGallery = ({ images, onImageClick }) => {
  console.log(images)
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {images.map((img) => (
        <li key={img.id}>
          <ImageCard image={img} onClick={() => onImageClick()} />
        </li>
      ))}
    </ul>
    
  );
};

export default ImageGallery;

/*

<ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
    {images.map((img) => (
        <li key={img.id} class="relative group overflow-hidden rounded-lg shadow-md">
            <ImageCard 
                image={img} 
                onClick={() => onImageClick()} 
                class="w-full h-auto transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
        </li>
    ))}
</ul>

 */
