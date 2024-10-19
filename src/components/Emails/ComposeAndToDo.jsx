import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useLocation } from "react-router-dom";
import InputLabel from "../Cards/Checkout/InputLabel";

const ComposeAndToDo = () => {
  const [open, setOpen] = useState(true);
  const location = useLocation();

  const checkLocation = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full w-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-sm sm:p-6 md:max-w-3xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div>
              <DialogTitle
                as="h3"
                className="text-base font-bold text-gray-900"
              >
                {checkLocation("/email") ? "Compose Email" : "Add Tasks"}
                <form
                  action=""
                  className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 py-3"
                >
                  {checkLocation("/email") ? (
                    <>
                      <InputLabel title={"Name"} type={"text"} />
                      <InputLabel title={"Subject"} type={"text"} />
                      <div className="col-span-1 md:col-span-2">
                        <label htmlFor="message">Message</label>
                        <div className="mt-2">
                          <textarea
                            id="message"
                            name="message"
                            rows={3}
                            className="bg-inherit block w-full rounded-md border border-[#979797] py-2 px-3 focus:ring-[#979797] sm:text-sm sm:leading-6 "
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-span-1 md:col-span-2 flex justify-end item-center mt-3">
                        <button type="submit" className="px-5 py-2 bg-logoColor rounded-md text-white">
                            Submit
                        </button>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </form>
              </DialogTitle>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default ComposeAndToDo;
