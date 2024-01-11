import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Outlet } from "react-router-dom";
import { useMovie } from "../contexts/movieContext";
import useCloseModalClickByOutside from "../hooks/useCloseModalClickByOutside";
import { getMultiSearch } from "../services/OtherApi";
import Footer from "./Footer";
import HeaderV2 from "./HeaderV2";
import SearchFor from "./SearchFor";
import Sidebar from "./Sidebar";

function AppLayout() {
  const { input, openSidebar, dispatch } = useMovie();
  const { data: curMultiSearch, isLoading: curMultiSearchLoading } = useQuery({
    queryKey: ["multisearch", input],
    queryFn: () => getMultiSearch(input),
  });

  const handler = () => {
    dispatch({ type: "closeSidebar" });
  };
  const { ref } = useCloseModalClickByOutside(handler);

  const multiSearch = curMultiSearch?.filter(
    (item) => item.media_type !== "person",
  );

  return (
    <div className=" bg-primary  font-sans font-semibold">
      <div className="bg-secondary md:mx-48">
        <div className="border-b border-sky-200/10">
          <HeaderV2 />
        </div>
        <main className="bg-secondary  md:flex  ">
          <div
            ref={ref}
            className={`md:inline-block md:w-1/6 ${
              openSidebar ? "absolute z-[1000] h-full w-6/12 bg-secondary " : ""
            } `}
          >
            <Sidebar />
          </div>
          <div className="md:w-5/6">
            <div className="flex justify-center">
              {input && (
                <SearchFor
                  data={multiSearch}
                  curMultiSearchLoading={curMultiSearchLoading}
                />
              )}
            </div>
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default AppLayout;
