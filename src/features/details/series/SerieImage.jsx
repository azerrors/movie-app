const BASE_IMAGE = "https://image.tmdb.org/t/p/w500";

function SerieImage({ image }) {
  return (
    <div>
      <img src={`${BASE_IMAGE}${image.file_path}`} alt="" />
    </div>
  );
}

export default SerieImage;
