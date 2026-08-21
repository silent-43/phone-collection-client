import "./App.css";
import { useState } from "react";
import PhonesCollection from "./components/PhonesCollection";

const phonesPromise = fetch(
  "https://phone-collection-backend.onrender.com/phones",
).then((res) => res.json());

function App() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      {/* My Profile Shortcut */}
      <div className="fixed top-5 right-5 z-50">
        <button
          onClick={() => setShowProfile(!showProfile)}
          className="flex items-center gap-2 rounded-full border border-primary/30 bg-base-100 px-3 py-2 font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-primary/30"
        >
          {/* Profile Image */}
          <img
            src="/profile.jpg"
            alt="Sohag Karmokar"
            className="h-9 w-9 rounded-full object-cover ring-2 ring-primary"
          />

          <span className="hidden sm:block">✨ My Profile</span>
        </button>

        {/* Profile Card */}
        {showProfile && (
          <div className="absolute right-0 mt-3 w-80 rounded-2xl border border-primary/20 bg-base-100 p-5 shadow-2xl">
            <div className="text-center">
              {/* Profile Image */}
              <div className="mx-auto mb-4">
                <img
                  src="/profile.jpg"
                  alt="Sohag Karmokar"
                  className="mx-auto h-24 w-24 rounded-full object-cover ring-4 ring-primary/30 shadow-xl"
                />
              </div>

              {/* Name */}
              <h2 className="text-xl font-bold">Sohag Karmokar</h2>

              {/* Title */}
              <p className="mt-1 text-sm font-semibold text-primary">
                SK | Engineering • Full Stack
              </p>

              <div className="my-4 border-t border-base-300"></div>

              {/* Short Introduction */}
              <p className="text-sm leading-6 opacity-80">
                Building modern web applications with clean, scalable and
                user-friendly solutions.
              </p>

              {/* Current Project */}
              <p className="mt-3 text-sm font-semibold text-primary">
                🚀 Phone Collection
              </p>

              {/* Buttons */}
              <div className="mt-5 flex gap-2">
                <a
                  href="https://github.com/silent-43"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-primary flex-1"
                >
                  GitHub
                </a>

                <button
                  onClick={() => setShowProfile(false)}
                  className="btn btn-sm btn-outline flex-1"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Phone Collection */}
      <PhonesCollection phonesPromise={phonesPromise} />
    </>
  );
}

export default App;
