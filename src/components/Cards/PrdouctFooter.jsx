import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import PowerdBy from '../../assets/img/Algolia-logo.svg'

const PrdouctFooter = () => {
  const linkPage = ({ isActive }) =>
    isActive
      ? "bg-[#6F64F8] px-3 py-1.5 rounded-full shadow-activeSideBar"
      : "hover:bg-indigo-900 hover:text-white rounded-md md:px-0.5";
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-0 mt-5">
        {/* empty div just to keep space */}
      <div></div>
      {/* pagination */}
      <div className="flex gap-1 md:gap-3 items-center justify-center">
        <button className="bg-neutral-100 dark:bg-contentBgColor  px-[2px] rounded-full w-8 h-8 disabled:text-gray-200 flex justify-center items-center">
          <FaAngleLeft className="text-base" />
        </button>
        <div className="font-semibold bg-neutral-100 dark:bg-contentBgColor  flex gap-3 items-center rounded-full px-3 py-0.5">
          <NavLink to={"/testing"} className={linkPage}>
            1
          </NavLink>
          <NavLink to={"/testing"} className={linkPage}>
            2
          </NavLink>
          <NavLink to={"/testing"} className={linkPage}>
            3
          </NavLink>
          <NavLink to={"/testing"} className={linkPage}>
            4
          </NavLink>
          <NavLink to={"/testing"} className={linkPage}>
            5
          </NavLink>
          <NavLink to={"#"} className={linkPage}>
            6
          </NavLink>
          <NavLink to={"/testing"} className={linkPage}>
            7
          </NavLink>
          <NavLink to={"/testing"} className={linkPage}>
            8
          </NavLink>
          <NavLink to={"/testing"} className={linkPage}>
            9
          </NavLink>
          <NavLink to={"/testing"} className={linkPage}>
            10
          </NavLink>
        </div>
        <button className="bg-neutral-100 dark:bg-contentBgColor  px-1 rounded-full w-8 h-8 disabled:text-gray-200 flex justify-center items-center">
          <FaAngleRight className="text-base" />
        </button>
      </div>
      {/* powered by */}
      <div className="flex gap-3 items-center justify-center md:justify-end text-xs font-semibold">
        <p>Powered by</p>
        <img src={PowerdBy} alt="powered by logo"  className="w-28"/>
      </div>
    </div>
  );
};

export default PrdouctFooter;
