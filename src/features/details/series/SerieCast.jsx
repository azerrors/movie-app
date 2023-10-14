const BASE_VIDEO = "https://www.youtube.com/embed/";


function SerieCast({cast}) {
  const BASE_IMAGE = "https://image.tmdb.org/t/p/w500";
  const { profile_path: image } = cast;
  return (
    <li>
      {image && (
        <img
          src={`${BASE_IMAGE}${image}`}
          alt=""
          className="h-32 w-24 cursor-pointer rounded-lg transition-all duration-200 hover:scale-[1.01]"
        />
      )}
    </li>
  );
}

export default SerieCast;
