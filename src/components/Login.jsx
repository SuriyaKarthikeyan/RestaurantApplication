import '../App.css';
import Header from './Header.jsx';
import {useState, useRef} from "react";
import  {validateStatus} from "../utils/validate.js";
import {auth,db} from "../utils/firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile   } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import {useDispatch} from "react-redux";
import {addUser} from "../utils/userSlice.js";
import {useNavigate} from "react-router-dom";

 

const Login = () => {
    const [isLoginForm, setLoginForm] = useState(false);
    const [Msg, setMsg] = useState(null);
    const fullname = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const role = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const toggleLoginForm = () => {
        setLoginForm(!isLoginForm);
    }

    const validateForm =  async () => {
        if(!isLoginForm) 
        {
           //It is a Sign Up form
           const returnedMsg = validateStatus(email.current.value,password.current.value,fullname.current.value);
           setMsg(returnedMsg);
           if(!returnedMsg) {
            
                 console.log("Valid Sign Up Form");
                 //If it is a Valid Sign Up form, then do Sign Up Auth using firebase
                  createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);
                //After Successful Signup - Update User's display name inside user object.
                         updateProfile(auth.currentUser, {
                            displayName: fullname.current.value
                        }).then(() => {
                            // Profile updated!
                            console.log("Profile Update");
                            console.log(auth.currentUser);

               
                            // Save role in Firestore 
                             setDoc(doc(db, "users", auth.currentUser.uid), { email: auth.currentUser.email, role: role.current.value });

                             alert("Sign up successful! and role got saved");

                            //Now, we got - email,displayname and password in our currentUser object. Now, store the UID, displayName
                            // and Email ID into Redux store so that we can access it from anywhere.
                            const {uid, email, displayName} = auth.currentUser;
                            dispatch(addUser(
                                {
                                    uid: uid,
                                    email: email,
                                    displayName: displayName,
                                    role : role.current.value
                                }
                            ));
                            navigate("/dashboard");


                        }).catch((error) => {
                            // An error occurred
                            setMsg(error.message);
                        });



                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setMsg(errorMessage);
                    });
              }
        }
        else 
        {
            // It is a Sign In Form
            const returnedMsg = validateStatus(email.current.value,password.current.value);
            setMsg(returnedMsg);
            if(!returnedMsg) {
                 console.log("Valid Sign In Form");
                   const selectedRole = role.current.value;
                 // If it is a valid Sign in form, then do Sign In Auth using firebase.
              await signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                    .then(async (userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                        console.log(user);

                          // Fetch stored role from Firestore
                          const userDoc = await getDoc(doc(db, "users", user.uid));
                          const userData = userDoc.data();

                            if (userData.role !== selectedRole) {
                                setMsg(`Role mismatch. You are registered as a ${userData.role}.`);
                                return;
                            }

                             alert(`Signed in successfully as ${selectedRole}`);

                        // After Successful signin, now store the Email and the role inside redux store.
                           const {uid, email, displayName} = auth.currentUser;
                            dispatch(addUser(
                                {
                                    uid: uid,
                                    email: email,
                                    displayName: displayName,
                                    role : role.current.value
                                }
                            ));
                            navigate("/dashboard");
                    })
                    .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setMsg(errorMessage);
                    });
              }
        }
       
      
    }
    return (
        <>
            <Header context="login"/>
         
            <div className="form-section">
                <form onSubmit={(e)=> e.preventDefault() } className="resForm">
                    <p className="resForm-header"> {isLoginForm ? "Welcome Back" : "Create an Account" } </p>
                    {!isLoginForm && (<input type="text" ref={fullname} className="fullname" placeholder="Enter fullName" />) }
                
                    <input ref={email} type="text" className="email" placeholder="Enter Email Address" />
                    <input ref={password} type="password" className="password" placeholder="Enter Password" />

                    <select ref={role} className="role">
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>
                    <button onClick={validateForm} className="submit-btn">{isLoginForm ? "Sign In" : "Sign Up" }</button>

                    <p onClick={toggleLoginForm} className="resForm-text"> {isLoginForm ? "New User? Create an account" : "Already have an account? Login" } </p>

                    <p className="errorText"> {Msg} </p>
                </form>
            </div>
        </>
    )
};

export default Login;