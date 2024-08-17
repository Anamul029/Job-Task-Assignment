import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import app from "../firebase/firebase.config";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = () => {
    const auth = getAuth(app)
    const navigate=useNavigate();
    const provider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
      signInWithPopup(auth,provider)
      .then(res=>{
        console.log(res.user);
        // alert
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
        navigate('/dummy')
      })
      .catch(error=>{
        console.log(error.message);
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text:`${error.message}`,
          });
      })
    }
    return (
        <div className="mx-auto">
            <button onClick={handleGoogleLogin} className="btn bg-blue-300">
                <FaGoogle></FaGoogle>Google Login
            </button>
        </div>
    );
};

export default SocialLogin;