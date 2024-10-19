import { useLocation } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { Email } from "./EmailTaskArrays";
import { Tasks } from "./EmailTaskArrays";
import { Label } from "./EmailTaskArrays";
import { FaCircle } from "react-icons/fa";

const EmailTaskNavbar = () => {
  const location = useLocation();

  const checkLocation = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };
  return (
    <div className="w-full flex flex-col">
      {/* button and all for todo */}
      <div
        className={
          checkLocation("/layouts/to-do")
            ? "px-3 py-3 border-b border-[#EBEBEB66]"
            : "px-3 py-3"
        }
      >
        <button className="bg-logoColor w-full py-2 rounded-md text-base font-semibold">
          {checkLocation("/layouts/email") ? "Compose" : "Add Task"}
        </button>
        {checkLocation("/layouts/to-do") && (
          <div className="mt-3">
            <MdOutlineEmail className="inline text-lg" />
            <span className="pl-2 align-middle">All</span>
          </div>
        )}
      </div>
      {/* nav items */}
      <div className="border-b border-[#EBEBEB66] px-3 py-3 -mt-3">
        {checkLocation("/layouts/email")
          ? Email.map((email) => (
              <div key={email.text} className="">
                <div className="mt-3">
                  <email.Icon className="inline text-lg" />
                  <span className="pl-2 align-middle">{email.text}</span>
                </div>
              </div>
            ))
          : Tasks.map((email) => (
              <div key={email.text} className="">
                <div className="mt-3">
                  <email.Icon className="inline text-lg" />
                  <span className="pl-2 align-middle">{email.text}</span>
                </div>
              </div>
            ))}
      </div>
      <div className="px-3 py-3 -mt-3">
        <p className="mt-3">Labels</p>
        {Label.map((labs) => (
          <div key={labs.text} className="">
            <div className="mt-3">
              <FaCircle className={`text-[${labs.color}] inline`} />
              <span className="pl-2 align-middle">{labs.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmailTaskNavbar;
