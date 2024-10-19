import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import Logo from "../assets/img/logo.svg";
import GoogleAuth from "./Auths/GoogleAuth";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const onChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.value,
      };
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential.user) {
        navigate("/layouts");
        toast.success("Welcome back");
      }
    } catch (error) {
      const errorMessage = error.message;
      toast.error(errorMessage);
    } finally {
      setLoading(false); // Reset loading state after login attempt
    }
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 text-white">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img alt="Your Company" src={Logo} className="mx-auto h-10 w-auto" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Welcome Back
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-white"
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
                required
                autoComplete="email"
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 px-2 outline-none text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-white"
              >
                Password
              </label>
              <div className="text-sm">
                <Link
                  to={"/forgot-password"}
                  className="font-semibold text-indigo-400 hover:text-indigo-300"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            <div className="mt-2 w-full rounded-md border-0 bg-white/5 py-1.5 px-1.5  text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 flex justify-between items-center">
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
          </div>

          <div>
            <button
              type="submit"
              className={`w-full rounded-md bg-logoColor py-1.5 font-semibold shadow-sm hover:bg-indigo-400 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading} // Disable button when loading
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </div>
        </form>

        <div>
          <div className="mt-2">
            <div className="flex justify-center text-sm font-medium leading-6">
              <span className="px-6 text-base">OR</span>
            </div>
          </div>

          <div className="mt-2 flex justify-center items-center ">
            <GoogleAuth />
          </div>
        </div>

        <p className="mt-3 text-center text-gray-400">
          Do not have an account?{" "}
          <Link
            to={"/sign-up"}
            className="font-semibold leading-6 text-white hover:text-indigo-300"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
