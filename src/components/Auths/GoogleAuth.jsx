import { useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase.config";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const GoogleAuth = () => {
  const navigate = useNavigate();

  const onGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check for user
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      // If user, doesn't exist, create user
      if (!docSnap.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          fullName: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      toast.success("Welcome Back");
      navigate("/layouts");
    } catch (error) {
      const errorMessage = error.message;
      toast.error(errorMessage);
    }
  };
  return (
    <button className=" px-3 py-2 font-semibold" onClick={onGoogleClick}>
      <FcGoogle className="text-5xl" />
    </button>
  );
};

export default GoogleAuth;
