import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";

const Home = () => {
  const { isAuthenticated } = useAuth0();
  const [initialSetup, setInitialSetup] = useState(false);

  return (
    <>
      {isAuthenticated && initialSetup ? (
        <div className="text-blue-500 dark:text-text-mode-dark text-2xl font-medium">
          Home Page --- You are Logged in and you have completed the initial
          setup
        </div>
      ) : isAuthenticated && !initialSetup ? (
        <>
          <div className="text-blue-500 dark:text-text-mode-dark text-2xl font-medium">
            Home Page --- You are Logged In however you have not completed the
            initial setup
          </div>
          <button
            onClick={() => setInitialSetup(true)}
            className="md:mt-5 md:text-lg md:border-2 md:px-4 md:py-1 md:rounded-lg cursor-pointer primaryButton"
          >
            Complete Setup
          </button>
        </>
      ) : (
        <div className="text-blue-500 dark:text-text-mode-dark text-2xl font-medium">
          Home Page --- Please login to continue
        </div>
      )}
    </>
  );
};

export default Home;
