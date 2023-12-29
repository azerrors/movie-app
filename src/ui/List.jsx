import React from "react";
import { useMovie } from "../contexts/movieContext";
import UpcomingCarousel from "./Carousel";
import ListElement from "./ListElement";
import MySlider from "./MySlider";
function List({ type, movie, serie, data }) {
  const { filterInput } = useMovie();


  if (type === "list10") {
    return (
      <ul className="flex flex-col gap-2">
        {data?.map((movie) => {
          return <ListElement data={movie} key={movie.id} type={type} />;
        })}
      </ul>
    );
  }
  if (type === "list9") {
    return (
      <ul className="grid md:grid-cols-4 grid-cols-1 place-items-center gap-2">
        {data?.map((movie) => {
          return <ListElement data={movie} key={movie.id} type={type} />;
        })}
      </ul>
    );
  }

  if (type === "list8") {
    return (
      <ul>
        <MySlider
          slidesToShow={4}
          slidesToScroll={3}
          slidesToShow400={5}
          slidesToScroll400={3}
          autoplay={true}
          autoplaySpeed={3000}
          pauseOnHover={true}
          vertical={true}
          verticalSwiping={true}
          swipeToSlide={true}
          arrows={false}
        >
          {data?.map((movie) => {
            return <ListElement data={movie} key={movie.id} type={type} />;
          })}
        </MySlider>
      </ul>
    );
  }

  if (type === "list7") {
    return (
      <ul>
        <MySlider
          slidesToShow={9}
          slidesToScroll={3}
          slidesToShow400={3}
          slidesToScroll400={2}
          autoplay={true}
          autoplaySpeed={3000}
          pauseOnHover={true}
        >
          {data?.map((movie) => {
            return <ListElement data={movie} key={movie.id} type={type} />;
          })}
        </MySlider>
      </ul>
    );
  }
  if (type === "list6") {
    return (
      <ul>
        <MySlider
          slidesToShow={4}
          slidesToScroll={3}
          slidesToShow400={1}
          slidesToScroll400={1}
        >
          {data?.map((movie) => {
            return <ListElement data={movie} key={movie.id} type={type} />;
          })}
        </MySlider>
      </ul>
    );
  }

  if (type === "list5") {
    return (
      <ul>
        <MySlider
          slidesToShow={5}
          slidesToScroll={3}
          slidesToShow400={2}
          slidesToScroll400={2}
        >
          {data?.map((movie) => {
            return <ListElement data={movie} key={movie.id} type={type} />;
          })}
        </MySlider>
      </ul>
    );
  }

  if (type === "list4") {
    return (
      <ul>
        <MySlider
          slidesToShow={4}
          slidesToScroll={3}
          slidesToShow400={1}
          slidesToScroll400={1}
        >
          {data?.map((episodes) => {
            return (
              <ListElement data={episodes} key={episodes.id} type={type} />
            );
          })}
        </MySlider>
      </ul>
    );
  }

  if (type === "list3") {
    return (
      <ul>
        <MySlider
          slidesToShow={5}
          slidesToScroll={3}
          slidesToShow400={2}
          slidesToScroll400={2}
          autoplay={true}
          autoplaySpeed={3000}
          pauseOnHover={true}
        >
          {data?.map((episodes) => {
            return (
              <ListElement data={episodes} key={episodes.id} type={type} />
            );
          })}
        </MySlider>
      </ul>
    );
  }

  if (type === "list2") {
    return (
      <ul className=" mt-5 flex flex-wrap justify-center gap-3 ">
        {data?.map((movie) => {
          return <ListElement data={movie} key={movie.id} type={type} />;
        })}
      </ul>
    );
  }

  //==================================================================
  //==================================================================

  if (type === "movie/upcoming") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center  gap-3 ">
        {movie?.slice(0, 7)?.map((movie) => {
          return <UpcomingCarousel key={movie.id} movie={movie} type={type} />;
        })}
      </ul>
    );
  }
  if (type === "movie/populer") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-3">
        {movie?.slice(0, 7)?.map((movie) => {
          return <UpcomingCarousel movie={movie} key={movie.id} type={type} />;
        })}
      </ul>
    );
  }
  if (type === "movie/trend") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-3">
        {movie?.slice(0, 7)?.map((movie) => {
          return <UpcomingCarousel movie={movie} key={movie.id} type={type} />;
        })}
      </ul>
    );
  }
  if (type === "movie/populer/all") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
        {movie?.map((movie) => {
          return <ListElement movie={movie} key={movie.id} type={type} />;
        })}
      </ul>
    );
  }
  if (type === "movie/upcoming/all") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
        {movie?.map((movie) => {
          return <ListElement movie={movie} key={movie.id} type={type} />;
        })}
      </ul>
    );
  }
  if (type === "movie/trending/all") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
        {movie?.map((movie) => {
          return <ListElement movie={movie} key={movie.id} type={type} />;
        })}
      </ul>
    );
  }

  //====================================================================
  // if (type === "movie/discover") {
  //   return (
  //     <ul className=" mt-5 flex flex-wrap justify-center gap-2 ">
  //       {movie?.map((movie) => {
  //         return <ListElement movie={movie} key={movie.id} type={type} />;
  //       })}
  //     </ul>
  //   );
  // }
  // if (type === "movie/genre") {
  //   return (
  //     <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
  //       {movie?.map((movie) => {
  //         return <ListElement movie={movie} key={movie.id} type={type} />;
  //       })}
  //     </ul>
  //   );
  // }
  // if (type === "movie/search") {
  //   return (
  //     <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
  //       {movie?.map((movie) => {
  //         return <ListElement movie={movie} key={movie.id} type={type} />;
  //       })}
  //     </ul>
  //   );
  // }
  // if (type === "movie/vote") {
  //   return (
  //     <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
  //       {movie?.map((movie) => {
  //         return <ListElement movie={movie} key={movie.id} type={type} />;
  //       })}
  //     </ul>
  //   );
  // }
  // if (type === "movie/year") {
  //   return (
  //     <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
  //       {movie?.map((movie) => {
  //         return <ListElement movie={movie} key={movie.id} type={type} />;
  //       })}
  //     </ul>
  //   );
  // }
  // if (type === "movie/detail/similar") {
  //   return (
  //     <ul>
  //       <Slider {...settings}>
  //         {movie?.map((movie) => {
  //           return <ListElement movie={movie} key={movie.id} type={type} />;
  //         })}
  //       </Slider>
  //     </ul>
  //   );
  // }

  //====================================================================
  if (type === "serie/trend") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-3">
        {serie?.slice(0, 7)?.map((movie) => {
          return <UpcomingCarousel movie={movie} key={movie.id} type={type} />;
        })}
      </ul>
    );
  }
  if (type === "serie/populer") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-3">
        {serie?.slice(0, 7)?.map((movie) => {
          return <UpcomingCarousel movie={movie} key={movie.id} type={type} />;
        })}
      </ul>
    );
  }
  if (type === "serie/trending/all") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
        {serie?.map((serie) => {
          return <ListElement serie={serie} key={serie.id} type={type} />;
        })}
      </ul>
    );
  }
  if (type === "serie/populer/all") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
        {serie?.map((serie) => {
          return <ListElement serie={serie} key={serie.id} type={type} />;
        })}
      </ul>
    );
  }
  //====================================================================

  if (type === "serie/discover") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
        {serie?.map((serie) => {
          return <ListElement serie={serie} key={serie.id} type={type} />;
        })}
      </ul>
    );
  }
  if (type === "serie/search") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
        {serie?.map((serie) => {
          return <ListElement serie={serie} key={serie.id} type={type} />;
        })}
      </ul>
    );
  }
  if (type === "serie/genre") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
        {serie?.map((serie) => {
          return <ListElement serie={serie} key={serie.id} type={type} />;
        })}
      </ul>
    );
  }

  if (type === "serie/vote") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
        {serie?.map((serie) => {
          return <ListElement serie={serie} key={serie.id} type={type} />;
        })}
      </ul>
    );
  }
  if (type === "serie/year") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
        {serie?.map((serie) => {
          return <ListElement serie={serie} key={serie.id} type={type} />;
        })}
      </ul>
    );
  }
  if (type === "serie/detail/similar") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
        {movie?.map((movie) => {
          return <ListElement movie={movie} key={movie.id} type={type} />;
        })}
      </ul>
    );
  }
  //====================================================================
  //====================================================================
  if (type === "people/moviecredits") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
        {movie?.map((movie) => {
          return <ListElement movie={movie} key={movie.id} type={type} />;
        })}
      </ul>
    );
  }
  if (type === "favorites") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center gap-4 ">
        {movie
          ?.filter((item) =>
            filterInput === "movie"
              ? item.title
              : filterInput === "serie"
              ? item.name
              : filterInput === "all"
              ? item
              : item,
          )
          ?.map((movie) => {
            return <ListElement movie={movie} key={movie.id} type={type} />;
          })}
      </ul>
    );
  }
  if (type === "favorites/note") {
    return (
      <ul className="mt-6 flex flex-wrap justify-center  ">
        {movie?.map((movie) => {
          return <ListElement movie={movie} key={movie.id} type={type} />;
        })}
      </ul>
    );
  }
  // =================================================================
  if (type === "episodes") {
    return (
      <ul>
        <MySlider
          slidesToShow={3}
          slidesToScroll={3}
          slidesToShow400={1}
          slidesToScroll400={1}
        >
          {serie?.map((serie) => {
            return <ListElement serie={serie} key={serie.id} type={type} />;
          })}
        </MySlider>
      </ul>
    );
  }
}

export default List;
