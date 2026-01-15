import { useContext, useState } from "react";
import assets from "../assets/assets";
import { AuthContext } from "../../context/AuthContext";

const LoginPage = () => {
  const [currState, setCurrentState] = useState("Sign up");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);

  const { login } = useContext(AuthContext);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (currState === "Sign up" && !isDataSubmitted) {
      setIsDataSubmitted(true);
      return;
    }

    login(currState === "Sign up" ? "signup" : "login", {
      fullName,
      email,
      password,
      bio,
    });
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 backdrop-blur-2xl">
      <div className="flex w-full max-w-4xl items-center justify-between gap-10 max-md:flex-col">

        {/* -------- Left Section -------- */}
        <img
          src={assets.logo_big}
          alt="Application Logo"
          className="w-[min(30vw,220px)] select-none"
        />

        {/* -------- Right Section -------- */}
        <form
          onSubmit={onSubmitHandler}
          className="w-full max-w-md rounded-xl border border-white/20 bg-white/10 p-6 text-white shadow-xl backdrop-blur-xl"
        >
          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-semibold tracking-wide">
              {currState}
            </h2>

            {isDataSubmitted && (
              <img
                src={assets.arrow_icon}
                alt="Go Back"
                onClick={() => setIsDataSubmitted(false)}
                className="w-5 cursor-pointer opacity-80 hover:opacity-100 transition"
              />
            )}
          </div>

          {/* Step 1 Inputs */}
          {currState === "Sign up" && !isDataSubmitted && (
            <div className="flex flex-col gap-4">
              <div>
                <label className="text-sm text-gray-300">Full Name</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="John Doe"
                  required
                  className="mt-1 w-full rounded-md border border-gray-500 bg-transparent p-2 outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>
            </div>
          )}

          {!isDataSubmitted && (
            <div className="mt-4 flex flex-col gap-4">
              <div>
                <label className="text-sm text-gray-300">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="mt-1 w-full rounded-md border border-gray-500 bg-transparent p-2 outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-300">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="mt-1 w-full rounded-md border border-gray-500 bg-transparent p-2 outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>
            </div>
          )}

          {/* Step 2 Bio */}
          {currState === "Sign up" && isDataSubmitted && (
            <div className="mt-4">
              <label className="text-sm text-gray-300">Short Bio</label>
              <textarea
                rows={4}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Tell us something about yourself..."
                required
                className="mt-1 w-full rounded-md border border-gray-500 bg-transparent p-2 outline-none focus:ring-2 focus:ring-violet-500 resize-none"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 w-full rounded-md bg-gradient-to-r from-purple-500 to-violet-600 py-3 font-medium text-white transition hover:scale-[1.02] active:scale-95"
          >
            {currState === "Sign up" ? "Create Account" : "Login Now"}
          </button>

          {/* Terms */}
          <div className="mt-4 flex items-start gap-2 text-sm text-gray-300">
            <input type="checkbox" className="mt-1" />
            <p>
              I agree to the <span className="underline">Terms</span> &{" "}
              <span className="underline">Privacy Policy</span>
            </p>
          </div>

          {/* Switch Auth Mode */}
          <div className="mt-4 text-center text-sm text-gray-300">
            {currState === "Sign up" ? (
              <>
                Already have an account?{" "}
                <span
                  onClick={() => {
                    setCurrentState("Login");
                    setIsDataSubmitted(false);
                  }}
                  className="cursor-pointer font-medium text-violet-400 hover:underline"
                >
                  Login here
                </span>
              </>
            ) : (
              <>
                New here?{" "}
                <span
                  onClick={() => setCurrentState("Sign up")}
                  className="cursor-pointer font-medium text-violet-400 hover:underline"
                >
                  Create an account
                </span>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
