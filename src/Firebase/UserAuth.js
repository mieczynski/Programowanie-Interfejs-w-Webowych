import { auth, firestore } from "./Initialize";
import {
    GoogleAuthProvider,
    FacebookAuthProvider,
    signInWithPopup,
    signOut,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile

} from "firebase/auth";
import {
    setDoc,
    getDoc,
    doc,
    addDoc,
    collection
} from "firebase/firestore";
import {useNavigate} from "react-router-dom";

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export const logInWithGoogle = async () => {
    try {
        const response = await signInWithPopup(auth, googleProvider);
        const user = response.user;

        const q = doc(firestore, "users", user.uid);
        const docs = await getDoc(q);
        if ( ! docs.exists()) {

            await setDoc(q, {
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }

    } catch (err) {
        console.error({err});
        alert(err.message);
    }
};
export const logInWithFacebook = async () => {
    try {
        const response = await signInWithPopup(auth, facebookProvider);
        const user = response.user;

        const q = doc(firestore, "users", user.uid);
        const docs = await getDoc(q);
        if ( ! docs.exists()) {

            await setDoc(q, {
                name: user.displayName,
                authProvider: "facebook",
                email: user.email,
            });
        }

    } catch (err) {
        console.error({err});
        alert(err.message);
    }
}
export const logInWithEmailAndPassword = async (email, password) => {
    try {
        const response = await signInWithEmailAndPassword(auth,email,password);
        const user = response.user;
        console.log(user)

        const q = doc(firestore, "users", user.uid);
        const docs = await getDoc(q);
        if ( ! docs.exists()) {
            await setDoc(q, {
                name: user.displayName,
                authProvider: "local",
                email: user.email,
            });
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};
export const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await updateProfile(user, {
            displayName: name
        })
        await addDoc(collection(firestore, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};
export const logout = () => {
    signOut(auth);

};