import AppFooter from "@/components/AppFooter";

const EmailPage = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex border border-[#EBEBEB80] rounded bg-inherit">
        <div className="hidden w-full lg:w-96 xl:w-[30%] lg:block border-r border-[#EBEBEB80] px-3 py-3 "></div>
        <div className="w-full lg:w-4/5 xl:w-[70%] ">
          <div
            className="w-full bg-cover h-full bg-center bg-no-repeat"
          ></div>
        </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default EmailPage;
