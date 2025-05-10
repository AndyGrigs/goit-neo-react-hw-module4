import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";


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
              Authorization:
                `Client-ID ${import.meta.env.VITE_API_KEY}`,
            },
          }
        );
        setImages(response.data.results);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearchQuery = (newQuery) => {
    setQuery(newQuery)
    setPage(1)
  }

  console.log(images);
  return (
    <div>
      <SearchBar onSearch={handleSearchQuery} />
      <ImageGallery images={images} onImageClick={null} />
    </div>
  );
};

export default App;