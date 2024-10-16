import { useState } from "react";
import InputLabel from "./InputLabel";

const text = [
  {
    label: "Full Name:",
    id: "name",
    type: "text",
  },
  {
    label: "Landmark e.g. near apollo hospital:",
    id: "landmark",
    type: "text",
  },
  {
    label: "Mobile number:",
    id: "mobile",
    type: "tel",
  },
  {
    label: "Town/City:",
    id: "town",
    type: "text",
  },
  {
    label: "Pincode:",
    id: "pin",
    type: "tel",
  },
  {
    label: "State:",
    id: "state",
    type: "text",
  },
  {
    label: "Flat, House no., Building, Company, Apartment:",
    id: "flat",
    type: "text",
  },
];

const CartForm = ({ nextStep }) => {
  const [formData, setFormData] = useState({
    name: "",
    landmark: "",
    mobile: "",
    town: "",
    pin: "",
    state: "",
    flat: "",
    area: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" }); // Reset error on change
  };
  const validate = () => {
    const newError = {};
    if (!formData.name) {
      newError.name = "Name is required";
    }
    if (!formData.landmark) {
      newError.landmark = "Landmark is required";
    }
    if (!formData.mobile) {
      newError.mobile = "Mobile number is required";
    }
    if (!formData.town) {
      newError.town = "Town/city is required";
    }
    if (!formData.pin) {
      newError.pin = "Pincode is required";
    }
    if (!formData.state) {
      newError.state = "State is required";
    }
    if (!formData.flat) {
      newError.flat =
        "Flat or House no. or Building or Company or Apartment is required";
    }
    if (!formData.area) {
      newError.area =
        "Area or Colony or Street or Sector or Village is required";
    }

    return newError;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validateError = validate();
    // Check if there are no errors (i.e., validateError object is empty)
    if (Object.keys(validateError).length === 0) {
      nextStep(); // Move to the next step
    } else {
      setErrors(validateError); // Set the validation errors
    }
  };

  return (
    <div className="rounded-md shadow-navbar bg-contentBgColor pb-5 py-3 px-5 w-full mt-3">
      <p className="text-base font-semibold">Add a new address</p>
      <p className="text-[13px]">
        Be sure to click &quot;Deliver to this address&quot; when you&apos;ve
        finished.
      </p>
      <form
        className="grid grid-cols-1 sm:grid-cols-2 mt-3 gap-5"
        onSubmit={handleSubmit}
      >
        {text.map((item, index) => (
          <div key={index}>
            <InputLabel
              title={item.label}
              value={formData[item.id]} // Dynamically setting value from formData
              type={item.type}
              id={item.id}
              onChange={handleChange}
            />
            {errors[item.id] && (
              <p className="text-red-500 text-sm font-semibold mt-2">
                {errors[item.id]}
              </p> // Error message
            )}
          </div>
        ))}

        <div>
          <label htmlFor="select" className="block font-[750] ">
            Address Type:
          </label>
          <div className="pt-1">
            <select
              name="select"
              id="select"
              className="px-3 py-2 rounded-md bg-contentBgColor outline-none w-full border border-[#979797]"
              onChange={handleChange}
            >
              <option value="default">Select an Address Type</option>
              <option value="strings">Strings</option>
              <option value="numbers">Numbers</option>
            </select>
          </div>
        </div>

        <div>
          <InputLabel
            title={"Area, Colony, Street, Sector, Village: "}
            type={"text"}
            value={formData.area} // Value for the "area" input field
            id="area"
            onChange={handleChange}
          />
          {errors.area && (
            <p className="text-red-500 text-sm font-semibold mt-2">
              {errors.area}
            </p> // Error message
          )}
        </div>

        <div className="flex justify-end w-full">
          <button
            type="submit"
            className="px-3 py-3 md:py-0 bg-[#6F64F8] rounded-md mt-3 font-semibold"
          >
            SAVE AND DELIVER HERE
          </button>
        </div>
      </form>
    </div>
  );
};

export default CartForm;
