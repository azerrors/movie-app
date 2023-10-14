import React, { useState } from "react";
import Header from "./Header";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Button from "./Button";
import { Link } from "react-router-dom";

const BASE_IMAGE = "https://image.tmdb.org/t/p/w500";

function CarouselFull({ images, info }) {
  console.log(info);
  const [currentIndex, setCurrentIndex] = useState(0);

  const increaseIndex = () => {
    if (currentIndex === 19) {
      setCurrentIndex(0);
    }
    setCurrentIndex((curr) => curr + 1);
  };

  const decreaseIndex = () => {
    setCurrentIndex((curr) => curr - 1);
  };

  const h4Style =
    "absolute md:left-48 top-48 animate-moveInLeft md:text-2xl uppercase font-semibold tracking-widest text-white top-12";
  const pStyle =
    "text-stone-100 absolute top-56 w-[50rem] left-40 text-lg mt-5 ";
  const imgStyle = "absolute right-48 top-48 rounded-lg ";

  return (
    <div className="z-1   w-full border-b-2 md:h-[40rem]">
      <img
        src={`${BASE_IMAGE}${images[currentIndex]}`}
        className="relative h-full w-full blur hover:blur-md"
        alt=""
      />
      <div className="absolute right-1 top-0 w-full bg-slate-900/10">
        <Header />
      </div>
      {currentIndex !== 0 && (
        <AiOutlineArrowLeft
          className="absolute left-5 top-[35%] cursor-pointer text-3xl font-semibold text-stone-300"
          onClick={decreaseIndex}
        />
      )}
      <AiOutlineArrowRight
        className="absolute right-5 top-[35%] cursor-pointer text-3xl font-semibold text-stone-300"
        onClick={increaseIndex}
      />
      <div>
        <h4 className={h4Style}>{info && info[currentIndex].title}</h4>
        <p className={pStyle}>{info && info[currentIndex].overview}</p>
      </div>
      <div className="absolute left-[54rem] top-[25.5rem]">
        <Link
          to={`/${info && info[currentIndex].id}?movieId=${
            info && info[currentIndex].id
          }`}
        >
          <Button type="normal">More</Button>
        </Link>
      </div>
      <div>
        <img
          className={imgStyle}
          src={`${BASE_IMAGE}${images[currentIndex]}`}
          alt=""
        />
      </div>
    </div>
  );
}

export default CarouselFull;
