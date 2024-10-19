import { useLocation } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaRegFolder } from "react-icons/fa6";
import { FiTag } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FiTrash } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useContext } from "react";
import AppState from "@/Features/AllContext";
import { toast } from "react-toastify";

const SearchSelect = () => {
  const { state, dispatch } = useContext(AppState);
  const { tasks, email } = state;
  const location = useLocation();
  const [text, setText] = useState("");

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    if (checkLocation("/email")) {
      if (text !== "") {
        const newFindEmail = email.filter((email) =>
          email.name.toLowerCase().includes(text.toLowerCase())
        );
        dispatch({ type: "email/searchEmail", payload: newFindEmail });
      } else {
        dispatch({ type: "email/resetEmail" }); 
      }
    }else {
      if (text !== '') {
        const newFindTasks = tasks.filter((task) => 
          task.subject.toLowerCase().includes(text.toLowerCase())
        );
        dispatch({ type: "task/searchTasks", payload: newFindTasks });
      }else {
        dispatch({ type: "task/resetTasks" }); 
      } 
    }
  }, [text]);
  
  const deleteCheckedEmails = () => {
    const updatedEmailsAfterDelete = email.filter((email) => !email.isChecked);
    dispatch({ type: "email/removeCheckedEmails", payload: updatedEmailsAfterDelete  });
    toast.success("Checked emails deleted!");
  };

  const checkLocation = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };
  return (
    <div className="w-full">
      <div className="relative w-full border-b border-[#EBEBEB80] py-0.5">
        <div className=" absolute inset-y-0 left-0 flex items-center pl-3">
          <FiSearch />
        </div>
        <input
          type="text"
          name="text"
          id="text"
          value={text}
          onChange={onChangeText}
          className="bg-inherit w-full rounded-full outline-none py-1.5 pl-10 px-2  placeholder:text-[13px]  placeholder:text-white  sm:text-sm"
          placeholder="Search Mail"
        />
      </div>
      <div className="w-full flex justify-between items-center border-b border-[#EBEBEB80] py-2 px-3">
        <div className="flex gap-3 items-center">
          <input
            id="comments"
            name="comments"
            type="checkbox"
            aria-describedby="comments-description"
            className="h-4 w-4  rounded border-white"
          />
          <p id="comments-description" className="text-[13px]">
            Select All
          </p>
        </div>
        {checkLocation("/layouts/email") && (
          <div className="flex items-center gap-3 text-base">
            <FaRegFolder />
            <FiTag />
            <MdOutlineEmail />
            <FiTrash onClick={deleteCheckedEmails} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchSelect;
