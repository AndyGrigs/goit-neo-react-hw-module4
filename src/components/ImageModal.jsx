import { useEffect } from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");

const ImageModal = ({ image, onClose }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  if (!image) return null;

  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      className="flex items-center justify-center h-full"
      overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
    >
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full">
        <img
          src={image.urls.regular}
          alt={image.alt_description || "Unsplash Image"}
          className="w-full h-96 object-cover rounded-md"
        />
        {image.description && (
          <p className="mt-4 text-gray-700 text-sm">{image.description}</p>
        )}
        <p className="mt-2 text-gray-600 text-sm">By: {image.user.name}</p>
        <p className="mt-1 text-gray-600 text-sm">Likes: {image.likes}</p>
        <button
          onClick={onClose}
          className=" block w-1/3 mx-auto mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default ImageModal;
