function MovieGenre({ genre }) {
  return <div className="border md:text-lg text-[8px] rounded-lg md:p-2 p-1 tracking-widest bg-gray-900 text-white font-bold">{genre.name}</div>;
}

export default MovieGenre;
