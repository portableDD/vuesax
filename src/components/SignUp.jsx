import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase.config";
import { toast } from "react-toastify";
import Logo from "../assets/img/logo.svg";
import GoogleAuth from "./Auths/GoogleAuth";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const { fullName, email, password } = formData;
  const [error, setError] = useState({});

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.value,
      };
    });
    setError({ ...error, [e.target.id]: "" }); // Reset error on change
  };

  const validate = () => {
    const newError = {};
    if (!formData.fullName === "") {
      newError.fullName = "Full Name is required";
    }
    if (formData.fullName.length <=3) {
      newError.fullName = "Full Name length must be more than 3";
    }
    // } else if (/[A-Za-z/s]/.test(formData.fullName)) {
    //   newError.fullName = "please enter a valid name";
    // }
    if (!formData.email === "") {
      newError.email = "Email is required";
    } 
    if (formData.email.length <= 4) {
      newError.email = "Email length should be more than 4";
    }
    if (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{4,}$/.test(formData.email)) {
      newError.email = "Please Enter a valid Email";
    }
    if (!formData.password === "") {
      newError.password = "Password is required";
    } 
    if (formData.password.length <= 5) {
      newError.password =
        "Password must be more than 5 and it must consist of uppercase, lowercase, numbers and a special character";
    }
    return newError;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const validateError = validate();
    if (Object.keys(validateError).length === 0) {
      try {
        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        console.log(user);
        updateProfile(auth.currentUser, { displayName: fullName });

        const formDataCopy = { ...formData };
        delete formDataCopy.password;
        formDataCopy.timeStamp = serverTimestamp();

        await setDoc(doc(db, "users", user.uid), formDataCopy);
        toast.success("successfully sign up");
        navigate("/");
      } catch (error) {
        const errorMessage = error.message;
        console.log(errorMessage)
        toast.error(errorMessage);
      }
    } else {
      setError(validateError);
    }
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 text-white">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img alt="Your Company" src={Logo} className="mx-auto h-10 w-auto" />
        <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight">
          Sign Up
        </h2>
      </div>

      <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="px-4 sm:px-0">
          <form className="space-y-6" onSubmit={onSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6"
              >
                Full Name
              </label>
              <div className="mt-2">
                <input
                  id="fullName"
                  value={fullName}
                  onChange={onChange}
                  name="Full Name"
                  type="text"
                  required
                  autoComplete="Full Name"
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 px-2 outline-none text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
                {error.fullName && (
                  <p className="text-red-500 text-sm font-semibold mt-2">
                    {error.fullName}
                  </p> // Error message
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={onChange}
                  pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 px-2 outline-none text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
                {error.email && (
                  <p className="text-red-500 text-sm font-semibold mt-2">
                    {error.email}
                  </p> // Error message
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6"
              >
                Password
              </label>
              <div className="mt-2">
                <div className=" w-full rounded-md border-0 bg-white/5 py-1.5 px-1.5  text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 flex justify-between items-center">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={onChange}
                    autoComplete="current-password"
                    className="block bg-transparent w-[85%] outline-none"
                  />
                  <div
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="cursor-pointer"
                  >
                    {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                  </div>
                </div>
                {error.password && (
                  <p className="text-red-500 text-sm font-semibold mt-2">
                    {error.password}
                  </p> // Error message
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-logoColor py-1.5 font-semibold leading-6 shadow-sm hover:bg-indigo-500"
              >
                Sign Up
              </button>
            </div>
          </form>

          <div>
            <div className="mt-2">
              <div className="flex justify-center text-sm font-medium leading-6">
                <span className="px-6 text-base">OR</span>
              </div>
            </div>

            <div className="flex justify-center items-center ">
              <GoogleAuth />
            </div>
          </div>
        </div>

        <p className="text-center text-gray-500">
          Already have an Account?{" "}
          <Link
            to={"/"}
            className="font-semibold leading-6 text-white hover:text-indigo-300"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
