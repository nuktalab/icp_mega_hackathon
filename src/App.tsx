import React, { useEffect, useState } from "react";
import { AuthClient } from "@dfinity/auth-client";

const MyComponent: React.FC = () => {
  const [authClient, setAuthClient] = useState<AuthClient | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");

  // Define constants
  const days: bigint = BigInt(1);
  const hours: bigint = BigInt(24);
  const nanoseconds: bigint = BigInt(3600000000000);

  // Define default options
  const defaultOptions = {
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
      maxTimeToLive: days * hours * nanoseconds,
    },
  };

  // Initialize AuthClient
  useEffect(() => {
    const initAuthClient = async () => {
      const client = await AuthClient.create(defaultOptions.createOptions);
      setAuthClient(client);

      // Check if user is already authenticated
      const identity = await client.getIdentity();
      if (identity) {
        setIsLoggedIn(true);
        setUsername(identity.getPrincipal().toText());
      }
    };

    initAuthClient();
  }, []);

  // Handle login
  const handleLogin = async () => {
    if (authClient) {
      await authClient.login({
        onSuccess: () => {
          // Redirect or handle successful login
          console.log("Login successful");
          setIsLoggedIn(true);
          setUsername(authClient.getIdentity()?.getPrincipal().toText() || "");
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

  // Render UI
  return (
    <div>
      <h1>Welcome to My App</h1>
      {isLoggedIn ? (
        <div>
          <p>Logged in as {username}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login with Internet Identity</button>
      )}
    </div>
  );
};

export default MyComponent;
