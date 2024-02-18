import React, { useEffect, useState } from "react";
import { AuthClient } from "@dfinity/auth-client";
import BottomTabNavigator from "./Authenticated";
import Home from "./screens/Home";
import { profile } from "./declarations/profile";
import "./App.css";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

const App: React.FC = () => {
  const [authClient, setAuthClient] = useState<AuthClient | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [isProfile, setIsProfile] = useState<boolean>(false);
  const [userData, setUserData] = useState<any>(null); // Assuming userData structure
  const [name, setName] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(new Date());
  const [height, setHeight] = useState<string>("0");
  const [weight, setWeight] = useState<string>("0");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(true);

  // Define constants
  const DAYS_IN_MILLISECONDS = 24 * 60 * 60 * 1000;
  const DEFAULT_OPTIONS = {
    createOptions: {
      idleOptions: {
        disableIdle: true,
      },
    },
    loginOptions: {
      identityProvider:
        process.env.DFX_NETWORK === "ic"
          ? "https://identity.ic0.app/#authorize"
          : `http://localhost:4943?canisterId=rdmx6-jaaaa-aaaaa-aaadq-cai#authorize`,
      maxTimeToLive: BigInt(DAYS_IN_MILLISECONDS),
    },
  };

  // Initialize AuthClient
  useEffect(() => {
    const initAuthClient = async () => {
      const client = await AuthClient.create(DEFAULT_OPTIONS.createOptions);
      setAuthClient(client);

      // Check if user is already authenticated
      const identity = await client.getIdentity();
      if (identity && identity.getPrincipal().toText() !== "anonymous") {
        setUsername(identity.getPrincipal().toText());
      }
    };

    initAuthClient();
  }, []);

  // useEffect hook for enabling/disabling the submit button
  useEffect(() => {
    // Check if all mandatory fields are filled
    if (name.trim() !== "" && location.trim() !== "" && dateOfBirth !== null) {
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
  }, [name, location, dateOfBirth]);

  // Handle login
  const handleLogin = async () => {
    if (authClient) {
      await authClient.login({
        onSuccess: async () => {
          // Redirect or handle successful login
          console.log("Login successful");
          setIsLoggedIn(true);
          setUsername(authClient.getIdentity()?.getPrincipal().toText() || "");
          const userData = await profile.getUserData(username);
          setIsProfile(userData.length === 0);
          setUserData(userData);
          console.log(userData.length === 0);
          console.log(userData);

          console.log(isProfile);
          console.log(userData.length);
        },
      });
    }
  };

  // Handle logout
  const handleLogout = async () => {
    if (authClient) {
      await authClient.logout();
      setIsLoggedIn(false);
      setUsername("");
    }
  };

  // Handle profile submission
  const handleSetProfile = async () => {
    try {
      // Perform validation
      if (!name.trim() || !location.trim() || !dateOfBirth) {
        throw new Error("All mandatory fields must be filled.");
      }

      // Optionally, validate height and weight as numeric values

      // Call API to set user profile
      await profile.addUserData(
        name,
        username,
        location,
        dateOfBirth.toString(), // Assuming dateOfBirth is stored as a string
        BigInt(height),
        BigInt(weight)
      );

      setIsProfile(false);
      console.log("Profile set successfully.");
    } catch (error) {
      console.error("Error setting profile:");
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <div>
         
          <BottomTabNavigator userName={username} />
          {isProfile && userData && (
            <div className="modal" style={{ display: "block" }}>
              <div className="modal-content">
                <span className="close" onClick={() => setIsProfile(false)}>
                  &times;
                </span>
                <p>Enter Profile Information:</p>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
               

                <input
                  type="text"
                  placeholder="Height (optional)"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Weight (optional)"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
                <button onClick={handleSetProfile} disabled={isSubmitDisabled}>
                  Set Profile
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <>
          <Home onLogin={handleLogin} />
        </>
      )}
    </>
  );
};

export default App;




