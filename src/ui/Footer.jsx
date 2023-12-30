import React from "react";

function Footer() {
  return (
    <div className="border-t border-sky-200/20 p-5">
      <div className="flex flex-col rounded-xl border-b border-sky-200/20 pb-5 md:flex-row md:justify-between">
        <div className="flex justify-center  gap-5 text-sky-200/60 md:justify-end">
          <div>2022 Movies</div>
          <div>2023 Movies</div>
          <div>2022 Series</div>
          <div>2023 Series</div>
        </div>
        <div className="mt-5 flex justify-between md:justify-end gap-5 text-sky-200/60 md:mt-0">
          <div>Watch Movies</div>
          <div>Watch Series</div>
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-10 md:justify-around   truncate md:flex-row ">
        <div>
          <h3 className="text-lg text-sky-200/50">Popular Movies</h3>
          <div className="text-md grid grid-cols-2 gap-x-16 p-2 text-sky-200/40">
            <span>Gladiator</span>
            <span>The Godfather</span>
            <span>The Dark Knight</span>
            <span>Fight Club</span>
            <span>12 Angry Men</span>
            <span> Se7en</span>
            <span>Back to the Future</span>
            <span>The Matrix</span>
            <span>Parasite</span>
            <span> Forrest Gump</span>
            <span> Interstellar</span>
            <span> The Green Mile</span>
          </div>
        </div>

        <div>
          <h3 className="text-lg text-sky-200/50">Popular Series</h3>
          <div className="text-md grid grid-cols-2 gap-x-16 p-2 text-sky-200/40">
            <span>Game of Thrones</span>
            <span>Stranger Things</span>
            <span>Planet Earth</span>
            <span>Mad Men</span>
            <span>Chernobyl</span>
            <span> Fleabag</span>
            <span>The Walking Dead</span>
            <span>The X-Files</span>
            <span>Breaking Bad</span>
            <span>Teen Wolf</span>
            <span>Supernatural</span>
            <span> The Vampire Diaries</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
