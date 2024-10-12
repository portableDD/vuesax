import AppFooter from "@/components/AppFooter";
import EmailTaskContent from "@/components/Emails/EmailTaskContent";
import EmailTaskNavbar from "@/components/Emails/EmailTaskNavbar";

const TodoPage = () => {
  return (
    <div className="flex flex-col gap-3 h-full">
      <div className="flex border border-[#EBEBEB80] rounded bg-inherit">
        <div className="hidden w-full lg:w-72 xl:w-[20%] lg:block border-r border-[#EBEBEB80]">
          <EmailTaskNavbar />
        </div>
        <div className="w-full lg:w-4/5 xl:w-[80%] ">
          <div className="w-full bg-cover h-full bg-center bg-no-repeat">
            <EmailTaskContent />
          </div>
        </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default TodoPage;
