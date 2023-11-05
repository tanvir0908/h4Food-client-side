import { useContext, useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import Container from "../../components/Container/Container";

export default function Login() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  const location = useLocation();
  const { loginUser, googleLogin } = useContext(AuthContext);
  const [loginError, setLoginError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    const toastLoading = toast.loading('Logging in...')

    loginUser(email, password)
      .then((result) => {
        navigate(location?.state ? location.state : "/");
        console.log(result.user);
        // setTimeout(() => {}, 200);

        //Success message
        toast.success("Logged in successfully", { id: toastLoading });
      })
      .catch((error) => {
        console.log(error);
        setLoginError("Invalid email and password");
      });
  };

  const loginWithGoogle = () => {
    const toastLoading = toast.loading("Logging in...");
    googleLogin()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
        // setTimeout(() => {}, 200);

        //Success message
        toast.success("Logged in successfully", { id: toastLoading });
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <div className="flex flex-col mb-12 justify-center pb-20 rounded-xl bg-rose-200 h-[85vh]">
        <h2 className="text-4xl lg:text-5xl font-bold text-primary text-center my-10">
          Please Login
        </h2>
        <form
          onSubmit={handleLogin}
          className="px-5 md:px-0 w-full md:w-3/4 lg:w-2/6 mx-auto"
        >
          <div className="flex flex-col">
            <span className="text-lg font-medium">Email</span>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-xl outline-none border-2 border-primary text-lg font-medium"
              required
            />
          </div>
          <div className="flex flex-col my-3">
            <span className="text-lg font-medium">Password</span>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="px-4 py-3 rounded-xl text-lg font-medium outline-none border-2 border-primary"
              required
            />
          </div>
          <p className="text-center text-red-500 mt-5 text-lg font-medium">
            {loginError}
          </p>
          <div className="form-control mt-6 ">
            <button className="bg-primary border-2 border-primary text-white w-full text-lg font-semibold py-3 rounded-xl">
              Login
            </button>
          </div>
        </form>
        <p className="text-center my-5 text-[#706F6F] font-medium">
          Do not have an account?{" "}
          <Link className="font-bold text-primary" to={"/register"}>
            Register
          </Link>
        </p>
        <div className="flex justify-center items-center">
          <button
            onClick={loginWithGoogle}
            className="flex text-primary items-center px-5 py-2 rounded-lg gap-2 text-lg font-medium border-2 border-primary"
          >
            <FcGoogle className="text-3xl" />
            Login with Google
          </button>
        </div>
      </div>
    </Container>
  );
}
