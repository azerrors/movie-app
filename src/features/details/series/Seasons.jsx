import { useQuery } from "@tanstack/react-query";
import { useSerie } from "../../../contexts/SerieContext";
import { getEpisodes } from "../../../services/tvSeries";
import Button from "../../../ui/Button";

function Seasons({ seasons, id }) {
  const { name } = seasons;
  const { dispatch } = useSerie();
  const newName = name.match(/\d+$/);

  const { data } = useQuery({
    queryKey: ["getEpisodes", id, newName],
    queryFn: () => getEpisodes(id, newName),
  });

  function openWindow() {
    dispatch({
      type: "showWindow",
      payload: { input: id, episodes: data },
    });
  }

  return (
    <div>
      <Button type="primary" onClick={openWindow}>
        {name}
      </Button>
    </div>
  );
}

export default Seasons;
