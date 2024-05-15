import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "./model";

function Profile() {
  const navigate = useNavigate();

  function handleSignOut() {
    signOut(auth);
    navigate("/");
  }

  return (
    <div className="App">
      <h2>Another Page</h2>
      <button onClick={handleSignOut}>Log out</button>
    </div>
  );
}

export default Profile;
