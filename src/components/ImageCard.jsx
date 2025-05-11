
const ImageCard = ({ image, onClick }) => {
  return (
    <div onClick={onClick}>
      <img
        src={image.urls.small} // Use 'small' or 'regular' for better image quality
        alt={image.alt_description || "Unsplash image"} 
        loading="lazy"
     
      />
    </div>
  );
};

export default ImageCard;

/**<div class="relative group">
  <img class="w-full h-auto rounded-lg shadow-md" src="image.jpg" alt="Gallery Image">
  <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
    <p class="text-white text-lg font-semibold">Beautiful Scenery</p>
  </div>
</div> */