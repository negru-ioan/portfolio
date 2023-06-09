import { Link } from "react-router-dom";
import { routes } from "../../../data/global";

function Navbar({ currentPage }: { currentPage: string }) {
  return (
    <nav className="flex items-center justify-between">
      <li className="list-none font-bold text-lg cursor-pointer">
        <Link to="/">
          <span className="font-black text-xl flex items-center">
            <img
              className="transform hover:rotate-360 hover:scale-75 transition-transform duration-500 rounded-full"
              src="./img/icons/logo.svg"
              width="60"
            />
            {"NegruIoan".split("").map((letter, index) => {
              return (
                <span
                  key={index}
                  className="hover:text-fun-pink hover:-mt-2 transition-all duration-500 hover:duration-100 click:goodbyeLetterAnim"
                >
                  {letter}
                </span>
              );
            })}
          </span>
        </Link>
      </li>
      <ul className="flex items-center space-x-10">
        {routes.map((item, index) => {
          return (
            <li
              key={index}
              className={`list-none text-white ${
                currentPage === item.path
                  ? "opacity-100"
                  : "opacity-40 hover:opacity-100 transition-opacity"
              }`}
            >
              <Link to={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
