// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendEmailVerification , signOut    } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSrsIT_vItQj1vy3E8eWLocA1gjpXEt7g",
  authDomain: "whatsapp-clone-5c435.firebaseapp.com",
  projectId: "whatsapp-clone-5c435",
  storageBucket: "whatsapp-clone-5c435.appspot.com",
  messagingSenderId: "586910136227",
  appId: "1:586910136227:web:cadb26c35608a326a7cc16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(user)
      // ...

      document.querySelectorAll(".container").forEach((con) => {

      !con.classList.contains("auth") ?  con.classList.add("active") : con.classList.remove("active")
        
    })

    } else {

        document.querySelectorAll(".container").forEach((con) => {
 
        con.classList.contains("auth") ?  con.classList.add("active") : con.classList.remove("active")

        })
    }
  });

//END FIREBASE

const toggleRegister = document.querySelector(".toggle-register")
const toggleLogin = document.querySelector(".toggle-login")

toggleRegister.addEventListener( 'click', () => toggleModal("register") )
toggleLogin.addEventListener( 'click', () => toggleModal("login") )

const registerForm = document.querySelector(".registerSubmit")
const loginForm = document.querySelector(".loginSubmit")

registerForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = registerForm.email.value
    const password = registerForm.password.value


    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        sendEmailVerification(auth.currentUser)
        console.log("it works, user", user)
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(error)
      });

})

loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    e.preventDefault()

    const email = registerForm.email.value
    const password = registerForm.password.value

    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        console.log("it works, user", user)
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(error)
      });
})

const logoutButton = document.querySelector(".logout-btn")

logoutButton.addEventListener("click" ,() => {

    signOut(auth)

})

const toggleModal = (modalClass) => {

    const modals = document.querySelectorAll(`.modal`)

    modals.forEach((mod) => {

        if(mod.classList.contains(modalClass)){

            mod.classList.add("active")

        } else {

            mod.classList.remove("active")
        }

    })


}