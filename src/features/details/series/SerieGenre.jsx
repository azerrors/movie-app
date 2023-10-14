function SerieGenre({ genre }) {
  return (
    <div className="rounded-lg border bg-gray-900 p-2 font-bold tracking-widest text-white">
      {genre.name}
    </div>
  );
}

export default SerieGenre;
