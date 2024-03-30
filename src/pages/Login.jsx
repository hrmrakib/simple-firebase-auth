import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => console.log(error));
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result);
        setUser(result.user);
      })
      .catch((error) => console.log(error));
  };

  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch((err) => console.log(err));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        setUser(null);
        console.log(result.user);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {user ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <>
          <button onClick={handleGoogleSignIn}>Google Login</button>
          <button onClick={handleGithubSignIn}>GitHub Login</button>
          <button onClick={handleFacebookSignIn}>Facebook Login</button>
        </>
      )}
      {user && (
        <div>
          <h2>Name: {user.displayName}</h2>
          <h3>Email: {user?.email}</h3>
          <img src={user.photoURL} alt='' />
        </div>
      )}
    </div>
  );
};

export default Login;
