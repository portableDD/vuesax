import { useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/img/logo.svg";
import Component from "../assets/img/archive.svg";
import { MdOutlineHome } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
import { FiCheckSquare } from "react-icons/fi";
import { MdChatBubbleOutline } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineCalendarToday } from "react-icons/md";
import { FiLayout } from "react-icons/fi";
import { LuCreditCard } from "react-icons/lu";
import { MdOutlineGridView } from "react-icons/md";
import { FiDroplet } from "react-icons/fi";
import { FiCopy } from "react-icons/fi";
import { TbLayoutSidebar } from "react-icons/tb";
import { FiFileText } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";
import { FiLock } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";
import { FiAnchor } from "react-icons/fi";
import { IoWarningOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { FaRegFile } from "react-icons/fa";
import { LuPieChart } from "react-icons/lu";
import { RiMap2Line } from "react-icons/ri";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { FaRegEdit } from "react-icons/fa";
import { RiMenuFill } from "react-icons/ri";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoMdWatch } from "react-icons/io";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [otherMenu, setOtherMenu] = useState(false);
  const [openCard, setOpenCard] = useState(false);

  const closeMenu = () => {
    setOpen(!open);
  };

  const openMenu = () => {
    setOtherMenu(!otherMenu);
    // if(otherMenu === false){
    //   setOpen(true)
    // }
    setOpen(false);
  };

  const navigate = useNavigate()

  const CardMenu = () => {
    setOpenCard(!openCard);
    setOtherMenu(false);
    setOpen(false)
    navigate('/card')
  };

  const location = useLocation();

  const checkLocation = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-gradient-to-tr from-logoColor to-toGradient px-3 py-2 rounded shadow-activeSideBar"
      : "hover:bg-indigo-900 hover:text-white rounded-md px-3 py-2";

  return (
    <div className="hidden lg:block px-3 py-3 shadow-sidebar scroll-smooth h-screen fixed top-0 left-0 bg-contentBgColor w-56">
      <div className="flex flex-col gap-2 font-semibold overflow-y-scroll relative h-full">
        {/* logo, name and icon div */}
        <div className="flex justify-between items-center">
          {/* logo and name */}
          <NavLink className="flex gap-2 items-center">
            <img src={Logo} alt="logo img" />
            <span className="text-logoColor text-lg ">Vuesax</span>
          </NavLink>
          {/* icon */}
          <FaRegCircle className="text-logoColor text-lg" />
        </div>

        {/* dashboard div */}
        <div className="pt-2">
          <div
            className="flex justify-between items-center px-3"
            onClick={closeMenu}
          >
            <NavLink className="flex items-center gap-2">
              <MdOutlineHome className="text-base" />
              <p className="">Dasboard</p>
            </NavLink>
            {open ? <FaAngleDown /> : <FaAngleRight />}
          </div>
          {open && (
            <div className="pt-2 flex flex-col gap-1.5">
              <NavLink className={linkClass} to="/">
                <FaRegCircle className="inline" />
                <span className="pl-2">Analytics</span>
              </NavLink>
              <NavLink className={linkClass} to="/ecommerce">
                <FaRegCircle className="inline" />
                <span className="pl-2">E-Commerce</span>
              </NavLink>
            </div>
          )}
        </div>

        {/* App div */}
        <div className="pt-5">
          <p
            className={
              checkLocation("/ecommerce")
                ? "text-[#999999] uppercase px-3"
                : "uppercase px-3"
            }
          >
            Apps
          </p>
          <div className="pt-2 flex flex-col gap-1.5">
            <NavLink className={linkClass} to="/email">
              <MdOutlineEmail className="inline text-base" />
              <span className="pl-2">Email</span>
            </NavLink>
            <NavLink className={linkClass} to="/chat">
              <MdChatBubbleOutline className="text-base inline" />
              <span className="pl-2">Chat</span>
            </NavLink>
            <NavLink className={linkClass} to="/to-do">
              <FiCheckSquare className="text-base inline" />
              <span className="pl-2">Todo</span>
            </NavLink>
            <NavLink className={linkClass} to="/calender">
              <MdOutlineCalendarToday className="text-base inline" />
              <span className="pl-2">Calendar</span>
            </NavLink>
          </div>
        </div>

        {/* UI elements  div*/}
        <div className="pt-5">
          <p
            className={
              checkLocation("/ecommerce")
                ? "text-[#999999] uppercase px-3"
                : "uppercase px-3"
            }
          >
            UI Elements
          </p>
          <div className="pt-2 flex flex-col gap-2">
            {/* grid */}
            <div
              className="flex justify-between items-center px-3"
              onClick={openMenu}
            >
              <NavLink className="flex items-center gap-2">
                <FiLayout className="text-base" />
                <p className="">Grid</p>
              </NavLink>
              {otherMenu ? <FaAngleDown /> : <FaAngleRight />}
            </div>
            {/* color */}
            <NavLink to="/color" className={linkClass}>
              <FiDroplet className="inline text-base" />
              <span className="pl-2">Color</span>
            </NavLink>
            {/* card */}
            <div>
              <div
                className=" flex justify-between items-center px-3"
                onClick={CardMenu}
              >
                <NavLink className="flex items-center gap-2">
                  <LuCreditCard className="text-base" />
                  <p className="">Card</p>
                </NavLink>
                {openCard ? <FaAngleDown /> : <FaAngleRight />}
              </div>
              {openCard && (
                <div className="pt-2 flex flex-col gap-1.5">
                  <NavLink className={linkClass} to="/card">
                    <FaRegCircle className="inline" />
                    <span className="pl-2">Card Action</span>
                  </NavLink>
                  <NavLink className={linkClass} to="/electronics">
                    <IoMdWatch className="inline" />
                    <span className="pl-2">Electronics</span>
                  </NavLink>
                </div>
              )}
            </div>

            {/* table */}
            <NavLink to="/table" className={linkClass}>
              <MdOutlineGridView className="inline text-base" />
              <span className="pl-2">Table</span>
            </NavLink>

            {/* components */}
            <div
              className=" flex justify-between items-center px-3"
              onClick={openMenu}
            >
              <NavLink className="flex items-center gap-2">
                <img src={Component} alt="components icon" />
                <p className="">Components</p>
              </NavLink>
              {otherMenu ? <FaAngleDown /> : <FaAngleRight />}
            </div>
          </div>
        </div>

        {/* forms */}
        <div className="pt-5">
          <p
            className={
              checkLocation("/ecommerce")
                ? "text-[#999999] uppercase px-3"
                : "uppercase px-3"
            }
          >
            Forms
          </p>
          <div className="pt-2 flex flex-col gap-2">
            {/* form elements */}
            <div
              className="flex justify-between items-center px-3"
              onClick={openMenu}
            >
              <NavLink className="flex items-center gap-2">
                <FiCopy className="text-base" />
                <p className="">Form Elements</p>
              </NavLink>
              {otherMenu ? <FaAngleDown /> : <FaAngleRight />}
            </div>

            {/* form layouts */}
            <NavLink to="form-layout" className={linkClass}>
              <TbLayoutSidebar className="inline text-base" />
              <span className="pl-2">Form Layouts</span>
            </NavLink>

            {/* form wizard */}
            <NavLink to="form-wizard" className={linkClass}>
              <FiFileText className="inline text-base" />
              <span className="pl-2">Form Wizrad</span>
            </NavLink>

            {/* form validation */}
            <NavLink to="form-validate" className={linkClass}>
              <FiCheckCircle className="inline text-base" />
              <span className="pl-2">Form Validation</span>
            </NavLink>
          </div>
        </div>

        {/* pages */}
        <div className="pt-5">
          <p
            className={
              checkLocation("/ecommerce")
                ? "text-[#999999] uppercase px-3"
                : "uppercase px-3"
            }
          >
            Pages
          </p>
          <div className="pt-2 flex flex-col gap-2">
            {/* Authentication */}
            <div
              className="flex justify-between items-center px-3"
              onClick={openMenu}
            >
              <NavLink className="flex items-center gap-2">
                <FiLock className="text-base" />
                <p className="">Authentication</p>
              </NavLink>
              {otherMenu ? <FaAngleDown /> : <FaAngleRight />}
            </div>
            {/* coming */}
            <NavLink className={linkClass} to="/coming-soon">
              <FaRegClock className="inline text-base" />
              <span className="pl-2">Coming Soon</span>
            </NavLink>

            {/* Error */}
            <div
              className="flex justify-between items-center px-3"
              onClick={openMenu}
            >
              <NavLink className="flex items-center gap-2">
                <IoWarningOutline className="text-base" />
                <p className="">Error</p>
              </NavLink>
              {otherMenu ? <FaAngleDown /> : <FaAngleRight />}
            </div>

            {/* maintenance */}
            <NavLink className={linkClass} to="/maintain">
              <FiAnchor className="inline text-base" />
              <span className="pl-2">Maintenance</span>
            </NavLink>

            {/* profile */}
            <NavLink className={linkClass} to="/profile">
              <FiUser className="inline text-base" />
              <span className="pl-2">Profile</span>
            </NavLink>

            {/* FAQ */}
            <NavLink className={linkClass} to="/faq">
              <FaRegCircleQuestion className="inline text-base" />
              <span className="pl-2">FAQ</span>
            </NavLink>

            {/* Knowledge base */}
            <NavLink className={linkClass} to="/knowledge-base">
              <FaRegCircleQuestion className="inline text-base" />
              <span className="pl-2">Knowledge Base</span>
            </NavLink>

            {/* search */}
            <NavLink className={linkClass} to="/search">
              <FiSearch className="inline text-base" />
              <span className="pl-2">Search</span>
            </NavLink>

            {/* invoices */}
            <NavLink className={linkClass} to="/invoices">
              <FaRegFile className="inline text-base" />
              <span className="pl-2">Invoices</span>
            </NavLink>
          </div>
        </div>

        {(checkLocation("/ecommerce") ||
          checkLocation("/card") ||
          checkLocation("/electronics")) && (
          <>
            {/* charts and map */}
            <div className="pt-5">
              <p
                className={
                  checkLocation("/ecommerce")
                    ? "text-[#999999] uppercase px-3"
                    : "uppercase px-3"
                }
              >
                Charts And Maps
              </p>
              <div className="pt-2 flex flex-col gap-2">
                {/* Charts */}
                <div
                  className="flex justify-between items-center px-3"
                  onClick={openMenu}
                >
                  <NavLink className="flex items-center gap-2">
                    <LuPieChart className="text-base" />
                    <p className="">Charts</p>
                  </NavLink>
                  {otherMenu ? <FaAngleDown /> : <FaAngleRight />}
                </div>
                {/* Map */}
                <NavLink className={linkClass} to="/google-map">
                  <RiMap2Line className="inline text-base" />
                  <span className="pl-2">Google Maps</span>
                </NavLink>
              </div>
            </div>

            {/* extensions */}
            <div className="pt-5">
              <p
                className={
                  checkLocation("/ecommerce")
                    ? "text-[#999999] uppercase px-3"
                    : "uppercase px-3"
                }
              >
                Extensions
              </p>
              <div className="pt-2 flex flex-col gap-2">
                {/* Select */}
                <div
                  className="flex justify-between items-center px-3"
                  onClick={openMenu}
                >
                  <NavLink className="flex items-center gap-2">
                    <HiOutlineShieldCheck className="text-base" />
                    <p className="">Select</p>
                  </NavLink>
                  {otherMenu ? <FaAngleDown /> : <FaAngleRight />}
                </div>
                {/* Quil Editor */}
                <NavLink className={linkClass} to="/quill-editor">
                  <FaRegEdit className="inline text-base" />
                  <span className="pl-2">Quill Editor</span>
                </NavLink>

                {/* drag and drop */}
                <NavLink to="/drag-drop" className={linkClass}>
                  <FiDroplet className="inline text-base" />
                  <span className="pl-2">Drag & Drop</span>
                </NavLink>

                {/* datepicker */}
                <NavLink className={linkClass} to="/datepicker">
                  <MdOutlineCalendarToday className="text-base inline" />
                  <span className="pl-2">Datepicker</span>
                </NavLink>
              </div>
            </div>

            {/* others */}
            <div className="pt-5">
              <p
                className={
                  checkLocation("/ecommerce")
                    ? "text-[#999999] uppercase px-3"
                    : "uppercase px-3"
                }
              >
                others
              </p>
              <div className="pt-2 flex flex-col gap-2">
                {/* Charts */}
                <div
                  className="flex justify-between items-center px-3"
                  onClick={openMenu}
                >
                  <NavLink className="flex items-center gap-2">
                    <RiMenuFill className="text-base" />
                    <p className="">Menu Levels</p>
                  </NavLink>
                  {otherMenu ? <FaAngleDown /> : <FaAngleRight />}
                </div>
                {/* Map */}
                <NavLink className={linkClass} to="/disabled">
                  <FaRegEyeSlash className="inline text-base" />
                  <span className="pl-2">Disabled Menu</span>
                </NavLink>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
