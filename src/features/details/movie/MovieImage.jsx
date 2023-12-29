const BASE_IMAGE = "https://image.tmdb.org/t/p/w500";

function MovieImage({ image }) {
  return <img src={`${BASE_IMAGE}${image.file_path}`} alt=""  className="w-full"/>;
}

export default MovieImage;
