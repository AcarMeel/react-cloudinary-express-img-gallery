import { useState, useEffect } from "react";
import "./App.css";
import { getImages, searchImages } from "./api";
import ImagesGrid from "./ImagesGrid";
import Search from "./Search";

const App = () => {
  const [imagesList, setImagesList] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getImages();
      setImagesList(data.resources);
      setNextCursor(data.next_cursor);
    };

    fetchData();
  }, []);

  const handleLoadMore = async () => {
    const data = await getImages(nextCursor);
    setImagesList((prev) => [...prev, ...data.resources]);
    setNextCursor(data.next_cursor);
  };

  const handleFormSubmit = async (event) => {
		event.preventDefault();

		const data = await searchImages(searchValue);
		setImagesList(data.resources);
		setNextCursor(data.next_cursor);
	};

  return (
    <>
      <Search handleFormSubmit={handleFormSubmit} setSearchValue={setSearchValue} searchValue={searchValue} />
      <ImagesGrid
        imagesList={imagesList}
        handleLoadMore={handleLoadMore}
        nextCursor={nextCursor}
      />
    </>
  );
};

export default App;
