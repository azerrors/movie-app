import { useMovie } from "../contexts/movieContext";
import Menu from "./Menu";

function Sidebar() {
  const { openSidebar } = useMovie();
  return (
    <div
      className={`h-full border ${
        openSidebar ? "translate-x-0 " : " md:translate-x-0 absolute md:relative -translate-x-[22rem] "
      } border-sky-200/10 pt-5 transition-all duration-500`}
    >
      <Menu />
    </div>
  );
}

export default Sidebar;
