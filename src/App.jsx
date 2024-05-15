import "./App.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./model";

import {
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

function App() {
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Check if the user is already logged in and update state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedInUser(user);
        console.log("logged in");
      } else {
        setLoggedInUser(null);
        console.log("logged out");
      }
    });

    return () => unsubscribe();
  }, []);

  // CB to sign in
  function handleSignIn() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }

  // Conditional Render of login/profile button
  function renderLoginBTN() {
    if (loggedInUser) {
      return <button onClick={() => navigate("/profile")}>Profile</button>;
    } else {
      return <button onClick={() => handleSignIn()}> Log in</button>;
    }
  }

  return (
    <>
      <nav className="App">
        <li>link 1</li>
        <li>link 2</li>
        <li>link 3</li>
        {renderLoginBTN()}
      </nav>
    </>
  );
}

export default App;