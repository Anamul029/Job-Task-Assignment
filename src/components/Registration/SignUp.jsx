// import { useContext } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import app from "../firebase/firebase.config";
import Swal from "sweetalert2";
// import { AuthContext } from "../Provider/AuthProvider";

const SignUp = () => {
    const auth=getAuth(app)
    const navigate=useNavigate();
    const handleRegister=(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(name,email,password);
        // sign up
        createUserWithEmailAndPassword(auth,email,password)
        .then(res=>{
            console.log(res.user)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Successfully Register complete",
                showConfirmButton: false,
                timer: 1500
              });
            //   navigate
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
        <div className="hero min-h-screen flex flex-row-reverse justify-evenly bg-blue-50">
        
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                {/* <div className="form-control">
                    <label className="label">
                        <span className="label-text">PhotoURL</span>
                    </label>
                    <input type="text" name="photo" placeholder="photoURL" className="input input-bordered" required />
                </div> */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
                <p className="text-center">Already have an account?please <NavLink to="/login"><span className="font-bold text-green-700 border-b-4">Login</span></NavLink></p>
            </form>

        </div>
        <div>
            <img className="h-[500px] w-[450px]" src="data:image/png;base64,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" alt="" />
        </div>

    </div>
    );
};

export default SignUp;