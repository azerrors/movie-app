function MovieGenre({ genre }) {
  const {name} = genre
  return (
    <div className="text-stone-200/70">
      {name},
    </div>
  );
}

export default MovieGenre;
