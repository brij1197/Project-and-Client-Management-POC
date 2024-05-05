export const Spinner = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="spinning-grow text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
