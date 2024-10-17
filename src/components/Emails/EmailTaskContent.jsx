import { useLocation } from "react-router-dom";
import SearchSelect from "./SearchSelect";
import SingleEmail from "./SingleEmail";
import SingleTask from "./SingleTask";
import { toast } from "react-toastify";
import { useContext } from "react";
import AppState from "@/Features/AllContext";

const EmailTaskContent = () => {
  const {state, dispatch} = useContext(AppState)
  const {tasks, email} = state
  const location = useLocation();

  const checkLocation = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete??")) {
      const newfeed = tasks.filter((item) => item.id !== id);
      dispatch({ type: 'task/removeTask', payload: newfeed });
    }
    toast.success("Task Deleted!!");
  };

  const handleCheckboxChange = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isChecked: !task.isChecked } : task
    );
    dispatch({ type: "task/updateTasks", payload: updatedTasks });
  };

  const handleEmailCheckboxChange = (id) => {
    const updatedEmails = email.map((email) =>
      email.id === id ? { ...email, isChecked: !email.isChecked } : email
    );
    dispatch({ type: "email/updateEmails", payload: updatedEmails });
  };

 

  return (
    <div>
      <SearchSelect  />
      {checkLocation("/email")
        ? email.map((cont) => (
            <div className="w-full border-style" key={cont.id}>
              <SingleEmail
                color={cont.color}
                date={cont.date}
                img={cont.img}
                message={cont.message}
                name={cont.name}
                subject={cont.subject}
                id={cont.id}
                isChecked={cont.isChecked}
                handleEmailCheckboxChange={handleEmailCheckboxChange}
              />
            </div>
          ))
        : tasks.map((task) => (
            <div className="w-full border-style" key={task.id}>
              <SingleTask
                isSpan={task.isSpan}
                spanText={task.spanText}
                isChecked={task.isChecked}
                color={task.color}
                message={task.message}
                subject={task.subject}
                id={task.id}
                deleteTask={deleteFeedback}
                handleCheckboxChange={handleCheckboxChange}
              />
            </div>
          ))}
    </div>
  );
};

export default EmailTaskContent;
