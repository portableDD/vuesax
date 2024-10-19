import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate()

  const onChange = (e) => setEmail(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Email was sent");
      navigate('/')
    } catch (error) {
      const errorMessage = error.message;
      toast.error("Could not send reset email", errorMessage);
    }
  };
  return (
    <div className="min-h-screen bg-mainBgColor">
      <div className="flex min-h-full flex-1 flex-col justify-center gap-3 py-12 sm:px-6 lg:px-8 text-white">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm px-3 sm:px-0">
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight">
            Forgot Password
          </h2>
          <div className="mt-2">
            <form onSubmit={onSubmit}>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-white"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
                required
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 px-2 outline-none text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              />
              <div className="text-sm w-full text-center mt-3">
                <div className="">Send Reset Link</div>
                <button className="bg-logoColor hover:bg-indigo-400 rounded-md w-full py-2 font-semibold ">
                  Submit
                </button>
              </div>
            </form>
            <div className="mt-3">
              <Link className=" hover:text-white/25" to="/">
                Sign In instead
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
