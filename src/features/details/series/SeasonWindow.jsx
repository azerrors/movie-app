import List from "../../../ui/List";

function SeasonWindow({ id, data }) {
  const { episodes } = data ? data : {};

  return (
    <div className="mt-2 text-lg uppercase text-sky-200/40">
      {data?.name}
      <ul>
        <List type="list4" data={episodes} />
      </ul>
    </div>
  );
}

export default SeasonWindow;
