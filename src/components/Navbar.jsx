import { Link } from "react-router-dom";
import DP from "../assets/img/Oval.svg";
import { FiCheckSquare } from "react-icons/fi";
import { MdChatBubbleOutline } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineCalendarToday } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { RiMenuFill } from "react-icons/ri";
import { GoBell } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import MoblieSideBar from "./MoblieSideBar";

const Navbar = () => {

  return (
    <nav className="max-w-[95%] lg:max-w-[75%] xl:max-w-[80%] w-full bg-contentBgColor rounded-md fixed z-50">
      <div className="shadow-navbar py-0.5 px-2 flex justify-between items-center">
        {/* icon div */}
        <div className="flex gap-2 md:gap-3 items-center text-base ">
          <Link to="/layouts/to-do">
            <FiCheckSquare />
          </Link>
          <Link to="/layouts/chat">
            <MdChatBubbleOutline />
          </Link>
          <Link to="/layouts/email">
            <MdOutlineEmail />
          </Link>
          <Link to="/layouts/calendar">
            <MdOutlineCalendarToday />
          </Link>
          <Link>
            <FaRegStar className="text-[#FFA84C]" />
          </Link>
        </div>
        {/* profile div */}
        <div className="flex gap-2 md:gap-4 items-center ">
          <div className="flex gap-2 md:gap-4 items-center">
            <span className="hidden lg:block text-xs">English</span>
            <GoBell />
            <FiSearch />
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-right hidden md:block text-xs">
              <span className="block">John Doe</span>
              <span className="text-[10px]">Available</span>
            </p>
            <img src={DP} alt="profile pics" className="w-10" />
            <Sheet>
              <SheetTrigger>
                <RiMenuFill className="lg:hidden text-lg" />
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[250px] sm:w-[280px] text-white bg-contentBgColor"
              >
                <SheetHeader className="hidden">
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
                <div>
                 <MoblieSideBar />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
