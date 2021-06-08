const ImagesGrid = ({ imagesList, handleLoadMore, nextCursor }) => {
  return (
    <>
      <div className="image-grid">
        {imagesList.map((img, index) => (
          <img
            key={`${img.asset_id}-${index}`}
            src={img.url}
            alt={img.public_id}
          />
        ))}
      </div>
      <div className="footer">
        {nextCursor && <button onClick={handleLoadMore}>Load More</button>}
      </div>
    </>
  );
};

export default ImagesGrid;
