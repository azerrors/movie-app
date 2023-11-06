import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import {
  getPeopleDetail,
  getPeopleMovieCredits,
} from "../../../services/peopleApi";
import Header from "../../../ui/Header";
import Button from "../../../ui/Button";
import { useNavigate } from "react-router-dom";
import Popout from "./PeopleBiography";
import List from "../../../ui/List";
import { BiMovie } from "react-icons/bi";
import Loader from "../../../ui/Loader";
const BASE_IMAGE = "https://image.tmdb.org/t/p/w500";

function PeopleDetailSection({ peopleId }) {
  const { data: peopleDetail, isLoading: peopleDetailLoading } = useQuery({
    queryKey: ["peopleDetail", peopleId],
    queryFn: () => getPeopleDetail(peopleId),
  });
  const { data: peopleMovieCredits } = useQuery({
    queryKey: ["peopleMovieCredits", peopleId],
    queryFn: () => getPeopleMovieCredits(peopleId),
  });

  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [length, setLength] = useState(8);

  if (peopleDetailLoading) {
    return (
      <div>
        <div className="mt-10 flex h-screen items-center justify-center">
          <Loader />
        </div>
      </div>
    );
  }

  const {
    profile_path,
    birthday,
    place_of_birth,
    name,
    deathday,
    known_for_department,
    biography,
    popularity,
  } = peopleDetail ? peopleDetail : [];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const newMovieArray = peopleMovieCredits?.slice(0, length);
  const handleMore = () => {
    setLength(peopleMovieCredits.length);
  };
  const handleShort = () => {
    setLength(8);
  };

  return (
    <div>
      <Header />
      <div className=" border-b">
        <div>
          <h2 className="ml-5 text-left text-xl font-semibold uppercase tracking-widest text-white md:my-10 md:ml-64 md:text-3xl">
            {name}
            <p className="text-xs uppercase tracking-wider text-white ">
              {known_for_department}
            </p>
          </h2>
        </div>
        <div className="flex flex-col  justify-around p-2 md:flex-row-reverse">
          <div className="relative  p-1">
            <div className="flex justify-center">
              <img
                src={`${BASE_IMAGE}${profile_path}`}
                alt=""
                className="w-48  rounded-lg"
              />
            </div>
            <div className="group">
              {popularity && (
                <span className="absolute right-20 top-0 text-lg text-stone-300 md:right-2">
                  {Math.floor(popularity)}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col gap-3 uppercase  text-white  md:text-xl">
              {place_of_birth && (
                <h4>
                  Birth Place:
                  <span className="ml-5 tracking-widest text-stone-400">
                    {place_of_birth}
                  </span>
                </h4>
              )}
              {birthday && (
                <h4>
                  Birthday:
                  <span className="ml-5 tracking-widest text-stone-400">
                    {birthday}
                  </span>
                </h4>
              )}
              {deathday && (
                <h4>
                  Deathday:
                  <span className="ml-5 tracking-widest text-stone-400">
                    {deathday}
                  </span>
                </h4>
              )}
            </div>
            <div className="space-x-5">
              {biography && (
                <Button type="normal" onClick={openModal}>
                  biography
                </Button>
              )}
              <Button type="normal" onClick={() => navigate(-1)}>
                back
              </Button>
            </div>
          </div>
        </div>
        <Popout
          isOpen={isModalOpen}
          closePopout={closeModal}
          biography={biography}
          name={name}
        />
      </div>
      {peopleMovieCredits?.length !== 0 && (
        <div>
          <h3 className="flex items-center gap-2 p-2 text-xl font-semibold uppercase tracking-widest  text-white">
            <BiMovie className="text-2xl" />
            Known For
          </h3>
          <List type="people/moviecredits" movie={newMovieArray} />

          {peopleMovieCredits?.length > 8 && (
            <div>
              {length === 8 && (
                <div className="mr-5 flex justify-end">
                  <Button type="normal" onClick={handleMore}>
                    More
                  </Button>
                </div>
              )}

              {length === peopleMovieCredits?.length && (
                <div className="mr-5 flex justify-end">
                  <Button type="normal" onClick={handleShort}>
                    Less
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default PeopleDetailSection;
