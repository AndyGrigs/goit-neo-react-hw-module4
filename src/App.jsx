import { useEffect, useState } from "react";
import { ImagesIcon, ImageOffIcon } from "lucide-react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";
import ErrorMessage from "./components/ErrorMessage";
import Loader from "./components/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn";
import ImageModal from "./components/ImageModal";
import Footer from "./components/Footer";

const App = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          "https://api.unsplash.com/search/photos",
          {
            params: {
              query: query,
              page: page,
              per_page: 42,
            },
            headers: {
              Authorization: `Client-ID ${import.meta.env.VITE_API_KEY}`,
            },
          }
        );

        const data = response.data;
        setImages((prev) =>
          page === 1 ? data.results : [...prev, ...data.results]
        );
      } catch (error) {
        console.error("Error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearchQuery = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => setPage((prev) => prev + 1);
  const openModal = (image) => {
    setCurrentImage(image);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(true);
    setCurrentImage(null);
  };
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <SearchBar onSearch={handleSearchQuery} />
        {error && <ErrorMessage message={error} />}
        {!query && images.length === 0 && (
          <div className="flex flex-col items-center justify-center h-96">
            <ImagesIcon className="w-24 h-24 mb-4 text-yellow-300" />
            <p className="text-gray-500 text-lg">Start searching for images!</p>
          </div>
        )}
        {query && images.length === 0 && !loading && (
          <div className="flex flex-col items-center justify-center h-96">
            <ImagesIcon className="w-24 h-24 mb-4 text-yellow-300" />
            <p className="text-gray-500 text-lg">
              No photos found for "{query}"
            </p>
          </div>
        )}
        {query && <ImageGallery images={images} onImageClick={openModal} />}
        {loading && <Loader />}

        <div className="flex justify-center py-7">
          {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
        </div>
        {showModal && <ImageModal image={currentImage} onClose={closeModal} />}
      </div>
      <Footer />
    </div>
  );
};

export default App;
