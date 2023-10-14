import React from "react";
import List from "./List";
import Button from "./Button";

function HomeFilmContainer({ listType, buttonType, onClick, listData, text }) {
  const h3Style =
    "text-white uppercase text-lg tracking-widest md:text-2xl border-b border-stone-300 shadow-sm p-3 mt-5 md:mt-20";

  return (
    <div>
      <h3 className={h3Style}>{text}</h3>
      <List type={listType} upcomingMovie={listData} />
      <div className=" mr-5 flex  justify-end ">
        <Button type={buttonType} onClick={onClick}>
          More
        </Button>
      </div>
    </div>
  );
}

export default HomeFilmContainer;
