const BASE_VIDEO = "https://www.youtube.com/embed/";

function MovieVideoImage({ video }) {
  return (
    <div className="relative md:w-full md:h-96 w-80  h-72">
      <iframe
        className="absolute top-0 left-0"
        height="100%"
        width="100%"
        src={`${BASE_VIDEO}${video.key}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title="Movie Video"
      ></iframe>
    </div>
  );
}

export default MovieVideoImage;
