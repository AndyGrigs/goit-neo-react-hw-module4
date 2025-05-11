import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";
import ErrorMessage from "./components/ErrorMessage";
import Loader from "./components/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn";

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
        console.log(response)
        
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

  return (
    <div>
      <SearchBar onSearch={handleSearchQuery} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={null} />
      {loading && <Loader />}
      {images.length>0&& <LoadMoreBtn onClick={handleLoadMore}/>}
    </div>
  );
};

export default App;
