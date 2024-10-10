import { useLocation } from "react-router-dom";
import SearchSelect from "./SearchSelect";
import { EmailContent } from "./EmailTaskArrays";
import SingleEmail from "./SingleEmail";
import { TaskContent } from "./EmailTaskArrays";
import SingleTask from "./SingleTask";

const EmailTaskContent = () => {
  const location = useLocation();

  const checkLocation = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };
  return (
    <div>
      <SearchSelect />
      {checkLocation("/email")
        ? EmailContent.map((cont) => (
            <div className="w-full border-style" key={cont.id}>
              <SingleEmail
                color={cont.color}
                date={cont.date}
                img={cont.img}
                message={cont.message}
                name={cont.name}
                subject={cont.subject}
              />
            </div>
          ))
        : TaskContent.map((task) => (
            <div className="w-full border-style" key={task.id}>
              <SingleTask
                isSpan={task.isSpan}
                spanText={task.spanText}
                isChecked={task.isChecked}
                color={task.color}
                message={task.message}
                subject={task.subject}
              />
            </div>
          ))}
    </div>
  );
};

export default EmailTaskContent;
