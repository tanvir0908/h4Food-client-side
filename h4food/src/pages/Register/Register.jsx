import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../providers/AuthProvider";
import Container from "../../components/Container/Container";
import toast from "react-hot-toast";

export default function Register() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  const [error, setError] = useState(null);
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // Password validation
    if (/^(?=.*[A-Z])(?=.*[\W_]).{6,}$/.test(password)) {
      // Create user
      createUser(email, password)
        .then((result) => {
          // Add username and picture to the firebase
          updateProfile(result.user, {
            displayName: name,
            photoURL: photo,
          });
          //Success message
          toast.success("User created successfully");
          // Reload window
          document.location.reload();
          window.location.reload();
        })
        .catch((error) => console.log(error));
    } else {
      setError(
        "Password should be more than 6 characters with at least 1 capital letter and 1 special character"
      );
    }
  };

  return (
    <Container>
      <div className="bg-rose-200 rounded-xl flex flex-col justify-center h-[85vh]">
        <h2 className="text-5xl font-bold text-primary text-center my-10">
          Please Register
        </h2>
        <form onSubmit={handleRegister} className="md:w-3/4 lg:w-2/6 mx-auto">
          <div className="flex flex-col">
            <span className="text-lg font-medium">Name</span>
            <input
              required
              type="text"
              name="name"
              placeholder="Enter your name"
              className="px-4 py-3 rounded-xl text-lg font-medium"
            />
          </div>
          <div className="flex flex-col my-3">
            <span className="text-lg font-medium">Photo URL</span>
            <input
              required
              type="text"
              name="photo"
              placeholder="Enter your photo URL"
              className="px-4 py-3 rounded-xl text-lg font-medium"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-medium">Email</span>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-xl text-lg font-medium"
              required
            />
          </div>
          <div className="flex flex-col my-3">
            <span className="text-lg font-medium">Password</span>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="px-4 py-3 rounded-xl text-lg font-medium"
              required
            />
          </div>
          <p className="text-center text-red-500 mt-5 text-lg font-medium">
            {error}
          </p>
          <div className="form-control mt-6 ">
            <button className="bg-primary text-white w-full text-lg font-semibold py-3 rounded-xl">
              Register
            </button>
          </div>
        </form>
        <p className="text-center my-5 text-[#706F6F] font-medium">
          Already have an account?{" "}
          <Link className="font-bold text-primary" to={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </Container>
  );
}
