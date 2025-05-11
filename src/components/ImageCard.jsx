
const ImageCard = ({ image, onClick }) => {
  return (
    <div onClick={onClick}>
      <img
        src={image.urls.small} // Use 'small' or 'regular' for better image quality
        alt={image.alt_description || "Unsplash image"} 
        loading="lazy"
        className="h-48 object-cover w-full"
      />
    </div>
  );
};

export default ImageCard;
