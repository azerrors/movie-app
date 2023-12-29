import List from "../../../ui/List";

function MovieSimilar({ movie }) {
  return (
    <ul>
      <List type="list5" data={movie} />
    </ul>
  );
}

export default MovieSimilar;
