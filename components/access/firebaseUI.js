import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/app";
import "firebase/auth";

import { firebaseClient } from "../../util/auth/firebase-client";

export default function FirebaseUI() {
  const firebaseAuthConfig = {
    signInFlow: "redirect",
    signInOptions: [
      {
        provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        requireDisplayName: true,
        customParameters: {
          prompt: "select_account",
        },
      },
      {
        provider: firebase.auth.GithubAuthProvider.PROVIDER_ID,
        requireDisplayName: true,
      },
    ],
    signInSuccessUrl: "/",
  };

  return (
    <div>
      {firebaseClient.apps.length > 0 && (
        <StyledFirebaseAuth
          uiConfig={firebaseAuthConfig}
          firebaseAuth={firebaseClient.auth()}
          id="firebaseui-container"
        />
      )}
    </div>
  );
}
