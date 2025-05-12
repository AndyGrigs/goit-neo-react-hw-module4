import { useState } from "react";
import { toast } from "react-hot-toast";

const SearchBar = ({ onSearch }) => {
  const [value, setValue] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") {
      toast.error("Введіть текст для пошуку!");
      return;
    }

    onSearch(value);
    setValue("");
  };
  return (
    <header className="bg-yellow-400 p-4">
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center space-x-2"
      >
        <input
          className="px-4 py-2 border rounded w-1/5 focus:outline-none"
          type="text"
          placeholder="Search images and photos"
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="bg-amber-500 px-4 py-2 border rounded-md hover:shadow-md transition-all"
          type="submit"
        >
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
