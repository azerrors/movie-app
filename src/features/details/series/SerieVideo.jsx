const BASE_VIDEO = "https://www.youtube.com/embed/";

function SerieVideo({ video }) {
  return (
    <div className="relative h-72 w-80 md:h-96  md:w-full">
      <iframe
        className="absolute left-0 top-0"
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

export default SerieVideo;
