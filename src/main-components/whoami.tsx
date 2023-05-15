import React from "react"
import GoogleIcon from "../assets/googlelogo.png"
import { useAuthState  } from "react-firebase-hooks/auth"
import { signInWithPopup, signOut } from "firebase/auth"
import { auth, provider } from "../config/firebase"

const WhoAmI = () => {
    const [user] = useAuthState(auth);

    const signIn = async () => {
        await signInWithPopup(auth, provider);
        console.log('signin successfull');
    }

    const SignOutUser = async () => {
        await signOut(auth);
        console.log('siggned out')
    }

    return(
        <div className="whoami-container">
            {
                !user ?
                <>
                <h1>Who am i</h1>
                <button onClick={signIn}><img src = {GoogleIcon} alt = "google-icon" />Signin with Google</button>
                </> : <>
                    <h1>Welcome,</h1>
                    <h1 style = {{
                        textAlign: "center",
                    }}>{auth?.currentUser?.displayName}</h1>
                    <button onClick={SignOutUser}>Logout</button>
                </>
            }
        </div>
    )
}

export default WhoAmI